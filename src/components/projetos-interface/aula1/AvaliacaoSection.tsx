import { motion } from "framer-motion";
import { 
  Trophy, 
  FileCheck, 
  Presentation, 
  PenLine,
  Calculator,
  Shield,
  ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const avaliacoes = [
  {
    icon: FileCheck,
    title: "Atividades Práticas no AVA",
    pontos: "10,0 pontos",
    descricao: "Exercícios, fóruns e tarefas ao longo do semestre",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Presentation,
    title: "Projeto de Usabilidade",
    pontos: "10,0 pontos",
    descricao: "Fase 1: Requisitos | Fase 2: Protótipo + DECIDE",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: PenLine,
    title: "Avaliação Institucional",
    pontos: "10,0 pontos",
    descricao: "Prova escrita ao final da etapa",
    color: "from-orange-500 to-amber-500"
  }
];

const projetoFases = [
  {
    fase: "Fase 1",
    titulo: "Quem é o usuário e o que ele precisa?",
    items: [
      "Objetivo geral do sistema",
      "Nível de habilidade dos usuários",
      "Perfis (personas)",
      "Tarefas",
      "Equipe e responsabilidades"
    ]
  },
  {
    fase: "Fase 2",
    titulo: "Como construir e avaliar a interface?",
    items: [
      "Fluxo principal (diagrama de atividades)",
      "Protótipo no Figma",
      "Planejamento de teste (modelo DECIDE)",
      "Preparação do teste + tarefas + métricas"
    ]
  }
];

const AvaliacaoSection = () => {
  return (
    <section id="avaliacao" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Shield className="w-4 h-4" />
              <span>UX: Transparência</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sistema de Avaliação</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Apresentar isso na primeira aula aumenta a segurança do aluno e reduz dúvidas recorrentes
            </p>
          </div>
        </ScrollReveal>

        {/* Três Pilares */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
          {avaliacoes.map((aval, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${aval.color}`} />
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${aval.color} flex items-center justify-center`}>
                    <aval.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{aval.pontos}</div>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{aval.title}</h3>
                <p className="text-sm text-muted-foreground">{aval.descricao}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Fórmula */}
        <ScrollReveal>
          <div className="glass-card p-6 mb-16 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Calculator className="w-8 h-8 text-primary" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Média Final</p>
                <p className="text-xl font-bold">Soma das Etapas ÷ 3</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projeto de Usabilidade */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-primary">A Alma da Disciplina</span>
            </div>
            <h3 className="text-3xl font-bold">O Projeto de Usabilidade</h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projetoFases.map((fase, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="glass-card p-6 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
                  <span className="font-bold">{fase.fase}</span>
                </div>
                <h4 className="font-bold text-lg mb-4">{fase.titulo}</h4>
                
                <ul className="space-y-2">
                  {fase.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Narrativa UX */}
        <ScrollReveal>
          <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-3xl mx-auto text-center">
            <p className="text-lg italic text-muted-foreground">
              "Imagine que você cria um app e precisa saber se o usuário consegue usar. 
              <span className="text-foreground font-medium"> Essa disciplina ensina exatamente como descobrir isso.</span>"
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#cronograma"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Ver Cronograma</span>
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AvaliacaoSection;
