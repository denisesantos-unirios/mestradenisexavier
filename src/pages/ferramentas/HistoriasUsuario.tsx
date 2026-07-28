import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Plus, Trash2, Copy, Download, CheckCircle2, Circle, Sparkles } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { writeLS } from "@/lib/ferramentas-store";

type Criterio = { id: string; texto: string };
type Historia = {
  id: string;
  persona: string;
  acao: string;
  beneficio: string;
  prioridade: "Must" | "Should" | "Could" | "Won't";
  estimativa: number;
  criterios: Criterio[];
  invest: Record<string, boolean>;
  criadoEm: string;
};

const INVEST_ITEMS = [
  { key: "I", label: "Independente", desc: "Pode ser desenvolvida sem depender de outras histórias" },
  { key: "N", label: "Negociável", desc: "Não é um contrato rígido, aberta a discussão" },
  { key: "V", label: "Valiosa", desc: "Entrega valor claro ao usuário/negócio" },
  { key: "E", label: "Estimável", desc: "Time consegue estimar o esforço" },
  { key: "S", label: "Small (Pequena)", desc: "Cabe em uma sprint" },
  { key: "T", label: "Testável", desc: "Tem critérios de aceitação claros" },
];

const STORAGE_KEY = "ferramentas_historias_usuario";
const uid = () => Math.random().toString(36).slice(2, 10);

const emptyHistoria = (): Historia => ({
  id: uid(),
  persona: "",
  acao: "",
  beneficio: "",
  prioridade: "Should",
  estimativa: 3,
  criterios: [{ id: uid(), texto: "" }],
  invest: Object.fromEntries(INVEST_ITEMS.map((i) => [i.key, false])),
  criadoEm: new Date().toISOString(),
});

