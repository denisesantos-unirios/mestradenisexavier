import { motion } from "framer-motion";
import { 
  Lightbulb, 
  FolderOpen, 
  Trash2, 
  Save,
  MousePointer,
  Calendar,
  FileText,
  AlertCircle,
  Check,
  X,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const exemplosMetaforas = [
  { icon: FolderOpen, nome: "Pasta", real: "Pasta de arquivos físicos", digital: "Diretório de arquivos" },
  { icon: Trash2, nome: "Lixeira", real: "Cesto de lixo", digital: "Exclusão de arquivos" },
  { icon: Save, nome: "Disquete", real: "Mídia de armazenamento", digital: "Salvar documento" },
  { icon: Calendar, nome: "Agenda", real: "Agenda de papel", digital: "Calendário digital" }
];

const exemplosAffordance = [
  { 
    bom: true, 
    titulo: "Botão 3D", 
    descricao: "Sombra e relevo indicam que é clicável" 
  },
  { 
    bom: true, 
    titulo: "Link Sublinhado", 
    descricao: "Cor diferente e sublinhado indicam navegação" 
  },
  { 
    bom: false, 
    titulo: "Texto Link Escondido", 
    descricao: "Texto que é link mas parece texto normal" 
  },
  { 
    bom: false, 
    titulo: "Botões Flat Demais", 
    descricao: "Sem feedback visual de interatividade" 
  }
];

const MetaforasAffordanceSection = () => {
  return (
    <section id="metaforas-affordance" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-primary">Design de Sucesso</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Metáforas e Affordance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dois conceitos fundamentais para criar interfaces intuitivas
            </p>
          </div>
        </ScrollReveal>

        {/* Metáforas */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-10 max-w-5xl mx-auto mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Metáforas</h3>
                <p className="text-muted-foreground">
                  Analogias estabelecidas pelo dia a dia dos usuários, relacionando os artefatos 
                  da interface com o ambiente real. Tornam mais fácil para os usuários criarem 
                  um <strong className="text-foreground">modelo mental</strong> do sistema.
                </p>
              </div>
            </div>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {exemplosMetaforas.map((metafora, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="p-4 rounded-xl bg-secondary/50 border border-border text-center"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                      <metafora.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h4 className="font-bold text-sm mb-2">{metafora.nome}</h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      <span className="text-blue-400">Real:</span> {metafora.real}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-400">Digital:</span> {metafora.digital}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-500 mb-1">⚠️ Cuidado!</h4>
                  <p className="text-sm text-muted-foreground">
                    É preciso ter cautela na utilização de metáforas. Se existirem incoerências, 
                    podem causar dificuldades para os usuários e consequências desagradáveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Affordance */}
        <ScrollReveal>
          <div className="glass-card p-8 md:p-10 max-w-5xl mx-auto mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                <MousePointer className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">2. Affordance</h3>
                <p className="text-muted-foreground">
                  Se refere às <strong className="text-foreground">propriedades reais que os usuários percebem</strong>, 
                  de como determinado artefato evidencia a sua forma de utilização. Elementos gráficos 
                  como botões, ícones, links e barras de rolagem devem parecer evidentes na sua utilização.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Bons Exemplos */}
              <div>
                <h4 className="font-bold text-emerald-500 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Boa Affordance
                </h4>
                <div className="space-y-3">
                  {exemplosAffordance.filter(e => e.bom).map((exemplo, index) => (
                    <motion.div
                      key={index}
                      className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                      whileHover={{ x: 5 }}
                    >
                      <h5 className="font-semibold text-emerald-500 text-sm">{exemplo.titulo}</h5>
                      <p className="text-xs text-muted-foreground">{exemplo.descricao}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Maus Exemplos */}
              <div>
                <h4 className="font-bold text-rose-500 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Má Affordance
                </h4>
                <div className="space-y-3">
                  {exemplosAffordance.filter(e => !e.bom).map((exemplo, index) => (
                    <motion.div
                      key={index}
                      className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20"
                      whileHover={{ x: 5 }}
                    >
                      <h5 className="font-semibold text-rose-500 text-sm">{exemplo.titulo}</h5>
                      <p className="text-xs text-muted-foreground">{exemplo.descricao}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparação Visual 2D vs 3D */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h4 className="font-bold text-center mb-6">2D vs 3D: Qual Usar?</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border text-center">
                <div className="flex justify-center gap-2 mb-4">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium shadow-md">
                    ENTRAR
                  </button>
                  <button className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm font-medium shadow-md">
                    SAIR
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Botões 3D</strong> com sombra podem parecer clicáveis, 
                  mas se mal utilizados deixam a interface saturada
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-secondary/50 border border-border text-center">
                <div className="flex justify-center gap-2 mb-4">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium">
                    ENTRAR
                  </button>
                  <button className="px-4 py-2 border border-border text-foreground rounded text-sm font-medium">
                    SAIR
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Botões 2D (Flat)</strong> proporcionam uma interface 
                  limpa e são facilmente percebidos quando bem contrastados
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-center text-sm">
                💡 <strong>Dica:</strong> O uso de figuras 2D pode assegurar a mesma funcionalidade 
                dos 3D, além de proporcionar uma interface mais limpa e moderna.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#engenharia-cognitiva"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Engenharia Cognitiva</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MetaforasAffordanceSection;
