import { motion } from "framer-motion";
import { FileText, Target, CheckCircle, ExternalLink, Calendar, Award, Lightbulb, Car } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const steps = [
  "Revisar os conceitos de DFD apresentados na aula",
  "Identificar a entidade externa (Cliente)",
  "Identificar o processo principal (Alugar Veículo)",
  "Identificar os depósitos de dados necessários (Veículos, Clientes)",
  "Desenhar o DFD Nível 0 usando Draw.io ou à mão",
  "Postar no AVA com legenda explicando cada elemento"
];

const ActivitySection = () => {
  return (
    <section id="atividade" className="min-h-screen py-20 px-6 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Atividade AVA • Etapa 1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              📝 Atividade Prática
            </h2>
            <p className="text-xl text-muted-foreground">
              Modelagem Inicial - Locadora de Veículos
            </p>
          </div>
        </ScrollReveal>

        {/* Main Activity Card */}
        <ScrollReveal animation="scale" delay={0.2}>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl overflow-hidden mb-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Car className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Modelagem Inicial - Locadora de Veículos (Treino)
                  </h3>
                  <p className="text-muted-foreground">Valendo nota da Etapa 1</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div className="p-4 rounded-xl bg-secondary/50">
                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Descrição
                </h4>
                <p className="text-muted-foreground">
                  "Com base na dinâmica da aula e nos slides de Análise de Sistemas, elabore um 
                  <strong className="text-primary"> DFD Nível 0 simples</strong> para o processo de 
                  <strong className="text-primary"> 'Alugar Veículo'</strong> da Locadora que discutimos. 
                  Utilize a ferramenta Draw.io ou faça à mão e poste a foto."
                </p>
              </div>

              {/* Objective */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Objetivo
                </h4>
                <p className="text-muted-foreground">
                  Treinar a notação DFD antes de começar o projeto grande (Cemitério/Presídio)
                </p>
              </div>

              {/* Steps */}
              <div>
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Passo a Passo
                </h4>
                <StaggerContainer className="space-y-2">
                  {steps.map((step, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center flex-shrink-0 font-bold">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Tool Link */}
              <motion.a
                href="https://app.diagrams.net/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Draw.io (Diagrams.net)</p>
                    <p className="text-sm text-muted-foreground">Ferramenta gratuita para criar diagramas</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Deadline */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <Calendar className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="font-bold text-amber-400">Prazo de Entrega</p>
                  <p className="text-sm text-muted-foreground">Confira a data no ambiente virtual de aprendizagem</p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Tips */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 border border-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">💡 Dica da Professora</h4>
                <p className="text-muted-foreground">
                  Lembre-se: o DFD Nível 0 é uma visão geral do sistema. Não precisa detalhar todos os processos internos, 
                  apenas mostre as <strong className="text-primary">entidades externas</strong>, o 
                  <strong className="text-primary"> processo principal</strong> e os 
                  <strong className="text-primary"> principais depósitos de dados</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Back to Top */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.a
            href="#teoria"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            ↑ Voltar ao Início
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitySection;
