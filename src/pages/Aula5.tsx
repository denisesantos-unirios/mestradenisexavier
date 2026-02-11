import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import AIIntroSection from "@/components/aula5/AIIntroSection";
import UserStoryWorkshopSection from "@/components/aula5/UserStoryWorkshopSection";
import PromptEngineeringSection from "@/components/aula5/PromptEngineeringSection";
import AIActivitySection from "@/components/aula5/AIActivitySection";
import LessonQRCode from "@/components/LessonQRCode";
import { motion } from "framer-motion";
import { Bot, ChevronDown } from "lucide-react";

const sections = [
  { id: "intro-ia", title: "IA na ES" },
  { id: "workshop", title: "Workshop" },
  { id: "prompts", title: "Prompts" },
  { id: "atividade", title: "Atividade" }
];

const Aula5 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LessonNavigation
        title="Aula 5 - Engenharia de Software Assistida por IA"
        course="Engenharia de Software I"
        sections={sections}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-background to-purple-950/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-8">
              <Bot className="w-4 h-4" />
              Aulas 10-11 • Workshop Prático
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Engenharia de Software
              </span>
              <br />
              <span className="text-foreground">Assistida por </span>
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                IA
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Como utilizar LLMs para auxiliar na documentação e modelagem,
              <span className="text-violet-400 font-semibold"> mantendo o pensamento crítico</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
                <span className="text-2xl">🤖</span>
                <span>ChatGPT / Claude / Copilot</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
                <span className="text-2xl">📋</span>
                <span>User Stories com IA</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
                <span className="text-2xl">⚠️</span>
                <span>Identificando Alucinações</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full">
                <span className="text-2xl">🔧</span>
                <span>Refinamento Manual</span>
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
              href="#intro-ia"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-violet-400 transition-colors"
            >
              <span className="text-sm">Começar</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      <LessonQRCode />

      {/* Content Sections */}
      <AIIntroSection />
      <UserStoryWorkshopSection />
      <PromptEngineeringSection />
      <AIActivitySection />

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Prof.ª Denise Xavier • Engenharia de Software I
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            "A IA é uma ferramenta poderosa, mas o julgamento crítico é insubstituível"
          </p>
        </div>
      </footer>
      <PdfExportButton filename="ES1_Aula-5_IA-Engenharia-Software.pdf" />
    </div>
  );
};

export default Aula5;
