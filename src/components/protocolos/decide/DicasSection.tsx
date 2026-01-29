import { motion } from "framer-motion";
import { Lightbulb, TestTube, FileCheck, Target, Map, Users, BarChart, Smile, AlertCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const DicasSection = () => {
  const dicas = [
    {
      icon: TestTube,
      titulo: "Realize estudos piloto",
      desc: "Teste seu protocolo com 1-2 participantes antes da coleta principal para identificar problemas no roteiro, instrumentos ou equipamentos."
    },
    {
      icon: FileCheck,
      titulo: "Documente rigorosamente",
      desc: "Mantenha registros detalhados de todas as decisões metodológicas, permitindo rastreabilidade e replicabilidade do estudo."
    },
    {
      icon: Target,
      titulo: "Equilibre profundidade e abrangência",
      desc: "Estudos muito ambiciosos frequentemente resultam em dados superficiais. Prefira investigações focadas e bem executadas."
    },
    {
      icon: Map,
      titulo: "Considere o contexto de uso",
      desc: "Avaliações em laboratório diferem do uso real. Sempre que possível, complemente com estudos de campo ou diários de uso."
    },
    {
      icon: Users,
      titulo: "Envolva stakeholders desde o início",
      desc: "Alinhe expectativas com clientes/orientadores sobre escopo, cronograma e entregas esperadas."
    },
    {
      icon: BarChart,
      titulo: "Planeje a análise antes da coleta",
      desc: "Defina antecipadamente como cada dado será analisado. Isso evita coleta de informações irrelevantes ou análises ad hoc."
    },
    {
      icon: Smile,
      titulo: "Mantenha neutralidade durante as sessões",
      desc: "Evite expressões faciais ou verbais que indiquem aprovação/desaprovação das ações do participante."
    },
    {
      icon: AlertCircle,
      titulo: "Priorize achados por impacto",
      desc: "Nem todo problema tem a mesma gravidade. Utilize escalas de severidade para orientar recomendações."
    }
  ];

  return (
    <section id="Dicas" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">Boas Práticas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dicas para Pesquisadores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Orientações práticas para condução de experimentos de usabilidade em projetos de software.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dicas.map((dica, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                className="glass-card p-5 h-full group hover:border-primary/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <dica.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{dica.titulo}</h3>
                <p className="text-xs text-muted-foreground">{dica.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Citação Final */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 glass-card p-8 text-center">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <blockquote className="text-lg text-foreground italic mb-4">
              "A qualidade de um experimento de usabilidade depende mais da clareza dos objetivos 
              e do rigor metodológico do que da sofisticação das ferramentas utilizadas."
            </blockquote>
            <p className="text-muted-foreground text-sm">
              — Princípio fundamental em IHC
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DicasSection;
