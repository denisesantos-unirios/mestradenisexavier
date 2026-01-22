import { ChevronDown, Code2, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

const HeroSection = () => {
  return (
    <section id="hero" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.5, 0.8]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/30 rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <ScrollReveal animation="fadeDown" delay={0.2}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-8">
            Engenharia de Software I
          </span>
        </ScrollReveal>

        <ScrollReveal animation="blur" delay={0.4} duration={0.8}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Crise do </span>
            <span className="accent-text">Software</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Uma jornada pela história da engenharia de software e a dinâmica 
            <span className="text-primary font-semibold"> Marshmallow Challenge</span>
          </p>
        </ScrollReveal>

        <StaggerContainer className="flex flex-wrap justify-center gap-6 mb-16" staggerDelay={0.15} initialDelay={0.8}>
          <StaggerItem>
            <div className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">Metodologias</p>
                <p className="text-sm text-muted-foreground">Evolução do desenvolvimento</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">Colaboração</p>
                <p className="text-sm text-muted-foreground">Trabalho em equipe</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">Inovação</p>
                <p className="text-sm text-muted-foreground">Prototipação rápida</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal animation="scale" delay={1.2}>
          <motion.a 
            href="#crise" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm">Explorar</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
