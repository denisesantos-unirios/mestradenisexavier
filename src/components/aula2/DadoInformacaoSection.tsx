import { motion } from "framer-motion";
import { Database, Lightbulb, Brain, ArrowRight, Thermometer } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const concepts = [
  {
    icon: Database,
    title: "Dado",
    definition: "Elemento identificado em sua forma bruta, sem interpretação.",
    example: "35, 89, 120 – números soltos sem contexto",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30"
  },
  {
    icon: Lightbulb,
    title: "Informação",
    definition: "Dados organizados que geram significado.",
    example: "Temperatura média do dia é 35°C",
    color: "from-amber-500/20 to-amber-600/20",
    borderColor: "border-amber-500/30"
  },
  {
    icon: Brain,
    title: "Conhecimento",
    definition: "Informação interpretada para tomada de decisão.",
    example: "A alta temperatura indica a necessidade de maior consumo de água",
    color: "from-emerald-500/20 to-emerald-600/20",
    borderColor: "border-emerald-500/30"
  }
];

const DadoInformacaoSection = () => {
  return (
    <section id="dado-informacao" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Thermometer className="w-4 h-4" />
              <span className="text-sm font-medium">Conceitos Fundamentais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dados, Informação e Conhecimento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A informação hoje é um bem muito valioso para as empresas. É a base principal para as tomadas de decisões.
            </p>
          </div>
        </ScrollReveal>

        {/* Concepts Cards */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
            {concepts.map((concept, index) => (
              <StaggerItem key={concept.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${concept.color} border ${concept.borderColor} backdrop-blur-sm h-full`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center">
                      <concept.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{concept.title}</h4>
                  </div>
                  
                  <p className="text-foreground font-medium mb-3">{concept.definition}</p>
                  
                  <div className="p-3 rounded-lg bg-background/30">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Exemplo:</strong> {concept.example}
                    </p>
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
        </ScrollReveal>

        {/* Visual Flow */}
        <ScrollReveal animation="scale" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Fluxo de Transformação
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="px-6 py-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <p className="font-bold text-blue-400">35, 89, 120</p>
                <p className="text-xs text-muted-foreground">Dados brutos</p>
              </div>
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
              <div className="px-6 py-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <p className="font-bold text-amber-400">Temp. média: 35°C</p>
                <p className="text-xs text-muted-foreground">Informação</p>
              </div>
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
              <div className="px-6 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <p className="font-bold text-emerald-400">Beber mais água!</p>
                <p className="text-xs text-muted-foreground">Conhecimento</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DadoInformacaoSection;
