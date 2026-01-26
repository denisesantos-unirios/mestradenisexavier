import { motion } from "framer-motion";
import { Play, MousePointer, ArrowRight, Sparkles, Timer, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrototypingSection = () => {
  const interactions = [
    {
      trigger: "On Click",
      description: "Ao clicar/tocar no elemento",
      use: "Navegação, abrir modais, confirmar ações"
    },
    {
      trigger: "On Hover",
      description: "Ao passar o mouse sobre (desktop)",
      use: "Estados hover, tooltips, menus dropdown"
    },
    {
      trigger: "On Drag",
      description: "Ao arrastar o elemento",
      use: "Carrosséis, sliders, swipe gestures"
    },
    {
      trigger: "While Pressing",
      description: "Enquanto mantém pressionado",
      use: "Estados de botão pressionado"
    },
    {
      trigger: "After Delay",
      description: "Após tempo especificado",
      use: "Splash screens, auto-rotação"
    }
  ];

  const animations = [
    {
      type: "Instant",
      description: "Troca imediata sem transição",
      duration: "0ms",
      use: "Mudanças rápidas de estado"
    },
    {
      type: "Dissolve",
      description: "Fade entre telas",
      duration: "300ms",
      use: "Transições suaves gerais"
    },
    {
      type: "Smart Animate",
      description: "Anima automaticamente diferenças",
      duration: "300ms",
      use: "Transformações de elementos"
    },
    {
      type: "Move In/Out",
      description: "Entrada/saída com direção",
      duration: "300ms",
      use: "Navegação, modais, drawers"
    },
    {
      type: "Push",
      description: "Empurra tela anterior",
      duration: "300ms",
      use: "Navegação entre páginas"
    }
  ];

  const prototypeFlow = [
    {
      step: "1",
      title: "Selecione o elemento",
      description: "Clique no elemento que será o gatilho da interação"
    },
    {
      step: "2",
      title: "Aba Prototype",
      description: "No painel direito, selecione a aba Prototype"
    },
    {
      step: "3",
      title: "Arraste a conexão",
      description: "Clique no círculo azul e arraste até o destino"
    },
    {
      step: "4",
      title: "Configure a interação",
      description: "Defina trigger, ação e animação"
    },
    {
      step: "5",
      title: "Teste com Play",
      description: "Clique no botão Play para testar o protótipo"
    }
  ];

  return (
    <section id="prototyping" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prototipação Interativa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adicione interações e transições para criar protótipos navegáveis.
          </p>
        </motion.div>

        {/* Prototype Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Play className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Como Criar uma Interação
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {prototypeFlow.map((step, index) => (
              <Card key={index} className="bg-card/50 border-border/50 relative">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < prototypeFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-emerald-500/40 z-10" />
                )}
              </Card>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Triggers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MousePointer className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Triggers (Gatilhos)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interactions.map((interaction, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground text-sm">{interaction.trigger}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{interaction.description}</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400">
                        Uso: {interaction.use}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Animations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Animações de Transição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {animations.map((animation, index) => (
                    <div key={index} className="p-3 rounded-lg bg-secondary/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground text-sm">{animation.type}</span>
                        <code className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          {animation.duration}
                        </code>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{animation.description}</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400">
                        Uso: {animation.use}
                      </p>
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

export default PrototypingSection;
