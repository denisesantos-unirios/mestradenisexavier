import { motion } from "framer-motion";
import { User, ClipboardList, Search, Lightbulb, Target, FileSearch, Code, TestTube } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const funcoes = [
  { icon: ClipboardList, title: "Levantar Requisitos", description: "Identificar e documentar as necessidades do cliente" },
  { icon: Search, title: "Analisar Processos", description: "Estudar os processos existentes e propor melhorias" },
  { icon: Lightbulb, title: "Propor Soluções", description: "Desenvolver soluções tecnológicas adequadas" }
];

const etapasAnalista = [
  { icon: Target, title: "Especificação de Negócio", step: "Requisitos" },
  { icon: FileSearch, title: "Análise de Requisitos", step: "Conceito" },
  { icon: Lightbulb, title: "Análise de Dados", step: "Projeto de Elaboração" },
  { icon: Code, title: "Construção", step: "Programas" },
  { icon: TestTube, title: "Implementação", step: "Sistema de Software" }
];

const AnalistaSection = () => {
  return (
    <section id="analista" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">O Profissional</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O Papel do Analista de Sistemas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O analista de sistemas é o profissional responsável por definir <strong className="text-primary">o que</strong> será desenvolvido, 
              <strong className="text-primary"> para que</strong> servirá e <strong className="text-primary">como</strong> será implementado.
            </p>
          </div>
        </ScrollReveal>

        {/* Principais Funções */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Principais Funções
            </h3>
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {funcoes.map((funcao) => (
                <StaggerItem key={funcao.title}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="p-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-all h-full"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                      <funcao.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{funcao.title}</h4>
                    <p className="text-muted-foreground">{funcao.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Análise de Sistemas - Conceito */}
        <ScrollReveal animation="scale" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/30 mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              O que é Análise de Sistemas?
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-muted-foreground text-center">
                É a atividade de realizar estudo dos <strong className="text-primary">processos, métodos e técnicas</strong> de investigação 
                e especificação da solução do problema, a fim de, a partir dos requisitos levantados, encontrar o 
                <strong className="text-primary"> melhor caminho para a criação de software</strong>.
              </p>
              <div className="p-4 rounded-xl bg-background/50 text-center">
                <p className="text-foreground font-medium">
                  "Análise de Sistema é o processo de <span className="text-primary">analisar</span>, 
                  <span className="text-primary"> projetar</span> e <span className="text-primary">implementar</span> sistemas de informação."
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Fluxo de Trabalho */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Fluxo de Trabalho do Analista
            </h3>
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
              
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {etapasAnalista.map((etapa, index) => (
                  <StaggerItem key={etapa.title}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-secondary/50 border border-border rounded-xl p-4 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                        <etapa.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground text-sm mb-1">{etapa.title}</h4>
                      <p className="text-xs text-muted-foreground">{etapa.step}</p>
                      <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnalistaSection;