const HistoriasUsuario = () => {
  const { toast } = useToast();
  const [historias, setHistorias] = useState<Historia[]>([]);
  const [atual, setAtual] = useState<Historia>(emptyHistoria());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setHistorias(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    writeLS(STORAGE_KEY, historias);
  }, [historias]);

  const formatada = useMemo(() => {
    const persona = atual.persona.trim() || "[persona]";
    const acao = atual.acao.trim() || "[ação]";
    const beneficio = atual.beneficio.trim() || "[benefício]";
    return `Como ${persona}, quero ${acao}, para ${beneficio}.`;
  }, [atual]);

  const investScore = useMemo(
    () => Object.values(atual.invest).filter(Boolean).length,
    [atual.invest]
  );

  const salvar = () => {
    if (!atual.persona.trim() || !atual.acao.trim() || !atual.beneficio.trim()) {
      toast({ title: "Preencha persona, ação e benefício.", variant: "destructive" });
      return;
    }
    setHistorias((prev) => [{ ...atual }, ...prev]);
    setAtual(emptyHistoria());
    toast({ title: "História salva!" });
  };

  const remover = (id: string) => setHistorias((prev) => prev.filter((h) => h.id !== id));

  const copiar = async (h: Historia) => {
    const criterios = h.criterios.filter((c) => c.texto.trim()).map((c, i) => `  ${i + 1}. ${c.texto}`).join("\n");
    const texto = `Como ${h.persona}, quero ${h.acao}, para ${h.beneficio}.
Prioridade: ${h.prioridade} • Estimativa: ${h.estimativa} pts
Critérios de aceitação:
${criterios || "  (nenhum)"}`;
    await navigator.clipboard.writeText(texto);
    toast({ title: "Copiado para a área de transferência." });
  };

  const exportar = () => {
    const linhas = historias.map((h) => {
      const criterios = h.criterios.filter((c) => c.texto.trim()).map((c, i) => `  ${i + 1}. ${c.texto}`).join("\n");
      return `# ${h.prioridade} (${h.estimativa}pts)
Como ${h.persona}, quero ${h.acao}, para ${h.beneficio}.
Critérios:
${criterios || "  (nenhum)"}\n`;
    }).join("\n---\n\n");
    const blob = new Blob([linhas], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "historias-usuario.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Histórias de Usuário</h1>
              <p className="text-sm text-muted-foreground">
                Monte histórias no formato ágil, valide com INVEST e exporte para o backlog.
              </p>
            </div>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Editor */}
          <Card className="lg:col-span-3 p-6 space-y-5">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Nova história
            </h2>

            <div className="grid sm:grid-cols-3 gap-3">
              <div className="sm:col-span-3">
                <Label>Como (persona)</Label>
                <Input
                  placeholder="ex.: aluno de graduação"
                  value={atual.persona}
                  onChange={(e) => setAtual({ ...atual, persona: e.target.value })}
                />
              </div>
              <div className="sm:col-span-3">
                <Label>Quero (ação/funcionalidade)</Label>
                <Input
                  placeholder="ex.: acessar minhas notas por período"
                  value={atual.acao}
                  onChange={(e) => setAtual({ ...atual, acao: e.target.value })}
                />
              </div>
              <div className="sm:col-span-3">
                <Label>Para (benefício)</Label>
                <Input
                  placeholder="ex.: acompanhar meu desempenho ao longo do curso"
                  value={atual.beneficio}
                  onChange={(e) => setAtual({ ...atual, beneficio: e.target.value })}
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Prévia</p>
              <p className="text-sm text-foreground italic">{formatada}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label>Prioridade (MoSCoW)</Label>
                <select
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  value={atual.prioridade}
                  onChange={(e) => setAtual({ ...atual, prioridade: e.target.value as Historia["prioridade"] })}
                >
                  <option>Must</option>
                  <option>Should</option>
                  <option>Could</option>
                  <option>Won't</option>
                </select>
              </div>
              <div>
                <Label>Estimativa (story points)</Label>
                <Input
                  type="number"
                  min={1}
                  value={atual.estimativa}
                  onChange={(e) => setAtual({ ...atual, estimativa: Number(e.target.value) || 0 })}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Critérios de aceitação</Label>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    setAtual({ ...atual, criterios: [...atual.criterios, { id: uid(), texto: "" }] })
                  }
                >
                  <Plus className="w-3 h-3 mr-1" /> Adicionar
                </Button>
              </div>
              <div className="space-y-2">
                {atual.criterios.map((c, idx) => (
                  <div key={c.id} className="flex gap-2 items-start">
                    <span className="text-xs font-mono text-muted-foreground pt-3 w-6">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <Textarea
                      className="flex-1 min-h-[60px]"
                      placeholder="Dado que... Quando... Então..."
                      value={c.texto}
                      onChange={(e) =>
                        setAtual({
                          ...atual,
                          criterios: atual.criterios.map((x) =>
                            x.id === c.id ? { ...x, texto: e.target.value } : x
                          ),
                        })
                      }
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        setAtual({
                          ...atual,
                          criterios: atual.criterios.filter((x) => x.id !== c.id),
                        })
                      }
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Checklist INVEST</Label>
                <Badge variant={investScore === 6 ? "default" : "secondary"}>
                  {investScore}/6
                </Badge>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {INVEST_ITEMS.map((item) => {
                  const on = atual.invest[item.key];
                  return (
                    <button
                      key={item.key}
                      onClick={() =>
                        setAtual({ ...atual, invest: { ...atual.invest, [item.key]: !on } })
                      }
                      className={`flex items-start gap-2 text-left p-3 rounded-lg border transition-colors ${
                        on ? "border-primary bg-primary/10" : "border-border hover:bg-muted/50"
                      }`}
                    >
                      {on ? (
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {item.key} — {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={salvar} className="flex-1">
                <Plus className="w-4 h-4 mr-1" /> Salvar história
              </Button>
              <Button variant="outline" onClick={() => setAtual(emptyHistoria())}>
                Limpar
              </Button>
            </div>
          </Card>

          {/* Backlog */}
          <Card className="lg:col-span-2 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                Backlog ({historias.length})
              </h2>
              {historias.length > 0 && (
                <Button size="sm" variant="outline" onClick={exportar}>
                  <Download className="w-3 h-3 mr-1" /> Exportar .md
                </Button>
              )}
            </div>

            {historias.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                Nenhuma história salva ainda. Crie a primeira ao lado!
              </p>
            ) : (
              <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
                {historias.map((h) => (
                  <div key={h.id} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex gap-1 flex-wrap">
                        <Badge variant="secondary">{h.prioridade}</Badge>
                        <Badge variant="outline">{h.estimativa} pts</Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost" onClick={() => copiar(h)}>
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost" onClick={() => remover(h.id)}>
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-foreground italic mb-2">
                      Como <b>{h.persona}</b>, quero <b>{h.acao}</b>, para <b>{h.beneficio}</b>.
                    </p>
                    {h.criterios.filter((c) => c.texto.trim()).length > 0 && (
                      <ul className="text-xs text-muted-foreground list-decimal ml-4 space-y-0.5">
                        {h.criterios.filter((c) => c.texto.trim()).map((c) => (
                          <li key={c.id}>{c.texto}</li>
                        ))}
                      </ul>
                    )}
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

export default HistoriasUsuario;
