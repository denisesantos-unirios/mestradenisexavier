import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, HelpCircle, Settings, Wrench, Shield, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const fases = [
  {
    letra: "D",
    titulo: "Determinar",
    descricao: "Determinar os objetivos gerais que a avaliação deverá tratar.",
    exemplo: "Observar se os usuários conseguiam compreender o que podiam fazer e como usar o Quadro de Avisos.",
    icon: Target,
    cor: "text-violet-400",
    bgCor: "bg-violet-500/10",
    borderCor: "border-violet-500/20",
  },
  {
    letra: "E",
    titulo: "Explorar",
    descricao: "Explorar perguntas específicas a serem respondidas pela avaliação.",
    exemplo: "O usuário consegue entender e executar as tarefas básicas? O sistema de ajuda é útil? Consegue distinguir espaços públicos e privativos?",
    icon: HelpCircle,
    cor: "text-fuchsia-400",
    bgCor: "bg-fuchsia-500/10",
    borderCor: "border-fuchsia-500/20",
  },
  {
    letra: "C",
    titulo: "Escolher (Choose)",
    descricao: "Escolher o paradigma e as técnicas de avaliação que responderão às perguntas.",
    exemplo: "Teste de comunicabilidade, teste de usabilidade, observação de uso, protocolo verbal.",
    icon: Settings,
    cor: "text-pink-400",
    bgCor: "bg-pink-500/10",
    borderCor: "border-pink-500/20",
  },
  {
    letra: "I",
    titulo: "Identificar",
    descricao: "Identificar questões práticas que devem ser tratadas.",
    exemplo: "Seleção de 5 usuários por perfil, geração de scripts, questionários pré/pós-teste, teste piloto.",
    icon: Wrench,
    cor: "text-orange-400",
    bgCor: "bg-orange-500/10",
    borderCor: "border-orange-500/20",
  },
  {
    letra: "D",
    titulo: "Decidir",
    descricao: "Decidir como lidar com questões éticas.",
    exemplo: "Consentimento informado (TCLE), preservação do anonimato, garantia de bem-estar dos participantes.",
    icon: Shield,
    cor: "text-emerald-400",
    bgCor: "bg-emerald-500/10",
    borderCor: "border-emerald-500/20",
  },
  {
    letra: "E",
    titulo: "Avaliar (Evaluate)",
    descricao: "Avaliar, interpretar e apresentar os dados coletados.",
    exemplo: "Análise dos dados, geração de relatório com problemas encontrados e hipóteses sobre causas.",
    icon: BarChart3,
    cor: "text-cyan-400",
    bgCor: "bg-cyan-500/10",
    borderCor: "border-cyan-500/20",
  },
];

const DECIDESection = () => (
  <section id="decide" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🧪 Framework <span className="text-violet-400">DECIDE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guia sistemático para o planejamento completo de uma avaliação de interfaces com usuários.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fases.map((fase, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className={`h-full bg-card/50 border ${fase.borderCor} hover:scale-[1.02] transition-transform`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${fase.bgCor} flex items-center justify-center`}>
                    <span className={`text-2xl font-black ${fase.cor}`}>{fase.letra}</span>
                  </div>
                  <div>
                    <h3 className={`font-bold ${fase.cor}`}>{fase.titulo}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{fase.descricao}</p>
                <div className="px-3 py-2 rounded-lg bg-background/50 border border-border text-xs text-muted-foreground">
                  💡 <strong>Exemplo:</strong> {fase.exemplo}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DECIDESection;
