import { motion } from "framer-motion";
import { Palette, Heart, Eye, Brain, ArrowLeftRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UXvsUISection = () => {
  const comparisons = [
    {
      ui: { label: "Visual", desc: "Como o produto parece" },
      ux: { label: "Experiencial", desc: "Como o produto funciona e faz sentir" },
    },
    {
      ui: { label: "Cores, tipografia, ícones", desc: "Elementos visuais" },
      ux: { label: "Fluxos, interações, emoções", desc: "Jornada completa" },
    },
    {
      ui: { label: "Estética", desc: "Beleza da interface" },
      ux: { label: "Funcionalidade", desc: "Utilidade e satisfação" },
    },
    {
      ui: { label: "Pixel-perfect", desc: "Detalhes visuais" },
      ux: { label: "User-centric", desc: "Foco no usuário" },
    },
  ];

  return (
    <section id="ux-vs-ui" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ArrowLeftRight className="w-4 h-4" />
            Diferenças Essenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            UX vs UI: Qual a Diferença?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Embora relacionados, UX e UI têm focos distintos no processo de design.
          </p>
        </motion.div>

        {/* Main comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* UI Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-card border-border hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Palette className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">UI Design</CardTitle>
                    <p className="text-muted-foreground">User Interface</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Foca na <span className="text-foreground font-medium">aparência visual</span> do 
                  produto. Cores, tipografia, espaçamentos, ícones e elementos gráficos.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Layout e composição visual</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Palette className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Paleta de cores e tipografia</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span className="text-sm">Consistência visual</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* UX Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-card border-border hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">UX Design</CardTitle>
                    <p className="text-muted-foreground">User Experience</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Foca na <span className="text-foreground font-medium">experiência completa</span> do 
                  usuário. Emoções, percepções, fluxos e satisfação geral.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm">Pesquisa e entendimento do usuário</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="text-sm">Emoções e satisfação</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="text-sm">Arquitetura de informação</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
                <div className="p-4 text-center font-medium text-blue-500">UI</div>
                <div className="p-4 text-center font-medium text-muted-foreground">vs</div>
                <div className="p-4 text-center font-medium text-primary">UX</div>
              </div>
              {comparisons.map((item, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-3 border-b border-border last:border-0"
                >
                  <div className="p-4 text-center">
                    <p className="font-medium text-foreground">{item.ui.label}</p>
                    <p className="text-sm text-muted-foreground">{item.ui.desc}</p>
                  </div>
                  <div className="p-4 flex items-center justify-center">
                    <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-medium text-foreground">{item.ux.label}</p>
                    <p className="text-sm text-muted-foreground">{item.ux.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Analogy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20"
        >
          <p className="text-center text-lg">
            <span className="font-bold text-foreground">Analogia:</span>{" "}
            <span className="text-muted-foreground">
              Se o produto fosse uma casa, o <span className="text-blue-500 font-medium">UI</span> seria 
              a decoração e pintura, enquanto o <span className="text-primary font-medium">UX</span> seria 
              a planta, os cômodos e como você se sente morando nela.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UXvsUISection;
