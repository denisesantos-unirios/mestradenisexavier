import { motion } from "framer-motion";
import { BookOpen, Layers, Target, AlertTriangle, BarChart3, CheckCircle2, TrendingUp, Network, Users, Shield, Clock, DollarSign, Briefcase, MessageSquare, ShoppingCart, Award, Eye, EyeOff, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState } from "react";

const PMBOKSection = () => {
  const [showEVM, setShowEVM] = useState(false);
  const [showWBS, setShowWBS] = useState(false);
  const [showRiscos, setShowRiscos] = useState(false);
  const [showCaminhoCritico, setShowCaminhoCritico] = useState(false);

  return (
    <section id="pmbok" className="py-20 px-6 relative overflow-hidden bg-secondary/20">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Bloco 1B • 40 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              PMBOK & Gestão Tradicional
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Áreas de conhecimento, grupos de processos, EAP, EVM e caminho crítico — conteúdo obrigatório ENADE
            </p>
          </div>
        </ScrollReveal>

        {/* ======================== */}
        {/* O que é o PMBOK */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-3">📘 O que é o PMBOK?</h3>
            <p className="text-muted-foreground mb-4">
              O <strong className="text-foreground">PMBOK (Project Management Body of Knowledge)</strong> é o guia de referência do 
              <strong className="text-foreground"> PMI (Project Management Institute)</strong>. Não é uma metodologia — é um 
              <strong className="text-blue-400"> conjunto de boas práticas</strong> reconhecidas internacionalmente.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background/30 rounded-xl p-4">
                <h4 className="font-bold text-foreground text-sm mb-2">PMBOK 6ª Edição (2017)</h4>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 10 áreas de conhecimento</li>
                  <li>• 5 grupos de processos</li>
                  <li>• 49 processos no total</li>
                  <li>• Abordagem preditiva (cascata)</li>
                </ul>
              </div>
              <div className="bg-background/30 rounded-xl p-4">
                <h4 className="font-bold text-foreground text-sm mb-2">PMBOK 7ª Edição (2021)</h4>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 8 domínios de desempenho</li>
                  <li>• Baseado em princípios (não processos)</li>
                  <li>• Abordagem adaptativa (ágil incluído)</li>
                  <li>• Foco em entrega de valor</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
              <p className="text-xs text-muted-foreground">
                <strong className="text-amber-400">⚠️ ENADE:</strong> A maioria das provas ainda usa a estrutura da 6ª edição (10 áreas + 5 grupos).
                Saiba ambas, mas domine a 6ª.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* ======================== */}
        {/* 5 Grupos de Processos */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.15}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Network className="w-6 h-6 text-blue-400" /> Os 5 Grupos de Processos
            </h3>
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              {[
                { name: "Iniciação", emoji: "🚀", desc: "Autoriza o projeto, define o escopo macro, identifica stakeholders", color: "bg-blue-500/10 border-blue-500/30", examples: "Termo de Abertura, Registro de Stakeholders" },
                { name: "Planejamento", emoji: "📋", desc: "Define escopo, cronograma, custos, qualidade, riscos, comunicação", color: "bg-emerald-500/10 border-emerald-500/30", examples: "Plano de Gerenciamento, EAP, Cronograma, Orçamento" },
                { name: "Execução", emoji: "⚡", desc: "Realiza o trabalho planejado, gerencia equipe e aquisições", color: "bg-amber-500/10 border-amber-500/30", examples: "Entregas, Dados de desempenho, Solicitações de mudança" },
                { name: "Monitoramento e Controle", emoji: "📊", desc: "Acompanha, revisa e regula o progresso; controla mudanças", color: "bg-purple-500/10 border-purple-500/30", examples: "EVM, Controle de qualidade, Gerenciar riscos" },
                { name: "Encerramento", emoji: "🏁", desc: "Finaliza atividades, aceita formalmente entregas, lições aprendidas", color: "bg-pink-500/10 border-pink-500/30", examples: "Aceite formal, Lições aprendidas, Liberação do time" },
              ].map((g, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className={`${g.color} border rounded-xl p-4 flex-1`}>
                  <div className="text-center mb-2">
                    <span className="text-2xl">{g.emoji}</span>
                    <h4 className="text-sm font-bold text-foreground mt-1">{g.name}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{g.desc}</p>
                  <div className="bg-background/30 rounded-lg p-2">
                    <p className="text-xs text-muted-foreground"><strong className="text-foreground">Saídas:</strong> {g.examples}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fluxo visual */}
            <div className="bg-card/60 border border-border rounded-xl p-4">
              <p className="text-sm text-muted-foreground text-center mb-3 font-medium">Fluxo dos Grupos de Processos</p>
              <div className="flex items-center justify-center gap-1 flex-wrap">
                {["🚀 Iniciação", "→", "📋 Planejamento", "⇄", "⚡ Execução", "⇄", "📊 Monit./Controle", "→", "🏁 Encerramento"].map((item, i) => (
                  <span key={i} className={`text-sm ${item.includes("→") || item.includes("⇄") ? "text-primary font-bold text-lg" : "bg-secondary/50 rounded-lg px-3 py-1.5 text-foreground font-medium"}`}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                ⚠️ Planejamento, Execução e Monitoramento acontecem <strong className="text-foreground">simultaneamente</strong> — não é sequencial!
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ======================== */}
        {/* 10 Áreas de Conhecimento */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-blue-400" /> As 10 Áreas de Conhecimento
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { icon: Layers, name: "Integração", desc: "Coordena todos os processos. Termo de Abertura, Controle Integrado de Mudanças, Encerramento.", color: "text-blue-400" },
                { icon: Target, name: "Escopo", desc: "O que está (e NÃO está) incluído. EAP, Linha de base do escopo, Verificação.", color: "text-emerald-400" },
                { icon: Clock, name: "Cronograma", desc: "Quando. Sequenciamento, estimativas, caminho crítico, Gantt.", color: "text-amber-400" },
                { icon: DollarSign, name: "Custos", desc: "Quanto. Estimativas, orçamento, EVM (CPI, SPI, EAC).", color: "text-red-400" },
                { icon: Award, name: "Qualidade", desc: "Padrões. Planejar, garantir e controlar a qualidade. PDCA.", color: "text-purple-400" },
                { icon: Users, name: "Recursos", desc: "Quem. Equipe, alocação, desenvolvimento, gestão de conflitos.", color: "text-cyan-400" },
                { icon: MessageSquare, name: "Comunicações", desc: "Como informar. Plano de comunicação, relatórios de desempenho.", color: "text-pink-400" },
                { icon: AlertTriangle, name: "Riscos", desc: "E se? Identificar, analisar (quali/quanti), planejar respostas.", color: "text-orange-400" },
                { icon: ShoppingCart, name: "Aquisições", desc: "Comprar/contratar. Edital, seleção, administração, encerramento.", color: "text-indigo-400" },
                { icon: Briefcase, name: "Partes Interessadas", desc: "Stakeholders. Identificar, planejar engajamento, gerenciar expectativas.", color: "text-teal-400" },
              ].map((area, i) => (
                <motion.div key={i} whileHover={{ y: -3 }} className="bg-card/60 border border-border rounded-xl p-4">
                  <area.icon className={`w-5 h-5 ${area.color} mb-2`} />
                  <h4 className="text-sm font-bold text-foreground mb-1">{area.name}</h4>
                  <p className="text-xs text-muted-foreground">{area.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 bg-primary/10 border border-primary/30 rounded-xl p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">🎯 Dica ENADE:</strong> As áreas mais cobradas são <strong className="text-foreground">Escopo (EAP)</strong>,
                <strong className="text-foreground"> Cronograma (Caminho Crítico)</strong>, <strong className="text-foreground">Custos (EVM)</strong> e
                <strong className="text-foreground"> Riscos</strong>. Domine essas 4 e você resolve 80% das questões.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ======================== */}
        {/* EAP / WBS */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.25}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-border rounded-2xl overflow-hidden mb-8">
            <button
              onClick={() => setShowWBS(!showWBS)}
              className="w-full bg-emerald-500/10 p-4 flex items-center justify-between hover:bg-emerald-500/15 transition-colors"
            >
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" /> EAP — Estrutura Analítica do Projeto (WBS)
              </h4>
              {showWBS ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
            </button>
            {showWBS && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-6">
                <p className="text-muted-foreground mb-4">
                  A <strong className="text-foreground">EAP (Estrutura Analítica do Projeto)</strong> é a decomposição hierárquica
                  do escopo total do trabalho. Cada nível inferior representa um detalhamento maior do trabalho.
                </p>

                {/* Diagrama EAP visual */}
                <div className="bg-background/50 rounded-xl p-6 mb-6 overflow-x-auto">
                  <p className="text-sm font-bold text-foreground text-center mb-4">Exemplo: EAP de um App Universitário</p>
                  <svg viewBox="0 0 600 280" className="w-full min-w-[500px]">
                    {/* Nível 0 */}
                    <rect x="220" y="10" width="160" height="35" rx="8" fill="hsl(var(--primary))" opacity="0.3" stroke="hsl(var(--primary))" strokeWidth="1" />
                    <text x="300" y="32" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">App Universitário</text>

                    {/* Nível 1 */}
                    {[
                      { x: 30, label: "1. Gerenciamento" },
                      { x: 170, label: "2. Requisitos" },
                      { x: 310, label: "3. Desenvolvimento" },
                      { x: 450, label: "4. Testes/Deploy" },
                    ].map((item, i) => (
                      <g key={i}>
                        <line x1="300" y1="45" x2={item.x + 65} y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" opacity="0.3" />
                        <rect x={item.x} y="70" width="130" height="30" rx="6" fill="hsl(217 91% 60%)" opacity="0.15" stroke="hsl(217 91% 60%)" strokeWidth="1" opacity2="0.4" />
                        <text x={item.x + 65} y="90" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="bold">{item.label}</text>
                      </g>
                    ))}

                    {/* Nível 2 - Gerenciamento */}
                    {["Plano do Projeto", "Reuniões", "Relatórios"].map((item, i) => (
                      <g key={`g${i}`}>
                        <line x1="95" y1="100" x2={20 + i * 50 + 25} y2="125" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.3" />
                        <rect x={20 + i * 50} y="125" width="48" height="40" rx="4" fill="hsl(142 76% 36%)" opacity="0.1" stroke="hsl(142 76% 36%)" strokeWidth="0.5" />
                        <text x={20 + i * 50 + 24} y="148" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5">{item}</text>
                      </g>
                    ))}

                    {/* Nível 2 - Requisitos */}
                    {["Entrevistas", "User Stories", "Protótipos"].map((item, i) => (
                      <g key={`r${i}`}>
                        <line x1="235" y1="100" x2={160 + i * 50 + 25} y2="125" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.3" />
                        <rect x={160 + i * 50} y="125" width="48" height="40" rx="4" fill="hsl(142 76% 36%)" opacity="0.1" stroke="hsl(142 76% 36%)" strokeWidth="0.5" />
                        <text x={160 + i * 50 + 24} y="148" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5">{item}</text>
                      </g>
                    ))}

                    {/* Nível 2 - Desenvolvimento */}
                    {["Frontend", "Backend", "Banco de Dados", "API"].map((item, i) => (
                      <g key={`d${i}`}>
                        <line x1="375" y1="100" x2={305 + i * 40 + 18} y2="125" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.3" />
                        <rect x={305 + i * 40} y="125" width="38" height="40" rx="4" fill="hsl(142 76% 36%)" opacity="0.1" stroke="hsl(142 76% 36%)" strokeWidth="0.5" />
                        <text x={305 + i * 40 + 19} y="148" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6">{item}</text>
                      </g>
                    ))}

                    {/* Nível 2 - Testes */}
                    {["Unitários", "Integração", "Deploy"].map((item, i) => (
                      <g key={`t${i}`}>
                        <line x1="515" y1="100" x2={460 + i * 50 + 25} y2="125" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.3" />
                        <rect x={460 + i * 50} y="125" width="48" height="40" rx="4" fill="hsl(142 76% 36%)" opacity="0.1" stroke="hsl(142 76% 36%)" strokeWidth="0.5" />
                        <text x={460 + i * 50 + 24} y="148" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="6.5">{item}</text>
                      </g>
                    ))}

                    {/* Legenda */}
                    <text x="300" y="200" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">
                      Nível 0: Projeto | Nível 1: Entregas Principais | Nível 2: Pacotes de Trabalho
                    </text>
                  </svg>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                    <h5 className="font-bold text-foreground mb-2 text-sm">✅ Regras da EAP</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Regra dos 100%: a soma dos filhos = 100% do pai</li>
                      <li>• Pacote de trabalho: nível mais baixo (pode ser estimado e atribuído)</li>
                      <li>• NÃO inclui tarefas/atividades — são derivadas depois</li>
                      <li>• Dicionário da EAP: detalha cada pacote (descrição, critérios, responsável)</li>
                    </ul>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                    <h5 className="font-bold text-foreground mb-2 text-sm">⚠️ Erros comuns no ENADE</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Confundir EAP com cronograma (EAP ≠ Gantt)</li>
                      <li>• EAP decompõe <strong>entregas</strong>, não atividades</li>
                      <li>• A EAP é orientada a <strong>produto</strong> (deliverables), não a processo</li>
                      <li>• Não definir a linha de base do escopo: EAP + Dicionário + Declaração de Escopo</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* ======================== */}
        {/* Caminho Crítico */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-border rounded-2xl overflow-hidden mb-8">
            <button
              onClick={() => setShowCaminhoCritico(!showCaminhoCritico)}
              className="w-full bg-amber-500/10 p-4 flex items-center justify-between hover:bg-amber-500/15 transition-colors"
            >
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" /> Método do Caminho Crítico (CPM/PERT)
              </h4>
              {showCaminhoCritico ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
            </button>
            {showCaminhoCritico && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-6">
                <p className="text-muted-foreground mb-4">
                  O <strong className="text-foreground">Caminho Crítico</strong> é a sequência mais longa de atividades que determina a
                  <strong className="text-foreground"> duração mínima do projeto</strong>. Qualquer atraso no caminho crítico atrasa o projeto inteiro.
                </p>

                {/* Exemplo visual do diagrama de rede */}
                <div className="bg-background/50 rounded-xl p-6 mb-6 overflow-x-auto">
                  <p className="text-sm font-bold text-foreground text-center mb-4">Exemplo: Diagrama de Rede</p>
                  <svg viewBox="0 0 550 180" className="w-full min-w-[450px]">
                    {/* Atividades como nós */}
                    {/* A: 3 dias */}
                    <rect x="20" y="60" width="70" height="45" rx="8" fill="hsl(var(--destructive))" opacity="0.15" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
                    <text x="55" y="78" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">A</text>
                    <text x="55" y="95" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">3 dias</text>

                    {/* B: 5 dias */}
                    <rect x="140" y="20" width="70" height="45" rx="8" fill="hsl(var(--destructive))" opacity="0.15" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
                    <text x="175" y="38" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">B</text>
                    <text x="175" y="55" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">5 dias</text>

                    {/* C: 2 dias */}
                    <rect x="140" y="100" width="70" height="45" rx="8" fill="hsl(217 91% 60%)" opacity="0.15" stroke="hsl(217 91% 60%)" strokeWidth="1" />
                    <text x="175" y="118" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">C</text>
                    <text x="175" y="135" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">2 dias</text>

                    {/* D: 4 dias */}
                    <rect x="260" y="20" width="70" height="45" rx="8" fill="hsl(var(--destructive))" opacity="0.15" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
                    <text x="295" y="38" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">D</text>
                    <text x="295" y="55" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">4 dias</text>

                    {/* E: 3 dias */}
                    <rect x="260" y="100" width="70" height="45" rx="8" fill="hsl(217 91% 60%)" opacity="0.15" stroke="hsl(217 91% 60%)" strokeWidth="1" />
                    <text x="295" y="118" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">E</text>
                    <text x="295" y="135" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">3 dias</text>

                    {/* F: 2 dias */}
                    <rect x="380" y="60" width="70" height="45" rx="8" fill="hsl(var(--destructive))" opacity="0.15" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
                    <text x="415" y="78" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">F</text>
                    <text x="415" y="95" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">2 dias</text>

                    {/* Setas */}
                    <line x1="90" y1="73" x2="140" y2="42" stroke="hsl(var(--destructive))" strokeWidth="1.5" markerEnd="url(#arrowRed)" />
                    <line x1="90" y1="90" x2="140" y2="115" stroke="hsl(217 91% 60%)" strokeWidth="1" markerEnd="url(#arrowBlue)" />
                    <line x1="210" y1="42" x2="260" y2="42" stroke="hsl(var(--destructive))" strokeWidth="1.5" markerEnd="url(#arrowRed)" />
                    <line x1="210" y1="122" x2="260" y2="122" stroke="hsl(217 91% 60%)" strokeWidth="1" markerEnd="url(#arrowBlue)" />
                    <line x1="330" y1="42" x2="380" y2="73" stroke="hsl(var(--destructive))" strokeWidth="1.5" markerEnd="url(#arrowRed)" />
                    <line x1="330" y1="122" x2="380" y2="90" stroke="hsl(217 91% 60%)" strokeWidth="1" markerEnd="url(#arrowBlue)" />

                    {/* Markers */}
                    <defs>
                      <marker id="arrowRed" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--destructive))" />
                      </marker>
                      <marker id="arrowBlue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(217 91% 60%)" />
                      </marker>
                    </defs>

                    {/* Resultado */}
                    <rect x="470" y="60" width="70" height="45" rx="8" fill="hsl(142 76% 36%)" opacity="0.15" stroke="hsl(142 76% 36%)" strokeWidth="1" />
                    <text x="505" y="78" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="bold">FIM</text>
                    <text x="505" y="95" textAnchor="middle" fill="hsl(142 76% 36%)" fontSize="9">14 dias</text>
                    <line x1="450" y1="82" x2="470" y2="82" stroke="hsl(142 76% 36%)" strokeWidth="1" markerEnd="url(#arrowGreen)" />
                    <defs>
                      <marker id="arrowGreen" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(142 76% 36%)" />
                      </marker>
                    </defs>

                    {/* Legenda */}
                    <text x="275" y="175" textAnchor="middle" fill="hsl(var(--destructive))" fontSize="9" fontWeight="bold">🔴 Caminho Crítico: A → B → D → F = 3+5+4+2 = 14 dias</text>
                  </svg>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background/30 rounded-xl p-4">
                    <h5 className="font-bold text-foreground mb-2 text-sm">Conceitos-chave</h5>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">Folga Total:</strong> Quanto uma atividade pode atrasar sem atrasar o projeto. No caminho crítico, folga = 0.</li>
                      <li><strong className="text-foreground">Folga Livre:</strong> Quanto pode atrasar sem atrasar a atividade seguinte.</li>
                      <li><strong className="text-foreground">PERT:</strong> Estimativa probabilística: (Otimista + 4×Mais Provável + Pessimista) / 6</li>
                      <li><strong className="text-foreground">CPM:</strong> Estimativa determinística com duração fixa por atividade.</li>
                    </ul>
                  </div>
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4">
                    <h5 className="font-bold text-foreground mb-2 text-sm">⚠️ Pegadinhas ENADE</h5>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li>• Caminho crítico ≠ caminho mais curto (é o MAIS LONGO!)</li>
                      <li>• Um projeto pode ter MAIS de um caminho crítico</li>
                      <li>• Atividades fora do caminho crítico TÊM folga</li>
                      <li>• Adicionar recursos no caminho crítico pode reduzir prazo (crashing)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* ======================== */}
        {/* EVM - Earned Value Management */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.35}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-border rounded-2xl overflow-hidden mb-8">
            <button
              onClick={() => setShowEVM(!showEVM)}
              className="w-full bg-red-500/10 p-4 flex items-center justify-between hover:bg-red-500/15 transition-colors"
            >
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-400" /> EVM — Gerenciamento de Valor Agregado
              </h4>
              {showEVM ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
            </button>
            {showEVM && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-6">
                <p className="text-muted-foreground mb-6">
                  O <strong className="text-foreground">EVM (Earned Value Management)</strong> é a técnica mais importante para
                  medir desempenho de custo e prazo. <strong className="text-red-400">Cai praticamente toda prova do ENADE</strong>.
                </p>

                {/* 3 Variáveis Base */}
                <h5 className="text-lg font-bold text-foreground mb-4">📐 As 3 Variáveis Base</h5>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { sigla: "PV", nome: "Planned Value", ptbr: "Valor Planejado", desc: "Quanto de trabalho DEVERIA ter sido feito até agora (em $)", formula: "= Orçamento × % Planejada", color: "bg-blue-500/10 border-blue-500/30 text-blue-400" },
                    { sigla: "EV", nome: "Earned Value", ptbr: "Valor Agregado", desc: "Quanto de trabalho FOI EFETIVAMENTE feito até agora (em $)", formula: "= Orçamento × % Concluída", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
                    { sigla: "AC", nome: "Actual Cost", ptbr: "Custo Real", desc: "Quanto FOI GASTO de fato até agora (em $)", formula: "= Soma dos gastos reais", color: "bg-red-500/10 border-red-500/30 text-red-400" },
                  ].map((v, i) => (
                    <motion.div key={i} whileHover={{ y: -3 }} className={`${v.color.split(" ").slice(0, 2).join(" ")} border ${v.color.split(" ")[2]} rounded-xl p-5`}>
                      <div className="text-center mb-2">
                        <span className={`text-2xl font-bold ${v.color.split(" ").pop()}`}>{v.sigla}</span>
                        <p className="text-xs text-muted-foreground">{v.nome}</p>
                        <p className="text-xs text-foreground font-medium">{v.ptbr}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{v.desc}</p>
                      <div className="bg-background/30 rounded-lg p-2 text-center">
                        <code className="text-xs text-foreground">{v.formula}</code>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Variações e Índices */}
                <h5 className="text-lg font-bold text-foreground mb-4">📊 Variações e Índices de Desempenho</h5>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="p-3 text-left text-foreground font-bold">Indicador</th>
                        <th className="p-3 text-center text-foreground font-bold">Fórmula</th>
                        <th className="p-3 text-center text-emerald-400 font-bold">&gt; 0 ou &gt; 1</th>
                        <th className="p-3 text-center text-destructive font-bold">&lt; 0 ou &lt; 1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "CV (Variação de Custo)", formula: "EV − AC", bom: "Abaixo do orçamento 💰", ruim: "Acima do orçamento ⚠️" },
                        { name: "SV (Variação de Prazo)", formula: "EV − PV", bom: "Adiantado ✅", ruim: "Atrasado ⚠️" },
                        { name: "CPI (Índice de Custo)", formula: "EV / AC", bom: "Cada R$1 gera mais que R$1 de valor", ruim: "Cada R$1 gera menos valor" },
                        { name: "SPI (Índice de Prazo)", formula: "EV / PV", bom: "Progresso maior que o planejado", ruim: "Progresso menor que o planejado" },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/30">
                          <td className="p-3 font-medium text-foreground">{row.name}</td>
                          <td className="p-3 text-center"><code className="bg-secondary/50 px-2 py-1 rounded text-primary font-bold">{row.formula}</code></td>
                          <td className="p-3 text-center text-xs text-emerald-400">{row.bom}</td>
                          <td className="p-3 text-center text-xs text-destructive">{row.ruim}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Projeções */}
                <h5 className="text-lg font-bold text-foreground mb-4">🔮 Projeções (Estimativas no Término)</h5>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { sigla: "BAC", nome: "Budget at Completion", desc: "Orçamento total planejado para o projeto", formula: "Definido no planejamento" },
                    { sigla: "EAC", nome: "Estimate at Completion", desc: "Quanto o projeto VAI CUSTAR no final (projeção)", formula: "BAC / CPI" },
                    { sigla: "ETC", nome: "Estimate to Complete", desc: "Quanto FALTA gastar para terminar", formula: "EAC − AC" },
                    { sigla: "VAC", nome: "Variance at Completion", desc: "Diferença entre orçado e projetado no final", formula: "BAC − EAC" },
                  ].map((p, i) => (
                    <div key={i} className="bg-secondary/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 font-bold text-sm">{p.sigla}</span>
                        <span className="text-xs text-muted-foreground">{p.nome}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{p.desc}</p>
                      <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{p.formula}</code>
                    </div>
                  ))}
                </div>

                {/* Exemplo numérico */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
                  <h5 className="font-bold text-foreground mb-3 text-sm flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400" /> Exemplo Numérico (tipo ENADE)
                  </h5>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>Um projeto tem <strong className="text-foreground">BAC = R$ 100.000</strong>. No mês 6:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• PV = R$ 50.000 (deveria ter feito 50%)</li>
                      <li>• EV = R$ 40.000 (fez 40% de fato)</li>
                      <li>• AC = R$ 60.000 (gastou R$ 60k)</li>
                    </ul>
                    <div className="mt-3 bg-background/30 rounded-lg p-3 space-y-1.5">
                      <p><strong className="text-foreground">CV</strong> = 40.000 − 60.000 = <strong className="text-destructive">−R$ 20.000</strong> (acima do orçamento)</p>
                      <p><strong className="text-foreground">SV</strong> = 40.000 − 50.000 = <strong className="text-destructive">−R$ 10.000</strong> (atrasado)</p>
                      <p><strong className="text-foreground">CPI</strong> = 40.000 / 60.000 = <strong className="text-destructive">0,67</strong> (cada R$1 gera apenas R$0,67 de valor)</p>
                      <p><strong className="text-foreground">SPI</strong> = 40.000 / 50.000 = <strong className="text-destructive">0,80</strong> (80% do progresso esperado)</p>
                      <p><strong className="text-foreground">EAC</strong> = 100.000 / 0,67 = <strong className="text-destructive">R$ 149.254</strong> (projeto vai custar 49% a mais!)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* ======================== */}
        {/* Gerenciamento de Riscos */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-border rounded-2xl overflow-hidden mb-8">
            <button
              onClick={() => setShowRiscos(!showRiscos)}
              className="w-full bg-orange-500/10 p-4 flex items-center justify-between hover:bg-orange-500/15 transition-colors"
            >
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-400" /> Gerenciamento de Riscos
              </h4>
              {showRiscos ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
            </button>
            {showRiscos && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-6">
                <p className="text-muted-foreground mb-6">
                  <strong className="text-foreground">Risco</strong> = evento incerto que, se ocorrer, afeta positivamente
                  (<strong className="text-emerald-400">oportunidade</strong>) ou negativamente
                  (<strong className="text-destructive">ameaça</strong>) o projeto. Risco ≠ problema.
                </p>

                {/* Processo de riscos */}
                <h5 className="font-bold text-foreground mb-3">📋 Processo de Gerenciamento de Riscos</h5>
                <div className="grid md:grid-cols-3 gap-3 mb-6">
                  {[
                    { step: "1. Identificar", desc: "Brainstorming, checklists, análise SWOT, entrevistas com especialistas", icon: "🔍" },
                    { step: "2. Analisar (Quali)", desc: "Probabilidade × Impacto → Matriz de riscos (baixo/médio/alto/crítico)", icon: "📊" },
                    { step: "3. Analisar (Quanti)", desc: "Simulação Monte Carlo, Árvore de Decisão, Análise de Sensibilidade", icon: "🔢" },
                    { step: "4. Planejar Respostas", desc: "Definir estratégias para cada risco identificado", icon: "📋" },
                    { step: "5. Implementar", desc: "Executar os planos de resposta quando o risco se materializa", icon: "⚡" },
                    { step: "6. Monitorar", desc: "Acompanhar riscos residuais, identificar novos, avaliar eficácia", icon: "👁️" },
                  ].map((s, i) => (
                    <div key={i} className="bg-secondary/30 rounded-xl p-4">
                      <p className="text-xl mb-1">{s.icon}</p>
                      <p className="text-sm font-bold text-foreground mb-1">{s.step}</p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Estratégias de resposta */}
                <h5 className="font-bold text-foreground mb-3">🎯 Estratégias de Resposta a Riscos</h5>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4">
                    <h6 className="font-bold text-foreground mb-2 text-sm">Para Ameaças (riscos negativos)</h6>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">Prevenir/Eliminar:</strong> Eliminar a causa (mudar escopo, tecnologia)</li>
                      <li><strong className="text-foreground">Transferir:</strong> Passar para terceiros (seguros, contratos)</li>
                      <li><strong className="text-foreground">Mitigar:</strong> Reduzir probabilidade ou impacto</li>
                      <li><strong className="text-foreground">Aceitar:</strong> Passiva (nada fazer) ou ativa (reserva de contingência)</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                    <h6 className="font-bold text-foreground mb-2 text-sm">Para Oportunidades (riscos positivos)</h6>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">Explorar:</strong> Garantir que a oportunidade aconteça</li>
                      <li><strong className="text-foreground">Melhorar:</strong> Aumentar probabilidade ou impacto</li>
                      <li><strong className="text-foreground">Compartilhar:</strong> Envolver terceiro mais capaz</li>
                      <li><strong className="text-foreground">Aceitar:</strong> Aproveitar se acontecer naturalmente</li>
                    </ul>
                  </div>
                </div>

                {/* Matriz de Probabilidade x Impacto */}
                <div className="bg-background/50 rounded-xl p-5">
                  <h6 className="font-bold text-foreground mb-3 text-sm text-center">Matriz de Probabilidade × Impacto</h6>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="p-2 text-left text-foreground">Prob. \ Impacto</th>
                          <th className="p-2 text-center text-foreground">Muito Baixo</th>
                          <th className="p-2 text-center text-foreground">Baixo</th>
                          <th className="p-2 text-center text-foreground">Moderado</th>
                          <th className="p-2 text-center text-foreground">Alto</th>
                          <th className="p-2 text-center text-foreground">Muito Alto</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { prob: "Muito Alta (90%)", cells: ["Moderado", "Alto", "Alto", "Crítico", "Crítico"], colors: ["text-amber-400", "text-orange-400", "text-orange-400", "text-destructive", "text-destructive"] },
                          { prob: "Alta (70%)", cells: ["Baixo", "Moderado", "Alto", "Alto", "Crítico"], colors: ["text-emerald-400", "text-amber-400", "text-orange-400", "text-orange-400", "text-destructive"] },
                          { prob: "Média (50%)", cells: ["Baixo", "Baixo", "Moderado", "Alto", "Alto"], colors: ["text-emerald-400", "text-emerald-400", "text-amber-400", "text-orange-400", "text-orange-400"] },
                          { prob: "Baixa (30%)", cells: ["Baixo", "Baixo", "Baixo", "Moderado", "Alto"], colors: ["text-emerald-400", "text-emerald-400", "text-emerald-400", "text-amber-400", "text-orange-400"] },
                          { prob: "Muito Baixa (10%)", cells: ["Baixo", "Baixo", "Baixo", "Baixo", "Moderado"], colors: ["text-emerald-400", "text-emerald-400", "text-emerald-400", "text-emerald-400", "text-amber-400"] },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-border/30">
                            <td className="p-2 font-medium text-foreground">{row.prob}</td>
                            {row.cells.map((cell, j) => (
                              <td key={j} className={`p-2 text-center font-medium ${row.colors[j]}`}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* ======================== */}
        {/* Stakeholders */}
        {/* ======================== */}
        <ScrollReveal animation="fadeUp" delay={0.45}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-400" /> Gerenciamento de Partes Interessadas (Stakeholders)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">Stakeholder</strong> = qualquer pessoa ou organização que pode afetar ou ser afetada pelo projeto.
            </p>

            {/* Matriz Poder x Interesse */}
            <div className="bg-background/50 rounded-xl p-5 mb-4">
              <p className="text-sm font-bold text-foreground text-center mb-4">Matriz Poder × Interesse</p>
              <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
                  <p className="text-xs font-bold text-amber-400 mb-1">Alto Poder + Baixo Interesse</p>
                  <p className="text-xs text-muted-foreground">MANTER SATISFEITO</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">Ex: Diretoria, Patrocinador</p>
                </div>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-center">
                  <p className="text-xs font-bold text-destructive mb-1">Alto Poder + Alto Interesse</p>
                  <p className="text-xs text-muted-foreground">GERENCIAR DE PERTO</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">Ex: PO, Cliente principal</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 text-center">
                  <p className="text-xs font-bold text-emerald-400 mb-1">Baixo Poder + Baixo Interesse</p>
                  <p className="text-xs text-muted-foreground">MONITORAR</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">Ex: Outros departamentos</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
                  <p className="text-xs font-bold text-blue-400 mb-1">Baixo Poder + Alto Interesse</p>
                  <p className="text-xs text-muted-foreground">MANTER INFORMADO</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">Ex: Usuários, Equipe de suporte</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Palavras-chave PMBOK para ENADE */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-primary/10 border border-primary/30 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-foreground mb-3">🎯 Palavras-chave PMBOK no ENADE</h4>
            <div className="flex flex-wrap gap-2">
              {["EAP/WBS", "Caminho Crítico", "Folga", "PERT/CPM", "EVM", "CPI", "SPI", "BAC", "EAC", "Termo de Abertura", "Linha de base", "Controle Integrado de Mudanças", "Registro de Riscos", "Matriz Prob×Impacto", "Stakeholders", "Lições aprendidas", "DoD", "PMI", "Grupos de Processos", "Áreas de Conhecimento"].map((word, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  {word}
                </span>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PMBOKSection;
