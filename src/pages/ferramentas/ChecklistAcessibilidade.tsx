import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Accessibility, Download, Send } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, readLS, writeLS, baixarMd, enviarParaBugs, enviarParaBacklog } from "@/lib/ferramentas-store";

type Status = "Pendente" | "Conforme" | "Não conforme" | "N/A";

type Criterio = { id: string; principio: string; criterio: string; nivel: "A" | "AA" | "AAA"; ref: string };

const CRITERIOS: Criterio[] = [
  { id: "a1", principio: "Perceptível", criterio: "Todas as imagens possuem texto alternativo significativo", nivel: "A", ref: "WCAG 1.1.1" },
  { id: "a2", principio: "Perceptível", criterio: "Vídeos possuem legendas e áudios possuem transcrição", nivel: "A", ref: "WCAG 1.2.2" },
  { id: "a3", principio: "Perceptível", criterio: "A informação não depende apenas da cor", nivel: "A", ref: "WCAG 1.4.1" },
  { id: "a4", principio: "Perceptível", criterio: "Contraste de texto mínimo de 4,5:1 (3:1 para texto grande)", nivel: "AA", ref: "WCAG 1.4.3" },
  { id: "a5", principio: "Perceptível", criterio: "Texto pode ser ampliado até 200% sem perda de conteúdo", nivel: "AA", ref: "WCAG 1.4.4" },
  { id: "a6", principio: "Perceptível", criterio: "Estrutura semântica correta (headings, listas, landmarks)", nivel: "A", ref: "WCAG 1.3.1" },
  { id: "b1", principio: "Operável", criterio: "Toda a funcionalidade é acessível pelo teclado", nivel: "A", ref: "WCAG 2.1.1" },
  { id: "b2", principio: "Operável", criterio: "Não há armadilhas de foco (keyboard trap)", nivel: "A", ref: "WCAG 2.1.2" },
  { id: "b3", principio: "Operável", criterio: "Existe link para pular para o conteúdo principal", nivel: "A", ref: "WCAG 2.4.1" },
  { id: "b4", principio: "Operável", criterio: "Foco visível e ordem de tabulação lógica", nivel: "AA", ref: "WCAG 2.4.7" },
  { id: "b5", principio: "Operável", criterio: "Títulos de página e links descritivos", nivel: "A", ref: "WCAG 2.4.4" },
  { id: "b6", principio: "Operável", criterio: "Alvos de toque com no mínimo 44×44 px", nivel: "AAA", ref: "WCAG 2.5.5" },
  { id: "c1", principio: "Compreensível", criterio: "Idioma da página definido (lang)", nivel: "A", ref: "WCAG 3.1.1" },
  { id: "c2", principio: "Compreensível", criterio: "Navegação e componentes consistentes entre as telas", nivel: "AA", ref: "WCAG 3.2.3" },
  { id: "c3", principio: "Compreensível", criterio: "Erros de formulário identificados em texto e com sugestão", nivel: "A", ref: "WCAG 3.3.1" },
  { id: "c4", principio: "Compreensível", criterio: "Campos possuem rótulos e instruções claras", nivel: "A", ref: "WCAG 3.3.2" },
  { id: "d1", principio: "Robusto", criterio: "HTML válido, sem IDs duplicados", nivel: "A", ref: "WCAG 4.1.1" },
  { id: "d2", principio: "Robusto", criterio: "Componentes customizados expõem nome, função e valor (ARIA)", nivel: "A", ref: "WCAG 4.1.2" },
  { id: "d3", principio: "Robusto", criterio: "Mensagens de status anunciadas por leitores de tela", nivel: "AA", ref: "WCAG 4.1.3" },
];

type Registro = Record<string, { status: Status; nota: string }>;

