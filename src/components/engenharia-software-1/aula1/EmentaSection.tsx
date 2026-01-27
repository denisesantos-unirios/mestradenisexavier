import { BookOpen, Target, Lightbulb, Layers, Settings, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const etapa1Contents = [
  "Introdução à Engenharia de Software",
  "Modelos Processos de Software"
];

const etapa2Contents = [
  "Modelagem Conceitual",
  "Desenvolvimento Ágil de Software"
];

const competencias = [
  {
    icon: Lightbulb,
    title: "Inovar",
    description: "Propor soluções tecnológicas criativas"
  },
  {
    icon: Layers,
    title: "Modelar",
    description: "Estruturar sistemas de forma organizada"
  },
  {
    icon: Code2,
    title: "Implementar",
    description: "Desenvolver em variados domínios de aplicação"
  }
];

const EmentaSection = () => {
  return (
    <section id="ementa" className="section-container relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="scale">
            <span className="solution-badge mb-6 inline-block">Estrutura da Disciplina</span>
          </ScrollReveal>
          <ScrollReveal animation="blur" delay={0.2} duration={0.8}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="accent-text">Ementa</span> & Competências
            </h2>
          </ScrollReveal>
        </div>

        {/* Ementa */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="glass-card p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">Ementa</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desenvolvimento dos conceitos introdutórios de <span className="text-primary font-semibold">Engenharia de Software</span>, 
              compreensão dos principais <span className="text-primary font-semibold">processos de software</span>, 
              Modelagem de Sistemas, Análise de Requisitos, Projeto de Software e Implementação.
            </p>
          </div>
        </ScrollReveal>

        {/* Objetivo Geral */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="glass-card p-8 mb-12 border-primary/30">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">Objetivo Geral</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compreender os principais conceitos da <span className="text-primary font-semibold">qualidade de software</span> aplicados 
              no desenvolvimento e manutenção, utilizando técnicas para garantia da qualidade nas diversas 
              fases do processo e ciclo de vida do desenvolvimento de software.
            </p>
          </div>
        </ScrollReveal>

        {/* Competências */}
        <div className="mb-16">
          <ScrollReveal animation="fadeDown">
            <h3 className="text-2xl font-bold text-center mb-8">Competências e Habilidades</h3>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {competencias.map((comp, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="glass-card p-6 text-center h-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <comp.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{comp.title}</h4>
                  <p className="text-muted-foreground">{comp.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Conteúdos por Etapa */}
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal animation="fadeLeft" delay={0.2}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-primary font-bold">1ª</span>
                </motion.div>
                <h4 className="text-xl font-bold text-foreground">Etapa 1</h4>
              </div>
              <ul className="space-y-4">
                {etapa1Contents.map((content, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{content}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeRight" delay={0.2}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-accent font-bold">2ª</span>
                </motion.div>
                <h4 className="text-xl font-bold text-foreground">Etapa 2</h4>
              </div>
              <ul className="space-y-4">
                {etapa2Contents.map((content, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground">{content}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EmentaSection;
