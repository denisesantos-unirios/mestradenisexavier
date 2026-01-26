import { motion } from "framer-motion";
import { FileBox, Smartphone, Monitor, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FidelidadeSection = () => {
  const fidelityLevels = [
    {
      level: "Baixa",
      icon: FileBox,
      color: "from-orange-500/20 to-orange-600/20",
      iconColor: "text-orange-500",
      description: "Esboços rápidos e simples, foco em conceitos e estrutura básica.",
      examples: ["Sketches em papel", "Wireframes básicos", "Post-its", "Storyboards"],
      pros: [
        "Rápido e barato de criar",
        "Fácil de modificar",
        "Encoraja feedback honesto",
        "Foco na funcionalidade"
      ],
      cons: [
        "Não testa aspectos visuais",
        "Pode ser mal interpretado",
        "Limitado para testes complexos"
      ],
      when: "Fase inicial, exploração de conceitos, validação rápida de ideias"
    },
    {
      level: "Média",
      icon: Smartphone,
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-500",
      description: "Representação mais detalhada com elementos interativos básicos.",
      examples: ["Wireframes detalhados", "Mockups estáticos", "Protótipos clicáveis simples"],
      pros: [
        "Melhor representação visual",
        "Permite testes básicos de navegação",
        "Custo moderado",
        "Boa comunicação de ideias"
      ],
      cons: [
        "Mais tempo para criar",
        "Pode focar demais em detalhes",
        "Ainda não representa produto final"
      ],
      when: "Validação de fluxos, testes de navegação, apresentação para stakeholders"
    },
    {
      level: "Alta",
      icon: Monitor,
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-500",
      description: "Representação próxima do produto final, com design e interações reais.",
      examples: ["Protótipos Figma interativos", "Protótipos em código", "Demos funcionais"],
      pros: [
        "Experiência realista",
        "Testes mais precisos",
        "Validação visual completa",
        "Base para desenvolvimento"
      ],
      cons: [
        "Alto custo e tempo",
        "Resistência a mudanças",
        "Pode parecer 'pronto' demais"
      ],
      when: "Validação final, testes de usabilidade detalhados, handoff para desenvolvimento"
    }
  ];

  return (
    <section id="fidelidade" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Níveis de Fidelidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada nível de fidelidade tem seu propósito específico 
            no processo de design.
          </p>
        </motion.div>

        <div className="space-y-8">
          {fidelityLevels.map((fidelity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${fidelity.color} border-border/50`}>
                <CardHeader>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="w-14 h-14 rounded-2xl bg-background/50 flex items-center justify-center">
                      <fidelity.icon className={`w-7 h-7 ${fidelity.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Fidelidade {fidelity.level}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {fidelity.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Examples */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Exemplos</h4>
                      <div className="space-y-2">
                        {fidelity.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full ${fidelity.iconColor.replace('text-', 'bg-')}`} />
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pros */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Vantagens</h4>
                      <div className="space-y-2">
                        {fidelity.pros.map((pro, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Limitações</h4>
                      <div className="space-y-2">
                        {fidelity.cons.map((con, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* When to use */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Quando Usar</h4>
                      <div className="p-3 rounded-lg bg-background/50">
                        <p className="text-sm text-muted-foreground">{fidelity.when}</p>
                      </div>
                    </div>
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

export default FidelidadeSection;
