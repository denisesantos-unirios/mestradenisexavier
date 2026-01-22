import { Timer, Users, Trophy, Zap, Target, RefreshCw, MessageSquare, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";
import ParallaxSection from "./animations/ParallaxSection";

const materials = [
  { name: "20 espaguetes", quantity: "crus" },
  { name: "1 metro de fita adesiva", quantity: "" },
  { name: "1 metro de barbante", quantity: "" },
  { name: "1 marshmallow", quantity: "no topo!" },
];

const rules = [
  "18 minutos para construir a torre mais alta",
  "O marshmallow deve estar no topo intacto",
  "A torre deve se sustentar sozinha",
  "Toda a equipe deve participar",
];

const lessons = [
  {
    icon: RefreshCw,
    title: "Prototipação Rápida",
    description: "Equipes que testam cedo e frequentemente têm mais sucesso"
  },
  {
    icon: MessageSquare,
    title: "Comunicação",
    description: "A colaboração efetiva é mais importante que habilidades individuais"
  },
  {
    icon: Target,
    title: "Foco no Objetivo",
    description: "Manter o objetivo final em mente desde o início"
  },
  {
    icon: Lightbulb,
    title: "Aprender com Falhas",
    description: "Falhas rápidas levam a soluções melhores"
  },
];

const MarshmallowSection = () => {
  return (
    <section id="marshmallow" className="section-container relative overflow-hidden">
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
        <motion.div 
          className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="rotate">
            <span className="solution-badge mb-6 inline-block">Dinâmica em Grupo</span>
          </ScrollReveal>
          <ScrollReveal animation="blur" delay={0.2} duration={0.8}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="accent-text">Marshmallow</span> Challenge
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma experiência prática que revela insights poderosos sobre trabalho em equipe e inovação
            </p>
          </ScrollReveal>
        </div>

        {/* Challenge Overview */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Left: Materials & Rules */}
          <div className="space-y-8">
            {/* Materials */}
            <ScrollReveal animation="fadeLeft" delay={0.2}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Zap className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">Materiais</h3>
                </div>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {materials.map((item, index) => (
                    <StaggerItem key={index}>
                      <motion.div 
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50"
                        whileHover={{ x: 10, backgroundColor: "hsl(var(--secondary))" }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span 
                          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          {index + 1}
                        </motion.span>
                        <span className="text-foreground font-medium">{item.name}</span>
                        {item.quantity && (
                          <span className="text-primary text-sm ml-auto">{item.quantity}</span>
                        )}
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            {/* Rules */}
            <ScrollReveal animation="fadeLeft" delay={0.4}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Target className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">Regras</h3>
                </div>
                <ul className="space-y-4">
                  {rules.map((rule, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                        viewport={{ once: true }}
                      />
                      <span>{rule}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Stats & Timer */}
          <div className="space-y-8">
            {/* Timer Card */}
            <ScrollReveal animation="fadeRight" delay={0.2}>
              <motion.div 
                className="glass-card p-8 text-center"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.1)",
                    "0 0 40px rgba(59, 130, 246, 0.2)",
                    "0 0 20px rgba(59, 130, 246, 0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Timer className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>
                <motion.div 
                  className="text-6xl md:text-8xl font-bold accent-text mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  viewport={{ once: true }}
                >
                  18
                </motion.div>
                <p className="text-2xl text-muted-foreground">minutos</p>
              </motion.div>
            </ScrollReveal>

            {/* Team Size */}
            <ScrollReveal animation="fadeRight" delay={0.4}>
              <div className="glass-card p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground mb-1">Tamanho do Grupo</p>
                    <motion.p 
                      className="text-4xl font-bold text-foreground"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      4-6
                    </motion.p>
                    <p className="text-muted-foreground">pessoas por equipe</p>
                  </div>
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users className="w-10 h-10 text-primary" />
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            {/* Objective */}
            <ScrollReveal animation="fadeRight" delay={0.6}>
              <motion.div 
                className="glass-card p-8 border-primary/30"
                whileHover={{ borderColor: "hsl(var(--primary) / 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Trophy className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-foreground">Objetivo</h4>
                </div>
                <p className="text-muted-foreground text-lg">
                  Construir a <span className="text-primary font-semibold">torre mais alta</span> que 
                  consiga sustentar o marshmallow no topo!
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-10">
          <ScrollReveal animation="fadeUp">
            <h3 className="text-3xl font-bold text-center mb-12">
              Lições para <span className="accent-text">Engenharia de Software</span>
            </h3>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {lessons.map((lesson, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="glass-card p-6 text-center h-full"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <lesson.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{lesson.title}</h4>
                  <p className="text-sm text-muted-foreground">{lesson.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Key Insight */}
        <ParallaxSection speed={0.2}>
          <ScrollReveal animation="slideUp" delay={0.2}>
            <motion.div 
              className="glass-card p-10 text-center border-primary/30 relative overflow-hidden"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              <div className="relative z-10">
                <motion.p 
                  className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  "Crianças do jardim de infância superam 
                  <span className="accent-text"> MBAs</span> neste desafio!"
                </motion.p>
                <motion.p 
                  className="text-muted-foreground text-lg max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Por quê? Elas prototipam desde o início, enquanto adultos passam tempo planejando 
                  e só testam no final — quando já é tarde demais.
                </motion.p>
              </div>
            </motion.div>
          </ScrollReveal>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default MarshmallowSection;
