import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Plus, Trash2, Download, Send, Import } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, baixarMd, enviarParaBugs } from "@/lib/ferramentas-store";

type Status = "Não executado" | "Passou" | "Falhou" | "Bloqueado";

type CasoTeste = {
  id: string; codigo: string; titulo: string; origem: string; tipo: string;
  prioridade: "Alta" | "Média" | "Baixa"; preCondicoes: string; passos: string;
  esperado: string; obtido: string; status: Status; criadoEm: string;
};

const empty = (): CasoTeste => ({
  id: uid(), codigo: "", titulo: "", origem: "", tipo: "Funcional", prioridade: "Média",
  preCondicoes: "", passos: "", esperado: "", obtido: "", status: "Não executado", criadoEm: new Date().toISOString(),
});

const corStatus: Record<Status, string> = {
  "Não executado": "bg-muted text-muted-foreground",
  "Passou": "bg-emerald-500/15 text-emerald-700",
  "Falhou": "bg-destructive/15 text-destructive",
  "Bloqueado": "bg-amber-500/15 text-amber-700",
};

const CasosDeTeste = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<CasoTeste[]>([]);
  const [atual, setAtual] = useState<CasoTeste>(empty());

  useEffect(() => setLista(readLS<CasoTeste[]>(FKEYS.casosTeste, [])), []);
  useEffect(() => writeLS(FKEYS.casosTeste, lista), [lista]);

  const prox = useMemo(() => `CT${String(lista.length + 1).padStart(3, "0")}`, [lista.length]);

  const stats = useMemo(() => ({
    total: lista.length,
    passou: lista.filter((c) => c.status === "Passou").length,
    falhou: lista.filter((c) => c.status === "Falhou").length,
    cobertura: lista.length ? Math.round((lista.filter((c) => c.status !== "Não executado").length / lista.length) * 100) : 0,
  }), [lista]);

  const salvar = () => {
    if (!atual.titulo.trim()) { toast({ title: "Informe o título do caso de teste.", variant: "destructive" }); return; }
    setLista((p) => [{ ...atual, codigo: atual.codigo.trim() || prox }, ...p]);
    setAtual(empty());
    toast({ title: "Caso de teste salvo!" });
  };

  const importarCasosUso = () => {
    const cus = readLS<any[]>(FKEYS.casosUso, []);
    if (!cus.length) { toast({ title: "Nenhum caso de uso encontrado.", variant: "destructive" }); return; }
    const novos: CasoTeste[] = cus.map((c, i) => ({
      ...empty(),
      id: uid(),
      codigo: `CT${String(lista.length + i + 1).padStart(3, "0")}`,
      titulo: `Validar ${c.nome}`,
      origem: `Caso de Uso ${c.codigo ?? ""}`.trim(),
      preCondicoes: c.preCondicoes ?? "",
      passos: (c.fluxoPrincipal ?? []).filter((p: any) => p?.texto?.trim()).map((p: any, idx: number) => `${idx + 1}. ${p.texto}`).join("\n"),
      esperado: c.posCondicoes ?? "",
      prioridade: (c.prioridade ?? "Média") as CasoTeste["prioridade"],
    }));
    setLista((p) => [...novos, ...p]);
    toast({ title: `${novos.length} casos de teste gerados a partir dos Casos de Uso.` });
  };

  const importarHistorias = () => {
    const hus = readLS<any[]>(FKEYS.historias, []);
    const novos: CasoTeste[] = [];
    hus.forEach((h) => {
      const criterios = (h.criterios ?? []).filter((c: any) => c?.texto?.trim());
      const base = criterios.length ? criterios.map((c: any) => c.texto) : [h.acao];
      base.forEach((crit: string) => novos.push({
        ...empty(), id: uid(),
        codigo: `CT${String(lista.length + novos.length + 1).padStart(3, "0")}`,
        titulo: `Verificar: ${crit}`,
        origem: `História — ${h.persona ?? ""}`,
        passos: `1. Como ${h.persona ?? "usuário"}, ${h.acao ?? ""}`,
        esperado: crit,
        tipo: "Aceitação",
      }));
    });
    if (!novos.length) { toast({ title: "Nenhuma história encontrada.", variant: "destructive" }); return; }
    setLista((p) => [...novos, ...p]);
    toast({ title: `${novos.length} testes de aceitação gerados.` });
  };

  const gerarBugs = () => {
    const falhas = lista.filter((c) => c.status === "Falhou");
    if (!falhas.length) { toast({ title: "Nenhum teste com status Falhou.", variant: "destructive" }); return; }
    enviarParaBugs(falhas.map((c) => ({
      titulo: `[${c.codigo}] ${c.titulo}`,
      descricao: `Passos:\n${c.passos}\n\nEsperado: ${c.esperado || "—"}\nObtido: ${c.obtido || "—"}`,
      severidade: c.prioridade === "Alta" ? "Alta" : c.prioridade === "Baixa" ? "Baixa" : "Média",
      origem: "Casos de Teste",
    })));
    toast({ title: `${falhas.length} bugs registrados em Ferramentas → Registro de Bugs.` });
  };

  const exportar = () => baixarMd("casos-de-teste.md", lista.map((c) =>
    `## ${c.codigo} — ${c.titulo}\n- Origem: ${c.origem || "—"} · Tipo: ${c.tipo} · Prioridade: ${c.prioridade} · Status: ${c.status}\n\n**Pré-condições:** ${c.preCondicoes || "—"}\n\n**Passos**\n${c.passos || "—"}\n\n**Resultado esperado:** ${c.esperado || "—"}\n**Resultado obtido:** ${c.obtido || "—"}`).join("\n\n---\n\n"));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><ClipboardCheck className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Casos de Teste</h1>
            <p className="text-sm text-muted-foreground">Gere testes a partir de casos de uso e histórias e registre bugs das falhas.</p>
          </div>
        </motion.header>

        <div className="grid sm:grid-cols-4 gap-3 mb-6">
          {[["Total", stats.total], ["Passou", stats.passou], ["Falhou", stats.falhou], ["Execução", `${stats.cobertura}%`]].map(([l, v]) => (
            <Card key={String(l)} className="p-4"><p className="text-xs text-muted-foreground">{l}</p><p className="text-2xl font-bold text-foreground">{v}</p></Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-2 p-6 space-y-3">
            <h2 className="text-lg font-semibold">Novo caso de teste</h2>
            <div className="grid grid-cols-3 gap-2">
              <div><Label>Código</Label><Input placeholder={prox} value={atual.codigo} onChange={(e) => setAtual({ ...atual, codigo: e.target.value })} /></div>
              <div className="col-span-2"><Label>Título</Label><Input value={atual.titulo} onChange={(e) => setAtual({ ...atual, titulo: e.target.value })} /></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div><Label>Tipo</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.tipo} onChange={(e) => setAtual({ ...atual, tipo: e.target.value })}>
                  <option>Funcional</option><option>Aceitação</option><option>Usabilidade</option><option>Regressão</option><option>Desempenho</option>
                </select>
              </div>
              <div><Label>Prioridade</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.prioridade} onChange={(e) => setAtual({ ...atual, prioridade: e.target.value as CasoTeste["prioridade"] })}>
                  <option>Alta</option><option>Média</option><option>Baixa</option>
                </select>
              </div>
            </div>
            <div><Label>Pré-condições</Label><Textarea rows={2} value={atual.preCondicoes} onChange={(e) => setAtual({ ...atual, preCondicoes: e.target.value })} /></div>
            <div><Label>Passos</Label><Textarea rows={4} placeholder="Um passo por linha" value={atual.passos} onChange={(e) => setAtual({ ...atual, passos: e.target.value })} /></div>
            <div><Label>Resultado esperado</Label><Textarea rows={2} value={atual.esperado} onChange={(e) => setAtual({ ...atual, esperado: e.target.value })} /></div>
            <div className="flex gap-2">
              <Button className="flex-1" onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Salvar</Button>
              <Button variant="outline" onClick={() => setAtual(empty())}>Limpar</Button>
            </div>
            <div className="pt-2 border-t border-border space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">Integrações</p>
              <Button size="sm" variant="outline" className="w-full justify-start" onClick={importarCasosUso}><Import className="w-3 h-3 mr-2" /> Gerar a partir dos Casos de Uso</Button>
              <Button size="sm" variant="outline" className="w-full justify-start" onClick={importarHistorias}><Import className="w-3 h-3 mr-2" /> Gerar a partir das Histórias</Button>
              <Button size="sm" variant="outline" className="w-full justify-start" onClick={gerarBugs}><Send className="w-3 h-3 mr-2" /> Enviar falhas → Registro de Bugs</Button>
            </div>
          </Card>

          <Card className="lg:col-span-3 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Suíte de testes ({lista.length})</h2>
              {lista.length > 0 && <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>}
            </div>
            {!lista.length && <p className="text-sm text-muted-foreground text-center py-8">Nenhum caso de teste cadastrado.</p>}
            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
              {lista.map((c) => (
                <div key={c.id} className="p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-mono text-primary">{c.codigo} · {c.tipo}</p>
                      <p className="text-sm font-semibold text-foreground">{c.titulo}</p>
                      {c.origem && <p className="text-xs text-muted-foreground">Origem: {c.origem}</p>}
                    </div>
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setLista((p) => p.filter((x) => x.id !== c.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                  </div>
                  <div className="flex gap-2 items-center mt-2 flex-wrap">
                    <Badge variant="outline" className="text-[10px]">{c.prioridade}</Badge>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full ${corStatus[c.status]}`}>{c.status}</span>
                    <select className="h-8 rounded-md border border-input bg-background px-2 text-xs" value={c.status}
                      onChange={(e) => setLista((p) => p.map((x) => x.id === c.id ? { ...x, status: e.target.value as Status } : x))}>
                      <option>Não executado</option><option>Passou</option><option>Falhou</option><option>Bloqueado</option>
                    </select>
                  </div>
                  {c.status === "Falhou" && (
                    <Textarea className="mt-2" rows={2} placeholder="Resultado obtido (vai para o bug)" value={c.obtido}
                      onChange={(e) => setLista((p) => p.map((x) => x.id === c.id ? { ...x, obtido: e.target.value } : x))} />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default CasosDeTeste;
