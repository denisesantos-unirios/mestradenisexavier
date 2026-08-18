import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Columns3, Plus, Trash2, ChevronLeft, ChevronRight, AlertTriangle, Pencil } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { writeLS } from "@/lib/ferramentas-store";

type Prioridade = "Alta" | "Média" | "Baixa";
type Card = {
  id: string;
  titulo: string;
  responsavel: string;
  prioridade: Prioridade;
  coluna: number;
  pontos?: number;
  regras?: string;
  criterios?: string;
};

type Coluna = { nome: string; wip: number | null };

const STORAGE_KEY = "ferramentas_kanban";
const uid = () => Math.random().toString(36).slice(2, 10);

const COLUNAS_DEFAULT: Coluna[] = [
  { nome: "Backlog", wip: null },
  { nome: "To Do", wip: 5 },
  { nome: "Doing", wip: 3 },
  { nome: "Review", wip: 3 },
  { nome: "Done", wip: null },
];


const prioColor: Record<Prioridade, string> = {
  Alta: "bg-red-500/15 text-red-600 border-red-500/30",
  Média: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  Baixa: "bg-muted text-muted-foreground border-border",
};

const KanbanTool = () => {
  const { toast } = useToast();
  const [colunas, setColunas] = useState<Coluna[]>(COLUNAS_DEFAULT);
  const [cards, setCards] = useState<Card[]>([]);
  const [novo, setNovo] = useState({ titulo: "", responsavel: "", prioridade: "Média" as Prioridade });
  const [editando, setEditando] = useState<Card | null>(null);


  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (data.colunas) setColunas(data.colunas);
        if (data.cards) setCards(data.cards);
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    writeLS(STORAGE_KEY, { colunas, cards });
  }, [colunas, cards]);

  const contagem = useMemo(
    () => colunas.map((_, i) => cards.filter((c) => c.coluna === i).length),
    [colunas, cards]
  );

  const adicionar = () => {
    if (!novo.titulo.trim()) {
      toast({ title: "Informe o título do card.", variant: "destructive" });
      return;
    }
    setCards((p) => [...p, { id: uid(), coluna: 0, ...novo }]);
    setNovo({ titulo: "", responsavel: "", prioridade: "Média" });
  };

  const mover = (id: string, dir: -1 | 1) => {
    setCards((p) => p.map((c) => {
      if (c.id !== id) return c;
      const alvo = Math.max(0, Math.min(colunas.length - 1, c.coluna + dir));
      const limite = colunas[alvo].wip;
      const atual = p.filter((x) => x.coluna === alvo).length;
      if (limite !== null && atual >= limite && alvo !== c.coluna) {
        toast({ title: `WIP Limit da coluna "${colunas[alvo].nome}" atingido.`, variant: "destructive" });
        return c;
      }
      return { ...c, coluna: alvo };
    }));
  };

  const remover = (id: string) => setCards((p) => p.filter((c) => c.id !== id));

  const salvarEdicao = () => {
    if (!editando) return;
    if (!editando.titulo.trim()) {
      toast({ title: "Informe o título do card.", variant: "destructive" });
      return;
    }
    setCards((p) => p.map((c) => (c.id === editando.id ? editando : c)));
    setEditando(null);
    toast({ title: "Card atualizado." });
  };


  const setWip = (idx: number, valor: string) => {
    const num = valor === "" ? null : Number(valor);
    setColunas((p) => p.map((c, i) => (i === idx ? { ...c, wip: num } : c)));
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Columns3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Quadro Kanban</h1>
              <p className="text-sm text-muted-foreground">Visualize o fluxo, aplique WIP Limits e evite gargalos.</p>
            </div>
          </div>
        </motion.header>

        <Card className="p-4 mb-6">
          <div className="grid sm:grid-cols-4 gap-2 items-end">
            <div className="sm:col-span-2">
              <Label>Novo card</Label>
              <Input placeholder="ex.: Implementar tela de login" value={novo.titulo} onChange={(e) => setNovo({ ...novo, titulo: e.target.value })} />
            </div>
            <div>
              <Label>Responsável</Label>
              <Input placeholder="ex.: Ana" value={novo.responsavel} onChange={(e) => setNovo({ ...novo, responsavel: e.target.value })} />
            </div>
            <div className="flex gap-2">
              <select className="h-10 rounded-md border border-input bg-background px-3 text-sm flex-1" value={novo.prioridade} onChange={(e) => setNovo({ ...novo, prioridade: e.target.value as Prioridade })}>
                <option>Alta</option><option>Média</option><option>Baixa</option>
              </select>
              <Button onClick={adicionar}><Plus className="w-4 h-4" /></Button>
            </div>
          </div>
        </Card>

        <div className="overflow-x-auto">
          <div className="grid gap-3 min-w-[900px]" style={{ gridTemplateColumns: `repeat(${colunas.length}, minmax(0, 1fr))` }}>
            {colunas.map((col, idx) => {
              const excedido = col.wip !== null && contagem[idx] > col.wip;
              return (
                <div key={idx} className="rounded-xl border border-border bg-card/50 flex flex-col">
                  <div className="p-3 border-b border-border/50">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-sm text-foreground">{col.nome}</p>
                      <Badge variant={excedido ? "destructive" : "secondary"}>{contagem[idx]}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <span>WIP:</span>
                      <input
                        type="number"
                        min={0}
                        value={col.wip ?? ""}
                        onChange={(e) => setWip(idx, e.target.value)}
                        placeholder="∞"
                        className="w-12 h-5 rounded border border-input bg-background px-1 text-xs"
                      />
                      {excedido && <AlertTriangle className="w-3 h-3 text-destructive" />}
                    </div>
                  </div>
                  <div className="p-2 space-y-2 min-h-[200px]">
                    {cards.filter((c) => c.coluna === idx).map((c) => (
                      <div key={c.id} className="p-2 rounded-lg bg-background border border-border">
                        <p className="text-xs font-medium text-foreground mb-1">{c.titulo}</p>
                        <div className="flex items-center justify-between gap-1">
                          <Badge className={`${prioColor[c.prioridade]} text-[10px]`}>{c.prioridade}</Badge>
                          {c.responsavel && <span className="text-[10px] text-muted-foreground truncate">{c.responsavel}</span>}
                        </div>
                        <div className="flex gap-1 mt-2">
                          <Button size="icon" variant="ghost" className="h-6 w-6" disabled={idx === 0} onClick={() => mover(c.id, -1)}><ChevronLeft className="w-3 h-3" /></Button>
                          <Button size="icon" variant="ghost" className="h-6 w-6" disabled={idx === colunas.length - 1} onClick={() => mover(c.id, 1)}><ChevronRight className="w-3 h-3" /></Button>
                          <Button size="icon" variant="ghost" className="h-6 w-6 ml-auto" onClick={() => remover(c.id)}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default KanbanTool;
