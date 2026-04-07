import { motion } from "framer-motion";
import { BookOpen, GitBranch, Users, BarChart3, ArrowRight, AlertTriangle, CheckCircle2, Target, Repeat, Clock, Shield, Zap, Layers } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const RevisaoTeoricaSection = () => {
  return (
    <section id="teoria" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Bloco 1 • 30 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Revisão Teórica
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gestão de Projetos Ágeis, Scrum e Kanban — conceitos essenciais para o ENADE
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Gestão de Projetos no contexto ágil */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">1. Gestão de Projetos no Contexto Ágil</h3>
                <p className="text-sm text-muted-foreground">⏱ 10 minutos</p>
              </div>
            </div>

            {/* Tradicional vs Ágil */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card/60 border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <h4 className="text-lg font-bold text-foreground">Tradicional (Previsível)</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Escopo relativamente estável e bem definido desde o início</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Planejamento pesado antecipado (PMBOK, cronograma detalhado)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Cronograma rígido com marcos bem definidos</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Muita documentação formal (atas, relatórios, planos)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span><strong>Quando usar:</strong> Contratos fixos, projetos governamentais, sistemas legados</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card/60 border border-primary/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-bold text-foreground">Ágil (Adaptativo)</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Requisitos mutáveis e descobertos ao longo do projeto</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Planejamento incremental, adaptando a cada iteração</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Entregas frequentes de software funcionando</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Foco em valor de negócio e satisfação do cliente</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span><strong>Quando usar:</strong> Startups, squads de produto, inovação</li>
                </ul>
              </motion.div>
            </div>

            {/* Tripla restrição */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8"
            >
              <h4 className="text-lg font-bold text-foreground mb-3">📐 Tripla Restrição em Projetos Ágeis</h4>
              <p className="text-muted-foreground mb-4">
                No modelo tradicional, o <strong className="text-foreground">escopo é fixo</strong> e prazo/custo variam. 
                No ágil, o <strong className="text-primary">escopo é variável</strong> (negociável), enquanto 
                <strong className="text-foreground"> prazo e custo</strong> tendem a ser mais estáveis.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-background/50 rounded-xl p-4 text-center">
                  <p className="text-2xl mb-1">📋</p>
                  <p className="text-sm font-bold text-primary">Escopo</p>
                  <p className="text-xs text-muted-foreground">Variável (MVP)</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 text-center">
                  <p className="text-2xl mb-1">⏰</p>
                  <p className="text-sm font-bold text-foreground">Prazo</p>
                  <p className="text-xs text-muted-foreground">Fixo (Sprints)</p>
                </div>
                <div className="bg-background/50 rounded-xl p-4 text-center">
                  <p className="text-2xl mb-1">💰</p>
                  <p className="text-sm font-bold text-foreground">Custo</p>
                  <p className="text-xs text-muted-foreground">Fixo (Time)</p>
                </div>
              </div>
            </motion.div>

            {/* Palavras-chave ENADE */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-primary/10 border border-primary/30 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-foreground mb-3">🎯 Palavras-chave que o ENADE adora</h4>
              <div className="flex flex-wrap gap-2">
                {["incremental", "iterativo", "entregas frequentes", "feedback", "cliente envolvido", "adaptação à mudança", "valor de negócio", "auto-organização", "melhoria contínua", "MVP"].map((word, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* 2. Scrum */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Repeat className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">2. Scrum — Estrutura e Papéis</h3>
                <p className="text-sm text-muted-foreground">⏱ 10 minutos</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-6"
            >
              <p className="text-muted-foreground text-lg">
                ⚠️ <strong className="text-foreground">Scrum é um framework</strong>, não uma metodologia completa de engenharia.
                Ele define papéis, artefatos e eventos para organizar o trabalho em ciclos curtos.
              </p>
            </motion.div>

            {/* Papéis */}
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Papéis
            </h4>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  title: "Product Owner (PO)",
                  emoji: "👤",
                  color: "border-blue-500/30 bg-blue-500/10",
                  items: [
                    "Dono do produto — visão de negócio",
                    "Define e prioriza o Product Backlog",
                    "Decide \"o que\" fazer e a ordem",
                    "Interface com stakeholders",
                    "UMA pessoa, não um comitê"
                  ]
                },
                {
                  title: "Scrum Master (SM)",
                  emoji: "🛡️",
                  color: "border-emerald-500/30 bg-emerald-500/10",
                  items: [
                    "Facilitador do processo",
                    "Remove impedimentos do time",
                    "Garante uso correto do Scrum",
                    "Protege o time de interferências",
                    "Não é chefe, é servo-líder"
                  ]
                },
                {
                  title: "Dev Team",
                  emoji: "👩‍💻",
                  color: "border-purple-500/30 bg-purple-500/10",
                  items: [
                    "Multidisciplinar (front, back, QA)",
                    "Auto-organizado — decide o \"como\"",
                    "3 a 9 pessoas idealmente",
                    "Responsável pela entrega",
                    "Sem hierarquia interna"
                  ]
                }
              ].map((role, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className={`${role.color} border rounded-2xl p-5`}
                >
                  <div className="text-center mb-3">
                    <span className="text-3xl">{role.emoji}</span>
                    <h5 className="text-lg font-bold text-foreground mt-1">{role.title}</h5>
                  </div>
                  <ul className="space-y-2">
                    {role.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Artefatos */}
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> Artefatos
            </h4>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Product Backlog", desc: "Lista priorizada de TUDO que pode ser desenvolvido. É vivo, evolui sempre.", emoji: "📋" },
                { title: "Sprint Backlog", desc: "Subconjunto do Product Backlog escolhido para a Sprint atual. O time se compromete.", emoji: "📝" },
                { title: "Incremento", desc: "Soma de todos os itens concluídos. Deve estar \"pronto para produção\" (Done).", emoji: "📦" },
              ].map((art, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-xl p-5">
                  <p className="text-2xl mb-2">{art.emoji}</p>
                  <h5 className="font-bold text-foreground mb-2">{art.title}</h5>
                  <p className="text-sm text-muted-foreground">{art.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Eventos */}
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Eventos (Cerimônias)
            </h4>
            <div className="space-y-3 mb-8">
              {[
                { event: "Sprint", time: "1-4 semanas", desc: "Ciclo de trabalho com duração fixa. Tudo acontece dentro da Sprint.", color: "bg-blue-500/10 border-blue-500/30" },
                { event: "Sprint Planning", time: "Até 8h (Sprint de 1 mês)", desc: "Planeja \"o que\" e \"como\" será feito. PO apresenta itens prioritários, time estima e seleciona.", color: "bg-emerald-500/10 border-emerald-500/30" },
                { event: "Daily Scrum", time: "Máx. 15 min", desc: "Reunião diária de sincronização do time. NÃO é para cobrança do gerente! O que fiz? O que vou fazer? Tem impedimento?", color: "bg-amber-500/10 border-amber-500/30" },
                { event: "Sprint Review", time: "Até 4h", desc: "Apresentação do incremento aos stakeholders. Coleta de feedback. Demonstração do software funcionando.", color: "bg-purple-500/10 border-purple-500/30" },
                { event: "Sprint Retrospective", time: "Até 3h", desc: "Melhoria do processo. O que foi bem? O que pode melhorar? Ações para próxima Sprint.", color: "bg-pink-500/10 border-pink-500/30" },
              ].map((ev, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className={`${ev.color} border rounded-xl p-4 flex items-start gap-4`}>
                  <div className="shrink-0">
                    <p className="text-sm font-bold text-foreground">{ev.event}</p>
                    <p className="text-xs text-muted-foreground">{ev.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{ev.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Pontos que caem */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-foreground mb-3">🚨 Pontos que caem MUITO no ENADE</h4>
              <ul className="space-y-2">
                {[
                  "A diferença entre PO (visão do produto) e Scrum Master (processo)",
                  "Daily NÃO é para cobrança — é sincronização da equipe",
                  "O time de desenvolvimento é auto-organizado, decide o \"como\"",
                  "Sprint tem duração FIXA — não se estende",
                  "O PO é UMA pessoa, não um comitê",
                  "Incremento = software potencialmente entregável"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* 3. Kanban */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">3. Kanban — Fluxo Contínuo</h3>
                <p className="text-sm text-muted-foreground">⏱ 10 minutos</p>
              </div>
            </div>

            {/* Conceitos centrais */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-2xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-4">📊 Quadro Kanban</h4>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {["A Fazer", "Em Progresso", "Em Teste", "Concluído"].map((col, i) => (
                    <div key={i} className="bg-secondary/50 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-foreground">{col}</p>
                      <div className="mt-2 space-y-1">
                        {Array.from({ length: i === 1 ? 3 : i === 3 ? 2 : 1 }).map((_, j) => (
                          <div key={j} className={`h-4 rounded ${i === 1 ? 'bg-amber-500/30' : 'bg-primary/20'}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Cada coluna = etapa do fluxo. Cada cartão = tarefa que atravessa o quadro da esquerda para a direita.
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-2xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-4">🚦 WIP (Work in Progress)</h4>
                <p className="text-muted-foreground mb-4">
                  Limitar o número de tarefas em cada coluna para evitar <strong className="text-foreground">multitarefa excessiva</strong> e <strong className="text-foreground">gargalos</strong>.
                </p>
                <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-3">
                  <p className="text-sm text-muted-foreground">
                    ❌ <strong>Sem WIP:</strong> 10 tarefas "em progresso", nenhuma termina → gargalo
                  </p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    ✅ <strong>Com WIP = 3:</strong> No máximo 3 em progresso → foco e fluxo
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Métricas */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-xl p-5">
                <h5 className="font-bold text-foreground mb-2">📏 Lead Time</h5>
                <p className="text-sm text-muted-foreground">
                  Tempo total desde o <strong>pedido</strong> até a <strong>entrega</strong> ao cliente. 
                  Inclui tempo na fila ("A Fazer") + tempo de execução.
                </p>
                <p className="text-xs text-primary mt-2">Exemplo: Cliente pediu dia 1, entregou dia 10 → Lead Time = 10 dias</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-xl p-5">
                <h5 className="font-bold text-foreground mb-2">⏱ Cycle Time</h5>
                <p className="text-sm text-muted-foreground">
                  Tempo desde o <strong>início do trabalho</strong> até a <strong>conclusão</strong>. 
                  Não conta o tempo na fila.
                </p>
                <p className="text-xs text-primary mt-2">Exemplo: Começou dia 5, terminou dia 10 → Cycle Time = 5 dias</p>
              </motion.div>
            </div>

            {/* Scrum x Kanban */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card/80 border border-border rounded-2xl overflow-hidden"
            >
              <div className="bg-primary/10 p-4">
                <h4 className="text-lg font-bold text-foreground text-center">Scrum × Kanban — Diferenças que o ENADE gosta</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-3 text-left text-foreground font-bold">Aspecto</th>
                      <th className="p-3 text-center text-blue-400 font-bold">🏈 Scrum</th>
                      <th className="p-3 text-center text-emerald-400 font-bold">📋 Kanban</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Iterações", "Sprints fixas (1-4 semanas)", "Fluxo contínuo, sem iterações"],
                      ["Papéis", "PO, SM, Dev Team (obrigatórios)", "Sem papéis obrigatórios"],
                      ["Compromisso", "Por Sprint (Sprint Goal)", "Foco na otimização do fluxo"],
                      ["Mudanças", "Apenas entre Sprints", "A qualquer momento"],
                      ["Métricas", "Velocity, Burndown", "Lead Time, Cycle Time, Throughput"],
                      ["Ideal para", "Desenvolvimento de produto", "Suporte, manutenção, ops"],
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-border/30 ${i % 2 === 0 ? 'bg-card/30' : 'bg-card/10'}`}>
                        <td className="p-3 font-medium text-foreground">{row[0]}</td>
                        <td className="p-3 text-center text-muted-foreground">{row[1]}</td>
                        <td className="p-3 text-center text-muted-foreground">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RevisaoTeoricaSection;
