import { motion } from "framer-motion";
import { GitCompare, Clock, ArrowRight, ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const comparisons = [
  { aspect: "Foco principal", scrum: "Gestão de projeto", kanban: "Fluxo contínuo", xp: "Excelência técnica" },
  { aspect: "Iterações", scrum: "Sprints fixas (1-4 sem.)", kanban: "Fluxo contínuo", xp: "Iterações curtas (1-2 sem.)" },
  { aspect: "Papéis", scrum: "PO, SM, Dev Team", kanban: "Sem papéis definidos", xp: "Coach, Cliente, Programadores" },
  { aspect: "Mudanças", scrum: "Apenas entre Sprints", kanban: "A qualquer momento", xp: "Bem-vindas a qualquer hora" },
  { aspect: "Métricas", scrum: "Velocity", kanban: "Lead Time / Cycle Time", xp: "Testes passando" },
  { aspect: "Ideal para", scrum: "Projetos com escopo variável", kanban: "Suporte, manutenção", xp: "Projetos com alta incerteza técnica" },
];

const whenToUse = [
  {
    method: "Scrum",
    emoji: "🏈",
    scenarios: [
      "Projetos novos com escopo que pode mudar",
      "Times de 5-9 pessoas",
      "Necessidade de entregas regulares",
      "Cliente disponível para feedback frequente"
    ],
    color: "bg-blue-500/20 border-blue-500/30"
  },
  {
    method: "Kanban",
    emoji: "📋",
    scenarios: [
      "Suporte e manutenção de sistemas",
      "Fluxo contínuo de demandas",
      "Times que já têm um processo",
      "Quando não faz sentido ter Sprints"
    ],
    color: "bg-emerald-500/20 border-emerald-500/30"
  },
  {
    method: "XP",
    emoji: "⚡",
    scenarios: [
      "Requisitos mudam frequentemente",
      "Qualidade de código é crítica",
      "Times pequenos (2-12 pessoas)",
      "Projetos com alta complexidade técnica"
    ],
    color: "bg-amber-500/20 border-amber-500/30"
  }
];

const ComparacaoSection = () => {
  return (
    <section id="comparacao" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/20">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <GitCompare className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 5 • Análise Comparativa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Scrum vs Kanban vs XP
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada metodologia tem seu contexto ideal — entenda quando usar cada uma
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="mb-16 overflow-x-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden min-w-[600px]">
              <div className="grid grid-cols-4 bg-primary/10">
                <div className="p-4 font-bold text-foreground">Aspecto</div>
                <div className="p-4 font-bold text-foreground text-center">🏈 Scrum</div>
                <div className="p-4 font-bold text-foreground text-center">📋 Kanban</div>
                <div className="p-4 font-bold text-foreground text-center">⚡ XP</div>
              </div>
              {comparisons.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`grid grid-cols-4 ${index % 2 === 0 ? "bg-card/50" : "bg-card/30"} border-t border-border/30`}
                >
                  <div className="p-4 font-medium text-foreground text-sm">{row.aspect}</div>
                  <div className="p-4 text-muted-foreground text-sm text-center">{row.scrum}</div>
                  <div className="p-4 text-muted-foreground text-sm text-center">{row.kanban}</div>
                  <div className="p-4 text-muted-foreground text-sm text-center">{row.xp}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* When to Use */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Quando Usar Cada Uma?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {whenToUse.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`${item.color} border rounded-2xl p-6`}
                >
                  <div className="text-center mb-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <h4 className="text-xl font-bold text-foreground mt-2">{item.method}</h4>
                  </div>
                  <ul className="space-y-2">
                    {item.scenarios.map((scenario, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        {scenario}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Key Insight */}
        <ScrollReveal animation="scale" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-primary/10 border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                💡 Na Prática: Combinação é Comum!
              </h3>
              <p className="text-muted-foreground text-lg">
                Muitas empresas usam <strong className="text-primary">Scrumban</strong> (Scrum + Kanban) ou 
                combinam <strong className="text-primary">Scrum com práticas XP</strong> (TDD, pair programming). 
                O importante é adaptar ao contexto do time e do projeto.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Navigation */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#kanban" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: User Stories & Kanban</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparacaoSection;
