import { motion } from "framer-motion";
import { Zap, ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-background to-purple-950/30" />
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-8">
          <Zap className="w-4 h-4" /> Aula 3 • Teórica + Prática
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Processos de Software II</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">Visão Ágil</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Abordagem ágil aplicada, preparando para Scrum e Kanban</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#manifesto" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-violet-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);
export default HeroSection;
