import { motion } from "framer-motion";
import { Timer, Users, PenTool, Vote, CheckCircle, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkshopSection = () => {
  const workshopSteps = [
    {
      step: "1",
      title: "Aquecimento",
      icon: Lightbulb,
      duration: "5 min",
      description: "Exercício rápido para ativar a criatividade do grupo.",
      activity: "Listar 10 usos alternativos para um clipe de papel"
    },
    {
      step: "2",
      title: "Definição do Problema",
      icon: Users,
      duration: "10 min",
      description: "Reformular o problema como uma questão 'How Might We'.",
      activity: "Escrever 3-5 HMWs baseadas no projeto"
    },
    {
      step: "3",
      title: "Crazy 8s",
      icon: Timer,
      duration: "8 min",
      description: "Cada pessoa gera 8 ideias diferentes rapidamente.",
      activity: "Dobrar papel, 1 minuto por quadrante"
    },
    {
      step: "4",
      title: "Apresentação",
      icon: PenTool,
      duration: "15 min",
      description: "Cada pessoa apresenta suas ideias ao grupo.",
      activity: "1-2 minutos por pessoa, sem discussão ainda"
    },
    {
      step: "5",
      title: "Votação",
      icon: Vote,
      duration: "5 min",
      description: "Votar nas ideias mais promissoras.",
      activity: "3 votos por pessoa com adesivos"
    },
    {
      step: "6",
      title: "Refinamento",
      icon: CheckCircle,
      duration: "15 min",
      description: "Desenvolver as ideias mais votadas.",
      activity: "Combinar e detalhar as top 3 ideias"
    }
  ];

  return (
    <section id="workshop" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4">
            <Timer className="w-4 h-4" />
            Workshop Prático
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sessão de Ideação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Roteiro completo para uma sessão de brainstorming de 60 minutos 
            focada no seu projeto de usabilidade.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-6">
            {workshopSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className="md:ml-20 bg-card/50 border-border/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        {/* Step number - visible on mobile, hidden on md+ where timeline is shown */}
                        <div className="md:hidden w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-sm">
                          {item.step}
                        </div>
                        <item.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                        {item.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                      <p className="text-sm text-foreground">
                        <span className="font-medium">Atividade: </span>
                        {item.activity}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Step number on timeline - hidden on mobile */}
                <div className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-amber-500 items-center justify-center text-white font-bold text-sm z-10">
                  {item.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Materials needed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Materiais Necessários
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Papel A4 (vários)",
                  "Post-its coloridos",
                  "Canetas/marcadores",
                  "Timer/cronômetro",
                  "Quadro/parede",
                  "Adesivos para votação",
                  "Template Crazy 8s",
                  "Câmera (documentação)"
                ].map((material, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {material}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopSection;
