import { motion } from "framer-motion";
import { ArrowRight, Circle, Diamond, Square, Play, StopCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const elementosFluxo = [
  {
    icon: Circle,
    nome: "Início/Fim",
    descricao: "Marca o início ou término do fluxo",
    forma: "Círculo/Elipse"
  },
  {
    icon: Square,
    nome: "Ação/Processo",
    descricao: "Representa uma ação do usuário ou sistema",
    forma: "Retângulo"
  },
  {
    icon: Diamond,
    nome: "Decisão",
    descricao: "Ponto de escolha com múltiplos caminhos",
    forma: "Losango"
  },
  {
    icon: ArrowRight,
    nome: "Fluxo",
    descricao: "Indica a direção do processo",
    forma: "Seta"
  }
];

const FluxosSection = () => {
  return (
    <section id="fluxos" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Diagramas</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Fluxos de Interação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diagramas de fluxo mostram visualmente os caminhos que um usuário pode seguir
              ao interagir com a interface, incluindo decisões e alternativas.
            </p>
          </div>
        </ScrollReveal>

        {/* Elementos do fluxograma */}
        <ScrollReveal animation="fadeUp">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {elementosFluxo.map((elemento, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-card border border-border text-center"
                whileHover={{ scale: 1.05 }}
              >
                <elemento.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-sm mb-1">{elemento.nome}</h4>
                <p className="text-xs text-muted-foreground mb-2">{elemento.descricao}</p>
                <span className="text-xs text-primary">{elemento.forma}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Exemplo de fluxo */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-8 mb-12">
            <h3 className="text-xl font-bold mb-6 text-center">
              Exemplo: Fluxo de Login
            </h3>

            <div className="flex flex-col items-center gap-4 py-4">
              {/* Início */}
              <motion.div
                className="flex items-center justify-center w-24 h-12 rounded-full bg-green-500/20 border-2 border-green-500"
                whileHover={{ scale: 1.05 }}
              >
                <Play className="w-5 h-5 text-green-500 mr-1" />
                <span className="text-sm font-medium">Início</span>
              </motion.div>

              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />

              {/* Ação 1 */}
              <motion.div
                className="px-6 py-3 bg-muted rounded-lg text-sm text-center"
                whileHover={{ scale: 1.05 }}
              >
                Acessar página de login
              </motion.div>

              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />

              {/* Ação 2 */}
              <motion.div
                className="px-6 py-3 bg-muted rounded-lg text-sm text-center"
                whileHover={{ scale: 1.05 }}
              >
                Inserir credenciais
              </motion.div>

              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />

              {/* Decisão */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-32 h-32 bg-yellow-500/20 border-2 border-yellow-500 rotate-45 flex items-center justify-center">
                  <span className="text-sm font-medium -rotate-45 text-center px-2">
                    Credenciais válidas?
                  </span>
                </div>
              </motion.div>

              {/* Bifurcação */}
              <div className="flex gap-16 items-start">
                {/* Caminho Sim */}
                <div className="flex flex-col items-center gap-4">
                  <span className="text-sm font-medium text-green-500">Sim</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  <motion.div
                    className="px-6 py-3 bg-muted rounded-lg text-sm text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    Redirecionar para home
                  </motion.div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  <motion.div
                    className="flex items-center justify-center w-24 h-12 rounded-full bg-red-500/20 border-2 border-red-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <StopCircle className="w-5 h-5 text-red-500 mr-1" />
                    <span className="text-sm font-medium">Fim</span>
                  </motion.div>
                </div>

                {/* Caminho Não */}
                <div className="flex flex-col items-center gap-4">
                  <span className="text-sm font-medium text-red-500">Não</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  <motion.div
                    className="px-6 py-3 bg-muted rounded-lg text-sm text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    Exibir mensagem de erro
                  </motion.div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  <span className="text-xs text-muted-foreground">↩ Voltar para inserir credenciais</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dicas para bons fluxos */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Boas Práticas para Diagramas de Fluxo</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Comece sempre com um ponto de início claro",
                "Use formas padronizadas consistentemente",
                "Mantenha o fluxo em uma direção principal (top-down ou left-right)",
                "Rotule todas as setas de decisão (Sim/Não, Sucesso/Erro)",
                "Evite cruzamentos de linhas sempre que possível",
                "Termine todos os caminhos em um ponto de fim"
              ].map((dica, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-background/50 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary font-bold">{index + 1}.</span>
                  <span className="text-sm text-muted-foreground">{dica}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FluxosSection;
