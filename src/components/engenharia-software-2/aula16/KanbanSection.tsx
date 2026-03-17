import { motion } from "framer-motion";
import { Columns3, Circle, Timer, CheckCircle2, AlertTriangle, ArrowRight, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const kanbanColumns = [
  { 
    title: "Backlog", 
    icon: Circle,
    color: "bg-muted",
    wipLimit: null,
    items: [
      { text: "Relatório financeiro", priority: "Média" },
      { text: "Notificações push", priority: "Baixa" },
      { text: "Integração API pagamento", priority: "Alta" }
    ]
  },
  { 
    title: "To Do (Sprint)", 
    icon: Circle,
    color: "bg-blue-500/10",
    wipLimit: 4,
    items: [
      { text: "Cadastro de clientes", priority: "Alta" },
      { text: "Filtro de produtos", priority: "Média" }
    ]
  },
  { 
    title: "Doing", 
    icon: Timer,
    color: "bg-amber-500/10",
    wipLimit: 2,
    items: [
      { text: "Tela de login", priority: "Alta" },
      { text: "Dashboard admin", priority: "Alta" }
    ]
  },
  { 
    title: "Review", 
    icon: BarChart3,
    color: "bg-purple-500/10",
    wipLimit: 3,
    items: [
      { text: "Busca por CPF", priority: "Média" }
    ]
  },
  { 
    title: "Done", 
    icon: CheckCircle2,
    color: "bg-emerald-500/10",
    wipLimit: null,
    items: [
      { text: "Setup do projeto", priority: "Alta" },
      { text: "Design system", priority: "Alta" }
    ]
  }
];

const kanbanPrinciples = [
  { title: "Visualize o Fluxo", desc: "Torne todo o trabalho visível para o time — o que está parado, o que avança" },
  { title: "Limite o WIP", desc: "Defina limites para 'Doing' — evite multitarefa que não termina nada" },
  { title: "Gerencie o Fluxo", desc: "Meça o Lead Time (entrada → saída) e busque reduzi-lo continuamente" },
  { title: "Torne Políticas Explícitas", desc: "Defina critérios claros: quando um card pode mover de coluna?" },
  { title: "Melhoria Contínua", desc: "Use retrospectivas para identificar gargalos e otimizar o processo" }
];

const KanbanSection = () => {
  return (
    <section id="kanban" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Columns3 className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 2 • Gestão Visual</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quadro Kanban
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visualize o fluxo de trabalho e identifique gargalos em tempo real
            </p>
          </div>
        </ScrollReveal>

        {/* Principles */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="grid md:grid-cols-5 gap-3 mb-12">
            {kanbanPrinciples.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-card/50 border border-border/50 text-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mx-auto mb-2">
                  {i + 1}
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Kanban Board */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-12 overflow-x-auto">
            <div className="grid grid-cols-5 gap-3 min-w-[800px]">
              {kanbanColumns.map((column, colIndex) => (
                <motion.div
                  key={colIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: colIndex * 0.08 }}
                  className={`rounded-xl p-3 ${column.color} border border-border/50`}
                >
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/50">
                    <column.icon className="w-4 h-4 text-foreground" />
                    <h4 className="font-bold text-foreground text-sm">{column.title}</h4>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-background/50 text-xs font-medium text-muted-foreground">
                      {column.items.length}
                    </span>
                  </div>
                  {column.wipLimit && (
                    <div className="text-[10px] text-muted-foreground mb-2 text-center">
                      WIP Limit: {column.wipLimit}
                    </div>
                  )}
                  <div className="space-y-2">
                    {column.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        whileHover={{ scale: 1.03, x: 2 }}
                        className="p-2.5 rounded-lg bg-card border border-border shadow-sm cursor-pointer"
                      >
                        <p className="text-xs text-foreground mb-1">{item.text}</p>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          item.priority === "Alta" ? "bg-red-500/20 text-red-500" :
                          item.priority === "Média" ? "bg-amber-500/20 text-amber-500" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {item.priority}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* WIP Warning */}
        <ScrollReveal animation="scale" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Limite de WIP (Work In Progress)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Muitas tarefas em "Doing" = nenhuma termina. O WIP Limit força o time a 
                  <strong className="text-foreground"> terminar antes de começar algo novo</strong>.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                    <p className="text-xs text-foreground font-semibold mb-1">❌ Sem WIP Limit</p>
                    <p className="text-xs text-muted-foreground">5 tarefas em Doing, 0 em Done → time sobrecarregado, entregas atrasadas</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-xs text-foreground font-semibold mb-1">✅ Com WIP Limit = 2</p>
                    <p className="text-xs text-muted-foreground">2 tarefas em Doing, fluxo constante → entregas previsíveis e time focado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Tools */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="text-center">
            <h4 className="font-bold text-foreground mb-4">Ferramentas para Kanban</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Trello", desc: "Simples e visual" },
                { name: "Jira", desc: "Completo para times" },
                { name: "Notion", desc: "Flexível e customizável" },
                { name: "GitHub Projects", desc: "Integrado ao código" },
                { name: "Azure DevOps", desc: "Corporativo" }
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium"
                  title={tool.desc}
                >
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default KanbanSection;
