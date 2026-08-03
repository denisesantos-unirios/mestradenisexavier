import { motion } from "framer-motion";
import {
  Search, FileText, CheckCircle2, ShieldCheck, GitBranch,
  Wrench, ArrowRight, Users, ListChecks, Bug, Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const etapas = [
  {
    num: "01",
    titulo: "Levantamento (Elicitação)",
    icon: Search,
    cor: "violet",
    objetivo: "Descobrir necessidades reais junto aos stakeholders e ao domínio.",
    passos: [
      "Mapear stakeholders e seus interesses/poder de decisão",
      "Escolher técnicas: entrevista, observação, análise de documentos, workshop, questionário",
      "Registrar o vocabulário do domínio (glossário)",
      "Separar problema (dor) de solução (ideia de tela)"
    ],
    ferramentas: [
      { nome: "Mapa de Stakeholders", path: "/ferramentas/stakeholders" },
      { nome: "Personas", path: "/ferramentas/personas" },
      { nome: "Jornada do Usuário", path: "/ferramentas/jornada-usuario" }
    ],
    saida: "Notas de entrevista, glossário inicial e lista bruta de necessidades."
  },
  {
    num: "02",
    titulo: "Registro (Documentação)",
    icon: FileText,
    cor: "purple",
    objetivo: "Transformar necessidades em requisitos escritos, rastreáveis e priorizados.",
    passos: [
      "Escrever o Mini-Mundo (contexto, objetivo, atores, processos, regras, limites)",
      "Derivar RF e RNF com identificador único (RF01, RNF01…)",
      "Escrever histórias de usuário no formato Como/Quero/Para + critérios de aceite (Gherkin)",
      "Priorizar com MoSCoW e organizar no backlog"
    ],
    ferramentas: [
      { nome: "Histórias de Usuário", path: "/ferramentas/historias-usuario" },
      { nome: "Backlog", path: "/ferramentas/backlog" },
      { nome: "Casos de Uso", path: "/ferramentas/casos-de-uso" }
    ],
    saida: "Documento do Mini-Mundo + backlog priorizado com critérios de aceite."
  },
  {
    num: "03",
    titulo: "Validação",
    icon: CheckCircle2,
    cor: "fuchsia",
    objetivo: "Confirmar com o cliente que estamos construindo o produto certo.",
    passos: [
      "Revisar o Mini-Mundo com o stakeholder (leitura guiada)",
      "Checar cada requisito pelo INVEST e pela regra: necessário, viável, verificável",
      "Prototipar telas críticas para validar entendimento antes de codificar",
      "Registrar aprovação, dúvidas e itens fora de escopo"
    ],
    ferramentas: [
      { nome: "Wireframes", path: "/ferramentas/wireframes" },
      { nome: "Galeria de Protótipos", path: "/avancado/prototipos" },
      { nome: "Avaliação Heurística", path: "/ferramentas/avaliacao-heuristica" }
    ],
    saida: "Mini-Mundo validado e assinado, com lista de pendências."
  },
  {
    num: "04",
    titulo: "Verificação",
    icon: ShieldCheck,
    cor: "indigo",
    objetivo: "Confirmar que o produto está sendo construído corretamente.",
    passos: [
      "Derivar casos de teste diretamente dos critérios de aceite",
      "Checar consistência: requisitos conflitantes, ambíguos ou duplicados",
      "Verificar cobertura: todo RF tem ao menos um caso de teste?",
      "Registrar defeitos encontrados e reabrir o requisito quando necessário"
    ],
    ferramentas: [
      { nome: "Casos de Teste", path: "/ferramentas/casos-de-teste" },
      { nome: "Registro de Bugs", path: "/ferramentas/bugs" },
      { nome: "Checklist de Acessibilidade", path: "/ferramentas/acessibilidade" }
    ],
    saida: "Matriz requisito × caso de teste e relatório de defeitos."
  },
  {
    num: "05",
    titulo: "Gerência de Requisitos",
    icon: GitBranch,
    cor: "cyan",
    objetivo: "Controlar mudanças, versões e rastreabilidade ao longo do projeto.",
    passos: [
      "Manter matriz de rastreabilidade: necessidade → requisito → história → teste",
      "Controlar versões do Mini-Mundo (v1.0, v1.1…) com histórico de mudanças",
      "Avaliar impacto de cada solicitação de mudança (custo, prazo, risco)",
      "Acompanhar o fluxo no Kanban e o esforço no planejamento de sprint"
    ],
    ferramentas: [
      { nome: "Kanban", path: "/ferramentas/kanban" },
      { nome: "Planejamento de Sprint", path: "/ferramentas/sprint-planning" },
      { nome: "Integração com Versionamento", path: "/avancado/versionamento" },
      { nome: "Gráficos de Burndown", path: "/avancado/burndown" }
    ],
    saida: "Backlog vivo, rastreável e com mudanças controladas."
  }
];

const corMap: Record<string, string> = {
  violet: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  fuchsia: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
  indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
};

const ProcessoRequisitosSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 mb-4">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-medium">Processo de Requisitos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Do Mini-Mundo ao requisito rastreável
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O Mini-Mundo não nasce pronto: ele é a entrada e a saída de um ciclo com cinco etapas.
            Em cada etapa há ferramentas do portal já prontas para uso.
          </p>
        </motion.div>

        <div className="space-y-6">
          {etapas.map((e, idx) => (
            <motion.div
              key={e.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${corMap[e.cor]}`}>
                      <e.icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-muted-foreground/30">{e.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{e.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{e.objetivo}</p>
                </div>

                <div className="md:w-2/3 space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <ListChecks className="w-4 h-4 text-violet-400" /> Como fazer
                    </h4>
                    <ul className="space-y-1.5">
                      {e.passos.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-violet-400 mt-0.5">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-purple-400" /> Ferramentas do portal
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {e.ferramentas.map((f) => (
                        <Link
                          key={f.path}
                          to={f.path}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-background/60 border border-border hover:border-violet-500/50 hover:text-violet-400 transition-colors"
                        >
                          {f.nome}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                    <span className="text-xs font-semibold text-foreground">Artefato de saída: </span>
                    <span className="text-xs text-muted-foreground">{e.saida}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Matriz de rastreabilidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mt-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Matriz de Rastreabilidade (modelo)</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {["Origem", "Requisito", "História", "Prioridade", "Caso de Teste", "Status"].map((h) => (
                    <th key={h} className="text-left py-2 px-3 font-semibold text-foreground whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Entrevista Recepção", "RF01 - Agendar consulta", "US01", "Must", "CT01, CT02", "Validado"],
                  ["Entrevista Veterinário", "RF02 - Registrar prontuário", "US04", "Must", "CT05", "Em teste"],
                  ["Observação Balcão", "RF03 - Alertar reforço de vacina", "US07", "Should", "CT09", "Pendente"],
                  ["Norma interna", "RNF01 - Resposta < 2s", "—", "Must", "CT12", "Em teste"]
                ].map((linha) => (
                  <tr key={linha[1]} className="border-b border-border/40">
                    {linha.map((c, i) => (
                      <td key={i} className="py-2 px-3 whitespace-nowrap">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            Regra de ouro: todo requisito precisa de uma origem identificável e de pelo menos um caso de teste.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessoRequisitosSection;
