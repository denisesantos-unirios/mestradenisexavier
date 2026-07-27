import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Bug, Plus, Trash2, Download, Send } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, baixarMd, enviarParaBacklog } from "@/lib/ferramentas-store";

type Severidade = "Crítica" | "Alta" | "Média" | "Baixa";
type StatusBug = "Aberto" | "Em análise" | "Corrigido" | "Reaberto" | "Fechado";

type BugItem = {
  id: string; titulo: string; descricao: string; passos: string; esperado: string; obtido: string;
  severidade: Severidade; prioridade: string; status: StatusBug; ambiente: string; responsavel: string;
  origem: string; criadoEm: string;
};

const empty = (): BugItem => ({
  id: uid(), titulo: "", descricao: "", passos: "", esperado: "", obtido: "", severidade: "Média",
  prioridade: "Média", status: "Aberto", ambiente: "", responsavel: "", origem: "Manual", criadoEm: new Date().toISOString(),
});

const corSev: Record<Severidade, string> = {
  "Crítica": "bg-destructive/20 text-destructive",
  "Alta": "bg-orange-500/15 text-orange-700",
  "Média": "bg-amber-500/15 text-amber-700",
  "Baixa": "bg-muted text-muted-foreground",
};

const RegistroBugs = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<BugItem[]>([]);
  const [atual, setAtual] = useState<BugItem>(empty());
  const [filtro, setFiltro] = useState<string>("Todos");

  useEffect(() => setLista(readLS<BugItem[]>(FKEYS.bugs, [])), []);
  useEffect(() => writeLS(FKEYS.bugs, lista), [lista]);

  const visiveis = useMemo(() => filtro === "Todos" ? lista : lista.filter((b) => b.status === filtro), [lista, filtro]);
  const abertos = lista.filter((b) => b.status !== "Fechado" && b.status !== "Corrigido").length;

  const salvar = () => {
    if (!atual.titulo.trim()) { toast({ title: "Informe o título do bug.", variant: "destructive" }); return; }
    setLista((p) => [{ ...atual }, ...p]);
    setAtual(empty());
    toast({ title: "Bug registrado!" });
  };

  const enviarKanban = () => {
    const alvo = lista.filter((b) => b.status === "Aberto" || b.status === "Reaberto");
    if (!alvo.length) { toast({ title: "Nenhum bug aberto.", variant: "destructive" }); return; }
    const atualK = readLS<{ colunas?: any[]; cards?: any[] }>(FKEYS.kanban, {});
    const colunas = atualK.colunas ?? [
      { nome: "Backlog", wip: null }, { nome: "To Do", wip: 5 }, { nome: "Doing", wip: 3 }, { nome: "Review", wip: 3 }, { nome: "Done", wip: null },
    ];
    const novos = alvo.map((b) => ({
      id: uid(), titulo: `🐞 ${b.titulo}`, responsavel: b.responsavel || "—",
      prioridade: (b.severidade === "Crítica" || b.severidade === "Alta" ? "Alta" : b.severidade === "Média" ? "Média" : "Baixa") as "Alta" | "Média" | "Baixa",
      coluna: 0,
    }));
    writeLS(FKEYS.kanban, { colunas, cards: [...(atualK.cards ?? []), ...novos] });
    toast({ title: `${novos.length} bugs enviados para o Kanban.` });
  };

  const enviarBacklog = () => {
    const alvo = lista.filter((b) => b.status !== "Fechado");
    if (!alvo.length) { toast({ title: "Nenhum bug para enviar.", variant: "destructive" }); return; }
    enviarParaBacklog(alvo.map((b) => ({
      titulo: `[Bug] ${b.titulo}`, descricao: b.descricao || b.obtido, epico: "Correções",
      prioridade: b.severidade === "Crítica" || b.severidade === "Alta" ? "Must" : "Should",
    })));
    toast({ title: `${alvo.length} bugs enviados para o Backlog.` });
  };

  const exportar = () => baixarMd("registro-bugs.md", lista.map((b) =>
    `## ${b.titulo}\n- Severidade: ${b.severidade} · Status: ${b.status} · Origem: ${b.origem}\n- Ambiente: ${b.ambiente || "—"} · Responsável: ${b.responsavel || "—"}\n\n${b.descricao || ""}\n\n**Passos**\n${b.passos || "—"}\n\n**Esperado:** ${b.esperado || "—"}\n**Obtido:** ${b.obtido || "—"}`).join("\n\n---\n\n"));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Bug className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Registro de Bugs</h1>
            <p className="text-sm text-muted-foreground">{lista.length} registros · {abertos} em aberto. Recebe falhas de testes, heurísticas e acessibilidade.</p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-2 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Novo bug</h2>
            <div><Label>Título</Label><Input value={atual.titulo} onChange={(e) => setAtual({ ...atual, titulo: e.target.value })} /></div>
            <div><Label>Descrição</Label><Textarea rows={2} value={atual.descricao} onChange={(e) => setAtual({ ...atual, descricao: e.target.value })} /></div>
            <div><Label>Passos para reproduzir</Label><Textarea rows={3} value={atual.passos} onChange={(e) => setAtual({ ...atual, passos: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-2">
              <div><Label>Esperado</Label><Textarea rows={2} value={atual.esperado} onChange={(e) => setAtual({ ...atual, esperado: e.target.value })} /></div>
              <div><Label>Obtido</Label><Textarea rows={2} value={atual.obtido} onChange={(e) => setAtual({ ...atual, obtido: e.target.value })} /></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div><Label>Severidade</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.severidade} onChange={(e) => setAtual({ ...atual, severidade: e.target.value as Severidade })}>
                  <option>Crítica</option><option>Alta</option><option>Média</option><option>Baixa</option>
                </select>
              </div>
              <div><Label>Ambiente</Label><Input placeholder="ex.: Chrome / Android" value={atual.ambiente} onChange={(e) => setAtual({ ...atual, ambiente: e.target.value })} /></div>
            </div>
            <div><Label>Responsável</Label><Input value={atual.responsavel} onChange={(e) => setAtual({ ...atual, responsavel: e.target.value })} /></div>
            <div className="flex gap-2">
              <Button className="flex-1" onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Registrar</Button>
              <Button variant="outline" onClick={() => setAtual(empty())}>Limpar</Button>
            </div>
            <div className="pt-2 border-t border-border space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Integrações</p>
              <Button size="sm" variant="outline" className="w-full justify-start" onClick={enviarKanban}><Send className="w-3 h-3 mr-2" /> Bugs abertos → Kanban</Button>
              <Button size="sm" variant="outline" className="w-full justify-start" onClick={enviarBacklog}><Send className="w-3 h-3 mr-2" /> Bugs → Backlog</Button>
            </div>
          </Card>

          <Card className="lg:col-span-3 p-6 space-y-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h2 className="text-lg font-semibold">Bugs ({visiveis.length})</h2>
              <div className="flex gap-2">
                <select className="h-9 rounded-md border border-input bg-background px-2 text-xs" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                  {["Todos", "Aberto", "Em análise", "Corrigido", "Reaberto", "Fechado"].map((s) => <option key={s}>{s}</option>)}
                </select>
                {lista.length > 0 && <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>}
              </div>
            </div>
            {!visiveis.length && <p className="text-sm text-muted-foreground text-center py-8">Nenhum bug neste filtro.</p>}
            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
              {visiveis.map((b) => (
                <div key={b.id} className="p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-foreground">{b.titulo}</p>
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setLista((p) => p.filter((x) => x.id !== b.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                  </div>
                  {b.descricao && <p className="text-xs text-muted-foreground mt-1 whitespace-pre-line line-clamp-3">{b.descricao}</p>}
                  <div className="flex gap-2 items-center mt-2 flex-wrap">
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${corSev[b.severidade]}`}>{b.severidade}</span>
                    <Badge variant="outline" className="text-[10px]">{b.origem}</Badge>
                    {b.ambiente && <Badge variant="secondary" className="text-[10px]">{b.ambiente}</Badge>}
                    <select className="h-8 rounded-md border border-input bg-background px-2 text-xs" value={b.status}
                      onChange={(e) => setLista((p) => p.map((x) => x.id === b.id ? { ...x, status: e.target.value as StatusBug } : x))}>
                      {["Aberto", "Em análise", "Corrigido", "Reaberto", "Fechado"].map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default RegistroBugs;
