import { motion } from "framer-motion";
import { Component, GitBranch, Copy, Settings, Layers, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ComponentesSection = () => {
  const componentConcepts = [
    {
      icon: Component,
      title: "Componente Principal",
      description: "Elemento base que define a estrutura e propriedades.",
      tips: [
        "Identificado pelo ícone de diamante roxo",
        "Alterações propagam para instâncias",
        "Organizar em página de Design System"
      ]
    },
    {
      icon: Copy,
      title: "Instância",
      description: "Cópia vinculada ao componente principal.",
      tips: [
        "Identificada pelo ícone de diamante branco",
        "Herda mudanças do principal",
        "Pode ter overrides locais"
      ]
    },
    {
      icon: GitBranch,
      title: "Variantes",
      description: "Diferentes estados de um mesmo componente.",
      tips: [
        "Estado (default, hover, pressed)",
        "Tamanho (sm, md, lg)",
        "Tipo (primary, secondary, ghost)"
      ]
    },
    {
      icon: Settings,
      title: "Propriedades",
      description: "Atributos configuráveis nas instâncias.",
      tips: [
        "Boolean (show/hide icon)",
        "Text (label do botão)",
        "Instance swap (trocar ícone)"
      ]
    }
  ];

  const createComponentSteps = [
    {
      step: "1",
      title: "Criar o Design",
      description: "Desenhe o elemento com Auto Layout bem estruturado"
    },
    {
      step: "2",
      title: "Converter em Componente",
      description: "Ctrl/Cmd + Alt + K ou menu Create Component"
    },
    {
      step: "3",
      title: "Nomear Corretamente",
      description: "Use / para hierarquia: Button/Primary/Default"
    },
    {
      step: "4",
      title: "Adicionar Variantes",
      description: "Combine no Component Set para estados diferentes"
    },
    {
      step: "5",
      title: "Definir Propriedades",
      description: "Configure quais elementos podem ser editados"
    }
  ];

  return (
    <section id="componentes" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sistema de Componentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Componentes são a base de um Design System escalável e consistente.
          </p>
        </motion.div>

        {/* Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {componentConcepts.map((concept, index) => (
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
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <concept.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{concept.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{concept.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {concept.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How to Create */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            Como Criar um Componente
          </h3>
          
          <div className="flex flex-col md:flex-row gap-4">
            {createComponentSteps.map((step, index) => (
              <div key={index} className="flex-1 relative">
                <Card className="h-full bg-card/50 border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                      {step.step}
                    </div>
                    <h4 className="font-medium text-foreground text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < createComponentSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-500/40 transform rotate-45 -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComponentesSection;
