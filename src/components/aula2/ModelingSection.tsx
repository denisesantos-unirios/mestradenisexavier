import { motion } from "framer-motion";
import { Clock, FileSearch, Users, MessageCircle, ClipboardList, GitBranch, ArrowRight, Layers, CircleDot, ArrowRightLeft } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const techniques = [
  {
    icon: MessageCircle,
    title: "Entrevistas",
    description: "Conversa estruturada com stakeholders para entender necessidades"
  },
  {
    icon: ClipboardList,
    title: "Questionários",
    description: "Coleta de informações em escala de múltiplos usuários"
  },
  {
    icon: Users,
    title: "Observação",
    description: "Acompanhar usuários em seu ambiente de trabalho real"
  },
  {
    icon: FileSearch,
    title: "Análise de Documentos",
    description: "Estudar formulários, relatórios e sistemas existentes"
  }
];

const ModelingSection = () => {
  return (
    <section id="modelagem" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 3 • 20 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conexão com a Modelagem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas para evitar o erro do Grupo A
            </p>
          </div>
        </ScrollReveal>

        {/* DFD Explanation */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  DFD - Diagrama de Fluxo de Dados
                </h3>
                <p className="text-muted-foreground">
                  Uma forma de "desenhar antes de codificar" para garantir que entendemos o problema
                </p>
              </div>
            </div>

            {/* DFD Components */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-secondary/50 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-primary flex items-center justify-center">
                  <CircleDot className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">Processo</p>
                <p className="text-xs text-muted-foreground">Transforma dados</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-secondary/50 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 border-2 border-primary flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">Depósito</p>
                <p className="text-xs text-muted-foreground">Armazena dados</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-secondary/50 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 border-l-2 border-t-2 border-b-2 border-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-foreground">Entidade</p>
                <p className="text-xs text-muted-foreground">Origem/destino</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-secondary/50 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <ArrowRightLeft className="w-8 h-8 text-primary" />
                </div>
                <p className="font-bold text-foreground">Fluxo</p>
                <p className="text-xs text-muted-foreground">Movimento de dados</p>
              </motion.div>
            </div>

            {/* Example DFD */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20"
            >
              <h4 className="font-bold text-foreground mb-4 text-center">Exemplo: DFD Nível 0 - Locadora</h4>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="px-4 py-2 border-l-2 border-t-2 border-b-2 border-primary rounded-r-lg bg-primary/10">
                  <span className="text-sm font-medium text-primary">Cliente</span>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
                <div className="w-24 h-24 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                  <span className="text-xs text-center font-medium text-primary">Alugar<br/>Veículo</span>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
                <div className="px-4 py-2 border-2 border-primary bg-primary/10">
                  <span className="text-sm font-medium text-primary">Veículos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Techniques */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Técnicas de Levantamento de Requisitos
            </h3>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techniques.map((tech) => (
                <StaggerItem key={tech.title}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="p-5 rounded-xl bg-card/80 border border-border hover:border-primary/50 transition-all h-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                      <tech.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{tech.title}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Key Takeaway */}
        <ScrollReveal animation="scale" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-emerald-500/10 via-primary/10 to-emerald-500/10 rounded-2xl p-8 border border-emerald-500/30 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🎯 A Lição Principal
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A <strong className="text-primary">modelagem</strong> e as <strong className="text-primary">técnicas de levantamento</strong> 
              existem para nos ajudar a <strong className="text-emerald-400">entender o problema antes de resolver</strong>.
              Seja no modelo Cascata ou Ágil, essa comunicação é essencial!
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Navigation */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#atividade" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: Atividade AVA</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelingSection;
