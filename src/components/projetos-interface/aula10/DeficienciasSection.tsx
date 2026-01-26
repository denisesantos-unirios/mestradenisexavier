import { motion } from "framer-motion";
import { Eye, Ear, Hand, Brain, MessageSquare, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const tiposDeficiencia = [
  {
    icon: Eye,
    tipo: "Visual",
    cor: "blue",
    exemplos: ["Cegueira", "Baixa visão", "Daltonismo"],
    barreiras: [
      "Imagens sem texto alternativo",
      "Contraste insuficiente",
      "Textos pequenos não redimensionáveis"
    ],
    solucoes: [
      "Alt text em imagens",
      "Contraste mínimo 4.5:1",
      "Texto escalável"
    ]
  },
  {
    icon: Ear,
    tipo: "Auditiva",
    cor: "purple",
    exemplos: ["Surdez total", "Surdez parcial", "Dificuldade auditiva"],
    barreiras: [
      "Vídeos sem legendas",
      "Áudio sem transcrição",
      "Alertas apenas sonoros"
    ],
    solucoes: [
      "Legendas em vídeos",
      "Transcrições de áudio",
      "Indicadores visuais"
    ]
  },
  {
    icon: Hand,
    tipo: "Motora",
    cor: "green",
    exemplos: ["Paralisia", "Tremores", "Amputação"],
    barreiras: [
      "Alvos de clique pequenos",
      "Ações apenas com mouse",
      "Tempo limitado para interações"
    ],
    solucoes: [
      "Áreas clicáveis maiores",
      "Navegação por teclado",
      "Tempos ajustáveis"
    ]
  },
  {
    icon: Brain,
    tipo: "Cognitiva",
    cor: "orange",
    exemplos: ["Dislexia", "TDAH", "Autismo"],
    barreiras: [
      "Linguagem complexa",
      "Layout confuso",
      "Muitas distrações"
    ],
    solucoes: [
      "Linguagem simples",
      "Layout consistente",
      "Modo focado"
    ]
  },
  {
    icon: MessageSquare,
    tipo: "Fala",
    cor: "pink",
    exemplos: ["Mudez", "Gagueira", "Disartria"],
    barreiras: [
      "Interfaces apenas por voz",
      "Falta de alternativas textuais",
      "Reconhecimento de voz obrigatório"
    ],
    solucoes: [
      "Alternativas textuais",
      "Chat/formulários",
      "Múltiplas formas de entrada"
    ]
  },
  {
    icon: Clock,
    tipo: "Temporária/Situacional",
    cor: "teal",
    exemplos: ["Braço quebrado", "Ambiente ruidoso", "Tela com sol"],
    barreiras: [
      "Design inflexível",
      "Única forma de interação",
      "Falta de adaptabilidade"
    ],
    solucoes: [
      "Design responsivo",
      "Múltiplos modos de entrada",
      "Flexibilidade geral"
    ]
  }
];

const getColorClasses = (cor: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
    green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
    pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/30" }
  };
  return colors[cor] || colors.blue;
};

const DeficienciasSection = () => {
  return (
    <section id="deficiencias" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Compreendendo as Necessidades</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Tipos de Deficiência e Barreiras
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conhecer os diferentes tipos de limitações nos ajuda a criar soluções
              mais inclusivas e efetivas.
            </p>
          </div>
        </ScrollReveal>

        {/* Estatística importante */}
        <ScrollReveal animation="scale" delay={0.1}>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 mb-12 border border-primary/20 text-center">
            <p className="text-4xl font-bold text-primary mb-2">1 bilhão</p>
            <p className="text-lg text-muted-foreground">
              de pessoas no mundo vivem com algum tipo de deficiência (~15% da população)
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {tiposDeficiencia.map((item, index) => {
            const colors = getColorClasses(item.cor);
            return (
              <StaggerItem key={index}>
                <motion.div
                  className={`p-6 rounded-2xl bg-card border ${colors.border} h-full`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${colors.bg}`}>
                      <item.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{item.tipo}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.exemplos.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-red-400 mb-2">❌ Barreiras:</p>
                      <ul className="space-y-1">
                        {item.barreiras.map((barreira, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {barreira}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-green-400 mb-2">✓ Soluções:</p>
                      <ul className="space-y-1">
                        {item.solucoes.map((solucao, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {solucao}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DeficienciasSection;
