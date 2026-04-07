import { motion } from "framer-motion";
import { Target, Clock, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[70vh] flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary mb-8">
            <Target className="w-5 h-5" />
            <span className="text-sm font-semibold">Gestão de Projetos • Preparação ENADE</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Gestão de Projetos com{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Metodologias Ágeis
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Scrum, Kanban e questões no estilo ENADE para Sistemas de Informação
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { icon: Clock, label: "120 min", desc: "Duração" },
            { icon: BookOpen, label: "4 Blocos", desc: "Estrutura" },
            { icon: Users, label: "7º Período", desc: "Público" },
            { icon: Target, label: "ENADE", desc: "Foco" },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-bold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
