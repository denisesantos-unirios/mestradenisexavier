import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Users, Plus, Trash2, Download, Send } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, prependLS, baixarMd } from "@/lib/ferramentas-store";

type Atitude = "Apoiador" | "Neutro" | "Resistente";

type Stakeholder = {
  id: string;
  nome: string;
  papel: string;
  organizacao: string;
  poder: number;
  interesse: number;
  atitude: Atitude;
  necessidades: string;
  estrategia: string;
  criadoEm: string;
};

const empty = (): Stakeholder => ({
  id: uid(), nome: "", papel: "", organizacao: "", poder: 3, interesse: 3,
  atitude: "Neutro", necessidades: "", estrategia: "", criadoEm: new Date().toISOString(),
});

const quadrante = (s: Stakeholder) =>
  s.poder >= 3 && s.interesse >= 3 ? "Gerenciar de perto"
  : s.poder >= 3 ? "Manter satisfeito"
  : s.interesse >= 3 ? "Manter informado"
  : "Monitorar";

const corQuadrante: Record<string, string> = {
  "Gerenciar de perto": "bg-primary/15 text-primary border-primary/30",
  "Manter satisfeito": "bg-amber-500/15 text-amber-700 border-amber-500/30",
  "Manter informado": "bg-sky-500/15 text-sky-700 border-sky-500/30",
  "Monitorar": "bg-muted text-muted-foreground border-border",
};

