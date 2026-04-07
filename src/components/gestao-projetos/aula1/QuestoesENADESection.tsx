import { motion } from "framer-motion";
import { FileQuestion, CheckCircle2, XCircle, Lightbulb, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState } from "react";

interface Question {
  id: number;
  title: string;
  enunciado: string;
  options: { letter: string; text: string }[];
  correct: string;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Questão 1 — Escolha de Abordagem",
    enunciado: "Uma empresa de software foi contratada para desenvolver um sistema para um órgão público. O contrato estabelece escopo detalhado, cronograma fixo e alta exigência documental. O gerente de projetos cogita utilizar Scrum para ganhar flexibilidade de mudanças. Considerando boas práticas de gestão de projetos, qual decisão é mais adequada?",
    options: [
      { letter: "a", text: "Utilizar somente Scrum, pois o framework é mais moderno e reconhecido no mercado." },
      { letter: "b", text: "Utilizar somente o modelo cascata, pois atende melhor a contratos com escopo fechado." },
      { letter: "c", text: "Utilizar um modelo híbrido, mantendo documentação e marcos contratuais, mas organizando a execução interna em Sprints." },
      { letter: "d", text: "Utilizar somente Kanban, pois é mais visual e facilita o acompanhamento do cliente." },
      { letter: "e", text: "Não utilizar nenhuma abordagem formal, para evitar burocracia e acelerar a entrega." },
    ],
    correct: "c",
    explanation: "O ENADE valoriza a ideia de modelo híbrido em ambientes com contratos rígidos. Apenas cascata (b) é defensável juridicamente, mas perde vantagens de gestão interna. Somente Scrum (a) ignora exigências contratuais/documentais. Kanban isolado (d) não cobre toda a gestão. (e) contraria todas as boas práticas."
  },
  {
    id: 2,
    title: "Questão 2 — Papéis no Scrum",
    enunciado: "Em um time Scrum, observou-se que o gerente da empresa começou a comandar a Daily Scrum, cobrar prazos diretamente dos desenvolvedores e decidir quais itens do backlog seriam feitos na Sprint, sem participação do Product Owner. Sobre essa situação, assinale a alternativa correta.",
    options: [
      { letter: "a", text: "A atuação do gerente está correta, pois na prática o gerente substitui o Scrum Master e o Product Owner." },
      { letter: "b", text: "A Daily Scrum deve ser conduzida pelo Scrum Master, e o gerente pode definir sozinho o conteúdo do Product Backlog." },
      { letter: "c", text: "O gerente não deve comandar a Daily Scrum; o time de desenvolvimento é responsável por conduzir a reunião, e o Product Owner deve priorizar o Product Backlog." },
      { letter: "d", text: "É papel do Scrum Master definir quais itens serão feitos na Sprint, com base na capacidade do time." },
      { letter: "e", text: "O Scrum prevê que o gerente tenha poder hierárquico sobre todos os eventos, para garantir o cumprimento do cronograma." },
    ],
    correct: "c",
    explanation: "A Daily é um evento do Time de Desenvolvimento, não do gerente. O Product Owner é o responsável por definir/priorizar o backlog. O Scrum Master é facilitador, não chefe. Gerente, se existir, atua mais como stakeholder."
  },
  {
    id: 3,
    title: "Questão 3 — Kanban e WIP",
    enunciado: "Uma equipe utiliza um quadro Kanban com as colunas: \"A Fazer\", \"Em Progresso\", \"Em Teste\" e \"Concluído\". Nos últimos meses, notou-se que há muitas tarefas \"Em Progresso\" e poucas \"Concluído\". Para melhorar o fluxo, o líder da equipe decide estabelecer limites de WIP (Work in Progress). Qual é o principal efeito esperado dessa decisão?",
    options: [
      { letter: "a", text: "Aumentar a quantidade de tarefas iniciadas simultaneamente." },
      { letter: "b", text: "Reduzir o tempo médio de conclusão das tarefas e diminuir gargalos." },
      { letter: "c", text: "Aumentar o número de documentos produzidos pela equipe." },
      { letter: "d", text: "Eliminar a necessidade de reuniões de acompanhamento." },
      { letter: "e", text: "Garantir que todas as tarefas tenham o mesmo tamanho." },
    ],
    correct: "b",
    explanation: "Limitar WIP reduz multitarefa e gargalos, aumentando o fluxo. Não aumenta tarefas iniciadas (a), ao contrário. Não tem relação direta com documentação (c) ou tamanho das tarefas (e). Não dispensa completamente a necessidade de reuniões (d)."
  },
  {
    id: 4,
    title: "Questão 4 — Scrum vs Kanban",
    enunciado: "Sobre as diferenças entre Scrum e Kanban no contexto de gestão ágil de projetos de software, assinale a alternativa correta.",
    options: [
      { letter: "a", text: "Scrum exige Sprints com duração fixa, enquanto Kanban trabalha com fluxo contínuo de trabalho." },
      { letter: "b", text: "Kanban define papéis obrigatórios de Product Owner e Scrum Master." },
      { letter: "c", text: "Em Scrum não existe backlog; essa é uma prática exclusiva do Kanban." },
      { letter: "d", text: "Scrum é adequado apenas a projetos pequenos, enquanto Kanban é apenas para grandes empresas." },
      { letter: "e", text: "Kanban não permite priorização de tarefas, apenas visualização." },
    ],
    correct: "a",
    explanation: "Scrum → Sprints fixas; Kanban → fluxo contínuo. Kanban não define papéis obrigatórios (b é falsa). Backlog é típico do Scrum (c é falsa). Tamanho não define aplicabilidade (d é falsa). Kanban permite priorização sim (e é falsa)."
  }
];

