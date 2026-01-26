import { motion } from "framer-motion";
import { 
  Users, Lightbulb, Eye, FileText, 
  MessageCircle, ClipboardList, UserCircle, BookOpen 
} from "lucide-react";

const tecnicas = [
  {
    nome: "Entrevistas",
    icon: MessageCircle,
    descricao: "Conversa estruturada ou semi-estruturada com stakeholders para extrair informações sobre necessidades e expectativas.",
    quando: "Quando precisa entender profundamente as necessidades individuais",
    vantagens: ["Contato direto", "Flexibilidade", "Detalhamento"],
    desvantagens: ["Consome tempo", "Depende do entrevistador", "Viés possível"]
  },
  {
    nome: "Brainstorming",
    icon: Lightbulb,
    descricao: "Sessão criativa em grupo para gerar ideias livremente, sem julgamentos iniciais.",
    quando: "Quando busca inovação e soluções criativas",
    vantagens: ["Muitas ideias", "Criatividade", "Participação"],
    desvantagens: ["Pode fugir do foco", "Dominância de alguns", "Ideias superficiais"]
  },
  {
    nome: "Observação (Etnografia)",
    icon: Eye,
    descricao: "Analista observa usuários em seu ambiente natural de trabalho para entender processos reais.",
    quando: "Quando o usuário não sabe explicar o que faz",
    vantagens: ["Dados reais", "Descobre o implícito", "Contexto rico"],
    desvantagens: ["Intrusivo", "Demorado", "Interpretação subjetiva"]
  },
  {
    nome: "Questionários",
    icon: ClipboardList,
    descricao: "Conjunto de perguntas padronizadas enviadas a um grande número de stakeholders.",
    quando: "Quando precisa alcançar muitas pessoas",
    vantagens: ["Escalável", "Quantificável", "Rápido"],
    desvantagens: ["Sem profundidade", "Taxa de resposta baixa", "Ambiguidade"]
  },
  {
    nome: "Análise de Documentos",
    icon: FileText,
    descricao: "Estudo de documentos existentes como manuais, formulários, relatórios e sistemas legados.",
    quando: "Quando existe documentação prévia disponível",
    vantagens: ["Sem interrupção", "Informação formal", "Histórico"],
    desvantagens: ["Pode estar desatualizado", "Incompleto", "Burocrático"]
  },
  {
    nome: "Personas",
    icon: UserCircle,
    descricao: "Criação de perfis fictícios que representam grupos de usuários com características e necessidades similares.",
    quando: "Quando precisa manter foco no usuário final",
    vantagens: ["Humaniza requisitos", "Foco no usuário", "Comunicação fácil"],
    desvantagens: ["Pode ser genérico", "Requer pesquisa prévia", "Risco de estereótipos"]
  },
  {
    nome: "Workshops/JAD",
    icon: Users,
    descricao: "Sessões estruturadas com múltiplos stakeholders para definir requisitos colaborativamente.",
    quando: "Quando precisa consenso entre partes diferentes",
    vantagens: ["Consenso", "Rápido", "Compromisso"],
    desvantagens: ["Logística complexa", "Conflitos", "Dominância"]
  },
  {
    nome: "Prototipação",
    icon: BookOpen,
    descricao: "Criação de versões simplificadas do sistema para validar requisitos com usuários.",
    quando: "Quando requisitos são vagos ou inovadores",
    vantagens: ["Feedback visual", "Reduz ambiguidade", "Engajamento"],
    desvantagens: ["Pode virar o produto", "Custos", "Foco em interface"]
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
            <span className="text-sm font-medium">Técnicas de Elicitação</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como descobrir o que o cliente precisa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diferentes técnicas para diferentes contextos e tipos de stakeholders
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

                  <div className="grid grid-cols-2 gap-2 text-xs">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TecnicasSection;
