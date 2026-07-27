import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, Trash2, Download, Send } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, baixarMd, enviarParaBugs, enviarParaBacklog } from "@/lib/ferramentas-store";

const HEURISTICAS = [
  "H1 — Visibilidade do status do sistema",
  "H2 — Correspondência entre o sistema e o mundo real",
  "H3 — Controle e liberdade do usuário",
  "H4 — Consistência e padrões",
  "H5 — Prevenção de erros",
  "H6 — Reconhecimento em vez de memorização",
  "H7 — Flexibilidade e eficiência de uso",
  "H8 — Estética e design minimalista",
  "H9 — Ajudar a reconhecer, diagnosticar e recuperar-se de erros",
  "H10 — Ajuda e documentação",
];

const SEVERIDADES = [
  "0 — Não é problema",
  "1 — Cosmético",
  "2 — Menor",
  "3 — Maior",
  "4 — Catastrófico",
];

type Problema = {
  id: string; heuristica: string; local: string; descricao: string; severidade: number;
  frequencia: number; recomendacao: string; avaliador: string; criadoEm: string;
};

const empty = (): Problema => ({
  id: uid(), heuristica: HEURISTICAS[0], local: "", descricao: "", severidade: 2, frequencia: 2,
  recomendacao: "", avaliador: "", criadoEm: new Date().toISOString(),
});