const QuestionCard = ({ question }: { question: Question }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (letter: string) => {
    if (selected) return;
    setSelected(letter);
    setShowExplanation(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <FileQuestion className="w-5 h-5 text-primary" />
        </div>
        <h4 className="text-lg font-bold text-foreground">{question.title}</h4>
      </div>

      <div className="bg-secondary/50 rounded-xl p-5 mb-6">
        <p className="text-muted-foreground leading-relaxed">{question.enunciado}</p>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((opt) => {
          const isCorrect = opt.letter === question.correct;
          const isSelected = opt.letter === selected;
          let borderColor = "border-border/50 hover:border-primary/50";
          let bgColor = "bg-card/50";

          if (selected) {
            if (isCorrect) {
              borderColor = "border-emerald-500/50";
              bgColor = "bg-emerald-500/10";
            } else if (isSelected && !isCorrect) {
              borderColor = "border-destructive/50";
              bgColor = "bg-destructive/10";
            }
          }

          return (
            <button
              key={opt.letter}
              onClick={() => handleSelect(opt.letter)}
              disabled={!!selected}
              className={`w-full text-left p-4 rounded-xl border ${borderColor} ${bgColor} transition-all flex items-start gap-3`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                selected && isCorrect ? "bg-emerald-500/20 text-emerald-400" :
                selected && isSelected ? "bg-destructive/20 text-destructive" :
                "bg-secondary text-foreground"
              }`}>
                {selected && isCorrect ? <CheckCircle2 className="w-4 h-4" /> :
                 selected && isSelected && !isCorrect ? <XCircle className="w-4 h-4" /> :
                 opt.letter.toUpperCase()}
              </span>
              <p className="text-sm text-muted-foreground pt-1">{opt.text}</p>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-5 ${
            selected === question.correct
              ? "bg-emerald-500/10 border border-emerald-500/30"
              : "bg-amber-500/10 border border-amber-500/30"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-primary" />
            <p className="text-sm font-bold text-foreground">
              {selected === question.correct ? "✅ Correto!" : `❌ Incorreto — Gabarito: ${question.correct.toUpperCase()}`}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{question.explanation}</p>
        </motion.div>
      )}

      {!selected && (
        <p className="text-xs text-muted-foreground text-center">Clique em uma alternativa para responder</p>
      )}
    </motion.div>
  );
};

const QuestoesENADESection = () => {
  return (
    <section id="questoes" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Bloco 3 • 40 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questões Estilo ENADE
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resolva individualmente (3-5 min cada) e depois discuta com a turma
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {questions.map((q, i) => (
            <ScrollReveal key={q.id} animation="fadeUp" delay={i * 0.1}>
              <QuestionCard question={q} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestoesENADESection;
