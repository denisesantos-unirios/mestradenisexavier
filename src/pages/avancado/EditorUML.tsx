import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Workflow, Plus, Trash2, Download, Wand2 } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import MermaidDiagram from "@/components/MermaidDiagram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS, baixarMd } from "@/lib/ferramentas-store";

type Diagrama = { id: string; titulo: string; tipo: string; codigo: string; criadoEm: string };

const TEMPLATES: Record<string, string> = {
  "Classes": `classDiagram
  class Usuario {
    +String nome
    +String email
    +autenticar()
  }
  class Pedido {
    +int numero
    +Date data
    +calcularTotal()
  }
  class Item {
    +int quantidade
    +float preco
  }
  Usuario "1" --> "*" Pedido : realiza
  Pedido "1" *-- "*" Item : contem`,
  "Casos de Uso": `flowchart LR
  ator((Cliente))
  subgraph Sistema
    uc1([Fazer pedido])
    uc2([Acompanhar entrega])
    uc3([Avaliar produto])
  end
  ator --> uc1
  ator --> uc2
  ator --> uc3`,
  "Sequência": `sequenceDiagram
  actor U as Usuário
  participant F as Front-end
  participant A as API
  participant B as Banco
  U->>F: preenche formulário
  F->>A: POST /pedidos
  A->>B: INSERT pedido
  B-->>A: id gerado
  A-->>F: 201 Created
  F-->>U: confirmação`,
  "Atividades": `flowchart TD
  A([Início]) --> B[Receber solicitação]
  B --> C{Dados válidos?}
  C -- Não --> D[Exibir erro] --> B
  C -- Sim --> E[Registrar pedido]
  E --> F[Notificar cliente]
  F --> G([Fim])`,
  "Estados": `stateDiagram-v2
  [*] --> Novo
  Novo --> EmAnalise : enviar
  EmAnalise --> Aprovado : validar
  EmAnalise --> Rejeitado : recusar
  Aprovado --> Concluido : entregar
  Rejeitado --> [*]
  Concluido --> [*]`,
  "Entidade-Relacionamento": `erDiagram
  CLIENTE ||--o{ PEDIDO : realiza
  PEDIDO ||--|{ ITEM : contem
  PRODUTO ||--o{ ITEM : referencia
  CLIENTE {
    uuid id
    string nome
    string email
  }
  PEDIDO {
    uuid id
    date data
    numeric total
  }`,
};

const EditorUML = () => {
  const { toast } = useToast();
  const [lista, setLista] = useState<Diagrama[]>([]);
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("Classes");
  const [codigo, setCodigo] = useState(TEMPLATES["Classes"]);

  useEffect(() => setLista(readLS<Diagrama[]>(FKEYS.uml, [])), []);
  useEffect(() => writeLS(FKEYS.uml, lista), [lista]);

  const trocarTipo = (t: string) => { setTipo(t); setCodigo(TEMPLATES[t]); };

  const gerarDeCasosDeUso = () => {
    const casos = readLS<any[]>(FKEYS.casosUso, []);
    if (!casos.length) { toast({ title: "Nenhum caso de uso salvo em Ferramentas → Casos de Uso.", variant: "destructive" }); return; }
    const atores = Array.from(new Set(casos.map((c) => c.ator || "Usuário")));
    const linhas = [
      "flowchart LR",
      ...atores.map((a, i) => `  a${i}((${a}))`),
      "  subgraph Sistema",
      ...casos.slice(0, 15).map((c, i) => `    uc${i}(["${String(c.nome || c.titulo || `Caso ${i + 1}`).replace(/"/g, "")}"])`),
      "  end",
      ...casos.slice(0, 15).map((c, i) => `  a${Math.max(0, atores.indexOf(c.ator || "Usuário"))} --> uc${i}`),
    ];
    setTipo("Casos de Uso");
    setCodigo(linhas.join("\n"));
    toast({ title: `Diagrama gerado com ${Math.min(casos.length, 15)} casos de uso.` });
  };

  const salvar = () => {
    if (!titulo.trim()) { toast({ title: "Informe um título para o diagrama.", variant: "destructive" }); return; }
    setLista((p) => [{ id: uid(), titulo, tipo, codigo, criadoEm: new Date().toISOString() }, ...p]);
    setTitulo("");
    toast({ title: "Diagrama salvo!" });
  };

  const exportar = () => baixarMd("diagramas-uml.md", lista.map((d) => `## ${d.titulo} (${d.tipo})\n\n\`\`\`mermaid\n${d.codigo}\n\`\`\``).join("\n\n---\n\n"));

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Workflow className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Editor UML</h1>
            <p className="text-sm text-muted-foreground">Diagramas de classes, casos de uso, sequência, atividades, estados e ER.</p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div><Label>Título</Label><Input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="ex.: Modelo de domínio — Clínica Vida+" /></div>
              <div><Label>Tipo</Label>
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={tipo} onChange={(e) => trocarTipo(e.target.value)}>
                  {Object.keys(TEMPLATES).map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div><Label>Código (sintaxe Mermaid)</Label>
              <Textarea rows={16} className="font-mono text-xs" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button onClick={salvar}><Plus className="w-4 h-4 mr-1" /> Salvar</Button>
              <Button variant="outline" onClick={gerarDeCasosDeUso}><Wand2 className="w-4 h-4 mr-1" /> Gerar dos Casos de Uso</Button>
              <Button variant="outline" onClick={exportar}><Download className="w-4 h-4 mr-1" /> Exportar .md</Button>
            </div>
          </Card>

          <Card className="p-6">
            <Label className="mb-3 block">Pré-visualização</Label>
            <MermaidDiagram chart={codigo} />
          </Card>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {lista.map((d) => (
            <Card key={d.id} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{d.titulo}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{d.tipo}</Badge>
                  <Button size="icon" variant="ghost" onClick={() => setLista((p) => p.filter((x) => x.id !== d.id))}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                </div>
              </div>
              <MermaidDiagram chart={d.codigo} />
              <Button size="sm" variant="outline" onClick={() => { setTitulo(d.titulo); setTipo(d.tipo); setCodigo(d.codigo); }}>Editar</Button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EditorUML;
