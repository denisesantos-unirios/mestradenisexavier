import { motion } from "framer-motion";
import { Monitor, Clock, Users, ListChecks, ArrowUp, Lightbulb, CheckCircle2, Target, MessageSquare, Layout, Shuffle, Video } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const sprintPhases = [
  {
    time: "5 min",
    title: "Sprint Planning (Sala Principal)",
    description: "Professora apresenta o desafio: 'Planejar um app de delivery para uma cidade pequena'. Cada time recebe um cenário diferente via chat. Times vão para salas separadas e definem quantas User Stories conseguem entregar na Sprint.",
    tips: ["Leiam o cenário com atenção", "Definam um Scrum Master", "Usem o Trello/Miro compartilhado"]
  },
  {
    time: "20 min",
    title: "Execução + 2 Dailies (Breakout Rooms)",
    description: "Times trabalham nas salas separadas criando User Stories, priorizando e estimando. A cada 10 min, Daily de 2 min na sala principal: 'O que fizemos? O que faremos? Impedimentos?'",
    tips: ["Colaborem no board online", "Câmeras ligadas!", "Anotem impedimentos"]
  },
  {
    time: "10 min",
    title: "Sprint Review (Sala Principal)",
    description: "Cada time compartilha tela e apresenta seu Product Backlog. PO (professora) valida se as User Stories atendem aos critérios de aceite. Turma vota no melhor backlog pelo chat!",
    tips: ["Máx 3 min por time", "Mostrem o board", "Justifiquem prioridades"]
  },
  {
    time: "10 min",
    title: "Retrospectiva (Mentimeter/Jamboard)",
    description: "Usando ferramenta colaborativa: O que funcionou remoto? O que foi difícil? Como melhorar a comunicação online? Cada aluno adiciona post-its virtuais.",
    tips: ["Seja honesto", "Foque em melhorias", "Compare com presencial"]
  }
];

const tools = [
  { name: "Google Meet / Zoom", desc: "Videoconferência com breakout rooms", icon: "🎥" },
  { name: "Trello / Miro", desc: "Board colaborativo para o Product Backlog", icon: "📋" },
  { name: "Mentimeter", desc: "Retrospectiva com post-its e votação", icon: "🗳️" },
  { name: "Chat da plataforma", desc: "Comunicação rápida e votações", icon: "💬" },
  { name: "Cronômetro online", desc: "Timer compartilhado em tela", icon: "⏱️" }
];

const scenarios = [
  {
    team: "Time A",
    scenario: "App de delivery para cidade com apenas 5 restaurantes e estradas de terra",
    challenge: "Logística limitada"
  },
  {
    team: "Time B",
    scenario: "App de delivery para bairro universitário com pico às 22h",
    challenge: "Alta demanda noturna"
  },
  {
    team: "Time C",
    scenario: "App de delivery para zona rural com sinal de internet instável",
    challenge: "Conectividade"
  },
  {
    team: "Time D",
    scenario: "App de delivery para condomínio fechado com regras de acesso",
    challenge: "Segurança e acesso"
  }
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
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 text-8xl opacity-10"
        >
          💻
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Video className="w-4 h-4" />
              <span className="text-sm font-medium">Aula Remota</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 ml-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 4 • Mão na Massa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dinâmica Remota: Sprint Online
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              45 minutos para vivenciar uma Sprint completa usando ferramentas colaborativas!
            </p>
          </div>
        </ScrollReveal>

        {/* Overview Cards */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-xl mb-1">45 min</h3>
              <p className="text-sm text-muted-foreground">Duração total</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-xl mb-1">4-5 pessoas</h3>
              <p className="text-sm text-muted-foreground">Por breakout room</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Monitor className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-xl mb-1">100% Online</h3>
              <p className="text-sm text-muted-foreground">Ferramentas colaborativas</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <Layout className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground text-xl mb-1">Product Backlog</h3>
              <p className="text-sm text-muted-foreground">Objetivo da Sprint</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Scenarios */}
        <ScrollReveal animation="fadeUp" delay={0.15}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Shuffle className="w-6 h-6 text-primary" />
              Cenários por Time
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {scenarios.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold">{s.team}</span>
                    <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs">{s.challenge}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{s.scenario}</p>
                </motion.div>
              ))}
            </div>
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
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {phase.time}
                        </span>
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

        {/* Tools */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <ListChecks className="w-5 h-5 text-primary" />
              Ferramentas Necessárias
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <div>
                    <span className="text-sm font-medium text-foreground">{tool.name}</span>
                    <p className="text-xs text-muted-foreground">{tool.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Remote Tips */}
        <ScrollReveal animation="fadeUp" delay={0.35}>
          <div className="mb-12 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Dicas para Engajamento Remoto
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { tip: "Câmeras ligadas", desc: "Peça que todos liguem a câmera durante as Dailies e Review para criar conexão" },
                { tip: "Chat ativo", desc: "Use reações e enquetes no chat para manter todos participando" },
                { tip: "Timer visível", desc: "Compartilhe um cronômetro na tela para manter o ritmo da Sprint" },
                { tip: "Breakout rooms", desc: "Use salas separadas para os times trabalharem e retorne à sala principal para cerimônias" },
                { tip: "Scrum Master rotativo", desc: "A cada Sprint, troque o SM para todos praticarem facilitação remota" },
                { tip: "Voting com emoji", desc: "Use 👍👎🤔 no chat para decisões rápidas tipo Planning Poker simplificado" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground text-sm">{item.tip}</span>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
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
                <h3 className="text-2xl font-bold text-foreground mb-2">📝 Atividade AVA</h3>
                <p className="text-lg text-primary font-medium">{avaActivity.title}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">{avaActivity.description}</p>
            <div className="space-y-3 mb-6">
              <h4 className="font-bold text-foreground">Requisitos:</h4>
              {avaActivity.requirements.map((req, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} className="flex items-start gap-3">
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
                  No formato remoto, entre nas breakout rooms para observar como os times se organizam. 
                  Perceba quem liga a câmera, quem digita no board, quem facilita. A dinâmica remota 
                  revela habilidades de <strong className="text-emerald-400">comunicação assíncrona e liderança distribuída</strong> — 
                  competências essenciais no mercado atual!
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
