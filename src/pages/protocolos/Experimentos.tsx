import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FlaskConical, Plus, Trash2, ArrowRight } from "lucide-react";

type Experimento = { id: string; titulo: string; data_aplicacao: string | null; projeto_id: string };
type Projeto = { id: string; nome: string; equipe_id: string };
type Equipe = { id: string; nome: string };

export default function Experimentos() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [items, setItems] = useState<Experimento[]>([]);
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [equipes, setEquipes] = useState<Equipe[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ titulo: "", projeto_id: "", data_aplicacao: "" });
  const [filterProjeto, setFilterProjeto] = useState<string>("all");

  useEffect(() => { if (!loading && !user) navigate("/provas/login"); }, [loading, user, navigate]);

  const load = async () => {
    const [e, p, eq] = await Promise.all([
      supabase.from("experimentos").select("id, titulo, data_aplicacao, projeto_id").order("created_at", { ascending: false }),
      supabase.from("projetos").select("id, nome, equipe_id").order("nome"),
      supabase.from("equipes").select("id, nome"),
    ]);
    setItems((e.data ?? []) as any);
    setProjetos((p.data ?? []) as any);
    setEquipes((eq.data ?? []) as any);
  };
  useEffect(() => { if (user) load(); }, [user]);

  const save = async () => {
    if (!form.titulo || !form.projeto_id) return toast({ title: "Título e projeto obrigatórios", variant: "destructive" });
    const { data, error } = await supabase.from("experimentos").insert({
      titulo: form.titulo,
      projeto_id: form.projeto_id,
      data_aplicacao: form.data_aplicacao || null,
      created_by: user!.id,
    }).select("id").single();
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    setOpen(false);
    navigate(`/protocolos/experimentos/${data.id}`);
  };

  const remove = async (id: string) => {
    if (!confirm("Excluir experimento?")) return;
    const { error } = await supabase.from("experimentos").delete().eq("id", id);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    load();
  };

  const projNome = (id: string) => projetos.find(p => p.id === id)?.nome ?? "—";
  const eqNome = (projId: string) => {
    const p = projetos.find(x => x.id === projId);
    return p ? equipes.find(e => e.id === p.equipe_id)?.nome ?? "—" : "—";
  };

  const filtered = filterProjeto === "all" ? items : items.filter(i => i.projeto_id === filterProjeto);

  if (loading) return null;

  return (
    <main className="min-h-screen bg-background">
      <MainNavigation />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FlaskConical className="w-7 h-7 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Gerenciar Experimentos</h1>
            </div>
            <p className="text-muted-foreground">Protocolo DECIDE completo + coleta de resultados e análise de usabilidade.</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button disabled={projetos.length === 0}><Plus className="w-4 h-4 mr-2" />Novo Experimento</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Novo Experimento</DialogTitle></DialogHeader>
              <div className="space-y-4">
                <div><Label>Título *</Label><Input value={form.titulo} onChange={e => setForm({ ...form, titulo: e.target.value })} /></div>
                <div>
                  <Label>Projeto *</Label>
                  <Select value={form.projeto_id} onValueChange={v => setForm({ ...form, projeto_id: v })}>
                    <SelectTrigger><SelectValue placeholder="Selecione o projeto" /></SelectTrigger>
                    <SelectContent>{projetos.map(p => <SelectItem key={p.id} value={p.id}>{p.nome}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Data de aplicação</Label><Input type="date" value={form.data_aplicacao} onChange={e => setForm({ ...form, data_aplicacao: e.target.value })} /></div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                <Button onClick={save}>Criar e abrir</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mb-6 flex gap-3 items-center">
          <Label className="text-sm">Filtrar por projeto:</Label>
          <Select value={filterProjeto} onValueChange={setFilterProjeto}>
            <SelectTrigger className="w-64"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {projetos.map(p => <SelectItem key={p.id} value={p.id}>{p.nome}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map(e => (
            <Card key={e.id} className="cursor-pointer hover:border-primary/50 transition-colors" onClick={() => navigate(`/protocolos/experimentos/${e.id}`)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{e.titulo}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">{eqNome(e.projeto_id)} · {projNome(e.projeto_id)}</p>
                    {e.data_aplicacao && <p className="text-xs text-muted-foreground">Aplicado em {new Date(e.data_aplicacao).toLocaleDateString("pt-BR")}</p>}
                  </div>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" onClick={(ev) => { ev.stopPropagation(); remove(e.id); }}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                    <Button size="icon" variant="ghost"><ArrowRight className="w-4 h-4" /></Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-2 text-center text-muted-foreground py-12">
              {projetos.length === 0 ? "Crie um projeto primeiro." : "Nenhum experimento cadastrado."}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
