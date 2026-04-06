import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Layers, Target, RotateCcw, CheckCircle, ClipboardList } from "lucide-react";

const papeis = [
  { icon: Target, title: "Product Owner (PO)", desc: "Dono do produto. Define prioridades, decide o que será construído, representa o cliente.", color: "text-orange-400" },
  { icon: Users, title: "Scrum Master (SM)", desc: "Facilitador. Remove impedimentos, garante que o Scrum está sendo seguido, protege o time.", color: "text-amber-400" },
  { icon: Layers, title: "Dev Team", desc: "Time de desenvolvimento. Multidisciplinar e auto-organizado. Geralmente 3-9 pessoas.", color: "text-yellow-400" },
];

const eventos = [
  { nome: "Sprint", desc: "Ciclo de trabalho de 1-4 semanas (mais comum: 2 semanas)", icon: "🏃" },
  { nome: "Sprint Planning", desc: "Reunião de planejamento: o que será feito nessa Sprint?", icon: "📋" },
  { nome: "Daily Scrum", desc: "Reunião diária de 15 min: o que fiz, o que vou fazer, impedimentos", icon: "☀️" },
  { nome: "Sprint Review", desc: "Demonstração do incremento para stakeholders ao final da Sprint", icon: "🎬" },
  { nome: "Sprint Retrospective", desc: "O time reflete: o que melhorar para a próxima Sprint?", icon: "🔄" },
];

const ConteudoSection = () => (
  <section id="scrum-teoria" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Papéis */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          🏈 <span className="text-orange-400">Scrum</span>: Papéis, Eventos e Artefatos
        </h2>
      </motion.div>

      <h3 className="text-2xl font-bold text-foreground mb-6">👥 Papéis</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {papeis.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full bg-card/50 border-border">
              <CardContent className="p-6">
                <p.icon className={`w-8 h-8 ${p.color} mb-3`} />
                <h4 className="font-bold text-foreground mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Eventos */}
      <h3 className="text-2xl font-bold text-foreground mb-6">📅 Eventos</h3>
      <div className="space-y-3 mb-12">
        {eventos.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <div className="p-4 rounded-xl bg-card/50 border border-border flex items-start gap-4">
              <span className="text-2xl">{e.icon}</span>
              <div>
                <h4 className="font-bold text-foreground">{e.nome}</h4>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Artefatos */}
      <h3 className="text-2xl font-bold text-foreground mb-6">📦 Artefatos</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {[
          { title: "Product Backlog", desc: "Lista priorizada de tudo que o produto precisa. Gerenciado pelo PO." },
          { title: "Sprint Backlog", desc: "Itens selecionados do Product Backlog para a Sprint atual + plano de entrega." },
          { title: "Incremento", desc: "O produto funcional entregue ao final de cada Sprint. Deve estar 'pronto' (DoD)." },
        ].map((a, i) => (
          <Card key={i} className="bg-orange-500/5 border-orange-500/20">
            <CardContent className="p-5">
              <h4 className="font-bold text-foreground mb-2">{a.title}</h4>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mini-Simulação */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">🎯 Mini-Simulação Scrum</h3>
            <p className="text-muted-foreground mb-6">Em grupos, escolha um mini produto e simule uma Sprint:</p>
            
            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {["📱 App de agendamento", "📝 Lista de tarefas", "💰 Controle de gastos"].map((p, i) => (
                <div key={i} className="p-3 rounded-lg bg-background/50 border border-border text-center text-sm text-muted-foreground">{p}</div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground"><span className="text-orange-400">Passo 1:</span> Construa um mini Product Backlog com 5 itens (user stories)</p>
                <p className="text-xs text-muted-foreground mt-1">Ex: "Como usuário, quero agendar consultas para não esquecer meus compromissos"</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground"><span className="text-orange-400">Passo 2:</span> Defina 1 Sprint de 1 semana: quais itens entrariam?</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground"><span className="text-orange-400">Passo 3:</span> Apresentação rápida (3-5 min por grupo)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-orange-400">
              <CheckCircle className="w-4 h-4" />
              <span>Entrega: Product Backlog + Sprint Backlog no AVA</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default ConteudoSection;
