import { motion } from "framer-motion";
import { Scroll, Users, MessageSquare, Repeat, FileCheck, ArrowRight, Clock, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const agileValues = [
  {
    icon: Users,
    preferred: "Indivíduos e interações",
    over: "processos e ferramentas",
    description: "Pessoas colaborando são mais importantes que processos rígidos",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: FileCheck,
    preferred: "Software funcionando",
    over: "documentação abrangente",
    description: "Entregar valor real é melhor que documentar tudo antes",
    color: "from-emerald-500/20 to-emerald-600/20"
  },
  {
    icon: MessageSquare,
    preferred: "Colaboração com o cliente",
    over: "negociação de contratos",
    description: "Parceria contínua supera acordos formais",
    color: "from-amber-500/20 to-amber-600/20"
  },
  {
    icon: Repeat,
    preferred: "Responder a mudanças",
    over: "seguir um plano",
    description: "Adaptação é mais valiosa que previsibilidade rígida",
    color: "from-purple-500/20 to-purple-600/20"
  }
];


const ManifestoSection = () => {
  return (
    <section id="manifesto" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 1 • Fundamentos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O Manifesto Ágil
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os 4 valores que revolucionaram o desenvolvimento de software em 2001
            </p>
          </div>
        </ScrollReveal>

        {/* History Badge */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-12 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Scroll className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Utah, EUA - Fevereiro de 2001</h3>
                <p className="text-muted-foreground">
                  17 desenvolvedores se reuniram em uma estação de ski e criaram o 
                  <strong className="text-primary"> Manifesto para Desenvolvimento Ágil de Software</strong>, 
                  definindo uma nova forma de pensar sobre criação de software.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* The 4 Values */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Os 4 Valores Fundamentais
            </h3>
            
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {agileValues.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${value.color} border border-border/50 backdrop-blur-sm h-full`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">Valor #{index + 1}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-xl font-bold text-foreground">{value.preferred}</span>
                      <span className="text-muted-foreground mx-2">mais que</span>
                      <span className="text-lg text-muted-foreground line-through decoration-2">{value.over}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground italic">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Important Note */}
        <ScrollReveal animation="scale" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <p className="text-lg text-foreground">
                ⚠️ <strong>Importante:</strong> Embora valorizemos mais os itens à esquerda, 
                os itens à direita <strong className="text-amber-400">também têm valor</strong>!
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Ponte para os princípios */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="mb-12 max-w-3xl mx-auto p-6 rounded-2xl border border-border bg-card/50 text-center">
            <p className="text-muted-foreground">
              Os 4 valores são sustentados por <strong className="text-foreground">12 princípios</strong>,
              detalhados na próxima seção com a tradução prática de cada um no dia a dia do time.
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation to next section */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#principios" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: Os 12 Princípios</span>

            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
