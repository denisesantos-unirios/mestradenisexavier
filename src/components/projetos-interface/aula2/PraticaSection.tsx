import { motion } from "framer-motion";
import { 
  Search, 
  CheckCircle2, 
  Smartphone,
  AlertTriangle,
  Star,
  FileText,
  ArrowUp,
  Lightbulb,
  Clock
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const appsSugeridos = [
  { nome: "Nubank", categoria: "Banco" },
  { nome: "iFood", categoria: "Delivery" },
  { nome: "Uber", categoria: "Transporte" },
  { nome: "Spotify", categoria: "Música" },
  { nome: "Instagram", categoria: "Social" },
  { nome: "WhatsApp", categoria: "Mensagens" }
];

const criteriosAnalise = [
  {
    icon: Search,
    titulo: "Visibilidade",
    pergunta: "As funções principais estão visíveis?"
  },
  {
    icon: AlertTriangle,
    titulo: "Feedback",
    pergunta: "O app responde às suas ações?"
  },
  {
    icon: CheckCircle2,
    titulo: "Consistência",
    pergunta: "Os padrões se repetem?"
  },
  {
    icon: Star,
    titulo: "Affordance",
    pergunta: "Os elementos sugerem como usá-los?"
  }
];

const PraticaSection = () => {
  return (
    <section id="pratica" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-primary">Mão na Massa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Atividade Prática</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Análise de interface do cotidiano
            </p>
          </div>
        </ScrollReveal>

        {/* Card Principal */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Análise Crítica de Interface</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>20-30 minutos</span>
                </div>
              </div>
            </div>

            {/* Instruções */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-bold mb-2">📱 Passo 1: Escolha um App</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Selecione um aplicativo que você usa no dia a dia e analise-o criticamente.
                </p>
                <div className="flex flex-wrap gap-2">
                  {appsSugeridos.map((app, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {app.nome}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-bold mb-2">🔍 Passo 2: Analise os Princípios</h4>
                <p className="text-sm text-muted-foreground">
                  Para cada princípio de Norman, responda as perguntas abaixo:
                </p>
              </div>
            </div>

            {/* Critérios */}
            <StaggerContainer className="grid md:grid-cols-2 gap-4 mb-8">
              {criteriosAnalise.map((criterio, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="p-4 rounded-xl bg-background border border-border flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <criterio.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{criterio.titulo}</h4>
                      <p className="text-xs text-muted-foreground">{criterio.pergunta}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Entrega */}
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <h4 className="font-bold mb-2">📝 Entrega</h4>
              <p className="text-sm text-muted-foreground">
                Produza um breve relatório (1 página) com:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Nome do app analisado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Análise de cada princípio (com exemplos)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  1 ponto forte e 1 sugestão de melhoria
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Dica */}
        <ScrollReveal>
          <div className="glass-card p-6 max-w-2xl mx-auto flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Dica da Professora</h4>
              <p className="text-sm text-muted-foreground">
                Faça capturas de tela do app enquanto analisa. Isso vai ajudar você a identificar 
                exemplos concretos de cada princípio e criar um relatório mais rico!
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Próxima Aula */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-xl mx-auto">
            <p className="text-muted-foreground mb-2">Na próxima aula (Aula 3)</p>
            <p className="text-xl font-bold">"Conceitualizando a Interação"</p>
            <p className="text-sm text-muted-foreground mt-2">Modelos de interação, feedback, constraints e mapeamento</p>
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

export default PraticaSection;
