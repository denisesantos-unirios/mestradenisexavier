import { motion } from "framer-motion";
import { Bot, Brain, Sparkles, AlertTriangle, CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

const capabilities = [
  {
    title: "Geração de Código",
    description: "Autocompletar, snippets e funções completas",
    icon: "💻",
    examples: ["GitHub Copilot", "Cursor", "Codeium"]
  },
  {
    title: "Documentação",
    description: "Gerar docs, comentários e README automaticamente",
    icon: "📝",
    examples: ["Docstrings", "API Docs", "Changelogs"]
  },
  {
    title: "Requisitos",
    description: "User Stories, critérios de aceitação, casos de uso",
    icon: "📋",
    examples: ["User Stories", "Épicos", "Backlog"]
  },
  {
    title: "Testes",
    description: "Gerar casos de teste e cenários de QA",
    icon: "🧪",
    examples: ["Unit Tests", "Test Cases", "BDD"]
  },
  {
    title: "Refatoração",
    description: "Sugestões de melhorias e code review",
    icon: "🔧",
    examples: ["Clean Code", "Design Patterns", "Performance"]
  },
  {
    title: "Debugging",
    description: "Análise de erros e sugestões de correção",
    icon: "🐛",
    examples: ["Error Analysis", "Stack Traces", "Solutions"]
  }
];

const prosAndCons = {
  pros: [
    "Acelera tarefas repetitivas e boilerplate",
    "Auxilia iniciantes a aprender padrões",
    "Gera documentação inicial rapidamente",
    "Oferece perspectivas alternativas",
    "Disponível 24/7 para consultas"
  ],
  cons: [
    "Pode gerar código incorreto ou inseguro",
    "Alucinações: informações falsas apresentadas como fatos",
    "Não entende contexto de negócio específico",
    "Pode criar dependência e atrofiar habilidades",
    "Viés dos dados de treinamento"
  ]
};

const AIIntroSection = () => {
  return (
    <section id="intro-ia" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-background to-purple-950/20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 mb-6"
            >
              <Bot className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                IA na Engenharia de Software
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Como utilizar LLMs (ChatGPT, Copilot, Claude) para auxiliar na documentação 
              e modelagem, mantendo o <span className="text-violet-400 font-semibold">pensamento crítico</span>
            </p>
          </div>
        </ScrollReveal>

        {/* O que IA pode fazer */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Brain className="w-6 h-6 text-violet-400" />
              O que a IA pode fazer por nós?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-violet-500/50 transition-all group"
                >
                  <div className="text-4xl mb-4">{cap.icon}</div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-violet-400 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{cap.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs px-2 py-1 bg-violet-500/10 text-violet-400 rounded-full"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Prós e Contras */}
        <ScrollReveal delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
                Vantagens
              </h4>
              <ul className="space-y-4">
                {prosAndCons.pros.map((pro, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Sparkles className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{pro}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-red-400">
                <XCircle className="w-6 h-6" />
                Riscos e Limitações
              </h4>
              <ul className="space-y-4">
                {prosAndCons.cons.map((con, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{con}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Alerta sobre Alucinações */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-amber-400">
                  ⚠️ O que são "Alucinações" da IA?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Alucinações ocorrem quando a IA gera informações que parecem corretas mas são 
                  <span className="text-amber-400 font-semibold"> completamente inventadas</span>. 
                  Isso pode incluir:
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-amber-400">•</span>
                    Bibliotecas ou funções que não existem
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-amber-400">•</span>
                    Sintaxe incorreta apresentada com confiança
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-amber-400">•</span>
                    Requisitos inventados ou mal interpretados
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-amber-400">•</span>
                    Citações e referências falsas
                  </li>
                </ul>
                <p className="mt-4 text-amber-300 font-medium">
                  Por isso, SEMPRE revise e valide o output da IA!
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AIIntroSection;
