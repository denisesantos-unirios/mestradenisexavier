import { motion } from "framer-motion";
import { Lightbulb, Grid3X3, Shuffle, Brain, MessageSquare, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TecnicasSection = () => {
  const techniques = [
    {
      icon: Lightbulb,
      title: "Brainstorming Clássico",
      description: "Sessão livre de geração de ideias sem julgamento inicial.",
      steps: [
        "Definir o problema claramente",
        "Gerar o máximo de ideias possível",
        "Não julgar durante a geração",
        "Combinar e melhorar ideias",
        "Selecionar as melhores"
      ],
      duration: "30-60 min",
      participants: "4-8 pessoas"
    },
    {
      icon: Grid3X3,
      title: "Crazy 8s",
      description: "8 ideias em 8 minutos para forçar pensamento rápido.",
      steps: [
        "Dobrar papel em 8 seções",
        "1 minuto por seção",
        "Esboçar uma ideia diferente",
        "Sem detalhamento excessivo",
        "Compartilhar com o grupo"
      ],
      duration: "8-10 min",
      participants: "Individual/Grupo"
    },
    {
      icon: Shuffle,
      title: "SCAMPER",
      description: "Técnica estruturada para modificar soluções existentes.",
      steps: [
        "Substitute: O que substituir?",
        "Combine: O que combinar?",
        "Adapt: O que adaptar?",
        "Modify: O que modificar?",
        "Put to other use: Outro uso?",
        "Eliminate: O que eliminar?",
        "Reverse: O que inverter?"
      ],
      duration: "20-30 min",
      participants: "1-4 pessoas"
    },
    {
      icon: Brain,
      title: "Mapa Mental",
      description: "Visualização de conexões entre ideias e conceitos.",
      steps: [
        "Tema central no meio",
        "Ramificar conceitos principais",
        "Adicionar sub-ramificações",
        "Usar cores e ícones",
        "Conectar ideias relacionadas"
      ],
      duration: "15-30 min",
      participants: "Individual/Dupla"
    },
    {
      icon: MessageSquare,
      title: "How Might We (HMW)",
      description: "Reformular problemas como oportunidades de design.",
      steps: [
        "Identificar o problema",
        "Reformular como 'Como podemos...'",
        "Não muito amplo nem restrito",
        "Gerar múltiplas HMWs",
        "Votar nas mais promissoras"
      ],
      duration: "15-20 min",
      participants: "3-6 pessoas"
    },
    {
      icon: PenTool,
      title: "Sketching Colaborativo",
      description: "Desenhar soluções rapidamente para comunicar ideias.",
      steps: [
        "Cada um desenha sua ideia",
        "Sem palavras, apenas desenhos",
        "Apresentar ao grupo",
        "Combinar elementos",
        "Refinar coletivamente"
      ],
      duration: "20-40 min",
      participants: "3-6 pessoas"
    }
  ];

  return (
    <section id="tecnicas" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Técnicas de Ideação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e métodos para desbloquear a criatividade 
            e gerar soluções inovadoras.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <technique.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <CardTitle className="text-lg">{technique.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {technique.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
                    <span className="px-2 py-1 rounded bg-secondary">
                      ⏱ {technique.duration}
                    </span>
                    <span className="px-2 py-1 rounded bg-secondary">
                      👥 {technique.participants}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {technique.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-xs text-amber-600 dark:text-amber-400 flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
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

export default TecnicasSection;
