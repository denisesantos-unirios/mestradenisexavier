import { motion } from "framer-motion";
import { Columns3, StickyNote, ArrowRight, Clock, Lightbulb, CheckCircle2, Circle, Timer, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const userStoryExamples = [
  {
    role: "Administrador",
    action: "cadastrar novos funcionários",
    benefit: "gerenciar a equipe do sistema",
    priority: "Alta"
  },
  {
    role: "Cliente",
    action: "visualizar meu histórico de pedidos",
    benefit: "acompanhar minhas compras anteriores",
    priority: "Média"
  },
  {
    role: "Usuário",
    action: "recuperar minha senha por email",
    benefit: "acessar minha conta mesmo se esquecer a senha",
    priority: "Alta"
  }
];

const kanbanColumns = [
  { 
    title: "To Do", 
    icon: Circle,
    color: "bg-muted",
    items: ["Cadastro de clientes", "Relatório mensal", "Integração API"]
  },
  { 
    title: "Doing", 
    icon: Timer,
    color: "bg-blue-500/20",
    items: ["Tela de login", "Dashboard"]
  },
  { 
    title: "Done", 
    icon: CheckCircle2,
    color: "bg-emerald-500/20",
    items: ["Setup do projeto", "Design inicial"]
  }
];

const investCriteria = [
  { letter: "I", word: "Independent", meaning: "Independente de outras histórias" },
  { letter: "N", word: "Negotiable", meaning: "Negociável, não é contrato" },
  { letter: "V", word: "Valuable", meaning: "Valor real para o usuário" },
  { letter: "E", word: "Estimable", meaning: "Possível de estimar esforço" },
  { letter: "S", word: "Small", meaning: "Pequena o suficiente para uma Sprint" },
  { letter: "T", word: "Testable", meaning: "Critérios de aceite claros" }
];

const KanbanSection = () => {
  return (
    <section id="kanban" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 3 • Gestão Visual</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              User Stories & Kanban
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Como escrever boas histórias e visualizar o fluxo de trabalho
            </p>
          </div>
        </ScrollReveal>

        {/* User Story Format */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <StickyNote className="w-6 h-6 text-primary" />
              Anatomia de uma User Story
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <p className="text-2xl font-mono text-foreground mb-6">
                  <span className="text-blue-400">Como</span> [tipo de usuário],
                  <br />
                  <span className="text-emerald-400">Eu quero</span> [ação/funcionalidade],
                  <br />
                  <span className="text-amber-400">Para que</span> [benefício/valor].
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">Quem?</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">O quê?</span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm">Por quê?</span>
                </div>
              </div>
            </motion.div>

            {/* Examples */}
            <StaggerContainer className="grid md:grid-cols-3 gap-4">
              {userStoryExamples.map((story, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg shadow-md transform rotate-[-1deg]"
                    style={{ transform: `rotate(${(index - 1) * 2}deg)` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <StickyNote className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        story.priority === "Alta" 
                          ? "bg-red-500/20 text-red-600 dark:text-red-400" 
                          : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                      }`}>
                        {story.priority}
                      </span>
                    </div>
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                      <span className="font-bold">Como</span> {story.role}, 
                      <span className="font-bold"> eu quero</span> {story.action}, 
                      <span className="font-bold"> para que</span> {story.benefit}.
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* INVEST Criteria */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Critérios INVEST para boas histórias
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {investCriteria.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center cursor-pointer">
                    <span className="text-2xl font-bold text-primary">{item.letter}</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-border rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    <p className="font-bold text-foreground text-sm">{item.word}</p>
                    <p className="text-xs text-muted-foreground">{item.meaning}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Kanban Board */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Columns3 className="w-6 h-6 text-primary" />
              Quadro Kanban
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {kanbanColumns.map((column, colIndex) => (
                <motion.div
                  key={colIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: colIndex * 0.1 }}
                  className={`rounded-xl p-4 ${column.color} border border-border/50`}
                >
                  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/50">
                    <column.icon className="w-5 h-5 text-foreground" />
                    <h4 className="font-bold text-foreground">{column.title}</h4>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-background/50 text-xs font-medium text-muted-foreground">
                      {column.items.length}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {column.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        whileHover={{ scale: 1.02, x: 3 }}
                        className="p-3 rounded-lg bg-card border border-border shadow-sm cursor-pointer"
                      >
                        <p className="text-sm text-foreground">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* WIP Limit Warning */}
        <ScrollReveal animation="scale" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Limite de WIP (Work In Progress)</h4>
                <p className="text-muted-foreground">
                  Limite a quantidade de itens em "Doing"! Muitas tarefas em andamento = nenhuma termina. 
                  <strong className="text-amber-400"> Foque em terminar antes de começar algo novo.</strong>
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Tools */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="text-center mb-8">
            <h4 className="font-bold text-foreground mb-4">Ferramentas Sugeridas</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Trello", "Jira", "Notion", "GitHub Projects", "Post-its físicos"].map((tool, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation to next section */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#atividade" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: Atividade Prática</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default KanbanSection;
