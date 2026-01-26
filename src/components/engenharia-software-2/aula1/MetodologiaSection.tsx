import { motion } from "framer-motion";
import { 
  Lightbulb, Users, BookOpen, MessageSquare, 
  Laptop, FlaskConical, Presentation 
} from "lucide-react";

const metodologias = [
  {
    icon: BookOpen,
    title: "Sala de Aula Invertida",
    description: "Conteúdo prévio (vídeos, artigos, leituras) para estudo em casa, otimizando o tempo em sala para discussões e atividades práticas.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FlaskConical,
    title: "Aprendizagem Baseada em Problemas (PBL)",
    description: "Desenvolvimento de um projeto integrador ao longo do semestre, dividido em fases, envolvendo todas as etapas da Engenharia de Requisitos e Modelagem.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Mini Projetos e Estudos de Caso",
    description: "Aplicação de conceitos em cenários menores e mais focados, permitindo experimentação e feedback rápido.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Laptop,
    title: "Ferramentas Profissionais",
    description: "Uso de ferramentas de modelagem (Astah Community, Lucidchart), gestão de requisitos (Jira/Trello - simulação) e plataformas AVA.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Presentation,
    title: "Debates e Seminários",
    description: "Discussão de temas relevantes, apresentação de pesquisas e soluções por parte dos alunos.",
    color: "from-rose-500 to-red-500"
  },
  {
    icon: MessageSquare,
    title: "Just-in-Time Teaching (JITT)",
    description: "Atividades prévias às aulas presenciais que orientam o professor sobre as dificuldades dos alunos.",
    color: "from-indigo-500 to-violet-500"
  }
];

const MetodologiaSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Metodologias Ativas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como vamos aprender
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Abordagem híbrida e ativa, combinando teoria e prática para 
            simular desafios reais do mercado de trabalho.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metodologias.map((met, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:scale-[1.02] transition-transform"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${met.color} flex items-center justify-center mb-4`}>
                <met.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{met.title}</h3>
              <p className="text-sm text-muted-foreground">{met.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Legenda das Atividades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6"
        >
          <h4 className="font-semibold text-foreground mb-4">Legenda das Atividades</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { abbr: "AEP", full: "Aula Expositiva Participativa" },
              { abbr: "APG", full: "Aula Participativa em Grupo" },
              { abbr: "IV", full: "Interação Virtual (AVA)" },
              { abbr: "PBL", full: "Aprendizagem Baseada em Problemas" },
              { abbr: "JITT", full: "Just-in-Time Teaching" },
              { abbr: "WQ", full: "WebQuest" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-3 rounded-lg bg-background/50">
                <span className="block text-lg font-bold text-purple-400">{item.abbr}</span>
                <span className="text-xs text-muted-foreground">{item.full}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodologiaSection;
