import { motion } from "framer-motion";
import { 
  Heart, 
  ThumbsDown, 
  Users, 
  Lightbulb,
  MessageCircle,
  Smartphone,
  CheckCircle2,
  XCircle,
  Zap,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { useState } from "react";

const exemploApps = [
  { nome: "Uber", tipo: "positivo" },
  { nome: "Nubank", tipo: "positivo" },
  { nome: "Duolingo", tipo: "positivo" },
  { nome: "Apps bancários antigos", tipo: "negativo" },
  { nome: "Sites governamentais", tipo: "negativo" },
  { nome: "Formulários longos", tipo: "negativo" }
];

const perguntasGuia = [
  "O que funciona bem nessa interface?",
  "O que causa fricção ou confusão?",
  "Como você se sente ao usar?",
  "O que mudaria imediatamente?"
];

const DinamicaSection = () => {
  const [selectedTab, setSelectedTab] = useState<"love" | "hate">("love");

  return (
    <section id="dinamica" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary">Atividade de Ativação UX</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Dinâmica da Aula</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aquecer o olhar crítico desde o primeiro encontro
            </p>
          </div>
        </ScrollReveal>

        {/* Card Principal da Dinâmica */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-500 to-slate-600 flex items-center justify-center">
                  <ThumbsDown className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">"Interfaces que Amamos e Interfaces que Odiamos"</h3>
                <p className="text-muted-foreground">Atividade em duplas</p>
              </div>
            </div>

            {/* Instruções */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Passo 1: Escolha</h4>
                  <p className="text-muted-foreground">Cada aluno escolhe um app que AMA e um que DETESTA</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Passo 2: Discussão em Duplas</h4>
                  <p className="text-muted-foreground">Responda às perguntas guia com seu par</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Passo 3: Mural Coletivo</h4>
                  <p className="text-muted-foreground">Compartilhe pontos positivos e negativos com a turma</p>
                </div>
              </div>
            </div>

            {/* Tabs de Exemplo */}
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="flex">
                <button
                  onClick={() => setSelectedTab("love")}
                  className={`flex-1 p-4 flex items-center justify-center gap-2 transition-colors ${
                    selectedTab === "love" 
                      ? "bg-emerald-500/20 text-emerald-500" 
                      : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Interfaces que Amamos</span>
                </button>
                <button
                  onClick={() => setSelectedTab("hate")}
                  className={`flex-1 p-4 flex items-center justify-center gap-2 transition-colors ${
                    selectedTab === "hate" 
                      ? "bg-rose-500/20 text-rose-500" 
                      : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                  }`}
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span className="font-medium">Interfaces que Odiamos</span>
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {exemploApps
                    .filter(app => selectedTab === "love" ? app.tipo === "positivo" : app.tipo === "negativo")
                    .map((app, index) => (
                      <motion.div
                        key={index}
                        className={`p-3 rounded-lg border flex items-center gap-2 ${
                          selectedTab === "love" 
                            ? "border-emerald-500/30 bg-emerald-500/10" 
                            : "border-rose-500/30 bg-rose-500/10"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {selectedTab === "love" 
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          : <XCircle className="w-4 h-4 text-rose-500" />
                        }
                        <span className="text-sm font-medium">{app.nome}</span>
                      </motion.div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Perguntas Guia */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12">
            <h4 className="text-xl font-bold text-center mb-6">
              <Lightbulb className="w-5 h-5 inline-block mr-2 text-primary" />
              Perguntas Guia para Discussão
            </h4>
            
            <StaggerContainer className="grid md:grid-cols-2 gap-4">
              {perguntasGuia.map((pergunta, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card p-4 flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-sm">{pergunta}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Objetivo UX */}
        <ScrollReveal>
          <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-2xl mx-auto text-center">
            <p className="text-lg">
              <span className="font-bold text-primary">Objetivo UX:</span>{" "}
              <span className="text-muted-foreground">Estimular percepção crítica desde o primeiro encontro</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#conceitos"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Conceitos Introdutórios</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DinamicaSection;
