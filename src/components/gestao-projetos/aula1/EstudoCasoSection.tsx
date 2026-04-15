import { motion } from "framer-motion";
import { Briefcase, Users, HelpCircle, CheckCircle2, MessageSquare, Lightbulb, ArrowRight, Target, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState } from "react";

const EstudoCasoSection = () => {
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setShowAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="estudo-caso" className="py-20 px-6 relative overflow-hidden bg-secondary/20">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-medium">Bloco 2 • 40 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Estudos de Caso Guiados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Formato ENADE com discussão em grupo — cenários reais de mercado
            </p>
          </div>
        </ScrollReveal>

        {/* ========== CASO 1: App Universitário ========== */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">📱 Caso 1: Projeto App Universitário</h3>
                <p className="text-sm text-muted-foreground">Atividade em grupos de 3-5 alunos • 20 minutos + 10 min discussão</p>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-xl p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                Uma instituição de ensino quer desenvolver um <strong className="text-foreground">aplicativo móvel</strong> para
                os alunos acompanharem notas, faltas e avisos. O prazo de lançamento é de <strong className="text-foreground">6 meses</strong>,
                mas o escopo ainda é pouco claro. Sabe-se apenas que:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />O app deve permitir <strong className="text-foreground">login, consulta de notas e avisos</strong></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />Funcionalidades como <strong className="text-foreground">chat com professor e integração com biblioteca</strong> ainda estão em discussão</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />A direção <strong className="text-foreground">muda de ideia com frequência</strong>; novas funcionalidades surgem a cada reunião</li>
              </ul>
            </div>

            <div className="bg-secondary/50 rounded-xl p-6">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Equipe do Projeto
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { role: "Product Owner", count: "1" },
                  { role: "Scrum Master", count: "1" },
                  { role: "Front-end Dev", count: "1" },
                  { role: "Back-end Dev", count: "1" },
                  { role: "Mobile Dev", count: "1" },
                  { role: "QA/Tester", count: "1" },
                ].map((m, i) => (
                  <div key={i} className="bg-background/50 rounded-lg p-3 text-center">
                    <p className="text-sm font-bold text-foreground">{m.count}x {m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Atividades do Caso 1 */}
        <div className="space-y-6 mb-16">
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</span>
                Escolha do Método
              </h4>
              <div className="space-y-4 mb-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">a)</strong> Justifique por que usar <strong className="text-primary">Scrum</strong> é mais adequado que um modelo tradicional neste cenário.</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">b)</strong> Aponte situações em que o uso de <strong className="text-emerald-400">Kanban</strong> poderia complementar o time Scrum.</p>
                </div>
              </div>
              <button onClick={() => toggle("a1")} className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                <Lightbulb className="w-4 h-4" /> {showAnswers.a1 ? "Ocultar" : "Ver"} pontos de discussão
              </button>
              {showAnswers.a1 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Scrum é ideal porque:</strong> escopo mutável (direção muda de ideia), necessidade de feedback rápido, envolvimento da direção como stakeholders, entregas incrementais em 6 meses (~12 Sprints de 2 semanas).</li>
                    <li><strong className="text-foreground">Kanban complementa:</strong> para gerenciar bugs reportados por usuários-piloto, suporte pós-release, tarefas de manutenção que não cabem no planejamento da Sprint.</li>
                  </ul>
                </motion.div>
              )}
            </motion.div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.3}>
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">2</span>
                Aplicação do Scrum — Monte a Estrutura
              </h4>
              <div className="space-y-4 mb-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">a)</strong> Liste <strong className="text-primary">3 responsabilidades do Product Owner</strong> nesse projeto.</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">b)</strong> Escreva <strong className="text-primary">5 User Stories</strong> para o Product Backlog inicial usando o formato "Como... quero... para...".</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">c)</strong> Proponha uma <strong className="text-primary">duração de Sprint</strong>, uma <strong className="text-primary">Definition of Done</strong> e justifique.</p>
                </div>
              </div>
              <button onClick={() => toggle("a2")} className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                <Lightbulb className="w-4 h-4" /> {showAnswers.a2 ? "Ocultar" : "Ver"} pontos de discussão
              </button>
              {showAnswers.a2 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">PO Responsabilidades:</strong> (1) Definir e priorizar features com a direção; (2) Traduzir necessidades da instituição em User Stories; (3) Aceitar/rejeitar incrementos nas Sprint Reviews; (4) Gerenciar expectativas dos stakeholders.
                    </div>
                    <div>
                      <strong className="text-foreground">User Stories sugeridas:</strong>
                      <ul className="mt-1 space-y-1 text-xs">
                        <li>• "Como <strong>aluno</strong>, quero <strong>fazer login com matrícula</strong> para <strong>acessar minhas informações</strong>."</li>
                        <li>• "Como <strong>aluno</strong>, quero <strong>consultar minhas notas por disciplina</strong> para <strong>acompanhar meu desempenho</strong>."</li>
                        <li>• "Como <strong>aluno</strong>, quero <strong>ver minha frequência</strong> para <strong>evitar reprovação por falta</strong>."</li>
                        <li>• "Como <strong>coordenador</strong>, quero <strong>enviar avisos para turmas</strong> para <strong>comunicar rapidamente</strong>."</li>
                        <li>• "Como <strong>aluno</strong>, quero <strong>receber notificações push</strong> para <strong>não perder avisos importantes</strong>."</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-foreground">Sprint de 2 semanas + DoD:</strong> Escopo incerto → feedback rápido a cada 2 semanas. DoD: código revisado, testes automatizados passando, deploy em homologação, sem bugs críticos, documentação da API atualizada.
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.4}>
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">3</span>
                Aplicação do Kanban — Monte o Quadro
              </h4>
              <div className="space-y-4 mb-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">a)</strong> Desenhe um <strong className="text-emerald-400">quadro Kanban</strong> com pelo menos 5 colunas e sugira limites de WIP.</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">b)</strong> Calcule: se o time tem <strong className="text-emerald-400">Lead Time médio de 8 dias</strong> e <strong className="text-emerald-400">Cycle Time de 3 dias</strong>, quanto tempo as tarefas ficam na fila? O que fazer?</p>
                </div>
              </div>
              <button onClick={() => toggle("a3")} className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                <Lightbulb className="w-4 h-4" /> {showAnswers.a3 ? "Ocultar" : "Ver"} pontos de discussão
              </button>
              {showAnswers.a3 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Quadro sugerido:</strong> Backlog → A Fazer → Em Progresso (WIP: 3) → Code Review (WIP: 2) → Em Teste (WIP: 2) → Concluído
                    </div>
                    <div>
                      <strong className="text-foreground">Cálculo:</strong> Tempo na fila = Lead Time - Cycle Time = 8 - 3 = <strong className="text-primary">5 dias na fila</strong>. Isso é muito! Ações: priorizar melhor o backlog, reduzir WIP para aumentar fluxo, analisar gargalos no CFD.
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </ScrollReveal>
        </div>

        {/* ========== CASO 2: E-commerce ========== */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-8 mb-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">🛒 Caso 2: E-commerce em Crise</h3>
                <p className="text-sm text-muted-foreground">Discussão em duplas • 10 minutos</p>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-xl p-6 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                Uma loja virtual que vende eletrônicos está com problemas sérios: o sistema cai toda Black Friday, 
                os bugs levam semanas para serem corrigidos, e o time de 8 desenvolvedores não tem nenhum processo definido.
                O CTO decidiu adotar Scrum, mas após 3 Sprints os resultados não melhoraram. O PO reclama que o backlog 
                nunca está atualizado, a Daily vira reunião de 40 minutos e o time diz que não tem tempo para a Retrospective.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">a)</strong> Identifique <strong className="text-destructive">pelo menos 4 problemas</strong> na implementação do Scrum nesse cenário.</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">b)</strong> Proponha <strong className="text-primary">ações corretivas</strong> para cada problema identificado.</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">c)</strong> Para os bugs urgentes da Black Friday, <strong className="text-emerald-400">qual abordagem seria mais adequada: Scrum ou Kanban?</strong> Justifique.</p>
              </div>
            </div>

            <button onClick={() => toggle("caso2")} className="mt-4 text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
              <Lightbulb className="w-4 h-4" /> {showAnswers.caso2 ? "Ocultar" : "Ver"} pontos de discussão
            </button>
            {showAnswers.caso2 && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Problemas:</strong> (1) PO não mantém backlog atualizado → falta de priorização; (2) Daily de 40min → viola time-box de 15min, provavelmente vira "reunião de status" e não sincronização; (3) Pular Retrospective → perde oportunidade de melhoria contínua; (4) Time de 8 devs pode ser grande demais para 1 Scrum Team (ideal 3-9).
                  </div>
                  <div>
                    <strong className="text-foreground">Ações:</strong> (1) PO dedicar tempo para refinamento do backlog (Backlog Refinement); (2) SM facilitar Daily com timer de 15min, focar nas 3 perguntas; (3) Retro é obrigatória — sem ela, não há melhoria; (4) Considerar dividir em 2 squads.
                  </div>
                  <div>
                    <strong className="text-foreground">Bugs Black Friday:</strong> Kanban! Bugs urgentes são demandas imprevisíveis e contínuas — fluxo contínuo é mais adequado que Sprints fixas. Criar um quadro Kanban específico para "War Room" com WIP baixo e prioridade por severidade.
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* Dicas de discussão */}
        <ScrollReveal animation="scale" delay={0.5}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mt-10">
            <h4 className="text-lg font-bold text-foreground mb-3">💡 Ao Corrigir os Casos, Enfatize</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Justificativa do ágil:</strong> escopo mutável + feedback rápido + envolvimento do cliente</li>
              <li>• <strong className="text-foreground">Papel do PO:</strong> priorização, interface com stakeholders, clareza do backlog, aceitar/rejeitar incremento</li>
              <li>• <strong className="text-foreground">Kanban para bugs e suporte:</strong> fluxo contínuo, entradas imprevisíveis não cabem em Sprint</li>
              <li>• <strong className="text-foreground">Scrumban na prática:</strong> muitas empresas combinam Sprint + quadro visual + WIP</li>
              <li>• <strong className="text-foreground">Erros comuns no Scrum:</strong> Daily como cobrança, pular Retro, PO ausente, time grande demais</li>
              <li>• <strong className="text-foreground">Métricas importam:</strong> Lead Time, Cycle Time, Velocity — cobradas no ENADE</li>
            </ul>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EstudoCasoSection;
