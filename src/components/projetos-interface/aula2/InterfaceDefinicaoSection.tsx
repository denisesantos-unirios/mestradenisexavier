import { motion } from "framer-motion";
import { 
  Monitor, 
  AlertTriangle, 
  ThumbsDown, 
  DollarSign,
  Users,
  Gauge,
  Shield,
  GraduationCap,
  TrendingUp,
  Heart,
  ArrowRight,
  X,
  Check
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const fatoresQualidade = [
  { icon: Heart, nome: "Satisfação", descricao: "Experiência agradável" },
  { icon: Gauge, nome: "Eficiência", descricao: "Rapidez nas tarefas" },
  { icon: Shield, nome: "Segurança", descricao: "Prevenção de erros" },
  { icon: GraduationCap, nome: "Treinamento", descricao: "Curva de aprendizado" },
  { icon: TrendingUp, nome: "ROI", descricao: "Retorno do investimento" }
];

const problemasInterface = [
  "Alto grau de dificuldade na utilização",
  "Confundem o usuário, levando a erros",
  "Erros podem corromper dados ou causar falhas",
  "Impacto negativo fazendo o usuário rejeitar o sistema"
];

const InterfaceDefinicaoSection = () => {
  return (
    <section id="interface-definicao" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Monitor className="w-4 h-4" />
              <span>Conceito Central</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que é Interface?
            </h2>
          </div>
        </ScrollReveal>

        {/* Definição Principal */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto mb-12">
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-primary/10 border-l-4 border-primary">
                <p className="text-lg">
                  <strong>Interface</strong> é definida como a <span className="text-primary font-semibold">parte do aplicativo 
                  que o usuário percebe e manipula</span> com o intuito de realizar as tarefas pertinentes 
                  ao seu contexto de trabalho.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <h4 className="font-semibold mb-2">📱 Definição Técnica</h4>
                  <p className="text-sm text-muted-foreground">
                    A interface de uma aplicação computacional envolve <strong>todos os aspectos</strong> de 
                    um sistema com o qual mantemos contato.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <h4 className="font-semibold mb-2">🔗 Artefato de Comunicação</h4>
                  <p className="text-sm text-muted-foreground">
                    Um artefato onde o usuário utiliza recursos para se comunicar através de 
                    <strong> contato físico, perceptivo e conceitual</strong>.
                  </p>
                </div>
              </div>

              <div className="text-center p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                <p className="font-medium">
                  É através da interface que os usuários têm <span className="text-primary">acesso às funções</span> da aplicação
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Interfaces Mal Projetadas */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Interfaces Mal Projetadas
            </h3>
            
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-rose-500 mb-4 flex items-center gap-2">
                    <ThumbsDown className="w-5 h-5" />
                    Problemas Causados
                  </h4>
                  <ul className="space-y-3">
                    {problemasInterface.map((problema, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{problema}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-rose-500" />
                    <span className="font-bold text-rose-500">Lembre-se!</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    O <strong className="text-foreground">Usuário é a chave determinante do sucesso</strong>. 
                    Uma interface mal projetada pode fazer com que o usuário 
                    rejeite completamente o sistema, independente de quão bom seja o backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Fatores de Qualidade */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Fatores que Dependem de um Bom Design
            </h3>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {fatoresQualidade.map((fator, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="glass-card p-4 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <fator.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-sm">{fator.nome}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{fator.descricao}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Triângulo Interface-Objetivo-Qualidade */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h4 className="font-bold text-center mb-6">🔺 A Tríade do Sucesso</h4>
            <div className="flex flex-col items-center gap-6">
              <motion.div
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold"
                whileHover={{ scale: 1.05 }}
              >
                INTERFACE
              </motion.div>
              <div className="flex gap-8">
                <motion.div
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold"
                  whileHover={{ scale: 1.05 }}
                >
                  OBJETIVOS
                </motion.div>
                <motion.div
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold"
                  whileHover={{ scale: 1.05 }}
                >
                  QUALIDADE DE USO
                </motion.div>
              </div>
              <p className="text-center text-sm text-muted-foreground max-w-md">
                Devemos sempre vincular esses três elementos para a construção de uma interface 
                com boa qualidade de interação
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#metaforas-affordance"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Metáforas e Affordance</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InterfaceDefinicaoSection;
