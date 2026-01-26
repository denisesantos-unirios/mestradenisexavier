import { motion } from "framer-motion";
import { Layout, Layers, Settings, PenTool, Type, Square, Move, ZoomIn } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InterfaceSection = () => {
  const interfaceAreas = [
    {
      area: "Barra de Ferramentas",
      position: "Topo",
      icon: PenTool,
      items: [
        "Move/Scale (V)",
        "Frame (F)",
        "Shape (R, O, L)",
        "Pen (P)",
        "Text (T)",
        "Hand (H)",
        "Comment (C)"
      ]
    },
    {
      area: "Painel Esquerdo",
      position: "Lateral Esquerda",
      icon: Layers,
      items: [
        "Camadas do projeto",
        "Assets (componentes)",
        "Hierarquia de elementos",
        "Busca de elementos",
        "Páginas do arquivo"
      ]
    },
    {
      area: "Canvas",
      position: "Centro",
      icon: Layout,
      items: [
        "Área de trabalho",
        "Zoom e navegação",
        "Réguas e guias",
        "Grid do layout",
        "Artboards/Frames"
      ]
    },
    {
      area: "Painel Direito",
      position: "Lateral Direita",
      icon: Settings,
      items: [
        "Design (propriedades)",
        "Prototype (interações)",
        "Inspect (specs)",
        "Fill, Stroke, Effects",
        "Constraints e Layout"
      ]
    }
  ];

  const shortcuts = [
    { keys: "V", action: "Ferramenta de seleção" },
    { keys: "F", action: "Criar frame" },
    { keys: "R", action: "Retângulo" },
    { keys: "O", action: "Elipse/Círculo" },
    { keys: "T", action: "Texto" },
    { keys: "P", action: "Caneta (Pen)" },
    { keys: "Ctrl/Cmd + D", action: "Duplicar" },
    { keys: "Ctrl/Cmd + G", action: "Agrupar" },
    { keys: "Ctrl/Cmd + Shift + G", action: "Desagrupar" },
    { keys: "Alt + Arrastar", action: "Duplicar arrastando" },
    { keys: "Shift + Arrastar", action: "Mover em linha reta" },
    { keys: "Ctrl/Cmd + [", action: "Mover para trás" }
  ];

  return (
    <section id="interface" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interface do Figma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as principais áreas e ferramentas da interface do Figma.
          </p>
        </motion.div>

        {/* Interface Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {interfaceAreas.map((area, index) => (
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
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{area.area}</CardTitle>
                      <span className="text-xs text-muted-foreground">{area.position}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {area.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Shortcuts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Move className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                Atalhos Essenciais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {shortcuts.map((shortcut, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                    <code className="px-2 py-1 rounded bg-violet-500/20 text-xs font-mono text-violet-600 dark:text-violet-400">
                      {shortcut.keys}
                    </code>
                    <span className="text-xs text-muted-foreground">{shortcut.action}</span>
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

export default InterfaceSection;
