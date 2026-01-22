import { motion } from "framer-motion";
import { Users, Clock, MessageSquare, AlertTriangle, CheckCircle, Car, Truck, ArrowRight, Zap, RefreshCw } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ParallaxSection from "@/components/animations/ParallaxSection";

const DynamicSection = () => {
  return (
    <section id="dinamica" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/30">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 2 • 50 minutos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              🚀 Dinâmica: O Cliente Confuso
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma simulação prática de metodologias Cascata vs Ágil
            </p>
          </div>
        </ScrollReveal>

        {/* Scenario Card */}
        <ScrollReveal animation="scale" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">📋 Cenário: Locadora de Veículos</h3>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">Requisito:</strong> "Desenhar a tela de cadastro de um carro para a Locadora"
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Sistema Real</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Estudo de Caso</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Trabalho em Equipe</span>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Two Groups Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Group A - Cascata */}
          <ScrollReveal animation="fadeLeft" delay={0.3}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-2xl p-6 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Grupo A</h3>
                  <p className="text-sm text-blue-400">Cascata / Tradicional</p>
                </div>
              </div>

              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                    <MessageSquare className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Fase 1: Perguntas</p>
                      <p className="text-sm text-muted-foreground">5 minutos para fazer perguntas ao "Cliente" (professor)</p>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                    <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Fase 2: Desenvolvimento</p>
                      <p className="text-sm text-muted-foreground">20 minutos para desenhar <strong>sem falar</strong> com o cliente</p>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Fase 3: Entrega Final</p>
                      <p className="text-sm text-muted-foreground">Só entregam no final, sem validações intermediárias</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* The Twist */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-400">😱 A Surpresa!</p>
                    <p className="text-sm text-muted-foreground">
                      "Ah, esqueci de avisar, a locadora agora aluga <strong className="text-red-400">caminhões</strong> também, 
                      essa tela não serve..."
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Truck className="w-4 h-4 text-red-400" />
                      <span className="text-xs text-red-400">Simula a rigidez do modelo clássico</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Group B - Ágil */}
          <ScrollReveal animation="fadeRight" delay={0.4}>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-2xl p-6 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Grupo B</h3>
                  <p className="text-sm text-emerald-400">Ágil / Evolutivo</p>
                </div>
              </div>

              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                    <RefreshCw className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Sprint 1</p>
                      <p className="text-sm text-muted-foreground">5 min desenho → Mostrar → Feedback</p>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                    <RefreshCw className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Sprint 2</p>
                      <p className="text-sm text-muted-foreground">5 min ajuste → Mostrar → Feedback</p>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                    <RefreshCw className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Sprint 3, 4...</p>
                      <p className="text-sm text-muted-foreground">Ciclos curtos de validação contínua</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* The Advantage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-emerald-400">✅ A Vantagem!</p>
                    <p className="text-sm text-muted-foreground">
                      Na segunda rodada de feedback, o requisito dos caminhões já foi 
                      <strong className="text-emerald-400"> corrigido</strong>!
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Truck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-emerald-400">Adaptação rápida a mudanças</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Key Insight */}
        <ParallaxSection speed={0.2}>
          <ScrollReveal animation="fadeUp" delay={0.5}>
            <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                💡 Insight da Dinâmica
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                "Por que o <strong className="text-blue-400">Grupo A</strong> sofreu mais?"
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 font-medium">❌ Cascata</p>
                  <p className="text-sm text-muted-foreground">Descobriu o erro só no final</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-emerald-400 font-medium">✅ Ágil</p>
                  <p className="text-sm text-muted-foreground">Corrigiu no caminho</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        {/* Navigation */}
        <motion.div 
          className="flex justify-center mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#modelagem" className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <span className="text-sm font-medium">Próximo: Conexão com Modelagem</span>
            <ArrowRight className="w-5 h-5 rotate-90" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicSection;
