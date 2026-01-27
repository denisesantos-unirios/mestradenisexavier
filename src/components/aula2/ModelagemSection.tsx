import { motion } from "framer-motion";
import { GitBranch, CircleDot, Layers, Users, ArrowRightLeft, Eye, MessageSquare, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const componentesDFD = [
  {
    icon: CircleDot,
    title: "Processo",
    description: "Transforma dados",
    shape: "rounded-full border-2 border-primary"
  },
  {
    icon: Layers,
    title: "Depósito de Dados",
    description: "Armazena dados",
    shape: "border-2 border-primary"
  },
  {
    icon: Users,
    title: "Entidade Externa",
    description: "Origem/destino",
    shape: "border-l-2 border-t-2 border-b-2 border-primary rounded-r-lg"
  },
  {
    icon: ArrowRightLeft,
    title: "Fluxo de Dados",
    description: "Movimento de dados",
    shape: ""
  }
];

const exemplosModelagem = [
  {
    title: "Diagrama de Fluxo de Dados (DFD)",
    description: "Representa o fluxo de informações no sistema"
  },
  {
    title: "Diagrama de Casos de Uso",
    description: "Mostra as interações entre usuários e o sistema"
  }
];

const ModelagemSection = () => {
  return (
    <section id="modelagem" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <GitBranch className="w-4 h-4" />
              <span className="text-sm font-medium">Modelagem de Sistemas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Modelagem de Sistemas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Para a criação de um Sistema de Informação é essencial definir objetivos a serem alcançados. 
              Todo Sistema de Informação é concebido para resolver <strong className="text-primary">"Problemas"</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* O que é Modelagem */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">O que é Modelagem?</h3>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Representação de um sistema</strong> para compreender melhor o problema e propor uma solução.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-secondary/50">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Modelos
                </h4>
                <p className="text-muted-foreground">
                  Representam as características relevantes do sistema e podem <strong className="text-primary">ocultar detalhes irrelevantes</strong>.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-secondary/50">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Por que construir?
                </h4>
                <p className="text-muted-foreground">
                  Para visualizar a estrutura e o funcionamento do sistema. 
                  <strong className="text-primary"> Facilita a comunicação</strong> entre a equipe e os interessados.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Exemplos de Modelagem */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {exemplosModelagem.map((exemplo) => (
              <motion.div
                key={exemplo.title}
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30"
              >
                <h4 className="font-bold text-foreground mb-2">{exemplo.title}</h4>
                <p className="text-muted-foreground">{exemplo.description}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* DFD Components */}
        <ScrollReveal animation="scale" delay={0.4}>
          <div className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Componentes do DFD
            </h3>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {componentesDFD.map((comp) => (
                <StaggerItem key={comp.title}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-5 rounded-xl bg-secondary/50 text-center"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center ${comp.shape} bg-primary/10`}>
                      <comp.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{comp.title}</h4>
                    <p className="text-sm text-muted-foreground">{comp.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Lição Principal */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-emerald-500/10 via-primary/10 to-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🎯 Por que a Modelagem é Importante?
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Para entender a <strong className="text-primary">complexidade do problema</strong> e definir um modelo ideal de solução, 
              precisamos realizar a modelagem do sistema. A modelagem nos permite 
              <strong className="text-emerald-400"> visualizar antes de construir</strong>.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ModelagemSection;
