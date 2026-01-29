import { motion } from "framer-motion";
import { FlaskConical, Users, AlertTriangle, Layers } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const MetodologiaSection = () => {
  const vieses = [
    {
      nome: "Viés do Moderador",
      desc: "Influência não intencional sobre o participante através de expressões ou comentários"
    },
    {
      nome: "Efeito Hawthorne",
      desc: "Alteração de comportamento do participante por saber que está sendo observado"
    },
    {
      nome: "Viés de Seleção",
      desc: "Amostra não representativa da população-alvo do sistema"
    },
    {
      nome: "Viés de Confirmação",
      desc: "Tendência a interpretar dados conforme expectativas prévias do pesquisador"
    }
  ];

  return (
    <section id="Metodologia" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              <FlaskConical className="w-4 h-4" />
              <span className="text-sm font-medium">Aspectos Metodológicos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rigor Científico
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Triangulação */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">Triangulação Metodológica</h3>
              <p className="text-muted-foreground text-sm">
                A combinação de múltiplos métodos de coleta e análise fortalece a validade dos achados. 
                Recomenda-se integrar abordagens quantitativas e qualitativas para uma compreensão mais completa.
              </p>
            </div>
          </ScrollReveal>

          {/* Dimensionamento */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">Dimensionamento Amostral</h3>
              <p className="text-muted-foreground text-sm mb-4">
                O número de participantes depende dos objetivos. Nielsen (2000) argumenta que 
                <strong className="text-foreground"> 5 usuários identificam ~85% dos problemas</strong> em testes qualitativos.
              </p>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-xs text-foreground">
                  <strong>Recomendação:</strong> Para estudos exploratórios, inicie com 5-8 participantes. 
                  Avalie os resultados e recrute mais se necessário (amostragem iterativa até saturação teórica).
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Vieses */}
          <ScrollReveal delay={0.3}>
            <div className="glass-card p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">Controle de Vieses</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Diversos vieses podem comprometer a validade dos resultados. O pesquisador deve implementar estratégias de mitigação:
              </p>
              <ul className="space-y-2">
                {vieses.map((viés, i) => (
                  <li key={i} className="text-xs">
                    <span className="font-medium text-foreground">{viés.nome}:</span>{" "}
                    <span className="text-muted-foreground">{viés.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Fluxo do Experimento */}
        <ScrollReveal delay={0.4}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Fluxo de Experimento de Software
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                "Definir Hipótese",
                "Selecionar Método",
                "Recrutar Participantes",
                "Piloto",
                "Coleta de Dados",
                "Análise",
                "Relatório"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-medium text-sm">
                    {index + 1}. {step}
                  </div>
                  {index < 6 && (
                    <span className="text-muted-foreground hidden md:block">→</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MetodologiaSection;
