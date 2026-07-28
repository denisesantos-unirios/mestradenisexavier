import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ListTodo, Plus, Trash2, Download, ArrowUp, ArrowDown, Filter } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { writeLS } from "@/lib/ferramentas-store";

type Prioridade = "Must" | "Should" | "Could" | "Won't";
type Status = "Novo" | "Refinado" | "Pronto" | "Em Sprint" | "Concluído";

type Item = {
  id: string;
  titulo: string;
  descricao: string;
  epico: string;
  prioridade: Prioridade;
  estimativa: number;
  status: Status;
  valor: number; // 1-5
  criadoEm: string;
};

const STORAGE_KEY = "ferramentas_backlog";
const uid = () => Math.random().toString(36).slice(2, 10);

const PRIORIDADES: Prioridade[] = ["Must", "Should", "Could", "Won't"];
const STATUS_LIST: Status[] = ["Novo", "Refinado", "Pronto", "Em Sprint", "Concluído"];

const empty = (): Item => ({
  id: uid(),
  titulo: "",
  descricao: "",
  epico: "",
  prioridade: "Should",
  estimativa: 3,
  status: "Novo",
  valor: 3,
  criadoEm: new Date().toISOString(),
});

const prioColor: Record<Prioridade, string> = {
  Must: "bg-red-500/15 text-red-600 border-red-500/30",
  Should: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  Could: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  "Won't": "bg-muted text-muted-foreground border-border",
};

const Backlog = () => {
  const { toast } = useToast();
  const [itens, setItens] = useState<Item[]>([]);
  const [atual, setAtual] = useState<Item>(empty());
  const [filtroPrio, setFiltroPrio] = useState<Prioridade | "Todas">("Todas");
  const [filtroStatus, setFiltroStatus] = useState<Status | "Todos">("Todos");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItens(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    writeLS(STORAGE_KEY, itens);
  }, [itens]);

  const filtrados = useMemo(() => {
    return itens.filter((i) =>
      (filtroPrio === "Todas" || i.prioridade === filtroPrio) &&
      (filtroStatus === "Todos" || i.status === filtroStatus)
    );
  }, [itens, filtroPrio, filtroStatus]);

  const totais = useMemo(() => ({
    total: itens.length,
    pontos: itens.reduce((s, i) => s + i.estimativa, 0),
    concluidos: itens.filter((i) => i.status === "Concluído").length,
  }), [itens]);

  const salvar = () => {
    if (!atual.titulo.trim()) {
      toast({ title: "Informe o título do item.", variant: "destructive" });
      return;
    }
    setItens((p) => [{ ...atual }, ...p]);
    setAtual(empty());
    toast({ title: "Item adicionado ao backlog." });
  };

  const atualizar = (id: string, patch: Partial<Item>) =>
    setItens((p) => p.map((i) => (i.id === id ? { ...i, ...patch } : i)));

  const remover = (id: string) => setItens((p) => p.filter((i) => i.id !== id));

  const mover = (id: string, dir: -1 | 1) => {
    setItens((p) => {
      const idx = p.findIndex((i) => i.id === id);
      if (idx < 0) return p;
      const novo = idx + dir;
      if (novo < 0 || novo >= p.length) return p;
      const arr = [...p];
      [arr[idx], arr[novo]] = [arr[novo], arr[idx]];
      return arr;
    });
  };

  const exportar = () => {
    const linhas = filtrados.map((i) =>
      `## ${i.titulo}\n- Épico: ${i.epico || "—"}\n- Prioridade: ${i.prioridade} | Estimativa: ${i.estimativa} pts | Valor: ${i.valor}/5 | Status: ${i.status}\n\n${i.descricao || ""}`
    ).join("\n\n---\n\n");
    const blob = new Blob([linhas], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backlog.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <ListTodo className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Product Backlog</h1>
              <p className="text-sm text-muted-foreground">Cadastre, priorize (MoSCoW) e estime itens do produto.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <Card className="p-3 text-center"><p className="text-2xl font-bold text-primary">{totais.total}</p><p className="text-xs text-muted-foreground">Itens</p></Card>
            <Card className="p-3 text-center"><p className="text-2xl font-bold text-primary">{totais.pontos}</p><p className="text-xs text-muted-foreground">Story Points</p></Card>
            <Card className="p-3 text-center"><p className="text-2xl font-bold text-primary">{totais.concluidos}</p><p className="text-xs text-muted-foreground">Concluídos</p></Card>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-2 p-6 space-y-4 h-fit">
            <h2 className="text-lg font-semibold text-foreground">Novo item</h2>
            <div>
              <Label>Título</Label>
              <Input value={atual.titulo} onChange={(e) => setAtual({ ...atual, titulo: e.target.value })} placeholder="ex.: Login com Google" />
            </div>
            <div>
              <Label>Descrição</Label>
              <Textarea value={atual.descricao} onChange={(e) => setAtual({ ...atual, descricao: e.target.value })} placeholder="Contexto, regra de negócio, critérios..." />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label>Épico</Label>
                <Input value={atual.epico} onChange={(e) => setAtual({ ...atual, epico: e.target.value })} placeholder="ex.: Autenticação" />
              </div>
              <div>
                <Label>Estimativa (pts)</Label>
                <Input type="number" min={1} value={atual.estimativa} onChange={(e) => setAtual({ ...atual, estimativa: Number(e.target.value) || 0 })} />
              </div>
              <div>
                <Label>Prioridade</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.prioridade} onChange={(e) => setAtual({ ...atual, prioridade: e.target.value as Prioridade })}>
                  {PRIORIDADES.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <Label>Valor (1-5)</Label>
                <Input type="number" min={1} max={5} value={atual.valor} onChange={(e) => setAtual({ ...atual, valor: Number(e.target.value) || 1 })} />
              </div>
            </div>
            <Button className="w-full" onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Adicionar</Button>
          </Card>

          <Card className="lg:col-span-3 p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-lg font-semibold text-foreground">Itens ({filtrados.length})</h2>
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select className="h-8 rounded-md border border-input bg-background px-2 text-xs" value={filtroPrio} onChange={(e) => setFiltroPrio(e.target.value as any)}>
                  <option value="Todas">Todas prioridades</option>
                  {PRIORIDADES.map((p) => <option key={p}>{p}</option>)}
                </select>
                <select className="h-8 rounded-md border border-input bg-background px-2 text-xs" value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value as any)}>
                  <option value="Todos">Todos status</option>
                  {STATUS_LIST.map((s) => <option key={s}>{s}</option>)}
                </select>
                {itens.length > 0 && <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>}
              </div>
            </div>

            {filtrados.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">Nenhum item. Adicione ao lado.</p>
            ) : (
              <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
                {filtrados.map((i) => (
                  <div key={i.id} className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">{i.titulo}</p>
                        {i.epico && <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{i.epico}</p>}
                      </div>
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => mover(i.id, -1)}><ArrowUp className="w-3 h-3" /></Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => mover(i.id, 1)}><ArrowDown className="w-3 h-3" /></Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => remover(i.id)}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                      </div>
                    </div>
                    {i.descricao && <p className="text-xs text-muted-foreground mb-2">{i.descricao}</p>}
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={prioColor[i.prioridade]}>{i.prioridade}</Badge>
                      <Badge variant="outline">{i.estimativa} pts</Badge>
                      <Badge variant="outline">Valor {i.valor}/5</Badge>
                      <select className="h-7 rounded-md border border-input bg-background px-2 text-xs ml-auto" value={i.status} onChange={(e) => atualizar(i.id, { status: e.target.value as Status })}>
                        {STATUS_LIST.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Backlog;
