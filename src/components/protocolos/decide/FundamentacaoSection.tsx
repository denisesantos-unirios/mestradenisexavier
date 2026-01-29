import { motion } from "framer-motion";
import { BookOpen, Zap, FlaskConical, Eye, Brain, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const FundamentacaoSection = () => {
  const paradigmas = [
    {
      title: "Quick and Dirty",
      desc: "Avaliações informais e rápidas durante o processo iterativo. Útil para feedback preliminar.",
      icon: Zap,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Testes de Usabilidade",
      desc: "Avaliações controladas em laboratório com usuários executando tarefas predefinidas.",
      icon: FlaskConical,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Estudos de Campo",
      desc: "Investigações no ambiente natural de uso. Técnicas incluem observação etnográfica e contextual inquiry.",
      icon: Eye,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Avaliação Preditiva",
      desc: "Métodos baseados em modelos e heurísticas. Inclui avaliação heurística e percurso cognitivo.",
      icon: Brain,
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const criterios = [
    {
      title: "Eficácia",
      desc: "Acurácia e completude com que usuários atingem objetivos específicos"
    },
    {
      title: "Eficiência",
      desc: "Recursos despendidos em relação à acurácia e completude atingidas"
    },
    {
      title: "Satisfação",
      desc: "Grau em que as reações do usuário são positivas ao usar o sistema"
    }
  ];

  return (
    <section id="Fundamentação" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Fundamentação Teórica</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Design Centrado no Usuário
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O framework DECIDE está fundamentado nos princípios do DCU, que coloca as necessidades 
              e limitações dos usuários no centro do processo de design.
            </p>
          </div>
        </ScrollReveal>

        {/* Paradigmas */}
        <ScrollReveal delay={0.1}>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Paradigmas de Avaliação em IHC
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {paradigmas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/50 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Critérios ISO */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Critérios de Usabilidade - ISO 9241-11 (2018)
              </h3>
              <p className="text-muted-foreground text-sm">
                "O grau em que um sistema pode ser usado por usuários específicos para atingir 
                objetivos específicos com eficácia, eficiência e satisfação em um contexto de uso específico."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {criterios.map((criterio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-primary/10 border border-primary/20"
                >
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground text-lg mb-2">{criterio.title}</h4>
                  <p className="text-sm text-muted-foreground">{criterio.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FundamentacaoSection;
