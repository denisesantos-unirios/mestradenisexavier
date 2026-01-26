import { motion } from "framer-motion";
import { Search, Chrome, Code, Eye, Zap, Settings } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const ferramentas = [
  {
    icon: Chrome,
    nome: "Lighthouse",
    tipo: "Chrome DevTools",
    descricao: "Ferramenta integrada ao Chrome que audita acessibilidade, performance e SEO",
    como: [
      "Abra DevTools (F12)",
      "Vá para aba Lighthouse",
      "Selecione 'Accessibility'",
      "Clique em 'Analyze'"
    ],
    pontuacao: true
  },
  {
    icon: Search,
    nome: "WAVE",
    tipo: "Extensão/Site",
    descricao: "Ferramenta visual que destaca erros diretamente na página",
    como: [
      "Instale a extensão WAVE",
      "Acesse qualquer site",
      "Clique no ícone WAVE",
      "Veja os erros destacados"
    ],
    pontuacao: false
  },
  {
    icon: Code,
    nome: "axe DevTools",
    tipo: "Extensão",
    descricao: "Auditoria profunda com sugestões de correção e referências WCAG",
    como: [
      "Instale axe DevTools",
      "Abra DevTools (F12)",
      "Vá para aba 'axe'",
      "Clique em 'Scan ALL'"
    ],
    pontuacao: false
  },
  {
    icon: Eye,
    nome: "Color Contrast Checker",
    tipo: "Site/Extensão",
    descricao: "Verifica se o contraste entre cores atende aos padrões WCAG",
    como: [
      "Acesse webaim.org/resources/contrastchecker",
      "Insira cor do texto",
      "Insira cor de fundo",
      "Veja se passa AA/AAA"
    ],
    pontuacao: true
  },
  {
    icon: Zap,
    nome: "Accessibility Insights",
    tipo: "Extensão Microsoft",
    descricao: "Testes rápidos e detalhados com guia passo a passo",
    como: [
      "Instale a extensão",
      "Use 'FastPass' para teste rápido",
      "Use 'Assessment' para auditoria completa",
      "Siga o checklist guiado"
    ],
    pontuacao: false
  },
  {
    icon: Settings,
    nome: "Screen Reader",
    tipo: "Software",
    descricao: "Teste real com leitor de tela (NVDA gratuito para Windows)",
    como: [
      "Baixe NVDA (nvaccess.org)",
      "Instale e abra",
      "Navegue usando apenas teclado",
      "Ouça como o site é lido"
    ],
    pontuacao: false
  }
];

const FerramentasSection = () => {
  return (
    <section id="ferramentas" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Ferramentas de Auditoria</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Como Testar Acessibilidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça as principais ferramentas para identificar problemas
              de acessibilidade em sites e aplicativos.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {ferramentas.map((ferramenta, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="p-6 rounded-2xl bg-card border border-border h-full group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <ferramenta.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{ferramenta.nome}</h3>
                      <span className="text-xs text-muted-foreground">{ferramenta.tipo}</span>
                    </div>
                  </div>
                  {ferramenta.pontuacao && (
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
                      Pontuação
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4">{ferramenta.descricao}</p>

                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs font-medium text-primary mb-2">Como usar:</p>
                  <ol className="space-y-1">
                    {ferramenta.como.map((passo, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="font-bold text-primary">{i + 1}.</span>
                        {passo}
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FerramentasSection;
