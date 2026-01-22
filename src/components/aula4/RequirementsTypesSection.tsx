import { motion } from "framer-motion";
import { CheckCircle2, Settings, Shield, Zap, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/animations/ScrollReveal";

const RequirementsTypesSection = () => {
  const functionalExamples = [
    "O sistema deve permitir cadastro de usuários",
    "O sistema deve gerar relatórios mensais",
    "O sistema deve enviar notificações por email",
    "O sistema deve calcular o total do pedido"
  ];

  const nonFunctionalCategories = [
    {
      icon: Zap,
      title: "Desempenho",
      example: "O sistema deve responder em menos de 2 segundos",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Segurança",
      example: "Senhas devem ter no mínimo 8 caracteres",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Usabilidade",
      example: "Interface deve ser acessível para deficientes visuais",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Disponibilidade",
      example: "Sistema deve ter 99.9% de uptime",
      color: "text-green-500"
    }
  ];

  return (
    <section id="tipos" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tipos de <span className="text-primary">Requisitos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entendendo a diferença entre o que o sistema <strong>faz</strong> e 
              <strong> como</strong> ele deve fazer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requisitos Funcionais */}
          <ScrollReveal>
            <Card className="h-full border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Requisitos Funcionais</CardTitle>
                    <p className="text-sm text-muted-foreground">O que o sistema DEVE FAZER</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Descrevem as funcionalidades e comportamentos específicos do sistema. 
                  São as ações que o sistema executa.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Exemplos:</h4>
                  {functionalExamples.map((example, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-primary/10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{example}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-foreground">
                    <strong>Dica:</strong> Requisitos funcionais geralmente começam com 
                    "O sistema deve..." ou "O usuário pode..."
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Requisitos Não-Funcionais */}
          <ScrollReveal delay={0.2}>
            <Card className="h-full border-secondary bg-gradient-to-br from-secondary/50 to-transparent">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Settings className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Requisitos Não-Funcionais</CardTitle>
                    <p className="text-sm text-muted-foreground">COMO o sistema deve operar</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Definem qualidades e restrições do sistema. São os atributos de qualidade 
                  que afetam a experiência do usuário.
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                  {nonFunctionalCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-card border border-border"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                        <span className="font-semibold text-foreground">{category.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "{category.example}"
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-secondary border border-border">
                  <p className="text-sm text-foreground">
                    <strong>Atenção:</strong> Requisitos não-funcionais frequentemente são 
                    esquecidos e causam retrabalho!
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RequirementsTypesSection;
