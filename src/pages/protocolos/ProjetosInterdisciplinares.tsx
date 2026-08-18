import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Layers, Plus, Filter, Settings2 } from "lucide-react";
import { DISCIPLINAS_EDITAL, gerarFasesIniciais } from "@/data/projetoInterdisciplinarFases";

type Projeto = {
  id: string;
  nome: string;
  tema: string | null;
  mini_mundo: string | null;
  disciplinas: string[];
  edital_ref: string | null;
  status: string;
  created_at: string;
  semestre?: string | null;
  config_id?: string | null;
};

type Config = {
  id: string; nome: string; semestre: string; disciplinas: string[];
  edital_ref: string | null; ativa: boolean;
};

const STATUS = ["proposto", "aprovado", "em_andamento", "concluido"] as const;
const STATUS_LABEL: Record<string, string> = {
  proposto: "Proposto", aprovado: "Aprovado", em_andamento: "Em andamento", concluido: "Concluído",
};
const STATUS_COLOR: Record<string, string> = {
  proposto: "bg-slate-500", aprovado: "bg-blue-500", em_andamento: "bg-amber-500", concluido: "bg-emerald-600",
};

const emptyForm = {
  nome: "", tema: "", mini_mundo: "",
  disciplinas: [] as string[], edital_ref: "Edital Interdisciplinar 2026.2",
  configId: "",
};

