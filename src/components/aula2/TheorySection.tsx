import { motion } from "framer-motion";
import { Database, Lightbulb, Brain, ArrowRight, Clock, FileText, Code, TestTube, Rocket, Settings } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const concepts = [
  {
    icon: Database,
    title: "Dado",
    description: "Fato bruto, sem contexto ou significado. Ex: '42', 'João', '15/03'",
    color: "from-blue-500/20 to-blue-600/20",
    example: "Números, nomes, datas isolados"
  },
  {
    icon: Lightbulb,
    title: "Informação",
    description: "Dado processado com contexto e significado. Ex: 'João tem 42 anos'",
    color: "from-amber-500/20 to-amber-600/20",
    example: "Dados organizados com propósito"
  },
  {
    icon: Brain,
    title: "Conhecimento",
    description: "Informação aplicada para tomar decisões. Ex: 'João precisa de plano de saúde senior'",
    color: "from-emerald-500/20 to-emerald-600/20",
    example: "Informação + experiência + ação"
  }
];

const lifecyclePhases = [
  { icon: FileText, title: "Estudo", description: "Viabilidade e escopo" },
  { icon: Lightbulb, title: "Análise", description: "Requisitos e modelagem" },
  { icon: Settings, title: "Projeto", description: "Arquitetura e design" },
  { icon: Code, title: "Codificação", description: "Implementação" },
  { icon: TestTube, title: "Testes", description: "Validação e verificação" },
  { icon: Rocket, title: "Implantação", description: "Deploy e manutenção" }
];

const TheorySection = () => {
  return (
    <section id="teoria" className="min-h-screen py-20 px-6 relative overflow-hidden">
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
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 1 • 20 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Teoria Relâmpago
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conceitos fundamentais de Análise de Sistemas
            </p>
          </div>
        </ScrollReveal>

        {/* Concepts Section */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Dado → Informação → Conhecimento
            </h3>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {concepts.map((concept, index) => (
                <StaggerItem key={concept.title}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${concept.color} border border-border/50 backdrop-blur-sm h-full`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <concept.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{concept.title}</h4>
                    </div>
                    <p className="text-muted-foreground mb-4">{concept.description}</p>
                    <div className="text-sm text-primary/80 italic">
                      {concept.example}
                    </div>
                    
                    {index < concepts.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Lifecycle Phases */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              O Ciclo de Vida do Software
            </h3>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />
              
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {lifecyclePhases.map((phase, index) => (
                  <StaggerItem key={phase.title}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center relative z-10">
                        <phase.icon className="w-6 h-6 text-primary" />
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{phase.title}</h4>
                      <p className="text-xs text-muted-foreground">{phase.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>

        {/* The Hook */}
        <ScrollReveal animation="scale" delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/30"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🎯 O Grande Questionamento
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                "Essas fases (Análise, Projeto, Codificação) existem <strong className="text-primary">sempre</strong>. 
                A diferença é <strong className="text-primary">como organizamos elas</strong>."
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-blue-500/20 text-blue-400 font-medium">
                  Tudo de uma vez? (Cascata)
                </div>
                <div className="px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                  Em pedacinhos? (Ágil)
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Navigation to next section */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#dinamica" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: A Dinâmica</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TheorySection;
