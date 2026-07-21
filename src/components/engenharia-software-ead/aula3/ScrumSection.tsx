import { motion } from "framer-motion";
import { Repeat, Crown, Users, Shield, ListTodo, ClipboardList, CheckCircle2, TrendingDown, Calendar, MessageCircle, Eye, RefreshCw } from "lucide-react";

const papeis = [
  { icon: Crown, cor: "text-amber-500", nome: "Product Owner (PO)", desc: "Maximiza o valor do produto para o cliente, prioriza o Product Backlog e fornece o trabalho ao time." },
  { icon: Users, cor: "text-blue-500", nome: "Development Team", desc: "3 a 5 profissionais que entregam uma versão incrementada do produto ao final de cada iteração." },
  { icon: Shield, cor: "text-emerald-500", nome: "Scrum Master (SM)", desc: "Assegura o entendimento do Scrum, remove impedimentos e apoia PO e time." },
];

const artefatos = [
  { icon: ListTodo, nome: "Product Backlog", desc: "Todos os requisitos (user stories, melhorias, técnicas, erros). Controlado pelo PO e ordenado por valor de negócio." },
  { icon: ClipboardList, nome: "Sprint Backlog", desc: "Itens de maior valor retirados do Product Backlog que definem o objetivo da sprint." },
  { icon: CheckCircle2, nome: "Definition of Done", desc: "Documento que define o que é considerado 'pronto' para cada user story." },
  { icon: TrendingDown, nome: "Burndown", desc: "Gráfico que monitora o andamento do product/sprint backlog frente ao planejamento." },
];

const cerimonias = [
  { icon: Calendar, nome: "Sprint Planning", quando: "Início da Sprint", desc: "PO prioriza itens; time escolhe o que vai desenvolver e planeja tarefas." },
  { icon: MessageCircle, nome: "Daily Scrum", quando: "Diária • 15 min", desc: "O que fiz? O que farei? Há impedimentos? Kanban atualizado antes da daily." },
  { icon: Eye, nome: "Sprint Review", quando: "Fim da Sprint", desc: "Time apresenta entregas com o software FUNCIONANDO. PO aprova / faz considerações." },
  { icon: RefreshCw, nome: "Sprint Retrospective", quando: "Após a Review", desc: "O que foi bom? O que foi ruim? SM monta plano de ação para melhorias." },
];

const ScrumSection = () => (
  <section id="scrum" className="py-24 relative bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-6">
          <Repeat className="w-4 h-4" /> Metodologia Ágil
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Scrum na Prática</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Framework ágil que divide o projeto em ciclos curtos chamados <strong>sprints</strong> (2 a 4 semanas), com rotinas
          claras de planejamento, execução, revisão e melhoria contínua.
        </p>
      </motion.div>

      {/* Ciclo visual */}
      <div className="mb-16 p-6 rounded-2xl border border-border bg-card">
        <h3 className="font-bold text-xl mb-4">🔄 O Ciclo Scrum</h3>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {["Product Backlog", "Sprint Backlog", "Sprint (2-4 semanas)", "Daily Scrum (24h)", "Incremento Entregável"].map((s, i, arr) => (
            <div key={i} className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-violet-500/15 border border-violet-500/30 font-medium">{s}</span>
              {i < arr.length - 1 && <span className="text-violet-500">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Papéis */}
      <h3 className="text-2xl font-bold mb-4">👥 Papéis</h3>
      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {papeis.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="p-5 rounded-xl border border-border bg-card">
            <p.icon className={`w-8 h-8 ${p.cor} mb-2`} />
            <h4 className="font-bold mb-1">{p.nome}</h4>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Artefatos */}
      <h3 className="text-2xl font-bold mb-4">📦 Artefatos</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {artefatos.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="p-5 rounded-xl border border-border bg-card flex gap-4">
            <a.icon className="w-8 h-8 text-violet-500 shrink-0" />
            <div>
              <h4 className="font-bold mb-1">{a.nome}</h4>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cerimônias */}
      <h3 className="text-2xl font-bold mb-4">🎯 Cerimônias (Eventos)</h3>
      <p className="text-sm text-muted-foreground mb-4">Cada cerimônia tem um <em>time box</em> — duração máxima que garante inspeção e adaptação sem reuniões desnecessárias.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {cerimonias.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="p-5 rounded-xl border-2 border-violet-500/30 bg-violet-500/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <c.icon className="w-6 h-6 text-violet-500" />
                <h4 className="font-bold">{c.nome}</h4>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-500">{c.quando}</span>
            </div>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Tabela quem faz o quê */}
      <div className="mt-12 p-6 rounded-2xl border border-border bg-card overflow-x-auto">
        <h3 className="font-bold text-xl mb-4">📋 Quem faz o quê em cada cerimônia</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="p-2">Fase</th><th className="p-2">PO</th><th className="p-2">SM</th><th className="p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Criação do Product Backlog", "Cria e prioriza estórias", "Apoia estimativas", "—"],
              ["Sprint Planning", "Prioriza estórias", "Facilita", "Planeja tarefas"],
              ["Execução", "—", "Remove impedimentos", "Executa tarefas"],
              ["Daily", "—", "Facilita", "Responde as 3 perguntas"],
              ["Review", "Aprova/considera", "Facilita", "Demonstra software FUNCIONANDO"],
              ["Retrospective", "Participa", "Plano de ação", "Levanta bom/ruim"],
            ].map((r, i) => (
              <tr key={i} className="border-b border-border/50">
                {r.map((c, j) => <td key={j} className={`p-2 ${j === 0 ? "font-medium" : "text-muted-foreground"}`}>{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ScrumSection;
