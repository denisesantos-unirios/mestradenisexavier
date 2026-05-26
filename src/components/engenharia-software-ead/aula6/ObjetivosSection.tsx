import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Layers } from "lucide-react";

const objetivos = [
  { icon: Target, title: "Planejar", desc: "Planejar a aplicação das técnicas de elicitação de requisitos de projetos de software." },
  { icon: Lightbulb, title: "Aplicar", desc: "Aplicar técnicas de elicitação de requisitos de projetos de software." },
  { icon: Layers, title: "Organizar", desc: "Organizar os requisitos de um projeto de software." },
];

const ObjetivosSection = () => (
  <section id="objetivos" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">🎯 Objetivos de Aprendizagem</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ao final desta aula, você será capaz de planejar e conduzir uma elicitação de requisitos com método e profundidade.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {objetivos.map((o, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full bg-card/50 border-border hover:border-rose-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                  <o.icon className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">📖 Contextualização</h3>
            <p className="text-muted-foreground mb-3">
              Pagar uma conta apontando o celular para um código de barras, com reconhecimento facial, sem sair de casa —
              tudo isso só existe porque <strong className="text-rose-400">alguém descobriu, organizou e priorizou</strong> os
              requisitos do sistema antes de uma linha de código ser escrita.
            </p>
            <p className="text-muted-foreground">
              A <strong className="text-rose-400">elicitação de requisitos</strong> é a etapa em que se identificam as
              fontes de informação (usuários, leis, regulamentações, investidores) e se selecionam, em função do contexto,
              as técnicas adequadas para descobrir o que o software deve fazer.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default ObjetivosSection;
