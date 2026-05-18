import { motion } from "framer-motion";
import { FileText, Target, ClipboardCheck, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-violet-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Aula 15 • Projetos de Interface
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Modelo de Relatório do{" "}
            <span className="text-violet-600 dark:text-violet-400">Experimento</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Estrutura completa para planejar, executar e relatar uma avaliação de interface usando
            o framework <strong className="text-violet-500">DECIDE</strong>, com estudo de caso aplicado.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Target, label: "Preparação" },
            { icon: ClipboardCheck, label: "Execução" },
            { icon: BarChart3, label: "Análise" },
            { icon: FileText, label: "Apresentação" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <span className="text-foreground font-medium text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
