import { motion } from "framer-motion";
import { Users, Brain, Eye, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const features = [
  {
    icon: Brain,
    title: "Modelos Mentais",
    description: "Como usuários pensam sobre sistemas"
  },
  {
    icon: Eye,
    title: "Percepção",
    description: "O que vemos vs. o que entendemos"
  },
  {
    icon: Users,
    title: "Comportamento",
    description: "Padrões de interação humana"
  }
];

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="section-container text-center">
        <ScrollReveal animation="fadeDown">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
            <Users className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Semana 2 • Aula 3</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="blur" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Conceitualizando
            <br />
            <span className="accent-text">a Interação</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.4}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Modelos de interação, feedback, constraints e mapeamento.
          </p>
          <p className="text-lg text-primary max-w-2xl mx-auto mb-12">
            + Compreendendo os Usuários: perfis e comportamentos
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="scale" delay={0.6}>
          <motion.a
            href="#modelos-mentais"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-medium">Explorar Modelos</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
