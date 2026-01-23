import { motion } from "framer-motion";
import { Eye, Layers, Grid3X3, Move, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const leisGestalt = [
  {
    nome: "Proximidade",
    descricao: "Elementos próximos são percebidos como grupo",
    icon: Grid3X3,
    demo: (
      <div className="flex gap-8 justify-center py-4">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <div className="w-3 h-3 rounded-full bg-primary" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
      </div>
    )
  },
  {
    nome: "Similaridade",
    descricao: "Elementos semelhantes são agrupados mentalmente",
    icon: Layers,
    demo: (
      <div className="flex gap-2 justify-center py-4">
        <div className="w-4 h-4 rounded-full bg-primary" />
        <div className="w-4 h-4 rounded-full bg-primary" />
        <div className="w-4 h-4 bg-secondary" />
        <div className="w-4 h-4 bg-secondary" />
        <div className="w-4 h-4 rounded-full bg-primary" />
      </div>
    )
  },
  {
    nome: "Continuidade",
    descricao: "O olho segue linhas e curvas naturalmente",
    icon: Move,
    demo: (
      <div className="flex items-center justify-center py-4">
        <svg width="120" height="40" viewBox="0 0 120 40">
          <path
            d="M10 30 Q30 10 60 20 Q90 30 110 10"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    )
  },
  {
    nome: "Fechamento",
    descricao: "A mente completa formas incompletas",
    icon: Sparkles,
    demo: (
      <div className="flex justify-center py-4">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path
            d="M30 5 L55 50 M55 50 L5 50 M5 50 L30 5"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 8"
          />
        </svg>
      </div>
    )
  }
];

const aplicacoes = [
  {
    principio: "Hierarquia Visual",
    descricao: "Use tamanho, cor e posição para guiar o olhar",
    exemplo: "Títulos grandes, subtítulos menores, texto normal ainda menor"
  },
  {
    principio: "Contraste",
    descricao: "Destaque elementos importantes com diferenças visuais",
    exemplo: "Botões de ação com cores vibrantes em fundos neutros"
  },
  {
    principio: "Espaço em Branco",
    descricao: "Use espaço vazio para criar respiro visual",
    exemplo: "Margens generosas entre seções de conteúdo"
  },
  {
    principio: "Alinhamento",
    descricao: "Elementos alinhados transmitem organização",
    exemplo: "Grid consistente em toda a interface"
  }
];

const PercepcaoSection = () => {
  return (
    <section id="percepcao" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Percepção Visual</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Leis da Gestalt
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A psicologia da Gestalt explica como organizamos visualmente o mundo.
              Designers usam esses princípios para criar interfaces intuitivas.
            </p>
          </div>
        </ScrollReveal>

        {/* Leis da Gestalt com demos */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
          {leisGestalt.map((lei, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <lei.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold">{lei.nome}</h4>
                </div>
                
                <div className="bg-muted/50 rounded-lg mb-4 min-h-[60px] flex items-center justify-center">
                  {lei.demo}
                </div>
                
                <p className="text-sm text-muted-foreground">{lei.descricao}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Aplicações no Design */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Aplicações Práticas no Design</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {aplicacoes.map((app, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-muted/30 border border-border/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-primary mb-2">{app.principio}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{app.descricao}</p>
                  <p className="text-xs bg-background/50 p-2 rounded">
                    <span className="font-medium">Ex:</span> {app.exemplo}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PercepcaoSection;
