import { motion } from "framer-motion";
import { FlaskConical, Target, Users, ClipboardCheck, BookOpen, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const HeroSection = () => {
  const decideSteps = [
    { letter: "D", title: "Determine", desc: "Objetivos da avaliação", icon: Target },
    { letter: "E", title: "Explore", desc: "Questões de pesquisa", icon: BookOpen },
    { letter: "C", title: "Choose", desc: "Métodos e técnicas", icon: ClipboardCheck },
    { letter: "I", title: "Identify", desc: "Questões práticas", icon: Users },
    { letter: "D", title: "Decide", desc: "Questões éticas", icon: FlaskConical },
    { letter: "E", title: "Evaluate", desc: "Avalie os dados", icon: BarChart3 }
  ];

  return (
    <section id="Introdução" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6"
            >
              <FlaskConical className="w-5 h-5" />
              <span className="text-sm font-medium">Protocolo de Experimentos de Usabilidade</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Framework{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                DECIDE
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Guia Completo para Planejamento e Condução de Avaliações de Usabilidade em IHC
            </p>

            <p className="text-sm text-muted-foreground">
              Baseado em Preece, Rogers & Sharp (2002)
            </p>
          </div>
        </ScrollReveal>

        {/* DECIDE Steps */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {decideSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="glass-card p-4 text-center group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-2xl font-bold text-primary">{step.letter}</span>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Citação */}
        <ScrollReveal delay={0.4}>
          <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-foreground italic text-center mb-4">
              "A avaliação de usabilidade é um processo fundamental no design centrado no usuário, 
              permitindo identificar problemas de interação e verificar se os objetivos de usabilidade foram atingidos."
            </blockquote>
            <p className="text-center text-muted-foreground">
              — Preece, Rogers & Sharp, 2002
            </p>
          </div>
        </ScrollReveal>

        {/* Info Cards */}
        <ScrollReveal delay={0.5}>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Vantagens do Framework
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Estruturação sistemática do processo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Flexibilidade metodológica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Aplicabilidade em diferentes contextos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Facilitação da documentação
                </li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Público-Alvo
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Pesquisadores de IHC e UX
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Estudantes de Sistemas de Informação
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Profissionais de design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Equipes de desenvolvimento de software
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
