import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Route, Plus, Trash2, Download, Send } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, baixarMd, enviarParaBacklog } from "@/lib/ferramentas-store";
import type { Persona } from "./Personas";

type Etapa = {
  id: string; fase: string; acao: string; pensamento: string; emocao: number;
  pontoContato: string; dor: string; oportunidade: string;
};

type Jornada = {
  id: string; personaId?: string; persona: string; cenario: string; objetivo: string;
  etapas: Etapa[]; criadoEm: string;
};

const emojiEmocao = ["😞", "🙁", "😐", "🙂", "😀"];

const novaEtapa = (fase = ""): Etapa => ({ id: uid(), fase, acao: "", pensamento: "", emocao: 3, pontoContato: "", dor: "", oportunidade: "" });

const nova = (): Jornada => ({
  id: uid(), persona: "", cenario: "", objetivo: "",
  etapas: ["Descoberta", "Consideração", "Uso", "Retenção"].map((f) => novaEtapa(f)),
  criadoEm: new Date().toISOString(),
});

const JornadaUsuario = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<Jornada[]>([]);
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [selId, setSelId] = useState<string | null>(null);

  useEffect(() => {
    const js = readLS<Jornada[]>(FKEYS.jornadas, []);
    setLista(js);
    setPersonas(readLS<Persona[]>(FKEYS.personas, []));
    setSelId(js[0]?.id ?? null);
  }, []);
  useEffect(() => writeLS(FKEYS.jornadas, lista), [lista]);

  const sel = lista.find((j) => j.id === selId) ?? null;
  const upd = (patch: Partial<Jornada>) => setLista((p) => p.map((j) => j.id === selId ? { ...j, ...patch } : j));
  const updEtapa = (eid: string, patch: Partial<Etapa>) =>
    upd({ etapas: sel!.etapas.map((e) => e.id === eid ? { ...e, ...patch } : e) });

  const criar = () => {
    const j = nova();
    setLista((p) => [j, ...p]);
    setSelId(j.id);
  };

  const enviarOportunidades = () => {
    if (!sel) return;
    const itens = sel.etapas.filter((e) => e.oportunidade.trim()).map((e) => ({
      titulo: `[Jornada ${sel.persona || sel.cenario}] ${e.fase}: ${e.oportunidade.slice(0, 60)}`,
      descricao: `Dor: ${e.dor || "—"}\nOportunidade: ${e.oportunidade}\nPonto de contato: ${e.pontoContato || "—"}`,
      epico: "Melhorias de Jornada", prioridade: e.emocao <= 2 ? "Must" : "Should",
    }));
    if (!itens.length) { toast({ title: "Nenhuma oportunidade preenchida.", variant: "destructive" }); return; }
    enviarParaBacklog(itens);
    toast({ title: `${itens.length} oportunidades enviadas para o Backlog.` });
  };

  const exportar = () => {
    if (!sel) return;
    baixarMd("jornada-usuario.md", `# Jornada — ${sel.persona || "Persona"}\nCenário: ${sel.cenario || "—"}\nObjetivo: ${sel.objetivo || "—"}\n\n` +
      sel.etapas.map((e) => `## ${e.fase}\n- Ação: ${e.acao || "—"}\n- Pensamento: ${e.pensamento || "—"}\n- Emoção: ${emojiEmocao[e.emocao - 1]} (${e.emocao}/5)\n- Ponto de contato: ${e.pontoContato || "—"}\n- Dor: ${e.dor || "—"}\n- Oportunidade: ${e.oportunidade || "—"}`).join("\n\n"));
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Route className="w-6 h-6 text-primary" /></div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Jornada do Usuário</h1>
              <p className="text-sm text-muted-foreground">Mapeie fases, emoções, dores e oportunidades por persona.</p>
            </div>
          </div>
          <Button onClick={criar}><Plus className="w-4 h-4 mr-1" /> Nova jornada</Button>
        </motion.header>

        <div className="grid lg:grid-cols-4 gap-6">
          <Card className="p-4 space-y-2 h-fit">
            <h2 className="text-sm font-semibold">Jornadas ({lista.length})</h2>
            {!lista.length && <p className="text-xs text-muted-foreground py-4">Crie a primeira jornada.</p>}
            {lista.map((j) => (
              <button key={j.id} onClick={() => setSelId(j.id)} className={`w-full text-left p-2 rounded-md border text-xs ${selId === j.id ? "border-primary bg-primary/10" : "border-border"}`}>
                <span className="font-semibold block text-foreground">{j.persona || "Sem persona"}</span>
                <span className="text-muted-foreground">{j.cenario || "sem cenário"}</span>
              </button>
            ))}
          </Card>

          <div className="lg:col-span-3 space-y-4">
            {!sel ? (
              <Card className="p-10 text-center text-sm text-muted-foreground">Selecione ou crie uma jornada.</Card>
            ) : (
              <>
                <Card className="p-6 space-y-3">
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <Label>Persona</Label>
                      {personas.length ? (
                        <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={sel.persona} onChange={(e) => upd({ persona: e.target.value })}>
                          <option value="">Selecione…</option>
                          {personas.map((p) => <option key={p.id} value={p.nome}>{p.nome}</option>)}
                        </select>
                      ) : <Input value={sel.persona} onChange={(e) => upd({ persona: e.target.value })} placeholder="Nome da persona" />}
                    </div>
                    <div><Label>Cenário</Label><Input value={sel.cenario} onChange={(e) => upd({ cenario: e.target.value })} /></div>
                    <div><Label>Objetivo</Label><Input value={sel.objetivo} onChange={(e) => upd({ objetivo: e.target.value })} /></div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button size="sm" variant="outline" onClick={() => upd({ etapas: [...sel.etapas, novaEtapa("Nova fase")] })}><Plus className="w-3 h-3 mr-1" /> Fase</Button>
                    <Button size="sm" variant="outline" onClick={enviarOportunidades}><Send className="w-3 h-3 mr-1" /> Oportunidades → Backlog</Button>
                    <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>
                    <Button size="sm" variant="ghost" onClick={() => { setLista((p) => p.filter((j) => j.id !== sel.id)); setSelId(null); }}><Trash2 className="w-3 h-3 mr-1 text-destructive" /> Excluir</Button>
                  </div>
                </Card>

                <div className="overflow-x-auto">
                  <div className="flex gap-3 min-w-max pb-2">
                    {sel.etapas.map((e) => (
                      <Card key={e.id} className="p-4 w-[260px] space-y-2">
                        <div className="flex items-center gap-2">
                          <Input className="h-8 text-sm font-semibold" value={e.fase} onChange={(ev) => updEtapa(e.id, { fase: ev.target.value })} />
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => upd({ etapas: sel.etapas.filter((x) => x.id !== e.id) })}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                        </div>
                        <Textarea rows={2} placeholder="Ação do usuário" value={e.acao} onChange={(ev) => updEtapa(e.id, { acao: ev.target.value })} />
                        <Textarea rows={2} placeholder="Pensamento / sentimento" value={e.pensamento} onChange={(ev) => updEtapa(e.id, { pensamento: ev.target.value })} />
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{emojiEmocao[e.emocao - 1]}</span>
                          <input type="range" min={1} max={5} className="flex-1" value={e.emocao} onChange={(ev) => updEtapa(e.id, { emocao: Number(ev.target.value) })} />
                        </div>
                        <Input placeholder="Ponto de contato" value={e.pontoContato} onChange={(ev) => updEtapa(e.id, { pontoContato: ev.target.value })} />
                        <Textarea rows={2} placeholder="Dor / barreira" value={e.dor} onChange={(ev) => updEtapa(e.id, { dor: ev.target.value })} />
                        <Textarea rows={2} placeholder="Oportunidade de melhoria" value={e.oportunidade} onChange={(ev) => updEtapa(e.id, { oportunidade: ev.target.value })} />
                        {e.emocao <= 2 && <Badge variant="destructive" className="text-[10px]">Ponto crítico</Badge>}
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default JornadaUsuario;
