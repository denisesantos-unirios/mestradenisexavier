import { motion } from "framer-motion";
import { ClipboardList, Component, Play, Layers, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AtividadeSection = () => {
  const projectRequirements = [
    {
      category: "Componentes",
      icon: Component,
      items: [
        "Botão com variantes (primary, secondary, ghost)",
        "Campo de input com estados (default, focus, error)",
        "Card de item/produto",
        "Header/Navbar do app",
        "Bottom navigation (se mobile)"
      ]
    },
    {
      category: "Telas",
      icon: Layers,
      items: [
        "Tela de login/cadastro",
        "Tela principal/home",
        "Tela de detalhes",
        "Tela de configurações/perfil",
        "Estados de loading e erro"
      ]
    },
    {
      category: "Interações",
      icon: Play,
      items: [
        "Fluxo de login completo",
        "Navegação entre telas principais",
        "Abertura de modal/drawer",
        "Transições com Smart Animate",
        "Estados hover em elementos clicáveis"
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
            <ClipboardList className="w-4 h-4" />
            Projeto Final da Etapa 2
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Protótipo de Alta Fidelidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crie o protótipo completo do seu projeto no Figma com 
            componentes, telas e interações funcionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projectRequirements.map((req, index) => (
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
                      <req.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <CardTitle className="text-lg">{req.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {req.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded border border-emerald-500/30 flex items-center justify-center text-xs text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{item}</span>
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
                    Entrega: Protótipo Figma Completo
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seu protótipo deve conter:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Organização</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Página de Design System (componentes)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Página de Telas do App
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Nomeação clara de frames e camadas
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Funcionalidade</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Protótipo navegável (pelo menos 1 fluxo completo)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Transições e animações aplicadas
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          Link público para apresentação
                        </li>
                      </ul>
                    </div>
                  </div>
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
