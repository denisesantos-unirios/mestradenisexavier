import { motion } from "framer-motion";
import { 
  Monitor, 
  Brain, 
  Users, 
  Cpu,
  Palette,
  MessageCircle,
  Cog,
  BookOpen,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const areasEstudo = [
  { nome: "Ciência da Computação", icon: Cpu },
  { nome: "Psicologia Cognitiva", icon: Brain },
  { nome: "Ergonomia", icon: Cog },
  { nome: "Design & Engenharia", icon: Palette },
  { nome: "Linguística", icon: MessageCircle },
  { nome: "Sociologia & Antropologia", icon: Users }
];

const componentesIHC = [
  {
    icon: Users,
    titulo: "Usuário",
    descricao: "A pessoa que interage com o sistema, com suas características cognitivas, emocionais e culturais",
    cor: "from-blue-500 to-cyan-500"
  },
  {
    icon: BookOpen,
    titulo: "Tarefa",
    descricao: "O objetivo que o usuário deseja alcançar usando o sistema",
    cor: "from-emerald-500 to-teal-500"
  },
  {
    icon: Cog,
    titulo: "Contexto",
    descricao: "O ambiente físico, social e organizacional onde a interação ocorre",
    cor: "from-amber-500 to-orange-500"
  },
  {
    icon: Monitor,
    titulo: "Tecnologia",
    descricao: "Hardware e software que compõem o sistema interativo",
    cor: "from-purple-500 to-pink-500"
  }
];

const IntroducaoIHCSection = () => {
  return (
    <section id="introducao-ihc" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Brain className="w-4 h-4" />
              <span>Fundamentos de IHC</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que é Interação Humano-Computador?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A IHC surgiu da necessidade do ser humano interagir com as máquinas, 
              motivando o desenvolvimento de interfaces cada vez mais sofisticadas 
              para melhor facilidade de uso.
            </p>
          </div>
        </ScrollReveal>

        {/* Definição Principal */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Objetivo da IHC</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                A área de <span className="text-primary font-semibold">Interação Humano-Computador (IHC)</span> tem 
                por objetivo principal fornecer aos pesquisadores e desenvolvedores de sistemas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <span><strong className="text-foreground">Explicações e previsões</strong> para interação usuário-sistema</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <span><strong className="text-foreground">Resultados práticos</strong> para o design da interface de usuário</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">3</span>
                  </div>
                  <span><strong className="text-foreground">Capacidade de prever</strong> se o sistema satisfaz necessidades de <em>usabilidade</em>, <em>aplicabilidade</em> e <em>comunicabilidade</em></span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-center">
                <span className="font-semibold text-primary">💡 Dica para o Professor:</span> A IHC é uma subárea da Engenharia de Software 
                que propõe modelos, processos, métodos, técnicas e ferramentas para o desenvolvimento de sistemas interativos.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Áreas de Estudo */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Áreas de Estudo Multidisciplinares</h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              A IHC é uma área interdisciplinar que combina conhecimentos de diversas disciplinas:
            </p>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {areasEstudo.map((area, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card p-4 text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{area.nome}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Componentes da IHC */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-8">Os 4 Componentes da IHC</h3>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {componentesIHC.map((componente, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="glass-card p-6 h-full relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${componente.cor}`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${componente.cor} flex items-center justify-center mb-4`}>
                    <componente.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{componente.titulo}</h4>
                  <p className="text-sm text-muted-foreground">{componente.descricao}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Processos Importantes */}
        <ScrollReveal>
          <div className="glass-card p-6 max-w-3xl mx-auto">
            <h4 className="font-bold text-lg mb-4 text-center">🔄 Dois Processos Fundamentais</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h5 className="font-semibold text-blue-500 mb-2">Interação Usuário-Sistema</h5>
                <p className="text-sm text-muted-foreground">
                  O processo contínuo de comunicação entre o usuário e o sistema computacional
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="font-semibold text-emerald-500 mb-2">Desenvolvimento do Sistema</h5>
                <p className="text-sm text-muted-foreground">
                  O processo de criação e evolução da interface seguindo metodologias específicas
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#processo-interacao"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Processo de Interação</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroducaoIHCSection;
