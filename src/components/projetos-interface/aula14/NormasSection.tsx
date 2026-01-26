import { motion } from "framer-motion";
import { FileText, Globe, Building, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NormasSection = () => {
  const standards = [
    {
      icon: Globe,
      code: "ISO 9241-210",
      title: "Ergonomia da Interação Humano-Sistema",
      description: "Norma internacional que define os princípios e atividades do design centrado no humano para sistemas interativos.",
      principles: [
        "O design é baseado em entendimento explícito de usuários, tarefas e ambientes",
        "Usuários estão envolvidos em todo o design e desenvolvimento",
        "O design é conduzido e refinado por avaliação centrada no usuário",
        "O processo é iterativo",
        "O design aborda toda a experiência do usuário",
        "A equipe de design inclui habilidades e perspectivas multidisciplinares"
      ]
    },
    {
      icon: Building,
      code: "ISO 13407",
      title: "Processos de Design Centrado no Humano",
      description: "Predecessora da ISO 9241-210, estabeleceu as bases para processos de DCU em sistemas interativos.",
      principles: [
        "Entender e especificar o contexto de uso",
        "Especificar requisitos do usuário e organizacionais",
        "Produzir soluções de design",
        "Avaliar designs contra requisitos"
      ]
    }
  ];

  const benefits = [
    "Reduz custos de desenvolvimento e manutenção",
    "Aumenta a satisfação do usuário",
    "Melhora a produtividade do usuário",
    "Reduz erros e necessidade de suporte",
    "Diferencial competitivo no mercado",
    "Conformidade com padrões internacionais"
  ];

  return (
    <section id="normas" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Normas e Padrões
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O DCU é respaldado por normas internacionais que definem 
            processos e princípios para design de qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <standard.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-primary">{standard.code}</span>
                      <CardTitle className="text-lg">{standard.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">
                    {standard.description}
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Princípios-chave:</p>
                    {standard.principles.map((principle, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{principle}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                Benefícios do DCU
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{benefit}</span>
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

export default NormasSection;
