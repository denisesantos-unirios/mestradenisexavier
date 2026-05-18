import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, HelpCircle, ListChecks, Ruler } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const PreparacaoSection = () => (
  <section id="preparacao" className="py-20 px-6 bg-gradient-to-b from-background to-violet-500/5">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 text-xs font-bold mb-3">
            SEÇÃO 2.4
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preparação do Teste — <span className="text-violet-500">DECIDE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O planejamento do experimento segue o framework DECIDE, organizado em quatro subseções do relatório.
          </p>
        </div>
      </ScrollReveal>

      {/* 2.4.1 Objetivo */}
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <Card className="bg-card/50 border-violet-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-500/10">
                <Target className="w-6 h-6 text-violet-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">2.4.1 Objetivo</h3>
                <p className="text-muted-foreground mb-4">
                  Defina <strong>o que se quer avaliar</strong> e <strong>por quê</strong>. O objetivo orienta todas
                  as decisões metodológicas posteriores.
                </p>
                <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/20">
                  <p className="text-sm font-bold text-violet-500 mb-2">📌 Exemplo — Estudo de Caso: App de Doação de Alimentos</p>
                  <p className="text-sm text-muted-foreground italic">
                    "Avaliar a <strong>usabilidade</strong> e a <strong>comunicabilidade</strong> do fluxo de cadastro
                    de doação no aplicativo <em>FoodShare</em>, verificando se doadores iniciantes (sem treinamento
                    prévio) conseguem publicar uma doação em até 3 minutos com no máximo 1 erro de interação."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 2.4.2 Questionamentos */}
      <ScrollReveal animation="fadeUp" delay={0.2}>
        <Card className="bg-card/50 border-violet-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-fuchsia-500/10">
                <HelpCircle className="w-6 h-6 text-fuchsia-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">2.4.2 Questionamentos</h3>
                <p className="text-muted-foreground mb-4">
                  Liste as <strong>perguntas específicas</strong> que o experimento responderá. Devem ser observáveis
                  e mensuráveis.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "O usuário encontra o botão 'Doar' na tela inicial sem auxílio?",
                    "Os ícones do formulário são compreendidos corretamente?",
                    "O usuário entende a diferença entre 'doação pública' e 'doação direcionada'?",
                    "As mensagens de erro orientam à correção?",
                    "Em quantos passos o usuário conclui a publicação?",
                    "O usuário se sente seguro ao informar endereço de retirada?",
                  ].map((q, i) => (
                    <div key={i} className="flex gap-2 p-3 rounded-lg bg-background/50 border border-border">
                      <span className="text-fuchsia-500 font-bold text-sm">Q{i + 1}.</span>
                      <span className="text-sm text-muted-foreground">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 2.4.3 Tarefas */}
      <ScrollReveal animation="fadeUp" delay={0.3}>
        <Card className="bg-card/50 border-violet-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-pink-500/10">
                <ListChecks className="w-6 h-6 text-pink-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">2.4.3 Tarefas</h3>
                <p className="text-muted-foreground mb-4">
                  Tarefas <strong>realistas, representativas e mensuráveis</strong>, escritas em linguagem de usuário
                  (sem revelar o caminho da interface).
                </p>
                <div className="space-y-3">
                  {[
                    { n: "T1", t: "Você acabou de chegar em casa e percebeu que sobraram 4 marmitas do almoço. Cadastre uma doação dessas marmitas no app para retirada hoje à noite." },
                    { n: "T2", t: "Você quer doar especificamente para a ONG 'Pão da Rua'. Configure a doação para que apenas essa ONG receba a notificação." },
                    { n: "T3", t: "Após publicar, você percebeu um erro no endereço. Corrija a doação já publicada." },
                    { n: "T4", t: "Encontre uma doação publicada anteriormente que ainda não foi retirada e cancele-a." },
                    { n: "T5", t: "Verifique o histórico de doações concluídas no último mês." },
                  ].map((task, i) => (
                    <motion.div key={i} whileHover={{ x: 4 }} className="flex gap-3 p-4 rounded-xl bg-background/50 border border-border">
                      <span className="px-2 py-1 rounded-md bg-pink-500/20 text-pink-500 font-bold text-xs h-fit">{task.n}</span>
                      <p className="text-sm text-muted-foreground">{task.t}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 2.4.4 Medição */}
      <ScrollReveal animation="fadeUp" delay={0.4}>
        <Card className="bg-card/50 border-violet-500/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Ruler className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">2.4.4 Medição</h3>
                <p className="text-muted-foreground mb-4">
                  Quais <strong>métricas e instrumentos</strong> serão usados para gerar evidências sobre os
                  questionamentos.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-orange-500">Categoria</th>
                        <th className="text-left p-3 text-orange-500">Métrica</th>
                        <th className="text-left p-3 text-orange-500">Instrumento</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {[
                        ["Eficácia", "Taxa de conclusão da tarefa (%)", "Observação direta + log"],
                        ["Eficiência", "Tempo de execução (segundos)", "Cronômetro + filmagem"],
                        ["Erros", "Nº de erros / tarefa", "Planilha de observação"],
                        ["Comunicabilidade", "Etiquetagem de rupturas (Cadê? Por quê? Não, obrigado!)", "Análise de vídeo"],
                        ["Satisfação", "Escala SUS (10 itens, 0–100)", "Questionário pós-teste"],
                        ["Percepção", "Comentários espontâneos", "Protocolo Think-Aloud"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-orange-500/5">
                          <td className="p-3 font-medium text-foreground">{row[0]}</td>
                          <td className="p-3">{row[1]}</td>
                          <td className="p-3">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  </section>
);

export default PreparacaoSection;
