import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Lightbulb, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const boasPraticas = [
  "Use verbos no infinitivo para ações: 'Validar dados', 'Salvar pedido'.",
  "Toda decisão (losango) deve ter guardas mutuamente exclusivas e cobrir todos os casos.",
  "Equilibre forks e joins — se forkar 3 fluxos, sincronize os 3 no join.",
  "Use swimlanes quando houver mais de um ator/sistema responsável.",
  "Modele exceções e fluxos alternativos, não só o caminho feliz.",
];

const evitar = [
  "Misturar fluxo de controle com lógica de implementação detalhada.",
  "Decisões sem guardas explícitas (ambiguidade).",
  "Múltiplos nós iniciais no mesmo diagrama.",
  "Diagramas gigantes — quebre em sub-atividades quando passar de ~15 nós.",
  "Confundir Merge (alternativo) com Join (paralelo sincronizado).",
];

const exercicio = [
  "Escolha uma HU do seu projeto PBL.",
  "Liste o ator principal e os atores de apoio.",
  "Identifique pontos de decisão e fluxos alternativos.",
  "Marque atividades que podem ocorrer em paralelo.",
  "Desenhe o diagrama com swimlanes se houver múltiplos atores.",
  "Valide com um colega: ele consegue executar o fluxo só lendo o diagrama?",
];

const PraticaSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
              Aplicação Prática
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Boas Práticas & Exercício
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ScrollReveal animation="fadeUp">
            <Card className="bg-card/50 border-border/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-foreground">Faça</h3>
                </div>
                <ul className="space-y-3">
                  {boasPraticas.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.1}>
            <Card className="bg-card/50 border-border/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-bold text-foreground">Evite</h3>
                </div>
                <ul className="space-y-3">
                  {evitar.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Card className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 border-blue-400/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-bold text-foreground">Atividade Prática (em sala)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                Modele um diagrama de atividades para uma HU do seu projeto PBL — entrega ao final da aula.
              </p>
              <ol className="space-y-2">
                {exercicio.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <span className="font-mono text-blue-400 font-bold">{String(i + 1).padStart(2, "0")}.</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PraticaSection;
