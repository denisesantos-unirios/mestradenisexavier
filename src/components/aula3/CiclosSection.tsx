import { motion } from "framer-motion";
import { Waves, Repeat, Layers, Blocks, RefreshCw, ArrowDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const cascata = [
  { t: "Análise", d: "Levantamento e especificação dos requisitos com o cliente." },
  { t: "Projeto", d: "Arquitetura, modelagem, estimativas e cronograma." },
  { t: "Codificação", d: "Implementação do que foi projetado." },
  { t: "Testes", d: "Validação sistemática do produto construído." },
  { t: "Implantação", d: "Entrega, treinamento, suporte e manutenção." },
];

const ciclos = [
  {
    icon: Waves,
    nome: "Cascata (Sequencial Linear)",
    quando: "Escopo estável, domínio conhecido, forte exigência documental (ex.: sistemas regulatórios).",
    forte: "Previsibilidade, documentação e contratos bem definidos.",
    fraco: "Cliente só vê o produto no fim; mudança tardia custa caro.",
    color: "border-blue-500/30 bg-blue-500/5 text-blue-600",
  },
  {
    icon: Blocks,
    nome: "Incremental",
    quando: "Quando é possível entregar o sistema em partes utilizáveis.",
    forte: "Valor entregue cedo; cada incremento agrega funcionalidade real.",
    fraco: "Exige boa arquitetura inicial para os incrementos se encaixarem.",
    color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600",
  },
  {
    icon: Repeat,
    nome: "Iterativo",
    quando: "Requisitos pouco claros — o produto é refinado a cada ciclo.",
    forte: "Aprendizado contínuo, refinamento do mesmo produto a cada volta.",
    fraco: "Sem controle de escopo, pode iterar indefinidamente.",
    color: "border-amber-500/30 bg-amber-500/5 text-amber-600",
  },
  {
    icon: Layers,
    nome: "Prototipação",
    quando: "Cliente não sabe explicar o que quer, ou a interface é o ponto crítico.",
    forte: "Valida entendimento rapidamente com baixo custo.",
    fraco: "Risco de o protótipo virar produto (dívida técnica).",
    color: "border-fuchsia-500/30 bg-fuchsia-500/5 text-fuchsia-600",
  },
  {
    icon: RefreshCw,
    nome: "Espiral",
    quando: "Projetos grandes, caros e com alto risco.",
    forte: "Análise de risco explícita em cada volta da espiral.",
    fraco: "Complexo e caro de gerenciar; exige maturidade da equipe.",
    color: "border-purple-500/30 bg-purple-500/5 text-purple-600",
  },
];

const comparativo = [
  { a: "Planejamento", trad: "Todo definido no início", agil: "Contínuo e adaptativo" },
  { a: "Entrega", trad: "Única, no final", agil: "Incrementos frequentes" },
  { a: "Mudança", trad: "Tratada como desvio/custo", agil: "Bem-vinda, mesmo tardia" },
  { a: "Cliente", trad: "Participa no início e no fim", agil: "Participa o tempo todo" },
  { a: "Documentação", trad: "Extensa e antecipada", agil: "Suficiente e viva" },
  { a: "Medida de progresso", trad: "Fases concluídas", agil: "Software funcionando" },
  { a: "Risco", trad: "Descoberto tarde", agil: "Exposto cedo, a cada ciclo" },
];

const CiclosSection = () => (
  <section id="ciclos" className="py-20 px-6 relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">Parte 0 • Antes do Ágil</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ciclos de Desenvolvimento</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O Ágil não nasceu do nada: ele responde às limitações dos modelos de ciclo de vida
            tradicionais. Entender esses modelos é entender <strong>por que</strong> o Ágil existe.
          </p>
        </div>
      </ScrollReveal>

      {/* Cascata em degraus */}
      <ScrollReveal animation="fadeUp">
        <h3 className="text-2xl font-bold mb-6">O modelo Cascata passo a passo</h3>
        <div className="space-y-3 mb-6">
          {cascata.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
              style={{ marginLeft: `${i * 36}px` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 p-4 rounded-xl border border-border bg-card">
                <h4 className="font-bold text-foreground">{e.t}</h4>
                <p className="text-sm text-muted-foreground">{e.d}</p>
              </div>
              {i < cascata.length - 1 && <ArrowDown className="w-5 h-5 text-primary mt-3" />}
            </motion.div>
          ))}
        </div>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-sm mb-16">
          <strong>⚠️ Limitação clássica:</strong> um erro de requisito descoberto na fase de testes pode
          custar até <strong>100x</strong> mais do que se fosse detectado na análise.
        </div>
      </ScrollReveal>

      {/* Cards dos ciclos */}
      <ScrollReveal animation="fadeUp">
        <h3 className="text-2xl font-bold mb-6">Principais modelos de ciclo de vida</h3>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {ciclos.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className={`p-6 rounded-2xl border ${c.color} h-full`}
          >
            <c.icon className="w-7 h-7 mb-3" />
            <h4 className="font-bold text-foreground mb-3">{c.nome}</h4>
            <p className="text-sm text-muted-foreground mb-2">
              <strong className="text-foreground">Quando usar:</strong> {c.quando}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <strong className="text-foreground">Ponto forte:</strong> {c.forte}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Cuidado:</strong> {c.fraco}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tabela comparativa */}
      <ScrollReveal animation="fadeUp">
        <h3 className="text-2xl font-bold mb-6">Tradicional x Ágil</h3>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-bold">Aspecto</th>
                <th className="text-left p-4 font-bold">Abordagem Tradicional</th>
                <th className="text-left p-4 font-bold">Abordagem Ágil</th>
              </tr>
            </thead>
            <tbody>
              {comparativo.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 font-semibold text-foreground">{r.a}</td>
                  <td className="p-4 text-muted-foreground">{r.trad}</td>
                  <td className="p-4 text-muted-foreground">{r.agil}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          💡 <strong>Não existe modelo "melhor":</strong> existe o modelo adequado ao nível de
          incerteza, ao risco e à disponibilidade do cliente.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default CiclosSection;
