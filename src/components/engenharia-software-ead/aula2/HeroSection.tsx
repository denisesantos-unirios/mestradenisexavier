import { motion } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-background to-indigo-950/30" />
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
          <BookOpen className="w-4 h-4" />
          Aula 2 • Teórica + Prática
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Processos de Software I</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">Modelos Tradicionais</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Visão prática de ciclo de vida e quando ainda se usa modelo tradicional</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#conceito" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-blue-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
