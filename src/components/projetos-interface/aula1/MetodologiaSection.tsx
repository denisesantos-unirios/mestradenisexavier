import { motion } from "framer-motion";
import { 
  Search, 
  PenTool, 
  Layers, 
  TestTube, 
  RefreshCw,
  BookOpen,
  Users,
  Monitor,
  FlaskConical,
  UsersRound,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const fluxoEtapas = [
  { icon: Search, label: "Entender", color: "bg-blue-500" },
  { icon: PenTool, label: "Projetar", color: "bg-purple-500" },
  { icon: Layers, label: "Prototipar", color: "bg-pink-500" },
  { icon: TestTube, label: "Testar", color: "bg-orange-500" },
  { icon: RefreshCw, label: "Iterar", color: "bg-emerald-500" }
];

const metodologias = [
  {
    icon: BookOpen,
    title: "Sala de Aula Invertida",
    description: "Vídeos e leituras curtas antes da aula"
  },
  {
    icon: Layers,
    title: "Aprendizagem por Projetos",
    description: "Construção prática do conhecimento"
  },
  {
    icon: Monitor,
    title: "Atividades em Laboratório",
    description: "Prática hands-on com ferramentas reais"
  },
  {
    icon: FlaskConical,
    title: "Experimentos com Usuários",
    description: "Testes empíricos de usabilidade"
  },
  {
    icon: UsersRound,
    title: "Trabalho em Squads",
    description: "Equipes simulando times de design"
  }
];

const MetodologiaSection = () => {
  return (
    <section id="metodologia" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Users className="w-4 h-4" />
              <span>UX: Como o Usuário Interage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Metodologia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A disciplina funciona como um fluxo de projeto real
            </p>
          </div>
        </ScrollReveal>

        {/* Fluxo Visual */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 mb-16">
            <h3 className="text-xl font-bold text-center mb-10">Fluxo de Projeto</h3>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-2">
              {fluxoEtapas.map((etapa, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${etapa.color} flex items-center justify-center mb-2 shadow-lg`}>
                      <etapa.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <span className="text-sm font-medium">{index + 1}. {etapa.label}</span>
                  </motion.div>
                  
                  {index < fluxoEtapas.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Metodologias Aplicadas */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-8">Aplicamos</h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metodologias.map((metodo, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full group"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <metodo.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{metodo.title}</h4>
                    <p className="text-sm text-muted-foreground">{metodo.description}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#avaliacao"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Sistema de Avaliação</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MetodologiaSection;
