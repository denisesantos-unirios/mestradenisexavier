import { motion } from "framer-motion";
import { Clock, Users, CheckCircle2, Target, Lightbulb, ArrowUp, Scissors, StickyNote, HandMetal, MapPin, Package, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const sprintPhases = [
  {
    time: "5 min",
    title: "Sprint Planning (Sala de Aula)",
    description: "Professora apresenta o desafio: 'Planejar um app de delivery para uma cidade pequena'. Cada time recebe um envelope com seu cenário específico. Times definem papéis (PO, SM, Dev) e negociam quantas User Stories conseguem entregar na Sprint.",
    tips: ["Leiam o cenário em grupo", "Definam papéis Scrum", "Usem post-its para User Stories"]
  },
  {
    time: "20 min",
    title: "Execução + 2 Dailies (Mesas dos Times)",
    description: "Times trabalham nas suas mesas escrevendo User Stories em post-its, priorizando no quadro físico e estimando com Planning Poker (cartas de papel). A cada 10 min, Daily de 2 min em pé: 'O que fizemos? O que faremos? Impedimentos?'",
    tips: ["Post-its coloridos por prioridade", "Fiquem em pé na Daily!", "Movam cards no quadro"]
  },
  {
    time: "10 min",
    title: "Sprint Review (Frente da Sala)",
    description: "Cada time vai até o quadro/parede e apresenta seu Product Backlog físico. PO (professora) valida se as User Stories atendem aos critérios. Turma vota no melhor backlog com adesivos/estrelas!",
    tips: ["Máx 3 min por time", "Colem o board na parede", "Justifiquem prioridades"]
  },
  {
    time: "10 min",
    title: "Retrospectiva (Quadro da Sala)",
    description: "Cada aluno escreve em post-its: 🟢 O que funcionou? 🔴 O que não funcionou? 🔵 O que melhorar? Colam no quadro dividido em 3 colunas. Discussão coletiva sobre os padrões identificados.",
    tips: ["Um post-it por ideia", "Seja honesto", "Proponha ações concretas"]
  }
];

const materials = [
  { name: "Post-its coloridos", desc: "Amarelo, verde, rosa e azul (1 bloco por time)", icon: "🟨" },
  { name: "Canetas marcadoras", desc: "Ponta grossa para legibilidade à distância", icon: "🖊️" },
  { name: "Fita adesiva", desc: "Para fixar o board na parede ou mesa", icon: "📎" },
  { name: "Envelopes com cenários", desc: "Um cenário impresso por time", icon: "✉️" },
  { name: "Cartas Planning Poker", desc: "Impressas: 1, 2, 3, 5, 8, 13 (1 baralho/time)", icon: "🃏" },
  { name: "Adesivos/estrelas", desc: "Para votação na Sprint Review", icon: "⭐" }
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

const boardLayout = [
  { column: "A Fazer", color: "bg-primary/20 text-primary", items: ["US #1", "US #2", "US #3"] },
  { column: "Fazendo", color: "bg-amber-500/20 text-amber-400", items: ["US #4"] },
  { column: "Pronto", color: "bg-emerald-500/20 text-emerald-400", items: ["US #5", "US #6"] }
];

const PresencialActivitySection = () => {
  return (
    <section id="atividade-presencial" className="min-h-screen py-20 px-6 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-20 right-20 text-8xl opacity-10"
        >
          📌
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-40 left-10 text-6xl opacity-10"
        >
          🗂️
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Aula Presencial</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 ml-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 5 • Mão na Massa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dinâmica Presencial: Sprint na Sala
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              45 minutos para vivenciar uma Sprint completa com post-its, quadro físico e muita colaboração!
            </p>
          </div>
        </ScrollReveal>

        {/* Overview Cards */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Clock, title: "45 min", desc: "Duração total" },
              { icon: Users, title: "4-5 pessoas", desc: "Por mesa/time" },
              { icon: StickyNote, title: "Post-its & Quadro", desc: "Materiais físicos" },
              { icon: Target, title: "Product Backlog", desc: "Objetivo da Sprint" }
            ].map((card, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                <card.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground text-xl mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Board Layout Preview */}
        <ScrollReveal animation="fadeUp" delay={0.12}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              Modelo do Quadro Kanban Físico
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {boardLayout.map((col, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-5"
                >
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-bold mb-4 ${col.color}`}>
                    {col.column}
                  </div>
                  <div className="space-y-2">
                    {col.items.map((item, j) => (
                      <div key={j} className="bg-amber-100 dark:bg-amber-900/30 border border-amber-300/30 rounded-lg p-3 text-sm font-medium text-foreground shadow-sm">
                        📝 {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Monte este quadro na parede ou mesa usando fita adesiva e post-its
            </p>
          </div>
        </ScrollReveal>

        {/* Scenarios */}
        <ScrollReveal animation="fadeUp" delay={0.15}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Cenários por Time (Envelopes)
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
              Roteiro da Dinâmica Presencial
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
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                          <span className="text-lg font-bold text-emerald-500">{index + 1}</span>
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

        {/* Materials */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Scissors className="w-5 h-5 text-primary" />
              Materiais Necessários
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {materials.map((mat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border"
                >
                  <span className="text-xl">{mat.icon}</span>
                  <div>
                    <span className="text-sm font-medium text-foreground">{mat.name}</span>
                    <p className="text-xs text-muted-foreground">{mat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Presencial Tips */}
        <ScrollReveal animation="fadeUp" delay={0.35}>
          <div className="mb-12 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HandMetal className="w-5 h-5 text-primary" />
              Dicas para Engajamento Presencial
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { tip: "Daily em pé", desc: "Times ficam em pé durante a Daily para manter a energia e brevidade — máximo 2 minutos!" },
                { tip: "Post-its por cor", desc: "Use cores diferentes: amarelo = User Story, rosa = impedimento, verde = critério de aceite" },
                { tip: "Planning Poker físico", desc: "Imprima cartas com valores 1, 2, 3, 5, 8, 13. Todos revelam ao mesmo tempo!" },
                { tip: "Quadro na parede", desc: "Cole papel kraft ou use o quadro branco. Divida em: A Fazer | Fazendo | Pronto" },
                { tip: "Rotação de papéis", desc: "A cada Sprint, troque PO, SM e Devs para todos vivenciarem cada perspectiva" },
                { tip: "Votação com adesivos", desc: "Na Review, cada aluno recebe 3 adesivos para votar nas melhores User Stories" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground text-sm">{item.tip}</span>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Teacher Tip */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">💡 Dica da Professora</h4>
                <p className="text-muted-foreground">
                  No formato presencial, circule entre as mesas observando a dinâmica de grupo.
                  Perceba quem lidera naturalmente, quem escreve, quem questiona. O post-it físico
                  cria uma <strong className="text-emerald-400">tangibilidade que acelera o aprendizado</strong> — 
                  os alunos "sentem" o backlog crescer. Compare depois com a versão remota para
                  discutir vantagens e desafios de cada formato!
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

export default PresencialActivitySection;
