import { motion } from "framer-motion";
import { 
  Brain, 
  Lightbulb, 
  User,
  Monitor,
  ArrowRight,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ModelosMentaisSection = () => {
  return (
    <section id="modelos-mentais" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Brain className="w-4 h-4" />
              <span>Psicologia da Interação</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Modelos Mentais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Como os usuários imaginam que o sistema funciona
            </p>
          </div>
        </ScrollReveal>

        {/* Definição */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-bold mb-4">O que são Modelos Mentais?</h3>
            <p className="text-muted-foreground mb-6">
              Modelo mental é a <span className="text-primary font-medium">representação interna</span> que 
              o usuário cria sobre como um sistema funciona. É baseado em experiências anteriores, 
              conhecimento prévio e expectativas.
            </p>
            
            {/* Diagrama Visual */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-8">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <span className="font-medium">Modelo do Usuário</span>
                <span className="text-xs text-muted-foreground">Como imagina que funciona</span>
              </motion.div>

              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
                </motion.div>
                <span className="text-xs text-muted-foreground text-center">deve se alinhar</span>
              </div>

              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <Monitor className="w-12 h-12 text-accent-foreground" />
                </div>
                <span className="font-medium">Modelo do Sistema</span>
                <span className="text-xs text-muted-foreground">Como realmente funciona</span>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Gap de Modelos */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div
              className="glass-card p-6 border-l-4 border-l-rose-500"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-rose-500" />
                <h4 className="font-bold">Quando NÃO se alinham</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Usuário fica confuso e frustrado</li>
                <li>• Comete erros frequentes</li>
                <li>• Abandona a tarefa ou o sistema</li>
                <li>• Precisa de treinamento extenso</li>
              </ul>
            </motion.div>

            <motion.div
              className="glass-card p-6 border-l-4 border-l-emerald-500"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <h4 className="font-bold">Quando se alinham</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Interação fluida e natural</li>
                <li>• Usuário antecipa comportamentos</li>
                <li>• Menos erros e suporte</li>
                <li>• Maior satisfação</li>
              </ul>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Exemplo Prático */}
        <ScrollReveal>
          <div className="glass-card p-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h4 className="font-bold">Exemplo: Lixeira do Computador</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              O ícone de "lixeira" funciona porque as pessoas já têm um 
              <span className="text-primary font-medium"> modelo mental de lixeira física</span>: 
              jogar algo fora → pode recuperar se precisar → esvaziar para deletar definitivamente. 
              O sistema digital aproveita esse conhecimento prévio.
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#usuarios"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Compreendendo Usuários</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ModelosMentaisSection;
