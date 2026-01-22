import { motion } from "framer-motion";
import { 
  BookOpen, 
  Target, 
  Brain, 
  Compass, 
  Layout, 
  TestTube, 
  Heart,
  Map,
  MessageSquare,
  User
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const menuItems = [
  {
    icon: Layout,
    title: "Sala de Aula",
    description: "Aulas, PDFs, atividades, vídeos e tarefas"
  },
  {
    icon: User,
    title: "Docente",
    description: "Informações da professora, orientações e horários"
  },
  {
    icon: MessageSquare,
    title: "Chat",
    description: "Avisos rápidos e dúvidas"
  }
];

const competencias = [
  {
    icon: Target,
    title: "Projetar interfaces centradas no usuário",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "Aplicar heurísticas, usabilidade e princípios de UX",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Heart,
    title: "Compreender comportamento humano na tecnologia",
    color: "from-rose-500/20 to-orange-500/20"
  },
  {
    icon: Layout,
    title: "Prototipar e testar interfaces com métodos empíricos",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Compass,
    title: "Criar soluções digitais com clareza, lógica e empatia",
    color: "from-amber-500/20 to-yellow-500/20"
  }
];

const EmentaSection = () => {
  return (
    <section id="ementa" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        {/* Menu da Disciplina */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Map className="w-4 h-4" />
              <span>UX: Mapeamento Mental</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Menu da Disciplina</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reduzindo a carga cognitiva com um fluxo claro desde o início
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20">
          {menuItems.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 text-center h-full"
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Ementa */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Ementa e "Promessa de Valor"</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-primary">Conceitos básicos de interface</span>, 
                  paradigmas de interface, projeto estético e funcional, ferramentas de modelagem e 
                  desenvolvimento de protótipos.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-primary">Em termos de UX:</span> você aprenderá a 
                  <span className="text-foreground font-medium"> criar, testar e melhorar interfaces reais</span>, 
                  pensando no usuário final — não apenas no visual, mas em 
                  <span className="text-primary"> comportamento, interação e experiência</span>.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Competências */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Competências a Desenvolver</h3>
            <p className="text-muted-foreground italic">
              "O que você aprende aqui muda a forma como vê qualquer aplicativo."
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competencias.map((comp, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={`p-5 rounded-xl bg-gradient-to-br ${comp.color} border border-border/50 h-full`}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-background/80 flex items-center justify-center shrink-0">
                    <comp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed">{comp.title}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#metodologia"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Ver Metodologia</span>
              <TestTube className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EmentaSection;