const MapaStakeholders = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<Stakeholder[]>([]);
  const [atual, setAtual] = useState<Stakeholder>(empty());

  useEffect(() => setLista(readLS<Stakeholder[]>(FKEYS.stakeholders, [])), []);
  useEffect(() => writeLS(FKEYS.stakeholders, lista), [lista]);

  const grupos = useMemo(() => {
    const q: Record<string, Stakeholder[]> = { "Gerenciar de perto": [], "Manter satisfeito": [], "Manter informado": [], "Monitorar": [] };
    lista.forEach((s) => q[quadrante(s)].push(s));
    return q;
  }, [lista]);

  const salvar = () => {
    if (!atual.nome.trim()) { toast({ title: "Informe o nome do stakeholder.", variant: "destructive" }); return; }
    setLista((p) => [{ ...atual }, ...p]);
    setAtual(empty());
    toast({ title: "Stakeholder mapeado!" });
  };

  const gerarPersonas = () => {
    if (!lista.length) return;
    prependLS(FKEYS.personas, lista.map((s) => ({
      id: uid(), nome: s.nome, idade: "", cargo: s.papel || "Stakeholder", contexto: s.organizacao,
      bio: s.necessidades, nivelTecnologia: "Intermediário",
      objetivos: s.necessidades.split("\n").filter(Boolean).map((t) => ({ id: uid(), texto: t })),
      frustracoes: [], citacao: "", origem: "Mapa de Stakeholders", criadoEm: new Date().toISOString(),
    })));
    toast({ title: `${lista.length} personas criadas em Ferramentas → Personas.` });
  };

  const enviarEstrategias = () => {
    const itens = lista.filter((s) => s.estrategia.trim()).map((s) => ({
      titulo: `[Stakeholder] ${s.nome} — ${quadrante(s)}`, descricao: s.estrategia, epico: "Engajamento de Stakeholders",
      prioridade: quadrante(s) === "Gerenciar de perto" ? "Must" : "Should",
    }));
    if (!itens.length) { toast({ title: "Nenhuma estratégia preenchida.", variant: "destructive" }); return; }
    import("@/lib/ferramentas-store").then((m) => m.enviarParaBacklog(itens));
    toast({ title: `${itens.length} ações enviadas para o Backlog.` });
  };

  const exportar = () => baixarMd("mapa-stakeholders.md", lista.map((s) =>
    `## ${s.nome} (${s.papel || "—"})\n- Organização: ${s.organizacao || "—"}\n- Poder: ${s.poder}/5 · Interesse: ${s.interesse}/5 · Atitude: ${s.atitude}\n- Quadrante: ${quadrante(s)}\n- Necessidades: ${s.necessidades || "—"}\n- Estratégia: ${s.estrategia || "—"}`).join("\n\n"));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Users className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Mapa de Stakeholders</h1>
            <p className="text-sm text-muted-foreground">Matriz Poder × Interesse, necessidades e estratégias de engajamento.</p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-2 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Novo stakeholder</h2>
            <div><Label>Nome</Label><Input value={atual.nome} onChange={(e) => setAtual({ ...atual, nome: e.target.value })} placeholder="ex.: Coordenação Acadêmica" /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Papel</Label><Input value={atual.papel} onChange={(e) => setAtual({ ...atual, papel: e.target.value })} placeholder="ex.: Patrocinador" /></div>
              <div><Label>Organização / Setor</Label><Input value={atual.organizacao} onChange={(e) => setAtual({ ...atual, organizacao: e.target.value })} /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Poder ({atual.poder})</Label><input type="range" min={1} max={5} className="w-full" value={atual.poder} onChange={(e) => setAtual({ ...atual, poder: Number(e.target.value) })} /></div>
              <div><Label>Interesse ({atual.interesse})</Label><input type="range" min={1} max={5} className="w-full" value={atual.interesse} onChange={(e) => setAtual({ ...atual, interesse: Number(e.target.value) })} /></div>
            </div>
            <div><Label>Atitude</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.atitude} onChange={(e) => setAtual({ ...atual, atitude: e.target.value as Atitude })}>
                <option>Apoiador</option><option>Neutro</option><option>Resistente</option>
              </select>
            </div>
            <div><Label>Necessidades / expectativas</Label><Textarea rows={3} value={atual.necessidades} onChange={(e) => setAtual({ ...atual, necessidades: e.target.value })} placeholder="Uma por linha" /></div>
            <div><Label>Estratégia de engajamento</Label><Textarea rows={2} value={atual.estrategia} onChange={(e) => setAtual({ ...atual, estrategia: e.target.value })} /></div>
            <div className="flex gap-2">
              <Button className="flex-1" onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Salvar</Button>
              <Button variant="outline" onClick={() => setAtual(empty())}>Limpar</Button>
            </div>
          </Card>

          <div className="lg:col-span-3 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Matriz Poder × Interesse ({lista.length})</h2>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={gerarPersonas}><Send className="w-3 h-3 mr-1" /> Personas</Button>
                  <Button size="sm" variant="outline" onClick={enviarEstrategias}><Send className="w-3 h-3 mr-1" /> Backlog</Button>
                  <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(grupos).map(([nome, itens]) => (
                  <div key={nome} className={`rounded-lg border p-3 min-h-[110px] ${corQuadrante[nome]}`}>
                    <p className="text-xs font-semibold mb-2">{nome}</p>
                    <div className="flex flex-wrap gap-1">
                      {itens.map((s) => <Badge key={s.id} variant="secondary" className="text-[10px]">{s.nome}</Badge>)}
                      {!itens.length && <span className="text-[11px] opacity-70">vazio</span>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-3">
              <h2 className="text-lg font-semibold">Stakeholders mapeados</h2>
              {!lista.length && <p className="text-sm text-muted-foreground text-center py-6">Nenhum stakeholder cadastrado.</p>}
              {lista.map((s) => (
                <div key={s.id} className="p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.nome}</p>
                      <p className="text-xs text-muted-foreground">{s.papel} {s.organizacao && `· ${s.organizacao}`}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setLista((p) => p.filter((x) => x.id !== s.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                  </div>
                  <div className="flex gap-1 flex-wrap mt-2">
                    <Badge variant="outline" className="text-[10px]">Poder {s.poder}/5</Badge>
                    <Badge variant="outline" className="text-[10px]">Interesse {s.interesse}/5</Badge>
                    <Badge variant="secondary" className="text-[10px]">{s.atitude}</Badge>
                    <Badge variant="outline" className="text-[10px]">{quadrante(s)}</Badge>
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MapaStakeholders;
