import { motion } from "framer-motion";
import { MessageSquare, Zap, Target, FileCode, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

const promptTechniques = [
  {
    name: "Contexto Claro",
    icon: "🎯",
    bad: "Crie user stories para um app",
    good: "Você é um analista de sistemas. Crie user stories para um app de delivery de farmácia focando no fluxo de pedidos. O público são idosos com pouca familiaridade tecnológica.",
    tip: "Sempre forneça contexto sobre o domínio, público-alvo e foco específico"
  },
  {
    name: "Formato Estruturado",
    icon: "📋",
    bad: "Me dê algumas ideias de funcionalidades",
    good: "Gere 5 user stories no formato: 'Como [ator], eu quero [ação], para [benefício]'. Inclua também 2 critérios de aceitação para cada.",
    tip: "Especifique exatamente o formato de saída desejado"
  },
  {
    name: "Restrições e Escopo",
    icon: "🔒",
    bad: "Crie requisitos para o sistema todo",
    good: "Crie requisitos NÃO-FUNCIONAIS apenas para o módulo de pagamento. Foque em segurança e performance. Não inclua requisitos funcionais.",
    tip: "Delimite claramente o que DEVE e o que NÃO DEVE ser incluído"
  },
  {
    name: "Exemplos (Few-shot)",
    icon: "📝",
    bad: "Escreva casos de uso",
    good: "Escreva casos de uso seguindo este exemplo:\n\nUC01 - Realizar Login\nAtor: Cliente\nPré-condição: Usuário cadastrado\nFluxo principal: 1. Usuário acessa... \n\nAgora crie UC02 - Recuperar Senha",
    tip: "Forneça um exemplo do formato desejado antes de pedir novos"
  }
];

const iterativeProcess = [
  {
    step: 1,
    title: "Prompt Inicial",
    description: "Comece com contexto + pedido específico",
    example: "Gere 3 user stories para cadastro de clientes em um CRM"
  },
  {
    step: 2,
    title: "Analisar Output",
    description: "Identifique problemas, lacunas e alucinações",
    example: "A IA gerou stories mas esqueceu validação de dados"
  },
  {
    step: 3,
    title: "Refinar Prompt",
    description: "Adicione restrições ou peça correções",
    example: "Agora adicione critérios de aceitação com validações de CPF e email"
  },
  {
    step: 4,
    title: "Iterar",
    description: "Repita até atingir qualidade aceitável",
    example: "Bom! Mas ajuste a story 2 para focar no usuário admin"
  }
];

const PromptEngineeringSection = () => {
  return (
    <section id="prompts" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-background to-blue-950/20" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Prompt Engineering
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Arte de Perguntar para a IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prompts bem estruturados geram outputs muito melhores. 
              Aprenda técnicas para extrair o máximo das LLMs.
            </p>
          </div>
        </ScrollReveal>

        {/* Techniques */}
        <div className="space-y-8 mb-16">
          {promptTechniques.map((technique, index) => (
            <ScrollReveal key={technique.name} delay={index * 0.1}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                <div className="bg-cyan-500/10 px-6 py-4 border-b border-border">
                  <h3 className="font-bold flex items-center gap-3">
                    <span className="text-2xl">{technique.icon}</span>
                    {technique.name}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Bad Example */}
                    <div>
                      <div className="flex items-center gap-2 text-red-400 text-sm font-medium mb-3">
                        <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-xs">✗</span>
                        Prompt Fraco
                      </div>
                      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                        <code className="text-sm text-red-300">{technique.bad}</code>
                      </div>
                    </div>
                    
                    {/* Good Example */}
                    <div>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">✓</span>
                        Prompt Forte
                      </div>
                      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4">
                        <code className="text-sm text-emerald-300 whitespace-pre-wrap">{technique.good}</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                    <Lightbulb className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span><span className="text-cyan-400 font-medium">Dica:</span> {technique.tip}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Iterative Process */}
        <ScrollReveal delay={0.4}>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Zap className="w-6 h-6 text-cyan-400" />
              Processo Iterativo de Refinamento
            </h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              {iterativeProcess.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-card/50 border border-border rounded-xl p-5 h-full">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="text-xs bg-background/50 rounded p-2 text-cyan-300">
                      "{item.example}"
                    </div>
                  </div>
                  {index < iterativeProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-cyan-400/50" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Best Practices */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card/30 border border-border rounded-xl p-6">
              <Target className="w-8 h-8 text-violet-400 mb-4" />
              <h4 className="font-bold mb-2">Seja Específico</h4>
              <p className="text-sm text-muted-foreground">
                Quanto mais detalhes sobre contexto, formato e restrições, melhor será o output.
              </p>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6">
              <FileCode className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="font-bold mb-2">Use Templates</h4>
              <p className="text-sm text-muted-foreground">
                Crie prompts reutilizáveis para tarefas recorrentes como user stories e casos de uso.
              </p>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="font-bold mb-2">Sempre Valide</h4>
              <p className="text-sm text-muted-foreground">
                Nunca confie cegamente no output. Revise, questione e refine manualmente.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PromptEngineeringSection;
