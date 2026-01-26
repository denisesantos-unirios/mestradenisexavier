import { motion } from "framer-motion";
import { Monitor, Keyboard, Volume2, MousePointer, Glasses, Mic } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const tecnologias = [
  {
    icon: Volume2,
    nome: "Leitores de Tela",
    descricao: "Software que converte texto e elementos da interface em áudio",
    exemplos: ["NVDA", "JAWS", "VoiceOver", "TalkBack"],
    dica: "Use HTML semântico e ARIA labels"
  },
  {
    icon: Keyboard,
    nome: "Navegação por Teclado",
    descricao: "Permite usar o site apenas com teclado, sem mouse",
    exemplos: ["Tab para navegar", "Enter para ativar", "Setas para menus"],
    dica: "Garanta foco visível e ordem lógica"
  },
  {
    icon: Glasses,
    nome: "Ampliadores de Tela",
    descricao: "Aumentam partes da tela para usuários com baixa visão",
    exemplos: ["Windows Magnifier", "ZoomText", "Lupa macOS"],
    dica: "Use unidades relativas (rem, em)"
  },
  {
    icon: MousePointer,
    nome: "Dispositivos Alternativos",
    descricao: "Substituem mouse e teclado tradicionais",
    exemplos: ["Eye tracking", "Switch devices", "Head pointers"],
    dica: "Áreas clicáveis maiores (44x44px mínimo)"
  },
  {
    icon: Mic,
    nome: "Controle por Voz",
    descricao: "Permite controlar interfaces através de comandos de voz",
    exemplos: ["Dragon NaturallySpeaking", "Voice Control iOS", "Voice Access"],
    dica: "Labels claros e únicos para elementos"
  },
  {
    icon: Monitor,
    nome: "Alto Contraste",
    descricao: "Modos de cor de alto contraste para melhor legibilidade",
    exemplos: ["Windows High Contrast", "Dark mode", "Contrast themes"],
    dica: "Não dependa apenas de cores"
  }
];

const TecnologiasAssistivasSection = () => {
  return (
    <section id="tecnologias" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Ferramentas de Acesso</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Tecnologias Assistivas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça as principais tecnologias que usuários com deficiência usam
              para acessar a web e como seu design pode suportá-las.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {tecnologias.map((tech, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="p-6 rounded-2xl bg-card border border-border h-full group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <tech.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold">{tech.nome}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{tech.descricao}</p>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Exemplos:</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.exemplos.map((exemplo, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                      >
                        {exemplo}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs text-primary font-medium">💡 Dica de Design:</p>
                  <p className="text-sm text-muted-foreground">{tech.dica}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Dica importante */}
        <ScrollReveal animation="scale" delay={0.3}>
          <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🧪 Teste Você Mesmo!
            </h3>
            <p className="text-muted-foreground mb-4">
              A melhor forma de entender acessibilidade é experimentar. Tente navegar em um site:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium mb-1">🔇 Sem áudio</p>
                <p className="text-sm text-muted-foreground">Vídeos são compreensíveis?</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium mb-1">⌨️ Só teclado</p>
                <p className="text-sm text-muted-foreground">Consegue completar tarefas?</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium mb-1">🔍 Zoom 200%</p>
                <p className="text-sm text-muted-foreground">O conteúdo permanece legível?</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TecnologiasAssistivasSection;
