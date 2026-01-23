import { motion } from "framer-motion";
import { Eye, MessageSquare, Lock, Map, Layers, MousePointer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const principios = [
  {
    icon: Eye,
    title: "Visibilidade",
    description: "Quanto mais visíveis forem as funções, mais os usuários saberão como proceder.",
    exemplo: "Windows Server vs Linux Server",
    dica: "Funções importantes devem ser facilmente encontradas"
  },
  {
    icon: MessageSquare,
    title: "Feedback",
    description: "Retorno de informações sobre que ação foi feita e o que foi realizado.",
    exemplo: "Som ao enviar mensagem, barra de progresso",
    tipos: ["Áudio", "Tátil", "Visual", "Verbal"]
  },
  {
    icon: Lock,
    title: "Restrições",
    description: "Delimitar o tipo de interação que pode ocorrer em um determinado momento.",
    exemplo: "Opções de menu desabilitadas, campos ocultos",
    tipos: ["Física", "Lógica", "Cultural"]
  },
  {
    icon: Map,
    title: "Mapeamento",
    description: "Relação entre os controles e seus efeitos no mundo.",
    exemplo: "Setas do teclado correspondem à direção do movimento",
    dica: "Controles devem refletir suas funções"
  },
  {
    icon: Layers,
    title: "Consistência",
    description: "Interfaces com operações e elementos semelhantes para tarefas similares.",
    exemplo: "Ctrl+C sempre copia em qualquer programa",
    dica: "Interfaces consistentes são mais fáceis de aprender"
  },
  {
    icon: MousePointer,
    title: "Affordance",
    description: "Atributo que permite às pessoas saber como utilizar um objeto.",
    exemplo: "Botão que parece clicável, link que muda o cursor",
    dica: "O design deve 'dar uma pista' de como usar"
  }
];

const PrincipiosSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Princípios de <span className="text-emerald-400">Design</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os princípios de design definem o que utilizar e o que evitar na construção de uma interface.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principios.map((principio, index) => (
            <motion.div
              key={principio.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <principio.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl">{principio.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{principio.description}</p>
                  
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <p className="text-sm">
                      <span className="text-emerald-400 font-medium">Ex: </span>
                      {principio.exemplo}
                    </p>
                  </div>
                  
                  {principio.tipos && (
                    <div className="flex flex-wrap gap-2">
                      {principio.tipos.map((tipo) => (
                        <span
                          key={tipo}
                          className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded-full"
                        >
                          {tipo}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipiosSection;
