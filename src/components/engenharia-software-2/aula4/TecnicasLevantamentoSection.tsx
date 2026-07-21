import { motion } from "framer-motion";
import { MessageCircle, Eye, Users, Layers, Presentation, Search } from "lucide-react";

const tecnicas = [
  {
    icon: MessageCircle,
    nome: "Entrevista",
    cor: "from-orange-500 to-amber-500",
    desc: "Conversa estruturada ou semiestruturada com stakeholders para levantar necessidades.",
    passos: [
      "Decidir quem entrevistar (usuários, gestores, especialistas)",
      "Preparar o entrevistado — enviar pauta com antecedência",
      "Decidir tipos de questões: abertas, fechadas ou mistas",
      "Estruturar em introdução, corpo (pirâmide/funil) e fechamento",
      "Registrar respostas e confirmar entendimento ao final"
    ]
  },
  {
    icon: Eye,
    nome: "Observação in loco",
    cor: "from-blue-500 to-cyan-500",
    desc: "Acompanhar o usuário no ambiente real de trabalho para captar o que ele não verbaliza.",
    passos: [
      "Definir tarefas e usuários que serão observados",
      "Observar sem interferir no fluxo natural do trabalho",
      "Anotar rotinas, exceções, atalhos e frustrações",
      "Complementar com perguntas rápidas de esclarecimento",
      "Ideal quando o usuário tem dificuldade em descrever seu processo"
    ]
  },
  {
    icon: Users,
    nome: "Encontros / Reuniões",
    cor: "from-purple-500 to-pink-500",
    desc: "Reuniões coletivas para alinhar visão do produto e priorizar funcionalidades.",
    passos: [
      "Definir objetivo claro e pauta enviada com antecedência",
      "Reunir stakeholders com poder de decisão",
      "Registrar decisões e responsáveis (ata)",
      "Validar prioridades e restrições em conjunto"
    ]
  },
  {
    icon: Layers,
    nome: "Prototipação",
    cor: "from-green-500 to-emerald-500",
    desc: "Construir uma versão preliminar do sistema para validar entendimento e coletar feedback.",
    passos: [
      "Protótipo descartável: valida um requisito específico e é descartado",
      "Protótipo evolutivo: evolui até virar o próprio produto",
      "Ideal quando o usuário não consegue especificar sem ver funcionando",
      "Reduz risco de retrabalho na implementação"
    ]
  },
  {
    icon: Presentation,
    nome: "JAD",
    cor: "from-red-500 to-rose-500",
    desc: "Joint Application Development — workshop intensivo que reúne equipe técnica e usuários.",
    passos: [
      "1ª Fase — Definição: escopo e objetivos do workshop",
      "2ª Fase — Pesquisa: coleta de material e preparação",
      "3ª Fase — Preparação: agenda e infraestrutura",
      "4ª Fase — Sessão JAD: discussão facilitada com documentadores",
      "5ª Fase — Documento Final: aprovação formal dos requisitos"
    ]
  },
  {
    icon: Search,
    nome: "Etnografia",
    cor: "from-cyan-500 to-blue-500",
    desc: "Imersão prolongada no contexto do usuário; painéis afixados são validados coletivamente.",
    passos: [
      "Analista imerge no cotidiano da organização",
      "Levanta cultura, rituais e trocas informais",
      "Informações afixadas em painéis para validação",
      "Combinada com entrevistas para aprofundar temas"
    ]
  }
];

const fatoresComplexidade = [
  "Falta de conhecimento do usuário sobre suas reais necessidades",
  "Desenvolvedor não ouve e força suas próprias interpretações",
  "Comunicação inadequada entre desenvolvedores e usuários",
  "Questões técnicas e de vocabulário",
  "Complexidade crescente dos sistemas atuais",
  "Mudanças constantes nos requisitos ao longo do projeto"
];

const TecnicasLevantamentoSection = () => {
  return (
    <section id="tecnicas" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 mb-4">
            <Search className="w-4 h-4" />
            <span className="text-sm font-medium">Levantamento</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Técnicas de Levantamento de Requisitos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Realizadas por <strong className="text-foreground">Analistas e Engenheiros de Software</strong> junto com <strong className="text-foreground">clientes e usuários finais</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {tecnicas.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.cor} flex items-center justify-center`}>
                  <t.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{t.nome}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{t.desc}</p>
              <ul className="space-y-2">
                {t.passos.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-orange-400 mt-1">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Fatores que tornam complexo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 border-l-4 border-orange-500"
        >
          <h3 className="text-xl font-bold mb-6">⚠️ Fatores que tornam o levantamento complexo</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {fatoresComplexidade.map((f, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-muted-foreground">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30">
            <p className="text-sm text-muted-foreground italic mb-2">💬 Diálogo clássico (Dilbert):</p>
            <p className="text-foreground">
              — <strong>Analista:</strong> "Preciso saber dos seus requisitos antes de projetar o software. O que você está querendo fazer?"
            </p>
            <p className="text-foreground mt-2">
              — <strong>Cliente:</strong> "Eu não vou saber o que estou querendo fazer até você me dizer o que o software pode fazer!"
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              👉 Ilustra por que <strong className="text-orange-300">prototipação</strong> e <strong className="text-orange-300">entrevistas iterativas</strong> são fundamentais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TecnicasLevantamentoSection;
