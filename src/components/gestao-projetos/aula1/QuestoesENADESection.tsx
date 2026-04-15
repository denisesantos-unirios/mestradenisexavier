import { motion, AnimatePresence } from "framer-motion";
import { FileQuestion, CheckCircle2, XCircle, Lightbulb, Target, RotateCcw } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useState } from "react";

interface Question {
  id: number;
  title: string;
  enunciado: string;
  options: { letter: string; text: string }[];
  correct: string;
  explanation: string;
  topic: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Questão 1 — Escolha de Abordagem",
    topic: "Híbrido",
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
    topic: "Scrum",
    enunciado: "Em um time Scrum, observou-se que o gerente da empresa começou a comandar a Daily Scrum, cobrar prazos diretamente dos desenvolvedores e decidir quais itens do backlog seriam feitos na Sprint, sem participação do Product Owner. Sobre essa situação, assinale a alternativa correta.",
    options: [
      { letter: "a", text: "A atuação do gerente está correta, pois na prática o gerente substitui o Scrum Master e o Product Owner." },
      { letter: "b", text: "A Daily Scrum deve ser conduzida pelo Scrum Master, e o gerente pode definir sozinho o conteúdo do Product Backlog." },
      { letter: "c", text: "O gerente não deve comandar a Daily Scrum; o time de desenvolvimento é responsável por conduzir a reunião, e o Product Owner deve priorizar o Product Backlog." },
      { letter: "d", text: "É papel do Scrum Master definir quais itens serão feitos na Sprint, com base na capacidade do time." },
      { letter: "e", text: "O Scrum prevê que o gerente tenha poder hierárquico sobre todos os eventos, para garantir o cumprimento do cronograma." },
    ],
    correct: "c",
    explanation: "A Daily é um evento dos Developers, não do gerente. O Product Owner é o responsável por definir/priorizar o backlog. O Scrum Master é facilitador, não chefe. Gerente, se existir, atua mais como stakeholder."
  },
  {
    id: 3,
    title: "Questão 3 — Kanban e WIP",
    topic: "Kanban",
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
    topic: "Comparativo",
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
  },
  {
    id: 5,
    title: "Questão 5 — Manifesto Ágil",
    topic: "Manifesto",
    enunciado: "O Manifesto Ágil, publicado em 2001, estabelece quatro valores fundamentais para o desenvolvimento de software. Sobre esses valores, é CORRETO afirmar que:",
    options: [
      { letter: "a", text: "O Manifesto Ágil defende que documentação é desnecessária e deve ser completamente eliminada." },
      { letter: "b", text: "Os valores do Manifesto priorizam certos aspectos sobre outros, mas reconhecem valor em ambos os lados." },
      { letter: "c", text: "O Manifesto proíbe o uso de contratos formais em projetos ágeis." },
      { letter: "d", text: "Segundo o Manifesto, processos e ferramentas são mais importantes que indivíduos e interações." },
      { letter: "e", text: "O Manifesto Ágil foi criado exclusivamente para projetos que utilizam Scrum." },
    ],
    correct: "b",
    explanation: "O Manifesto diz 'mais que', não 'em vez de'. Documentação tem valor, mas software funcionando é priorizado (a é falsa). Contratos não são proibidos (c é falsa). Indivíduos > processos (d é invertida). O Manifesto é genérico, não só para Scrum (e é falsa)."
  },
  {
    id: 6,
    title: "Questão 6 — Sprint Review vs Retrospective",
    topic: "Scrum",
    enunciado: "Um Scrum Master júnior está confuso sobre a diferença entre Sprint Review e Sprint Retrospective. Ele pergunta ao time: 'Essas duas reuniões não são a mesma coisa?' Assinale a alternativa que melhor esclarece essa dúvida.",
    options: [
      { letter: "a", text: "São eventos idênticos; a diferença é apenas no nome, pois ambos avaliam o produto entregue." },
      { letter: "b", text: "A Sprint Review avalia o PRODUTO (incremento entregue), enquanto a Sprint Retrospective avalia o PROCESSO (como o time trabalhou)." },
      { letter: "c", text: "A Sprint Retrospective é obrigatória, mas a Sprint Review é opcional e só ocorre quando há stakeholders disponíveis." },
      { letter: "d", text: "A Sprint Review é conduzida pelo Scrum Master, e a Retrospective pelo Product Owner." },
      { letter: "e", text: "A Retrospective ocorre antes da Review, no início da Sprint seguinte." },
    ],
    correct: "b",
    explanation: "Review = inspecionar o PRODUTO (demonstrar incremento, coletar feedback). Retrospective = inspecionar o PROCESSO (o que melhorar na forma de trabalho). Ambos são obrigatórios. A Review é conduzida pelo PO, a Retro pelo SM. A Retro é o último evento da Sprint."
  },
  {
    id: 7,
    title: "Questão 7 — Definition of Done",
    topic: "Scrum",
    enunciado: "Em uma equipe Scrum, um desenvolvedor considera que uma funcionalidade está 'pronta' quando o código compila e funciona localmente, mesmo sem testes automatizados nem deploy em ambiente de homologação. Sobre essa situação, assinale a alternativa correta.",
    options: [
      { letter: "a", text: "O desenvolvedor está correto; 'pronto' significa que o código compila sem erros." },
      { letter: "b", text: "A Definição de Pronto (DoD) é uma decisão individual de cada desenvolvedor e pode variar." },
      { letter: "c", text: "A equipe deve ter uma Definição de Pronto (DoD) compartilhada e formal, que inclui critérios de qualidade como testes, revisão de código e deploy." },
      { letter: "d", text: "No Scrum, não existe o conceito de 'Definição de Pronto'; o PO decide quando algo está pronto." },
      { letter: "e", text: "A DoD só se aplica a projetos que utilizam integração contínua (CI/CD)." },
    ],
    correct: "c",
    explanation: "A DoD é um acordo formal do Scrum Team sobre os critérios de qualidade que um incremento deve atender. Não é individual (b), nem exclusiva de CI/CD (e). O PO aceita/rejeita incrementos com base na DoD, mas não define sozinho (d). 'Compila localmente' é insuficiente (a)."
  },
  {
    id: 8,
    title: "Questão 8 — Métricas Kanban",
    topic: "Kanban",
    enunciado: "Uma equipe DevOps monitora seu quadro Kanban e identifica que o Lead Time médio é de 15 dias, mas o Cycle Time médio é de apenas 4 dias. Sobre essa situação, é correto afirmar que:",
    options: [
      { letter: "a", text: "O Cycle Time deveria ser sempre maior que o Lead Time." },
      { letter: "b", text: "A diferença indica que as tarefas passam em média 11 dias na fila antes de serem iniciadas, sugerindo um gargalo na entrada do fluxo." },
      { letter: "c", text: "Lead Time e Cycle Time são sinônimos e deveriam ter o mesmo valor." },
      { letter: "d", text: "O problema está no tempo de execução, que deveria ser reduzido." },
      { letter: "e", text: "A equipe deve aumentar o limite de WIP para reduzir o Lead Time." },
    ],
    correct: "b",
    explanation: "Lead Time = tempo total (pedido → entrega). Cycle Time = tempo de trabalho (início → conclusão). Se Lead Time >> Cycle Time, as tarefas estão esperando muito na fila. Aumentar WIP (e) pioraria o gargalo. Cycle Time ≤ Lead Time sempre (a é falsa). São métricas diferentes (c é falsa). O problema é a fila, não a execução (d)."
  },
  {
    id: 9,
    title: "Questão 9 — EVM / Valor Agregado",
    topic: "PMBOK/EVM",
    enunciado: "Um projeto tem orçamento total (BAC) de R$ 200.000. No mês 4, o valor planejado (PV) é R$ 100.000, o valor agregado (EV) é R$ 80.000 e o custo real (AC) é R$ 120.000. Com base no Gerenciamento de Valor Agregado (EVM), é correto afirmar que:",
    options: [
      { letter: "a", text: "O projeto está adiantado e abaixo do orçamento." },
      { letter: "b", text: "O CPI é 0,67 e o SPI é 0,80, indicando que o projeto está atrasado e acima do orçamento." },
      { letter: "c", text: "O projeto está dentro do orçamento, pois o AC é menor que o BAC." },
      { letter: "d", text: "O SPI indica que o projeto está adiantado, pois EV > 0." },
      { letter: "e", text: "O EAC será de R$ 160.000, indicando economia no final do projeto." },
    ],
    correct: "b",
    explanation: "CPI = EV/AC = 80.000/120.000 = 0,67 (gasta R$1 e gera R$0,67 de valor). SPI = EV/PV = 80.000/100.000 = 0,80 (só fez 80% do planejado). Ambos < 1 → atrasado E acima do orçamento. EAC = BAC/CPI = 200.000/0,67 ≈ R$298.507 (muito acima)."
  },
  {
    id: 10,
    title: "Questão 10 — Caminho Crítico",
    topic: "PMBOK/Cronograma",
    enunciado: "Em um diagrama de rede de um projeto, foram identificados três caminhos possíveis: Caminho 1 (A→B→D→F) com duração de 14 dias, Caminho 2 (A→C→E→F) com duração de 10 dias, e Caminho 3 (A→B→E→F) com duração de 13 dias. Sobre o caminho crítico desse projeto, é correto afirmar que:",
    options: [
      { letter: "a", text: "O caminho crítico é o Caminho 2, pois é o mais curto e permite terminar o projeto mais rápido." },
      { letter: "b", text: "O caminho crítico é o Caminho 1, com duração de 14 dias, e as atividades C e E possuem folga total de 4 dias." },
      { letter: "c", text: "Todos os caminhos são críticos, pois todos levam ao final do projeto." },
      { letter: "d", text: "O caminho crítico não pode ser determinado sem conhecer os custos das atividades." },
      { letter: "e", text: "A folga total das atividades no caminho crítico é de 1 dia." },
    ],
    correct: "b",
    explanation: "O caminho crítico é o MAIS LONGO (14 dias), pois determina a duração mínima do projeto. As atividades no Caminho 2 têm folga = 14 - 10 = 4 dias. No caminho crítico, folga = 0. O caminho mais curto (a) é o que tem MAIS folga, não o crítico."
  },
  {
    id: 11,
    title: "Questão 11 — EAP (WBS)",
    topic: "PMBOK/Escopo",
    enunciado: "Sobre a Estrutura Analítica do Projeto (EAP), também conhecida como WBS (Work Breakdown Structure), assinale a alternativa INCORRETA.",
    options: [
      { letter: "a", text: "A EAP é uma decomposição hierárquica do escopo total do trabalho do projeto." },
      { letter: "b", text: "O nível mais baixo da EAP é chamado de pacote de trabalho e pode ser estimado e atribuído." },
      { letter: "c", text: "A regra dos 100% estabelece que a soma do trabalho dos níveis inferiores deve representar 100% do trabalho do nível superior." },
      { letter: "d", text: "A EAP deve incluir todas as atividades detalhadas com duração, responsáveis e datas, funcionando também como cronograma do projeto." },
      { letter: "e", text: "A linha de base do escopo é composta pela EAP, pelo dicionário da EAP e pela declaração de escopo." },
    ],
    correct: "d",
    explanation: "A EAP decompõe ENTREGAS (deliverables), não atividades detalhadas. Ela NÃO é um cronograma — não contém datas nem durações. As atividades são derivadas da EAP posteriormente, no processo de definição de atividades do cronograma."
  },
  {
    id: 12,
    title: "Questão 12 — Gerenciamento de Riscos",
    topic: "PMBOK/Riscos",
    enunciado: "Uma equipe de projeto identificou o risco de que o fornecedor principal pode não entregar um componente crítico no prazo. O gerente de projetos decidiu contratar um segundo fornecedor como alternativa, caso o primeiro falhe. Essa estratégia de resposta a riscos é classificada como:",
    options: [
      { letter: "a", text: "Eliminar/Prevenir — pois o risco foi completamente removido do projeto." },
      { letter: "b", text: "Transferir — pois o risco foi passado para o segundo fornecedor." },
      { letter: "c", text: "Mitigar — pois a ação reduz o impacto caso o risco se concretize." },
      { letter: "d", text: "Aceitar ativamente — pois foi criado um plano de contingência com reserva." },
      { letter: "e", text: "Explorar — pois a equipe está aproveitando uma oportunidade de mercado." },
    ],
    correct: "c",
    explanation: "Contratar um segundo fornecedor como backup é MITIGAÇÃO — reduz o impacto se o risco ocorrer (a entrega não para totalmente). NÃO é eliminação (o risco ainda existe). NÃO é transferência (o risco continua com o projeto, não foi passado via contrato/seguro). NÃO é aceitação ativa (reserva de contingência = dinheiro/tempo guardado, não plano B operacional). Explorar é para oportunidades, não ameaças."
  },
];

