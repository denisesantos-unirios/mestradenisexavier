import { ClipboardCheck, FileText, Calculator, AlertCircle, Mail, BookOpen, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ParallaxSection from "@/components/animations/ParallaxSection";

const etapa1Avaliacoes = {
  nota1: {
    title: "AVA - Atividades Práticas",
    pontos: 10.0,
    descricao: "3 atividades práticas pelo AVA",
    detalhes: ["Atividade 1: 3,0 pontos", "Atividade 2: 3,0 pontos", "Atividade 3: 4,0 pontos"]
  },
  nota2: {
    title: "Seminários sobre Modelos de Processo de Software",
    pontos: 10.0,
    descricao: "Etapa 1 — Tarefa 1: abertura 20/07/2026 e vencimento 14/09/2026",
    topicos: [
      "Seminário Modelo Cascata",
      "Seminário Modelo Incremental",
      "Seminário Modelo Iterativo",
      "Seminário Modelo em V (V-Model)",
      "Seminário Modelo Espiral"
    ]
  }
};

const etapa2Avaliacoes = {
  nota1: {
    title: "AVA - Exercícios Práticos",
    pontos: 10.0,
    descricao: "9 exercícios práticos pelo AVA",
    exercicios: [
      { nome: "Patrimônio Móvel", pontos: "1,1" },
      { nome: "Cemitério", pontos: "1,1" },
      { nome: "Casa de Detenção", pontos: "1,1" },
      { nome: "Empresa de Ônibus", pontos: "1,1" },
      { nome: "Extintores", pontos: "1,1" },
      { nome: "Revendedora Agro-Pecuária", pontos: "1,1" },
      { nome: "Gerenciamento de Projetos", pontos: "1,1" },
      { nome: "Área de Plantio", pontos: "1,1" },
      { nome: "Locadora de Veículos", pontos: "1,2" }
    ]
  },
  nota2: {
    title: "Avaliação Institucional Escrita",
    pontos: 10.0,
    descricao: "10 questões (8 alternativas + 2 dissertativas)",
    detalhes: "Modelo ENADE • Individual • Conforme calendário acadêmico"
  }
};

const observacoes = [
  "Projetos devem ser apresentados impreterivelmente na data estabelecida",
  "Atraso sem justificativa: desconto de 10% por dia",
  "Frequência mínima: 75% das atividades",
  "Aprovação: Média ≥ 7,0 com frequência suficiente",
  "Média entre 3,0 e 7,0: direito à Avaliação Final"
];

const bibliografia = {
  basica: [
    "PRESSMAN, R.; MAXIM, B. Engenharia de Software - 8ª Edição. McGraw Hill Brasil, 2016.",
    "SOMMERVILLE, I. Software Engineering. Boston: Pearson, 2011."
  ],
  complementar: [
    "PRESSMAN, Roger S.; MAXIM, Bruce R. Engenharia de Software. Porto Alegre: Grupo A, 2021.",
    "FILHO, Wilson de Pádua P. Engenharia de Software - Projetos e Processos - Vol. 2. Rio de Janeiro: Grupo GEN, 2019."
  ]
};

const AvaliacaoSection = () => {
  return (
    <section id="avaliacao" className="section-container relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="scale">
            <span className="crisis-badge mb-6 inline-block">Sistema de Avaliação</span>
          </ScrollReveal>
          <ScrollReveal animation="blur" delay={0.2} duration={0.8}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="accent-text">Avaliação</span> & Critérios
            </h2>
          </ScrollReveal>
        </div>

        {/* Etapa 1 */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="glass-card p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-bold text-xl">1ª</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">Etapa 1</h3>
            </div>
            
            <motion.div 
              className="p-6 rounded-xl bg-secondary/50 border border-border/50"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{etapa1Avaliacoes.nota1.title}</span>
                </div>
                <span className="text-primary font-bold">{etapa1Avaliacoes.nota1.pontos} pts</span>
              </div>
              <p className="text-muted-foreground mb-4">{etapa1Avaliacoes.nota1.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {etapa1Avaliacoes.nota1.detalhes.map((detalhe, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {detalhe}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Etapa 2 */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="glass-card p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent font-bold text-xl">2ª</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">Etapa 2</h3>
            </div>
            
            {/* Nota 1 - Exercícios */}
            <motion.div 
              className="p-6 rounded-xl bg-secondary/50 border border-border/50 mb-6"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">Nota 1: {etapa2Avaliacoes.nota1.title}</span>
                </div>
                <span className="text-primary font-bold">{etapa2Avaliacoes.nota1.pontos} pts</span>
              </div>
              <p className="text-muted-foreground mb-4">{etapa2Avaliacoes.nota1.descricao}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {etapa2Avaliacoes.nota1.exercicios.map((ex, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-background/50"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-sm text-foreground">{ex.nome}</span>
                    <span className="text-xs text-primary font-medium">{ex.pontos}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Nota 2 - Prova */}
            <motion.div 
              className="p-6 rounded-xl bg-secondary/50 border border-border/50"
              whileHover={{ borderColor: "hsl(var(--accent) / 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">Nota 2: {etapa2Avaliacoes.nota2.title}</span>
                </div>
                <span className="text-accent font-bold">{etapa2Avaliacoes.nota2.pontos} pts</span>
              </div>
              <p className="text-muted-foreground mb-2">{etapa2Avaliacoes.nota2.descricao}</p>
              <p className="text-sm text-muted-foreground/80">{etapa2Avaliacoes.nota2.detalhes}</p>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Fórmula da Média */}
        <ParallaxSection speed={0.2}>
          <ScrollReveal animation="scale" delay={0.2}>
            <motion.div 
              className="glass-card p-8 text-center border-primary/30 mb-12"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Cálculo da Média</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
                <span className="text-muted-foreground">Média Semestral =</span>
                <span className="px-4 py-2 rounded-lg bg-primary/20 text-primary font-mono">
                  (Etapa 1 + Etapa 2) / 2
                </span>
              </div>
              <p className="text-muted-foreground mt-4">Média ≥ 7,0 + Frequência ≥ 75% = <span className="text-primary font-semibold">Aprovação</span></p>
            </motion.div>
          </ScrollReveal>
        </ParallaxSection>

        {/* Observações */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="glass-card p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-bold text-foreground">Observações Importantes</h3>
            </div>
            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {observacoes.map((obs, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{obs}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Atendimento */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="glass-card p-6 mb-12">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">Atendimento Extra Classe</h4>
                <p className="text-muted-foreground">
                  Via AVA ou agendamento • <span className="text-primary">denise.santos@unirios.edu.br</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bibliografia */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Bibliografia</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">Básica</h4>
                <ul className="space-y-2">
                  {bibliografia.basica.map((ref, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{ref}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-3">Complementar</h4>
                <ul className="space-y-2">
                  {bibliografia.complementar.map((ref, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{ref}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AvaliacaoSection;
