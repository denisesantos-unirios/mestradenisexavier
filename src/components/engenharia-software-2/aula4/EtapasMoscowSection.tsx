import { motion } from "framer-motion";
import { ListOrdered, Target } from "lucide-react";

const etapas = [
  {
    n: "1",
    t: "Elicitação",
    d: "Descobrir necessidades com entrevistas, observação, workshops, questionários e análise de documentos.",
    saida: "Notas brutas, transcrições, lista inicial de necessidades",
  },
  {
    n: "2",
    t: "Análise e Negociação",
    d: "Resolver conflitos, remover ambiguidades e duplicidades, avaliar viabilidade e negociar escopo.",
    saida: "Lista consolidada, matriz de prioridades, conflitos resolvidos",
  },
  {
    n: "3",
    t: "Documentação / Especificação",
    d: "Registrar requisitos em formato padronizado (RF/RNF, user stories, casos de uso).",
    saida: "Documento de Requisitos (ERS), backlog priorizado",
  },
  {
    n: "4",
    t: "Validação e Verificação",
    d: "Validar com o cliente (é o certo?) e verificar internamente (está correto, completo, testável?).",
    saida: "Requisitos aprovados (baseline), atas de revisão",
  },
  {
    n: "5",
    t: "Gerenciamento",
    d: "Controlar mudanças, versionar, manter rastreabilidade requisito → design → código → teste.",
    saida: "Matriz de rastreabilidade, log de mudanças",
  },
];

const moscow = [
  {
    sigla: "M",
    nome: "Must have",
    desc: "Obrigatório. Sem ele o sistema não entra em produção.",
    ex: "RF07: Registrar nova locação",
    cor: "border-red-500 bg-red-500/10 text-red-500",
  },
  {
    sigla: "S",
    nome: "Should have",
    desc: "Importante, mas há solução de contorno temporária.",
    ex: "RF12: Relatório de faturamento mensal",
    cor: "border-orange-500 bg-orange-500/10 text-orange-500",
  },
  {
    sigla: "C",
    nome: "Could have",
    desc: "Desejável. Entra se houver tempo e capacidade na sprint.",
    ex: "RF13: Exportar relatório em Excel",
    cor: "border-blue-500 bg-blue-500/10 text-blue-500",
  },
  {
    sigla: "W",
    nome: "Won't have (now)",
    desc: "Acordado que fica fora desta entrega — mas registrado.",
    ex: "RF20: App mobile para o cliente final",
    cor: "border-slate-400 bg-slate-400/10 text-muted-foreground",
  },
];

const EtapasMoscowSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-500 mb-4">
            <ListOrdered className="w-4 h-4" />
            <span className="text-sm font-medium">Roteiro</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Engenharia de Requisitos — 5 Etapas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada etapa gera artefatos concretos. Se não há saída, a etapa não foi feita.
          </p>
        </motion.div>

        <div className="space-y-4 mb-20">
          {etapas.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="glass-card p-6 flex gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold flex items-center justify-center flex-shrink-0">
                {e.n}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{e.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{e.d}</p>
                <p className="text-xs mt-3 inline-block px-3 py-1.5 rounded-md bg-background/60 border border-border text-foreground">
                  <span className="font-semibold">Saída:</span> {e.saida}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-500 mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Priorização</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            📊 Priorização com MoSCoW
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Regra prática: os itens <strong>Must</strong> não devem passar de ~60% do esforço da entrega.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {moscow.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className={`glass-card p-6 border-t-4 ${m.cor.split(" ")[0]}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black mb-4 ${m.cor}`}>
                {m.sigla}
              </div>
              <h3 className="font-bold text-foreground">{m.nome}</h3>
              <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
              <p className="text-xs text-muted-foreground mt-3 italic">{m.ex}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EtapasMoscowSection;
