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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FolderKanban, Plus, Pencil, Trash2 } from "lucide-react";

type Projeto = {
  id: string;
  nome: string;
  descricao: string | null;
  software_avaliado: string | null;
  url: string | null;
  equipe_id: string;
};
type Equipe = { id: string; nome: string };

const emptyForm = { nome: "", descricao: "", software_avaliado: "", url: "", equipe_id: "" };

export default function Projetos() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => { if (!loading && !user) navigate("/provas/login"); }, [loading, user, navigate]);

  const load = async () => {
    const [p, e] = await Promise.all([
      supabase.from("projetos").select("*").order("created_at", { ascending: false }),
      supabase.from("equipes").select("id, nome").order("nome"),
    ]);
    setProjetos((p.data ?? []) as any);
    setEquipes((e.data ?? []) as any);
  };
  useEffect(() => { if (user) load(); }, [user]);

  const openNew = () => { setEditingId(null); setForm(emptyForm); setOpen(true); };
  const openEdit = (p: Projeto) => {
    setEditingId(p.id);
    setForm({
      nome: p.nome, descricao: p.descricao ?? "", software_avaliado: p.software_avaliado ?? "",
      url: p.url ?? "", equipe_id: p.equipe_id,
    });
    setOpen(true);
  };

  const save = async () => {
    if (!form.nome || !form.equipe_id) return toast({ title: "Nome e equipe são obrigatórios", variant: "destructive" });
    const payload = {
      nome: form.nome, descricao: form.descricao || null,
      software_avaliado: form.software_avaliado || null,
      url: form.url || null, equipe_id: form.equipe_id, created_by: user!.id,
    };
    const { error } = editingId
      ? await supabase.from("projetos").update(payload).eq("id", editingId)
      : await supabase.from("projetos").insert(payload);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    toast({ title: editingId ? "Projeto atualizado" : "Projeto criado" });
    setOpen(false); load();
  };

  const remove = async (id: string) => {
    if (!confirm("Excluir projeto? Experimentos vinculados também serão removidos.")) return;
    const { error } = await supabase.from("projetos").delete().eq("id", id);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    load();
  };

  const equipeNome = (id: string) => equipes.find(e => e.id === id)?.nome ?? "—";

  if (loading) return null;

  return (
    <main className="min-h-screen bg-background">
      <MainNavigation />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FolderKanban className="w-7 h-7 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Gerenciar Projetos</h1>
            </div>
            <p className="text-muted-foreground">Cada projeto representa um software cuja usabilidade será avaliada.</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button onClick={openNew} disabled={equipes.length === 0}><Plus className="w-4 h-4 mr-2" />Novo Projeto</Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader><DialogTitle>{editingId ? "Editar Projeto" : "Novo Projeto"}</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div><Label>Nome *</Label><Input value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} /></div>
                <div>
                  <Label>Equipe *</Label>
                  <Select value={form.equipe_id} onValueChange={v => setForm({ ...form, equipe_id: v })}>
                    <SelectTrigger><SelectValue placeholder="Selecione a equipe" /></SelectTrigger>
                    <SelectContent>{equipes.map(e => <SelectItem key={e.id} value={e.id}>{e.nome}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Software avaliado</Label><Input value={form.software_avaliado} onChange={e => setForm({ ...form, software_avaliado: e.target.value })} /></div>
                <div><Label>URL do software</Label><Input value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} /></div>
                <div><Label>Descrição</Label><Textarea value={form.descricao} onChange={e => setForm({ ...form, descricao: e.target.value })} /></div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                <Button onClick={save}>{editingId ? "Salvar" : "Criar"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {equipes.length === 0 && (
          <Card className="mb-6"><CardContent className="py-6 text-center text-muted-foreground">
            Crie uma equipe primeiro em <a href="/protocolos/equipes" className="text-primary underline">Gerenciar Equipes</a>.
          </CardContent></Card>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {projetos.map(p => (
            <Card key={p.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-lg">{p.nome}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">Equipe: {equipeNome(p.equipe_id)}</p>
                </div>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" onClick={() => openEdit(p)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => remove(p.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {p.software_avaliado && <p><strong>Software:</strong> {p.software_avaliado}</p>}
                {p.url && <p className="truncate"><strong>URL:</strong> <a href={p.url} target="_blank" rel="noreferrer" className="text-primary">{p.url}</a></p>}
                {p.descricao && <p className="text-muted-foreground">{p.descricao}</p>}
              </CardContent>
            </Card>
          ))}
          {projetos.length === 0 && equipes.length > 0 && (
            <p className="col-span-2 text-center text-muted-foreground py-12">Nenhum projeto cadastrado.</p>
          )}
        </div>
      </div>
    </main>
  );
}
