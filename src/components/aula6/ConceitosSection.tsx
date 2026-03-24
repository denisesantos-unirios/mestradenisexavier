import { motion } from "framer-motion";
import { HelpCircle, CheckCircle2, Eye, AlertTriangle, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const porqueModelar = [
  { icon: "💬", title: "Clareza na comunicação", description: "Facilita o entendimento entre desenvolvedores, analistas e stakeholders." },
  { icon: "🐛", title: "Redução de erros", description: "Ajuda a identificar problemas e inconsistências antes do desenvolvimento." },
  { icon: "🔧", title: "Manutenção facilitada", description: "Com um modelo bem definido, futuras atualizações e correções se tornam mais fáceis." },
  { icon: "⚡", title: "Melhor desempenho", description: "Uma estrutura bem planejada evita redundâncias e melhora a eficiência do banco de dados." },
];

const etapasModelagem = [
  { step: 1, title: "Observação e análise", description: "Identifique os objetos (entidades) relevantes, suas características (atributos) e como eles se relacionam." },
  { step: 2, title: "Definição de entidades e relacionamentos", description: "Determine quais elementos farão parte do modelo e como eles interagem." },
  { step: 3, title: "Criação do diagrama", description: "Utilize ferramentas visuais para representar as entidades, atributos e relacionamentos (DER)." },
  { step: 4, title: "Validação e revisão", description: "Verifique se o modelo atende aos requisitos e representa fielmente o ambiente real." },
];

const ConceitosSection = () => {
  return (
    <section id="conceitos" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Conceitos Fundamentais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que é Modelagem de Dados?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              É o processo de representar, de forma estruturada, os dados que serão utilizados em um sistema.
              Uma representação abstrata e simplificada das informações.
            </p>
          </div>
        </ScrollReveal>

        {/* Modelo */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-teal-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">O que é um Modelo?</h3>
                <p className="text-muted-foreground">
                  <strong className="text-teal-400">Representação abstrata e simplificada</strong> de um sistema real,
                  com a qual se pode explicar ou testar o seu comportamento (Cougo, 1997).
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-secondary/50 text-center">
                <span className="text-3xl mb-2 block">🏠</span>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Planta Baixa</strong> — representa a casa antes de construí-la
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 text-center">
                <span className="text-3xl mb-2 block">👗</span>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Manequim</strong> — modelo do corpo humano para roupas
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 text-center">
                <span className="text-3xl mb-2 block">📊</span>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Modelo de Dados</strong> — informa a estrutura, não os dados em si
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Por que modelar */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-teal-400" />
            É realmente necessário modelar?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {porqueModelar.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -3 }}
                className="p-5 rounded-xl bg-card/90 border border-border"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-destructive">Sem modelagem</strong>, o risco de criar sistemas desorganizados
              e difíceis de manter é muito maior.
            </p>
          </div>
        </ScrollReveal>

        {/* Como modelar */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-amber-400" />
              Como devemos modelar?
            </h3>
            <div className="space-y-4">
              {etapasModelagem.map((etapa) => (
                <motion.div
                  key={etapa.step}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-card/90 border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-400 font-bold">{etapa.step}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{etapa.title}</h4>
                    <p className="text-sm text-muted-foreground">{etapa.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConceitosSection;
