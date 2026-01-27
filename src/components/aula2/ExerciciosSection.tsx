import { motion } from "framer-motion";
import { FileText, Target, Lightbulb, ExternalLink, CheckCircle, Smartphone, CreditCard, Pizza } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const exercicios = [
  {
    numero: 1,
    titulo: "Identificação de Sistemas",
    descricao: "Liste três sistemas que você utiliza no seu dia a dia e seus componentes principais.",
    exemplo: {
      sistema: "Aplicativo de Banco Digital",
      componentes: ["Gerenciamento de contas (saldo, extrato)", "Transferência de valores (TED, PIX)", "Pagamento de boletos"]
    },
    icon: Smartphone
  },
  {
    numero: 2,
    titulo: "Modelagem de Processo",
    descricao: "Desenhe um pequeno diagrama de fluxo de dados para um sistema simples.",
    exemplo: {
      sistema: "Sistema de pedidos de uma pizzaria",
      componentes: ["Cliente → Faz Pedido → Cadastro de Pedidos", "Cozinha ← Prepara ← Pedido Confirmado"]
    },
    icon: Pizza
  }
];

const ExerciciosSection = () => {
  return (
    <section id="exercicios" className="min-h-screen py-20 px-6 relative overflow-hidden">
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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Atividade Prática</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              📝 Exercícios Práticos
            </h2>
            <p className="text-xl text-muted-foreground">
              Aplique os conceitos aprendidos
            </p>
          </div>
        </ScrollReveal>

        {/* Exercícios */}
        <StaggerContainer className="space-y-8 mb-12">
          {exercicios.map((exercicio) => (
            <StaggerItem key={exercicio.numero}>
              <ScrollReveal animation="fadeUp" delay={0.2 * exercicio.numero}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <exercicio.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                            Exercício {exercicio.numero}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mt-1">{exercicio.titulo}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="p-4 rounded-xl bg-secondary/50 mb-6">
                      <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Descrição
                      </h4>
                      <p className="text-muted-foreground">{exercicio.descricao}</p>
                    </div>

                    {/* Exemplo */}
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5" />
                        Exemplo: {exercicio.exemplo.sistema}
                      </h4>
                      <ul className="space-y-2">
                        {exercicio.exemplo.componentes.map((comp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tool Link */}
        <ScrollReveal animation="scale" delay={0.4}>
          <motion.a
            href="https://app.diagrams.net/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-between p-6 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors group mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Draw.io (Diagrams.net)</p>
                <p className="text-muted-foreground">Ferramenta gratuita para criar diagramas DFD</p>
              </div>
            </div>
            <ExternalLink className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </ScrollReveal>

        {/* Dica Final */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
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
                  Lembre-se: o DFD é uma ferramenta de <strong className="text-primary">comunicação</strong>. 
                  Ele deve ser claro o suficiente para que qualquer pessoa da equipe entenda o fluxo de dados do sistema.
                  Não se preocupe com a perfeição no início - o importante é <strong className="text-primary">praticar</strong>!
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
            href="#introducao"
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

export default ExerciciosSection;
