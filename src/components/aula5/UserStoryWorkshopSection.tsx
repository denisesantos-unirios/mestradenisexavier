import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Copy, 
  RefreshCw,
  User,
  Target,
  Gift,
  Lightbulb,
  Search,
  Edit3
} from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

const scenarios = [
  {
    id: "ecommerce",
    title: "E-commerce de Livros",
    context: "Uma livraria online que vende livros físicos e digitais",
    promptExample: "Gere 5 user stories para um sistema de e-commerce de livros focando no carrinho de compras",
    aiOutput: {
      stories: [
        {
          role: "cliente",
          action: "adicionar livros ao carrinho",
          benefit: "para comprar vários itens de uma vez",
          issues: []
        },
        {
          role: "cliente",
          action: "ver o total do carrinho em tempo real",
          benefit: "para controlar meus gastos",
          issues: []
        },
        {
          role: "cliente",
          action: "salvar o carrinho para continuar depois",
          benefit: "para não perder minhas seleções",
          issues: ["Não especifica por quanto tempo o carrinho fica salvo"]
        },
        {
          role: "usuário",
          action: "aplicar cupom de desconto",
          benefit: "para economizar na compra",
          issues: ["'Usuário' é vago - deveria ser 'cliente'", "Não menciona validação do cupom"]
        },
        {
          role: "cliente",
          action: "receber frete grátis em compras acima de R$100",
          benefit: "para incentivar compras maiores",
          issues: ["Isso é uma regra de negócio, não uma user story", "O benefício está na perspectiva errada (empresa, não cliente)"]
        }
      ]
    }
  },
  {
    id: "clinica",
    title: "Clínica Veterinária",
    context: "Sistema de agendamento e prontuário para clínica veterinária",
    promptExample: "Crie user stories para o módulo de agendamento de consultas veterinárias",
    aiOutput: {
      stories: [
        {
          role: "tutor de pet",
          action: "agendar consultas online",
          benefit: "para não precisar ligar para a clínica",
          issues: []
        },
        {
          role: "tutor",
          action: "escolher o veterinário de preferência",
          benefit: "para manter continuidade no tratamento do meu pet",
          issues: []
        },
        {
          role: "recepcionista",
          action: "visualizar a agenda do dia",
          benefit: "para organizar o fluxo de atendimentos",
          issues: []
        },
        {
          role: "sistema",
          action: "enviar lembretes automáticos",
          benefit: "para reduzir faltas",
          issues: ["'Sistema' não é um ator válido em user stories", "Deveria ser perspectiva do tutor ou clínica"]
        },
        {
          role: "veterinário",
          action: "acessar o histórico completo do animal",
          benefit: "para dar um diagnóstico mais preciso",
          issues: ["Mistura agendamento com prontuário - escopo diferente"]
        }
      ]
    }
  },
  {
    id: "academia",
    title: "Academia de Ginástica",
    context: "App para gerenciamento de treinos e check-in na academia",
    promptExample: "Gere user stories para um aplicativo de academia focando no acompanhamento de treinos",
    aiOutput: {
      stories: [
        {
          role: "aluno",
          action: "visualizar meu treino do dia",
          benefit: "para saber quais exercícios fazer",
          issues: []
        },
        {
          role: "aluno",
          action: "registrar a conclusão de cada exercício",
          benefit: "para acompanhar meu progresso",
          issues: []
        },
        {
          role: "personal trainer",
          action: "criar treinos personalizados",
          benefit: "para atender às necessidades específicas de cada aluno",
          issues: []
        },
        {
          role: "aluno",
          action: "ver gráficos de evolução",
          benefit: "para me manter motivado",
          issues: ["Muito vago - que tipo de evolução? Peso? Repetições? Frequência?"]
        },
        {
          role: "administrador",
          action: "gerar relatórios de frequência usando machine learning",
          benefit: "para prever cancelamentos",
          issues: ["Over-engineering - ML é solução técnica, não requisito", "Alucinação típica: IA sugere tecnologias desnecessárias"]
        }
      ]
    }
  }
];

const investCriteria = [
  { letter: "I", name: "Independent", description: "Independente de outras stories", color: "text-blue-400" },
  { letter: "N", name: "Negotiable", description: "Negociável, não é contrato", color: "text-green-400" },
  { letter: "V", name: "Valuable", description: "Valor para o usuário/negócio", color: "text-yellow-400" },
  { letter: "E", name: "Estimable", description: "Estimável em esforço", color: "text-orange-400" },
  { letter: "S", name: "Small", description: "Pequena o suficiente para uma sprint", color: "text-pink-400" },
  { letter: "T", name: "Testable", description: "Testável com critérios claros", color: "text-purple-400" }
];

