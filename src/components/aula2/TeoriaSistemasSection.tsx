import { motion } from "framer-motion";
import { Cog, Users, ArrowRight, RefreshCw, Database, ArrowRightLeft, Cpu } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ParallaxSection from "@/components/animations/ParallaxSection";

const subsistemas = [
  { name: "Folha de Pagamento", description: "Cálculo e processamento de salários" },
  { name: "Controle de Frequência", description: "Registro de ponto e ausências" },
  { name: "Medicina do Trabalho", description: "Saúde ocupacional" },
  { name: "Gestão de Pessoas", description: "Recrutamento e desenvolvimento" }
];

const componentesSI = [
  { icon: Database, title: "Entrada de Dados", description: "Dados brutos são inseridos no sistema" },
  { icon: Cpu, title: "Processamento", description: "Dados são transformados e calculados" },
  { icon: ArrowRightLeft, title: "Saída de Informações", description: "Informações são geradas e apresentadas" },
  { icon: RefreshCw, title: "Feedback", description: "Saídas influenciam novas entradas" }
];

const TeoriaSistemasSection = () => {
  return (
    <section id="teoria-sistemas" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Cog className="w-4 h-4" />
              <span className="text-sm font-medium">Teoria Geral dos Sistemas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que é um Sistema?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um sistema é um <strong className="text-primary">conjunto de partes inter-relacionadas</strong> que 
              trabalham juntas para alcançar um objetivo comum.
            </p>
          </div>
        </ScrollReveal>

        {/* Subsistemas Example */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Sistema de RH</h3>
                <p className="text-muted-foreground">Exemplo de sistema composto por subsistemas</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Todo sistema é composto por <strong className="text-primary">subsistemas</strong>. 
              Além de visualizá-lo e entendê-lo na sua totalidade, temos que observar e compreender as partes que se interagem para formá-lo.
            </p>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {subsistemas.map((sub) => (
                <StaggerItem key={sub.name}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                  >
                    <p className="font-bold text-foreground mb-1">{sub.name}</p>
                    <p className="text-xs text-muted-foreground">{sub.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Sistemas de Informação */}
        <ParallaxSection speed={0.2}>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/30 mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                Sistemas de Informação
              </h3>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                <strong className="text-primary">Conjunto de regras e procedimentos</strong> organizados para o funcionamento de informações para o usuário.
                Todo sistema de informação é composto por quatro componentes:
              </p>

              <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />
                
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {componentesSI.map((comp, index) => (
                    <StaggerItem key={comp.title}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5 text-center"
                      >
                        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center relative z-10">
                          <comp.icon className="w-7 h-7 text-primary" />
                          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <h4 className="font-bold text-foreground mb-2">{comp.title}</h4>
                        <p className="text-sm text-muted-foreground">{comp.description}</p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        {/* Modelo Genérico */}
        <ScrollReveal animation="scale" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Modelo Genérico de Sistemas de Informação
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="px-8 py-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <p className="font-bold text-blue-400 text-lg">Entrada</p>
              </div>
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
              <div className="px-8 py-4 rounded-xl bg-primary/10 border border-primary/30">
                <p className="font-bold text-primary text-lg">Processamento</p>
              </div>
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
              <div className="px-8 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <p className="font-bold text-emerald-400 text-lg">Saída</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/30">
                <RefreshCw className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-medium">Feedback (realimentação)</span>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              O processo pode ser realimentado pelo mecanismo de feedback, pelo qual as saídas influenciam as novas entradas.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TeoriaSistemasSection;
