import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Layers, Building2, AlertTriangle, CheckCircle, GitMerge } from "lucide-react";

const dificuldades = [
  "Gerentes tradicionais sem experiência com ágil podem recusar o risco de uma nova metodologia",
  "Grandes organizações têm padrões burocráticos incompatíveis com métodos ágeis",
  "Métodos ágeis funcionam melhor em times com habilidade elevada — staff diversificado dificulta",
  "Resistência cultural em organizações com longo histórico tradicional",
];

const modelosHibridos = [
  { titulo: "Scrum + XP", desc: "Papéis, artefatos e cerimônias do Scrum + práticas técnicas do XP (TDD, refactoring, pair programming)." },
  { titulo: "ERP com FDD + Scrum + XP", desc: "FDD para escopo, papéis e cerimônias; Scrum para artefatos; XP para práticas de desenvolvimento." },
  { titulo: "Suporte com Kanban + Scrum", desc: "Kanban para fluxo de chamados + papéis Scrum + dailies e retrospectivas para melhoria contínua." },
];

const ImpactoSection = () => (
  <section id="impacto" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 mb-4">
          <TrendingUp className="w-4 h-4" /> <span className="text-sm font-medium">Parte 3 • Impacto</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O Manifesto e os <span className="text-violet-400">Processos de Software</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Como o Manifesto transformou (e segue transformando) a forma como software é construído no mundo todo.
        </p>
      </motion.div>

      {/* Definição */}
      <Card className="bg-card/50 border-border mb-10">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-violet-400" /> O que é "Processo de Desenvolvimento de Software"?
          </h3>
          <p className="text-sm text-muted-foreground italic">
            "É a forma como o software é produzido, incluindo a metodologia, seu modelo de ciclo de vida, técnicas subjacentes, ferramentas usadas e as pessoas que o estão criando." — <strong>Schach (2009)</strong>
          </p>
        </CardContent>
      </Card>

      {/* Convergência */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">⚖️ Da disputa ao consenso</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-5">
              <h4 className="font-bold text-destructive mb-2">📅 Pós-2001</h4>
              <p className="text-sm text-muted-foreground">Antagonismo entre defensores do Manifesto e dos processos tradicionais. Debates calorosos.</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-500/5 border-amber-500/20">
            <CardContent className="p-5">
              <h4 className="font-bold text-amber-400 mb-2">🔄 Evolução</h4>
              <p className="text-sm text-muted-foreground">Ambos os lados enxergam o que cada abordagem tem de melhor.</p>
            </CardContent>
          </Card>
          <Card className="bg-violet-500/5 border-violet-500/20">
            <CardContent className="p-5">
              <h4 className="font-bold text-violet-400 mb-2">✅ Hoje</h4>
              <p className="text-sm text-muted-foreground">Modelos mistos: equipes tradicionais com práticas ágeis e equipes ágeis com práticas tradicionais.</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Modelo Incremental */}
      <Card className="bg-card/50 border-border mb-10">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-violet-400" /> Processo Incremental: o tradicional mais próximo do ágil
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Conforme <strong>Pressman e Maxim (2016)</strong>, o modelo incremental disponibiliza uma série de versões (incrementos) que progressivamente entregam mais funcionalidades ao usuário.
          </p>

          <div className="overflow-x-auto">
            <div className="flex gap-3 min-w-max p-4 bg-background/30 rounded-lg">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex items-center gap-2">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">Incremento {n}</div>
                    <div className="flex flex-col gap-1">
                      {["Comunicação", "Planejamento", "Modelagem", "Construção", "Entrega"].map((etapa, i) => (
                        <div key={i} className="px-3 py-1 text-xs bg-violet-500/10 border border-violet-500/20 rounded text-foreground whitespace-nowrap">{etapa}</div>
                      ))}
                    </div>
                    <div className="text-xs text-violet-400 mt-2 font-mono">v{n}.0</div>
                  </div>
                  {n < 4 && <div className="text-violet-400 text-2xl">→</div>}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic text-center">
            Todas as etapas genéricas se repetem N vezes. As fases de comunicação e planejamento do próximo incremento iniciam durante a construção do anterior.
          </p>

          <div className="mt-4 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
            <p className="text-sm text-foreground">
              💭 <strong className="text-amber-400">Sommerville (2018):</strong> é impossível usar uma abordagem totalmente incremental para requisitos. 
              É necessário trabalho inicial sobre o escopo geral para identificar partes que serão desenvolvidas em momentos diferentes.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Dificuldades */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-violet-400" /> Por que ágil é difícil em grandes organizações?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              É mais fácil implementar ágil em pequenas empresas e equipes. Sommerville (2018) destaca obstáculos em grandes organizações:
            </p>
            <div className="space-y-2">
              {dificuldades.map((d, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/40">
                  <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Modelos Híbridos */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
          <GitMerge className="w-6 h-6 text-violet-400" /> Modelos Híbridos na prática
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {modelosHibridos.map((m, i) => (
            <Card key={i} className="bg-card/50 border-border hover:border-violet-500/40 transition-colors">
              <CardContent className="p-5">
                <CheckCircle className="w-6 h-6 text-violet-400 mb-3" />
                <h4 className="font-bold text-foreground mb-2">{m.titulo}</h4>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Referências */}
      <Card className="bg-card/30 border-border">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-3">📚 Referências</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• BECK, K. <em>et al.</em> Manifesto para desenvolvimento ágil de software. 2001.</li>
            <li>• HIGHSMITH, J. History: the agile manifesto. 2001.</li>
            <li>• PRESSMAN, R. S.; MAXIM, B. R. <em>Engenharia de software: uma abordagem profissional</em>. 8. ed. Porto Alegre: AMGH, 2016.</li>
            <li>• PRIKLADNICKI, R.; WILLI, R.; MILANI, F. (org.). <em>Métodos ágeis para gerenciamento de software</em>. Porto Alegre: Bookman, 2014.</li>
            <li>• SCHACH, S. R. <em>Engenharia de software: paradigmas clássico e orientado a objetos</em>. 7. ed. Porto Alegre: AMGH, 2009.</li>
            <li>• SOMMERVILLE, I. <em>Engenharia de software</em>. 10. ed. São Paulo: Pearson, 2018.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ImpactoSection;
