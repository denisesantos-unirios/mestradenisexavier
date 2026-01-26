import { motion } from "framer-motion";
import { 
  FileText, CheckCircle2, Target, BookOpen, 
  Layers, Settings, Users, Brain, Award 
} from "lucide-react";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const competencias = [
  {
    icon: Brain,
    title: "Representar Modelos Mentais",
    description: "Elicitar, analisar, especificar e validar requisitos funcionais e não-funcionais, compreendendo as necessidades dos stakeholders."
  },
  {
    icon: Settings,
    title: "Projetar e Gerenciar Sistemas",
    description: "Entender e aplicar o papel dos Sistemas de Informação na gerência de riscos e no controle organizacional."
  },
  {
    icon: Layers,
    title: "Aplicar Metodologias",
    description: "Reconhecer, diferenciar e aplicar as principais metodologias de desenvolvimento de software (tradicionais e ágeis)."
  },
  {
    icon: FileText,
    title: "Modelar Sistemas",
    description: "Utilizar a Linguagem de Modelagem Unificada (UML) para representar diferentes aspectos de um sistema de software."
  },
  {
    icon: CheckCircle2,
    title: "Garantir Qualidade",
    description: "Introduzir conceitos sobre Engenharia de Processos e Qualidade de Software, aplicando práticas para melhoria contínua."
  },
  {
    icon: Users,
    title: "Trabalhar em Equipe",
    description: "Desenvolver habilidades de comunicação, colaboração e resolução de problemas em projetos práticos."
  }
];

const EmentaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Ementa da Disciplina</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você vai aprender
          </h2>
        </motion.div>

        {/* Ementa Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ementa Oficial</h3>
              <p className="text-muted-foreground leading-relaxed">
                Metodologias de desenvolvimento de Sistemas. Processos de Software (tradicionais e ágeis), 
                <strong className="text-foreground"> Engenharia de Requisitos</strong>, 
                <strong className="text-foreground"> Modelagem com UML</strong>, RUP, MSF, XP, Scrum, Kanban, 
                <strong className="text-foreground"> Qualidade de Software</strong> e Boas Práticas de Mercado.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Competências */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Competências e Habilidades</h3>
          </div>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencias.map((comp, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 h-full hover:border-purple-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                  <comp.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{comp.title}</h4>
                <p className="text-sm text-muted-foreground">{comp.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Preparação ENADE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6 border-purple-500/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Alinhamento ENADE</h4>
              <p className="text-sm text-muted-foreground">
                A disciplina inclui questões e discussões que simulem o formato e o nível de complexidade 
                das provas do ENADE, preparando você para o exame nacional.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmentaSection;
