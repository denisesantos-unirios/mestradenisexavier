import { motion } from "framer-motion";
import { Code2, Users, RefreshCw, TestTube, GitBranch, Clock, ArrowRight, Zap, Shield, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const xpValues = [
  { icon: MessageSquare, title: "Comunicação", description: "Interação constante entre todos os membros do time e com o cliente" },
  { icon: Zap, title: "Simplicidade", description: "Fazer o mais simples que funcione. Não adicionar complexidade desnecessária" },
  { icon: RefreshCw, title: "Feedback", description: "Ciclos curtos de feedback permitem correção rápida de rumo" },
  { icon: Shield, title: "Coragem", description: "Coragem para refatorar, descartar código e dar feedback honesto" },
  { icon: Users, title: "Respeito", description: "Todos contribuem e são valorizados no time" },
];

const xpPractices = [
  {
    icon: Users,
    title: "Programação em Par",
    description: "Dois programadores trabalham juntos: um escreve (driver), o outro revisa (navigator). Alterna-se frequentemente.",
    benefit: "Menos bugs, compartilhamento de conhecimento"
  },
  {
    icon: TestTube,
    title: "TDD (Test-Driven Development)",
    description: "Escrever o teste ANTES do código. Ciclo: Red → Green → Refactor.",
    benefit: "Código mais confiável e bem projetado"
  },
  {
    icon: RefreshCw,
    title: "Integração Contínua",
    description: "Integrar código ao repositório várias vezes ao dia. Builds automatizados detectam erros cedo.",
    benefit: "Problemas detectados rapidamente"
  },
  {
    icon: Code2,
    title: "Refatoração",
    description: "Melhorar continuamente o código sem alterar seu comportamento. Manter o código limpo e simples.",
    benefit: "Código sustentável a longo prazo"
  },
  {
    icon: GitBranch,
    title: "Releases Pequenas",
    description: "Entregas frequentes de versões funcionais com valor real para o cliente.",
    benefit: "Feedback rápido do cliente"
  },
  {
    icon: Clock,
    title: "Ritmo Sustentável",
    description: "Semana de 40h. Horas extras não são sustentáveis e prejudicam a qualidade.",
    benefit: "Time motivado e produtivo"
  }
];

const XPSection = () => {
  return (
    <section id="xp" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 4 • Extreme Programming</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              XP — Extreme Programming
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Foco em excelência técnica e práticas de engenharia
            </p>
          </div>
        </ScrollReveal>

        {/* XP Values */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Os 5 Valores do XP
            </h3>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {xpValues.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 text-center h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{value.title}</h4>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* XP Practices */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              Práticas Principais
            </h3>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {xpPractices.map((practice, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <practice.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground">{practice.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 flex-1">{practice.description}</p>
                    <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                      ✅ {practice.benefit}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* TDD Cycle */}
        <ScrollReveal animation="scale" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              🔄 Ciclo TDD — Red, Green, Refactor
            </h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-destructive/20 border-2 border-destructive/50 flex items-center justify-center">
                  <span className="text-2xl">🔴</span>
                </div>
                <span className="text-sm font-bold text-foreground">RED</span>
                <span className="text-xs text-muted-foreground text-center max-w-[100px]">Escreva um teste que falhe</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center">
                  <span className="text-2xl">🟢</span>
                </div>
                <span className="text-sm font-bold text-foreground">GREEN</span>
                <span className="text-xs text-muted-foreground text-center max-w-[100px]">Faça o teste passar</span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center">
                  <span className="text-2xl">🔵</span>
                </div>
                <span className="text-sm font-bold text-foreground">REFACTOR</span>
                <span className="text-xs text-muted-foreground text-center max-w-[100px]">Melhore o código</span>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Navigation */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#comparacao" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: Comparação das Metodologias</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default XPSection;
