import { motion } from "framer-motion";
import { 
  Monitor, 
  MousePointerClick, 
  Smile,
  ArrowLeftRight,
  User,
  Cpu,
  BookOpen,
  Video,
  Link as LinkIcon,
  MessageSquare,
  UserCircle,
  ArrowUp
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const conceitos = [
  {
    icon: Monitor,
    titulo: "Interface",
    definicao: "Ponte entre humano e máquina",
    exemplo: "A tela do celular, botões, menus",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MousePointerClick,
    titulo: "Interação",
    definicao: "Ação → Resposta",
    exemplo: "Clicar em um botão e ver algo acontecer",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Smile,
    titulo: "Experiência do Usuário",
    definicao: "O que a pessoa sente, pensa e realiza ao usar o sistema",
    exemplo: "Satisfação, frustração, facilidade",
    color: "from-amber-500 to-orange-500"
  }
];

const materiaisAVA = [
  {
    icon: BookOpen,
    titulo: "Slides de Apresentação",
    tipo: "PDF"
  },
  {
    icon: BookOpen,
    titulo: "Ementa e Avaliação",
    tipo: "PDF"
  },
  {
    icon: Video,
    titulo: "O que é UX em 5 minutos",
    tipo: "Vídeo"
  },
  {
    icon: LinkIcon,
    titulo: "Mural da Atividade",
    tipo: "Padlet/Jamboard"
  }
];

const ConceitosSection = () => {
  return (
    <section id="conceitos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Mini-conteúdo teórico (5 min)</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Conceitos Introdutórios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conectando teoria com exemplos do cotidiano para gerar identificação
            </p>
          </div>
        </ScrollReveal>

        {/* Conceitos Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
          {conceitos.map((conceito, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden group"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${conceito.color}`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${conceito.color} flex items-center justify-center mb-4`}>
                  <conceito.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{conceito.titulo}</h3>
                <p className="text-lg font-medium text-primary mb-3">{conceito.definicao}</p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Ex:</span> {conceito.exemplo}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Diagrama Visual */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-2xl mx-auto mb-16">
            <h4 className="text-xl font-bold text-center mb-8">O Fluxo da Interação</h4>
            
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-medium">Usuário</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowLeftRight className="w-8 h-8 text-muted-foreground" />
                <span className="text-xs text-muted-foreground mt-1">Interface</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                  <Cpu className="w-10 h-10 text-accent-foreground" />
                </div>
                <span className="text-sm font-medium">Sistema</span>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Materiais AVA */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold mb-6">📚 Materiais no AVA</h4>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {materiaisAVA.map((material, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <material.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{material.titulo}</p>
                    <p className="text-xs text-muted-foreground">{material.tipo}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span className="font-bold text-sm">Chat</span>
                </div>
                <p className="text-sm text-muted-foreground">Mensagem fixa: regras e horários de atendimento</p>
              </div>

              <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <UserCircle className="w-5 h-5 text-accent-foreground" />
                  <span className="font-bold text-sm">Docente</span>
                </div>
                <p className="text-sm text-muted-foreground">Foto, mini-bio, e-mail, orientações de contato</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Próxima Aula */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-xl mx-auto">
            <p className="text-muted-foreground mb-2">Na próxima aula</p>
            <p className="text-xl font-bold">"O que é Design de Interação?"</p>
          </div>
        </ScrollReveal>

        {/* Back to Top */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="#hero"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <ArrowUp className="w-5 h-5" />
              <span>Voltar ao Topo</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConceitosSection;
