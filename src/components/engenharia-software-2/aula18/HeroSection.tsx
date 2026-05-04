import { motion } from "framer-motion";
import { Activity, GitBranch, Workflow, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            Aula 18 • UML Comportamental
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Diagrama de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Atividades
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Modele fluxos de trabalho, decisões, paralelismo e responsabilidades.
            O DA é a ponte entre processos de negócio e implementação.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Play, label: "Início & Fim", delay: 0.2 },
            { icon: Activity, label: "Ações & Atividades", delay: 0.3 },
            { icon: GitBranch, label: "Decisões & Merge", delay: 0.4 },
            { icon: Workflow, label: "Fork & Join", delay: 0.5 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <item.icon className="w-4 h-4 text-blue-400" />
              <span className="text-foreground text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
