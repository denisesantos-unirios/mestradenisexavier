import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Image, Type, MousePointer, Keyboard, Volume2, Eye } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const categorias = [
  {
    icon: Image,
    categoria: "Imagens e Mídia",
    cor: "blue",
    itens: [
      { check: "Todas as imagens têm alt text descritivo", nivel: "A" },
      { check: "Imagens decorativas têm alt vazio (alt=\"\")", nivel: "A" },
      { check: "Vídeos têm legendas", nivel: "A" },
      { check: "Áudio tem transcrição", nivel: "A" }
    ]
  },
  {
    icon: Type,
    categoria: "Texto e Tipografia",
    cor: "green",
    itens: [
      { check: "Contraste texto/fundo ≥ 4.5:1 (texto normal)", nivel: "AA" },
      { check: "Contraste texto/fundo ≥ 3:1 (texto grande)", nivel: "AA" },
      { check: "Texto pode ser aumentado até 200%", nivel: "AA" },
      { check: "Espaçamento de linha ≥ 1.5", nivel: "AAA" }
    ]
  },
  {
    icon: Keyboard,
    categoria: "Navegação por Teclado",
    cor: "purple",
    itens: [
      { check: "Todos os elementos interativos são focáveis", nivel: "A" },
      { check: "Ordem de foco é lógica e previsível", nivel: "A" },
      { check: "Indicador de foco é visível", nivel: "AA" },
      { check: "Não há armadilhas de teclado", nivel: "A" }
    ]
  },
  {
    icon: MousePointer,
    categoria: "Interação",
    cor: "orange",
    itens: [
      { check: "Áreas clicáveis têm pelo menos 44x44px", nivel: "AAA" },
      { check: "Links têm texto descritivo (não 'clique aqui')", nivel: "A" },
      { check: "Formulários têm labels associados", nivel: "A" },
      { check: "Mensagens de erro são claras", nivel: "A" }
    ]
  },
  {
    icon: Volume2,
    categoria: "Conteúdo Multimídia",
    cor: "pink",
    itens: [
      { check: "Não há reprodução automática de áudio", nivel: "A" },
      { check: "Controles de mídia são acessíveis", nivel: "A" },
      { check: "Animações podem ser pausadas", nivel: "A" },
      { check: "Não há conteúdo piscando (>3x/seg)", nivel: "A" }
    ]
  },
  {
    icon: Eye,
    categoria: "Estrutura e Semântica",
    cor: "teal",
    itens: [
      { check: "Página tem um único H1", nivel: "A" },
      { check: "Hierarquia de headings é lógica", nivel: "A" },
      { check: "Landmarks ARIA estão presentes", nivel: "A" },
      { check: "Idioma da página está definido", nivel: "A" }
    ]
  }
];

const getColorClasses = (cor: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
    green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
    pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
    teal: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/30" }
  };
  return colors[cor] || colors.blue;
};

const getNivelColor = (nivel: string) => {
  const niveis: Record<string, string> = {
    "A": "bg-green-500/20 text-green-400",
    "AA": "bg-yellow-500/20 text-yellow-400",
    "AAA": "bg-red-500/20 text-red-400"
  };
  return niveis[nivel] || niveis["A"];
};

const ChecklistSection = () => {
  return (
    <section id="checklist" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Checklist WCAG 2.1</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              O Que Verificar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use este checklist para verificar os principais critérios de acessibilidade
              em qualquer interface.
            </p>
          </div>
        </ScrollReveal>

        {/* Legenda */}
        <ScrollReveal animation="scale" delay={0.1}>
          <div className="flex justify-center gap-4 mb-12">
            {[
              { nivel: "A", desc: "Básico" },
              { nivel: "AA", desc: "Recomendado" },
              { nivel: "AAA", desc: "Avançado" }
            ].map((item) => (
              <div key={item.nivel} className="flex items-center gap-2">
                <span className={`px-2 py-1 text-xs font-bold rounded ${getNivelColor(item.nivel)}`}>
                  {item.nivel}
                </span>
                <span className="text-sm text-muted-foreground">{item.desc}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {categorias.map((categoria, index) => {
            const colors = getColorClasses(categoria.cor);
            return (
              <StaggerItem key={index}>
                <motion.div
                  className={`p-6 rounded-2xl bg-card border ${colors.border} h-full`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${colors.bg}`}>
                      <categoria.icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="font-bold">{categoria.categoria}</h3>
                  </div>

                  <ul className="space-y-3">
                    {categoria.itens.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground flex-1">{item.check}</span>
                        <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${getNivelColor(item.nivel)}`}>
                          {item.nivel}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ChecklistSection;
