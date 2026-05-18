import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Database, FileSpreadsheet, LineChart, Award, Presentation } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const TesteValidacaoSection = () => (
  <section id="teste-validacao" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold mb-3">
            SEÇÃO 4
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Teste e Validação da <span className="text-cyan-500">Interface</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Execução do experimento, coleta, análise e apresentação dos resultados. Cada subseção é um
            item obrigatório do relatório.
          </p>
        </div>
      </ScrollReveal>

      {/* 4.1 Recursos: Filmagem */}
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <Card className="bg-card/50 border-cyan-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10"><Video className="w-6 h-6 text-cyan-500" /></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">4.1 Recursos: Filmagem</h3>
                <p className="text-muted-foreground mb-4">
                  Infraestrutura para registrar a sessão sem perder evidências de comportamento.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { t: "Câmera frontal", d: "Captura expressões faciais do participante (reação a erros)." },
                    { t: "Captura de tela", d: "OBS Studio / QuickTime registrando cliques e fluxo." },
                    { t: "Áudio externo", d: "Microfone lapela para Think-Aloud sem ruído." },
                  ].map((r, i) => (
                    <div key={i} className="p-4 rounded-xl bg-background/50 border border-border">
                      <h4 className="font-bold text-cyan-500 mb-1 text-sm">{r.t}</h4>
                      <p className="text-xs text-muted-foreground">{r.d}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-muted-foreground">
                  ⚠️ <strong>Ética:</strong> filmagem só após assinatura do TCLE. Garantir anonimato no recorte final.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 4.2 Coleta de Dados */}
      <ScrollReveal animation="fadeUp" delay={0.15}>
        <Card className="bg-card/50 border-cyan-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10"><Database className="w-6 h-6 text-blue-500" /></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">4.2 Coleta de Dados</h3>
                <p className="text-muted-foreground mb-4">
                  Procedimento padrão aplicado a cada participante para garantir comparabilidade dos dados.
                </p>
                <ol className="space-y-2">
                  {[
                    "Acolhimento e leitura do TCLE (5 min)",
                    "Questionário pré-teste: perfil demográfico e familiaridade com apps similares",
                    "Apresentação do cenário e instrução de Think-Aloud",
                    "Execução das tarefas T1–T5 (sem ajuda; observador apenas registra)",
                    "Questionário pós-teste SUS + perguntas abertas",
                    "Debriefing: dúvidas finais e agradecimento",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 p-3 rounded-lg bg-background/50 border border-border">
                      <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-500 font-bold text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 4.3 Survey */}
      <ScrollReveal animation="fadeUp" delay={0.2}>
        <Card className="bg-card/50 border-cyan-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10"><FileSpreadsheet className="w-6 h-6 text-emerald-500" /></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">4.3 Survey</h3>
                <p className="text-muted-foreground mb-4">
                  Instrumento padronizado <strong>System Usability Scale (SUS)</strong> + perguntas qualitativas.
                </p>
                <div className="space-y-2">
                  {[
                    "1. Eu gostaria de usar este sistema com frequência.",
                    "2. Achei o sistema desnecessariamente complexo.",
                    "3. Achei o sistema fácil de usar.",
                    "4. Precisaria do apoio de um técnico para utilizar o sistema.",
                    "5. As funções do sistema estão bem integradas.",
                    "6. Há muita inconsistência no sistema.",
                    "7. Aprenderia a usar este sistema rapidamente.",
                    "8. Achei o sistema desajeitado de usar.",
                    "9. Senti-me confiante ao usar o sistema.",
                    "10. Precisei aprender muito antes de poder usar.",
                  ].map((q, i) => (
                    <div key={i} className="flex items-center justify-between gap-3 p-3 rounded-lg bg-background/50 border border-border">
                      <span className="text-sm text-muted-foreground">{q}</span>
                      <div className="flex gap-1 flex-shrink-0">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span key={n} className="w-6 h-6 rounded-full border border-emerald-500/30 text-xs flex items-center justify-center text-emerald-500">{n}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  Escala Likert 1 (Discordo totalmente) → 5 (Concordo totalmente). Pontuação final: 0–100.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 4.4 Análise */}
      <ScrollReveal animation="fadeUp" delay={0.25}>
        <Card className="bg-card/50 border-cyan-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-500/10"><LineChart className="w-6 h-6 text-violet-500" /></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">4.4 Análise</h3>
                <p className="text-muted-foreground mb-4">
                  Tratamento dos dados quantitativos e qualitativos, com classificação de problemas por gravidade.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-background/50 border border-border">
                    <h4 className="font-bold text-violet-500 mb-2 text-sm">Quantitativa</h4>
                    <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Tempo médio por tarefa</li>
                      <li>Taxa de sucesso (%)</li>
                      <li>Média de erros</li>
                      <li>Pontuação SUS (média e desvio)</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-border">
                    <h4 className="font-bold text-violet-500 mb-2 text-sm">Qualitativa</h4>
                    <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Etiquetagem de rupturas (MAC)</li>
                      <li>Codificação de comentários abertos</li>
                      <li>Identificação de padrões de erro</li>
                      <li>Heurísticas violadas (Nielsen)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 grid md:grid-cols-3 gap-3">
                  {[
                    { n: "Catastrófico", c: "bg-red-500/10 text-red-500" },
                    { n: "Sério", c: "bg-orange-500/10 text-orange-500" },
                    { n: "Cosmético", c: "bg-yellow-500/10 text-yellow-500" },
                  ].map((g, i) => (
                    <div key={i} className={`p-3 rounded-lg ${g.c} text-center text-sm font-bold`}>{g.n}</div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 4.5 Resultados */}
      <ScrollReveal animation="fadeUp" delay={0.3}>
        <Card className="bg-card/50 border-cyan-500/20 mb-6">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10"><Award className="w-6 h-6 text-amber-500" /></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">4.5 Resultados</h3>
                <p className="text-muted-foreground mb-4">
                  Síntese dos achados, respondendo diretamente aos questionamentos (Q1–Q6).
                </p>
                <div className="grid md:grid-cols-4 gap-3 mb-4">
                  {[
                    { v: "82%", l: "Taxa de sucesso" },
                    { v: "2:41", l: "Tempo médio T1" },
                    { v: "73", l: "Score SUS (Bom)" },
                    { v: "12", l: "Problemas catalogados" },
                  ].map((m, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-4 rounded-xl bg-background/50 border border-amber-500/20 text-center">
                      <div className="text-2xl font-black text-amber-500">{m.v}</div>
                      <div className="text-xs text-muted-foreground mt-1">{m.l}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-sm text-muted-foreground">
                  <strong className="text-amber-500">Principal achado:</strong> 4 de 6 participantes não compreenderam o
                  ícone de "doação direcionada" (Q3), gerando ruptura tipo <em>"Cadê?"</em>. Recomenda-se substituir o
                  ícone por rótulo textual + tooltip.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 4.6 Apresentação */}
      <ScrollReveal animation="fadeUp" delay={0.35}>
        <Card className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border-cyan-500/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10"><Presentation className="w-6 h-6 text-cyan-500" /></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">4.6 Apresentação</h3>
                <p className="text-muted-foreground mb-4">
                  Estrutura sugerida para a apresentação final do relatório (15–20 minutos).
                </p>
                <div className="space-y-2">
                  {[
                    { t: "Contexto e objetivo", d: "Por que esse teste? (1–2 slides)" },
                    { t: "Metodologia DECIDE", d: "Tarefas, perfil, métricas (2–3 slides)" },
                    { t: "Execução", d: "Foto/print da sessão, recursos usados (1 slide)" },
                    { t: "Resultados quantitativos", d: "Gráficos SUS, tempo, erros (2–3 slides)" },
                    { t: "Problemas encontrados", d: "Top 5 com gravidade e print (3–5 slides)" },
                    { t: "Recomendações de redesign", d: "Antes/depois proposto (2–3 slides)" },
                    { t: "Conclusão e próximos passos", d: "Plano para 2ª iteração (1 slide)" },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-background/50 border border-border">
                      <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-500 font-bold text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <div>
                        <strong className="text-foreground text-sm">{s.t}</strong>
                        <span className="text-sm text-muted-foreground"> — {s.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  </section>
);

export default TesteValidacaoSection;
