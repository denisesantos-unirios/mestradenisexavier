import { motion } from "framer-motion";
import { ClipboardList, Users, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AtividadeSection = () => {
  const steps = [
    {
      step: "1",
      title: "Mapear Stakeholders",
      description: "Identifique todos os envolvidos no projeto (usuários, clientes, desenvolvedores, gestores).",
      questions: [
        "Quem são os usuários finais?",
        "Quem toma decisões sobre o projeto?",
        "Quem será afetado pelo sistema?"
      ]
    },
    {
      step: "2",
      title: "Definir Contexto de Uso",
      description: "Descreva onde, quando e como o sistema será utilizado.",
      questions: [
        "Em que ambiente físico será usado?",
        "Quais dispositivos serão utilizados?",
        "Qual a frequência de uso?"
      ]
    },
    {
      step: "3",
      title: "Identificar Necessidades",
      description: "Liste as principais necessidades e objetivos dos usuários.",
      questions: [
        "Que problemas o sistema resolve?",
        "Quais tarefas os usuários precisam realizar?",
        "Quais são as expectativas dos usuários?"
      ]
    },
    {
      step: "4",
      title: "Planejar Atividades DCU",
      description: "Defina quais atividades de DCU serão realizadas em cada fase do projeto.",
      questions: [
        "Que métodos de pesquisa serão usados?",
        "Como será a participação dos usuários?",
        "Quando serão feitos os testes?"
      ]
    }
  ];

  return (
    <section id="atividade" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ClipboardList className="w-4 h-4" />
            Atividade Prática
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planejamento de DCU
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aplique os conceitos de DCU ao seu projeto de usabilidade, 
            definindo stakeholders, contexto e necessidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground uppercase tracking-wide">
                      Perguntas-guia:
                    </p>
                    {item.questions.map((question, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        {question}
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
                    Entregável: Documento de Planejamento DCU
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Produza um documento de 1-2 páginas contendo:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Mapa de stakeholders do seu projeto
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Descrição do contexto de uso
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Lista de necessidades identificadas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Cronograma de atividades DCU
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

export default AtividadeSection;
