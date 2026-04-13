import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, UserCheck, FileText, Play, BarChart3, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const etapasPreparacao = [
  { icon: Monitor, titulo: "1. Objetivo do Teste", desc: "Determinar critérios relevantes e pontos críticos: decisões de design, tarefas frequentes ou estratégicas para sucesso comercial." },
  { icon: FileText, titulo: "2. Seleção de Tarefas", desc: "Tarefas típicas e realistas. Medir tempo de execução e motivação. Devem cobrir os pontos críticos identificados." },
  { icon: UserCheck, titulo: "3. Seleção de Usuários", desc: "Usuários representando os perfis do design. Recomendado: 5 usuários. Se 2+ perfis, pegar 3 de cada grupo." },
  { icon: FileText, titulo: "4. Material para o Teste", desc: "Questionário pré-teste, scripts de apresentação, TCLE, descrição das tarefas, roteiro de entrevista pós-teste." },
];

const etapasExecucao = [
  "Deixar usuário à vontade",
  "Leitura dos scripts de apresentação",
  "Assinatura do documento de consentimento (TCLE)",
  "Questionário pré-teste",
  "Execução das tarefas (observador anota sem interferir)",
  "Observador só responde perguntas NÃO relacionadas ao software testado",
  "Entrevista ou questionário pós-teste",
];

const gravidades = [
  { nivel: "Catastrófico", desc: "Impede que o usuário termine sua tarefa", cor: "text-red-400", bgCor: "bg-red-500/10" },
  { nivel: "Sério", desc: "Atrapalha a execução da tarefa", cor: "text-orange-400", bgCor: "bg-orange-500/10" },
  { nivel: "Cosmético", desc: "Atrasa a execução e/ou irrita usuários", cor: "text-yellow-400", bgCor: "bg-yellow-500/10" },
];

const TesteLaboratorioSection = () => (
  <section id="teste-lab" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🧪 Testes em <span className="text-cyan-400">Laboratório</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O processo completo: preparação, execução e análise de resultados.
          </p>
        </div>
      </ScrollReveal>

      {/* Preparação */}
      <ScrollReveal animation="fadeUp" delay={0.1}>
        <h3 className="text-2xl font-bold text-foreground mb-6">📋 Preparação</h3>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {etapasPreparacao.map((etapa, i) => (
            <motion.div key={i} whileHover={{ y: -3 }}>
              <Card className="h-full bg-card/50 border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10">
                      <etapa.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{etapa.titulo}</h4>
                      <p className="text-sm text-muted-foreground">{etapa.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* Dica Nielsen */}
      <ScrollReveal animation="scale" delay={0.2}>
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-12">
          <h4 className="font-bold text-foreground mb-3">📊 Quantidade de Testes (Jakob Nielsen)</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-background/50 text-center">
              <span className="text-3xl">❌</span>
              <p className="text-sm text-muted-foreground mt-2">Zero testes = não se descobre <strong>nada</strong></p>
            </div>
            <div className="p-4 rounded-xl bg-background/50 text-center">
              <span className="text-3xl">✅</span>
              <p className="text-sm text-muted-foreground mt-2"><strong>3 testes com 5 usuários</strong> é melhor que 1 teste com 15</p>
            </div>
            <div className="p-4 rounded-xl bg-background/50 text-center">
              <span className="text-3xl">🎯</span>
              <p className="text-sm text-muted-foreground mt-2">Quanto mais testes iterativos, <strong>melhor</strong></p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Execução */}
      <ScrollReveal animation="fadeUp" delay={0.3}>
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Play className="w-5 h-5 text-cyan-400" /> Execução do Teste
        </h3>
        <div className="space-y-3 mb-12">
          {etapasExecucao.map((etapa, i) => (
            <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-400 font-bold text-sm">{i + 1}</span>
              </div>
              <p className="text-muted-foreground">{etapa}</p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* Análise e Gravidade */}
      <ScrollReveal animation="fadeUp" delay={0.4}>
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" /> Análise e Classificação de Problemas
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {gravidades.map((g, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }}>
              <Card className={`h-full bg-card/50 border-border`}>
                <CardContent className="p-5 text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${g.bgCor} ${g.cor} text-sm font-bold mb-3`}>
                    <AlertTriangle className="w-4 h-4" />
                    {g.nivel}
                  </div>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TesteLaboratorioSection;
