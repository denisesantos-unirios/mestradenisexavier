import { motion } from "framer-motion";
import { 
  Monitor, 
  ArrowLeftRight, 
  Target, 
  Zap,
  Users,
  Puzzle,
  Heart,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const conceitosPrincipais = [
  {
    icon: Monitor,
    titulo: "Interface",
    definicao: "Sistema de comunicação entre usuário e computador",
    detalhes: "Engloba hardware (tela, mouse, teclado) e software (menus, botões, formulários)",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: ArrowLeftRight,
    titulo: "Interação",
    definicao: "Processo de comunicação bidirecional",
    detalhes: "Usuário age → Sistema responde → Usuário interpreta → Ciclo contínuo",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Puzzle,
    titulo: "Design de Interação",
    definicao: "Projetar produtos interativos que apoiem atividades",
    detalhes: "Foco em como as pessoas trabalham, comunicam e interagem",
    color: "from-emerald-500 to-teal-500"
  }
];

const qualidadesUso = [
  {
    icon: Target,
    titulo: "Eficácia",
    descricao: "O usuário consegue completar a tarefa?",
    exemplo: "Fazer login com sucesso"
  },
  {
    icon: Zap,
    titulo: "Eficiência",
    descricao: "Quanto esforço é necessário?",
    exemplo: "Tempo e cliques para concluir"
  },
  {
    icon: Heart,
    titulo: "Satisfação",
    descricao: "A experiência é agradável?",
    exemplo: "Sentimento após usar o sistema"
  }
];

const ConceitosSection = () => {
  return (
    <section id="conceitos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Users className="w-4 h-4" />
              <span>Fundamentos Teóricos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Conceitos Fundamentais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A base para compreender como projetamos interações efetivas
            </p>
          </div>
        </ScrollReveal>

        {/* Conceitos Principais */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20">
          {conceitosPrincipais.map((conceito, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${conceito.color}`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${conceito.color} flex items-center justify-center mb-4`}>
                  <conceito.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{conceito.titulo}</h3>
                <p className="text-primary font-medium mb-3">{conceito.definicao}</p>
                <p className="text-sm text-muted-foreground">{conceito.detalhes}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Qualidades de Uso */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-10">Qualidades de Uso (Usabilidade)</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {qualidadesUso.map((qualidade, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-secondary/50 border border-border text-center"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <qualidade.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{qualidade.titulo}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{qualidade.descricao}</p>
                  <p className="text-xs text-primary italic">Ex: {qualidade.exemplo}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#modelos"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Modelos de Interação</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConceitosSection;
