import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const criterios = [
  "Facilidade de aprendizado",
  "Facilidade de uso",
  "Eficiência de uso e produtividade",
  "Satisfação do usuário",
  "Flexibilidade",
  "Utilidade",
  "Segurança no uso",
];

const tabelaMedidas = [
  { fator: "Facilidade de uso", metodo: "Número de erros cometidos", pior: "Mais de 10 erros", almejado: "No máximo 3 erros", melhor: "Nenhum erro" },
  { fator: "Facilidade de uso", metodo: "% vezes no sistema de ajuda", pior: "Para cada tarefa, ao menos 1 vez", almejado: "Apenas na 1ª tarefa complexa", melhor: "Nunca" },
  { fator: "Eficiência (criar aviso)", metodo: "Tempo gasto para criar", pior: "5 min", almejado: "40 segundos", melhor: "20 segundos" },
  { fator: "Eficiência (encontrar)", metodo: "Tempo gasto para encontrar", pior: "Não encontrar", almejado: "30 segundos", melhor: "10 segundos" },
];

const UsabilidadeSection = () => (
  <section id="usabilidade" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            📏 Testes de <span className="text-amber-400">Usabilidade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Medir <strong className="text-amber-400">quantitativamente</strong> cada aspecto de usabilidade — com limites mínimos, almejados e máximos.
          </p>
        </div>
      </ScrollReveal>

      {/* Critérios */}
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Gauge className="w-5 h-5 text-amber-400" /> Aspectos de Usabilidade Medidos
        </h3>
        <div className="flex flex-wrap gap-3 mb-12">
          {criterios.map((c, i) => (
            <motion.span key={i} whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-400 font-medium">
              {c}
            </motion.span>
          ))}
        </div>
      </ScrollReveal>

      {/* Tabela de Medidas - Exemplo Projeto Oré */}
      <ScrollReveal animation="fadeUp" delay={0.2}>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-amber-400" /> Exemplo Real: Projeto Oré — Quadro de Avisos
        </h3>
        <Card className="bg-card/50 border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-500/10 border-b border-border">
                    <th className="text-left p-4 text-amber-400 font-bold">Fator</th>
                    <th className="text-left p-4 text-amber-400 font-bold">Método de Medição</th>
                    <th className="text-center p-4 text-red-400 font-bold">Pior Caso</th>
                    <th className="text-center p-4 text-foreground font-bold">Almejado</th>
                    <th className="text-center p-4 text-emerald-400 font-bold">Melhor Caso</th>
                  </tr>
                </thead>
                <tbody>
                  {tabelaMedidas.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{row.fator}</td>
                      <td className="p-4 text-muted-foreground">{row.metodo}</td>
                      <td className="p-4 text-center text-red-400 text-xs">{row.pior}</td>
                      <td className="p-4 text-center text-foreground text-xs font-medium">{row.almejado}</td>
                      <td className="p-4 text-center text-emerald-400 text-xs">{row.melhor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  </section>
);

export default UsabilidadeSection;
