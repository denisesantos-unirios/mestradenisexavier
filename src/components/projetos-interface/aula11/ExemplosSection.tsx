import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const exemplos = [
  {
    problema: "Alt text ausente",
    errado: {
      codigo: '<img src="logo.png">',
      explicacao: "Leitores de tela não conseguem descrever a imagem"
    },
    correto: {
      codigo: '<img src="logo.png" alt="Logo da empresa XYZ">',
      explicacao: "Descrição clara do conteúdo da imagem"
    }
  },
  {
    problema: "Link genérico",
    errado: {
      codigo: '<a href="/docs">Clique aqui</a>',
      explicacao: "Não informa o destino do link fora de contexto"
    },
    correto: {
      codigo: '<a href="/docs">Documentação do produto</a>',
      explicacao: "Link autodescritivo e compreensível"
    }
  },
  {
    problema: "Formulário sem label",
    errado: {
      codigo: '<input type="email" placeholder="Email">',
      explicacao: "Placeholder não substitui label para acessibilidade"
    },
    correto: {
      codigo: '<label for="email">Email</label>\n<input id="email" type="email">',
      explicacao: "Label associado ao input pelo atributo for/id"
    }
  },
  {
    problema: "Botão sem texto acessível",
    errado: {
      codigo: '<button><svg>...</svg></button>',
      explicacao: "Ícone sem descrição textual"
    },
    correto: {
      codigo: '<button aria-label="Fechar menu">\n  <svg>...</svg>\n</button>',
      explicacao: "aria-label fornece texto para tecnologias assistivas"
    }
  },
  {
    problema: "Contraste insuficiente",
    errado: {
      codigo: 'color: #999; background: #fff;',
      explicacao: "Contraste 2.85:1 - abaixo do mínimo"
    },
    correto: {
      codigo: 'color: #595959; background: #fff;',
      explicacao: "Contraste 7:1 - atende AA e AAA"
    }
  },
  {
    problema: "Foco invisível",
    errado: {
      codigo: 'button:focus { outline: none; }',
      explicacao: "Remove indicador visual de foco"
    },
    correto: {
      codigo: 'button:focus { \n  outline: 2px solid blue;\n  outline-offset: 2px;\n}',
      explicacao: "Foco visível e distinto"
    }
  }
];

const ExemplosSection = () => {
  return (
    <section id="exemplos" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Antes e Depois</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Exemplos de Correções
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja exemplos práticos de como corrigir problemas comuns de acessibilidade.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid lg:grid-cols-2 gap-6" staggerDelay={0.1}>
          {exemplos.map((exemplo, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="p-6 rounded-2xl bg-card border border-border h-full"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="text-primary">#{index + 1}</span>
                  {exemplo.problema}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Errado */}
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="font-medium text-red-400">Errado</span>
                    </div>
                    <pre className="text-xs bg-background/50 p-3 rounded-lg overflow-x-auto mb-2 text-muted-foreground">
                      <code>{exemplo.errado.codigo}</code>
                    </pre>
                    <p className="text-xs text-muted-foreground">{exemplo.errado.explicacao}</p>
                  </div>

                  {/* Correto */}
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-medium text-green-400">Correto</span>
                    </div>
                    <pre className="text-xs bg-background/50 p-3 rounded-lg overflow-x-auto mb-2 text-muted-foreground">
                      <code>{exemplo.correto.codigo}</code>
                    </pre>
                    <p className="text-xs text-muted-foreground">{exemplo.correto.explicacao}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ExemplosSection;
