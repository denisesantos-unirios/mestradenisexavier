import { ChevronDown, Code2, GraduationCap, BookOpen, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

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
            Bacharelado em Sistemas de Informação • III Período • 2026.1
          </span>
        </ScrollReveal>

        <ScrollReveal animation="blur" delay={0.4} duration={0.8}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Engenharia de </span>
            <span className="accent-text">Software I</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.6}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Apresentação da Disciplina
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
            Prof.ª Mestra <span className="text-primary font-semibold">Denise Xavier dos Santos</span>
          </p>
        </ScrollReveal>

        <StaggerContainer className="flex flex-wrap justify-center gap-6 mb-16" staggerDelay={0.15} initialDelay={0.8}>
          <StaggerItem>
            <div className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">60h Total</p>
                <p className="text-sm text-muted-foreground">20h Teórica • 10h Prática • 10h EaD</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">SIF3N251A</p>
                <p className="text-sm text-muted-foreground">Código da Disciplina</p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-semibold">03 Créditos</p>
                <p className="text-sm text-muted-foreground">Sem pré-requisitos</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal animation="scale" delay={1.2}>
          <motion.a 
            href="#ementa" 
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
