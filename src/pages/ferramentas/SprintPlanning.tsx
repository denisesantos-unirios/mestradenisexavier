import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Plus, Trash2, ArrowRight, ArrowLeft, Target, AlertTriangle } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

type Item = {
  id: string;
  titulo: string;
  pontos: number;
  prioridade: "Must" | "Should" | "Could";
  origem: "backlog" | "sprint";
};

type Sprint = {
  numero: number;
  nome: string;
  objetivo: string;
  capacidade: number;
  inicio: string;
  fim: string;
};

const STORAGE_KEY = "ferramentas_sprint_planning";
const uid = () => Math.random().toString(36).slice(2, 10);

const emptySprint = (): Sprint => ({
  numero: 1,
  nome: "Sprint 1",
  objetivo: "",
  capacidade: 20,
  inicio: "",
  fim: "",
});

const prioColor: Record<Item["prioridade"], string> = {
  Must: "bg-red-500/15 text-red-600 border-red-500/30",
  Should: "bg-amber-500/15 text-amber-600 border-amber-500/30",
  Could: "bg-blue-500/15 text-blue-600 border-blue-500/30",
};

const SprintPlanning = () => {
  const { toast } = useToast();
  const [sprint, setSprint] = useState<Sprint>(emptySprint());
  const [itens, setItens] = useState<Item[]>([]);
  const [novo, setNovo] = useState<Omit<Item, "id" | "origem">>({ titulo: "", pontos: 3, prioridade: "Should" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d.sprint) setSprint(d.sprint);
        if (d.itens) setItens(d.itens);
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ sprint, itens }));
  }, [sprint, itens]);

  const backlog = useMemo(() => itens.filter((i) => i.origem === "backlog"), [itens]);
  const sprintItens = useMemo(() => itens.filter((i) => i.origem === "sprint"), [itens]);
  const totalPontos = useMemo(() => sprintItens.reduce((s, i) => s + i.pontos, 0), [sprintItens]);
  const percent = sprint.capacidade > 0 ? Math.min(100, (totalPontos / sprint.capacidade) * 100) : 0;
  const sobrecarga = totalPontos > sprint.capacidade;

  const adicionar = () => {
    if (!novo.titulo.trim()) {
      toast({ title: "Informe o título do item.", variant: "destructive" });
      return;
    }
    setItens((p) => [...p, { id: uid(), origem: "backlog", ...novo }]);
    setNovo({ titulo: "", pontos: 3, prioridade: "Should" });
  };

  const mover = (id: string, destino: "backlog" | "sprint") =>
    setItens((p) => p.map((i) => (i.id === id ? { ...i, origem: destino } : i)));

  const remover = (id: string) => setItens((p) => p.filter((i) => i.id !== id));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Planejamento de Sprint</h1>
              <p className="text-sm text-muted-foreground">Defina o objetivo, capacidade e monte o Sprint Backlog.</p>
            </div>
          </div>
        </motion.header>

        <Card className="p-5 mb-6 space-y-4">
          <div className="grid sm:grid-cols-4 gap-3">
            <div>
              <Label>Número</Label>
              <Input type="number" min={1} value={sprint.numero} onChange={(e) => setSprint({ ...sprint, numero: Number(e.target.value) || 1, nome: `Sprint ${Number(e.target.value) || 1}` })} />
            </div>
            <div className="sm:col-span-1">
              <Label>Início</Label>
              <Input type="date" value={sprint.inicio} onChange={(e) => setSprint({ ...sprint, inicio: e.target.value })} />
            </div>
            <div>
              <Label>Fim</Label>
              <Input type="date" value={sprint.fim} onChange={(e) => setSprint({ ...sprint, fim: e.target.value })} />
            </div>
            <div>
              <Label>Capacidade (pts)</Label>
              <Input type="number" min={1} value={sprint.capacidade} onChange={(e) => setSprint({ ...sprint, capacidade: Number(e.target.value) || 0 })} />
            </div>
          </div>
          <div>
            <Label className="flex items-center gap-1"><Target className="w-3 h-3" /> Objetivo da Sprint (Sprint Goal)</Label>
            <Textarea rows={2} placeholder="ex.: Entregar o fluxo de autenticação e cadastro de usuários" value={sprint.objetivo} onChange={(e) => setSprint({ ...sprint, objetivo: e.target.value })} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">Comprometimento: <b className="text-foreground">{totalPontos}</b> / {sprint.capacidade} pts</span>
              {sobrecarga && <span className="text-xs text-destructive flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Sobrecarga</span>}
            </div>
            <Progress value={percent} className={sobrecarga ? "[&>div]:bg-destructive" : ""} />
          </div>
        </Card>

        <Card className="p-4 mb-6">
          <div className="grid sm:grid-cols-5 gap-2 items-end">
            <div className="sm:col-span-2">
              <Label>Novo item</Label>
              <Input value={novo.titulo} onChange={(e) => setNovo({ ...novo, titulo: e.target.value })} placeholder="ex.: Tela de cadastro" />
            </div>
            <div>
              <Label>Pontos</Label>
              <Input type="number" min={1} value={novo.pontos} onChange={(e) => setNovo({ ...novo, pontos: Number(e.target.value) || 0 })} />
            </div>
            <div>
              <Label>Prioridade</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={novo.prioridade} onChange={(e) => setNovo({ ...novo, prioridade: e.target.value as Item["prioridade"] })}>
                <option>Must</option><option>Should</option><option>Could</option>
              </select>
            </div>
            <Button onClick={adicionar}><Plus className="w-4 h-4 mr-1" /> Adicionar</Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Backlog ({backlog.length})</h3>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {backlog.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-6">Vazio.</p>
              ) : backlog.map((i) => (
                <div key={i.id} className="p-3 rounded-lg border border-border bg-card flex items-center gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{i.titulo}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge className={prioColor[i.prioridade]}>{i.prioridade}</Badge>
                      <Badge variant="outline">{i.pontos} pts</Badge>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => mover(i.id, "sprint")}><ArrowRight className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost" onClick={() => remover(i.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className={`p-4 ${sobrecarga ? "border-destructive/50" : ""}`}>
            <h3 className="font-semibold text-foreground mb-3">Sprint Backlog ({sprintItens.length}) — {totalPontos} pts</h3>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {sprintItens.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-6">Puxe itens do backlog.</p>
              ) : sprintItens.map((i) => (
                <div key={i.id} className="p-3 rounded-lg border border-border bg-card flex items-center gap-2">
                  <Button size="icon" variant="ghost" onClick={() => mover(i.id, "backlog")}><ArrowLeft className="w-4 h-4" /></Button>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{i.titulo}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge className={prioColor[i.prioridade]}>{i.prioridade}</Badge>
                      <Badge variant="outline">{i.pontos} pts</Badge>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => remover(i.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default SprintPlanning;
