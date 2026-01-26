import { motion } from "framer-motion";
import { ClipboardList, FileBox, Smartphone, Monitor, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AtividadeSection = () => {
  const analysisItems = [
    {
      icon: FileBox,
      title: "Protótipo de Baixa Fidelidade",
      tasks: [
        "Identificar 2 exemplos reais",
        "Descrever quando foram usados",
        "Listar vantagens observadas",
        "Sugerir melhorias possíveis"
      ]
    },
    {
      icon: Smartphone,
      title: "Protótipo de Média Fidelidade",
      tasks: [
        "Analisar wireframes de apps conhecidos",
        "Identificar elementos de navegação",
        "Avaliar hierarquia de informação",
        "Comparar com produto final"
      ]
    },
    {
      icon: Monitor,
      title: "Protótipo de Alta Fidelidade",
      tasks: [
        "Encontrar protótipos Figma públicos",
        "Analisar interações e transições",
        "Avaliar fidelidade visual",
        "Identificar padrões de design"
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
            <ClipboardList className="w-4 h-4" />
            Atividade Prática
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Análise de Protótipos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pesquise e analise exemplos reais de protótipos em 
            diferentes níveis de fidelidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {analysisItems.map((item, index) => (
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
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {item.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-xs text-purple-600 dark:text-purple-400 flex-shrink-0">
                          {idx + 1}
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
                    Entregável: Relatório Comparativo
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Produza um documento comparando os diferentes níveis de fidelidade:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Exemplos encontrados (com links/imagens)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Análise das características de cada nível
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Recomendação: qual nível usar no seu projeto e por quê
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Cronograma de prototipação proposto
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
