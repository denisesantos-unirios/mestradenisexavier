import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileQuestion, Target, Users, ClipboardCheck, Send, BarChart3, AlertTriangle, CheckCircle, Gift } from "lucide-react";

const passos = [
  { num: 1, icon: Target, title: "Determinar objetivos", desc: "Definir claramente o que se quer descobrir (dores do usuário, priorização, aceitação de mercado, etc.)." },
  { num: 2, icon: Users, title: "Identificar público-alvo", desc: "Interno ou externo. Aplicar para o público errado leva ao não atingimento dos objetivos." },
  { num: 3, icon: ClipboardCheck, title: "Elaborar e revisar questões", desc: "Etapa mais complexa — questões mal escritas levam a viés e interpretação incorreta." },
  { num: 4, icon: AlertTriangle, title: "Estimar tempo de preenchimento", desc: "Sempre considerando o perfil dos respondentes, nunca o seu próprio tempo." },
  { num: 5, icon: CheckCircle, title: "Teste piloto", desc: "Identificar 'bugs' do questionário antes da distribuição." },
  { num: 6, icon: Send, title: "Distribuir", desc: "Online ou entrevista estruturada, com prazo curto e lembrete antes do encerramento." },
  { num: 7, icon: BarChart3, title: "Analisar resultados", desc: "Interpretar as respostas e gerar subsídio para a elicitação dos requisitos." },
];

const tiposQuestao = [
  { titulo: "Escalas de valores (Likert)", desc: "Respondente valora algo numa escala de 5 pontos, indicando o grau de concordância." },
  { titulo: "Escalas de ranqueamento", desc: "Respondente ordena uma lista (ex: prioridade 1 ao item mais importante). Exige mais esforço." },
  { titulo: "Escalas de magnitude", desc: "Atribuir valor numérico relativo a uma âncora (ex: 'se X = 10, quanto vale Y?')." },
  { titulo: "Questões divididas/desdobradas", desc: "Começa com uma questão geral e aprofunda com sub-questões." },
  { titulo: "Afunilamento", desc: "Vai do geral (abertas) para o específico (fechadas)." },
  { titulo: "Afunilamento invertido", desc: "Do específico para o geral — bom quando o respondente não tem opinião formada." },
  { titulo: "Questões fatoriais (vinhetas)", desc: "Histórias curtas para capturar processos de julgamento e tomada de decisão." },
];

const dicas = [
  "Forneça opções que cubram todo o conjunto de respostas possíveis e que sejam de interesse.",
  "Alternativas devem ser mutuamente exclusivas e exaustivas (cuide dos limites de intervalo: 0–7 e 7–10 se sobrepõem).",
  "Não induza a uma 'resposta correta' — você coleta opiniões, não testa o usuário.",
  "Se usar escalas, mantenha-as consistentes em todo o questionário (ordem, direção, polaridade).",
  "Prefira questões fechadas se for analisar estatisticamente; abertas dificultam encontrar pontos comuns.",
  "Consulte um especialista em projeto de questionários quando possível.",
  "Sempre teste o questionário antes de distribuir — inclusive caminhos lógicos de desvio.",
  "Não faça perguntas demais — as últimas serão respondidas sem atenção (ou não respondidas).",
];

const armadilhas = [
  { titulo: "Achar que todos têm opinião", desc: "Inclua 'não sei responder' ou 'sem opinião'." },
  { titulo: "Viés da ordem das respostas", desc: "Tendência de escolher a primeira/última. Evite listas muito longas." },
  { titulo: "Conjunto de respostas", desc: "Em listas longas sim/não, o respondente marca tudo igual sem ler." },
  { titulo: "Efeito telescópio", desc: "Afirmar que um evento ocorreu mais recentemente do que de fato. Use eventos de referência." },
  { titulo: "Efeito fadiga", desc: "Varie tipos de questão; deixe as mais fáceis para o final." },
];

const QuestionarioSection = () => (
  <section id="questionario" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
          <FileQuestion className="w-4 h-4" /> Técnica 1
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Questionário</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Instrumento ideal para grandes grupos ou usuários geograficamente distantes, onde entrevistas seriam inviáveis.
        </p>
      </motion.div>

      {/* Passos */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">🗺️ Figura 1 — Passos para Aplicar a Técnica</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {passos.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full bg-card/50 border-border hover:border-rose-500/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                      <span className="text-rose-400 font-bold text-sm">{p.num}</span>
                    </div>
                    <p.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tipos de questão */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">📝 Tipos de Questão (Barribeau et al., 2020)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {tiposQuestao.map((t, i) => (
            <Card key={i} className="bg-card/50 border-border">
              <CardContent className="p-5">
                <h4 className="font-bold text-foreground mb-2">{t.titulo}</h4>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Dicas */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">💡 Dicas de Elaboração (Wiegers & Beatty, 2013)</h3>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <ul className="space-y-3">
              {dicas.map((d, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Armadilhas */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6">⚠️ Armadilhas Comuns</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {armadilhas.map((a, i) => (
            <Card key={i} className="bg-amber-500/5 border-amber-500/20">
              <CardContent className="p-5">
                <AlertTriangle className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="font-bold text-foreground mb-1">{a.titulo}</h4>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Aumentando resposta */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-rose-400" /> Como aumentar a taxa de resposta
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Recompensas</strong>: enviar resultados agregados ou oferecer benefício (acesso gratuito ao produto, brinde).</li>
              <li>• <strong className="text-foreground">Snowballing</strong>: pedir ao respondente que repasse a colegas (útil se o público não precisa ser controlado).</li>
              <li>• <strong className="text-foreground">Apoio das gerências</strong>: em públicos internos, peça que a liderança promova o questionário.</li>
              <li>• <strong className="text-foreground">Treinamento</strong>: se aplicado como entrevista estruturada, todos os aplicadores devem dar as mesmas explicações.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default QuestionarioSection;
