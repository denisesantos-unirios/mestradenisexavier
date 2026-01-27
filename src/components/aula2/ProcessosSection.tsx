import { motion } from "framer-motion";
import { Settings, FileText, Search, Palette, Code, TestTube, Rocket, RefreshCw, Zap, Shield, CheckCircle, Users } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ParallaxSection from "@/components/animations/ParallaxSection";

const atividadesProcesso = [
  { icon: FileText, title: "Estudo", description: "Compreensão inicial das necessidades e problemas do sistema" },
  { icon: Search, title: "Análise", description: "Levantamento detalhado dos requisitos e especificações" },
  { icon: Palette, title: "Projeto", description: "Desenho da solução, definindo arquitetura e funcionalidades" },
  { icon: Code, title: "Codificação", description: "Desenvolvimento do software conforme especificações" },
  { icon: TestTube, title: "Testes", description: "Verificação e validação para garantir funcionamento" },
  { icon: Rocket, title: "Implantação", description: "Entrega e instalação no ambiente do cliente" }
];

const metodologiasTradi = [
  "Cascata (Waterfall)",
  "Modelo em V (V-Model)",
  "Espiral (Spiral Model)",
  "Modelo Incremental",
  "Modelo Iterativo",
  "PMBOK"
];

const atividadesApoio = [
  { icon: Settings, title: "Controle e Acompanhamento", description: "Avaliar o progresso do projeto" },
  { icon: Shield, title: "Administração de Riscos", description: "Identificar e mitigar riscos" },
  { icon: CheckCircle, title: "Garantia da Qualidade", description: "Verificar se atende aos requisitos" },
  { icon: Users, title: "Revisões Técnicas", description: "Identificar e corrigir erros" }
];

const ProcessosSection = () => {
  return (
    <section id="processos" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Processos de Software</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Processos de Software
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um processo é um <strong className="text-primary">conjunto de atividades, ações e tarefas</strong> realizadas 
              para criar um produto de trabalho (software). <strong className="text-primary">Objetivo:</strong> Entregar o software com qualidade e dentro do prazo.
            </p>
          </div>
        </ScrollReveal>

        {/* Conceitos */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Atividades, Ações e Tarefas</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <h4 className="font-bold text-blue-400 mb-2">Atividade</h4>
                <p className="text-sm text-muted-foreground">
                  Esforça-se para atingir um <strong>objetivo amplo</strong> (ex: comunicar com interessados)
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <h4 className="font-bold text-amber-400 mb-2">Ação</h4>
                <p className="text-sm text-muted-foreground">
                  Conjunto de tarefas que resultam num <strong>artefato</strong> (ex: modelo de arquitetura)
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <h4 className="font-bold text-emerald-400 mb-2">Tarefa</h4>
                <p className="text-sm text-muted-foreground">
                  Objetivo <strong>pequeno e bem definido</strong> (ex: realizar um teste de unidades)
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Atividades Genéricas */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Atividades Genéricas de Processo
            </h3>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {atividadesProcesso.map((ativ, index) => (
                  <StaggerItem key={ativ.title}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center relative z-10">
                        <ativ.icon className="w-6 h-6 text-primary" />
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{ativ.title}</h4>
                      <p className="text-xs text-muted-foreground">{ativ.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>

        {/* Metodologias */}
        <ParallaxSection speed={0.2}>
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Tradicional */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Processo Tradicional</h3>
                    <p className="text-sm text-blue-400">Abordagem sequencial</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Adequado para projetos com requisitos bem definidos.
                </p>
                <div className="flex flex-wrap gap-2">
                  {metodologiasTradi.slice(0, 4).map((met) => (
                    <span key={met} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">
                      {met}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Ágil */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Metodologias Ágeis</h3>
                    <p className="text-sm text-emerald-400">Scrum, Kanban, etc.</p>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Entregas incrementais e contínuas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Maior adaptação a mudanças
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Foco no feedback constante
                  </li>
                </ul>
              </motion.div>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        {/* Atividades de Apoio */}
        <ScrollReveal animation="scale" delay={0.5}>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Atividades de Apoio no Processo
            </h3>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {atividadesApoio.map((ativ) => (
                <StaggerItem key={ativ.title}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-xl bg-secondary/50 text-center"
                  >
                    <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/20 flex items-center justify-center">
                      <ativ.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{ativ.title}</h4>
                    <p className="text-xs text-muted-foreground">{ativ.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessosSection;
