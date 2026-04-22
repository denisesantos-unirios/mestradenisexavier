import { motion } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-background to-teal-950/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8">
            <BookOpen className="w-4 h-4" />
            Aula 1 • Unidade de Aprendizagem
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Conceitos da
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Engenharia de Software
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Histórico, evolução e importância da disciplina que transformou o desenvolvimento de software
          </p>
          <p className="text-sm text-muted-foreground mb-8 italic">
            Baseado em Zanin, A. <strong className="text-emerald-400 not-italic">Conceitos da Engenharia de Software</strong> • Sommerville (2011)
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            {[
              "📜 Histórico e Crise do Software",
              "🔄 Evolução: Cascata → Ágil",
              "🎯 Importância da ES",
              "💡 Estudo de Caso Real",
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
                <span>{tag}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-emerald-400 mb-1">Objetivos de Aprendizagem</p>
            <div className="grid gap-1 text-xs text-muted-foreground text-left">
              <p>✅ Reconhecer o histórico e os conceitos fundamentais da Engenharia de Software</p>
              <p>✅ Analisar a evolução do desenvolvimento de software</p>
              <p>✅ Identificar a importância da Engenharia de Software</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#introducao" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-emerald-400 transition-colors">
            <span className="text-sm">Começar</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