const AvaliacaoHeuristica = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<Problema[]>([]);
  const [atual, setAtual] = useState<Problema>(empty());

  useEffect(() => setLista(readLS<Problema[]>(FKEYS.heuristicas, [])), []);
  useEffect(() => writeLS(FKEYS.heuristicas, lista), [lista]);

  const porHeuristica = useMemo(() => {
    const m: Record<string, number> = {};
    lista.forEach((p) => { m[p.heuristica] = (m[p.heuristica] ?? 0) + 1; });
    return m;
  }, [lista]);

  const media = lista.length ? (lista.reduce((s, p) => s + p.severidade, 0) / lista.length).toFixed(1) : "0.0";
  const criticos = lista.filter((p) => p.severidade >= 3).length;

  const salvar = () => {
    if (!atual.descricao.trim()) { toast({ title: "Descreva o problema encontrado.", variant: "destructive" }); return; }
    setLista((p) => [{ ...atual }, ...p]);
    setAtual({ ...empty(), avaliador: atual.avaliador });
    toast({ title: "Problema registrado!" });
  };

  const mapSev = (s: number) => s >= 4 ? "Crítica" as const : s === 3 ? "Alta" as const : s === 2 ? "Média" as const : "Baixa" as const;

  const gerarBugs = () => {
    if (!lista.length) return;
    enviarParaBugs(lista.map((p) => ({
      titulo: `[${p.heuristica.split(" —")[0]}] ${p.descricao.slice(0, 70)}`,
      descricao: `Heurística: ${p.heuristica}\nLocal: ${p.local || "—"}\nSeveridade: ${SEVERIDADES[p.severidade]}\nRecomendação: ${p.recomendacao || "—"}`,
      severidade: mapSev(p.severidade),
      origem: "Avaliação Heurística",
    })));
    toast({ title: `${lista.length} problemas enviados para o Registro de Bugs.` });
  };

  const gerarBacklog = () => {
    const alvo = lista.filter((p) => p.recomendacao.trim());
    if (!alvo.length) { toast({ title: "Preencha recomendações antes de enviar.", variant: "destructive" }); return; }
    enviarParaBacklog(alvo.map((p) => ({
      titulo: `[UX] ${p.recomendacao.slice(0, 70)}`,
      descricao: `${p.heuristica}\nProblema: ${p.descricao}`,
      epico: "Melhorias de Usabilidade",
      prioridade: p.severidade >= 3 ? "Must" : "Should",
    })));
    toast({ title: `${alvo.length} melhorias enviadas para o Backlog.` });
  };

  const exportar = () => baixarMd("avaliacao-heuristica.md",
    `# Avaliação Heurística (Nielsen)\nProblemas: ${lista.length} · Severidade média: ${media} · Críticos: ${criticos}\n\n` +
    lista.map((p) => `## ${p.heuristica}\n- Local: ${p.local || "—"}\n- Severidade: ${SEVERIDADES[p.severidade]} · Frequência: ${p.frequencia}/4\n- Avaliador: ${p.avaliador || "—"}\n\n${p.descricao}\n\n**Recomendação:** ${p.recomendacao || "—"}`).join("\n\n---\n\n"));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Search className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Avaliação Heurística</h1>
            <p className="text-sm text-muted-foreground">10 heurísticas de Nielsen com severidade 0–4 e envio para bugs e backlog.</p>
          </div>
        </motion.header>

        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          <Card className="p-4"><p className="text-xs text-muted-foreground">Problemas</p><p className="text-2xl font-bold text-foreground">{lista.length}</p></Card>
          <Card className="p-4"><p className="text-xs text-muted-foreground">Severidade média</p><p className="text-2xl font-bold text-foreground">{media}</p></Card>
          <Card className="p-4"><p className="text-xs text-muted-foreground">Severidade ≥ 3</p><p className="text-2xl font-bold text-destructive">{criticos}</p></Card>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-2 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Novo problema</h2>
            <div><Label>Heurística violada</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.heuristica} onChange={(e) => setAtual({ ...atual, heuristica: e.target.value })}>
                {HEURISTICAS.map((h) => <option key={h}>{h}</option>)}
              </select>
            </div>
            <div><Label>Local / tela</Label><Input value={atual.local} onChange={(e) => setAtual({ ...atual, local: e.target.value })} placeholder="ex.: Tela de checkout" /></div>
            <div><Label>Descrição do problema</Label><Textarea rows={3} value={atual.descricao} onChange={(e) => setAtual({ ...atual, descricao: e.target.value })} /></div>
            <div><Label>Severidade</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.severidade} onChange={(e) => setAtual({ ...atual, severidade: Number(e.target.value) })}>
                {SEVERIDADES.map((s, i) => <option key={s} value={i}>{s}</option>)}
              </select>
            </div>
            <div><Label>Frequência ({atual.frequencia}/4)</Label><input type="range" min={0} max={4} className="w-full" value={atual.frequencia} onChange={(e) => setAtual({ ...atual, frequencia: Number(e.target.value) })} /></div>
            <div><Label>Recomendação</Label><Textarea rows={2} value={atual.recomendacao} onChange={(e) => setAtual({ ...atual, recomendacao: e.target.value })} /></div>
            <div><Label>Avaliador</Label><Input value={atual.avaliador} onChange={(e) => setAtual({ ...atual, avaliador: e.target.value })} /></div>
            <Button className="w-full" onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Registrar problema</Button>
            <div className="pt-2 border-t border-border space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Integrações</p>
              <Button size="sm" variant="outline" className="w-full justify-start" onClick={gerarBugs}><Send className="w-3 h-3 mr-2" /> Problemas → Registro de Bugs</Button>
              <Button size="sm" variant="outline" className="w-full justify-start" onClick={gerarBacklog}><Send className="w-3 h-3 mr-2" /> Recomendações → Backlog</Button>
            </div>
          </Card>

          <div className="lg:col-span-3 space-y-4">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-3">Problemas por heurística</h2>
              <div className="space-y-1">
                {HEURISTICAS.map((h) => {
                  const n = porHeuristica[h] ?? 0;
                  const max = Math.max(1, ...Object.values(porHeuristica));
                  return (
                    <div key={h} className="flex items-center gap-2">
                      <span className="text-[11px] w-56 shrink-0 text-muted-foreground truncate">{h}</span>
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${(n / max) * 100}%` }} />
                      </div>
                      <span className="text-xs w-6 text-right text-foreground">{n}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Registros ({lista.length})</h2>
                {lista.length > 0 && <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>}
              </div>
              {!lista.length && <p className="text-sm text-muted-foreground text-center py-6">Nenhum problema registrado.</p>}
              <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
                {lista.map((p) => (
                  <div key={p.id} className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs text-primary font-medium">{p.heuristica}</p>
                        <p className="text-sm text-foreground">{p.descricao}</p>
                      </div>
                      <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setLista((l) => l.filter((x) => x.id !== p.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                    </div>
                    <div className="flex gap-1 flex-wrap mt-2">
                      <Badge variant={p.severidade >= 3 ? "destructive" : "outline"} className="text-[10px]">Sev {p.severidade}</Badge>
                      {p.local && <Badge variant="secondary" className="text-[10px]">{p.local}</Badge>}
                      {p.avaliador && <Badge variant="outline" className="text-[10px]">{p.avaliador}</Badge>}
                    </div>
                    {p.recomendacao && <p className="text-xs text-muted-foreground mt-1">💡 {p.recomendacao}</p>}
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

export default AvaliacaoHeuristica;
