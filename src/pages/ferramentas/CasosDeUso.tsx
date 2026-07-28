import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Plus, Trash2, Download, Copy } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { writeLS } from "@/lib/ferramentas-store";

type Passo = { id: string; texto: string };
type FluxoAlt = { id: string; nome: string; passos: Passo[] };

type CasoUso = {
  id: string;
  codigo: string;
  nome: string;
  ator: string;
  atoresSecundarios: string;
  objetivo: string;
  prioridade: "Alta" | "Média" | "Baixa";
  preCondicoes: string;
  posCondicoes: string;
  fluxoPrincipal: Passo[];
  fluxosAlternativos: FluxoAlt[];
  regras: string;
  criadoEm: string;
};

const STORAGE_KEY = "ferramentas_casos_uso";
const uid = () => Math.random().toString(36).slice(2, 10);

const empty = (): CasoUso => ({
  id: uid(),
  codigo: "",
  nome: "",
  ator: "",
  atoresSecundarios: "",
  objetivo: "",
  prioridade: "Média",
  preCondicoes: "",
  posCondicoes: "",
  fluxoPrincipal: [{ id: uid(), texto: "" }],
  fluxosAlternativos: [],
  regras: "",
  criadoEm: new Date().toISOString(),
});

const CasosDeUso = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<CasoUso[]>([]);
  const [atual, setAtual] = useState<CasoUso>(empty());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLista(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    writeLS(STORAGE_KEY, lista);
  }, [lista]);

  const proxCodigo = useMemo(() => `UC${String(lista.length + 1).padStart(3, "0")}`, [lista.length]);

  const salvar = () => {
    if (!atual.nome.trim() || !atual.ator.trim()) {
      toast({ title: "Informe pelo menos nome e ator principal.", variant: "destructive" });
      return;
    }
    const codigo = atual.codigo.trim() || proxCodigo;
    setLista((p) => [{ ...atual, codigo }, ...p]);
    setAtual(empty());
    toast({ title: "Caso de uso salvo!" });
  };

  const remover = (id: string) => setLista((p) => p.filter((c) => c.id !== id));

  const addPasso = () =>
    setAtual({ ...atual, fluxoPrincipal: [...atual.fluxoPrincipal, { id: uid(), texto: "" }] });
  const editPasso = (id: string, texto: string) =>
    setAtual({ ...atual, fluxoPrincipal: atual.fluxoPrincipal.map((p) => p.id === id ? { ...p, texto } : p) });
  const rmPasso = (id: string) =>
    setAtual({ ...atual, fluxoPrincipal: atual.fluxoPrincipal.filter((p) => p.id !== id) });

  const addFluxoAlt = () =>
    setAtual({ ...atual, fluxosAlternativos: [...atual.fluxosAlternativos, { id: uid(), nome: "", passos: [{ id: uid(), texto: "" }] }] });
  const editFluxoAltNome = (id: string, nome: string) =>
    setAtual({ ...atual, fluxosAlternativos: atual.fluxosAlternativos.map((f) => f.id === id ? { ...f, nome } : f) });
  const rmFluxoAlt = (id: string) =>
    setAtual({ ...atual, fluxosAlternativos: atual.fluxosAlternativos.filter((f) => f.id !== id) });
  const addPassoAlt = (fid: string) =>
    setAtual({ ...atual, fluxosAlternativos: atual.fluxosAlternativos.map((f) => f.id === fid ? { ...f, passos: [...f.passos, { id: uid(), texto: "" }] } : f) });
  const editPassoAlt = (fid: string, pid: string, texto: string) =>
    setAtual({ ...atual, fluxosAlternativos: atual.fluxosAlternativos.map((f) => f.id === fid ? { ...f, passos: f.passos.map((p) => p.id === pid ? { ...p, texto } : p) } : f) });
  const rmPassoAlt = (fid: string, pid: string) =>
    setAtual({ ...atual, fluxosAlternativos: atual.fluxosAlternativos.map((f) => f.id === fid ? { ...f, passos: f.passos.filter((p) => p.id !== pid) } : f) });

  const formatar = (c: CasoUso) => {
    const passos = c.fluxoPrincipal.filter((p) => p.texto.trim()).map((p, i) => `${i + 1}. ${p.texto}`).join("\n");
    const alt = c.fluxosAlternativos.map((f) => {
      const ps = f.passos.filter((p) => p.texto.trim()).map((p, i) => `  ${i + 1}. ${p.texto}`).join("\n");
      return `**${f.nome || "Fluxo alternativo"}**\n${ps}`;
    }).join("\n\n");
    return `# ${c.codigo} — ${c.nome}
- Ator principal: ${c.ator}
- Atores secundários: ${c.atoresSecundarios || "—"}
- Prioridade: ${c.prioridade}
- Objetivo: ${c.objetivo || "—"}

## Pré-condições
${c.preCondicoes || "—"}

## Fluxo principal
${passos || "—"}

## Fluxos alternativos
${alt || "—"}

## Pós-condições
${c.posCondicoes || "—"}

## Regras de negócio
${c.regras || "—"}
`;
  };

  const copiar = async (c: CasoUso) => {
    await navigator.clipboard.writeText(formatar(c));
    toast({ title: "Copiado." });
  };

  const exportar = () => {
    const texto = lista.map(formatar).join("\n---\n\n");
    const blob = new Blob([texto], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "casos-de-uso.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Casos de Uso</h1>
              <p className="text-sm text-muted-foreground">Especifique casos de uso completos (UML) com fluxos e regras.</p>
            </div>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-3 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Novo caso de uso</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <Label>Código</Label>
                <Input placeholder={proxCodigo} value={atual.codigo} onChange={(e) => setAtual({ ...atual, codigo: e.target.value })} />
              </div>
              <div className="sm:col-span-2">
                <Label>Nome</Label>
                <Input placeholder="ex.: Realizar Matrícula" value={atual.nome} onChange={(e) => setAtual({ ...atual, nome: e.target.value })} />
              </div>
              <div>
                <Label>Ator principal</Label>
                <Input placeholder="ex.: Aluno" value={atual.ator} onChange={(e) => setAtual({ ...atual, ator: e.target.value })} />
              </div>
              <div>
                <Label>Atores secundários</Label>
                <Input placeholder="ex.: Sistema Financeiro" value={atual.atoresSecundarios} onChange={(e) => setAtual({ ...atual, atoresSecundarios: e.target.value })} />
              </div>
              <div>
                <Label>Prioridade</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.prioridade} onChange={(e) => setAtual({ ...atual, prioridade: e.target.value as CasoUso["prioridade"] })}>
                  <option>Alta</option><option>Média</option><option>Baixa</option>
                </select>
              </div>
            </div>

            <div>
              <Label>Objetivo</Label>
              <Textarea rows={2} placeholder="O que o ator deseja alcançar" value={atual.objetivo} onChange={(e) => setAtual({ ...atual, objetivo: e.target.value })} />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label>Pré-condições</Label>
                <Textarea rows={3} placeholder="ex.: Usuário autenticado" value={atual.preCondicoes} onChange={(e) => setAtual({ ...atual, preCondicoes: e.target.value })} />
              </div>
              <div>
                <Label>Pós-condições</Label>
                <Textarea rows={3} placeholder="ex.: Matrícula registrada no sistema" value={atual.posCondicoes} onChange={(e) => setAtual({ ...atual, posCondicoes: e.target.value })} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Fluxo principal</Label>
                <Button size="sm" variant="outline" onClick={addPasso}><Plus className="w-3 h-3 mr-1" /> Passo</Button>
              </div>
              <div className="space-y-2">
                {atual.fluxoPrincipal.map((p, idx) => (
                  <div key={p.id} className="flex gap-2 items-start">
                    <span className="text-xs font-mono text-muted-foreground pt-3 w-6">{String(idx + 1).padStart(2, "0")}</span>
                    <Textarea className="flex-1 min-h-[50px]" placeholder="Ação do ator ou resposta do sistema" value={p.texto} onChange={(e) => editPasso(p.id, e.target.value)} />
                    <Button size="icon" variant="ghost" onClick={() => rmPasso(p.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Fluxos alternativos / exceções</Label>
                <Button size="sm" variant="outline" onClick={addFluxoAlt}><Plus className="w-3 h-3 mr-1" /> Fluxo</Button>
              </div>
              <div className="space-y-3">
                {atual.fluxosAlternativos.map((f) => (
                  <div key={f.id} className="p-3 border border-border rounded-lg space-y-2">
                    <div className="flex gap-2">
                      <Input placeholder="ex.: A1 — Dados inválidos" value={f.nome} onChange={(e) => editFluxoAltNome(f.id, e.target.value)} />
                      <Button size="icon" variant="ghost" onClick={() => rmFluxoAlt(f.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                    </div>
                    {f.passos.map((p, idx) => (
                      <div key={p.id} className="flex gap-2 items-start">
                        <span className="text-xs font-mono text-muted-foreground pt-3 w-6">{String(idx + 1).padStart(2, "0")}</span>
                        <Textarea className="flex-1 min-h-[40px]" placeholder="Passo alternativo" value={p.texto} onChange={(e) => editPassoAlt(f.id, p.id, e.target.value)} />
                        <Button size="icon" variant="ghost" onClick={() => rmPassoAlt(f.id, p.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                      </div>
                    ))}
                    <Button size="sm" variant="ghost" onClick={() => addPassoAlt(f.id)}><Plus className="w-3 h-3 mr-1" /> Passo</Button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>Regras de negócio</Label>
              <Textarea rows={3} placeholder="Uma regra por linha" value={atual.regras} onChange={(e) => setAtual({ ...atual, regras: e.target.value })} />
            </div>

            <div className="flex gap-2">
              <Button className="flex-1" onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Salvar</Button>
              <Button variant="outline" onClick={() => setAtual(empty())}>Limpar</Button>
            </div>
          </Card>

          <Card className="lg:col-span-2 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Especificados ({lista.length})</h2>
              {lista.length > 0 && <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>}
            </div>
            {lista.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">Nenhum caso de uso salvo.</p>
            ) : (
              <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
                {lista.map((c) => (
                  <div key={c.id} className="p-3 rounded-lg border border-border bg-card">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <p className="text-xs font-mono text-primary">{c.codigo}</p>
                        <p className="text-sm font-semibold text-foreground">{c.nome}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => copiar(c)}><Copy className="w-3 h-3" /></Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => remover(c.id)}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                      </div>
                    </div>
                    <div className="flex gap-1 flex-wrap mb-1">
                      <Badge variant="secondary" className="text-[10px]">{c.ator}</Badge>
                      <Badge variant="outline" className="text-[10px]">{c.prioridade}</Badge>
                      <Badge variant="outline" className="text-[10px]">{c.fluxoPrincipal.filter((p) => p.texto.trim()).length} passos</Badge>
                    </div>
                    {c.objetivo && <p className="text-xs text-muted-foreground line-clamp-2">{c.objetivo}</p>}
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

export default CasosDeUso;
