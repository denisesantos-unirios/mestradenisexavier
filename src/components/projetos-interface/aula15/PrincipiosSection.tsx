import { motion } from "framer-motion";
import { TrendingUp, Shuffle, Filter, ThumbsUp, ThumbsDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrincipiosSection = () => {
  const principles = [
    {
      title: "Quantidade antes de Qualidade",
      description: "Na fase divergente, busque gerar o máximo de ideias possível. A filtragem vem depois.",
      icon: TrendingUp
    },
    {
      title: "Combinação de Ideias",
      description: "As melhores soluções frequentemente surgem da combinação de diferentes conceitos.",
      icon: Shuffle
    },
    {
      title: "Separar Geração de Avaliação",
      description: "Primeiro gere ideias livremente, depois avalie e selecione as mais promissoras.",
      icon: Filter
    }
  ];

  const dosAndDonts = {
    dos: [
      "Encoraje ideias 'malucas'",
      "Construa sobre ideias dos outros",
      "Visualize as ideias",
      "Mantenha o foco no problema",
      "Registre TODAS as ideias",
      "Use timer para manter energia"
    ],
    donts: [
      "Criticar durante geração",
      "Dizer 'isso não vai funcionar'",
      "Monopolizar a conversa",
      "Ficar preso a uma ideia",
      "Julgar pela viabilidade inicial",
      "Descartar ideias cedo demais"
    ]
  };

  return (
    <section id="principios" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Princípios da Ideação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Regras fundamentais para sessões de brainstorming produtivas.
          </p>
        </motion.div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
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

        {/* Do's and Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-green-500/5 border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ThumbsUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Faça</h3>
                </div>
                <div className="space-y-3">
                  {dosAndDonts.dos.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-red-500/5 border-red-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <ThumbsDown className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Não Faça</h3>
                </div>
                <div className="space-y-3">
                  {dosAndDonts.donts.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipiosSection;
