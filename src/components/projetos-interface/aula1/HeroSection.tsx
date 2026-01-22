import { motion } from "framer-motion";
import { Palette, Users, Lightbulb, MousePointer2, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const features = [
  {
    icon: Palette,
    title: "Design Centrado",
    description: "Interfaces pensadas para o usuário"
  },
  {
    icon: Users,
    title: "Experiência Real",
    description: "Testes empíricos com usuários"
  },
  {
    icon: Lightbulb,
    title: "Pensamento Crítico",
    description: "Análise e melhoria contínua"
  }
];

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="section-container text-center">
        <ScrollReveal animation="fadeDown">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
            <MousePointer2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Projetos de Interface</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="blur" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="accent-text">Aula 1</span>
            <br />
            Apresentação da Disciplina
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.4}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            <span className="text-foreground font-medium">Onboarding do Usuário</span> — 
            A primeira interação define expectativas. Vamos criar uma experiência de entrada clara, 
            leve e orientada.
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
            href="#ementa"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="font-medium">Explorar Disciplina</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
