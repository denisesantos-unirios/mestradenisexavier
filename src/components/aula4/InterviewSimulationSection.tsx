import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MessageCircle, HelpCircle, AlertCircle, CheckCircle2, Skull, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollReveal from "@/components/animations/ScrollReveal";

const InterviewSimulationSection = () => {
  const [selectedScenario, setSelectedScenario] = useState<"cemiterio" | "presidio">("cemiterio");

  const scenarios = {
    cemiterio: {
      icon: Skull,
      title: "Sistema para Cemitério",
      client: "Sr. Antônio - Administrador do Cemitério Municipal",
      context: "O cemitério precisa modernizar seu controle de jazigos, sepultamentos e manutenção.",
      challenges: [
        "Cliente fala em termos do negócio, não técnicos",
        "Requisitos emocionais (atendimento às famílias)",
        "Processos legais complexos (certidões, prazos)"
      ],
      sampleQuestions: [
        "Como funciona atualmente o controle de jazigos?",
        "Quais documentos são necessários para um sepultamento?",
        "Como vocês lidam com a renovação de concessões?",
        "Quais são os principais problemas que enfrentam hoje?",
        "Quem são os usuários que vão acessar o sistema?"
      ],
      ambiguousStatements: [
        { statement: "Preciso de um relatório completo", trap: "O que significa 'completo'? Quais dados?" },
        { statement: "O sistema tem que ser rápido", trap: "Quanto tempo é aceitável? Em qual operação?" },
        { statement: "Quero ver tudo sobre o falecido", trap: "Definir exatamente quais informações" }
      ],
      hiddenRequirements: [
        "Controle de exumações (requisito legal)",
        "Mapa visual do cemitério",
        "Integração com cartórios"
      ]
    },
    presidio: {
      icon: Building2,
      title: "Sistema para Casa de Detenção",
      client: "Dra. Márcia - Diretora da Unidade Prisional",
      context: "A unidade precisa de um sistema para controle de detentos, visitas e regime de progressão.",
      challenges: [
        "Requisitos de segurança críticos",
        "Múltiplos níveis de acesso",
        "Integração com sistema judicial"
      ],
      sampleQuestions: [
        "Como é feito o controle de entrada e saída de detentos?",
        "Quais informações precisam sobre cada interno?",
        "Como funciona o agendamento de visitas?",
        "Quem pode acessar quais informações?",
        "Como acompanham a progressão de regime?"
      ],
      ambiguousStatements: [
        { statement: "Precisa ser muito seguro", trap: "Que tipo de segurança? Autenticação? Criptografia? Auditoria?" },
        { statement: "Histórico completo do detento", trap: "Desde quando? Incluindo o quê exatamente?" },
        { statement: "Alertas automáticos importantes", trap: "Quais eventos geram alerta? Para quem?" }
      ],
      hiddenRequirements: [
        "Rastreabilidade de todas as ações (auditoria)",
        "Backup em tempo real",
        "Funcionamento offline em emergências"
      ]
    }
  };

  const currentScenario = scenarios[selectedScenario];

  const interviewTips = [
    { icon: "👂", tip: "Escute mais do que fale - o cliente é o especialista no negócio" },
    { icon: "❓", tip: "Faça perguntas abertas: 'Como...?', 'Por que...?', 'O que acontece se...?'" },
    { icon: "📝", tip: "Anote TUDO - até o que parece óbvio pode ser importante" },
    { icon: "🔄", tip: "Parafraseie: 'Então você está dizendo que...' para confirmar entendimento" },
    { icon: "🎯", tip: "Pergunte sobre exceções: 'E quando isso não funciona?'" },
    { icon: "⚠️", tip: "Cuidado com requisitos implícitos - o cliente assume que você sabe" }
  ];

  return (
    <section id="dinamica" className="py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6"
            >
              <Users className="w-4 h-4" />
              Dinâmica em Sala
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simulação de <span className="text-primary">Entrevista</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Roleplay: Alunos atuam como <strong>Analista</strong> e <strong>Cliente</strong> 
              para praticar a extração de requisitos em cenários desafiadores.
            </p>
          </div>
        </ScrollReveal>

        {/* Seletor de Cenário */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-secondary">
            <Button
              variant={selectedScenario === "cemiterio" ? "default" : "ghost"}
              onClick={() => setSelectedScenario("cemiterio")}
              className="rounded-xl gap-2"
            >
              <Skull className="w-4 h-4" />
              Cemitério
            </Button>
            <Button
              variant={selectedScenario === "presidio" ? "default" : "ghost"}
              onClick={() => setSelectedScenario("presidio")}
              className="rounded-xl gap-2"
            >
              <Building2 className="w-4 h-4" />
              Casa de Detenção
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card do Cenário */}
            <Card className="mb-8 border-primary/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-primary/5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <currentScenario.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{currentScenario.title}</CardTitle>
                    <p className="text-muted-foreground">Cliente: {currentScenario.client}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-foreground mb-6">{currentScenario.context}</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {currentScenario.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs com conteúdo */}
            <Tabs defaultValue="questions" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                <TabsTrigger value="questions" className="py-3">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Perguntas Sugeridas
                </TabsTrigger>
                <TabsTrigger value="traps" className="py-3">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Armadilhas
                </TabsTrigger>
                <TabsTrigger value="hidden" className="py-3">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Req. Ocultos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="questions">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      Perguntas para o Analista fazer:
                    </h4>
                    <div className="space-y-3">
                      {currentScenario.sampleQuestions.map((question, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20"
                        >
                          <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-foreground">{question}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="traps">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      Frases ambíguas do Cliente (CUIDADO!):
                    </h4>
                    <div className="space-y-4">
                      {currentScenario.ambiguousStatements.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5"
                        >
                          <p className="font-medium text-foreground mb-2">
                            Cliente diz: "{item.statement}"
                          </p>
                          <p className="text-sm text-amber-600 dark:text-amber-400">
                            ⚠️ Armadilha: {item.trap}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hidden">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Requisitos que o Cliente NÃO vai mencionar (descubra!):
                    </h4>
                    <div className="space-y-3">
                      {currentScenario.hiddenRequirements.map((req, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-foreground">{req}</span>
                        </motion.div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground italic">
                      💡 Esses requisitos geralmente só aparecem com perguntas profundas ou análise do contexto!
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </AnimatePresence>

        {/* Dicas de Entrevista */}
        <ScrollReveal delay={0.3}>
          <Card className="mt-12 border-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Dicas para uma Boa Entrevista
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {interviewTips.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm text-foreground">{item.tip}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InterviewSimulationSection;
