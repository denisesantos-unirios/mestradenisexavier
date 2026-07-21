import { motion } from "framer-motion";
import { Workflow, ClipboardList, GitBranch, ArrowRight } from "lucide-react";

const producao = [
  { t: "Levantamento", d: "Obtenção dos requisitos junto a clientes e usuários finais." },
  { t: "Registro", d: "Documentação clara e não ambígua dos requisitos identificados." },
  { t: "Validação", d: "Confirmação com stakeholders de que os requisitos refletem a necessidade." },
  { t: "Verificação", d: "Checagem de consistência, completude e viabilidade técnica." }
];

const gerencia = [
  { t: "Controle de Mudanças", d: "Registro e avaliação de impacto de cada solicitação de alteração." },
  { t: "Gerência de Configuração", d: "Versionamento e baselines dos artefatos de requisitos." },
  { t: "Rastreabilidade", d: "Ligação requisito → projeto → código → teste." },
  { t: "Qualidade dos Requisitos", d: "Monitoramento de métricas e revisões contínuas." }
];

const processoER = [
  "Elicitação dos Requisitos",
  "Análise e Negociação",
  "Documentação",
  "Validação",
  "Gerenciamento"
];

const ProcessoERSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-orange-500/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 mb-4">
            <Workflow className="w-4 h-4" />
            <span className="text-sm font-medium">Processo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Engenharia de Requisitos: Produção + Gerência
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Termo usado para descrever atividades de <strong className="text-foreground">produção</strong> e <strong className="text-foreground">gerência</strong> de requisitos — ambos devem ser considerados em conjunto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Produção de Requisitos</h3>
            </div>
            <div className="space-y-3">
              {producao.map((p, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-background/50 border-l-4 border-orange-400">
                  <p className="font-semibold text-foreground">{p.t}</p>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Gerência de Requisitos</h3>
            </div>
            <div className="space-y-3">
              {gerencia.map((g, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-background/50 border-l-4 border-blue-400">
                  <p className="font-semibold text-foreground">{g.t}</p>
                  <p className="text-sm text-muted-foreground">{g.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fluxo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Fluxo do Processo de Engenharia de Requisitos</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {processoER.map((etapa, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/40 text-foreground font-medium text-sm">
                  {etapa}
                </div>
                {idx < processoER.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-orange-400" />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6 italic">
            🎯 Objetivo: <strong>registrar</strong>, <strong>acompanhar</strong> e <strong>manter</strong> planos, artefatos e atividades consistentes com os requisitos alocados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessoERSection;
