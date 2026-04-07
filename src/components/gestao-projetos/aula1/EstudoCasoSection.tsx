import { motion } from "framer-motion";
import { Briefcase, Users, HelpCircle, CheckCircle2, MessageSquare, Lightbulb, ArrowRight } from "lucide-react";
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
              Estudo de Caso Guiado
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Formato ENADE com discussão em grupo — Projeto App Universitário
            </p>
          </div>
        </ScrollReveal>

        {/* Enunciado */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 mb-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">📱 Caso: Projeto App Universitário</h3>
                <p className="text-sm text-muted-foreground">Atividade em grupos de 3-5 alunos • 25 minutos + 15 min discussão</p>
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

        {/* Atividades */}
        <div className="space-y-6">
          {/* Atividade 1 */}
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
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">b)</strong> Aponte situações em que o uso de <strong className="text-emerald-400">Kanban</strong> poderia complementar o time Scrum (ex: suporte, correção de bugs).</p>
                </div>
              </div>
              <button onClick={() => toggle("a1")} className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                <Lightbulb className="w-4 h-4" /> {showAnswers.a1 ? "Ocultar" : "Ver"} pontos de discussão
              </button>
              {showAnswers.a1 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Scrum é ideal porque:</strong> escopo mutável (direção muda de ideia), necessidade de feedback rápido, envolvimento da direção como stakeholders, entregas incrementais em 6 meses.</li>
                    <li><strong className="text-foreground">Kanban complementa:</strong> para gerenciar bugs reportados por usuários-piloto, suporte pós-release, tarefas de manutenção que não cabem no planejamento da Sprint (fluxo contínuo de demandas imprevisíveis).</li>
                  </ul>
                </motion.div>
              )}
            </motion.div>
          </ScrollReveal>

          {/* Atividade 2 */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">2</span>
                Aplicação do Scrum
              </h4>
              <div className="space-y-4 mb-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">a)</strong> Liste <strong className="text-primary">3 responsabilidades do Product Owner</strong> nesse projeto.</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">b)</strong> Descreva o <strong className="text-primary">Product Backlog inicial</strong> (nomes dos itens, em alto nível).</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">c)</strong> Proponha uma <strong className="text-primary">duração de Sprint</strong> e justifique.</p>
                </div>
              </div>
              <button onClick={() => toggle("a2")} className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                <Lightbulb className="w-4 h-4" /> {showAnswers.a2 ? "Ocultar" : "Ver"} pontos de discussão
              </button>
              {showAnswers.a2 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">PO Responsabilidades:</strong> (1) Definir e priorizar features com a direção; (2) Traduzir necessidades da instituição em itens do backlog; (3) Aceitar/rejeitar incrementos nas Sprint Reviews.
                    </div>
                    <div>
                      <strong className="text-foreground">Product Backlog sugerido:</strong> Login (autenticação), Consulta de notas, Consulta de faltas, Quadro de avisos, Notificações push, Chat com professor, Integração biblioteca, Perfil do aluno, Calendário acadêmico.
                    </div>
                    <div>
                      <strong className="text-foreground">Sprint de 2 semanas:</strong> Escopo incerto demanda feedback rápido. 2 semanas permite entregas frequentes, validações com a direção a cada ciclo e ajustes rápidos nas prioridades.
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </ScrollReveal>

          {/* Atividade 3 */}
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">3</span>
                Aplicação do Kanban
              </h4>
              <div className="space-y-4 mb-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">a)</strong> Desenhe um <strong className="text-emerald-400">quadro Kanban simples</strong> para gerenciar tarefas desse projeto (colunas).</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">b)</strong> Sugira <strong className="text-emerald-400">limites de WIP</strong> para "Em Progresso" e explique a razão.</p>
                </div>
              </div>
              <button onClick={() => toggle("a3")} className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                <Lightbulb className="w-4 h-4" /> {showAnswers.a3 ? "Ocultar" : "Ver"} pontos de discussão
              </button>
              {showAnswers.a3 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Quadro sugerido:</strong> Backlog → A Fazer → Em Progresso (WIP: 3) → Code Review → Em Teste (WIP: 2) → Concluído
                    </div>
                    <div>
                      <strong className="text-foreground">WIP = 3 em "Em Progresso":</strong> Com 4 devs, limitar a 3 garante que sempre há alguém disponível para code review, evita multitarefa e mantém o fluxo. Se todos pegam tarefas, ninguém revisa código.
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Dicas de discussão */}
        <ScrollReveal animation="scale" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mt-10"
          >
            <h4 className="text-lg font-bold text-foreground mb-3">💡 Ao Corrigir, Enfatize</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Justificativa do ágil:</strong> escopo mutável + feedback rápido + envolvimento da direção</li>
              <li>• <strong className="text-foreground">Papel do PO:</strong> priorização, interface com stakeholders, clareza do backlog</li>
              <li>• <strong className="text-foreground">Kanban para bugs e suporte:</strong> fluxo contínuo, entradas imprevisíveis não cabem em Sprint</li>
              <li>• <strong className="text-foreground">Scrumban na prática:</strong> muitas empresas combinam Sprint + quadro visual</li>
            </ul>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EstudoCasoSection;