export default function ProjetosInterdisciplinares() {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [configs, setConfigs] = useState<Config[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [filtroDisc, setFiltroDisc] = useState<string>("todas");
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");

  useEffect(() => { if (!loading && !user) navigate("/protocolos/login"); }, [loading, user, navigate]);

  const load = async () => {
    const [p, c] = await Promise.all([
      supabase.from("projetos_interdisciplinares").select("*").order("created_at", { ascending: false }),
      supabase.from("pi_configuracoes").select("id,nome,semestre,disciplinas,edital_ref,ativa")
        .eq("ativa", true).order("created_at", { ascending: false }),
    ]);
    setProjetos((p.data ?? []) as any);
    setConfigs((c.data ?? []) as any);
  };
  useEffect(() => { if (user) load(); }, [user]);

  const configSel = configs.find((c) => c.id === form.configId) ?? null;

  const toggleDisciplina = (d: string) => {
    setForm((f) => ({
      ...f,
      disciplinas: f.disciplinas.includes(d) ? f.disciplinas.filter((x) => x !== d) : [...f.disciplinas, d],
    }));
  };

  const criar = async () => {
    const disciplinas = configSel ? configSel.disciplinas : form.disciplinas;
    if (!form.nome || disciplinas.length === 0) {
      return toast({ title: "Nome e ao menos uma disciplina são obrigatórios", variant: "destructive" });
    }
    const { data, error } = await supabase
      .from("projetos_interdisciplinares")
      .insert({
        nome: form.nome, tema: form.tema || null, mini_mundo: form.mini_mundo || null,
        disciplinas, edital_ref: (configSel?.edital_ref ?? form.edital_ref) || null,
        config_id: configSel?.id ?? null, semestre: configSel?.semestre ?? null,
        criado_por: user!.id,
      })
      .select().single();
    if (error || !data) return toast({ title: "Erro", description: error?.message, variant: "destructive" });

    // Gera a tabela de avaliação: fases da configuração do semestre (ou do edital padrão)
    let fases: Array<{ disciplina: string; fase_num: number; descricao: string; data_limite: string | null; pontos_max: number }> = [];
    if (configSel) {
      const { data: cf } = await supabase.from("pi_config_fases").select("*").eq("config_id", configSel.id);
      fases = (cf ?? []).map((f: any) => ({
        disciplina: f.disciplina, fase_num: f.fase_num, descricao: f.descricao,
        data_limite: f.data_limite, pontos_max: Number(f.pontos_max ?? 0),
      }));
    } else {
      fases = gerarFasesIniciais(disciplinas);
    }
    const rows = fases.map((f) => ({ ...f, projeto_id: data.id }));
    if (rows.length) await supabase.from("projeto_fases").insert(rows);

    toast({ title: "Grupo criado", description: `${rows.length} fases geradas na tabela de avaliação.` });
    setOpen(false); setForm(emptyForm); load();
    navigate(`/protocolos/interdisciplinar/${data.id}`);
  };

  const filtrados = projetos.filter((p) =>
    (filtroDisc === "todas" || p.disciplinas.includes(filtroDisc)) &&
    (filtroStatus === "todos" || p.status === filtroStatus)
  );

  if (loading) return null;

  return (
    <main className="min-h-screen bg-background">
      <MainNavigation />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-7 h-7 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Projeto Interdisciplinar</h1>
            </div>
            <p className="text-muted-foreground">
              Cadastre os grupos e vincule-os à configuração do semestre — a tabela de avaliação
              (fases, prazos e pontuação) é gerada automaticamente.
            </p>
          </div>
          <div className="flex gap-2">
            {isAdmin && (
              <Button variant="outline" onClick={() => navigate("/protocolos/interdisciplinar/config")}>
                <Settings2 className="w-4 h-4 mr-2" />Configuração do semestre
              </Button>
            )}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button><Plus className="w-4 h-4 mr-2" />Novo Grupo</Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
                <DialogHeader><DialogTitle>Novo grupo do Projeto Interdisciplinar</DialogTitle></DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Configuração do semestre</Label>
                    <Select value={form.configId || "nenhuma"}
                      onValueChange={(v) => setForm({ ...form, configId: v === "nenhuma" ? "" : v })}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nenhuma">Sem configuração (definir manualmente)</SelectItem>
                        {configs.map((c) => (
                          <SelectItem key={c.id} value={c.id}>{c.nome} · {c.semestre}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {configSel && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Disciplinas: {configSel.disciplinas.join(", ")} — as fases desta configuração
                        serão copiadas para o grupo.
                      </p>
                    )}
                  </div>
                  <div><Label>Nome do grupo *</Label>
                    <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
                  </div>
                  <div><Label>Tema</Label>
                    <Input value={form.tema} onChange={(e) => setForm({ ...form, tema: e.target.value })} />
                  </div>
                  <div><Label>Mini-mundo (contexto do problema)</Label>
                    <Textarea rows={4} value={form.mini_mundo} onChange={(e) => setForm({ ...form, mini_mundo: e.target.value })} />
                  </div>
                  {!configSel && (
                    <>
                      <div>
                        <Label>Disciplinas envolvidas *</Label>
                        <div className="flex gap-4 mt-2">
                          {DISCIPLINAS_EDITAL.map((d) => (
                            <label key={d} className="flex items-center gap-2 cursor-pointer">
                              <Checkbox checked={form.disciplinas.includes(d)} onCheckedChange={() => toggleDisciplina(d)} />
                              <span>{d}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div><Label>Referência do edital</Label>
                        <Input value={form.edital_ref} onChange={(e) => setForm({ ...form, edital_ref: e.target.value })} />
                      </div>
                    </>
                  )}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                  <Button onClick={criar}>Criar grupo</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="py-4 flex flex-wrap items-center gap-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <Label className="text-xs">Disciplina:</Label>
              <Select value={filtroDisc} onValueChange={setFiltroDisc}>
                <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  {DISCIPLINAS_EDITAL.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-xs">Status:</Label>
              <Select value={filtroStatus} onValueChange={setFiltroStatus}>
                <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  {STATUS.map((s) => <SelectItem key={s} value={s}>{STATUS_LABEL[s]}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          {filtrados.map((p) => (
            <Link key={p.id} to={`/protocolos/interdisciplinar/${p.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{p.nome}</CardTitle>
                    <Badge className={`${STATUS_COLOR[p.status]} text-white`}>{STATUS_LABEL[p.status]}</Badge>
                  </div>
                  {p.tema && <p className="text-sm text-muted-foreground">{p.tema}</p>}
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex flex-wrap gap-1">
                    {p.disciplinas.map((d) => (
                      <Badge key={d} variant="outline">{d}</Badge>
                    ))}
                  </div>
                  {p.mini_mundo && <p className="text-muted-foreground line-clamp-3">{p.mini_mundo}</p>}
                </CardContent>
              </Card>
            </Link>
          ))}
          {filtrados.length === 0 && (
            <p className="col-span-2 text-center text-muted-foreground py-12">
              Nenhum projeto cadastrado ainda.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
