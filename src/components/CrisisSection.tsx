import { AlertTriangle, TrendingDown, Target, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";
import ParallaxSection from "./animations/ParallaxSection";

const timelineEvents = [
  {
    year: "1960s",
    title: "O Início da Crise",
    description: "Projetos cada vez maiores e mais complexos começam a falhar sistematicamente.",
    type: "crisis"
  },
  {
    year: "1968",
    title: "Conferência da NATO",
    description: "O termo 'Engenharia de Software' é cunhado oficialmente pela primeira vez.",
    type: "milestone"
  },
  {
    year: "1970s",
    title: "Modelo Cascata",
    description: "Winston Royce propõe o modelo sequencial de desenvolvimento.",
    type: "solution"
  },
  {
    year: "1990s",
    title: "Métodos Ágeis",
    description: "Surgem metodologias iterativas e incrementais.",
    type: "solution"
  },
  {
    year: "2001",
    title: "Manifesto Ágil",
    description: "17 desenvolvedores publicam os princípios do desenvolvimento ágil.",
    type: "milestone"
  }
];

const problems = [
  { icon: TrendingDown, title: "Atrasos", description: "Projetos entregues muito além do prazo" },
  { icon: AlertTriangle, title: "Custos", description: "Orçamentos extrapolados em 200-300%" },
  { icon: Target, title: "Qualidade", description: "Software com bugs e falhas críticas" },
];

const solutions = [
  "Metodologias estruturadas de desenvolvimento",
  "Gestão de requisitos e documentação",
  "Testes sistemáticos e garantia de qualidade",
  "Desenvolvimento iterativo e incremental",
  "Comunicação efetiva entre equipes"
];

const CrisisSection = () => {
  return (
    <section id="crise" className="section-container relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="scale">
            <span className="crisis-badge mb-6 inline-block">Contexto Histórico</span>
          </ScrollReveal>
          <ScrollReveal animation="blur" delay={0.2} duration={0.8}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              A <span className="accent-text">Crise</span> do Software
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre 1960 e 1980, a indústria de software enfrentou uma crise sem precedentes
            </p>
          </ScrollReveal>
        </div>

        {/* Problems Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20" staggerDelay={0.2}>
          {problems.map((problem, index) => (
            <StaggerItem key={problem.title}>
              <motion.div 
                className="glass-card p-8 text-center h-full"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-destructive/20 flex items-center justify-center mx-auto mb-6"
                  initial={{ rotate: -10 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <problem.icon className="w-8 h-8 text-destructive" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Timeline */}
        <div className="relative mb-20">
          <ScrollReveal animation="fadeDown">
            <h3 className="text-2xl font-bold text-center mb-12">Linha do Tempo</h3>
          </ScrollReveal>
          <div className="relative">
            <div className="hidden md:block timeline-line" />
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <ScrollReveal 
                  key={event.year}
                  animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                  delay={index * 0.15}
                >
                  <div 
                    className={`relative flex flex-col md:flex-row items-center gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div 
                        className={`glass-card p-6 inline-block ${
                          index % 2 === 0 ? 'md:ml-auto' : ''
                        }`}
                        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className={`text-sm font-medium ${
                          event.type === 'crisis' ? 'text-destructive' : 
                          event.type === 'solution' ? 'text-primary' : 'text-accent'
                        }`}>
                          {event.year}
                        </span>
                        <h4 className="text-xl font-bold text-foreground mt-1">{event.title}</h4>
                        <p className="text-muted-foreground mt-2">{event.description}</p>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="w-4 h-4 rounded-full bg-primary z-10 flex-shrink-0"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    />
                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions */}
        <ParallaxSection speed={0.3}>
          <ScrollReveal animation="slideUp">
            <div className="glass-card p-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">Soluções Propostas</h3>
              </div>
              <StaggerContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.1}>
                {solutions.map((solution, index) => (
                  <StaggerItem key={index}>
                    <motion.div 
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-foreground">{solution}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default CrisisSection;
