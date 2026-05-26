import { motion } from "framer-motion";
import { Mic, ChevronDown, BookOpen } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-background to-pink-950/30" />
    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-8">
          <Mic className="w-4 h-4" /> Aula 6 • Engenharia de Software EAD
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
            Aplicação de Técnicas
          </span>
          <br />
          <span className="text-foreground text-3xl md:text-5xl">de Elicitação de Requisitos</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Planejar, aplicar e organizar requisitos com Questionário, Entrevista e Observação — boas práticas, armadilhas e habilidades do analista.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {["Planejamento", "Questionário", "Entrevista", "Observação", "Organização"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-card/60 border border-border text-muted-foreground">
              <BookOpen className="w-3 h-3 inline mr-1 text-rose-400" /> {t}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#objetivos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-rose-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
