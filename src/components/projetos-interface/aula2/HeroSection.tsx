import { motion } from "framer-motion";
import { Sparkles, MousePointer, Layers, Monitor, Brain, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const features = [
  {
    icon: Monitor,
    title: "Interface",
    description: "Ponto de conexão usuário-sistema"
  },
  {
    icon: MousePointer,
    title: "Interação",
    description: "Ciclo de ação e interpretação"
  },
  {
    icon: Brain,
    title: "Cognição",
    description: "Como processamos informação"
  },
  {
    icon: Layers,
    title: "Usabilidade",
    description: "Eficiência, eficácia e satisfação"
  },
  {
    icon: Sparkles,
    title: "Affordance",
    description: "Design que comunica função"
  }
];

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="section-container text-center">
        <ScrollReveal animation="fadeDown">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <Monitor className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Semana 2 • Aula 2</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="blur" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Interface e
            <br />
            <span className="accent-text">Interação Humano-Computador</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.4}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Fundamentos teóricos e práticos sobre como projetamos a 
            <span className="text-foreground font-medium"> comunicação entre pessoas e sistemas computacionais</span>.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-4 md:p-6 text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Objetivos da Aula */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="glass-card p-6 max-w-3xl mx-auto mb-12">
            <h3 className="font-bold text-lg mb-4">🎯 Objetivos desta Aula</h3>
            <div className="grid md:grid-cols-2 gap-3 text-left text-sm">
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">Compreender os fundamentos da IHC</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">Entender o processo de interação</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">Conhecer metáforas e affordance</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">Aplicar princípios de design de Norman</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">Entender a engenharia cognitiva</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">Analisar interfaces do cotidiano</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale" delay={0.6}>
          <motion.a
            href="#introducao-ihc"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-medium">Iniciar a Aula</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
