import { motion } from "framer-motion";
import { Database, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-background to-cyan-950/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-8">
            <Database className="w-4 h-4" />
            Aula 6 • Modelagem Conceitual
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Modelagem
            </span>
            <br />
            <span className="text-foreground">Conceitual de </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Dados
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Modelo Entidade-Relacionamento (MER):
            <span className="text-teal-400 font-semibold"> entidades, atributos e relacionamentos</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
              <span className="text-2xl">🗂️</span>
              <span>Entidades & Atributos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
              <span className="text-2xl">🔗</span>
              <span>Relacionamentos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
              <span className="text-2xl">📐</span>
              <span>DER - Diagrama E-R</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
              <span className="text-2xl">🏗️</span>
              <span>Prática: Livraria</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#conceitos"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-400 transition-colors"
          >
            <span className="text-sm">Começar</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
