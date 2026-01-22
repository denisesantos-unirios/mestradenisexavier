import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Bell, 
  Lock, 
  Map,
  RotateCcw,
  Eye,
  ArrowRight,
  Lightbulb,
  CheckCircle2
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const principiosNorman = [
  {
    icon: Eye,
    titulo: "Visibilidade",
    descricao: "Quanto mais visíveis as funções, mais fácil o usuário sabe o que fazer",
    exemplo: "Botões claramente identificados vs. gestos ocultos",
    bom: "Menu sempre visível",
    ruim: "Funções escondidas em gestos"
  },
  {
    icon: MessageSquare,
    titulo: "Feedback",
    descricao: "O sistema deve informar o resultado de cada ação",
    exemplo: "Confirmações, animações, sons",
    bom: "Loading spinner + mensagem de sucesso",
    ruim: "Silêncio após clicar"
  },
  {
    icon: Lock,
    titulo: "Restrições (Constraints)",
    descricao: "Limitar as ações possíveis para prevenir erros",
    exemplo: "Campos desabilitados, validações",
    bom: "Botão 'Enviar' só ativa quando formulário válido",
    ruim: "Permitir qualquer entrada"
  },
  {
    icon: Map,
    titulo: "Mapeamento",
    descricao: "Relação clara entre controles e seus efeitos",
    exemplo: "Seta para cima = subir volume",
    bom: "Controles espacialmente relacionados",
    ruim: "Botões aleatoriamente posicionados"
  },
  {
    icon: RotateCcw,
    titulo: "Consistência",
    descricao: "Elementos similares devem funcionar de forma similar",
    exemplo: "Mesmo ícone = mesma função",
    bom: "Padrões visuais uniformes",
    ruim: "Cada tela funciona diferente"
  },
  {
    icon: Lightbulb,
    titulo: "Affordance",
    descricao: "O design sugere como usar o objeto",
    exemplo: "Botão 3D parece 'clicável'",
    bom: "Links sublinhados, botões com sombra",
    ruim: "Texto que é link mas parece normal"
  }
];

const ModelosInteracaoSection = () => {
  return (
    <section id="modelos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Bell className="w-4 h-4 text-primary" />
              <span className="text-primary">Don Norman</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Princípios de Design</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seis princípios fundamentais para criar interfaces intuitivas
            </p>
          </div>
        </ScrollReveal>

        {/* Princípios Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principiosNorman.map((principio, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="glass-card p-6 h-full group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <principio.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{principio.titulo}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{principio.descricao}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-emerald-600 dark:text-emerald-400">{principio.bom}</span>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-rose-500/10">
                    <span className="w-4 h-4 rounded-full border-2 border-rose-500 shrink-0 mt-0.5" />
                    <span className="text-rose-600 dark:text-rose-400">{principio.ruim}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Citação */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto text-center">
            <p className="text-xl italic text-muted-foreground mb-4">
              "Design é realmente um ato de comunicação, o que significa ter uma compreensão profunda 
              da pessoa com quem o designer está se comunicando."
            </p>
            <p className="font-bold text-primary">— Don Norman</p>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#microinteracoes"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Microinterações</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ModelosInteracaoSection;
