import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Brain, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-background to-orange-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Semana 7 • Aula 1
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Revisão Geral da Etapa 1
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Consolidação dos conceitos fundamentais de IHC, Design de Interação, Usabilidade, UX e Acessibilidade.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Brain, label: "Conceitos de IHC" },
              { icon: Target, label: "Usabilidade" },
              { icon: CheckCircle, label: "UX & Acessibilidade" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border/50"
              >
                <item.icon className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
