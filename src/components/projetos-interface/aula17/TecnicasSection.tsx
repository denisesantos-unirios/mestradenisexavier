import { motion } from "framer-motion";
import { Smartphone, Monitor, Layers, ArrowRight, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TecnicasSection = () => {
  const techniques = [
    {
      icon: Smartphone,
      title: "Frame de Dispositivo",
      description: "Crie molduras de papel representando dispositivos.",
      steps: [
        "Recorte moldura do tamanho do dispositivo",
        "Crie 'telas' que encaixam na moldura",
        "Troque telas para simular navegação",
        "Adicione elementos interativos removíveis"
      ]
    },
    {
      icon: Layers,
      title: "Camadas Sobrepostas",
      description: "Use camadas de papel para simular estados e modais.",
      steps: [
        "Base com conteúdo principal",
        "Camadas para pop-ups e modais",
        "Elementos móveis com dobras",
        "Janelas recortadas para revelar conteúdo"
      ]
    },
    {
      icon: ArrowRight,
      title: "Fluxo de Navegação",
      description: "Conecte múltiplas telas para testar jornadas.",
      steps: [
        "Numere cada tela sequencialmente",
        "Marque áreas clicáveis com cor",
        "Prepare telas de feedback/erro",
        "Organize em ordem de fluxo"
      ]
    },
    {
      icon: Monitor,
      title: "Widgets Reutilizáveis",
      description: "Crie componentes que podem ser reutilizados.",
      steps: [
        "Recorte elementos comuns (botões, menus)",
        "Use post-its para conteúdo editável",
        "Crie biblioteca de ícones",
        "Padronize tamanhos e formatos"
      ]
    }
  ];

  const tips = [
    "Use lápis primeiro, depois caneta para finalizar",
    "Mantenha desenhos simples - foque na estrutura",
    "Escreva legível - participantes precisam ler",
    "Não se preocupe com beleza, foque em clareza",
    "Fotografe cada versão antes de modificar",
    "Numere e date todas as telas"
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
            Técnicas de Prototipação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Métodos práticos para criar protótipos de papel 
            eficazes e testáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {techniques.map((technique, index) => (
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
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                      <technique.icon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{technique.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{technique.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {technique.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-xs text-rose-600 dark:text-rose-400 flex-shrink-0">
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

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                Dicas Práticas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-sm text-foreground">{tip}</span>
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

export default TecnicasSection;
