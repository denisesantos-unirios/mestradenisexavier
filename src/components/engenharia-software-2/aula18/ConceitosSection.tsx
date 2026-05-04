import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Circle, Square, Diamond, GitMerge, Split, ArrowRight, Users, StopCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MermaidDiagram from "@/components/MermaidDiagram";

const elementos = [
  { icon: Circle, nome: "Nó Inicial", desc: "Círculo preenchido. Ponto de partida do fluxo. Apenas um por diagrama.", notacao: "● → ação" },
  { icon: StopCircle, nome: "Nó Final", desc: "Círculo com anel. Encerra TODO o fluxo (final de atividade) ou um caminho (final de fluxo).", notacao: "◉ ou ⊗" },
  { icon: Square, nome: "Ação / Atividade", desc: "Retângulo com cantos arredondados. Representa uma tarefa atômica ou uma sub-atividade.", notacao: "[ Validar Dados ]" },
  { icon: Diamond, nome: "Decisão (Branch)", desc: "Losango com 1 entrada e N saídas. Cada saída tem uma condição [guarda].", notacao: "<> → [sim]/[não]" },
  { icon: GitMerge, nome: "Merge (Junção)", desc: "Losango com N entradas e 1 saída. Une caminhos alternativos sem sincronizar.", notacao: "N → 1" },
  { icon: Split, nome: "Fork (Bifurcação)", desc: "Barra horizontal: 1 entrada → N saídas paralelas (concorrência).", notacao: "▬ paralelo" },
  { icon: GitMerge, nome: "Join (Sincronização)", desc: "Barra horizontal: N entradas paralelas → 1 saída. Espera todos terminarem.", notacao: "▬ sincroniza" },
  { icon: Users, nome: "Swimlanes (Raias)", desc: "Colunas/linhas que separam responsabilidades por ator, sistema ou departamento.", notacao: "| Ator A | Ator B |" },
];

const exemploSimples = `flowchart TD
  Start((●)) --> A[Exibir Formulário]
  A --> B[Preencher Dados]
  B --> C{Dados Válidos?}
  C -->|Não| A
  C -->|Sim| D[Salvar no Banco]
  D --> E[Exibir Mensagem de Sucesso]
  E --> End(((⊗)))`;

const exemploParalelo = `flowchart TD
  Start((●)) --> A[Receber Pedido]
  A --> Fork[/"━━━ Fork ━━━"/]
  Fork --> B[Processar Pagamento]
  Fork --> C[Reservar Estoque]
  Fork --> D[Notificar Cliente]
  B --> Join[/"━━━ Join ━━━"/]
  C --> Join
  D --> Join
  Join --> E[Emitir Nota Fiscal]
  E --> End(((⊗)))`;

const ConceitosSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              Fundamentos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Elementos do Diagrama
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notação UML 2.x para modelar fluxos de controle, dados, decisões e paralelismo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {elementos.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:border-blue-400/50 transition-all">
                <CardContent className="p-5">
                  <el.icon className="w-6 h-6 text-orange-400 mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{el.nome}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{el.desc}</p>
                  <code className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-1 rounded block">
                    {el.notacao}
                  </code>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal animation="fadeUp">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">Fluxo com Decisão</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cadastro com validação e retorno em caso de erro.
                </p>
                <MermaidDiagram chart={exemploSimples} />
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.1}>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">Fluxo Paralelo (Fork/Join)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Três tarefas concorrentes que se sincronizam antes de continuar.
                </p>
                <MermaidDiagram chart={exemploParalelo} />
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ConceitosSection;
