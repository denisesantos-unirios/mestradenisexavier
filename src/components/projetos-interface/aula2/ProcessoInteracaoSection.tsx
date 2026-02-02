import { motion } from "framer-motion";
import { 
  Mouse, 
  Monitor, 
  Eye, 
  RefreshCw,
  ArrowRight,
  User,
  Cog,
  MessageSquare
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ProcessoInteracaoSection = () => {
  return (
    <section id="processo-interacao" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-primary">Ciclo de Interação</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Processo de Interação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entenda como usuários e sistemas se comunicam em um ciclo contínuo 
              de ação e interpretação
            </p>
          </div>
        </ScrollReveal>

        {/* Diagrama do Ciclo */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-center mb-8">
              Ciclo Ação → Interpretação (Prates e Barbosa, 2003)
            </h3>
            
            <div className="relative">
              {/* Diagrama Visual */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
                
                {/* Usuário */}
                <motion.div 
                  className="glass-card p-6 text-center w-full max-w-[200px]"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-blue-500" />
                  </div>
                  <h4 className="font-bold">Usuário</h4>
                  <p className="text-xs text-muted-foreground mt-1">Inicia a ação</p>
                </motion.div>

                {/* Seta Ação */}
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-500 text-sm font-medium mb-2">
                    AÇÃO
                  </div>
                  <ArrowRight className="w-8 h-8 text-emerald-500 rotate-0 lg:rotate-0" />
                </motion.div>

                {/* Interface */}
                <motion.div 
                  className="glass-card p-6 text-center w-full max-w-[200px] border-2 border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Monitor className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold">Interface</h4>
                  <p className="text-xs text-muted-foreground mt-1">Ponto de conexão</p>
                </motion.div>

                {/* Seta Sistema */}
                <motion.div 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-500 text-sm font-medium mb-2">
                    PROCESSAMENTO
                  </div>
                  <ArrowRight className="w-8 h-8 text-purple-500" />
                </motion.div>

                {/* Sistema/Aplicação */}
                <motion.div 
                  className="glass-card p-6 text-center w-full max-w-[200px]"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                    <Cog className="w-8 h-8 text-purple-500" />
                  </div>
                  <h4 className="font-bold">Aplicação</h4>
                  <p className="text-xs text-muted-foreground mt-1">Processa dados</p>
                </motion.div>
              </div>

              {/* Linha de Retorno - Interpretação */}
              <motion.div 
                className="mt-8 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                <div className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-500 text-sm font-medium flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>INTERPRETAÇÃO</span>
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              </motion.div>
            </div>

            {/* Explicação */}
            <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border">
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">A ação só será eficiente se o usuário tiver uma interpretação correta.</strong>
                <br />
                O ciclo é contínuo: o usuário age, o sistema responde, e o usuário interpreta a resposta 
                para decidir sua próxima ação.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Pergunta Reflexiva */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Qual o ponto de conexão entre o usuário e o computador?</h4>
                <p className="text-muted-foreground mb-4">
                  A <strong className="text-primary">Interface</strong> é esse ponto de conexão. É através dela 
                  que os usuários têm acesso às funções da aplicação e conseguem realizar suas tarefas.
                </p>
                <div className="p-3 rounded-lg bg-primary/10 text-sm">
                  💡 <strong>Reflexão para a sala:</strong> Peça aos alunos que pensem em exemplos de 
                  interfaces que já usaram hoje e como elas facilitaram (ou dificultaram) suas tarefas.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Foco Principal */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-4">🛣️</div>
              <h4 className="font-bold mb-2">Interface Amigável</h4>
              <p className="text-sm text-muted-foreground">
                Como uma estrada bem sinalizada, a interface deve ter objetos que indiquem o caminho
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-bold mb-2">Usuário Informado</h4>
              <p className="text-sm text-muted-foreground">
                O usuário deve sempre saber onde está e o que está acontecendo no sistema
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold mb-2">Qualidade + Objetivo</h4>
              <p className="text-sm text-muted-foreground">
                Vincular sempre a qualidade de uso com o objetivo da interface
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#interface-definicao"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Definição de Interface</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessoInteracaoSection;
