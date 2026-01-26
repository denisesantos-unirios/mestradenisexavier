import { motion } from "framer-motion";
import { Smartphone, Monitor, Tablet, Layout, Grid, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FramesSection = () => {
  const deviceFrames = [
    {
      icon: Smartphone,
      device: "iPhone 14 Pro",
      dimensions: "393 × 852",
      use: "Design mobile iOS"
    },
    {
      icon: Smartphone,
      device: "Android Large",
      dimensions: "360 × 800",
      use: "Design mobile Android"
    },
    {
      icon: Tablet,
      device: "iPad Pro 11\"",
      dimensions: "834 × 1194",
      use: "Design tablet"
    },
    {
      icon: Monitor,
      device: "Desktop",
      dimensions: "1440 × 900",
      use: "Design desktop"
    }
  ];

  const autoLayoutConcepts = [
    {
      title: "Direção",
      description: "Horizontal ou Vertical - define como os elementos filhos são organizados",
      example: "↔ Horizontal | ↕ Vertical"
    },
    {
      title: "Espaçamento",
      description: "Gap entre elementos - pode ser fixo ou usar space-between",
      example: "Gap: 16px | Space between"
    },
    {
      title: "Padding",
      description: "Espaço interno do frame - pode ser uniforme ou por lado",
      example: "16 | 16, 24 | 16, 24, 16, 24"
    },
    {
      title: "Alinhamento",
      description: "Como elementos são alinhados no eixo cruzado",
      example: "Start | Center | End | Stretch"
    },
    {
      title: "Resizing",
      description: "Como o frame se comporta com conteúdo",
      example: "Hug contents | Fixed | Fill"
    }
  ];

  const layoutTips = [
    "Use Auto Layout para layouts responsivos",
    "Nomeie frames de forma clara e organizada",
    "Agrupe elementos relacionados em frames",
    "Use constraints para posicionamento",
    "Mantenha hierarquia de camadas limpa"
  ];

  return (
    <section id="frames" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frames e Auto Layout
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os conceitos fundamentais para criar layouts organizados e responsivos.
          </p>
        </motion.div>

        {/* Device Frames */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Layout className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            Frames de Dispositivos
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deviceFrames.map((frame, index) => (
              <Card key={index} className="bg-card/50 border-border/50 text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-3">
                    <frame.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{frame.device}</h4>
                  <code className="text-xs text-muted-foreground font-mono">{frame.dimensions}</code>
                  <p className="text-xs text-muted-foreground mt-2">{frame.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Auto Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Grid className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            Conceitos de Auto Layout
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {autoLayoutConcepts.map((concept, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">{concept.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{concept.description}</p>
                  <code className="text-xs px-2 py-1 rounded bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    {concept.example}
                  </code>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                Boas Práticas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {layoutTips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-xs text-violet-600 dark:text-violet-400">
                      {index + 1}
                    </div>
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

export default FramesSection;
