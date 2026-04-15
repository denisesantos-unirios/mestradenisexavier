import { motion } from "framer-motion";
import { BookOpen, GitBranch, Users, BarChart3, ArrowRight, AlertTriangle, CheckCircle2, Target, Repeat, Clock, Shield, Zap, Layers, Heart, Eye, EyeOff, Info } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState } from "react";
import scrumFrameworkImg from "@/assets/scrum-framework.jpg";
import scrumSprintImg from "@/assets/scrum-sprint-cycle.jpg";
import kanbanBoardImg from "@/assets/kanban-board.jpg";

const RevisaoTeoricaSection = () => {
  const [showManifesto, setShowManifesto] = useState(false);
  const [showBurndown, setShowBurndown] = useState(false);

  return (
    <section id="teoria" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Bloco 1 • 40 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Revisão Teórica Completa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gestão de Projetos Ágeis, Manifesto Ágil, Scrum e Kanban — tudo que cai no ENADE
            </p>
          </div>
        </ScrollReveal>

        {/* ======================== */}
        {/* 1. Gestão de Projetos no contexto ágil */}
        {/* ======================== */}
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

            {/* O que é um projeto? */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-3">📌 O que é um Projeto?</h4>
              <p className="text-muted-foreground mb-4">
                Segundo o <strong className="text-foreground">PMBOK (Project Management Body of Knowledge)</strong>, um projeto é um 
                <strong className="text-primary"> esforço temporário</strong> empreendido para criar um produto, serviço ou resultado 
                <strong className="text-primary"> exclusivo</strong>. Todo projeto tem início e fim definidos.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { label: "Temporário", desc: "Tem início e fim definidos", emoji: "⏰" },
                  { label: "Exclusivo", desc: "Resultado único, não repetitivo", emoji: "🎯" },
                  { label: "Progressivo", desc: "Elaborado em etapas incrementais", emoji: "📈" },
                ].map((item, i) => (
                  <div key={i} className="bg-secondary/50 rounded-xl p-4 text-center">
                    <p className="text-2xl mb-1">{item.emoji}</p>
                    <p className="text-sm font-bold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tradicional vs Ágil */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <h4 className="text-lg font-bold text-foreground">Tradicional (Previsível)</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Escopo relativamente estável e bem definido desde o início</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Planejamento pesado antecipado (PMBOK, cronograma detalhado)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Cronograma rígido com marcos bem definidos</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Muita documentação formal (atas, relatórios, planos)</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span>Fases sequenciais: Iniciação → Planejamento → Execução → Encerramento</li>
                  <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5">▸</span><strong>Quando usar:</strong> Contratos fixos, projetos governamentais, sistemas legados, construção civil</li>
                </ul>
                <div className="mt-4 bg-blue-500/10 rounded-xl p-3">
                  <p className="text-xs text-blue-300"><strong>Exemplo ENADE:</strong> "Empresa contratada pelo governo com edital de licitação e escopo fechado" → modelo tradicional/cascata.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-primary/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-bold text-foreground">Ágil (Adaptativo)</h4>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Requisitos mutáveis e descobertos ao longo do projeto</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Planejamento incremental, adaptando a cada iteração</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Entregas frequentes de software funcionando</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Foco em valor de negócio e satisfação do cliente</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Ciclos curtos: planejar → desenvolver → revisar → adaptar</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span><strong>Quando usar:</strong> Startups, squads de produto, inovação, escopo incerto</li>
                </ul>
                <div className="mt-4 bg-primary/10 rounded-xl p-3">
                  <p className="text-xs text-primary"><strong>Exemplo ENADE:</strong> "Startup de fintech com MVP e necessidade de validar hipóteses rapidamente" → Scrum/Ágil.</p>
                </div>
              </motion.div>
            </div>

            {/* Tripla restrição */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-3">📐 Tripla Restrição — Triângulo de Ferro</h4>
              <p className="text-muted-foreground mb-4">
                No modelo tradicional, o <strong className="text-foreground">escopo é fixo</strong> e prazo/custo variam.
                No ágil, o <strong className="text-primary">escopo é variável</strong> (negociável), enquanto
                <strong className="text-foreground"> prazo e custo</strong> tendem a ser mais estáveis.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-4">
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
              <div className="bg-background/30 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-amber-400">⚠️ Dica ENADE:</strong> Se a questão pedir "o que varia no ágil", a resposta é ESCOPO.
                  Se pedir "o que varia no tradicional", é PRAZO e/ou CUSTO.
                </p>
              </div>
            </motion.div>

            {/* Manifesto Ágil */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-primary/30 rounded-2xl overflow-hidden mb-8">
              <button
                onClick={() => setShowManifesto(!showManifesto)}
                className="w-full bg-primary/10 p-4 flex items-center justify-between hover:bg-primary/15 transition-colors"
              >
                <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" /> Manifesto Ágil (2001) — Os 4 Valores e 12 Princípios
                </h4>
                {showManifesto ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
              </button>
              {showManifesto && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-6">
                  <p className="text-muted-foreground mb-6">
                    Em fevereiro de 2001, 17 desenvolvedores se reuniram em Snowbird, Utah, e criaram o 
                    <strong className="text-foreground"> Manifesto para Desenvolvimento Ágil de Software</strong>. Eles definiram 4 valores fundamentais:
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      { left: "Indivíduos e interações", right: "processos e ferramentas", emoji: "👥" },
                      { left: "Software funcionando", right: "documentação abrangente", emoji: "💻" },
                      { left: "Colaboração com o cliente", right: "negociação de contratos", emoji: "🤝" },
                      { left: "Responder a mudanças", right: "seguir um plano", emoji: "🔄" },
                    ].map((v, i) => (
                      <div key={i} className="flex items-center gap-3 bg-secondary/30 rounded-xl p-4">
                        <span className="text-2xl">{v.emoji}</span>
                        <div className="flex-1">
                          <span className="font-bold text-primary">{v.left}</span>
                          <span className="text-muted-foreground"> mais que </span>
                          <span className="text-muted-foreground line-through">{v.right}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-amber-400">⚠️ Atenção:</strong> "Mais que" NÃO significa que os itens da direita não têm valor.
                      Significa que os da esquerda são <strong className="text-foreground">priorizados</strong>. Essa nuance cai no ENADE!
                    </p>
                  </div>

                  <h5 className="text-lg font-bold text-foreground mb-4">12 Princípios do Manifesto Ágil</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Satisfação do cliente com entrega contínua de software de valor",
                      "Mudanças são bem-vindas, mesmo tardias no desenvolvimento",
                      "Entregar software funcionando com frequência (semanas, não meses)",
                      "Pessoas de negócio e devs trabalham juntos diariamente",
                      "Construa projetos com indivíduos motivados; dê o ambiente e suporte",
                      "Conversa face a face é a forma mais eficiente de comunicação",
                      "Software funcionando é a medida primária de progresso",
                      "Processos ágeis promovem desenvolvimento sustentável (ritmo constante)",
                      "Atenção contínua à excelência técnica e bom design",
                      "Simplicidade — maximizar o trabalho NÃO realizado — é essencial",
                      "As melhores arquiteturas e requisitos emergem de equipes auto-organizadas",
                      "Equipe reflete regularmente sobre como se tornar mais eficaz e ajusta comportamento"
                    ].map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground bg-card/40 rounded-lg p-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0">{i + 1}</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Palavras-chave ENADE */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-primary/10 border border-primary/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">🎯 Palavras-chave que o ENADE adora</h4>
              <div className="flex flex-wrap gap-2">
                {["incremental", "iterativo", "entregas frequentes", "feedback", "cliente envolvido", "adaptação à mudança", "valor de negócio", "auto-organização", "melhoria contínua", "MVP", "time-box", "inspeção", "transparência", "adaptação"].map((word, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* ======================== */}
        {/* 2. Scrum */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Repeat className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">2. Scrum — Framework Completo</h3>
                <p className="text-sm text-muted-foreground">⏱ 15 minutos</p>
              </div>
            </div>

            {/* Definição */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-6">
              <p className="text-muted-foreground text-lg mb-2">
                ⚠️ <strong className="text-foreground">Scrum é um framework</strong>, não uma metodologia completa de engenharia.
                Ele define papéis, artefatos e eventos para organizar o trabalho em ciclos curtos.
              </p>
              <p className="text-sm text-muted-foreground">
                Foi criado por <strong className="text-foreground">Ken Schwaber</strong> e <strong className="text-foreground">Jeff Sutherland</strong> nos anos 1990.
                O Scrum Guide é a referência oficial e é atualizado periodicamente (última versão: 2020).
              </p>
            </motion.div>

            {/* Pilares do Scrum */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-4">🏛️ Os 3 Pilares do Scrum (Empirismo)</h4>
              <p className="text-sm text-muted-foreground mb-4">
                O Scrum é fundamentado no <strong className="text-foreground">controle de processo empírico</strong> — decisões baseadas no que é observado, não em suposições.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Transparência", desc: "Todos os aspectos significativos do processo devem ser visíveis para os responsáveis pelo resultado. Quadros, artefatos e reuniões são abertos.", emoji: "🔍", color: "bg-blue-500/10 border-blue-500/30" },
                  { title: "Inspeção", desc: "Artefatos e progresso devem ser inspecionados frequentemente para detectar desvios indesejáveis. Os eventos do Scrum são checkpoints.", emoji: "🔎", color: "bg-emerald-500/10 border-emerald-500/30" },
                  { title: "Adaptação", desc: "Se o resultado não está adequado, o processo ou o material deve ser ajustado o mais breve possível. A Retrospectiva é o evento-chave.", emoji: "🔄", color: "bg-purple-500/10 border-purple-500/30" },
                ].map((p, i) => (
                  <div key={i} className={`${p.color} border rounded-xl p-5 text-center`}>
                    <p className="text-3xl mb-2">{p.emoji}</p>
                    <h5 className="font-bold text-foreground mb-2">{p.title}</h5>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Imagem Scrum Framework */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border-2 border-primary/30 rounded-2xl overflow-hidden mb-8 shadow-lg shadow-primary/5">
              <div className="bg-primary/10 p-3">
                <h4 className="text-center font-bold text-foreground">📊 Visão Geral do Framework Scrum</h4>
              </div>
              <div className="bg-slate-800 p-2">
                <img src={scrumFrameworkImg} alt="Diagrama do Framework Scrum mostrando Product Backlog, Sprint Planning, Sprint, Daily Scrum, Sprint Review, Sprint Retrospective e Incremento" className="w-full h-auto rounded-lg" />
              </div>
            </motion.div>

            {/* Papéis */}
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Papéis (Scrum Team)
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
                    "UMA pessoa, não um comitê",
                    "Maximiza o valor do produto"
                  ],
                  example: "No Spotify, seria o Product Manager da squad"
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
                    "Não é chefe, é servo-líder",
                    "Coaching em agilidade"
                  ],
                  example: "Diferente de gerente de projetos — não cobra, facilita"
                },
                {
                  title: "Developers (Dev Team)",
                  emoji: "👩‍💻",
                  color: "border-purple-500/30 bg-purple-500/10",
                  items: [
                    "Multidisciplinar (front, back, QA, UX)",
                    "Auto-organizado — decide o \"como\"",
                    "3 a 9 pessoas idealmente",
                    "Responsável pela entrega do incremento",
                    "Sem hierarquia interna",
                    "Cross-funcional (cobre todas as skills)"
                  ],
                  example: "No Scrum Guide 2020, o nome mudou de 'Development Team' para 'Developers'"
                }
              ].map((role, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className={`${role.color} border rounded-2xl p-5`}>
                  <div className="text-center mb-3">
                    <span className="text-3xl">{role.emoji}</span>
                    <h5 className="text-lg font-bold text-foreground mt-1">{role.title}</h5>
                  </div>
                  <ul className="space-y-2 mb-3">
                    {role.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-background/30 rounded-lg p-2">
                    <p className="text-xs text-muted-foreground italic">💡 {role.example}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Artefatos */}
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> Artefatos
            </h4>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  title: "Product Backlog",
                  desc: "Lista priorizada de TUDO que pode ser desenvolvido. É vivo, evolui sempre. Gerenciado pelo PO.",
                  emoji: "📋",
                  detail: "Compromisso: Meta do Produto (Product Goal)"
                },
                {
                  title: "Sprint Backlog",
                  desc: "Subconjunto do Product Backlog escolhido para a Sprint atual. O time se compromete com esses itens.",
                  emoji: "📝",
                  detail: "Compromisso: Meta da Sprint (Sprint Goal)"
                },
                {
                  title: "Incremento",
                  desc: "Soma de todos os itens concluídos. Deve estar \"pronto para produção\" (atende à Definition of Done).",
                  emoji: "📦",
                  detail: "Compromisso: Definição de Pronto (DoD)"
                },
              ].map((art, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-xl p-5">
                  <p className="text-2xl mb-2">{art.emoji}</p>
                  <h5 className="font-bold text-foreground mb-2">{art.title}</h5>
                  <p className="text-sm text-muted-foreground mb-3">{art.desc}</p>
                  <div className="bg-primary/10 rounded-lg p-2">
                    <p className="text-xs text-primary font-medium">{art.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Eventos */}
            <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Eventos (Cerimônias)
            </h4>
            <div className="space-y-3 mb-8">
              {[
                { event: "Sprint", time: "1-4 semanas", desc: "Ciclo de trabalho com duração fixa (time-box). Tudo acontece dentro da Sprint. Não pode ser cancelada (exceto pelo PO se a Sprint Goal se tornar obsoleta).", color: "bg-blue-500/10 border-blue-500/30" },
                { event: "Sprint Planning", time: "Até 8h (Sprint de 1 mês)", desc: "Planeja \"o que\" e \"como\" será feito. PO apresenta itens prioritários, time estima e seleciona. Define a Sprint Goal.", color: "bg-emerald-500/10 border-emerald-500/30" },
                { event: "Daily Scrum", time: "Máx. 15 min", desc: "Reunião diária de sincronização dos Developers. NÃO é para cobrança! Formato sugerido: O que fiz? O que vou fazer? Tem impedimento? Sempre no mesmo horário e local.", color: "bg-amber-500/10 border-amber-500/30" },
                { event: "Sprint Review", time: "Até 4h", desc: "Apresentação do incremento aos stakeholders. Coleta de feedback. Demonstração do software funcionando. Atualização do Product Backlog se necessário.", color: "bg-purple-500/10 border-purple-500/30" },
                { event: "Sprint Retrospective", time: "Até 3h", desc: "Melhoria do PROCESSO (não do produto). O que foi bem? O que pode melhorar? Ações concretas para a próxima Sprint. Último evento da Sprint.", color: "bg-pink-500/10 border-pink-500/30" },
              ].map((ev, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className={`${ev.color} border rounded-xl p-4 flex flex-col md:flex-row items-start gap-4`}>
                  <div className="shrink-0 min-w-[140px]">
                    <p className="text-sm font-bold text-foreground">{ev.event}</p>
                    <p className="text-xs text-muted-foreground">⏱ {ev.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{ev.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Sprint Cycle Image */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border-2 border-primary/30 rounded-2xl overflow-hidden mb-8 shadow-lg shadow-primary/5">
              <div className="bg-primary/10 p-3">
                <h4 className="text-center font-bold text-foreground">🔄 Ciclo da Sprint — Fluxo Completo</h4>
              </div>
              <div className="bg-slate-800 p-2">
                <img src={scrumSprintImg} alt="Ciclo da Sprint mostrando Sprint Planning, Development, Daily Standup, Sprint Review, Sprint Retrospective e Incremento" className="w-full h-auto rounded-lg" />
              </div>
            </motion.div>

            {/* Definition of Done */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-3">✅ Definition of Done (DoD) — Definição de Pronto</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Acordo formal de qualidade que define quando um item do backlog está realmente "pronto". 
                Todo o Scrum Team deve respeitar. Se não atende ao DoD, NÃO pode ser apresentado na Review.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/30 rounded-xl p-4">
                  <h5 className="font-bold text-foreground mb-2 text-sm">Exemplo de DoD para um App</h5>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {["Código escrito e revisado (code review)", "Testes unitários passando (cobertura ≥ 80%)", "Testes de integração executados", "Deploy em ambiente de homologação", "Documentação da API atualizada", "Sem bugs críticos abertos", "Aprovado pelo QA"].map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-background/30 rounded-xl p-4">
                  <h5 className="font-bold text-foreground mb-2 text-sm">⚠️ O que NÃO é DoD</h5>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {["\"Funciona na minha máquina\"", "\"Está quase pronto\"", "\"Só falta testar\"", "\"O design está feito, falta integrar\""].map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5 line-through opacity-60">
                        <span className="text-destructive shrink-0">✗</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Burndown Chart */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-border rounded-2xl overflow-hidden mb-8">
              <button
                onClick={() => setShowBurndown(!showBurndown)}
                className="w-full bg-blue-500/10 p-4 flex items-center justify-between hover:bg-blue-500/15 transition-colors"
              >
                <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" /> Burndown Chart e Velocity
                </h4>
                {showBurndown ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
              </button>
              {showBurndown && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-foreground mb-3">📉 Burndown Chart</h5>
                      <p className="text-sm text-muted-foreground mb-3">Gráfico que mostra o trabalho restante ao longo da Sprint. O eixo X é o tempo, o eixo Y é a quantidade de trabalho (story points ou tarefas).</p>
                      {/* SVG Burndown simplificado */}
                      <svg viewBox="0 0 300 180" className="w-full rounded-xl bg-background/50 p-2">
                        {/* Eixos */}
                        <line x1="40" y1="10" x2="40" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.3" />
                        <line x1="40" y1="150" x2="290" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.3" />
                        {/* Linha ideal */}
                        <line x1="40" y1="20" x2="280" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                        {/* Linha real */}
                        <polyline fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5"
                          points="40,20 80,35 120,55 160,70 200,95 240,120 280,148" />
                        {/* Labels */}
                        <text x="150" y="172" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Dias da Sprint</text>
                        <text x="15" y="85" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8" transform="rotate(-90,15,85)">Story Points</text>
                        <text x="260" y="140" fill="hsl(var(--primary))" fontSize="8" opacity="0.5">Ideal</text>
                        <text x="250" y="115" fill="hsl(var(--primary))" fontSize="8">Real</text>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground mb-3">🏎️ Velocity (Velocidade)</h5>
                      <p className="text-sm text-muted-foreground mb-4">
                        Quantidade de story points entregues por Sprint. Usado para estimar quantas Sprints serão necessárias para completar o backlog.
                      </p>
                      <div className="space-y-3">
                        {[
                          { sprint: "Sprint 1", pts: 18, max: 30 },
                          { sprint: "Sprint 2", pts: 22, max: 30 },
                          { sprint: "Sprint 3", pts: 25, max: 30 },
                          { sprint: "Sprint 4", pts: 24, max: 30 },
                        ].map((s, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-muted-foreground">{s.sprint}</span>
                              <span className="text-primary font-bold">{s.pts} pts</span>
                            </div>
                            <div className="h-4 bg-secondary/50 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(s.pts / s.max) * 100}%` }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="h-full bg-primary/60 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        <strong>Velocity média:</strong> (18+22+25+24)/4 = <strong className="text-primary">22,25 pts/Sprint</strong>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* User Stories */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-4">📝 User Stories — Como Escrever</h4>
              <p className="text-sm text-muted-foreground mb-4">
                É a forma mais comum de descrever requisitos no Scrum. Segue o formato:
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-5 mb-4 text-center">
                <p className="text-lg font-mono text-primary">
                  Como <span className="text-foreground font-bold">[tipo de usuário]</span>,
                  eu quero <span className="text-foreground font-bold">[funcionalidade]</span>,
                  para <span className="text-foreground font-bold">[benefício/valor]</span>.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/30 rounded-xl p-4">
                  <h5 className="font-bold text-foreground mb-2 text-sm">Exemplos (App Universitário)</h5>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li>• <em>"Como <strong>aluno</strong>, quero <strong>consultar minhas notas</strong> para <strong>acompanhar meu desempenho</strong>."</em></li>
                    <li>• <em>"Como <strong>professor</strong>, quero <strong>enviar avisos</strong> para <strong>comunicar a turma rapidamente</strong>."</em></li>
                    <li>• <em>"Como <strong>coordenador</strong>, quero <strong>ver relatórios de frequência</strong> para <strong>identificar alunos em risco</strong>."</em></li>
                  </ul>
                </div>
                <div className="bg-secondary/30 rounded-xl p-4">
                  <h5 className="font-bold text-foreground mb-2 text-sm">Critérios INVEST</h5>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {[
                      { l: "I", w: "Independent", d: "Independente de outras stories" },
                      { l: "N", w: "Negotiable", d: "Negociável, não é contrato" },
                      { l: "V", w: "Valuable", d: "Valor para o usuário/negócio" },
                      { l: "E", w: "Estimable", d: "Estimável pelo time" },
                      { l: "S", w: "Small", d: "Pequena, cabe em 1 Sprint" },
                      { l: "T", w: "Testable", d: "Testável, com critérios claros" },
                    ].map((c, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">{c.l}</span>
                        <span><strong className="text-foreground">{c.w}:</strong> {c.d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Pontos que caem */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">🚨 Pontos que caem MUITO no ENADE sobre Scrum</h4>
              <ul className="space-y-2">
                {[
                  "A diferença entre PO (visão do produto) e Scrum Master (processo)",
                  "Daily NÃO é para cobrança — é sincronização dos Developers",
                  "O time de desenvolvimento é auto-organizado, decide o \"como\"",
                  "Sprint tem duração FIXA — não se estende",
                  "O PO é UMA pessoa, não um comitê",
                  "Incremento = software potencialmente entregável (atende ao DoD)",
                  "Retrospective é sobre o PROCESSO, Review é sobre o PRODUTO",
                  "Scrum Guide 2020: 'Scrum Team' = PO + SM + Developers (sem 'Dev Team')",
                  "Sprint Planning: PO define 'o quê', Developers definem 'como'"
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

        {/* ======================== */}
        {/* 3. Kanban */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">3. Kanban — Fluxo Contínuo</h3>
                <p className="text-sm text-muted-foreground">⏱ 15 minutos</p>
              </div>
            </div>

            {/* Origem */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mb-6">
              <h4 className="text-lg font-bold text-foreground mb-2">🏭 Origem do Kanban</h4>
              <p className="text-sm text-muted-foreground">
                O Kanban nasceu na <strong className="text-foreground">Toyota</strong> nos anos 1940-1950, como parte do 
                <strong className="text-foreground"> Sistema Toyota de Produção (Lean)</strong>. "Kanban" significa "cartão visual" em japonês.
                Foi adaptado para desenvolvimento de software por <strong className="text-foreground">David J. Anderson</strong> em 2010.
              </p>
            </motion.div>

            {/* Kanban Board Image */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border-2 border-emerald-500/30 rounded-2xl overflow-hidden mb-8 shadow-lg shadow-emerald-500/5">
              <div className="bg-emerald-500/10 p-3">
                <h4 className="text-center font-bold text-foreground">📊 Quadro Kanban com Limites de WIP</h4>
              </div>
              <div className="bg-slate-800 p-2">
                <img src={kanbanBoardImg} alt="Quadro Kanban com colunas Backlog, A Fazer, Em Progresso com WIP 3, Em Teste com WIP 2 e Concluído" className="w-full h-auto rounded-lg" />
              </div>
            </motion.div>

            {/* 6 Práticas */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-4">📋 As 6 Práticas Fundamentais do Kanban</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { num: 1, title: "Visualizar o fluxo de trabalho", desc: "Quadro com colunas representando cada etapa do processo" },
                  { num: 2, title: "Limitar o WIP", desc: "Definir limites máximos de itens em cada etapa para evitar gargalos" },
                  { num: 3, title: "Gerenciar o fluxo", desc: "Monitorar e otimizar o fluxo de trabalho continuamente" },
                  { num: 4, title: "Tornar as políticas explícitas", desc: "Critérios de transição entre colunas devem ser claros para todos" },
                  { num: 5, title: "Implementar feedback loops", desc: "Reuniões regulares para inspecionar e adaptar o processo" },
                  { num: 6, title: "Melhorar colaborativamente", desc: "Evolução incremental usando métodos científicos (experimentar, medir, ajustar)" },
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3 bg-secondary/30 rounded-xl p-4">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0">{p.num}</span>
                    <div>
                      <p className="font-bold text-foreground text-sm">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Conceitos centrais */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-3">
                  <p className="text-sm text-muted-foreground">
                    ✅ <strong>Com WIP = 3:</strong> No máximo 3 em progresso → foco e fluxo
                  </p>
                </div>
                <div className="bg-background/30 rounded-xl p-3">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Lei de Little:</strong> Lead Time = WIP / Throughput.
                    Reduzir WIP → reduzir Lead Time → entregar mais rápido.
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-2xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-4">📊 Sistema "Pull" (Puxar)</h4>
                <p className="text-muted-foreground mb-4">
                  No Kanban, <strong className="text-foreground">ninguém empurra trabalho</strong> para a próxima etapa.
                  Quem está na próxima etapa <strong className="text-primary">puxa</strong> quando tem capacidade.
                </p>
                <div className="space-y-3">
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-3">
                    <p className="text-sm text-muted-foreground">
                      ❌ <strong>Push:</strong> Dev termina e joga para QA → QA fica sobrecarregado
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3">
                    <p className="text-sm text-muted-foreground">
                      ✅ <strong>Pull:</strong> QA termina teste → puxa próximo item de "Pronto p/ Teste"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Métricas */}
            <h4 className="text-xl font-bold text-foreground mb-4">📏 Métricas do Kanban</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-xl p-5">
                <h5 className="font-bold text-foreground mb-2">📏 Lead Time</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Tempo total desde o <strong>pedido</strong> até a <strong>entrega</strong> ao cliente.
                  Inclui tempo na fila.
                </p>
                <div className="bg-emerald-500/10 rounded-lg p-2">
                  <p className="text-xs text-emerald-400">Exemplo: Pedido dia 1, entregue dia 10 → Lead Time = 10 dias</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-xl p-5">
                <h5 className="font-bold text-foreground mb-2">⏱ Cycle Time</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Tempo desde o <strong>início do trabalho</strong> até a <strong>conclusão</strong>.
                  Não conta o tempo na fila.
                </p>
                <div className="bg-emerald-500/10 rounded-lg p-2">
                  <p className="text-xs text-emerald-400">Exemplo: Começou dia 5, terminou dia 10 → Cycle Time = 5 dias</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-card/60 border border-border rounded-xl p-5">
                <h5 className="font-bold text-foreground mb-2">📊 Throughput</h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Número de itens <strong>entregues por unidade de tempo</strong>.
                  Mede a vazão do sistema.
                </p>
                <div className="bg-emerald-500/10 rounded-lg p-2">
                  <p className="text-xs text-emerald-400">Exemplo: 12 tarefas/semana → Throughput = 12/sem</p>
                </div>
              </motion.div>
            </div>

            {/* Diagrama de Fluxo Cumulativo */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-foreground mb-3">📈 CFD — Cumulative Flow Diagram</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Gráfico empilhado que mostra a quantidade de itens em cada estado ao longo do tempo. Permite identificar gargalos visualmente: se uma faixa "engorda", há acúmulo naquela etapa.
              </p>
              <svg viewBox="0 0 400 200" className="w-full rounded-xl bg-background/50">
                {/* Áreas empilhadas simplificadas */}
                <polygon points="30,180 100,170 200,150 300,120 380,90 380,180" fill="hsl(var(--primary))" opacity="0.15" />
                <polygon points="30,180 100,160 200,130 300,95 380,60 380,90 300,120 200,150 100,170 30,180" fill="hsl(142 76% 36%)" opacity="0.2" />
                <polygon points="30,180 100,150 200,110 300,70 380,35 380,60 300,95 200,130 100,160 30,180" fill="hsl(217 91% 60%)" opacity="0.2" />
                {/* Labels */}
                <text x="350" y="100" fill="hsl(var(--primary))" fontSize="9" opacity="0.8">Concluído</text>
                <text x="340" y="75" fill="hsl(142 76% 36%)" fontSize="9" opacity="0.8">Em Teste</text>
                <text x="330" y="50" fill="hsl(217 91% 60%)" fontSize="9" opacity="0.8">Em Progresso</text>
                <text x="200" y="195" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Tempo →</text>
              </svg>
            </motion.div>

            {/* Scrum x Kanban - tabela comparativa */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-border rounded-2xl overflow-hidden">
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
                      ["Papéis", "PO, SM, Developers (obrigatórios)", "Sem papéis obrigatórios"],
                      ["Compromisso", "Por Sprint (Sprint Goal)", "Foco na otimização do fluxo"],
                      ["Mudanças", "Apenas entre Sprints (idealmente)", "A qualquer momento"],
                      ["Métricas", "Velocity, Burndown Chart", "Lead Time, Cycle Time, Throughput"],
                      ["Planejamento", "Sprint Planning no início", "Sob demanda / contínuo"],
                      ["Backlog", "Product Backlog + Sprint Backlog", "Backlog único, priorizado"],
                      ["Limite de trabalho", "Velocity do time", "WIP por coluna"],
                      ["Ideal para", "Desenvolvimento de produto novo", "Suporte, manutenção, ops, DevOps"],
                      ["Cerimônias", "5 eventos definidos", "Nenhum obrigatório (reuniões sugeridas)"],
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

            {/* Scrumban */}
            <motion.div whileHover={{ scale: 1.01 }} className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 mt-8">
              <h4 className="text-lg font-bold text-foreground mb-3">🔀 Scrumban — O Modelo Híbrido</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Combinação de Scrum e Kanban, muito usada na prática. Mantém as Sprints e cerimônias do Scrum, 
                mas adiciona o <strong className="text-foreground">quadro visual e limites de WIP</strong> do Kanban.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/30 rounded-xl p-4">
                  <h5 className="font-bold text-foreground mb-2 text-sm">Herda do Scrum</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>✅ Sprints com duração fixa</li>
                    <li>✅ Sprint Planning e Retrospective</li>
                    <li>✅ Papéis definidos (PO, SM)</li>
                    <li>✅ Product Backlog priorizado</li>
                  </ul>
                </div>
                <div className="bg-background/30 rounded-xl p-4">
                  <h5 className="font-bold text-foreground mb-2 text-sm">Herda do Kanban</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>✅ Quadro visual com colunas</li>
                    <li>✅ Limites de WIP por coluna</li>
                    <li>✅ Métricas de fluxo (Lead/Cycle Time)</li>
                    <li>✅ Melhoria contínua do processo</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 bg-background/20 rounded-xl p-3">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-purple-400">💡 Dica ENADE:</strong> Quando a questão menciona "contrato rígido + necessidade de agilidade interna" 
                  ou "governo + feedback rápido", a resposta tende a ser o <strong className="text-foreground">modelo híbrido</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RevisaoTeoricaSection;
