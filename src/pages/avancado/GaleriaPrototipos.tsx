import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Images, Plus, Trash2, ExternalLink, Send, Download } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, prependLS, baixarMd } from "@/lib/ferramentas-store";

type Prototipo = {
  id: string; titulo: string; descricao: string; url: string; imagem: string;
  ferramenta: string; versao: string; status: string; origem?: string; criadoEm: string;
};

const empty = (): Prototipo => ({
  id: uid(), titulo: "", descricao: "", url: "", imagem: "", ferramenta: "Figma", versao: "v1", status: "Em revisão", criadoEm: new Date().toISOString(),
});

const statusCor: Record<string, string> = {
  "Rascunho": "bg-muted text-muted-foreground",
  "Em revisão": "bg-amber-500/15 text-amber-600",
  "Validado": "bg-emerald-500/15 text-emerald-600",
  "Descartado": "bg-red-500/15 text-red-600",
};

const GaleriaPrototipos = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<Prototipo[]>([]);
  const [atual, setAtual] = useState<Prototipo>(empty());

  useEffect(() => setLista(readLS<Prototipo[]>(FKEYS.prototipos, [])), []);
  useEffect(() => writeLS(FKEYS.prototipos, lista), [lista]);

  const salvar = () => {
    if (!atual.titulo.trim()) { toast({ title: "Informe o título do protótipo.", variant: "destructive" }); return; }
    setLista((p) => [{ ...atual }, ...p]);
    setAtual(empty());
    toast({ title: "Protótipo adicionado à galeria!" });
  };

  const enviarHeuristica = (p: Prototipo) => {
    prependLS(FKEYS.heuristicas, [{
      id: uid(), avaliador: "", interface: p.titulo, data: new Date().toISOString().slice(0, 10),
      problemas: [], origem: "[Galeria de Protótipos]", criadoEm: new Date().toISOString(),
    }]);
    toast({ title: `Avaliação heurística criada para "${p.titulo}".` });
  };

  const enviarKanban = (p: Prototipo) => {
    prependLS(FKEYS.kanban, [{
      id: uid(), titulo: `Validar protótipo ${p.titulo} (${p.versao})`, descricao: p.descricao,
      coluna: "todo", responsavel: "", tag: "Protótipo", criadoEm: new Date().toISOString(),
    }]);
    toast({ title: "Card criado no Kanban." });
  };

  const exportar = () => baixarMd("galeria-prototipos.md", lista.map((p) =>
    `## ${p.titulo} — ${p.versao} (${p.status})\n- Ferramenta: ${p.ferramenta}\n- Link: ${p.url || "—"}\n- Origem: ${p.origem || "manual"}\n\n${p.descricao || "—"}`).join("\n\n---\n\n"));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Images className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Galeria de Protótipos</h1>
            <p className="text-sm text-muted-foreground">Versione protótipos (Figma, wireframes internos) e envie para avaliação.</p>
          </div>
        </motion.header>

        <Card className="p-6 space-y-4 mb-8">
          <h2 className="text-lg font-semibold">Novo protótipo</h2>
          <div className="grid sm:grid-cols-4 gap-3">
            <div className="sm:col-span-2"><Label>Título</Label><Input value={atual.titulo} onChange={(e) => setAtual({ ...atual, titulo: e.target.value })} /></div>
            <div><Label>Ferramenta</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.ferramenta} onChange={(e) => setAtual({ ...atual, ferramenta: e.target.value })}>
                <option>Figma</option><option>Wireframe interno</option><option>Adobe XD</option><option>Marvel</option><option>Papel</option>
              </select>
            </div>
            <div><Label>Versão</Label><Input value={atual.versao} onChange={(e) => setAtual({ ...atual, versao: e.target.value })} /></div>
            <div className="sm:col-span-2"><Label>Link do protótipo</Label><Input value={atual.url} onChange={(e) => setAtual({ ...atual, url: e.target.value })} placeholder="https://" /></div>
            <div className="sm:col-span-2"><Label>Imagem (URL)</Label><Input value={atual.imagem} onChange={(e) => setAtual({ ...atual, imagem: e.target.value })} placeholder="https://" /></div>
            <div className="sm:col-span-3"><Label>Descrição</Label><Textarea rows={2} value={atual.descricao} onChange={(e) => setAtual({ ...atual, descricao: e.target.value })} /></div>
            <div><Label>Status</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.status} onChange={(e) => setAtual({ ...atual, status: e.target.value })}>
                {Object.keys(statusCor).map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Adicionar</Button>
            <Button variant="outline" onClick={exportar}><Download className="w-4 h-4 mr-1" /> Exportar .md</Button>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {!lista.length && <Card className="p-6 text-sm text-muted-foreground md:col-span-3">Nenhum protótipo na galeria. Você também pode enviar telas de Ferramentas → Wireframes.</Card>}
          {lista.map((p) => (
            <Card key={p.id} className="overflow-hidden flex flex-col">
              <div className="h-40 bg-muted flex items-center justify-center">
                {p.imagem ? <img src={p.imagem} alt={`Protótipo ${p.titulo}`} loading="lazy" className="w-full h-full object-cover" />
                  : <Images className="w-10 h-10 text-muted-foreground" />}
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-tight">{p.titulo}</h3>
                  <Badge className={statusCor[p.status] ?? ""}>{p.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground flex-1">{p.descricao || "—"}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary">{p.ferramenta}</Badge><Badge variant="outline">{p.versao}</Badge>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {p.url && <Button size="sm" variant="outline" asChild><a href={p.url} target="_blank" rel="noreferrer"><ExternalLink className="w-3 h-3 mr-1" /> Abrir</a></Button>}
                  <Button size="sm" variant="outline" onClick={() => enviarHeuristica(p)}><Send className="w-3 h-3 mr-1" /> Heurística</Button>
                  <Button size="sm" variant="outline" onClick={() => enviarKanban(p)}><Send className="w-3 h-3 mr-1" /> Kanban</Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setLista((x) => x.filter((y) => y.id !== p.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GaleriaPrototipos;
