import { motion } from "framer-motion";
import { Target, Lightbulb, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const objetivos = [
  "Compreender os conceitos básicos de análise de sistemas",
  "Identificar as fases de um Sistema de Informação",
  "Entender a importância da modelagem de sistemas"
];

const IntroducaoSection = () => {
  return (
    <section id="introducao" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Análise de Sistemas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Introdução à Análise de Sistemas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A informação tem uma influência crescente no mundo dos negócios. Decisões importantes são baseadas em dados e informações, 
              por isso, as empresas investem em Sistemas de Informação.
            </p>
          </div>
        </ScrollReveal>

        {/* Objetivos da Aula */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Objetivos da Aula</h3>
            </div>

            <StaggerContainer className="space-y-3">
              {objetivos.map((objetivo, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{objetivo}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </ScrollReveal>

        {/* Por que investir em SI */}
        <ScrollReveal animation="scale" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-amber-500/10 via-primary/10 to-amber-500/10 rounded-2xl p-8 border border-amber-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">
                  Por que as empresas investem em Sistemas de Informação?
                </h4>
                <p className="text-muted-foreground">
                  Com o investimento em Sistemas de Informações elas vão ter <strong className="text-primary">dados concretos</strong> e 
                  <strong className="text-primary"> informação</strong> que irão satisfazer as suas necessidades de negócio, 
                  possibilitando tomadas de decisão mais assertivas.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroducaoSection;
