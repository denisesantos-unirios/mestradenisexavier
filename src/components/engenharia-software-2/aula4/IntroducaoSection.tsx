import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, CheckCircle2, XCircle, Info } from "lucide-react";

const chaos = [
  { label: "Sucesso", value: 16, color: "from-green-500 to-emerald-500", icon: CheckCircle2, desc: "Entregues no prazo, custo e escopo" },
  { label: "Problemáticos", value: 53, color: "from-yellow-500 to-orange-500", icon: AlertTriangle, desc: "Escopo reduzido, atrasos e estouro de custo" },
  { label: "Fracasso", value: 31, color: "from-red-500 to-rose-500", icon: XCircle, desc: "Cancelados durante o desenvolvimento" }
];

const fatoresCriticos = [
  { fator: "Requisitos Incompletos", pct: 13.1 },
  { fator: "Falta de Envolvimento do Usuário", pct: 12.4 },
  { fator: "Falta de Recursos", pct: 10.6 },
  { fator: "Expectativas Irreais", pct: 9.9 },
  { fator: "Falta de Apoio Executivo", pct: 9.3 },
  { fator: "Mudança de Requisitos e Especificações", pct: 8.7 },
  { fator: "Falta de Planejamento", pct: 8.1 },
  { fator: "Sistema não mais necessário", pct: 7.5 }
];

const IntroducaoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 mb-4">
            <Info className="w-4 h-4" />
            <span className="text-sm font-medium">Contexto & Motivação</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Engenharia de Requisitos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desenvolver software é uma atividade complexa. Não existe solução única — envolve <strong className="text-foreground">pessoas</strong>, <strong className="text-foreground">processos</strong> e <strong className="text-foreground">tecnologia</strong>.
          </p>
        </motion.div>

        {/* Definição rápida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <h3 className="text-xl font-bold mb-4">Engenharia de Software</h3>
          <p className="text-muted-foreground mb-4">
            Aplicação de uma abordagem <strong className="text-foreground">sistemática</strong>, <strong className="text-foreground">disciplinada</strong> e <strong className="text-foreground">quantificável</strong> no desenvolvimento, operação e manutenção de software.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Sistemática", d: "Existe um processo definido com atividades a serem executadas." },
              { t: "Disciplinada", d: "Os processos definidos são de fato seguidos pela equipe." },
              { t: "Quantificável", d: "Medições reais embasam decisões, não achismos." }
            ].map((i, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                <p className="font-semibold text-orange-300 mb-1">{i.t}</p>
                <p className="text-sm text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Chaos Report */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingDown className="w-5 h-5 text-orange-400" />
            <h3 className="text-xl font-bold">Distribuição da Conclusão de Projetos de Software</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {chaos.map((c, idx) => (
              <div key={idx} className="glass-card p-6 text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}>
                  <c.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-1">{c.value}%</p>
                <p className="font-semibold mb-2">{c.label}</p>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fatores críticos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            Fatores Críticos para o Fracasso
          </h3>
          <div className="space-y-3">
            {fatoresCriticos.map((f, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{f.fator}</span>
                    <span className="text-sm text-orange-400 font-bold">{f.pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-background/50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(f.pct / 13.1) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.05 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">
            💡 Observação: os <strong>três primeiros fatores</strong> estão diretamente ligados a problemas de <strong className="text-orange-300">Engenharia de Requisitos</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroducaoSection;
