import { motion } from "framer-motion";
import { Users, Crown, Shield, Clock, Calendar, MessageCircle, Eye, Repeat, ArrowRight, Zap, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const scrumRoles = [
  {
    icon: Crown,
    title: "Product Owner",
    description: "Dono do produto. Define o QUE será feito e prioriza o backlog.",
    responsibilities: ["Define visão do produto", "Prioriza backlog", "Aceita/rejeita entregas"],
    color: "from-amber-500/20 to-amber-600/20"
  },
  {
    icon: Shield,
    title: "Scrum Master",
    description: "Guardião do processo. Remove impedimentos e facilita cerimônias.",
    responsibilities: ["Facilita rituais", "Remove bloqueios", "Protege o time"],
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: Users,
    title: "Time de Desenvolvimento",
    description: "Equipe auto-organizada que CONSTRÓI o produto.",
    responsibilities: ["Desenvolve incrementos", "Estima esforço", "Auto-organização"],
    color: "from-emerald-500/20 to-emerald-600/20"
  }
];

const ceremonies = [
  {
    icon: Calendar,
    title: "Sprint Planning",
    duration: "2-4h",
    description: "Time seleciona itens do backlog para a Sprint e define COMO serão feitos.",
    when: "Início da Sprint"
  },
  {
    icon: MessageCircle,
    title: "Daily Scrum",
    duration: "15min",
    description: "Sincronização diária: O que fiz? O que farei? Há impedimentos?",
    when: "Todo dia, mesmo horário"
  },
  {
    icon: Eye,
    title: "Sprint Review",
    duration: "1-2h",
    description: "Demonstração do incremento ao PO e stakeholders. Coleta de feedback.",
    when: "Final da Sprint"
  },
  {
    icon: Repeat,
    title: "Sprint Retrospective",
    duration: "1-2h",
    description: "Time reflete: O que foi bom? O que melhorar? Ações para próxima Sprint.",
    when: "Após a Review"
  }
];

const artifacts = [
  { title: "Product Backlog", description: "Lista priorizada de tudo que o produto precisa" },
  { title: "Sprint Backlog", description: "Itens selecionados para a Sprint atual + plano" },
  { title: "Incremento", description: "Soma de todos os itens concluídos (potencialmente entregável)" }
];

const ScrumSection = () => {
  return (
    <section id="scrum" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-32 w-64 h-64 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-20 w-40 h-40 border border-accent/20 rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 2 • Framework Principal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Scrum na Prática
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O framework ágil mais utilizado no mundo
            </p>
          </div>
        </ScrollReveal>

        {/* Sprint Cycle Visual */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-bold">
                Sprint = 1-4 semanas
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
              <div className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold">
                Incremento Entregável
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
              <div className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 font-bold">
                Feedback
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
              <Repeat className="w-5 h-5 text-primary" />
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Scrum Roles */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Os 3 Papéis do Scrum
            </h3>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              {scrumRoles.map((role, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${role.color} border border-border/50 backdrop-blur-sm h-full`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                        <role.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-2">{role.title}</h4>
                    <p className="text-muted-foreground mb-4 text-sm">{role.description}</p>
                    
                    <div className="space-y-2">
                      {role.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Ceremonies */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              As 4 Cerimônias
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {ceremonies.map((ceremony, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <ceremony.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-foreground">{ceremony.title}</h4>
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {ceremony.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{ceremony.description}</p>
                      <p className="text-xs text-primary/80 italic">📅 {ceremony.when}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Artifacts */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Os 3 Artefatos
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {artifacts.map((artifact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-4 rounded-xl bg-card/50 border border-border/50 text-center max-w-xs"
                >
                  <h4 className="font-bold text-foreground mb-1">{artifact.title}</h4>
                  <p className="text-xs text-muted-foreground">{artifact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Dinâmica Callout */}
        <ScrollReveal animation="scale" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/30"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🎮 Dinâmica: Scrum com Aviões de Papel
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                Vamos simular uma <strong className="text-primary">Sprint completa de 40 minutos</strong> em sala! 
                Vocês vão vivenciar os rituais (Planning, Daily, Review, Retro) construindo aviões de papel.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">⏱️ 40 min total</span>
                <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400">✈️ Aviões de papel</span>
                <span className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-400">📋 Kanban com Post-its</span>
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
          <a href="#kanban" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: User Stories e Kanban</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrumSection;
