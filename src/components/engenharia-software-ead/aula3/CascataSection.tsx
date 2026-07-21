import { motion } from "framer-motion";
import { ArrowDown, Waves } from "lucide-react";

const etapas = [
  { t: "Análise", d: "Levantamento de requisitos e necessidades do cliente." },
  { t: "Projeto", d: "Planejamento: estimativas, cronograma e arquitetura." },
  { t: "Codificação", d: "Desenvolvimento do código conforme a modelagem." },
  { t: "Testes", d: "Validação sistemática do que foi construído." },
  { t: "Implementação", d: "Implantação, entrega, suporte e feedback." },
];

const CascataSection = () => (
  <section id="cascata" className="py-24 relative bg-muted/20">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-sm font-medium mb-6">
          <Waves className="w-4 h-4" /> Modelo Tradicional
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Modelo Cascata (Sequencial Linear)</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Executado de forma <strong>sistemática e sequencial</strong>: cada etapa só começa quando a anterior é concluída.
          Setas de retorno indicam retrabalho quando falhas são descobertas tarde.
        </p>
      </motion.div>
      <div className="space-y-3">
        {etapas.map((e, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4" style={{ marginLeft: `${i * 40}px` }}>
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shrink-0">{i + 1}</div>
            <div className="flex-1 p-4 rounded-xl border border-border bg-card">
              <h3 className="font-bold">{e.t}</h3>
              <p className="text-sm text-muted-foreground">{e.d}</p>
            </div>
            {i < etapas.length - 1 && <ArrowDown className="w-5 h-5 text-blue-500 mt-3" />}
          </motion.div>
        ))}
      </div>
      <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-sm">
        <strong>⚠️ Limitação:</strong> mudanças de requisitos são caras — o cliente só vê o produto ao final. Adequado a projetos com escopo estável.
      </div>
    </div>
  </section>
);

export default CascataSection;
