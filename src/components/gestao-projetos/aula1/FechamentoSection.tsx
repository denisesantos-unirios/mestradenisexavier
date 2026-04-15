import { motion } from "framer-motion";
import { Award, Key, AlertTriangle, Lightbulb, BookOpen, MessageSquare, ExternalLink, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const FechamentoSection = () => {
  return (
    <section id="fechamento" className="py-20 px-6 relative overflow-hidden bg-secondary/20">
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Bloco 4 • 10 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fechamento & Dicas ENADE
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Macetes de prova, palavras-chave e mini-atividade final
            </p>
          </div>
        </ScrollReveal>

        {/* Palavras-chave */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/80 border border-border rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Key className="w-5 h-5 text-primary" /> Palavras-Chave para Reconhecer na Prova
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <h4 className="font-bold text-blue-400 mb-2">🏈 Scrum</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Sprint", "PO", "SM", "Daily", "Review", "Retrospective", "Backlog", "Incremento", "Auto-organização", "Time-box", "DoD", "Velocity", "Burndown", "Sprint Goal"].map((w, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-blue-500/10 text-xs text-blue-300">{w}</span>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                <h4 className="font-bold text-emerald-400 mb-2">📋 Kanban</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Fluxo contínuo", "Quadro", "Cartões", "WIP", "Lead Time", "Cycle Time", "Throughput", "Gargalo", "Pull system", "CFD", "Lei de Little"].map((w, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-emerald-500/10 text-xs text-emerald-300">{w}</span>
                  ))}
                </div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <h4 className="font-bold text-purple-400 mb-2">⚡ Ágil / Manifesto</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Iterativo", "Incremental", "Feedback", "Adaptação", "Valor de negócio", "MVP", "Manifesto", "Colaboração", "Inspeção", "Transparência", "User Story", "INVEST"].map((w, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-purple-500/10 text-xs text-purple-300">{w}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Armadilhas comuns */}
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4">
              <h4 className="font-bold text-foreground mb-2 text-sm">🚫 Palavras que tornam a alternativa FALSA</h4>
              <div className="flex flex-wrap gap-1.5">
                {["sempre", "nunca", "somente", "exclusivamente", "obrigatoriamente", "impossível", "proibido", "único", "todo", "nenhum"].map((w, i) => (
                  <span key={i} className="px-2 py-1 rounded bg-destructive/10 text-xs text-destructive line-through">{w}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">No contexto ágil, absolutismos são quase sempre incorretos.</p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Dicas de leitura */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> Estratégias de Leitura de Questão ENADE
            </h3>
            <div className="space-y-4">
              {[
                {
                  tip: "1. Leia primeiro o comando",
                  detail: "\"Assinale a alternativa correta\", \"incorreta\", \"mais adequada\"... Isso muda completamente a lógica de eliminação."
                },
                {
                  tip: "2. Identifique palavras absolutas",
                  detail: "\"Sempre\", \"nunca\", \"somente\", \"exclusivamente\" — geralmente tornam a alternativa FALSA. Ágil raramente é absoluto."
                },
                {
                  tip: "3. Em questões de cenário, classifique o problema",
                  detail: "Pergunte-se: \"Isso é problema de papel, evento, artefato ou escolha de método?\" Isso reduz as opções rapidamente."
                },
                {
                  tip: "4. Modelo híbrido costuma ser a resposta",
                  detail: "Quando o cenário mistura elementos tradicionais (contrato, governo) com necessidade de agilidade, busque a alternativa que combina ambos."
                },
                {
                  tip: "5. Elimine os absurdos primeiro",
                  detail: "\"Não usar nenhuma metodologia\" ou \"gerente controla tudo\" são quase sempre erradas no contexto ágil."
                },
                {
                  tip: "6. Review ≠ Retrospective",
                  detail: "Review = inspecionar o PRODUTO. Retrospective = inspecionar o PROCESSO. Trocar os dois é erro clássico de prova."
                },
                {
                  tip: "7. Lead Time ≥ Cycle Time",
                  detail: "Lead Time inclui fila + trabalho. Cycle Time é só o trabalho. Se a questão disser o contrário, está errada."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-foreground text-sm">{item.tip}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Mini-atividade final */}
        <ScrollReveal animation="scale" delay={0.3}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-primary/10 border border-primary/30 rounded-2xl p-8 mb-8">
            <div className="text-center">
              <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                ✍️ Mini-Atividade Final
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Cada aluno escreve em <strong className="text-foreground">1 frase</strong>:
              </p>
              <div className="bg-background/50 rounded-xl p-6 max-w-lg mx-auto">
                <p className="text-foreground font-medium italic text-lg">
                  "Quando escolher Scrum, quando escolher Kanban e quando pensar em um modelo híbrido?"
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                💡 Objetivo: Sintetizar toda a aula em uma resposta curta e assertiva — exatamente como o ENADE espera.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Resumo visual */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <motion.div whileHover={{ y: -5 }} className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
              <p className="text-3xl mb-2">🏈</p>
              <h4 className="font-bold text-foreground mb-1">Scrum</h4>
              <p className="text-sm text-muted-foreground">Produto novo, escopo variável, time dedicado, Sprints fixas, feedback rápido</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 text-center">
              <p className="text-3xl mb-2">📋</p>
              <h4 className="font-bold text-foreground mb-1">Kanban</h4>
              <p className="text-sm text-muted-foreground">Suporte, manutenção, DevOps, fluxo contínuo, demandas imprevisíveis</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5 text-center">
              <p className="text-3xl mb-2">🔀</p>
              <h4 className="font-bold text-foreground mb-1">Híbrido (Scrumban)</h4>
              <p className="text-sm text-muted-foreground">Contrato rígido + agilidade interna, governo, grandes corporações</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Referências */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <motion.div whileHover={{ scale: 1.01 }} className="bg-card/60 border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" /> Referências para Aprofundamento
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-bold text-foreground text-sm">📚 Leitura Essencial</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Scrum Guide 2020</strong> — Ken Schwaber & Jeff Sutherland (gratuito, 13 páginas)</li>
                  <li>• <strong>Kanban: Mudança Evolucionária</strong> — David J. Anderson</li>
                  <li>• <strong>Manifesto Ágil</strong> — agilemanifesto.org</li>
                  <li>• <strong>PMBOK 7ª Ed.</strong> — PMI (para comparar tradicional × ágil)</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-foreground text-sm">🎯 Para o ENADE</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Provas anteriores do ENADE de Sistemas de Informação (2017, 2021)</li>
                  <li>• Questões do POSCOMP sobre Engenharia de Software</li>
                  <li>• Simulados de certificação PSM I (Professional Scrum Master)</li>
                  <li>• Simulados de certificação KMP (Kanban Management Professional)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FechamentoSection;
