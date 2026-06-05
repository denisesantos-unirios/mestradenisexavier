import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Users, Plus, Pencil, Trash2, UserPlus, X } from "lucide-react";

type Aluno = { nome: string; matricula?: string; email?: string };
type Equipe = {
  id: string;
  nome: string;
  periodo: string | null;
  semestre: string | null;
  descricao: string | null;
  alunos: Aluno[];
};

const emptyForm = { nome: "", periodo: "", semestre: "", descricao: "", alunos: [] as Aluno[] };

export default function Equipes() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [novoAluno, setNovoAluno] = useState<Aluno>({ nome: "", matricula: "", email: "" });

  useEffect(() => {
    if (!loading && !user) navigate("/provas/login");
  }, [loading, user, navigate]);

  const load = async () => {
    const { data, error } = await supabase.from("equipes").select("*").order("created_at", { ascending: false });
    if (error) return toast({ title: "Erro ao carregar equipes", description: error.message, variant: "destructive" });
    setEquipes((data ?? []) as any);
  };

  useEffect(() => { if (user) load(); }, [user]);

  const openNew = () => { setEditingId(null); setForm(emptyForm); setOpen(true); };
  const openEdit = (e: Equipe) => {
    setEditingId(e.id);
    setForm({
      nome: e.nome,
      periodo: e.periodo ?? "",
      semestre: e.semestre ?? "",
      descricao: e.descricao ?? "",
      alunos: e.alunos ?? [],
    });
    setOpen(true);
  };

  const addAluno = () => {
    if (!novoAluno.nome) return;
    setForm(f => ({ ...f, alunos: [...f.alunos, novoAluno] }));
    setNovoAluno({ nome: "", matricula: "", email: "" });
  };

  const removeAluno = (i: number) =>
    setForm(f => ({ ...f, alunos: f.alunos.filter((_, idx) => idx !== i) }));

  const save = async () => {
    if (!form.nome) return toast({ title: "Nome obrigatório", variant: "destructive" });
    const payload = {
      nome: form.nome,
      periodo: form.periodo || null,
      semestre: form.semestre || null,
      descricao: form.descricao || null,
      alunos: form.alunos,
      created_by: user!.id,
    };
    const { error } = editingId
      ? await supabase.from("equipes").update(payload).eq("id", editingId)
      : await supabase.from("equipes").insert(payload);
    if (error) return toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
    toast({ title: editingId ? "Equipe atualizada" : "Equipe criada" });
    setOpen(false); load();
  };

  const remove = async (id: string) => {
    if (!confirm("Excluir equipe? Projetos e experimentos vinculados também serão removidos.")) return;
    const { error } = await supabase.from("equipes").delete().eq("id", id);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    toast({ title: "Equipe removida" });
    load();
  };

  if (loading) return null;

  return (
    <main className="min-h-screen bg-background">
      <MainNavigation />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-7 h-7 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Gerenciar Equipes</h1>
            </div>
            <p className="text-muted-foreground">Equipes da disciplina Projetos de Interface — experimentos de usabilidade.</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={openNew}><Plus className="w-4 h-4 mr-2" />Nova Equipe</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader><DialogTitle>{editingId ? "Editar Equipe" : "Nova Equipe"}</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div><Label>Nome *</Label><Input value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label>Período (ex: 2026.1)</Label><Input value={form.periodo} onChange={e => setForm({ ...form, periodo: e.target.value })} /></div>
                  <div><Label>Semestre</Label><Input value={form.semestre} onChange={e => setForm({ ...form, semestre: e.target.value })} /></div>
                </div>
                <div><Label>Descrição</Label><Textarea value={form.descricao} onChange={e => setForm({ ...form, descricao: e.target.value })} /></div>

                <div className="border border-border rounded-lg p-4 space-y-3">
                  <Label className="text-base">Alunos</Label>
                  <div className="grid grid-cols-[2fr_1fr_1.5fr_auto] gap-2">
                    <Input placeholder="Nome" value={novoAluno.nome} onChange={e => setNovoAluno({ ...novoAluno, nome: e.target.value })} />
                    <Input placeholder="Matrícula" value={novoAluno.matricula} onChange={e => setNovoAluno({ ...novoAluno, matricula: e.target.value })} />
                    <Input placeholder="Email" value={novoAluno.email} onChange={e => setNovoAluno({ ...novoAluno, email: e.target.value })} />
                    <Button type="button" size="icon" onClick={addAluno}><UserPlus className="w-4 h-4" /></Button>
                  </div>
                  <div className="space-y-1">
                    {form.alunos.map((a, i) => (
                      <div key={i} className="flex items-center justify-between bg-secondary/50 rounded px-3 py-2 text-sm">
                        <span><strong>{a.nome}</strong> {a.matricula && `· ${a.matricula}`} {a.email && `· ${a.email}`}</span>
                        <button onClick={() => removeAluno(i)}><X className="w-4 h-4 text-muted-foreground hover:text-destructive" /></button>
                      </div>
                    ))}
                    {form.alunos.length === 0 && <p className="text-xs text-muted-foreground">Nenhum aluno adicionado.</p>}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                <Button onClick={save}>{editingId ? "Salvar" : "Criar"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {equipes.map(e => (
            <Card key={e.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-lg">{e.nome}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">
                    {[e.periodo, e.semestre].filter(Boolean).join(" · ") || "—"}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" onClick={() => openEdit(e)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => remove(e.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              </CardHeader>
              <CardContent>
                {e.descricao && <p className="text-sm text-muted-foreground mb-3">{e.descricao}</p>}
                <p className="text-xs font-semibold text-foreground mb-1">{e.alunos?.length ?? 0} aluno(s)</p>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {(e.alunos ?? []).slice(0, 4).map((a, i) => <li key={i}>• {a.nome}</li>)}
                  {(e.alunos?.length ?? 0) > 4 && <li>… +{(e.alunos!.length - 4)} mais</li>}
                </ul>
              </CardContent>
            </Card>
          ))}
          {equipes.length === 0 && (
            <p className="col-span-2 text-center text-muted-foreground py-12">Nenhuma equipe cadastrada ainda.</p>
          )}
        </div>
      </div>
    </main>
  );
}
