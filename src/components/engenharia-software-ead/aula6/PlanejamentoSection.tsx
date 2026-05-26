import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Compass, Users, MessageSquare, Eye, FileQuestion, FileText, Brain, ClipboardList } from "lucide-react";

const fontes = [
  { icon: Users, title: "Sistemas de informação", desc: "Usuários das funcionalidades que o software irá prover." },
  { icon: Brain, title: "Hardware + Software", desc: "Compreender se serve usuário humano ou controle de equipamentos." },
  { icon: Eye, title: "Jogos eletrônicos", desc: "Outros jogos similares que queremos superar no mercado." },
  { icon: FileText, title: "Leis e regulamentações", desc: "Fontes obrigatórias de regras de negócio." },
];

const tecnicasGerais = [
  { nome: "Reunião", icon: Users },
  { nome: "Entrevista", icon: MessageSquare },
  { nome: "Observação", icon: Eye },
  { nome: "Questionário", icon: FileQuestion },
  { nome: "JAD (Joint Application Design)", icon: Users },
  { nome: "Brainstorming", icon: Brain },
  { nome: "Análise de sistemas anteriores", icon: ClipboardList },
  { nome: "Análise de documentos", icon: FileText },
  { nome: "Grupo focal", icon: Users },
];

const PlanejamentoSection = () => (
  <section id="planejamento" className="py-20 px-6 bg-card/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
          <Compass className="w-4 h-4" /> Seção 1
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Planejamento da Aplicação das Técnicas
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A missão da elicitação é descobrir um conjunto de requisitos compreendido por todos e pronto para as próximas etapas —
          seja em <strong className="text-rose-400">abordagem ágil (Scrum)</strong> ou <strong className="text-rose-400">tradicional</strong>.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6">🔎 Fontes de Informação por Tipo de Software</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fontes.map((f, i) => (
            <Card key={i} className="bg-card/50 border-border hover:border-rose-500/30 transition-colors">
              <CardContent className="p-5">
                <f.icon className="w-6 h-6 text-rose-400 mb-3" />
                <h4 className="font-bold text-foreground mb-1">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6">🧰 Técnicas Disponíveis</h3>
        <p className="text-muted-foreground mb-6">
          Podem ser aplicadas isoladamente ou combinadas. Esta aula aprofunda <strong className="text-rose-400">Questionário, Entrevista e Observação</strong>.
        </p>
        <div className="flex flex-wrap gap-3">
          {tecnicasGerais.map((t, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground"
            >
              <t.icon className="w-4 h-4 text-rose-400" /> {t.nome}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Comparativo (Quadro 1) */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-foreground mb-6">📊 Quadro 1 — Comparação das Técnicas</h3>
        <Card className="bg-card/50 border-border overflow-hidden">
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-rose-500/10 border-b border-border">
                  <th className="text-left p-3 font-bold text-foreground">Critério</th>
                  <th className="p-3 font-bold text-rose-400">Entrevista</th>
                  <th className="p-3 font-bold text-rose-400">JAD</th>
                  <th className="p-3 font-bold text-rose-400">Questionário</th>
                  <th className="p-3 font-bold text-rose-400">Análise de docs</th>
                  <th className="p-3 font-bold text-rose-400">Observação</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Tipo de informação", "Como é / Melhorias / Como será", "Como é / Melhorias / Como será", "Como é / Melhorias", "Como é", "Como é"],
                  ["Profundidade", "Alta", "Alta", "Média", "Baixa", "Baixa"],
                  ["Abrangência", "Baixa", "Média", "Alta", "Alta", "Baixa"],
                  ["Integração", "Baixa", "Alta", "Baixa", "Baixa", "Baixa"],
                  ["Envolvimento do usuário", "Médio", "Alto", "Baixo", "Baixo", "Baixo"],
                  ["Custo", "Médio", "Baixo-médio", "Baixo", "Baixo", "Baixo-médio"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-rose-500/5">
                    <td className="p-3 font-semibold text-foreground">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="p-3 text-center">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
        <p className="text-xs text-muted-foreground mt-3 italic">Fonte: Adaptado de Dennis, Wixon e Roth (2012).</p>
      </motion.div>
    </div>
  </section>
);

export default PlanejamentoSection;
