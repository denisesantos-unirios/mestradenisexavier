import { motion } from "framer-motion";
import { MessageCircle, FileText, Link2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-amber-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Semana 7 • Aula Virtual (JITT)
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Especificação de{" "}
            <span className="text-amber-500">Casos de Uso</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Aprenda a documentar casos de uso com descrições detalhadas, 
            fluxos e rastreabilidade com requisitos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: FileText, label: "Template de Especificação", delay: 0.2 },
            { icon: Link2, label: "Rastreabilidade RF → UC", delay: 0.3 },
            { icon: MessageCircle, label: "Fórum de Dúvidas", delay: 0.4 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <item.icon className="w-5 h-5 text-amber-500" />
              <span className="text-foreground font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
