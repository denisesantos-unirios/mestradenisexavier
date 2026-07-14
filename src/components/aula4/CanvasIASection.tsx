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

        {/* ================= ATIVIDADE PRÁTICA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-3">
              <Sparkles className="w-4 h-4" /> Atividade Prática Aplicada
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              🏥 <span className="bg-gradient-to-r from-orange-400 to-indigo-400 bg-clip-text text-transparent">
                Entrevistando um Stakeholder Simulado por IA
              </span>
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-3">
              Cenário: <strong>Sistema de Prontuário Eletrônico</strong> para a Clínica <em>Vida+</em>.
              A turma foi contratada para levantar requisitos, mas os médicos têm agenda cheia.
              Vocês farão o <strong>ensaio da entrevista</strong> com uma IA simulando cada persona antes de ir a campo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-card/60 border-indigo-500/30">
              <CardContent className="p-5">
                <div className="text-xs font-bold text-indigo-300 mb-2">👩‍⚕️ PERSONA 1</div>
                <h4 className="font-bold mb-1">Dra. Helena — Clínica Geral</h4>
                <p className="text-xs text-muted-foreground">
                  15 anos de atuação. Atende 30 pacientes/dia. Reclama de digitar receitas repetidas e de não ver o histórico completo.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/60 border-fuchsia-500/30">
              <CardContent className="p-5">
                <div className="text-xs font-bold text-fuchsia-300 mb-2">🧑‍💼 PERSONA 2</div>
                <h4 className="font-bold mb-1">Marcos — Recepcionista</h4>
                <p className="text-xs text-muted-foreground">
                  Faz o cadastro inicial e agenda retornos. Precisa saber se o convênio está ativo antes de liberar a consulta.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/60 border-emerald-500/30">
              <CardContent className="p-5">
                <div className="text-xs font-bold text-emerald-300 mb-2">👵 PERSONA 3</div>
                <h4 className="font-bold mb-1">Sra. Antônia — Paciente</h4>
                <p className="text-xs text-muted-foreground">
                  72 anos, hipertensa. Quer receber lembretes de consulta e ver seus exames sem depender do celular do filho.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/60 border-border mb-6">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-orange-400" /> Passos da Atividade (2 aulas · duplas)
              </h4>
              <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                <li><strong className="text-foreground">Planejar a entrevista (20 min):</strong> escolham 1 persona e escrevam <strong>8 perguntas abertas</strong> (evitem "sim/não"). Categorizem em: contexto, dor atual, tarefa, expectativa.</li>
                <li><strong className="text-foreground">Configurar o prompt da IA (10 min):</strong> use o template abaixo para instruir a IA a "atuar como" a persona escolhida.</li>
                <li><strong className="text-foreground">Rodar a entrevista (25 min):</strong> conduzam a conversa como se fosse real. Quando a IA der resposta genérica, <strong>reperguntem</strong> pedindo exemplo concreto.</li>
                <li><strong className="text-foreground">Extrair requisitos (30 min):</strong> transformem cada dor em requisito no formato <code>RF-XX / RNF-XX</code>, verificável e testável.</li>
                <li><strong className="text-foreground">Priorizar com MoSCoW (15 min):</strong> Must / Should / Could / Won't — <em>essa decisão é 100% de vocês, não da IA</em>.</li>
                <li><strong className="text-foreground">Justificativa autoral (20 min):</strong> 1 parágrafo por Must explicando <em>por que</em> ele existe e qual evidência da entrevista o sustenta.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-slate-950/60 border-indigo-500/40 mb-6">
            <CardContent className="p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-fuchsia-400" /> Template de Prompt (copie e adapte)
              </h4>
              <pre className="text-xs md:text-sm text-indigo-100 whitespace-pre-wrap font-mono bg-black/40 p-4 rounded-lg border border-indigo-500/20 overflow-x-auto">
{`Você vai atuar como [PERSONA] em uma entrevista de elicitação de requisitos.

CONTEXTO: sou analista de requisitos levantando necessidades para um sistema
de Prontuário Eletrônico da Clínica Vida+.

SUA PERSONA:
- Nome, cargo, tempo de experiência: [preencher]
- Rotina típica de trabalho: [preencher]
- 3 dores reais que você sente hoje: [preencher]
- O que você NÃO domina em tecnologia: [preencher]

REGRAS:
1. Responda apenas o que a persona saberia — não invente dados clínicos.
2. Use linguagem coloquial, com exemplos do dia a dia.
3. Se eu fizer uma pergunta ampla, peça para eu ser mais específico.
4. Nunca sugira soluções técnicas — apenas descreva o problema.

Pronto? Vou começar a entrevista agora.`}
              </pre>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-emerald-500/30 mb-6">
            <CardContent className="p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <PenLine className="w-5 h-5 text-emerald-400" /> Exemplo de Requisito Extraído (Dra. Helena)
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-background/60 border border-border">
                  <div className="text-xs font-bold text-emerald-300 mb-1">RF-03 · Must</div>
                  <p className="text-foreground mb-2">
                    O sistema <strong>deve permitir</strong> que o médico duplique uma prescrição anterior do mesmo paciente, editando apenas dosagem e duração.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Evidência: "Eu digito a mesma receita de losartana umas 10 vezes por dia."
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background/60 border border-border">
                  <div className="text-xs font-bold text-amber-300 mb-1">RNF-02 · Should</div>
                  <p className="text-foreground mb-2">
                    O tempo de carregamento do histórico do paciente <strong>não deve exceder 2 segundos</strong> em conexões de 10 Mbps.
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Evidência: "Enquanto carrega, o paciente já está falando comigo."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/60 border-orange-500/30 mb-6">
            <CardContent className="p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-orange-400" /> Rubrica de Avaliação (10 pts)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-3">Critério</th>
                      <th className="py-2 pr-3">O que avalio</th>
                      <th className="py-2">Peso</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50"><td className="py-2 pr-3 text-foreground">Qualidade do prompt</td><td className="py-2 pr-3">Persona definida, regras claras, restrições explícitas.</td><td className="py-2">2,0</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-3 text-foreground">Perguntas de entrevista</td><td className="py-2 pr-3">Abertas, sem viés, com repergunta quando necessário.</td><td className="py-2">2,0</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-3 text-foreground">Requisitos escritos</td><td className="py-2 pr-3">Formato correto, verificáveis, sem ambiguidade.</td><td className="py-2">2,5</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-3 text-foreground">Priorização MoSCoW</td><td className="py-2 pr-3">Justificada com base na evidência da entrevista.</td><td className="py-2">1,5</td></tr>
                    <tr className="border-b border-border/50"><td className="py-2 pr-3 text-foreground">Justificativa autoral</td><td className="py-2 pr-3">Parágrafo demonstrando decisão do aluno, não da IA.</td><td className="py-2">1,5</td></tr>
                    <tr><td className="py-2 pr-3 text-foreground">Reflexão crítica</td><td className="py-2 pr-3">O que a IA acertou/errou e como você corrigiu.</td><td className="py-2">0,5</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 to-indigo-500/10 border border-orange-500/30 text-sm">
            <strong className="text-foreground">📦 Entrega (PDF na AVA):</strong>
            <span className="text-muted-foreground"> (1) prompt final utilizado, (2) transcrição completa da entrevista com a IA, (3) tabela de requisitos RF/RNF com MoSCoW, (4) justificativa autoral dos Musts, (5) reflexão de 1 parágrafo sobre o risco de <em>alucinação</em> observado e como foi mitigado.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CanvasIASection;
