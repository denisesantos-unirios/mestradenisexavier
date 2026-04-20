import { motion } from "framer-motion";
import { Boxes, Layers, Network, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
            <Boxes className="w-4 h-4" />
            Aula 17 • UML Estrutural
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Diagrama de{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Classes
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            A espinha dorsal da modelagem orientada a objetos: classes, atributos,
            métodos, visibilidade, multiplicidade e relacionamentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Boxes, label: "Classes & Objetos", delay: 0.2 },
            { icon: Layers, label: "Atributos & Métodos", delay: 0.3 },
            { icon: Network, label: "Relacionamentos", delay: 0.4 },
            { icon: Code2, label: "Multiplicidade", delay: 0.5 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <item.icon className="w-4 h-4 text-purple-400" />
              <span className="text-foreground text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
