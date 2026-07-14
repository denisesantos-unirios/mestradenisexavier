import { motion } from "framer-motion";
import { BookOpen, Brain, Lightbulb, PenLine, GitBranch, MessageCircleQuestion, Wand2, Ban, ClipboardCheck, AlertTriangle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const eixos = [
  {
    n: 1, icon: BookOpen, color: "indigo", title: "Conteúdo",
    question: "Qual conteúdo da disciplina esta atividade trabalha?",
    purpose: "Definir o conhecimento ou tema central da atividade.",
    exemplo: "Elicitação de requisitos funcionais e não-funcionais em um cenário real de sistema hospitalar.",
  },
  {
    n: 2, icon: Brain, color: "indigo", title: "Habilidade em foco",
    question: "Além do conteúdo, que habilidade queremos desenvolver?",
    purpose: "Identificar competências como análise, argumentação, pesquisa ou resolução de problemas.",
    exemplo: "Formulação de perguntas de entrevista, escuta ativa e escrita técnica de requisitos verificáveis.",
  },
  {
    n: 3, icon: Lightbulb, color: "indigo", title: "Por que por aqui?",
    question: "Por que faz sentido usar IA nesta atividade — e não seria mais simples sem ela?",
    purpose: "Justificar pedagogicamente o uso da inteligência artificial.",
    exemplo: "A IA simula um stakeholder (médico, enfermeiro, paciente) permitindo praticar entrevistas antes do campo real.",
  },
  {
    n: 4, icon: PenLine, color: "orange", title: "Criar",
    question: "O que o aluno vai produzir com apoio da IA? Como a autoria fica visível no resultado final?",
    purpose: "Definir o produto final e garantir a participação autoral do estudante.",
    exemplo: "Documento de requisitos (RF/RNF) com trecho da conversa com a IA anexo + justificativa autoral de cada requisito.",
  },
  {
    n: 5, icon: GitBranch, color: "orange", title: "Gerenciar",
    question: "O que fica com o aluno e o que fica com a IA? Qual é a divisão intencional do trabalho?",
    purpose: "Estabelecer claramente as responsabilidades do aluno e da ferramenta.",
    exemplo: "IA: simular stakeholder e sugerir rascunhos. Aluno: elaborar perguntas, classificar, priorizar (MoSCoW) e validar.",
  },
  {
    n: 6, icon: MessageCircleQuestion, color: "fuchsia", title: "Engajar-se",
    question: "Que pergunta crítica o aluno precisa fazer sobre o que a IA oferece nesta atividade?",
    purpose: "Estimular análise, verificação e pensamento crítico diante das respostas da IA.",
    exemplo: '"Esse requisito é verificável? Reflete a dor real do usuário ou é uma suposição da IA?"',
  },
  {
    n: 7, icon: Wand2, color: "fuchsia", title: "Moldar (opcional)",
    question: "Existe espaço para o aluno questionar ou ajustar a IA nesta atividade?",
    purpose: "Prever revisão, refinamento, correção ou adaptação das respostas geradas.",
    exemplo: "O aluno reescreve o prompt com o contexto do domínio hospitalar e corrige requisitos ambíguos gerados.",
  },
  {
    n: 8, icon: Ban, color: "rose", title: "Limite de não delegação",
    question: "O que o aluno não pode, de jeito nenhum, delegar à IA nesta atividade?",
    purpose: "Definir aquilo que deve permanecer sob responsabilidade exclusiva do estudante.",
    exemplo: "A priorização final dos requisitos, a validação com o cliente e o julgamento ético/de viabilidade.",
  },
  {
    n: 9, icon: ClipboardCheck, color: "emerald", title: "Avaliação",
    question: "Como vou avaliar considerando o processo, não só o produto final entregue?",
    purpose: "Avaliar também o percurso, as decisões, as revisões e a aprendizagem.",
    exemplo: "Rubrica: qualidade dos prompts (20%), refinamento dos requisitos (30%), justificativa autoral (30%), produto (20%).",
  },
  {
    n: 10, icon: AlertTriangle, color: "amber", title: "Risco a observar",
    question: "Qual risco é mais provável e como mitigo?",
    purpose: "Antecipar problemas e definir medidas preventivas.",
    exemplo: "Risco: aluno aceitar requisitos alucinados. Mitigação: checklist de verificabilidade + validação em dupla.",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  fuchsia: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

const CanvasIASection = () => {
  return (
    <section id="canvas-ia" className="py-20 px-6 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> Canvas Pedagógico com IA Generativa
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧭 <span className="bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
              Elicitação de Requisitos com Suporte de IA
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Como planejar, com <strong>intencionalidade</strong>, uma atividade de Engenharia de Requisitos
            usando IA generativa. Cada um dos <strong>10 eixos</strong> traz uma pergunta orientadora,
            sua finalidade pedagógica e um exemplo aplicado à disciplina.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {eixos.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className={`h-full bg-card/50 border transition-colors ${colorMap[e.color]}`}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold ${colorMap[e.color]}`}>
                      {e.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <e.icon className="w-4 h-4 opacity-80" />
                        <h3 className="font-bold text-foreground">{e.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong className="text-foreground/90">Pergunta:</strong> {e.question}
                      </p>
                      <div className="text-xs px-3 py-2 rounded-lg bg-background/60 border border-border mb-2">
                        🎯 <strong>Finalidade:</strong> {e.purpose}
                      </div>
                      <div className="text-xs px-3 py-2 rounded-lg bg-background/40 border border-border/60 italic">
                        💡 <strong className="not-italic">Exemplo (Requisitos):</strong> {e.exemplo}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-orange-500/10 border border-border"
        >
          <p className="text-center text-muted-foreground">
            <strong className="text-foreground">Síntese:</strong> a IA amplia — não substitui — o trabalho do
            analista de requisitos. O aluno permanece autor das decisões, da priorização e da validação com o
            cliente. A ferramenta apoia a exploração, o rascunho e o ensaio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CanvasIASection;
