import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TrendingDown, Plus, Trash2, RefreshCw } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS } from "@/lib/ferramentas-store";

type Dia = { id: string; dia: string; restante: number; concluidos: number };

const Burndown = () => {
  const { toast } = useToast();
  const [nome, setNome] = useState("Sprint 1");
  const [total, setTotal] = useState(20);
  const [duracao, setDuracao] = useState(10);
  const [dias, setDias] = useState<Dia[]>([]);

  useEffect(() => {
    const d = readLS<any>(FKEYS.burndown, null);
    if (d) { setNome(d.nome ?? "Sprint 1"); setTotal(d.total ?? 20); setDuracao(d.duracao ?? 10); setDias(d.dias ?? []); }
  }, []);
  useEffect(() => writeLS(FKEYS.burndown, { nome, total, duracao, dias }), [nome, total, duracao, dias]);

  const importarSprint = () => {
    const raw = readLS<any>(FKEYS.sprint, null);
    const itens = raw?.itens?.filter((i: any) => i.origem === "sprint") ?? [];
    if (!itens.length) { toast({ title: "Nenhum item na sprint. Planeje em Ferramentas → Planejamento de Sprint.", variant: "destructive" }); return; }
    const pontos = itens.reduce((a: number, i: any) => a + (Number(i.estimativa) || 0), 0);
    setNome(raw?.sprint?.nome ?? "Sprint");
    setTotal(pontos);
    toast({ title: `Importados ${itens.length} itens (${pontos} pontos) da sprint.` });
  };

  const dados = useMemo(() => {
    const ideal = (i: number) => Math.max(0, +(total - (total / Math.max(1, duracao)) * i).toFixed(1));
    const base = Array.from({ length: duracao + 1 }, (_, i) => ({
      dia: i === 0 ? "Início" : `D${i}`,
      Ideal: ideal(i),
      Real: i === 0 ? total : (dias[i - 1] ? dias[i - 1].restante : null),
      Concluídos: i === 0 ? 0 : (dias[i - 1]?.concluidos ?? null),
    }));
    return base;
  }, [total, duracao, dias]);

  const ultimo = [...dias].reverse().find((d) => d.restante !== null);
  const idealAtual = Math.max(0, total - (total / Math.max(1, duracao)) * dias.length);
  const situacao = !ultimo ? "Sem dados" : ultimo.restante <= idealAtual ? "Adiantado / no ritmo" : "Atrasado";
  const velocidade = dias.length ? ((total - (ultimo?.restante ?? total)) / dias.length).toFixed(1) : "0";

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><TrendingDown className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gráficos de Burndown</h1>
            <p className="text-sm text-muted-foreground">Acompanhe o consumo de pontos da sprint em relação à linha ideal.</p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2"><Label>Sprint</Label><Input value={nome} onChange={(e) => setNome(e.target.value)} /></div>
              <div><Label>Pontos totais</Label><Input type="number" value={total} onChange={(e) => setTotal(Number(e.target.value))} /></div>
              <div><Label>Dias úteis</Label><Input type="number" value={duracao} onChange={(e) => setDuracao(Number(e.target.value))} /></div>
            </div>
            <Button variant="outline" className="w-full" onClick={importarSprint}><RefreshCw className="w-4 h-4 mr-1" /> Importar da Sprint</Button>

            <div className="flex items-center justify-between">
              <Label>Registro diário</Label>
              <Button size="sm" variant="outline" onClick={() => setDias([...dias, { id: uid(), dia: `D${dias.length + 1}`, restante: total, concluidos: 0 }])}><Plus className="w-3 h-3" /></Button>
            </div>
            <div className="space-y-2">
              {dias.map((d, i) => (
                <div key={d.id} className="flex gap-2 items-center">
                  <Badge variant="secondary" className="w-10 justify-center">D{i + 1}</Badge>
                  <Input className="h-8" type="number" value={d.restante} placeholder="restante"
                    onChange={(e) => setDias(dias.map((x) => x.id === d.id ? { ...x, restante: Number(e.target.value) } : x))} />
                  <Input className="h-8" type="number" value={d.concluidos} placeholder="concluídos"
                    onChange={(e) => setDias(dias.map((x) => x.id === d.id ? { ...x, concluidos: Number(e.target.value) } : x))} />
                  <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setDias(dias.filter((x) => x.id !== d.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                </div>
              ))}
              {!dias.length && <p className="text-xs text-muted-foreground">Adicione um registro por dia: pontos restantes e itens concluídos.</p>}
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4"><p className="text-xs text-muted-foreground">Situação</p><p className="text-lg font-semibold text-primary">{situacao}</p></Card>
              <Card className="p-4"><p className="text-xs text-muted-foreground">Velocidade média</p><p className="text-lg font-semibold">{velocidade} pts/dia</p></Card>
              <Card className="p-4"><p className="text-xs text-muted-foreground">Restante</p><p className="text-lg font-semibold">{ultimo?.restante ?? total} / {total} pts</p></Card>
            </div>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Burndown — {nome}</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dados}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="dia" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Ideal" stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" dot={false} />
                    <Line type="monotone" dataKey="Real" stroke="hsl(var(--primary))" strokeWidth={3} connectNulls />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Itens concluídos por dia</h2>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dados.slice(1)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="dia" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="Concluídos" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Burndown;
