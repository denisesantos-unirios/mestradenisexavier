import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Shield, Users, FileText, ListChecks, CheckCircle, TrendingDown, Calendar, Sun, PlayCircle, RotateCcw } from "lucide-react";

const papeis = [
  { icon: Crown, title: "Product Owner (PO)", desc: "Responsável por maximizar o valor de retorno do produto para o cliente. Prioriza o Product Backlog e fornece o trabalho ao Development Team.", cor: "text-amber-400" },
  { icon: Users, title: "Development Team", desc: "Equipe de 3 a 5 profissionais multidisciplinares e auto-organizados. Entregam uma versão incrementada do produto ao final de cada iteração (Sprint).", cor: "text-emerald-400" },
  { icon: Shield, title: "Scrum Master (SM)", desc: "Garante que o Scrum seja entendido e disseminado. Resolve impedimentos e ajuda PO e Dev Team. É o guardião do processo.", cor: "text-blue-400" },
];

const artefatos = [
  { icon: ListChecks, title: "Product Backlog", desc: "Engloba TODOS os requisitos: regras de negócio (user stories), melhorias, questões técnicas e erros. Controlado pelo PO e ordenado por valor de negócio." },
  { icon: FileText, title: "Sprint Backlog", desc: "Lista de itens que define o objetivo da Sprint. Retirados do Product Backlog — os de maior valor de negócio segundo o PO." },
  { icon: CheckCircle, title: "Definition of Done (DoD)", desc: "Documento que explica quais são as definições de \"pronto\" para as user stories. Garante qualidade e consistência nas entregas." },
  { icon: TrendingDown, title: "Burndown Chart", desc: "Gráfico que mostra o andamento do desenvolvimento. Monitora Product Backlog e Sprint Backlog, indicando se serão completados conforme planejado." },
];

const cerimonias = [
  { icon: Calendar, nome: "Sprint Planning", quando: "Início da Sprint", desc: "PO prioriza itens do Product Backlog; equipe escolhe atividades e move-as para o Sprint Backlog. Planeja como executar.", participantes: "PO + SM + Time" },
  { icon: Sun, nome: "Daily Scrum", quando: "Diariamente (15 min)", desc: "Reunião curta. Cada membro responde: O que fiz desde a última? O que farei até a próxima? Há impedimentos? O Kanban deve estar atualizado antes.", participantes: "SM + Time" },
  { icon: PlayCircle, nome: "Sprint Review", quando: "Final da Sprint", desc: "Equipe apresenta entregas mostrando o software FUNCIONANDO. PO faz aprovação e considerações. Stakeholders dão feedback.", participantes: "PO + SM + Time" },
  { icon: RotateCcw, nome: "Sprint Retrospective", quando: "Após a Review", desc: "O que foi bom na Sprint? O que foi ruim? SM monta um plano de ação para resolver os pontos ruins na próxima Sprint.", participantes: "PO + SM + Time" },
];

const PapeisArtefatosSection = () => (
  <section id="papeis-artefatos" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          🎭 Papéis, Artefatos e Cerimônias do Scrum
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Os três pilares estruturais do framework Scrum, segundo Barbosa (Sistemas de Informações Gerenciais).
        </p>
      </motion.div>

      {/* Papéis */}
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">👥 Papéis (Roles)</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {papeis.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full bg-card/50 border-border hover:border-orange-500/40 transition-colors">
              <CardContent className="p-6">
                <p.icon className={`w-10 h-10 ${p.cor} mb-4`} />
                <h4 className="font-bold text-foreground mb-2 text-lg">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Artefatos */}
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">📦 Artefatos</h3>
      <p className="text-muted-foreground mb-6">
        São documentos que garantem <strong>transparência</strong> sobre os itens que precisam ser feitos e entregues. Existem quatro principais:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-16">
        {artefatos.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <Card className="h-full bg-orange-500/5 border-orange-500/20">
              <CardContent className="p-5 flex gap-4">
                <a.icon className="w-7 h-7 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">{a.title}</h4>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Cerimônias */}
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">🎪 Cerimônias (Eventos)</h3>
      <p className="text-muted-foreground mb-6">
        Eventos com <strong>time box</strong> definido — evitam reuniões desnecessárias e permitem inspeção e adaptação contínuas. 
        Refletem o princípio ágil: <em>"o método mais eficiente de transmitir informações em um time é uma conversa cara a cara"</em>.
      </p>
      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {cerimonias.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full bg-card/50 border-border hover:border-amber-500/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{c.nome}</h4>
                    <p className="text-xs text-amber-400">⏱️ {c.quando} • {c.participantes}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tabela resumo */}
      <Card className="bg-gradient-to-br from-orange-500/5 to-amber-500/5 border-orange-500/20">
        <CardContent className="p-6">
          <h4 className="font-bold text-foreground mb-4">📋 Quadro-resumo: Quem faz o quê e quando</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 text-orange-400">Cerimônia</th>
                  <th className="text-left p-2 text-orange-400">PO</th>
                  <th className="text-left p-2 text-orange-400">SM</th>
                  <th className="text-left p-2 text-orange-400">Time</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="p-2 font-semibold">Criação Backlog</td><td className="p-2">Cria estórias, prioriza, reprioriza</td><td className="p-2">Apoia momento de Ready</td><td className="p-2">Estima esforço</td></tr>
                <tr className="border-b border-border/50"><td className="p-2 font-semibold">Sprint Planning</td><td className="p-2">Seleciona estórias com o time</td><td className="p-2">Facilita</td><td className="p-2">Planeja tarefas</td></tr>
                <tr className="border-b border-border/50"><td className="p-2 font-semibold">Execução</td><td className="p-2">—</td><td className="p-2">Resolve impedimentos</td><td className="p-2">Executa tarefas e atualiza horas</td></tr>
                <tr className="border-b border-border/50"><td className="p-2 font-semibold">Daily</td><td className="p-2">—</td><td className="p-2">Facilita</td><td className="p-2">Responde 3 perguntas</td></tr>
                <tr className="border-b border-border/50"><td className="p-2 font-semibold">Review</td><td className="p-2">Aprova / faz considerações</td><td className="p-2">Conduz</td><td className="p-2">Mostra software funcionando</td></tr>
                <tr><td className="p-2 font-semibold">Retrospective</td><td className="p-2">Participa</td><td className="p-2">Plano de ação</td><td className="p-2">Aponta bons/ruins</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default PapeisArtefatosSection;
