import { motion } from "framer-motion";
import { StickyNote, Columns3, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, 0], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
        >
          <StickyNote className="w-4 h-4" />
          <span className="text-sm font-medium">Aula 16 • Engenharia de Software II</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6"
        >
          User Stories
          <span className="text-primary"> & </span>
          Kanban
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          De Requisitos e Casos de Uso para Histórias de Usuário: 
          como estruturar, priorizar e visualizar o trabalho ágil
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: StickyNote, label: "User Stories", desc: "Escrita & INVEST" },
            { icon: ArrowRight, label: "Requisitos → HUs", desc: "Transformação prática" },
            { icon: Columns3, label: "Kanban", desc: "Gestão visual do fluxo" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
