import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Workflow, Briefcase, Package, BookMarked } from "lucide-react";

const tipos = [
  {
    icon: Workflow,
    cor: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    title: "Requisitos de Processo",
    desc: "Como o produto será desenvolvido. Metodologias, padrões, periodicidade de entregas, tecnologias, certificações exigidas.",
    impacto: "Não fazem parte do produto, mas influenciam como a equipe se organiza e se prepara (treinamento, contratação especializada).",
  },
  {
    icon: Briefcase,
    cor: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    title: "Requisitos de Projeto",
    desc: "Restrições à forma como o projeto é planejado e executado — geralmente prazo e custo.",
    impacto: "Refletem-se no cronograma e/ou orçamento. Em ágil, no planejamento das sprints e alocação de recursos.",
  },
  {
    icon: Package,
    cor: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    title: "Requisitos de Produto",
    desc: "Os que serão efetivamente implementados no software. Base para estimativas, especificações, código e testes.",
    impacto: "Quanto melhor compreendidos, menor o retrabalho. São o foco principal da elicitação.",
  },
];

const atributos = [
  { nome: "Estabilidade", def: "Maturidade da especificação / chance de mudar.", aval: "Alta, média, baixa" },
  { nome: "Impacto na arquitetura", def: "Quão crítico é para a estrutura da aplicação. Difícil retificar depois.", aval: "Alto, médio, baixo" },
  { nome: "Prioridade", def: "Negócio (valor) × Técnica (viabilidade/precedência).", aval: "Alta/média/baixa OU Mandatório / Altamente desejável / Desejável / Opcional (SWEBOK)" },
  { nome: "Impacto da não implementação", def: "Grau de impacto no negócio se o requisito não for entregue.", aval: "Alto/médio/baixo, valores financeiros, escala numérica" },
  { nome: "Dificuldade", def: "Grau de dificuldade técnica para implementar.", aval: "Alta, média, baixa" },
  { nome: "Risco", def: "Risco para o projeto (ex.: indisponibilidade de especialistas).", aval: "Alto, médio, baixo" },
  { nome: "Situação", def: "Status atual do requisito.", aval: "Identificado → Priorizado → Alocado → Especificado → Implementado → Testado → Homologado → Entregue" },
];

const userStoryDiffs = [
  "Não são especificações detalhadas — são expressões negociáveis de intenção.",
  "Curtas, fáceis de ler, compreensíveis por devs, stakeholders e usuários.",
  "Pequenos incrementos de valor, entregáveis em dias a semanas.",
  "Fáceis de estimar.",
  "Listas reorganizáveis em vez de documentos longos.",
  "Detalhadas no momento em que são requeridas — evitam inventário de requisitos.",
  "Pouca manutenção; podem ser descartadas após a implementação.",
  "Servem como entrada para a documentação, que evolui incrementalmente.",
];

const OrganizacaoSection = () => (
  <section id="organizacao" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
          <Layers className="w-4 h-4" /> Seção 3
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Organização dos Requisitos</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          O entrevistado vê tudo como uma coisa só. Cabe ao analista separar processo, projeto e produto — cada um tratado
          por papéis distintos no ciclo de desenvolvimento.
        </p>
      </motion.div>

      {/* 3 tipos */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {tipos.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className={`h-full ${t.bg} ${t.border}`}>
              <CardContent className="p-6">
                <t.icon className={`w-8 h-8 ${t.cor} mb-3`} />
                <h3 className="font-bold text-foreground text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t.desc}</p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic">{t.impacto}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quadro 2 - Atributos */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">📊 Quadro 2 — Atributos de um Requisito</h3>
        <Card className="bg-card/50 border-border overflow-hidden">
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-rose-500/10 border-b border-border">
                  <th className="text-left p-3 font-bold text-foreground">Atributo</th>
                  <th className="text-left p-3 font-bold text-foreground">Definição</th>
                  <th className="text-left p-3 font-bold text-foreground">Formas de avaliar</th>
                </tr>
              </thead>
              <tbody>
                {atributos.map((a, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-rose-500/5">
                    <td className="p-3 font-semibold text-rose-400 align-top">{a.nome}</td>
                    <td className="p-3 text-muted-foreground align-top">{a.def}</td>
                    <td className="p-3 text-muted-foreground align-top">{a.aval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Combinações de risco */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <Card className="bg-amber-500/5 border-amber-500/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3">🚨 Combinação Crítica</h3>
            <p className="text-muted-foreground">
              <strong className="text-amber-400">Alta prioridade + alto impacto na arquitetura + baixa estabilidade</strong> =
              requisito que exige gestão especial: envolver stakeholders que possam solucionar a instabilidade e definir
              <strong> provas de conceito</strong> com a arquitetura candidata.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* User Stories */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-rose-400" /> Saiba mais — Histórias de Usuário (Leffingwell, 2011)
        </h3>
        <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
          <CardContent className="p-6">
            <p className="text-muted-foreground mb-4">
              Nos métodos ágeis, as <em>user stories</em> expressam <strong className="text-rose-400">intenções do usuário</strong>.
              Diferenças em relação a documentos tradicionais de especificação:
            </p>
            <ul className="space-y-2">
              {userStoryDiffs.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-rose-400 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default OrganizacaoSection;
