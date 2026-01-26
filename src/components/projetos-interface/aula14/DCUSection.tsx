import { motion } from "framer-motion";
import { Target, Users, Search, PenTool, Code, TestTube, RefreshCw, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DCUSection = () => {
  const dcuPhases = [
    {
      phase: "1",
      title: "Pesquisa",
      icon: Search,
      description: "Compreender usuários, contexto e necessidades",
      activities: ["Entrevistas", "Observação", "Análise de tarefas", "Personas"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      phase: "2",
      title: "Definição",
      icon: Target,
      description: "Definir problemas e requisitos claros",
      activities: ["Requisitos", "User Stories", "Cenários", "Priorização"],
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      phase: "3",
      title: "Ideação",
      icon: PenTool,
      description: "Gerar múltiplas soluções criativas",
      activities: ["Brainstorming", "Sketches", "Crazy 8s", "Storyboards"],
      color: "from-amber-500/20 to-amber-600/20"
    },
    {
      phase: "4",
      title: "Prototipação",
      icon: Code,
      description: "Materializar ideias em protótipos testáveis",
      activities: ["Wireframes", "Protótipo papel", "Protótipo digital", "Interações"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      phase: "5",
      title: "Avaliação",
      icon: TestTube,
      description: "Testar com usuários reais e coletar feedback",
      activities: ["Testes de usabilidade", "Heurísticas", "Métricas", "Iteração"],
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  const principles = [
    {
      icon: Users,
      title: "Foco no Usuário",
      description: "Usuários participam ativamente do processo de design, não apenas como informantes, mas como co-criadores."
    },
    {
      icon: RefreshCw,
      title: "Iteração Contínua",
      description: "O design evolui através de ciclos repetidos de prototipação, teste e refinamento."
    },
    {
      icon: CheckCircle,
      title: "Validação Empírica",
      description: "Decisões são baseadas em dados e feedback real de usuários, não em suposições."
    }
  ];

  return (
    <section id="dcu" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Processo de DCU
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O Design Centrado no Usuário (DCU) é uma abordagem iterativa que 
            coloca as necessidades do usuário no centro do desenvolvimento.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* DCU Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            As 5 Fases do DCU
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {dcuPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className={`h-full bg-gradient-to-br ${phase.color} border-border/50`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {phase.phase}
                    </div>
                    <phase.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {phase.description}
                  </p>
                  <div className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow between phases */}
              {index < dcuPhases.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-primary/40 transform rotate-45" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Iteration indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-8 gap-3 text-muted-foreground"
        >
          <RefreshCw className="w-5 h-5 text-primary" />
          <span className="text-sm">O processo é cíclico: após a avaliação, retorna-se às fases anteriores para refinamento</span>
        </motion.div>
      </div>
    </section>
  );
};

export default DCUSection;
