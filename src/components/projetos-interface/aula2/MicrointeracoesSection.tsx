import { motion } from "framer-motion";
import { 
  Heart, 
  ToggleLeft, 
  Bell, 
  RefreshCw,
  Loader2,
  ThumbsUp,
  Sparkles,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { useState } from "react";

const exemplosMicro = [
  {
    icon: Heart,
    titulo: "Like / Curtir",
    descricao: "Animação de coração ao curtir uma publicação",
    app: "Instagram, Twitter"
  },
  {
    icon: ToggleLeft,
    titulo: "Toggle Switch",
    descricao: "Animação suave ao ligar/desligar uma opção",
    app: "iOS Settings, Android"
  },
  {
    icon: Loader2,
    titulo: "Pull to Refresh",
    descricao: "Animação de loading ao puxar para atualizar",
    app: "Gmail, Twitter"
  },
  {
    icon: Bell,
    titulo: "Notificação",
    descricao: "Badge animado indicando novas mensagens",
    app: "WhatsApp, Slack"
  }
];

const MicrointeracoesSection = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [toggleOn, setToggleOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <section id="microinteracoes" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Detalhes que Encantam</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Microinterações</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pequenos momentos de feedback que tornam a experiência memorável
            </p>
          </div>
        </ScrollReveal>

        {/* Definição */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto mb-16">
            <h3 className="text-xl font-bold mb-4">O que são Microinterações?</h3>
            <p className="text-muted-foreground mb-4">
              São pequenas animações ou respostas visuais que ocorrem durante uma única tarefa. 
              Elas comunicam <span className="text-primary font-medium">feedback</span>, 
              guiam o <span className="text-primary font-medium">usuário</span> e adicionam 
              <span className="text-primary font-medium"> personalidade</span> à interface.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Trigger</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Regras</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Feedback</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Loops & Modos</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Demonstrações Interativas */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-center mb-8">Experimente!</h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* Like Button Demo */}
            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-muted-foreground mb-4">Clique no coração</p>
              <motion.button
                onClick={() => setIsLiked(!isLiked)}
                className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto"
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={isLiked ? { 
                    scale: [1, 1.3, 1],
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Heart 
                    className={`w-10 h-10 transition-colors ${
                      isLiked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
                    }`} 
                  />
                </motion.div>
              </motion.button>
              <p className="text-xs text-muted-foreground mt-4">Microinteração: Like</p>
            </motion.div>

            {/* Toggle Demo */}
            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-muted-foreground mb-4">Clique para alternar</p>
              <button
                onClick={() => setToggleOn(!toggleOn)}
                className={`w-20 h-10 rounded-full mx-auto flex items-center transition-colors ${
                  toggleOn ? "bg-primary" : "bg-secondary"
                }`}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-white shadow-md mx-1"
                  animate={{ x: toggleOn ? 36 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <p className="text-xs text-muted-foreground mt-4">Microinteração: Toggle</p>
            </motion.div>

            {/* Loading Demo */}
            <motion.div
              className="glass-card p-6 text-center"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-muted-foreground mb-4">Clique para atualizar</p>
              <motion.button
                onClick={handleRefresh}
                className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto"
                whileTap={{ scale: 0.9 }}
                disabled={isLoading}
              >
                <motion.div
                  animate={isLoading ? { rotate: 360 } : {}}
                  transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
                >
                  <RefreshCw className={`w-10 h-10 ${isLoading ? "text-primary" : "text-muted-foreground"}`} />
                </motion.div>
              </motion.button>
              <p className="text-xs text-muted-foreground mt-4">Microinteração: Refresh</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Exemplos em Apps */}
        <ScrollReveal>
          <h3 className="text-xl font-bold text-center mb-6">Exemplos no Mundo Real</h3>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {exemplosMicro.map((exemplo, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-4 rounded-xl bg-secondary/50 border border-border"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <exemplo.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-sm">{exemplo.titulo}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{exemplo.descricao}</p>
                  <p className="text-xs text-primary">{exemplo.app}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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

export default MicrointeracoesSection;
