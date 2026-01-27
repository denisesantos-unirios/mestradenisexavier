import { Users, Laptop, RefreshCw, Brain, Zap, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ParallaxSection from "@/components/animations/ParallaxSection";

const metodologias = [
  {
    icon: RefreshCw,
    title: "Sala de Aula Invertida",
    description: "Autoestudo prévio com resolução de problemas em sala"
  },
  {
    icon: Users,
    title: "Aprendizagem por Equipes",
    description: "Desenvolvimento colaborativo de competências"
  },
  {
    icon: Brain,
    title: "Aprendizagem Baseada em Projetos",
    description: "Situações reais do cotidiano profissional"
  },
  {
    icon: MessageSquare,
    title: "Instrução por Pares",
    description: "Peer instruction para aprendizado efetivo"
  }
];

const recursos = [
  { name: "AVA-SAGAH", description: "Ambiente Virtual de Aprendizagem" },
  { name: "Laboratório", description: "Práticas computacionais" },
  { name: "Kit Multimídia", description: "Recursos audiovisuais" },
  { name: "Sala Flexível", description: "Configuração adaptável" }
];

const MetodologiaSection = () => {
  return (
    <section id="metodologia" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="rotate">
            <span className="solution-badge mb-6 inline-block">Metodologias Ativas</span>
          </ScrollReveal>
          <ScrollReveal animation="blur" delay={0.2} duration={0.8}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Como <span className="accent-text">Aprendemos</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A disciplina utiliza metodologias que inserem o aluno em situações do seu cotidiano como profissional
            </p>
          </ScrollReveal>
        </div>

        {/* Metodologias Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16" staggerDelay={0.15}>
          {metodologias.map((metodologia, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="glass-card p-6 flex items-start gap-4 h-full"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <metodologia.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{metodologia.title}</h4>
                  <p className="text-muted-foreground">{metodologia.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* AVA Highlight */}
        <ParallaxSection speed={0.2}>
          <ScrollReveal animation="slideUp" delay={0.2}>
            <motion.div 
              className="glass-card p-10 text-center border-primary/30 relative overflow-hidden mb-16"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Laptop className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ambiente Virtual de Aprendizagem
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conteúdos e atividades disponibilizados no <span className="text-primary font-semibold">AVA-SAGAH</span>, 
                  promovendo sinergia entre tecnologias digitais e os objetivos da disciplina para 
                  <span className="text-primary font-semibold"> aprendizagem significativa e colaborativa</span>.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </ParallaxSection>

        {/* Recursos */}
        <div>
          <ScrollReveal animation="fadeDown">
            <h3 className="text-2xl font-bold text-center mb-8">Recursos Disponíveis</h3>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {recursos.map((recurso, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="glass-card p-4 text-center"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-foreground font-semibold mb-1">{recurso.name}</p>
                  <p className="text-sm text-muted-foreground">{recurso.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSection;
