import { motion } from "framer-motion";
import { Brain, Zap, AlertTriangle, Lightbulb, Gauge, Timer } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const tiposCarga = [
  {
    icon: Brain,
    tipo: "Carga Intrínseca",
    descricao: "Complexidade inerente à tarefa que o usuário precisa realizar",
    exemplo: "Preencher um formulário de imposto de renda é intrinsecamente complexo",
    cor: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30"
  },
  {
    icon: Zap,
    tipo: "Carga Extrínseca",
    descricao: "Complexidade adicionada pelo design ruim da interface",
    exemplo: "Botões mal posicionados, textos confusos, navegação complexa",
    cor: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30"
  },
  {
    icon: Lightbulb,
    tipo: "Carga Germânica",
    descricao: "Esforço mental para criar novos esquemas de conhecimento",
    exemplo: "Aprender a usar uma nova ferramenta de edição de fotos",
    cor: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30"
  }
];

const principios = [
  {
    titulo: "Lei de Miller",
    descricao: "A memória de curto prazo pode reter 7±2 itens",
    aplicacao: "Limite opções de menu a 5-9 itens",
    icon: Gauge
  },
  {
    titulo: "Lei de Hick",
    descricao: "Tempo de decisão aumenta com número de opções",
    aplicacao: "Reduza escolhas ou agrupe em categorias",
    icon: Timer
  },
  {
    titulo: "Reconhecer vs Lembrar",
    descricao: "É mais fácil reconhecer do que lembrar",
    aplicacao: "Use ícones familiares e labels claras",
    icon: Brain
  }
];

const CognicaoSection = () => {
  return (
    <section id="cognicao" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Fundamentos</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Carga Cognitiva
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A carga cognitiva refere-se ao esforço mental necessário para processar informações.
              Um bom design minimiza a carga desnecessária.
            </p>
          </div>
        </ScrollReveal>

        {/* Tipos de Carga Cognitiva */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16" staggerDelay={0.15}>
          {tiposCarga.map((carga, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={`h-full p-6 rounded-2xl bg-gradient-to-br ${carga.cor} border ${carga.borderColor} backdrop-blur-sm`}
                whileHover={{ scale: 1.02 }}
              >
                <carga.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{carga.tipo}</h3>
                <p className="text-muted-foreground mb-4">{carga.descricao}</p>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Exemplo: </span>
                    {carga.exemplo}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Alerta importante */}
        <ScrollReveal animation="scale" delay={0.2}>
          <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-16">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-destructive mb-2">
                  O Objetivo do Designer
                </h3>
                <p className="text-muted-foreground">
                  <strong>Minimizar a carga extrínseca</strong> — aquela causada por um design ruim — 
                  permitindo que o usuário concentre seu esforço mental na tarefa real (carga intrínseca) 
                  e no aprendizado (carga germânica).
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Princípios Cognitivos */}
        <ScrollReveal animation="fadeUp">
          <h3 className="text-2xl font-bold text-center mb-8">
            Princípios Cognitivos no Design
          </h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {principios.map((principio, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <principio.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg">{principio.titulo}</h4>
                </div>
                <p className="text-muted-foreground mb-4">{principio.descricao}</p>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    💡 {principio.aplicacao}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CognicaoSection;
