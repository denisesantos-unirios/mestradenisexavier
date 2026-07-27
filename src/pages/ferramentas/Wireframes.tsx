import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, Plus, Trash2, Download, Send, ArrowUp, ArrowDown, Image } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, prependLS, baixarMd } from "@/lib/ferramentas-store";

type Bloco = { id: string; tipo: string; rotulo: string; largura: 1 | 2 | 3; altura: "p" | "m" | "g" };

export type Wireframe = {
  id: string;
  tela: string;
  objetivo: string;
  persona: string;
  dispositivo: string;
  anotacoes: string;
  blocos: Bloco[];
  criadoEm: string;
};

const TIPOS = ["Cabeçalho", "Navegação", "Hero", "Busca", "Lista", "Card", "Tabela", "Formulário", "Botão", "Gráfico", "Modal", "Rodapé"];

const novoWire = (): Wireframe => ({
  id: uid(), tela: "", objetivo: "", persona: "", dispositivo: "Desktop", anotacoes: "",
  blocos: [
    { id: uid(), tipo: "Cabeçalho", rotulo: "Logo + usuário", largura: 3, altura: "p" },
    { id: uid(), tipo: "Formulário", rotulo: "Campos principais", largura: 2, altura: "g" },
    { id: uid(), tipo: "Card", rotulo: "Resumo / ajuda", largura: 1, altura: "m" },
  ],
  criadoEm: new Date().toISOString(),
});

const alturaClass = { p: "h-10", m: "h-20", g: "h-32" } as const;
const largClass = { 1: "col-span-1", 2: "col-span-2", 3: "col-span-3" } as const;

