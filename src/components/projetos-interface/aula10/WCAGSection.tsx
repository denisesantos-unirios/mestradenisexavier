import { motion } from "framer-motion";
import { Eye, Hand, Brain, Settings, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const principiosWCAG = [
  {
    numero: "1",
    nome: "Perceptível",
    descricao: "As informações e os componentes da interface devem ser apresentados de forma que possam ser percebidos.",
    icon: Eye,
    cor: "blue",
    exemplos: [
      "Alternativas textuais para conteúdo não-textual",
      "Legendas para conteúdo multimídia",
      "Conteúdo adaptável a diferentes apresentações",
      "Contraste suficiente entre texto e fundo"
    ]
  },
  {
    numero: "2",
    nome: "Operável",
    descricao: "Os componentes da interface e a navegação devem ser operáveis por todos os usuários.",
    icon: Hand,
    cor: "green",
    exemplos: [
      "Funcionalidades acessíveis via teclado",
      "Tempo suficiente para ler e usar o conteúdo",
      "Navegação clara e consistente",
      "Evitar conteúdo que cause convulsões"
    ]
  },
  {
    numero: "3",
    nome: "Compreensível",
    descricao: "As informações e operações da interface devem ser compreensíveis.",
    icon: Brain,
    cor: "purple",
    exemplos: [
      "Texto legível e compreensível",
      "Páginas previsíveis e consistentes",
      "Ajuda na entrada de dados",
      "Prevenção e correção de erros"
    ]
  },
  {
    numero: "4",
    nome: "Robusto",
    descricao: "O conteúdo deve ser robusto o suficiente para ser interpretado por diversas tecnologias.",
    icon: Settings,
    cor: "orange",
    exemplos: [
      "Compatibilidade com tecnologias assistivas",
      "HTML válido e semântico",
      "ARIA quando necessário",
      "Testes em diferentes dispositivos"
    ]
  }
];

const niveisConformidade = [
  {
    nivel: "A",
    descricao: "Nível mínimo de acessibilidade",
    icon: CheckCircle2,
    cor: "green",
    requisitos: "Requisitos básicos que todos os sites devem atender",
    exemplo: "Textos alternativos em imagens"
  },
  {
    nivel: "AA",
    descricao: "Nível recomendado para a maioria",
    icon: AlertTriangle,
    cor: "yellow",
    requisitos: "Requisitos intermediários, padrão para conformidade legal",
    exemplo: "Contraste de cores 4.5:1"
  },
  {
    nivel: "AAA",
    descricao: "Nível mais alto de acessibilidade",
    icon: XCircle,
    cor: "red",
    requisitos: "Requisitos avançados, nem sempre alcançáveis",
    exemplo: "Linguagem de sinais em vídeos"
  }
];

const getColorClasses = (cor: string) => {
  const colors: Record<string, { bg: string; text: string; gradient: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", gradient: "from-blue-500/20 to-blue-500/5" },
    green: { bg: "bg-green-500/10", text: "text-green-400", gradient: "from-green-500/20 to-green-500/5" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", gradient: "from-purple-500/20 to-purple-500/5" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-400", gradient: "from-orange-500/20 to-orange-500/5" },
    yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", gradient: "from-yellow-500/20 to-yellow-500/5" },
    red: { bg: "bg-red-500/10", text: "text-red-400", gradient: "from-red-500/20 to-red-500/5" }
  };
  return colors[cor] || colors.blue;
};

const WCAGSection = () => {
  return (
    <section id="wcag" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Diretrizes Internacionais</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              WCAG 2.1 - Web Content Accessibility Guidelines
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As diretrizes de acessibilidade da W3C são o padrão internacional
              para criar conteúdo web acessível.
            </p>
          </div>
        </ScrollReveal>

        {/* Acrônimo POUR */}
        <ScrollReveal animation="scale" delay={0.1}>
          <div className="bg-card rounded-2xl border border-border p-6 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Princípios <span className="text-primary">POUR</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Perceptível", "Operável", "Compreensível", "Robusto"].map((item, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="font-bold text-lg">{item[0]}</span>
                  {item.slice(1)}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Princípios WCAG */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16" staggerDelay={0.1}>
          {principiosWCAG.map((principio, index) => {
            const colors = getColorClasses(principio.cor);
            return (
              <StaggerItem key={index}>
                <motion.div
                  className={`p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} border border-border h-full`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <span className={`text-2xl font-bold ${colors.text}`}>{principio.numero}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <principio.icon className={`w-5 h-5 ${colors.text}`} />
                        <h3 className="text-xl font-bold">{principio.nome}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{principio.descricao}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {principio.exemplos.map((exemplo, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                        {exemplo}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Níveis de Conformidade */}
        <ScrollReveal animation="fadeUp">
          <h3 className="text-2xl font-bold text-center mb-8">Níveis de Conformidade</h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {niveisConformidade.map((nivel, index) => {
            const colors = getColorClasses(nivel.cor);
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 rounded-2xl bg-card border border-border text-center h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 mx-auto rounded-full ${colors.bg} flex items-center justify-center mb-4`}>
                    <span className={`text-3xl font-bold ${colors.text}`}>{nivel.nivel}</span>
                  </div>
                  <h4 className="font-bold mb-2">{nivel.descricao}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{nivel.requisitos}</p>
                  <div className={`px-3 py-2 rounded-lg ${colors.bg}`}>
                    <p className="text-xs text-muted-foreground">Exemplo:</p>
                    <p className={`text-sm font-medium ${colors.text}`}>{nivel.exemplo}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WCAGSection;
