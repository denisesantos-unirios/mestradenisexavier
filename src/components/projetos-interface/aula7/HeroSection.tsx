import { motion } from "framer-motion";
import { GitBranch, ListChecks, Workflow, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const features = [
  {
    icon: ListChecks,
    title: "Análise de Tarefas",
    description: "Decomposição hierárquica das atividades"
  },
  {
    icon: GitBranch,
    title: "Fluxos de Interação",
    description: "Caminhos possíveis dentro do sistema"
  },
  {
    icon: Workflow,
    title: "Diagramas",
    description: "Representação visual das atividades"
  }
];

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal animation="fadeDown" delay={0.1}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Semana 4 • Aula 7
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Análise de Tarefas e Fluxos
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.3}>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Aprenda a mapear as atividades do usuário e criar diagramas que guiam
              o design de interfaces centradas nas tarefas reais.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal animation="fadeUp" delay={0.6}>
            <motion.a
              href="#analise"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Explorar Análise de Tarefas
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
