import { motion } from "framer-motion";
import { Plane, Clock, Users, ListChecks, ArrowUp, Lightbulb, CheckCircle2, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const sprintPhases = [
  {
    time: "5 min",
    title: "Sprint Planning",
    description: "PO apresenta o objetivo: 'Produzir X aviões que voem pelo menos 3 metros'. Time decide quantos consegue fazer.",
    tips: ["Defina meta realista", "Distribua papéis", "Prepare materiais"]
  },
  {
    time: "15 min",
    title: "Execução (com Dailies)",
    description: "Time constrói os aviões. A cada 5 minutos, Daily de 1 minuto: 'O que fiz? O que farei? Impedimentos?'",
    tips: ["3 Dailies curtas", "Ajuste a estratégia", "Colaborem!"]
  },
  {
    time: "10 min",
    title: "Sprint Review",
    description: "Teste os aviões! PO valida quais atendem ao critério de aceite (voar 3m). Conte os pontos.",
    tips: ["Demonstre cada avião", "Aceite ou rejeite", "Celebre sucessos"]
  },
  {
    time: "10 min",
    title: "Retrospectiva",
    description: "O que funcionou? O que melhorar? Se tivesse outra Sprint, o que fariam diferente?",
    tips: ["Seja honesto", "Foque em melhorias", "Documente aprendizados"]
  }
];

const materials = [
  "Papel A4 (várias folhas por time)",
  "Post-its de 3 cores",
  "Canetas/marcadores",
  "Fita métrica (para medir voos)",
  "Cronômetro visível"
];

const avaActivity = {
  title: "Refinamento do Backlog - Sprint 3",
  description: "Com base no Estudo de Caso que seu grupo está desenvolvendo (Cemitério/Presídio), crie um Product Backlog com pelo menos 8 User Stories seguindo o formato correto.",
  requirements: [
    "Mínimo 8 User Stories no formato 'Como... Eu quero... Para que...'",
    "Priorização usando MoSCoW (Must, Should, Could, Won't)",
    "Critérios de aceite para as 3 histórias mais prioritárias",
    "Estimativa de esforço usando Planning Poker (1, 2, 3, 5, 8, 13)"
  ],
  tool: "Trello ou Jira",
  deadline: "Entregar via AVA até a próxima aula"
};

const SprintActivitySection = () => {
  return (
    <section id="atividade" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 text-8xl opacity-10"
        >
          ✈️
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-40 left-10 text-6xl opacity-10"
        >
          📋
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 4 • Mão na Massa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dinâmica: Sprint de Aviões
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              40 minutos para vivenciar uma Sprint completa!
            </p>
          </div>
        </ScrollReveal>

        {/* Overview Cards */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
            >
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-xl mb-1">40 min</h3>
              <p className="text-sm text-muted-foreground">Duração total</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
            >
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-xl mb-1">4-6 pessoas</h3>
              <p className="text-sm text-muted-foreground">Por time</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
            >
              <Plane className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-xl mb-1">Aviões que voem</h3>
              <p className="text-sm text-muted-foreground">Objetivo da Sprint</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Sprint Phases */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Roteiro da Dinâmica
            </h3>
            
            <StaggerContainer className="space-y-4">
              {sprintPhases.map((phase, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {phase.time}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-2">{phase.title}</h4>
                        <p className="text-muted-foreground mb-3">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.tips.map((tip, tipIndex) => (
                            <span key={tipIndex} className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                              💡 {tip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Materials */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <ListChecks className="w-5 h-5 text-primary" />
              Materiais Necessários
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {materials.map((material, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{material}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* AVA Activity */}
        <ScrollReveal animation="scale" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl p-8 border border-primary/30 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  📝 Atividade AVA
                </h3>
                <p className="text-lg text-primary font-medium">{avaActivity.title}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">{avaActivity.description}</p>
            
            <div className="space-y-3 mb-6">
              <h4 className="font-bold text-foreground">Requisitos:</h4>
              {avaActivity.requirements.map((req, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Lightbulb className="w-4 h-4" />
                <span className="text-sm font-medium">Ferramenta: {avaActivity.tool}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{avaActivity.deadline}</span>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Teacher Tip */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">💡 Dica da Professora</h4>
                <p className="text-muted-foreground">
                  Durante a dinâmica, observe como os times se auto-organizam. Quem assume a liderança naturalmente? 
                  Como lidam com mudanças de requisitos? Isso é <strong className="text-emerald-400">Scrum na vida real</strong>!
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Back to Top */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#manifesto" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowUp className="w-5 h-5" />
            <span className="text-sm font-medium">Voltar ao Início</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SprintActivitySection;
