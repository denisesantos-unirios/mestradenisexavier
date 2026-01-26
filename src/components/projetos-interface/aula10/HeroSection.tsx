import { motion } from "framer-motion";
import { Accessibility, Eye, Ear, Hand, Brain, Heart } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-[15%] p-4 rounded-2xl bg-blue-500/20 backdrop-blur-sm"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Eye className="w-8 h-8 text-blue-400" />
      </motion.div>
      
      <motion.div
        className="absolute top-48 right-[20%] p-4 rounded-2xl bg-purple-500/20 backdrop-blur-sm"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Ear className="w-8 h-8 text-purple-400" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-[25%] p-4 rounded-2xl bg-green-500/20 backdrop-blur-sm"
        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Hand className="w-8 h-8 text-green-400" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 right-[15%] p-4 rounded-2xl bg-orange-500/20 backdrop-blur-sm"
        animate={{ y: [0, 12, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Brain className="w-8 h-8 text-orange-400" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal animation="fadeUp">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6"
            >
              <Accessibility className="w-5 h-5" />
              <span className="text-sm font-medium">Semana 6 • Aula 1</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Acessibilidade:{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fundamentos
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Design inclusivo: criando interfaces que funcionam para todos,
              independentemente de suas habilidades ou limitações.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Design Inclusivo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Accessibility className="w-4 h-4 text-blue-400" />
                <span>WCAG 2.1</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
                <Eye className="w-4 h-4 text-purple-400" />
                <span>Tecnologias Assistivas</span>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