const QuestionCard = ({ question }: { question: Question }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (letter: string) => {
    if (selected) return;
    setSelected(letter);
    setShowExplanation(true);
  };

  const handleReset = () => {
    setSelected(null);
    setShowExplanation(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.005 }}
      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <FileQuestion className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground">{question.title}</h4>
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{question.topic}</span>
          </div>
        </div>
        {selected && (
          <button onClick={handleReset} className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
            <RotateCcw className="w-3.5 h-3.5" /> Refazer
          </button>
        )}
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

      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
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
      </AnimatePresence>

      {!selected && (
        <p className="text-xs text-muted-foreground text-center">Clique em uma alternativa para responder</p>
      )}
    </motion.div>
  );
};

const QuestoesENADESection = () => {
  const [score, setScore] = useState<Record<number, boolean>>({});
  const answeredCount = Object.keys(score).length;
  const correctCount = Object.values(score).filter(Boolean).length;

  return (
    <section id="questoes" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Bloco 3 • 50 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questões Estilo ENADE
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              12 questões cobrindo Scrum, Kanban, Manifesto Ágil, PMBOK, EVM e Riscos
            </p>
            <div className="inline-flex items-center gap-4 bg-card/60 border border-border rounded-xl px-6 py-3">
              <span className="text-sm text-muted-foreground">📝 Resolva individualmente (3-5 min cada)</span>
              <span className="text-sm text-muted-foreground">💬 Depois discuta com a turma</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {questions.map((q, i) => (
            <ScrollReveal key={q.id} animation="fadeUp" delay={i * 0.05}>
              <QuestionCard question={q} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestoesENADESection;
