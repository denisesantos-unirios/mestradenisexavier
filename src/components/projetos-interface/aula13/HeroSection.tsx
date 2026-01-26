import { motion } from "framer-motion";
import { FileCheck, Upload, Calendar, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <FileCheck className="w-4 h-4" />
            Semana 7 • Aula 2
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Entrega da Fase 1
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Orientações para a entrega do projeto de usabilidade - Fase 1: Análise e Planejamento.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Upload, label: "Entrega no AVA" },
              { icon: Calendar, label: "Prazo Definido" },
              { icon: Award, label: "Avaliação" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border/50"
              >
                <item.icon className="w-4 h-4 text-emerald-400" />
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
