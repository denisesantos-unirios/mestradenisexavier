import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Settings2, Plus, Trash2, Save, ArrowLeft, Users, Layers, CalendarDays, CheckCircle2,
} from "lucide-react";
import { DISCIPLINAS_EDITAL, FASES_POR_DISCIPLINA } from "@/data/projetoInterdisciplinarFases";

type Config = {
  id: string;
  nome: string;
  semestre: string;
  disciplinas: string[];
  edital_ref: string | null;
  descricao: string | null;
  ativa: boolean;
};
type ConfigFase = {
  id: string;
  config_id: string;
  disciplina: string;
  fase_num: number;
  descricao: string;
  data_limite: string | null;
  pontos_max: number;
};
type Grupo = {
  id: string;
  nome: string;
  tema: string | null;
  status: string;
  config_id: string | null;
  semestre: string | null;
};

const emptyConfig = {
  nome: "",
  semestre: "2026.2",
  disciplinas: [] as string[],
  edital_ref: "Edital Interdisciplinar",
  descricao: "",
  carregarPadrao: true,
};

export default function ConfiguracaoInterdisciplinar() {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [configs, setConfigs] = useState<Config[]>([]);
  const [selId, setSelId] = useState<string | null>(null);
  const [fases, setFases] = useState<ConfigFase[]>([]);
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyConfig);
  const [novaDisc, setNovaDisc] = useState("");
  const [novoGrupo, setNovoGrupo] = useState({ nome: "", tema: "" });

  const sel = useMemo(() => configs.find((c) => c.id === selId) ?? null, [configs, selId]);

  useEffect(() => { if (!loading && !user) navigate("/protocolos/login"); }, [loading, user, navigate]);

  const loadConfigs = async () => {
    const { data } = await supabase
      .from("pi_configuracoes").select("*")
      .order("created_at", { ascending: false });
    setConfigs((data ?? []) as any);
  };

  const loadDetalhe = async (cid: string) => {
    const [f, g] = await Promise.all([
      supabase.from("pi_config_fases").select("*").eq("config_id", cid)
        .order("disciplina").order("fase_num"),
      supabase.from("projetos_interdisciplinares").select("id,nome,tema,status,config_id,semestre")
        .eq("config_id", cid).order("nome"),
    ]);
    setFases((f.data ?? []) as any);
    setGrupos((g.data ?? []) as any);
  };

  useEffect(() => { if (user) loadConfigs(); }, [user]);
  useEffect(() => { if (selId) loadDetalhe(selId); }, [selId]);

  const toggleDisc = (d: string) =>
    setForm((f) => ({
      ...f,
      disciplinas: f.disciplinas.includes(d) ? f.disciplinas.filter((x) => x !== d) : [...f.disciplinas, d],
    }));

  const addDiscLivre = () => {
    const d = novaDisc.trim();
    if (!d) return;
    setForm((f) => (f.disciplinas.includes(d) ? f : { ...f, disciplinas: [...f.disciplinas, d] }));
    setNovaDisc("");
  };

  const criarConfig = async () => {
    if (!form.nome || !form.semestre || form.disciplinas.length === 0) {
      return toast({ title: "Informe nome, semestre e ao menos uma disciplina", variant: "destructive" });
    }
    const { data, error } = await supabase.from("pi_configuracoes").insert({
      nome: form.nome, semestre: form.semestre, disciplinas: form.disciplinas,
      edital_ref: form.edital_ref || null, descricao: form.descricao || null,
      criado_por: user!.id,
    }).select().single();
    if (error || !data) return toast({ title: "Erro", description: error?.message, variant: "destructive" });

    if (form.carregarPadrao) {
      const rows = form.disciplinas.flatMap((d) =>
        (FASES_POR_DISCIPLINA[d as keyof typeof FASES_POR_DISCIPLINA] ?? []).map((f) => ({
          config_id: data.id, disciplina: d, fase_num: f.fase_num,
          descricao: f.descricao, data_limite: f.data_limite, pontos_max: f.pontos_max,
        }))
      );
      if (rows.length) await supabase.from("pi_config_fases").insert(rows);
    }

    toast({ title: "Configuração criada" });
    setOpen(false); setForm(emptyConfig);
    await loadConfigs();
    setSelId(data.id);
  };

  const salvarConfig = async () => {
    if (!sel) return;
    const { error } = await supabase.from("pi_configuracoes").update({
      nome: sel.nome, semestre: sel.semestre, disciplinas: sel.disciplinas,
      edital_ref: sel.edital_ref, descricao: sel.descricao, ativa: sel.ativa,
    }).eq("id", sel.id);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    toast({ title: "Configuração salva" });
    loadConfigs();
  };

  const excluirConfig = async (cid: string) => {
    await supabase.from("pi_configuracoes").delete().eq("id", cid);
    if (selId === cid) setSelId(null);
    loadConfigs();
    toast({ title: "Configuração excluída" });
  };

  const updateSel = (patch: Partial<Config>) =>
    setConfigs((cs) => cs.map((c) => (c.id === selId ? { ...c, ...patch } : c)));

  // ----- fases da configuração -----
  const addFase = async (disciplina: string) => {
    if (!selId) return;
    const num = Math.max(0, ...fases.filter((f) => f.disciplina === disciplina).map((f) => f.fase_num)) + 1;
    const { error } = await supabase.from("pi_config_fases").insert({
      config_id: selId, disciplina, fase_num: num, descricao: "Nova entrega", pontos_max: 0,
    });
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    loadDetalhe(selId);
  };
  const updateFase = (fid: string, patch: Partial<ConfigFase>) =>
    setFases((fs) => fs.map((f) => (f.id === fid ? { ...f, ...patch } : f)));
  const salvarFase = async (f: ConfigFase) => {
    const { error } = await supabase.from("pi_config_fases").update({
      descricao: f.descricao, data_limite: f.data_limite || null,
      pontos_max: f.pontos_max, fase_num: f.fase_num,
    }).eq("id", f.id);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    toast({ title: `Fase ${f.fase_num} salva` });
  };
  const removerFase = async (fid: string) => {
    await supabase.from("pi_config_fases").delete().eq("id", fid);
    if (selId) loadDetalhe(selId);
  };

  // ----- grupos vinculados -----
  const criarGrupo = async () => {
    if (!sel || !novoGrupo.nome) return toast({ title: "Informe o nome do grupo", variant: "destructive" });
    const { data, error } = await supabase.from("projetos_interdisciplinares").insert({
      nome: novoGrupo.nome, tema: novoGrupo.tema || null,
      disciplinas: sel.disciplinas, edital_ref: sel.edital_ref,
      config_id: sel.id, semestre: sel.semestre, criado_por: user!.id,
    }).select().single();
    if (error || !data) return toast({ title: "Erro", description: error?.message, variant: "destructive" });

    const rows = fases.map((f) => ({
      projeto_id: data.id, disciplina: f.disciplina, fase_num: f.fase_num,
      descricao: f.descricao, data_limite: f.data_limite, pontos_max: f.pontos_max,
    }));
    if (rows.length) await supabase.from("projeto_fases").insert(rows);

    toast({
      title: "Grupo vinculado",
      description: `${rows.length} fases geradas na tabela de avaliação do grupo.`,
    });
    setNovoGrupo({ nome: "", tema: "" });
    loadDetalhe(sel.id);
  };

  const ressincronizar = async (grupoId: string) => {
    if (!sel) return;
    await supabase.from("projeto_fases").delete().eq("projeto_id", grupoId);
    const rows = fases.map((f) => ({
      projeto_id: grupoId, disciplina: f.disciplina, fase_num: f.fase_num,
      descricao: f.descricao, data_limite: f.data_limite, pontos_max: f.pontos_max,
    }));
    if (rows.length) await supabase.from("projeto_fases").insert(rows);
    toast({ title: "Tabela de avaliação regerada", description: `${rows.length} fases.` });
  };

  const fasesPorDisc = useMemo(() => {
    const g: Record<string, ConfigFase[]> = {};
    (sel?.disciplinas ?? []).forEach((d) => (g[d] = []));
    fases.forEach((f) => { (g[f.disciplina] ??= []).push(f); });
    return g;
  }, [fases, sel]);

  const totalPontos = useMemo(
    () => fases.reduce((s, f) => s + Number(f.pontos_max ?? 0), 0),
    [fases]
  );

  if (loading) return null;

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-background">
        <MainNavigation />
        <div className="max-w-xl mx-auto pt-32 px-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Acesso restrito</h1>
          <p className="text-muted-foreground">Somente a administradora pode configurar o projeto do semestre.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <MainNavigation />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <Button variant="ghost" onClick={() => navigate("/protocolos/interdisciplinar")} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar aos grupos
        </Button>

        <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Settings2 className="w-7 h-7 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Configuração do Projeto Interdisciplinar</h1>
            </div>
            <p className="text-muted-foreground">
              Defina o projeto do semestre, as disciplinas participantes e as fases de entrega com pontuação.
              Depois cadastre os grupos: a tabela de avaliação é gerada automaticamente para cada um.
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button><Plus className="w-4 h-4 mr-2" />Nova configuração</Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader><DialogTitle>Nova configuração de semestre</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <div><Label>Nome do projeto *</Label>
                    <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Ex.: Projeto Integrador 2026.2" />
                  </div>
                  <div><Label>Semestre letivo *</Label>
                    <Input value={form.semestre} onChange={(e) => setForm({ ...form, semestre: e.target.value })}
                      placeholder="2026.2" />
                  </div>
                </div>
                <div>
                  <Label>Disciplinas participantes *</Label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {DISCIPLINAS_EDITAL.map((d) => (
                      <label key={d} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox checked={form.disciplinas.includes(d)} onCheckedChange={() => toggleDisc(d)} />
                        <span>{d}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Input value={novaDisc} onChange={(e) => setNovaDisc(e.target.value)}
                      placeholder="Outra disciplina (ex.: Estrutura de Dados)" />
                    <Button type="button" variant="outline" onClick={addDiscLivre}>Adicionar</Button>
                  </div>
                  {form.disciplinas.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {form.disciplinas.map((d) => <Badge key={d} variant="outline">{d}</Badge>)}
                    </div>
                  )}
                </div>
                <div><Label>Referência do edital</Label>
                  <Input value={form.edital_ref} onChange={(e) => setForm({ ...form, edital_ref: e.target.value })} />
                </div>
                <div><Label>Descrição / orientações</Label>
                  <Textarea rows={3} value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <Checkbox checked={form.carregarPadrao}
                    onCheckedChange={(v) => setForm({ ...form, carregarPadrao: !!v })} />
                  Pré-carregar as fases padrão do edital (BD, ES II, LP II)
                </label>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                <Button onClick={criarConfig}>Criar configuração</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Lista de configurações */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {configs.map((c) => (
            <Card key={c.id}
              className={`cursor-pointer transition-shadow hover:shadow-lg ${selId === c.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelId(c.id)}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{c.nome}</CardTitle>
                  <Badge variant={c.ativa ? "default" : "outline"}>{c.semestre}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="flex flex-wrap gap-1">
                  {c.disciplinas.map((d) => <Badge key={d} variant="outline">{d}</Badge>)}
                </div>
                {c.edital_ref && <p className="text-xs text-muted-foreground">{c.edital_ref}</p>}
              </CardContent>
            </Card>
          ))}
          {configs.length === 0 && (
            <p className="md:col-span-3 text-center text-muted-foreground py-10">
              Nenhuma configuração criada. Comece por “Nova configuração”.
            </p>
          )}
        </div>

        {sel && (
          <div className="space-y-6">
            {/* Dados da configuração */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" /> Dados do projeto do semestre
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-3">
                  <div><Label>Nome</Label>
                    <Input value={sel.nome} onChange={(e) => updateSel({ nome: e.target.value })} />
                  </div>
                  <div><Label>Semestre</Label>
                    <Input value={sel.semestre} onChange={(e) => updateSel({ semestre: e.target.value })} />
                  </div>
                  <div><Label>Situação</Label>
                    <Select value={sel.ativa ? "1" : "0"} onValueChange={(v) => updateSel({ ativa: v === "1" })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Ativa (aceita novos grupos)</SelectItem>
                        <SelectItem value="0">Encerrada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div><Label>Referência do edital</Label>
                  <Input value={sel.edital_ref ?? ""} onChange={(e) => updateSel({ edital_ref: e.target.value })} />
                </div>
                <div><Label>Descrição / orientações</Label>
                  <Textarea rows={3} value={sel.descricao ?? ""} onChange={(e) => updateSel({ descricao: e.target.value })} />
                </div>
                <div>
                  <Label>Disciplinas participantes</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {sel.disciplinas.map((d) => (
                      <Badge key={d} variant="outline" className="gap-2 py-1">
                        {d}
                        <button className="text-destructive"
                          onClick={() => updateSel({ disciplinas: sel.disciplinas.filter((x) => x !== d) })}>×</button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-3 max-w-md">
                    <Input value={novaDisc} onChange={(e) => setNovaDisc(e.target.value)} placeholder="Adicionar disciplina" />
                    <Button variant="outline" onClick={() => {
                      const d = novaDisc.trim();
                      if (d && !sel.disciplinas.includes(d)) updateSel({ disciplinas: [...sel.disciplinas, d] });
                      setNovaDisc("");
                    }}>Adicionar</Button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={salvarConfig}><Save className="w-4 h-4 mr-2" />Salvar configuração</Button>
                  <Button variant="outline" className="text-destructive" onClick={() => excluirConfig(sel.id)}>
                    <Trash2 className="w-4 h-4 mr-2" />Excluir
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fases */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-between flex-wrap">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="w-5 h-5 text-primary" /> Fases de entrega e pontuação
                  </span>
                  <Badge variant="outline">Total: {totalPontos.toFixed(1)} pts</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(fasesPorDisc).map(([disc, fs]) => (
                  <div key={disc} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{disc}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {fs.reduce((s, f) => s + Number(f.pontos_max ?? 0), 0).toFixed(1)} pts
                        </Badge>
                        <Button size="sm" variant="outline" onClick={() => addFase(disc)}>
                          <Plus className="w-4 h-4 mr-1" />Fase
                        </Button>
                      </div>
                    </div>
                    {fs.length === 0 && (
                      <p className="text-sm text-muted-foreground">Nenhuma fase cadastrada para esta disciplina.</p>
                    )}
                    {fs.map((f) => (
                      <div key={f.id} className="grid md:grid-cols-12 gap-2 items-end border rounded-md p-3">
                        <div className="md:col-span-1"><Label className="text-xs">Fase</Label>
                          <Input type="number" value={f.fase_num}
                            onChange={(e) => updateFase(f.id, { fase_num: Number(e.target.value) })} />
                        </div>
                        <div className="md:col-span-5"><Label className="text-xs">Entrega / descrição</Label>
                          <Input value={f.descricao} onChange={(e) => updateFase(f.id, { descricao: e.target.value })} />
                        </div>
                        <div className="md:col-span-2"><Label className="text-xs">Data limite</Label>
                          <Input type="date" value={f.data_limite ?? ""}
                            onChange={(e) => updateFase(f.id, { data_limite: e.target.value })} />
                        </div>
                        <div className="md:col-span-2"><Label className="text-xs">Pontos</Label>
                          <Input type="number" step="0.1" value={f.pontos_max}
                            onChange={(e) => updateFase(f.id, { pontos_max: Number(e.target.value) })} />
                        </div>
                        <div className="md:col-span-2 flex gap-1">
                          <Button size="sm" className="flex-1" onClick={() => salvarFase(f)}>
                            <Save className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-destructive" onClick={() => removerFase(f.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Grupos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> Grupos vinculados ({grupos.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {grupos.map((g) => (
                  <div key={g.id} className="flex items-center gap-2 border rounded-md p-3 flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                      <p className="font-medium">{g.nome}</p>
                      <p className="text-xs text-muted-foreground">{g.tema ?? "—"} · {g.semestre}</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => ressincronizar(g.id)}>
                      <CheckCircle2 className="w-4 h-4 mr-1" />Regerar avaliação
                    </Button>
                    <Button size="sm" onClick={() => navigate(`/protocolos/interdisciplinar/${g.id}`)}>
                      Abrir grupo
                    </Button>
                  </div>
                ))}
                {grupos.length === 0 && (
                  <p className="text-sm text-muted-foreground">Nenhum grupo vinculado a esta configuração.</p>
                )}

                <div className="grid md:grid-cols-12 gap-2 items-end pt-3 border-t">
                  <div className="md:col-span-5"><Label className="text-xs">Nome do grupo *</Label>
                    <Input value={novoGrupo.nome} onChange={(e) => setNovoGrupo({ ...novoGrupo, nome: e.target.value })} />
                  </div>
                  <div className="md:col-span-5"><Label className="text-xs">Tema</Label>
                    <Input value={novoGrupo.tema} onChange={(e) => setNovoGrupo({ ...novoGrupo, tema: e.target.value })} />
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full" onClick={criarGrupo}>
                      <Plus className="w-4 h-4 mr-1" />Vincular
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Ao vincular, as {fases.length} fases desta configuração são copiadas para o grupo, gerando a
                  tabela de avaliação com prazos e pontuação.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}
