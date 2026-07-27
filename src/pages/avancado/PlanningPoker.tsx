import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Spade, Plus, Trash2, Eye, EyeOff, RotateCcw, Check } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS } from "@/lib/ferramentas-store";

const CARTAS = [0, 1, 2, 3, 5, 8, 13, 21, 40, 100];

type Voto = { id: string; participante: string; carta: number | null };
type Rodada = { itemId: string; titulo: string; estimativa: number; media: number; data: string };

const PlanningPoker = () => {
  const { toast } = useToast();
  const [backlog, setBacklog] = useState<any[]>([]);
  const [historias, setHistorias] = useState<any[]>([]);
  const [selecionado, setSelecionado] = useState<string>("");
  const [votos, setVotos] = useState<Voto[]>([
    { id: uid(), participante: "Dev 1", carta: null },
    { id: uid(), participante: "Dev 2", carta: null },
    { id: uid(), participante: "Dev 3", carta: null },
  ]);
  const [revelado, setRevelado] = useState(false);
  const [historico, setHistorico] = useState<Rodada[]>([]);

  useEffect(() => {
    setBacklog(readLS<any[]>(FKEYS.backlog, []));
    setHistorias(readLS<any[]>(FKEYS.historias, []));
    setHistorico(readLS<Rodada[]>(FKEYS.poker, []));
  }, []);
  useEffect(() => writeLS(FKEYS.poker, historico), [historico]);

  const opcoes = useMemo(() => [
    ...backlog.map((b) => ({ id: b.id, titulo: b.titulo, origem: "Backlog" })),
    ...historias.map((h) => ({ id: h.id, titulo: `Como ${h.persona}, quero ${h.acao}`, origem: "História" })),
  ], [backlog, historias]);

  const item = opcoes.find((o) => o.id === selecionado);
  const votados = votos.filter((v) => v.carta !== null);
  const media = votados.length ? votados.reduce((a, v) => a + (v.carta as number), 0) / votados.length : 0;
  const consenso = votados.length > 1 && new Set(votados.map((v) => v.carta)).size === 1;
  const sugestao = CARTAS.reduce((prev, c) => (Math.abs(c - media) < Math.abs(prev - media) ? c : prev), CARTAS[0]);

  const aplicar = () => {
    if (!item) { toast({ title: "Selecione um item para estimar.", variant: "destructive" }); return; }
    if (!votados.length) { toast({ title: "Nenhum voto registrado.", variant: "destructive" }); return; }
    const novoBacklog = backlog.map((b) => (b.id === item.id ? { ...b, estimativa: sugestao } : b));
    const novasHistorias = historias.map((h) => (h.id === item.id ? { ...h, estimativa: sugestao } : h));
    writeLS(FKEYS.backlog, novoBacklog);
    writeLS(FKEYS.historias, novasHistorias);
    setBacklog(novoBacklog);
    setHistorias(novasHistorias);
    setHistorico((p) => [{ itemId: item.id, titulo: item.titulo, estimativa: sugestao, media: Number(media.toFixed(1)), data: new Date().toISOString() }, ...p]);
    toast({ title: `Estimativa de ${sugestao} pontos aplicada ao item.` });
    novaRodada();
  };

  const novaRodada = () => { setVotos((p) => p.map((v) => ({ ...v, carta: null }))); setRevelado(false); };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Spade className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Planning Poker</h1>
            <p className="text-sm text-muted-foreground">Estime itens do backlog e das histórias por consenso, com aplicação automática.</p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6 space-y-5">
            <div>
              <Label>Item em estimativa</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={selecionado} onChange={(e) => { setSelecionado(e.target.value); novaRodada(); }}>
                <option value="">— selecione um item do Backlog ou História —</option>
                {opcoes.map((o) => <option key={o.id} value={o.id}>[{o.origem}] {o.titulo}</option>)}
              </select>
              {!opcoes.length && <p className="text-xs text-muted-foreground mt-2">Crie itens em Ferramentas → Backlog ou Histórias de Usuário.</p>}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Participantes</Label>
                <Button size="sm" variant="outline" onClick={() => setVotos([...votos, { id: uid(), participante: `Dev ${votos.length + 1}`, carta: null }])}><Plus className="w-3 h-3 mr-1" /> Participante</Button>
              </div>
              {votos.map((v) => (
                <div key={v.id} className="rounded-lg border border-border p-3 space-y-2">
                  <div className="flex gap-2 items-center">
                    <Input className="h-8 max-w-xs" value={v.participante} onChange={(e) => setVotos(votos.map((x) => x.id === v.id ? { ...x, participante: e.target.value } : x))} />
                    <Badge variant={v.carta !== null ? "default" : "secondary"}>{v.carta !== null ? (revelado ? v.carta : "votou") : "aguardando"}</Badge>
                    <Button size="icon" variant="ghost" className="ml-auto h-8 w-8" onClick={() => setVotos(votos.filter((x) => x.id !== v.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {CARTAS.map((c) => (
                      <button key={c} onClick={() => setVotos(votos.map((x) => x.id === v.id ? { ...x, carta: c } : x))}
                        className={`w-10 h-12 rounded-md border text-sm font-semibold transition-colors ${v.carta === c ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/60"}`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setRevelado(!revelado)}>{revelado ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}{revelado ? "Ocultar" : "Revelar"} cartas</Button>
              <Button variant="outline" onClick={novaRodada}><RotateCcw className="w-4 h-4 mr-1" /> Nova rodada</Button>
              <Button onClick={aplicar}><Check className="w-4 h-4 mr-1" /> Aplicar {sugestao} pts ao item</Button>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 space-y-2">
              <h2 className="text-lg font-semibold">Resultado</h2>
              <p className="text-sm text-muted-foreground">Votos: {votados.length}/{votos.length}</p>
              <p className="text-4xl font-bold text-primary">{revelado ? sugestao : "?"}</p>
              <p className="text-sm text-muted-foreground">Média: {revelado ? media.toFixed(1) : "—"}</p>
              {revelado && (
                <Badge className={consenso ? "bg-emerald-500/15 text-emerald-600" : "bg-amber-500/15 text-amber-600"}>
                  {consenso ? "Consenso atingido" : "Divergência — discutir premissas"}
                </Badge>
              )}
            </Card>
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-3">Histórico</h2>
              {!historico.length && <p className="text-sm text-muted-foreground">Nenhuma estimativa registrada.</p>}
              <div className="space-y-2">
                {historico.slice(0, 10).map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-sm border-b border-border pb-1">
                    <span className="truncate mr-2">{h.titulo}</span>
                    <Badge variant="secondary">{h.estimativa} pts</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlanningPoker;
