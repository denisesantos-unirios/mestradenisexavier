import { motion } from "framer-motion";
import { MessageSquare, Users, Eye, FileSearch, Brain, Clipboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ElicitationTechniquesSection = () => {
  const techniques = [
    {
      icon: MessageSquare,
      title: "Entrevistas",
      description: "Conversas estruturadas ou não com stakeholders para entender necessidades",
      pros: ["Profundidade de informação", "Esclarecimento imediato", "Construção de rapport"],
      cons: ["Consome tempo", "Depende da habilidade do entrevistador"],
      when: "Ideal para entender o contexto e necessidades específicas",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Workshops (JAD)",
      description: "Sessões colaborativas com múltiplos stakeholders reunidos",
      pros: ["Consenso rápido", "Diferentes perspectivas", "Engajamento coletivo"],
      cons: ["Difícil agendar", "Pode haver conflitos"],
      when: "Quando há múltiplos stakeholders com visões diferentes",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "Etnografia/Observação",
      description: "Observar usuários em seu ambiente natural de trabalho",
      pros: ["Descobre requisitos implícitos", "Entende o contexto real"],
      cons: ["Muito tempo", "Pode alterar comportamento observado"],
      when: "Quando usuários não conseguem articular suas necessidades",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileSearch,
      title: "Análise de Documentos",
      description: "Estudar documentos, formulários e sistemas existentes",
      pros: ["Não requer disponibilidade", "Informação formal e precisa"],
      cons: ["Pode estar desatualizado", "Falta contexto"],
      when: "Para sistemas que substituem processos manuais existentes",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "Brainstorming",
      description: "Geração livre de ideias em grupo sem julgamentos",
      pros: ["Criatividade", "Muitas ideias rapidamente"],
      cons: ["Ideias podem ser inviáveis", "Requer facilitação"],
      when: "Projetos inovadores ou redesign completo",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Clipboard,
      title: "Questionários",
      description: "Perguntas padronizadas para grande número de usuários",
      pros: ["Escalável", "Dados quantitativos", "Anônimo"],
      cons: ["Sem profundidade", "Taxa de resposta baixa"],
      when: "Validar requisitos com grande base de usuários",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <section id="tecnicas" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              Técnicas de Elicitação
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como <span className="text-primary">Descobrir</span> Requisitos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diferentes técnicas para extrair informações dos stakeholders. 
              A escolha depende do contexto, disponibilidade e tipo de projeto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <motion.div
              key={technique.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${technique.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <technique.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {technique.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {technique.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-green-500 uppercase">Vantagens</span>
                      <ul className="mt-1 space-y-1">
                        {technique.pros.map((pro, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <span className="text-xs font-semibold text-red-500 uppercase">Desvantagens</span>
                      <ul className="mt-1 space-y-1">
                        {technique.cons.map((con, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-primary font-medium">
                      💡 {technique.when}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElicitationTechniquesSection;