const Wireframes = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<Wireframe[]>([]);
  const [atual, setAtual] = useState<Wireframe>(novoWire());

  useEffect(() => setLista(readLS<Wireframe[]>(FKEYS.wireframes, [])), []);
  useEffect(() => writeLS(FKEYS.wireframes, lista), [lista]);

  const setBlocos = (blocos: Bloco[]) => setAtual({ ...atual, blocos });
  const mover = (i: number, delta: number) => {
    const b = [...atual.blocos];
    const j = i + delta;
    if (j < 0 || j >= b.length) return;
    [b[i], b[j]] = [b[j], b[i]];
    setBlocos(b);
  };

  const salvar = () => {
    if (!atual.tela.trim()) { toast({ title: "Informe o nome da tela.", variant: "destructive" }); return; }
    setLista((p) => [{ ...atual }, ...p]);
    setAtual(novoWire());
    toast({ title: "Wireframe salvo!" });
  };

  const enviarHistoria = (w: Wireframe) => {
    prependLS(FKEYS.historias, [{
      id: uid(), persona: w.persona || "usuário", acao: `utilizar a tela "${w.tela}"`,
      beneficio: w.objetivo || "concluir minha tarefa com facilidade",
      prioridade: "Should", estimativa: 3, criterios: w.blocos.map((b) => ({ id: uid(), texto: `A tela exibe ${b.tipo.toLowerCase()}: ${b.rotulo || "—"}` })),
      invest: { I: true, N: true, V: true, E: true, S: true, T: false },
      criadoEm: new Date().toISOString(), origemModelagem: "[Wireframes]",
    }]);
    toast({ title: `História criada a partir de "${w.tela}".` });
  };

  const enviarBacklogKanban = (w: Wireframe) => {
    prependLS(FKEYS.backlog, [{
      id: uid(), titulo: `Implementar tela ${w.tela}`, descricao: w.objetivo, epico: "Interface",
      prioridade: "Should", estimativa: 5, status: "Novo", valor: 4, criadoEm: new Date().toISOString(),
    }]);
    prependLS(FKEYS.kanban, [{
      id: uid(), titulo: `Tela ${w.tela}`, descricao: `${w.blocos.length} blocos • ${w.dispositivo}`,
      coluna: "todo", responsavel: "", tag: "UI", criadoEm: new Date().toISOString(),
    }]);
    toast({ title: "Enviado para Backlog e Kanban." });
  };

  const enviarTestes = (w: Wireframe) => {
    prependLS(FKEYS.casosTeste, w.blocos.map((b) => ({
      id: uid(), titulo: `${w.tela} — ${b.tipo}: ${b.rotulo || "elemento"}`,
      preCondicao: `Usuário na tela ${w.tela}`,
      passos: `1. Acessar a tela ${w.tela}\n2. Localizar o bloco ${b.tipo}\n3. Interagir com "${b.rotulo || b.tipo}"`,
      resultadoEsperado: `O elemento ${b.tipo.toLowerCase()} está visível e funcional.`,
      tipo: "Funcional", status: "Não executado", origem: "[Wireframes]", criadoEm: new Date().toISOString(),
    })));
    toast({ title: `${w.blocos.length} casos de teste gerados.` });
  };

  const enviarPrototipo = (w: Wireframe) => {
    prependLS(FKEYS.prototipos, [{
      id: uid(), titulo: w.tela, descricao: w.objetivo, url: "", imagem: "", ferramenta: "Wireframe interno",
      versao: "v1", origem: "[Wireframes]", wireframeId: w.id, criadoEm: new Date().toISOString(),
    }]);
    toast({ title: "Enviado para a Galeria de Protótipos." });
  };

  const exportar = () => baixarMd("wireframes.md", lista.map((w) =>
    `## ${w.tela} (${w.dispositivo})\n- Persona: ${w.persona || "—"}\n- Objetivo: ${w.objetivo || "—"}\n\n**Blocos**\n${w.blocos.map((b, i) => `${i + 1}. [${b.tipo}] ${b.rotulo || "—"} — largura ${b.largura}/3`).join("\n")}\n\n**Anotações**\n${w.anotacoes || "—"}`).join("\n\n---\n\n"));

  const Preview = ({ w }: { w: Wireframe }) => (
    <div className="grid grid-cols-3 gap-2 p-3 rounded-lg border border-border bg-muted/40">
      {w.blocos.map((b) => (
        <div key={b.id} className={`${largClass[b.largura]} ${alturaClass[b.altura]} rounded-md border-2 border-dashed border-primary/40 bg-background/70 p-2 flex flex-col justify-center`}>
          <span className="text-[10px] uppercase tracking-wide text-primary font-semibold">{b.tipo}</span>
          <span className="text-xs text-muted-foreground truncate">{b.rotulo}</span>
        </div>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><LayoutTemplate className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Wireframes</h1>
            <p className="text-sm text-muted-foreground">Esboce telas em blocos e gere histórias, backlog, testes e protótipos.</p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-3 p-6 space-y-4">
            <h2 className="text-lg font-semibold">Nova tela</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div><Label>Nome da tela</Label><Input value={atual.tela} onChange={(e) => setAtual({ ...atual, tela: e.target.value })} placeholder="ex.: Agendamento de consulta" /></div>
              <div><Label>Persona</Label><Input value={atual.persona} onChange={(e) => setAtual({ ...atual, persona: e.target.value })} placeholder="ex.: Judy" /></div>
              <div className="sm:col-span-2"><Label>Objetivo da tela</Label><Input value={atual.objetivo} onChange={(e) => setAtual({ ...atual, objetivo: e.target.value })} /></div>
              <div><Label>Dispositivo</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={atual.dispositivo} onChange={(e) => setAtual({ ...atual, dispositivo: e.target.value })}>
                  <option>Desktop</option><option>Tablet</option><option>Mobile</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label>Blocos da interface</Label>
              <Button size="sm" variant="outline" onClick={() => setBlocos([...atual.blocos, { id: uid(), tipo: "Card", rotulo: "", largura: 1, altura: "m" }])}><Plus className="w-3 h-3 mr-1" /> Bloco</Button>
            </div>
            <div className="space-y-2">
              {atual.blocos.map((b, i) => (
                <div key={b.id} className="grid grid-cols-12 gap-2 items-center">
                  <select className="col-span-3 h-9 rounded-md border border-input bg-background px-2 text-xs" value={b.tipo}
                    onChange={(e) => setBlocos(atual.blocos.map((x) => x.id === b.id ? { ...x, tipo: e.target.value } : x))}>
                    {TIPOS.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <Input className="col-span-4 h-9 text-xs" placeholder="rótulo" value={b.rotulo}
                    onChange={(e) => setBlocos(atual.blocos.map((x) => x.id === b.id ? { ...x, rotulo: e.target.value } : x))} />
                  <select className="col-span-2 h-9 rounded-md border border-input bg-background px-2 text-xs" value={b.largura}
                    onChange={(e) => setBlocos(atual.blocos.map((x) => x.id === b.id ? { ...x, largura: Number(e.target.value) as 1 | 2 | 3 } : x))}>
                    <option value={1}>1/3</option><option value={2}>2/3</option><option value={3}>3/3</option>
                  </select>
                  <select className="col-span-1 h-9 rounded-md border border-input bg-background px-1 text-xs" value={b.altura}
                    onChange={(e) => setBlocos(atual.blocos.map((x) => x.id === b.id ? { ...x, altura: e.target.value as Bloco["altura"] } : x))}>
                    <option value="p">P</option><option value="m">M</option><option value="g">G</option>
                  </select>
                  <div className="col-span-2 flex">
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => mover(i, -1)}><ArrowUp className="w-3 h-3" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => mover(i, 1)}><ArrowDown className="w-3 h-3" /></Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setBlocos(atual.blocos.filter((x) => x.id !== b.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                  </div>
                </div>
              ))}
            </div>

            <div><Label>Anotações de usabilidade</Label><Textarea rows={3} value={atual.anotacoes} onChange={(e) => setAtual({ ...atual, anotacoes: e.target.value })} placeholder="Feedback do sistema, estados de erro, acessibilidade..." /></div>

            <div>
              <Label className="mb-2 block">Pré-visualização</Label>
              <Preview w={atual} />
            </div>

            <div className="flex gap-2">
              <Button onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Salvar wireframe</Button>
              <Button variant="outline" onClick={exportar}><Download className="w-4 h-4 mr-1" /> Exportar .md</Button>
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">Telas ({lista.length})</h2>
            {lista.length === 0 && <Card className="p-6 text-sm text-muted-foreground">Nenhuma tela criada ainda.</Card>}
            {lista.map((w) => (
              <Card key={w.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{w.tela}</h3>
                    <p className="text-xs text-muted-foreground">{w.objetivo}</p>
                  </div>
                  <Badge variant="secondary">{w.dispositivo}</Badge>
                </div>
                <Preview w={w} />
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" onClick={() => enviarHistoria(w)}><Send className="w-3 h-3 mr-1" /> História</Button>
                  <Button size="sm" variant="outline" onClick={() => enviarBacklogKanban(w)}><Send className="w-3 h-3 mr-1" /> Backlog + Kanban</Button>
                  <Button size="sm" variant="outline" onClick={() => enviarTestes(w)}><Send className="w-3 h-3 mr-1" /> Casos de teste</Button>
                  <Button size="sm" variant="outline" onClick={() => enviarPrototipo(w)}><Image className="w-3 h-3 mr-1" /> Galeria</Button>
                  <Button size="sm" variant="ghost" onClick={() => setLista((p) => p.filter((x) => x.id !== w.id))}><Trash2 className="w-3 h-3 text-destructive" /></Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Wireframes;
