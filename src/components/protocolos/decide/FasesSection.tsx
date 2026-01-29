import { motion } from "framer-motion";
import { Target, BookOpen, Settings, Users, Shield, BarChart3, Lightbulb, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const FasesSection = () => {
  const fases = [
    {
      letter: "D",
      title: "Determine",
      subtitle: "Determinar os objetivos da avaliação",
      icon: Target,
      color: "from-red-500 to-orange-500",
      content: {
        desc: "A primeira fase concentra-se na definição clara e precisa dos objetivos. Esta etapa é crítica pois determina todo o direcionamento subsequente do estudo.",
        objetivos: [
          "Verificar a conformidade com padrões de acessibilidade",
          "Identificar problemas de usabilidade em fluxos críticos",
          "Comparar alternativas de design (A/B testing)",
          "Validar requisitos junto a usuários representativos",
          "Mensurar a satisfação do usuário com a interface atual"
        ],
        dica: "Utilize a técnica SMART para formulação de objetivos: Específicos, Mensuráveis, Atingíveis, Relevantes e Temporalmente definidos."
      }
    },
    {
      letter: "E",
      title: "Explore",
      subtitle: "Explorar as questões a serem respondidas",
      icon: BookOpen,
      color: "from-orange-500 to-yellow-500",
      content: {
        desc: "Os objetivos são operacionalizados em questões específicas que a avaliação deverá responder. A formulação adequada orienta a seleção de métodos e métricas.",
        questoes: [
          { tipo: "Exploratórias", exemplo: "Quais são as principais dificuldades dos usuários ao realizar X?" },
          { tipo: "Descritivas", exemplo: "Qual o tempo médio para completar a tarefa Y?" },
          { tipo: "Comparativas", exemplo: "O design A é mais eficiente que o design B?" },
          { tipo: "Causais", exemplo: "A mudança Z impacta positivamente a satisfação?" }
        ]
      }
    },
    {
      letter: "C",
      title: "Choose",
      subtitle: "Escolher o paradigma e métodos de avaliação",
      icon: Settings,
      color: "from-yellow-500 to-green-500",
      content: {
        desc: "A escolha metodológica deve ser guiada pelos objetivos definidos e pelas restrições práticas do contexto. Não existe método universalmente superior.",
        metodos: [
          { nome: "Teste de Usabilidade", vantagem: "Dados diretos dos usuários", limitacao: "Custo e tempo elevados" },
          { nome: "Avaliação Heurística", vantagem: "Rápido e econômico", limitacao: "Depende da expertise" },
          { nome: "Percurso Cognitivo", vantagem: "Foco na aprendizagem", limitacao: "Escopo limitado" },
          { nome: "Think Aloud", vantagem: "Insight sobre cognição", limitacao: "Pode afetar desempenho" },
          { nome: "Eye Tracking", vantagem: "Dados objetivos de atenção", limitacao: "Equipamento especializado" }
        ]
      }
    },
    {
      letter: "I",
      title: "Identify",
      subtitle: "Identificar questões práticas",
      icon: Users,
      color: "from-green-500 to-cyan-500",
      content: {
        desc: "Esta fase aborda os aspectos logísticos e operacionais: recrutamento, preparação de materiais e alocação de recursos.",
        checklist: [
          "Perfil e número de participantes",
          "Critérios de inclusão/exclusão",
          "Estratégia de recrutamento",
          "Local e equipamentos necessários",
          "Roteiro de tarefas e cenários",
          "Instrumentos de coleta (questionários, logs)",
          "Cronograma e duração das sessões",
          "Equipe e papéis (moderador, observador)",
          "Backup técnico e contingências",
          "Incentivos para participantes"
        ]
      }
    },
    {
      letter: "D",
      title: "Decide",
      subtitle: "Decidir sobre questões éticas",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      content: {
        desc: "A condução ética de pesquisas com seres humanos é imperativa. Demanda reflexão sobre potenciais riscos e medidas de proteção.",
        principios: [
          { nome: "Autonomia", desc: "Respeito à capacidade de decisão do participante" },
          { nome: "Beneficência", desc: "Maximização de benefícios e minimização de riscos" },
          { nome: "Não-maleficência", desc: "Compromisso de não causar danos" },
          { nome: "Justiça", desc: "Distribuição equitativa de ônus e benefícios" }
        ],
        alerta: "Pesquisas acadêmicas frequentemente requerem aprovação de Comitê de Ética em Pesquisa (CEP)."
      }
    },
    {
      letter: "E",
      title: "Evaluate",
      subtitle: "Avaliar, interpretar e apresentar dados",
      icon: BarChart3,
      color: "from-blue-500 to-purple-500",
      content: {
        desc: "A fase final envolve a análise sistemática dos dados coletados, sua interpretação e a comunicação dos resultados de forma clara e acionável.",
        processo: [
          { etapa: "Organização", desc: "Transcrição, codificação e categorização dos dados" },
          { etapa: "Análise", desc: "Aplicação de técnicas quantitativas e/ou qualitativas" },
          { etapa: "Interpretação", desc: "Identificação de padrões, insights e implicações" },
          { etapa: "Recomendações", desc: "Proposição de melhorias baseadas em evidências" },
          { etapa: "Comunicação", desc: "Elaboração de relatórios adaptados ao público" }
        ]
      }
    }
  ];

  return (
    <section id="Fases DECIDE" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">As Seis Fases</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Framework DECIDE em Detalhes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada letra representa uma fase essencial do processo avaliativo, com objetivos e procedimentos específicos.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {fases.map((fase, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="glass-card overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`h-2 bg-gradient-to-r ${fase.color}`} />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Header */}
                    <div className="flex items-center gap-4 md:w-64 shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${fase.color} flex items-center justify-center text-white text-3xl font-bold`}>
                        {fase.letter}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{fase.title}</h3>
                        <p className="text-sm text-muted-foreground">{fase.subtitle}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4">{fase.content.desc}</p>

                      {/* Objetivos - D1 */}
                      {fase.content.objetivos && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2">Objetivos Típicos:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {fase.content.objetivos.map((obj, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                {obj}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Questões - E1 */}
                      {fase.content.questoes && (
                        <div className="grid md:grid-cols-2 gap-3">
                          {fase.content.questoes.map((q, i) => (
                            <div key={i} className="p-3 rounded-lg bg-secondary/50">
                              <span className="text-xs font-medium text-primary">{q.tipo}</span>
                              <p className="text-sm text-muted-foreground italic">"{q.exemplo}"</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Métodos - C */}
                      {fase.content.metodos && (
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-border">
                                <th className="text-left py-2 text-foreground">Método</th>
                                <th className="text-left py-2 text-foreground">Vantagens</th>
                                <th className="text-left py-2 text-foreground">Limitações</th>
                              </tr>
                            </thead>
                            <tbody>
                              {fase.content.metodos.map((m, i) => (
                                <tr key={i} className="border-b border-border/50">
                                  <td className="py-2 font-medium text-foreground">{m.nome}</td>
                                  <td className="py-2 text-muted-foreground">{m.vantagem}</td>
                                  <td className="py-2 text-muted-foreground">{m.limitacao}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Checklist - I */}
                      {fase.content.checklist && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                          {fase.content.checklist.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30">
                              <input type="checkbox" className="rounded border-primary text-primary" />
                              <span className="text-xs text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Princípios Éticos - D2 */}
                      {fase.content.principios && (
                        <div className="grid md:grid-cols-2 gap-3">
                          {fase.content.principios.map((p, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                              <Shield className="w-5 h-5 text-primary shrink-0" />
                              <div>
                                <span className="font-medium text-foreground">{p.nome}</span>
                                <p className="text-xs text-muted-foreground">{p.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Processo - E2 */}
                      {fase.content.processo && (
                        <div className="flex flex-wrap gap-3">
                          {fase.content.processo.map((p, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                                {i + 1}
                              </span>
                              <div className="text-sm">
                                <span className="font-medium text-foreground">{p.etapa}</span>
                              </div>
                              {i < fase.content.processo.length - 1 && (
                                <span className="text-muted-foreground">→</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Dica */}
                      {fase.content.dica && (
                        <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-primary shrink-0" />
                          <p className="text-sm text-foreground">{fase.content.dica}</p>
                        </div>
                      )}

                      {/* Alerta */}
                      {fase.content.alerta && (
                        <div className="mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                          <Shield className="w-5 h-5 text-amber-500 shrink-0" />
                          <p className="text-sm text-foreground">{fase.content.alerta}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FasesSection;
