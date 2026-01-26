import { motion } from "framer-motion";
import { Layers, FileBox, Smartphone, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            Semana 9 • Aula 1
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Fundamentos de{" "}
            <span className="text-purple-600 dark:text-purple-400">Prototipação</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Entenda os diferentes níveis de fidelidade e quando usar 
            cada tipo de protótipo no processo de design.
          </p>
        </motion.div>

        {/* Key concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: FileBox, label: "Baixa Fidelidade", delay: 0.2 },
            { icon: Smartphone, label: "Média Fidelidade", delay: 0.3 },
            { icon: ArrowUpRight, label: "Alta Fidelidade", delay: 0.4 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-foreground font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
