import { motion } from "framer-motion";
import { Layers, ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const niveis = [
  {
    titulo: "Modelo Conceitual (MCD)",
    cor: "teal",
    emoji: "🏠",
    analogia: "Planta baixa de uma casa",
    descricao: "Representação fiel do ambiente observado, independente de tecnologia. Foco apenas no aspecto conceitual.",
    artefato: "Diagrama de Entidade-Relacionamento (DER)",
    detalhes: "Representa as entidades, atributos e relacionamentos de forma independente de qualquer SGBD. É de fácil entendimento para o usuário final.",
    bgClass: "from-teal-500/10 to-teal-500/5 border-teal-500/30",
    textClass: "text-teal-400",
  },
  {
    titulo: "Modelo Lógico (MLD)",
    cor: "cyan",
    emoji: "📐",
    analogia: "Projeto detalhado com materiais e medidas",
    descricao: "Os objetos e relacionamentos seguem regras de implementação e limitações de algum tipo de tecnologia.",
    artefato: "Diagrama Lógico de Banco de Dados",
    detalhes: "Define chaves primárias, estrangeiras e restrições de integridade. Independe dos meios de armazenamento físico.",
    bgClass: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/30",
    textClass: "text-cyan-400",
  },
  {
    titulo: "Modelo Físico (MFD)",
    cor: "emerald",
    emoji: "🏗️",
    analogia: "A construção real com tijolos e cimento",
    descricao: "Representação com foco no nível físico de implementação, incluindo tabelas, índices e tipos de dados.",
    artefato: "Script SQL / Diagrama de Classes",
    detalhes: "Depende especificamente de cada SGBD escolhido. Inclui detalhes de armazenamento e estruturas físicas.",
    bgClass: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/30",
    textClass: "text-emerald-400",
  },
];

const NiveisModelagemSection = () => {
  return (
    <section id="niveis" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 mb-6">
              <Layers className="w-4 h-4" />
              <span className="text-sm font-medium">Níveis de Modelagem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Do Conceitual ao Físico
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A modelagem de dados passa por três níveis de abstração, do mais abstrato ao mais concreto.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {niveis.map((nivel, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={0.2 + i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`bg-gradient-to-r ${nivel.bgClass} rounded-2xl p-8 border`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{nivel.emoji}</span>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${nivel.textClass} mb-1`}>{nivel.titulo}</h3>
                    <p className="text-sm text-muted-foreground italic">Analogia: {nivel.analogia}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{nivel.descricao}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-card/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Artefato Gerado</p>
                    <p className={`font-bold ${nivel.textClass}`}>{nivel.artefato}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Detalhes</p>
                    <p className="text-sm text-muted-foreground">{nivel.detalhes}</p>
                  </div>
                </div>
              </motion.div>
              {i < niveis.length - 1 && (
                <div className="flex justify-center my-2">
                  <ArrowDown className="w-6 h-6 text-muted-foreground/40" />
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Metodologia de Projeto */}
        <ScrollReveal animation="fadeUp" delay={0.6}>
          <div className="mt-12 bg-card/90 border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">📋 Metodologia de Projeto de Banco de Dados</h3>
            <div className="flex flex-wrap gap-3">
              {["Mini-Mundo → Requisitos", "MCD → DER", "MLD → Diagrama Lógico", "MFD → Script SQL"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">{item}</span>
                  {i < 3 && <span className="text-muted-foreground">→</span>}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NiveisModelagemSection;
