import { motion } from "framer-motion";
import { 
  Users, Lightbulb, Eye, FileText, 
  MessageCircle, ClipboardList, UserCircle, BookOpen,
  Handshake, AlertTriangle, Triangle, Diamond
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tecnicas = [
  {
    nome: "Entrevistas",
    icon: MessageCircle,
    descricao: "Conversa estruturada ou semi-estruturada com stakeholders para extrair informações sobre necessidades e expectativas.",
    quando: "Quando precisa entender profundamente as necessidades individuais",
    vantagens: ["Contato direto", "Flexibilidade", "Detalhamento", "Esclarecimento imediato"],
    desvantagens: ["Consome tempo", "Depende do entrevistador", "Viés possível"],
    detalhes: {
      titulo: "Como estruturar uma entrevista",
      itens: [
        "Ler material de suporte antes da entrevista",
        "Estabelecer os objetivos da entrevista",
        "Decidir quem entrevistar",
        "Preparar o entrevistado",
        "Decidir os tipos de questões e a sua estrutura"
      ],
      estruturas: [
        {
          nome: "Pirâmide",
          desc: "Inicia com perguntas específicas e fecha com genéricas. Ideal para usuários mais relutantes.",
          icon: "🔺"
        },
        {
          nome: "Funil",
          desc: "Inicia com perguntas genéricas e fecha com específicas. Ideal para usuários com relação afetiva com o assunto.",
          icon: "🔻"
        },
        {
          nome: "Diamante",
          desc: "Combina pirâmide e funil, usando perguntas variadas para manter o entrevistado interessado.",
          icon: "💎"
        }
      ]
    }
  },
  {
    nome: "Brainstorming",
    icon: Lightbulb,
    descricao: "Sessão criativa em grupo para gerar ideias livremente, sem julgamentos iniciais.",
    quando: "Quando busca inovação e soluções criativas, projetos inovadores ou redesign completo",
    vantagens: ["Muitas ideias rapidamente", "Criatividade", "Participação coletiva"],
    desvantagens: ["Pode fugir do foco", "Dominância de alguns", "Ideias podem ser inviáveis", "Requer facilitação"],
    detalhes: null
  },
  {
    nome: "Observação in loco (Etnografia)",
    icon: Eye,
    descricao: "O analista deve estar inserido na rotina de trabalho da organização tentando entender e descrever as principais atividades realizadas. Complementar com entrevistas específicas com os futuros usuários.",
    quando: "Quando o usuário não sabe explicar o que faz ou não consegue articular suas necessidades",
    vantagens: ["Dados reais", "Descobre o implícito e requisitos ocultos", "Contexto rico", "Entende o processo real"],
    desvantagens: ["Intrusivo", "Demorado", "Interpretação subjetiva", "Pode alterar comportamento observado"],
    detalhes: {
      titulo: "O que identificar na observação",
      itens: [
        "Fluxo de trabalho real dos usuários",
        "Gargalos e retrabalhos nos processos",
        "Ferramentas e documentos utilizados",
        "Interações entre pessoas e setores",
        "Atividades que o usuário faz automaticamente (tácitas)"
      ]
    }
  },
  {
    nome: "Questionários",
    icon: ClipboardList,
    descricao: "Conjunto de perguntas padronizadas enviadas a um grande número de stakeholders para validar requisitos.",
    quando: "Quando precisa alcançar muitas pessoas ou validar requisitos com grande base de usuários",
    vantagens: ["Escalável", "Quantificável", "Rápido", "Anônimo"],
    desvantagens: ["Sem profundidade", "Taxa de resposta baixa", "Ambiguidade nas respostas"],
    detalhes: null
  },
  {
    nome: "Análise de Documentos",
    icon: FileText,
    descricao: "Estudo de documentos existentes como manuais, formulários, relatórios e sistemas legados para entender processos formais.",
    quando: "Quando existe documentação prévia disponível ou para sistemas que substituem processos manuais",
    vantagens: ["Sem interrupção de usuários", "Informação formal e precisa", "Histórico disponível"],
    desvantagens: ["Pode estar desatualizado", "Incompleto", "Burocrático", "Falta contexto"],
    detalhes: null
  },
  {
    nome: "Personas",
    icon: UserCircle,
    descricao: "Criação de perfis fictícios que representam grupos de usuários com características e necessidades similares.",
    quando: "Quando precisa manter foco no usuário final",
    vantagens: ["Humaniza requisitos", "Foco no usuário", "Comunicação fácil"],
    desvantagens: ["Pode ser genérico", "Requer pesquisa prévia", "Risco de estereótipos"],
    detalhes: null
  },
  {
    nome: "Encontros",
    icon: Handshake,
    descricao: "Reuniões envolvendo analistas, clientes e usuários destinadas exclusivamente ao levantamento de informações, descrição dos problemas atuais e definição de metas futuras.",
    quando: "Quando precisa alinhar visões entre analistas, clientes e usuários em ambiente neutro",
    vantagens: ["Foco exclusivo no levantamento", "Ambiente neutro facilita diálogo", "Validação presencial com painéis"],
    desvantagens: ["Logística de local externo", "Requer agenda dedicada", "Pode ser custoso"],
    detalhes: {
      titulo: "Boas práticas para Encontros",
      itens: [
        "Realizar em locais neutros, fora da organização",
        "Afixar informações levantadas em painéis na sala para análise conjunta",
        "Validar as informações com clientes e usuários durante o encontro",
        "Documentar tudo imediatamente após a sessão",
        "Combinar com outras técnicas como observação e entrevistas"
      ]
    }
  },
  {
    nome: "Workshops / JAD",
    icon: Users,
    descricao: "Joint Application Development — técnica que permite a interação entre pessoas que necessitam tomar decisões que afetem múltiplas áreas de uma organização.",
    quando: "Quando precisa consenso entre partes diferentes e comprometimento do usuário",
    vantagens: ["Consenso formal", "Comprometimento do usuário", "Validação coletiva dos requisitos", "Múltiplas perspectivas"],
    desvantagens: ["Logística complexa", "Conflitos entre participantes", "Dominância de alguns membros"],
    detalhes: {
      titulo: "Estrutura de uma sessão JAD",
      itens: [
        "Preparação prévia para as reuniões com agenda definida",
        "Sessões de workshop com todos os participantes relevantes",
        "Papéis definidos: facilitador/condutor e documentador",
        "Uso de facilidades visuais: flipchart, quadro negro, painéis",
        "Objetivo: elaborar o documento de Especificação de Requisitos com consenso de todos"
      ]
    }
  },
  {
    nome: "Prototipação",
    icon: BookOpen,
    descricao: "Versão inicial do sistema para experimentação. Permite aos utilizadores identificar pontos fortes e fracos do sistema por ser algo concreto que pode ser criticado.",
    quando: "Quando requisitos são vagos, inovadores ou difíceis de perceber",
    vantagens: ["Feedback visual e concreto", "Reduz ambiguidade", "Engajamento do usuário"],
    desvantagens: ["Pode virar o produto final", "Custos de desenvolvimento", "Foco excessivo em interface"],
    detalhes: {
      titulo: "Tipos de Protótipos",
      itens: [
        "Protótipos \"Throw-away\": ajudam o levantamento e desenvolvimento dos requisitos mais difíceis de perceber. São descartados após validação.",
        "Protótipos Evolutivos: ajudam o desenvolvimento rápido de uma versão inicial. Suportam requisitos bem definidos e conhecidos, evoluindo até o produto final."
      ]
    }
  }
];

const fatoresComplexidade = [
  {
    titulo: "Falta de conhecimento do usuário",
    desc: "Usuário com vaga noção do que precisa e do que um produto de software pode oferecer."
  },
  {
    titulo: "Falta de conhecimento do desenvolvedor",
    desc: "Desenvolvedor sem conhecimento adequado do domínio, levando a decisões erradas."
  },
  {
    titulo: "Domínio do processo pelo desenvolvedor",
    desc: "Desenvolvedor não ouve os usuários e força suas próprias visões e interpretações."
  },
  {
    titulo: "Comunicação inadequada",
    desc: "Usuários incapazes de expressar suas necessidades; dificuldade em tomar decisões."
  },
  {
    titulo: "Problemas de comportamento",
    desc: "O levantamento é um processo social — conflitos e ambiguidades nos papéis."
  },
  {
    titulo: "Questões técnicas",
    desc: "Complexidade crescente dos sistemas atuais dificulta o levantamento."
  }
];

const TecnicasSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 text-rose-300 mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Técnicas de Elicitação / Levantamento</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como descobrir o que o cliente precisa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diferentes técnicas para diferentes contextos e tipos de stakeholders. 
            O levantamento é a atividade de obtenção dos requisitos do software — analistas e engenheiros 
            trabalham junto com clientes e usuários finais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tecnicas.map((tecnica, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 hover:border-rose-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <tecnica.icon className="w-6 h-6 text-rose-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{tecnica.nome}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tecnica.descricao}</p>
                  
                  <div className="p-2 rounded-lg bg-rose-500/10 text-xs text-rose-300 mb-3">
                    <strong>Quando usar:</strong> {tecnica.quando}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <span className="text-green-400 font-medium">+ Vantagens</span>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        {tecnica.vantagens.map((v, i) => (
                          <li key={i}>• {v}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-amber-400 font-medium">- Desvantagens</span>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        {tecnica.desvantagens.map((d, i) => (
                          <li key={i}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {tecnica.detalhes && (
                    <Accordion type="single" collapsible>
                      <AccordionItem value="detalhes" className="border-rose-500/20">
                        <AccordionTrigger className="text-xs text-rose-300 hover:no-underline py-2">
                          📋 {tecnica.detalhes.titulo}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1.5 text-xs text-muted-foreground">
                            {tecnica.detalhes.itens.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-rose-400 mt-0.5">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {"estruturas" in tecnica.detalhes && tecnica.detalhes.estruturas && (
                            <div className="mt-3 space-y-2">
                              <p className="text-xs font-medium text-rose-300">Estruturas de Entrevista:</p>
                              {tecnica.detalhes.estruturas.map((est, i) => (
                                <div key={i} className="p-2 rounded-lg bg-rose-500/5 border border-rose-500/10">
                                  <span className="text-sm mr-1">{est.icon}</span>
                                  <span className="text-xs font-semibold text-foreground">{est.nome}:</span>
                                  <span className="text-xs text-muted-foreground ml-1">{est.desc}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fatores de Complexidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Fatores de Complexidade</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              O que torna o levantamento difícil?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fatoresComplexidade.map((fator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-4 border-amber-500/20 hover:border-amber-500/40 transition-colors"
              >
                <h4 className="text-sm font-bold text-amber-300 mb-1">{fator.titulo}</h4>
                <p className="text-xs text-muted-foreground">{fator.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TecnicasSection;
