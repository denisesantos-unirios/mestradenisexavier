import { motion } from "framer-motion";
import { BarChart3, Calculator, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AnaliseSection = () => {
  const metricasQuant = [
    "Taxa de sucesso de tarefas",
    "Tempo de conclusão",
    "Número de erros",
    "Escores SUS (System Usability Scale)",
    "UMuX (Usability Metric for User Experience)",
    "AttrakDiff"
  ];

  const etapasQual = [
    { etapa: "Transcrição", desc: "Converter gravações em texto" },
    { etapa: "Codificação", desc: "Identificar unidades de significado" },
    { etapa: "Categorização", desc: "Agrupar códigos em categorias" },
    { etapa: "Tematização", desc: "Identificar temas emergentes" },
    { etapa: "Interpretação", desc: "Relacionar com objetivos da pesquisa" }
  ];

  return (
    <section id="Análise" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Análise e Interpretação</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tratamento dos Dados
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Análise Quantitativa */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Análise Quantitativa</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Métricas típicas em experimentos de usabilidade:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {metricasQuant.map((metrica, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center"
                  >
                    <span className="text-xs text-foreground">{metrica}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Técnicas estatísticas variam conforme o design experimental (t-test, ANOVA, etc.)
              </p>
            </div>
          </ScrollReveal>

          {/* Análise Qualitativa */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Análise Qualitativa</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Análise Temática de Braun e Clarke (2006):
              </p>
              <div className="space-y-2">
                {etapasQual.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50"
                  >
                    <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-sm font-medium text-foreground">{item.etapa}</span>
                      <span className="text-xs text-muted-foreground ml-2">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Escalas de Severidade */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 glass-card p-6">
            <h3 className="font-semibold text-foreground text-lg mb-4 text-center">
              Escala de Severidade de Problemas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nivel: 0, label: "Cosmético", color: "bg-gray-500", desc: "Não precisa ser corrigido" },
                { nivel: 1, label: "Pequeno", color: "bg-green-500", desc: "Baixa prioridade" },
                { nivel: 2, label: "Grande", color: "bg-amber-500", desc: "Alta prioridade" },
                { nivel: 3, label: "Catastrófico", color: "bg-red-500", desc: "Imperativo corrigir" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >
                  <div className={`w-8 h-8 rounded-full ${item.color} mx-auto mb-2 flex items-center justify-center text-white font-bold`}>
                    {item.nivel}
                  </div>
                  <p className="font-medium text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnaliseSection;
