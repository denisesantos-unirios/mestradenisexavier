import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Brain, 
  Eye, 
  Target, 
  ArrowUp,
  CheckCircle2,
  Lightbulb,
  Video,
  BookOpen
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const criteriosAnalise = [
  {
    icon: Brain,
    criterio: "Carga Cognitiva",
    perguntas: [
      "Quantas informações estão na tela?",
      "É fácil focar no que importa?",
      "Existem distrações desnecessárias?"
    ]
  },
  {
    icon: Eye,
    criterio: "Percepção Visual",
    perguntas: [
      "A hierarquia visual é clara?",
      "Os agrupamentos fazem sentido?",
      "O contraste é adequado?"
    ]
  },
  {
    icon: Target,
    criterio: "Memória",
    perguntas: [
      "Preciso lembrar informações entre telas?",
      "Posso reconhecer em vez de recordar?",
      "Os padrões são consistentes?"
    ]
  }
];

const AtividadeSection = () => {
  return (
    <section id="atividade" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Atividade Prática</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Análise Cognitiva de Interface
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aplique os conceitos de cognição para analisar uma interface real
              e identificar oportunidades de melhoria.
            </p>
          </div>
        </ScrollReveal>

        {/* Vídeo sugerido */}
        <ScrollReveal animation="scale" delay={0.1}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-12 border border-primary/20">
            <div className="flex items-start gap-4">
              <Video className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">📺 Vídeo Sugerido</h3>
                <p className="text-muted-foreground mb-3">
                  Antes de iniciar a atividade, assista ao vídeo sobre psicologia cognitiva aplicada ao design de interfaces.
                </p>
                <p className="text-sm text-primary font-medium">
                  Tópicos: Carga cognitiva, atenção seletiva, limitações da memória de trabalho
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Card principal da atividade */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-6">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-8 h-8 text-primary-foreground" />
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Auditoria Cognitiva
                </h3>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">🎯 Objetivo</h4>
                <p className="text-muted-foreground">
                  Escolha um aplicativo ou site e avalie como ele lida com os aspectos cognitivos do usuário.
                  Identifique pontos positivos e oportunidades de melhoria.
                </p>
              </div>

              {/* Critérios de análise */}
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-6">📋 Critérios de Análise</h4>
                <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
                  {criteriosAnalise.map((criterio, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        className="p-5 rounded-xl bg-muted/30 border border-border h-full"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <criterio.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h5 className="font-bold">{criterio.criterio}</h5>
                        </div>
                        <ul className="space-y-2">
                          {criterio.perguntas.map((pergunta, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {pergunta}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Formato de entrega */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Formato de Entrega
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">Documento deve conter:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Nome do app/site analisado</li>
                      <li>✓ Screenshots das telas analisadas</li>
                      <li>✓ Análise de cada critério cognitivo</li>
                      <li>✓ 3 pontos positivos identificados</li>
                      <li>✓ 3 oportunidades de melhoria</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Sugestões de apps:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• App de banco ou fintech</li>
                      <li>• Aplicativo de delivery</li>
                      <li>• Rede social</li>
                      <li>• Site de e-commerce</li>
                      <li>• Ferramenta de produtividade</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dica do professor */}
        <ScrollReveal animation="scale">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 mb-12 border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">💡 Dica da Professora</h3>
                <p className="text-muted-foreground">
                  Ao analisar a interface, tente usar o app pela primeira vez, prestando atenção à sua própria
                  experiência. Onde você se sentiu confuso? Onde teve que pensar demais? Esses são sinais
                  de alta carga cognitiva que merecem destaque na sua análise.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Próxima aula */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-6 mb-12">
            <div className="flex items-center gap-4">
              <BookOpen className="w-10 h-10 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Próxima Aula</p>
                <h4 className="text-xl font-bold">Análise de Tarefas e Fluxos</h4>
                <p className="text-muted-foreground">
                  Aprenda a mapear as tarefas do usuário e criar diagramas de atividades.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Voltar ao topo */}
        <ScrollReveal animation="fadeUp">
          <div className="text-center">
            <motion.a
              href="#hero"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              whileHover={{ y: -3 }}
            >
              <ArrowUp className="w-5 h-5" />
              Voltar ao Topo
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AtividadeSection;
