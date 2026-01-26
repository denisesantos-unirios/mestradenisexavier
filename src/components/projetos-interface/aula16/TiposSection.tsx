import { motion } from "framer-motion";
import { Pencil, MousePointer, Code, Film, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TiposSection = () => {
  const prototypeTypes = [
    {
      icon: Pencil,
      title: "Protótipo de Papel",
      description: "Desenhos manuais que simulam interfaces de forma rápida e barata.",
      characteristics: [
        "Material: papel, canetas, post-its",
        "Interatividade: simulada manualmente",
        "Custo: muito baixo",
        "Velocidade: minutos a horas"
      ],
      bestFor: "Exploração inicial, testes de conceito, ideação colaborativa"
    },
    {
      icon: MousePointer,
      title: "Protótipo Digital Estático",
      description: "Mockups criados em ferramentas de design sem interatividade.",
      characteristics: [
        "Ferramentas: Figma, Sketch, Adobe XD",
        "Interatividade: nenhuma ou básica",
        "Custo: baixo a médio",
        "Velocidade: horas"
      ],
      bestFor: "Validação visual, apresentações, documentação de design"
    },
    {
      icon: Film,
      title: "Protótipo Interativo",
      description: "Protótipos clicáveis que simulam navegação e transições.",
      characteristics: [
        "Ferramentas: Figma, InVision, Proto.io",
        "Interatividade: navegação e animações",
        "Custo: médio",
        "Velocidade: horas a dias"
      ],
      bestFor: "Testes de usabilidade, validação de fluxos, demos"
    },
    {
      icon: Code,
      title: "Protótipo em Código",
      description: "Implementação funcional com HTML/CSS/JS ou frameworks.",
      characteristics: [
        "Tecnologias: HTML, React, Vue, etc.",
        "Interatividade: completa e real",
        "Custo: alto",
        "Velocidade: dias a semanas"
      ],
      bestFor: "Validação técnica, testes complexos, base para produção"
    },
    {
      icon: Users,
      title: "Wizard of Oz",
      description: "Humano simula funcionalidades do sistema em tempo real.",
      characteristics: [
        "Setup: facilitador oculto",
        "Interatividade: simulada por pessoa",
        "Custo: baixo a médio",
        "Velocidade: rápido para preparar"
      ],
      bestFor: "Testar conceitos antes de implementar, validar AI/automação"
    },
    {
      icon: Lightbulb,
      title: "Protótipo de Experiência",
      description: "Simula toda a jornada do usuário, não apenas a interface.",
      characteristics: [
        "Inclui: ambiente, contexto, touchpoints",
        "Interatividade: experiência completa",
        "Custo: variável",
        "Velocidade: dias"
      ],
      bestFor: "Design de serviços, produtos físico-digitais, jornadas complexas"
    }
  ];

  return (
    <section id="tipos" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tipos de Protótipos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferentes formas de materializar ideias, cada uma com 
            suas características e aplicações.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prototypeTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-purple-500/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {type.characteristics.map((char, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">
                        • {char}
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                    <p className="text-xs font-medium text-foreground mb-1">Melhor para:</p>
                    <p className="text-xs text-muted-foreground">{type.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiposSection;