const UserStoryWorkshopSection = () => {
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const copyPrompt = () => {
    navigator.clipboard.writeText(selectedScenario.promptExample);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="workshop" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-violet-950/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Workshop Prático
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Gerando User Stories com IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pratique a geração e o <span className="text-violet-400 font-semibold">refinamento crítico</span> de 
              User Stories geradas por LLMs
            </p>
          </div>
        </ScrollReveal>

        {/* INVEST Reminder */}
        <ScrollReveal delay={0.1}>
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-violet-400" />
              Lembre-se: Critérios INVEST para boas User Stories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {investCriteria.map((item) => (
                <div key={item.letter} className="text-center">
                  <div className={`text-3xl font-black ${item.color}`}>{item.letter}</div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Scenario Selector */}
        <ScrollReveal delay={0.2}>
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Escolha um cenário:</h3>
            <div className="flex flex-wrap gap-3">
              {scenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => {
                    setSelectedScenario(scenario);
                    setShowAnalysis(false);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedScenario.id === scenario.id
                      ? "bg-violet-500 text-white"
                      : "bg-card border border-border hover:border-violet-500/50"
                  }`}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Prompt Section */}
          <ScrollReveal delay={0.3}>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
              <div className="bg-violet-500/10 px-6 py-4 border-b border-border">
                <h3 className="font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-violet-400" />
                  Prompt para a IA
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Contexto:</span>
                  <p className="text-foreground">{selectedScenario.context}</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border mb-4">
                  <code className="text-sm text-violet-300">{selectedScenario.promptExample}</code>
                </div>
                <button
                  onClick={copyPrompt}
                  className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 text-violet-400 rounded-lg transition-colors"
                >
                  {copiedPrompt ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar Prompt
                    </>
                  )}
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* AI Output Section */}
          <ScrollReveal delay={0.4}>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
              <div className="bg-emerald-500/10 px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  Output da IA
                </h3>
                <button
                  onClick={() => setShowAnalysis(!showAnalysis)}
                  className="flex items-center gap-2 text-sm px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg transition-colors"
                >
                  <Search className="w-4 h-4" />
                  {showAnalysis ? "Ocultar Análise" : "Analisar Problemas"}
                </button>
              </div>
              <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                {selectedScenario.aiOutput.stories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border ${
                      story.issues.length > 0 && showAnalysis
                        ? "bg-red-500/5 border-red-500/30"
                        : "bg-background/50 border-border"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="text-violet-400">Como</span>{" "}
                          <span className="font-medium">{story.role}</span>,{" "}
                          <span className="text-violet-400">eu quero</span>{" "}
                          <span className="font-medium">{story.action}</span>,{" "}
                          <span className="text-violet-400">para</span>{" "}
                          <span className="font-medium">{story.benefit}</span>
                        </p>
                        
                        <AnimatePresence>
                          {showAnalysis && story.issues.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 pt-3 border-t border-red-500/20"
                            >
                              <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-2">
                                <AlertCircle className="w-4 h-4" />
                                Problemas identificados:
                              </div>
                              <ul className="space-y-1">
                                {story.issues.map((issue, i) => (
                                  <li key={i} className="text-sm text-red-300 flex items-start gap-2">
                                    <span>•</span>
                                    {issue}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {story.issues.length === 0 && showAnalysis && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      )}
                      {story.issues.length > 0 && showAnalysis && (
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Refinement Tips */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Edit3 className="w-6 h-6 text-violet-400" />
              Checklist de Refinamento
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-emerald-400">✓ Perguntas para cada User Story:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <User className="w-4 h-4 text-violet-400 mt-0.5" />
                    O "ator" está correto e específico?
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-violet-400 mt-0.5" />
                    A ação é clara e realizável?
                  </li>
                  <li className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-violet-400 mt-0.5" />
                    O benefício é para o usuário (não para o sistema)?
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-violet-400 mt-0.5" />
                    É testável? Tem critérios de aceitação claros?
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-amber-400">⚠️ Red Flags da IA:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• "Sistema" como ator em user stories</li>
                  <li>• Sugestões de tecnologias específicas (ML, blockchain)</li>
                  <li>• Histórias muito genéricas ou muito técnicas</li>
                  <li>• Benefícios na perspectiva da empresa, não do usuário</li>
                  <li>• Mistura de escopos diferentes na mesma story</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UserStoryWorkshopSection;
