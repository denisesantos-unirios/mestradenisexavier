import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { 
  Monitor, Users, Target, Brain, Accessibility, Heart,
  ArrowRight, Layers, Eye, Hand, MessageSquare, Lightbulb
} from "lucide-react";

const conceitos = [
  {
    semana: "Semana 1",
    titulo: "Fundamentos de IHC",
    cor: "from-blue-500 to-cyan-500",
    icon: Monitor,
    topicos: [
      "Interface vs Interação",
      "Usabilidade: Eficácia, Eficiência, Satisfação",
      "6 Princípios de Don Norman",
      "Microinterações"
    ]
  },
  {
    semana: "Semana 2",
    titulo: "Modelos e Usuários",
    cor: "from-purple-500 to-pink-500",
    icon: Users,
    topicos: [
      "Modelos mentais vs Modelos conceituais",
      "Perfis de usuários",
      "Personas e cenários",
      "Análise de stakeholders"
    ]
  },
  {
    semana: "Semana 3",
    titulo: "Requisitos e Coleta",
    cor: "from-green-500 to-emerald-500",
    icon: Target,
    topicos: [
      "Metas de usabilidade",
      "Heurísticas de Nielsen",
      "Técnicas de coleta de dados",
      "Criação de personas"
    ]
  },
  {
    semana: "Semana 4",
    titulo: "Cognição e Tarefas",
    cor: "from-orange-500 to-red-500",
    icon: Brain,
    topicos: [
      "Carga cognitiva",
      "Leis de Miller, Hick e Fitts",
      "Princípios da Gestalt",
      "Análise Hierárquica de Tarefas (HTA)"
    ]
  },
  {
    semana: "Semana 5",
    titulo: "UX Design",
    cor: "from-indigo-500 to-violet-500",
    icon: Heart,
    topicos: [
      "UX vs UI",
      "Pirâmide de Walter",
      "Honeycomb de Morville",
      "Mapa de Jornada do Usuário"
    ]
  },
  {
    semana: "Semana 6",
    titulo: "Acessibilidade",
    cor: "from-teal-500 to-cyan-500",
    icon: Accessibility,
    topicos: [
      "Tipos de deficiências",
      "WCAG 2.1 (POUR)",
      "Níveis A, AA, AAA",
      "Ferramentas de auditoria"
    ]
  }
];

const MapaConceitulaSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mapa Conceitual da Etapa 1
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visão consolidada de todos os conceitos estudados nas 6 primeiras semanas
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conceitos.map((conceito, index) => (
            <ScrollReveal key={conceito.semana} animation="fadeUp" delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-background rounded-2xl border border-border/50 overflow-hidden h-full"
              >
                <div className={`h-2 bg-gradient-to-r ${conceito.cor}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${conceito.cor} flex items-center justify-center`}>
                      <conceito.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{conceito.semana}</p>
                      <h3 className="font-bold">{conceito.titulo}</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {conceito.topicos.map((topico) => (
                      <li key={topico} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {topico}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Conexões entre conceitos */}
        <ScrollReveal animation="fadeUp" delay={0.6}>
          <div className="mt-16 p-8 bg-background rounded-2xl border border-border/50">
            <h3 className="text-xl font-bold mb-6 text-center">Conexões Fundamentais</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Eye,
                  titulo: "Percepção → Interface",
                  desc: "Gestalt informa o design visual"
                },
                {
                  icon: Brain,
                  titulo: "Cognição → Usabilidade",
                  desc: "Carga cognitiva define simplicidade"
                },
                {
                  icon: Hand,
                  titulo: "Tarefas → UX",
                  desc: "Análise de tarefas guia a jornada"
                },
                {
                  icon: Accessibility,
                  titulo: "Acessibilidade → Inclusão",
                  desc: "WCAG garante acesso universal"
                }
              ].map((conexao, index) => (
                <div key={conexao.titulo} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <conexao.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{conexao.titulo}</h4>
                  <p className="text-xs text-muted-foreground">{conexao.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MapaConceitulaSection;