const ChecklistAcessibilidade = () => {
  const { toast } = useToast();
  const [reg, setReg] = useState<Registro>({});

  useEffect(() => setReg(readLS<Registro>(FKEYS.acessibilidade, {})), []);
  useEffect(() => { if (Object.keys(reg).length) writeLS(FKEYS.acessibilidade, reg); }, [reg]);

  const get = (id: string) => reg[id] ?? { status: "Pendente" as Status, nota: "" };
  const set = (id: string, patch: Partial<{ status: Status; nota: string }>) =>
    setReg((p) => ({ ...p, [id]: { ...get(id), ...patch } }));

  const stats = useMemo(() => {
    const vals = CRITERIOS.map((c) => get(c.id).status);
    const conforme = vals.filter((s) => s === "Conforme").length;
    const naoConforme = vals.filter((s) => s === "Não conforme").length;
    const avaliados = vals.filter((s) => s !== "Pendente" && s !== "N/A").length;
    return { conforme, naoConforme, avaliados, indice: avaliados ? Math.round((conforme / avaliados) * 100) : 0 };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reg]);

  const naoConformes = CRITERIOS.filter((c) => get(c.id).status === "Não conforme");

  const gerarBugs = () => {
    if (!naoConformes.length) { toast({ title: "Nenhuma não conformidade marcada.", variant: "destructive" }); return; }
    enviarParaBugs(naoConformes.map((c) => ({
      titulo: `[A11y ${c.ref}] ${c.criterio}`,
      descricao: `Princípio: ${c.principio} · Nível ${c.nivel}\nObservação: ${get(c.id).nota || "—"}`,
      severidade: c.nivel === "A" ? "Alta" : c.nivel === "AA" ? "Média" : "Baixa",
      origem: "Checklist de Acessibilidade",
    })));
    toast({ title: `${naoConformes.length} não conformidades enviadas para o Registro de Bugs.` });
  };

  const gerarBacklog = () => {
    if (!naoConformes.length) { toast({ title: "Nenhuma não conformidade marcada.", variant: "destructive" }); return; }
    enviarParaBacklog(naoConformes.map((c) => ({
      titulo: `[Acessibilidade] ${c.criterio}`,
      descricao: `${c.ref} · Nível ${c.nivel}\n${get(c.id).nota || ""}`,
      epico: "Acessibilidade (WCAG)",
      prioridade: c.nivel === "A" ? "Must" : "Should",
    })));
    toast({ title: `${naoConformes.length} itens enviados para o Backlog.` });
  };

  const exportar = () => baixarMd("checklist-acessibilidade.md",
    `# Checklist de Acessibilidade (WCAG 2.1)\nÍndice de conformidade: ${stats.indice}% (${stats.conforme}/${stats.avaliados} avaliados)\n\n` +
    CRITERIOS.map((c) => `- [${get(c.id).status === "Conforme" ? "x" : " "}] **${c.ref}** (${c.nivel}) ${c.criterio} — ${get(c.id).status}${get(c.id).nota ? ` · ${get(c.id).nota}` : ""}`).join("\n"));

  const principios = [...new Set(CRITERIOS.map((c) => c.principio))];

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Accessibility className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Checklist de Acessibilidade</h1>
            <p className="text-sm text-muted-foreground">WCAG 2.1 (POUR) com envio das não conformidades para bugs e backlog.</p>
          </div>
        </motion.header>

        <div className="grid sm:grid-cols-4 gap-3 mb-6">
          <Card className="p-4"><p className="text-xs text-muted-foreground">Critérios</p><p className="text-2xl font-bold text-foreground">{CRITERIOS.length}</p></Card>
          <Card className="p-4"><p className="text-xs text-muted-foreground">Conformes</p><p className="text-2xl font-bold text-emerald-600">{stats.conforme}</p></Card>
          <Card className="p-4"><p className="text-xs text-muted-foreground">Não conformes</p><p className="text-2xl font-bold text-destructive">{stats.naoConforme}</p></Card>
          <Card className="p-4"><p className="text-xs text-muted-foreground">Conformidade</p><p className="text-2xl font-bold text-foreground">{stats.indice}%</p></Card>
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          <Button size="sm" variant="outline" onClick={gerarBugs}><Send className="w-3 h-3 mr-1" /> Não conformes → Bugs</Button>
          <Button size="sm" variant="outline" onClick={gerarBacklog}><Send className="w-3 h-3 mr-1" /> Não conformes → Backlog</Button>
          <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>
        </div>

        <div className="space-y-6">
          {principios.map((pr) => (
            <Card key={pr} className="p-6 space-y-3">
              <h2 className="text-lg font-semibold text-foreground">{pr}</h2>
              {CRITERIOS.filter((c) => c.principio === pr).map((c) => {
                const st = get(c.id);
                return (
                  <div key={c.id} className="p-3 rounded-lg border border-border">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-foreground">{c.criterio}</p>
                        <div className="flex gap-1 mt-1">
                          <Badge variant="outline" className="text-[10px]">{c.ref}</Badge>
                          <Badge variant="secondary" className="text-[10px]">Nível {c.nivel}</Badge>
                        </div>
                      </div>
                      <select className="h-9 rounded-md border border-input bg-background px-2 text-xs" value={st.status}
                        onChange={(e) => set(c.id, { status: e.target.value as Status })}>
                        {["Pendente", "Conforme", "Não conforme", "N/A"].map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    {st.status === "Não conforme" && (
                      <Textarea className="mt-2" rows={2} placeholder="Observação / evidência" value={st.nota} onChange={(e) => set(c.id, { nota: e.target.value })} />
                    )}
                  </div>
                );
              })}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ChecklistAcessibilidade;
