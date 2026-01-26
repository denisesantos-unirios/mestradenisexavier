import { motion } from "framer-motion";
import { Timer, Scissors, Smartphone, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkshopSection = () => {
  const materials = [
    "Papel A4 (muitas folhas)",
    "Post-its de várias cores",
    "Canetas e marcadores",
    "Tesoura e régua",
    "Cola ou fita adesiva",
    "Moldura de smartphone (template)",
    "Templates de componentes UI",
    "Câmera/celular para documentar"
  ];

  const workshopPhases = [
    {
      phase: "1",
      title: "Preparação",
      duration: "10 min",
      icon: Scissors,
      tasks: [
        "Distribuir materiais",
        "Recortar moldura do dispositivo",
        "Revisar fluxo principal do projeto",
        "Definir 3-4 tarefas para testar"
      ]
    },
    {
      phase: "2",
      title: "Criação das Telas",
      duration: "30 min",
      icon: Smartphone,
      tasks: [
        "Desenhar tela inicial/home",
        "Criar telas de navegação principal",
        "Adicionar telas de feedback (sucesso/erro)",
        "Preparar elementos interativos móveis"
      ]
    },
    {
      phase: "3",
      title: "Teste em Duplas",
      duration: "30 min",
      icon: Users,
      tasks: [
        "Trocar protótipos entre duplas",
        "Um faz papel de 'computador'",
        "Outro executa as tarefas",
        "Documentar problemas encontrados"
      ]
    },
    {
      phase: "4",
      title: "Iteração",
      duration: "15 min",
      icon: CheckCircle,
      tasks: [
        "Revisar feedback recebido",
        "Fazer correções rápidas",
        "Preparar versão melhorada",
        "Fotografar versão final"
      ]
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-medium mb-4">
            <Timer className="w-4 h-4" />
            Workshop • 90 minutos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Criação do Protótipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crie o primeiro protótipo de papel do seu projeto 
            de usabilidade.
          </p>
        </motion.div>

        {/* Materials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Scissors className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Materiais Necessários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    {material}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Workshop Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {workshopPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold">
                        {phase.phase}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                        <span className="text-xs text-muted-foreground">{phase.duration}</span>
                      </div>
                    </div>
                    <phase.icon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded border border-rose-500/30 flex items-center justify-center text-xs text-rose-600 dark:text-rose-400 flex-shrink-0">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Deliverable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Entregável: Protótipo de Papel Documentado
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Documente seu protótipo com fotos e descrições:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Fotos de todas as telas criadas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Diagrama do fluxo de navegação
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Resultados dos testes em dupla
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Lista de melhorias identificadas
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopSection;
