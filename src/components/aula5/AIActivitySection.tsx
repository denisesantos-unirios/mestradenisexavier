import { motion } from "framer-motion";
import { 
  FlaskConical, 
  Users, 
  Clock, 
  Target, 
  CheckSquare, 
  AlertTriangle,
  Laptop,
  MessageSquare,
  FileText,
  Award,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

const activitySteps = [
  {
    phase: "Fase 1",
    title: "Geração com IA",
    duration: "15 min",
    icon: MessageSquare,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    tasks: [
      "Escolham um dos cenários propostos",
      "Criem um prompt detalhado para gerar User Stories",
      "Usem o ChatGPT/Claude para gerar 5-7 user stories",
      "Copiem o output completo da IA"
    ]
  },
  {
    phase: "Fase 2",
    title: "Análise Crítica",
    duration: "20 min",
    icon: FlaskConical,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    tasks: [
      "Analisem cada user story individualmente",
      "Identifiquem problemas usando critérios INVEST",
      "Marquem alucinações ou informações incorretas",
      "Listem os problemas encontrados em cada story"
    ]
  },
  {
    phase: "Fase 3",
    title: "Refinamento Manual",
    duration: "20 min",
    icon: FileText,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    tasks: [
      "Reescrevam as user stories com problemas",
      "Adicionem critérios de aceitação claros",
      "Garantam que todas atendem ao INVEST",
      "Documentem as mudanças feitas"
    ]
  },
  {
    phase: "Fase 4",
    title: "Apresentação",
    duration: "5 min/grupo",
    icon: Users,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    tasks: [
      "Apresentem o cenário escolhido",
      "Mostrem o output original da IA",
      "Expliquem os problemas encontrados",
      "Apresentem as user stories refinadas"
    ]
  }
];

const scenarios = [
  {
    title: "🏥 Sistema Hospitalar",
    description: "Agendamento de consultas e exames para um hospital público",
    complexity: "Alta",
    focus: "Múltiplos atores, fluxos críticos"
  },
  {
    title: "🎓 Plataforma EAD",
    description: "Sistema de cursos online com videoaulas e certificados",
    complexity: "Média",
    focus: "Gamificação, progresso do aluno"
  },
  {
    title: "🍕 Delivery de Comida",
    description: "App de delivery focado em restaurantes locais",
    complexity: "Média",
    focus: "Tempo real, geolocalização"
  },
  {
    title: "🏋️ App de Academia",
    description: "Gestão de treinos, check-in e acompanhamento físico",
    complexity: "Baixa",
    focus: "Personalização, métricas"
  },
  {
    title: "📚 Biblioteca Digital",
    description: "Sistema de empréstimo e reserva de livros",
    complexity: "Baixa",
    focus: "Prazos, notificações"
  },
  {
    title: "🚗 Estacionamento Inteligente",
    description: "App para encontrar e reservar vagas de estacionamento",
    complexity: "Média",
    focus: "IoT, pagamentos"
  }
];

const evaluationCriteria = [
  { criterion: "Identificação de problemas na saída da IA", weight: "30%" },
  { criterion: "Qualidade das user stories refinadas", weight: "30%" },
  { criterion: "Aplicação dos critérios INVEST", weight: "20%" },
  { criterion: "Clareza da apresentação", weight: "10%" },
  { criterion: "Trabalho em equipe", weight: "10%" }
];

const AIActivitySection = () => {
  return (
    <section id="atividade" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-background to-teal-950/20" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <Laptop className="w-4 h-4" />
              Atividade em Laboratório
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Workshop: IA + Pensamento Crítico
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gerar User Stories com IA e refiná-las manualmente para encontrar 
              <span className="text-emerald-400 font-semibold"> erros e alucinações</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Activity Info */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-violet-400 mx-auto mb-3" />
              <h4 className="font-bold">Grupos de 3-4</h4>
              <p className="text-sm text-muted-foreground">Trabalho colaborativo</p>
            </div>
            <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold">60 minutos</h4>
              <p className="text-sm text-muted-foreground">+ apresentações</p>
            </div>
            <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
              <Target className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h4 className="font-bold">Objetivo</h4>
              <p className="text-sm text-muted-foreground">Análise crítica de outputs de IA</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Phases */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl font-bold mb-6 text-center">Fases da Atividade</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {activitySteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${step.bgColor} border ${step.borderColor} rounded-xl p-6 relative`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold ${step.color}`}>{step.phase}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </span>
                </div>
                <step.icon className={`w-8 h-8 ${step.color} mb-3`} />
                <h4 className="font-bold mb-3">{step.title}</h4>
                <ul className="space-y-2">
                  {step.tasks.map((task, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckSquare className={`w-4 h-4 ${step.color} mt-0.5 flex-shrink-0`} />
                      {task}
                    </li>
                  ))}
                </ul>
                {index < activitySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Scenarios */}
        <ScrollReveal delay={0.3}>
          <div className="bg-card/30 border border-border rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-violet-400" />
              Cenários Disponíveis (escolha 1 por grupo)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-background/50 border border-border rounded-lg p-4 hover:border-violet-500/50 transition-colors"
                >
                  <h4 className="font-bold mb-2">{scenario.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{scenario.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-violet-400">Foco: {scenario.focus}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      scenario.complexity === "Alta" 
                        ? "bg-red-500/10 text-red-400"
                        : scenario.complexity === "Média"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-emerald-500/10 text-emerald-400"
                    }`}>
                      {scenario.complexity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Evaluation */}
        <ScrollReveal delay={0.4}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-amber-400">
                <Award className="w-5 h-5" />
                Critérios de Avaliação
              </h3>
              <ul className="space-y-3">
                {evaluationCriteria.map((item, index) => (
                  <li key={index} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.criterion}</span>
                    <span className="font-bold text-amber-400">{item.weight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-red-400">
                <AlertTriangle className="w-5 h-5" />
                O que NÃO fazer
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  Aceitar o output da IA sem questionar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  Copiar e colar sem ler criticamente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  Ignorar problemas óbvios por pressa
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  Não adicionar critérios de aceitação
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  Deixar user stories vagas ou genéricas
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Deliverable */}
        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl p-8">
              <FileText className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Entregável</h3>
              <p className="text-muted-foreground max-w-lg">
                Documento com: prompt utilizado, output original da IA, 
                problemas identificados e user stories refinadas com critérios de aceitação.
              </p>
              <p className="mt-4 text-sm text-emerald-400 font-medium">
                📤 Enviar via AVA até o final da aula
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AIActivitySection;
