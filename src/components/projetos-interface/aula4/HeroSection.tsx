import { motion } from "framer-motion";
import { Target, CheckCircle, ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Semana 3 • Aula 1
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Requisitos de Usabilidade
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Entenda as metas que tornam um sistema fácil de usar, eficiente e satisfatório para o usuário.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Eficácia", "Eficiência", "Satisfação", "Segurança"].map((meta, index) => (
              <motion.div
                key={meta}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border/50"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">{meta}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
