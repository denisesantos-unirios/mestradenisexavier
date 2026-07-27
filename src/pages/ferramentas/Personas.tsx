import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserCircle, Plus, Trash2, Download, Send } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, prependLS, baixarMd } from "@/lib/ferramentas-store";

type Item = { id: string; texto: string };

export type Persona = {
  id: string;
  nome: string;
  idade: string;
  cargo: string;
  contexto: string;
  bio: string;
  nivelTecnologia: string;
  objetivos: Item[];
  frustracoes: Item[];
  citacao: string;
  origem?: string;
  criadoEm: string;
};

const empty = (): Persona => ({
  id: uid(), nome: "", idade: "", cargo: "", contexto: "", bio: "", nivelTecnologia: "Intermediário",
  objetivos: [{ id: uid(), texto: "" }], frustracoes: [{ id: uid(), texto: "" }], citacao: "", criadoEm: new Date().toISOString(),
});

const Personas = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<Persona[]>([]);
  const [atual, setAtual] = useState<Persona>(empty());

  useEffect(() => setLista(readLS<Persona[]>(FKEYS.personas, [])), []);
  useEffect(() => writeLS(FKEYS.personas, lista), [lista]);

  const setItens = (campo: "objetivos" | "frustracoes", itens: Item[]) => setAtual({ ...atual, [campo]: itens });

  const salvar = () => {
    if (!atual.nome.trim()) { toast({ title: "Informe o nome da persona.", variant: "destructive" }); return; }
    setLista((p) => [{ ...atual }, ...p]);
    setAtual(empty());
    toast({ title: "Persona salva!" });
  };

  const enviarHistorias = (p: Persona) => {
    const objs = p.objetivos.filter((o) => o.texto.trim());
    if (!objs.length) { toast({ title: "Persona sem objetivos.", variant: "destructive" }); return; }
    prependLS(FKEYS.historias, objs.map((o) => ({
      id: uid(), persona: p.nome, acao: o.texto, beneficio: "atingir meu objetivo com menos esforço",
      prioridade: "Should", estimativa: 3, criterios: [],
      invest: { I: true, N: true, V: true, E: true, S: true, T: false },
      criadoEm: new Date().toISOString(), origemModelagem: "[Personas]",
    })));
    toast({ title: `${objs.length} histórias criadas a partir de ${p.nome}.` });
  };

  const criarJornada = (p: Persona) => {
    prependLS(FKEYS.jornadas, [{
      id: uid(), personaId: p.id, persona: p.nome, cenario: `Jornada de ${p.nome}`, objetivo: p.objetivos[0]?.texto ?? "",
      etapas: ["Descoberta", "Consideração", "Uso", "Retenção"].map((fase) => ({
        id: uid(), fase, acao: "", pensamento: "", emocao: 3, pontoContato: "", dor: "", oportunidade: "",
      })),
      criadoEm: new Date().toISOString(),
    }]);
    toast({ title: `Jornada criada para ${p.nome} em Ferramentas → Jornada do Usuário.` });
  };

  const exportar = () => baixarMd("personas.md", lista.map((p) =>
    `## ${p.nome}${p.idade ? `, ${p.idade}` : ""} — ${p.cargo || "—"}\n> ${p.citacao || "—"}\n\n- Contexto: ${p.contexto || "—"}\n- Tecnologia: ${p.nivelTecnologia}\n- Bio: ${p.bio || "—"}\n\n**Objetivos**\n${p.objetivos.filter(o=>o.texto).map(o=>`- ${o.texto}`).join("\n") || "—"}\n\n**Frustrações**\n${p.frustracoes.filter(o=>o.texto).map(o=>`- ${o.texto}`).join("\n") || "—"}`).join("\n\n---\n\n"));

  const ListaEditavel = ({ campo, label }: { campo: "objetivos" | "frustracoes"; label: string }) => (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label>{label}</Label>
        <Button size="sm" variant="outline" onClick={() => setItens(campo, [...atual[campo], { id: uid(), texto: "" }])}><Plus className="w-3 h-3" /></Button>
      </div>
      <div className="space-y-2">
        {atual[campo].map((it) => (
          <div key={it.id} className="flex gap-2">
            <Input value={it.texto} onChange={(e) => setItens(campo, atual[campo].map((x) => x.id === it.id ? { ...x, texto: e.target.value } : x))} />
            <Button size="icon" variant="ghost" onClick={() => setItens(campo, atual[campo].filter((x) => x.id !== it.id))}><Trash2 className="w-4 h-4 text-destructive" /></Button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><UserCircle className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Personas</h1>
            <p className="text-sm text-muted-foreground">Modele usuários-alvo e gere histórias e jornadas a partir deles.</p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-3 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Nova persona</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2"><Label>Nome</Label><Input value={atual.nome} onChange={(e) => setAtual({ ...atual, nome: e.target.value })} placeholder="ex.: Judy, servidora do Detran" /></div>
              <div><Label>Idade</Label><Input value={atual.idade} onChange={(e) => setAtual({ ...atual, idade: e.target.value })} placeholder="38" /></div>
              <div><Label>Cargo</Label><Input value={atual.cargo} onChange={(e) => setAtual({ ...atual, cargo: e.target.value })} /></div>
              <div><Label>Contexto de uso</Label><Input value={atual.contexto} onChange={(e) => setAtual({ ...atual, contexto: e.target.value })} placeholder="ex.: atendimento presencial" /></div>
              <div><Label>Nível de tecnologia</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.nivelTecnologia} onChange={(e) => setAtual({ ...atual, nivelTecnologia: e.target.value })}>
                  <option>Básico</option><option>Intermediário</option><option>Avançado</option>
                </select>
              </div>
            </div>
            <div><Label>Bio / história</Label><Textarea rows={3} value={atual.bio} onChange={(e) => setAtual({ ...atual, bio: e.target.value })} /></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <ListaEditavel campo="objetivos" label="Objetivos" />
              <ListaEditavel campo="frustracoes" label="Frustrações / dores" />
            </div>
            <div><Label>Citação marcante</Label><Input value={atual.citacao} onChange={(e) => setAtual({ ...atual, citacao: e.target.value })} placeholder="“Preciso resolver isso em 2 minutos.”" /></div>
            <div className="flex gap-2">
              <Button className="flex-1" onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Salvar</Button>
              <Button variant="outline" onClick={() => setAtual(empty())}>Limpar</Button>
            </div>
          </Card>

          <Card className="lg:col-span-2 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Personas ({lista.length})</h2>
              {lista.length > 0 && <Button size="sm" variant="outline" onClick={exportar}><Download className="w-3 h-3 mr-1" /> .md</Button>}
            </div>
            {!lista.length && <p className="text-sm text-muted-foreground text-center py-8">Nenhuma persona criada.</p>}
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {lista.map((p) => (
                <div key={p.id} className="p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{p.nome}</p>
                      <p className="text-xs text-muted-foreground">{p.cargo}{p.idade && ` · ${p.idade} anos`}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => setLista((l) => l.filter((x) => x.id !== p.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                  </div>
                  {p.citacao && <p className="text-xs italic text-muted-foreground mt-1">“{p.citacao}”</p>}
                  <div className="flex gap-1 flex-wrap mt-2">
                    <Badge variant="outline" className="text-[10px]">{p.objetivos.filter(o=>o.texto).length} objetivos</Badge>
                    <Badge variant="outline" className="text-[10px]">{p.frustracoes.filter(o=>o.texto).length} dores</Badge>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={() => enviarHistorias(p)}><Send className="w-3 h-3 mr-1" /> Histórias</Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={() => criarJornada(p)}><Send className="w-3 h-3 mr-1" /> Jornada</Button>
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

export default Personas;
