import { motion } from "framer-motion";
import { FileText, Target, Lightbulb, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";

const RequirementsIntroSection = () => {
  const concepts = [
    {
      icon: FileText,
      title: "O que são Requisitos?",
      description: "Descrição do que o sistema deve fazer e suas restrições de operação",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Por que são importantes?",
      description: "Requisitos mal definidos são a principal causa de falha em projetos de software",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Engenharia de Requisitos",
      description: "Processo sistemático de elicitar, analisar, documentar e validar requisitos",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: AlertTriangle,
      title: "O Custo do Erro",
      description: "Corrigir um requisito errado após a implantação custa até 100x mais",
      color: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section id="introducao" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
            >
              <FileText className="w-4 h-4" />
              Onde tudo começa
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Engenharia de <span className="text-primary">Requisitos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Se você não sabe para onde vai, qualquer caminho serve" — a importância de 
              entender exatamente o que o cliente precisa antes de começar a construir.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${concept.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <concept.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {concept.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {concept.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Estatística impactante */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-destructive/10 via-destructive/5 to-destructive/10 border border-destructive/20">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-destructive">68%</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Projetos falham por requisitos ruins
                </h4>
                <p className="text-muted-foreground">
                  Segundo o Standish Group, a maioria das falhas em projetos de software está 
                  relacionada a problemas na definição e gerenciamento de requisitos — não em código.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RequirementsIntroSection;
