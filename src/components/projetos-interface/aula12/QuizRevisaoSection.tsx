import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { 
  HelpCircle, CheckCircle, XCircle, ArrowRight, 
  RotateCcw, Trophy, Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";

const questoes = [
  {
    pergunta: "Qual princípio de Norman se refere a dar feedback claro ao usuário sobre suas ações?",
    opcoes: ["Visibilidade", "Feedback", "Mapeamento", "Consistência"],
    correta: 1,
    explicacao: "O princípio de Feedback estabelece que o sistema deve informar continuamente ao usuário sobre o que está acontecendo."
  },
  {
    pergunta: "Quantos itens uma pessoa pode manter na memória de trabalho segundo a Lei de Miller?",
    opcoes: ["3 ± 1", "5 ± 2", "7 ± 2", "9 ± 3"],
    correta: 2,
    explicacao: "A Lei de Miller (1956) estabelece que a capacidade da memória de trabalho é de 7 ± 2 itens."
  },
  {
    pergunta: "O que significa a sigla POUR nas diretrizes WCAG?",
    opcoes: [
      "Percepção, Operação, Usabilidade, Robustez",
      "Perceptível, Operável, Compreensível, Robusto",
      "Prático, Objetivo, Útil, Responsivo",
      "Pesquisável, Organizado, Uniforme, Rastreável"
    ],
    correta: 1,
    explicacao: "POUR = Perceivable (Perceptível), Operable (Operável), Understandable (Compreensível), Robust (Robusto)."
  },
  {
    pergunta: "Qual técnica usa representações fictícias de usuários típicos?",
    opcoes: ["Cenários", "Personas", "Stakeholders", "Protótipos"],
    correta: 1,
    explicacao: "Personas são representações fictícias baseadas em dados reais de usuários típicos do sistema."
  },
  {
    pergunta: "O que a Pirâmide de Walter de UX tem no topo?",
    opcoes: ["Funcionalidade", "Confiabilidade", "Usabilidade", "Prazer"],
    correta: 3,
    explicacao: "A Pirâmide de Walter tem: Funcionalidade (base) → Confiabilidade → Usabilidade → Prazer (topo)."
  },
  {
    pergunta: "Qual lei afirma que o tempo de decisão aumenta com o número de opções?",
    opcoes: ["Lei de Fitts", "Lei de Miller", "Lei de Hick", "Lei de Jakob"],
    correta: 2,
    explicacao: "A Lei de Hick-Hyman estabelece que o tempo de decisão aumenta logaritmicamente com o número de escolhas."
  },
  {
    pergunta: "O que significa HTA em análise de tarefas?",
    opcoes: [
      "High Task Analysis",
      "Hierarchical Task Analysis",
      "Human Task Assessment",
      "Heuristic Task Approach"
    ],
    correta: 1,
    explicacao: "HTA = Hierarchical Task Analysis (Análise Hierárquica de Tarefas), método para decompor tarefas complexas."
  },
  {
    pergunta: "Qual princípio da Gestalt afirma que elementos próximos são percebidos como grupo?",
    opcoes: ["Similaridade", "Proximidade", "Continuidade", "Fechamento"],
    correta: 1,
    explicacao: "O princípio da Proximidade estabelece que objetos próximos tendem a ser percebidos como pertencentes ao mesmo grupo."
  }
];

const QuizRevisaoSection = () => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const handleResposta = (index: number) => {
    if (mostrarResultado) return;
    
    setRespostaSelecionada(index);
    setMostrarResultado(true);
    
    if (index === questoes[questaoAtual].correta) {
      setPontuacao(prev => prev + 1);
    }
  };

  const proximaQuestao = () => {
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(prev => prev + 1);
      setRespostaSelecionada(null);
      setMostrarResultado(false);
    } else {
      setQuizFinalizado(true);
    }
  };

  const reiniciarQuiz = () => {
    setQuestaoAtual(0);
    setRespostaSelecionada(null);
    setMostrarResultado(false);
    setPontuacao(0);
    setQuizFinalizado(false);
  };

  const questao = questoes[questaoAtual];

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Quiz de Revisão
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Teste seus Conhecimentos
            </h2>
            <p className="text-muted-foreground">
              Responda as questões para revisar os conceitos da Etapa 1
            </p>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {!quizFinalizado ? (
            <motion.div
              key={questaoAtual}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-background rounded-2xl border border-border/50 p-8"
            >
              {/* Progresso */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">
                  Questão {questaoAtual + 1} de {questoes.length}
                </span>
                <span className="text-sm font-medium text-amber-400">
                  {pontuacao} pontos
                </span>
              </div>

              <div className="w-full h-2 bg-secondary rounded-full mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((questaoAtual + 1) / questoes.length) * 100}%` }}
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                />
              </div>

              {/* Pergunta */}
              <h3 className="text-xl font-semibold mb-6">{questao.pergunta}</h3>

              {/* Opções */}
              <div className="space-y-3 mb-6">
                {questao.opcoes.map((opcao, index) => {
                  const isCorreta = index === questao.correta;
                  const isSelecionada = index === respostaSelecionada;
                  
                  let bgClass = "bg-secondary/50 hover:bg-secondary border-transparent";
                  if (mostrarResultado) {
                    if (isCorreta) {
                      bgClass = "bg-green-500/20 border-green-500";
                    } else if (isSelecionada && !isCorreta) {
                      bgClass = "bg-red-500/20 border-red-500";
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!mostrarResultado ? { scale: 1.02 } : {}}
                      onClick={() => handleResposta(index)}
                      disabled={mostrarResultado}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${bgClass}`}
                    >
                      <span>{opcao}</span>
                      {mostrarResultado && isCorreta && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      {mostrarResultado && isSelecionada && !isCorreta && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explicação */}
              <AnimatePresence>
                {mostrarResultado && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          {questao.explicacao}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Botão próxima */}
              {mostrarResultado && (
                <Button 
                  onClick={proximaQuestao}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                >
                  {questaoAtual < questoes.length - 1 ? (
                    <>
                      Próxima Questão
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    <>
                      Ver Resultado
                      <Trophy className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-2xl border border-border/50 p-8 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Quiz Concluído!</h3>
              <p className="text-muted-foreground mb-6">
                Você acertou {pontuacao} de {questoes.length} questões
              </p>
              
              <div className="w-full h-4 bg-secondary rounded-full mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(pontuacao / questoes.length) * 100}%` }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                />
              </div>

              <p className="text-lg mb-6">
                {pontuacao === questoes.length && "🎉 Excelente! Você domina os conceitos!"}
                {pontuacao >= questoes.length * 0.7 && pontuacao < questoes.length && "👏 Muito bom! Continue revisando!"}
                {pontuacao >= questoes.length * 0.5 && pontuacao < questoes.length * 0.7 && "📚 Bom início! Revise os tópicos."}
                {pontuacao < questoes.length * 0.5 && "💪 Continue estudando! Você vai melhorar!"}
              </p>

              <Button 
                onClick={reiniciarQuiz}
                variant="outline"
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Tentar Novamente
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuizRevisaoSection;
