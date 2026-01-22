import { motion } from "framer-motion";
import { 
  Users, 
  UserCircle, 
  GraduationCap,
  Briefcase,
  Baby,
  UserCog,
  ArrowRight,
  Target
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const tiposUsuarios = [
  {
    icon: Baby,
    titulo: "Novato",
    descricao: "Primeiro contato com o sistema",
    necessidades: ["Orientação clara", "Feedbacks constantes", "Tolerância a erros"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: GraduationCap,
    titulo: "Intermediário",
    descricao: "Já conhece o básico, quer mais",
    necessidades: ["Atalhos opcionais", "Funções avançadas acessíveis", "Menos repetição"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: UserCog,
    titulo: "Especialista",
    descricao: "Domina o sistema completamente",
    necessidades: ["Atalhos de teclado", "Customização", "Eficiência máxima"],
    color: "from-emerald-500 to-teal-500"
  }
];

const dimensoesAnalise = [
  { titulo: "Idade", exemplo: "Crianças, adultos, idosos" },
  { titulo: "Experiência Técnica", exemplo: "Leigo, intermediário, expert" },
  { titulo: "Contexto de Uso", exemplo: "Casa, trabalho, mobilidade" },
  { titulo: "Frequência", exemplo: "Diário, semanal, ocasional" },
  { titulo: "Motivação", exemplo: "Obrigação, lazer, necessidade" },
  { titulo: "Limitações", exemplo: "Visuais, motoras, cognitivas" }
];

const UsuariosSection = () => {
  return (
    <section id="usuarios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-primary">Foco no Usuário</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Compreendendo os Usuários</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perfis, comportamentos e necessidades de quem usará o sistema
            </p>
          </div>
        </ScrollReveal>

        {/* Tipos de Usuários */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-8">Níveis de Experiência</h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
          {tiposUsuarios.map((tipo, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tipo.color}`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tipo.color} flex items-center justify-center mb-4`}>
                  <tipo.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold mb-2">{tipo.titulo}</h4>
                <p className="text-muted-foreground mb-4">{tipo.descricao}</p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">Necessita de:</p>
                  {tipo.necessidades.map((nec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{nec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Dimensões de Análise */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Dimensões para Analisar Usuários</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {dimensoesAnalise.map((dim, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 border border-border"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold text-sm mb-1">{dim.titulo}</h4>
                  <p className="text-xs text-muted-foreground">{dim.exemplo}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Personas */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <UserCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">O que são Personas?</h3>
                <p className="text-sm text-muted-foreground">Personagens fictícios que representam grupos de usuários</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Uma <span className="text-primary font-medium">persona</span> é um arquétipo de usuário 
              criado a partir de dados reais. Ela tem nome, idade, profissão, objetivos, frustrações 
              e cenários de uso. Ajuda a equipe a tomar decisões centradas no usuário.
            </p>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium mb-2">Exemplo de Persona:</p>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">"Maria, 45 anos"</span> — Professora universitária, 
                usa tecnologia moderadamente, prefere interfaces simples e diretas. Seu objetivo é 
                lançar notas rapidamente. Sua frustração é quando sistemas pedem muitos cliques.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#pratica"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Atividade Prática</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UsuariosSection;
