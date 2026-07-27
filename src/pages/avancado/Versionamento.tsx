import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Copy, Plus, Trash2, Download } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, baixarMd } from "@/lib/ferramentas-store";

type Registro = { id: string; itemId: string; titulo: string; tipo: string; branch: string; commit: string; pr: string; criadoEm: string };

const TIPOS = ["feat", "fix", "docs", "refactor", "test", "chore"] as const;

const slug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);

const Versionamento = () => {
  const { toast } = useToast();
  const [itens, setItens] = useState<any[]>([]);
  const [bugs, setBugs] = useState<any[]>([]);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [sel, setSel] = useState("");
  const [tipo, setTipo] = useState<string>("feat");
  const [escopo, setEscopo] = useState("app");

  useEffect(() => {
    setItens(readLS<any[]>(FKEYS.backlog, []));
    setBugs(readLS<any[]>(FKEYS.bugs, []));
    setRegistros(readLS<Registro[]>(FKEYS.versionamento, []));
  }, []);
  useEffect(() => writeLS(FKEYS.versionamento, registros), [registros]);

  const opcoes = useMemo(() => [
    ...itens.map((b) => ({ id: b.id, titulo: b.titulo, tipoSugerido: "feat" })),
    ...bugs.map((b) => ({ id: b.id, titulo: b.titulo, tipoSugerido: "fix" })),
  ], [itens, bugs]);

  const item = opcoes.find((o) => o.id === sel);
  const branch = item ? `${tipo === "fix" ? "bugfix" : "feature"}/${item.id.slice(0, 4)}-${slug(item.titulo)}` : "";
  const commit = item ? `${tipo}(${escopo}): ${item.titulo.toLowerCase()}` : "";
  const pr = item ? `[${tipo.toUpperCase()}] ${item.titulo}\n\n## O que muda\n- \n\n## Como testar\n1. \n\n## Checklist\n- [ ] Casos de teste executados\n- [ ] Sem regressões conhecidas` : "";

  const copiar = (txt: string) => { navigator.clipboard.writeText(txt); toast({ title: "Copiado para a área de transferência." }); };

  const registrar = () => {
    if (!item) { toast({ title: "Selecione um item do Backlog ou Bug.", variant: "destructive" }); return; }
    setRegistros((p) => [{ id: uid(), itemId: item.id, titulo: item.titulo, tipo, branch, commit, pr, criadoEm: new Date().toISOString() }, ...p]);
    toast({ title: "Registro de versionamento criado." });
  };

  const exportar = () => baixarMd("convencoes-versionamento.md",
    registros.map((r) => `## ${r.titulo}\n- Branch: \`${r.branch}\`\n- Commit: \`${r.commit}\``).join("\n\n"));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><GitBranch className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Integração com Versionamento</h1>
            <p className="text-sm text-muted-foreground">Gere branches, commits semânticos e descrições de PR a partir do Backlog e dos Bugs.</p>
          </div>
        </motion.header>

        <Card className="p-6 space-y-4 mb-6">
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="sm:col-span-3"><Label>Item</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={sel}
                onChange={(e) => { setSel(e.target.value); const o = opcoes.find((x) => x.id === e.target.value); if (o) setTipo(o.tipoSugerido); }}>
                <option value="">— selecione um item do Backlog ou um Bug —</option>
                {opcoes.map((o) => <option key={o.id} value={o.id}>{o.titulo}</option>)}
              </select>
            </div>
            <div><Label>Tipo (Conventional Commits)</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                {TIPOS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div><Label>Escopo</Label><Input value={escopo} onChange={(e) => setEscopo(e.target.value)} /></div>
          </div>

          {item && (
            <div className="space-y-3">
              {[{ l: "Branch", v: branch }, { l: "Commit", v: commit }].map((c) => (
                <div key={c.l} className="flex items-center gap-2">
                  <Badge variant="secondary" className="w-20 justify-center">{c.l}</Badge>
                  <code className="flex-1 text-xs bg-muted rounded px-3 py-2 overflow-x-auto">{c.v}</code>
                  <Button size="icon" variant="ghost" onClick={() => copiar(c.v)}><Copy className="w-4 h-4" /></Button>
                </div>
              ))}
              <div>
                <Label>Descrição do Pull Request</Label>
                <pre className="text-xs bg-muted rounded p-3 whitespace-pre-wrap">{pr}</pre>
                <Button size="sm" variant="outline" className="mt-2" onClick={() => copiar(pr)}><Copy className="w-3 h-3 mr-1" /> Copiar PR</Button>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={registrar}><Plus className="w-4 h-4 mr-1" /> Registrar</Button>
            <Button variant="outline" onClick={exportar}><Download className="w-4 h-4 mr-1" /> Exportar .md</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-3">Registros</h2>
          {!registros.length && <p className="text-sm text-muted-foreground">Nenhum registro ainda.</p>}
          <div className="space-y-2">
            {registros.map((r) => (
              <div key={r.id} className="flex items-center gap-2 border-b border-border pb-2">
                <Badge variant="outline">{r.tipo}</Badge>
                <code className="text-xs flex-1 truncate">{r.branch}</code>
                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setRegistros((p) => p.filter((x) => x.id !== r.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
};

export default Versionamento;
