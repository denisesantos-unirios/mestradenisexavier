import { motion } from "framer-motion";
import { 
  Workflow, ArrowDown, RotateCcw, Repeat, 
  Rocket, CheckCircle2, AlertCircle 
} from "lucide-react";

const modelos = [
  {
    nome: "Cascata (Waterfall)",
    icon: ArrowDown,
    descricao: "Modelo sequencial onde cada fase deve ser completada antes da próxima iniciar",
    caracteristicas: ["Fases sequenciais", "Documentação extensiva", "Planejamento detalhado"],
    vantagens: ["Simples de entender", "Fácil de gerenciar", "Bem documentado"],
    desvantagens: ["Inflexível a mudanças", "Cliente vê o produto só no final", "Alto risco"],
    quando: "Requisitos bem definidos e estáveis"
  },
  {
    nome: "Incremental",
    icon: Repeat,
    descricao: "O sistema é desenvolvido em incrementos, cada um adicionando novas funcionalidades",
    caracteristicas: ["Entregas parciais", "Feedback contínuo", "Priorização de funcionalidades"],
    vantagens: ["Feedback antecipado", "Menor risco", "Flexível"],
    desvantagens: ["Requer bom planejamento", "Pode gerar retrabalho", "Arquitetura pode degradar"],
    quando: "Quando se pode entregar valor parcial ao cliente"
  },
  {
    nome: "Iterativo",
    icon: RotateCcw,
    descricao: "O sistema é refinado através de múltiplas iterações, melhorando a cada ciclo",
    caracteristicas: ["Refinamento contínuo", "Prototipagem", "Aprendizado iterativo"],
    vantagens: ["Permite experimentação", "Reduz incertezas", "Melhoria contínua"],
    desvantagens: ["Pode parecer sem fim", "Difícil estimar prazo total"],
    quando: "Requisitos não estão claros inicialmente"
  },
  {
    nome: "Ágil",
    icon: Rocket,
    descricao: "Combinação de incremental e iterativo com foco em pessoas, colaboração e resposta a mudanças",
    caracteristicas: ["Sprints curtos", "Auto-organização", "Entrega contínua de valor"],
    vantagens: ["Alta adaptabilidade", "Cliente satisfeito", "Equipe motivada"],
    desvantagens: ["Requer disciplina", "Documentação mínima", "Difícil escalar"],
    quando: "Ambientes dinâmicos com requisitos mutáveis"
  }
];

const ProcessosSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 mb-4">
            <Workflow className="w-4 h-4" />
            <span className="text-sm font-medium">Modelos de Processo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como organizar o desenvolvimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diferentes modelos de processo para diferentes contextos e necessidades
          </p>
        </motion.div>

        <div className="space-y-8">
          {modelos.map((modelo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Header */}
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-4">
                    <modelo.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{modelo.nome}</h3>
                  <p className="text-muted-foreground">{modelo.descricao}</p>
                  
                  <div className="mt-4 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                    <p className="text-sm">
                      <span className="font-semibold text-indigo-400">Quando usar: </span>
                      <span className="text-muted-foreground">{modelo.quando}</span>
                    </p>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="lg:w-2/3 grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-background/50">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      Características
                    </h4>
                    <ul className="space-y-2">
                      {modelo.caracteristicas.map((c, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-background/50">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Vantagens
                    </h4>
                    <ul className="space-y-2">
                      {modelo.vantagens.map((v, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-400">+</span>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-background/50">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      Desvantagens
                    </h4>
                    <ul className="space-y-2">
                      {modelo.desvantagens.map((d, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-amber-400">-</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessosSection;
