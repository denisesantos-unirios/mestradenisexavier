import { motion } from "framer-motion";
import { Layers, Users, Calendar, Wrench } from "lucide-react";

const cards = [
  { icon: Users, title: "Papéis Claros", desc: "Define usuários, desenvolvedores e gestores envolvidos." },
  { icon: Calendar, title: "Quando & Onde", desc: "Estabelece o momento e o contexto de cada atividade." },
  { icon: Wrench, title: "Como Fazer", desc: "Define métodos, técnicas e ferramentas a serem usadas." },
  { icon: Layers, title: "Harmoniza Áreas", desc: "Coordena todas as áreas envolvidas no processo." },
];

const MetodologiasSection = () => (
  <section id="metodologias" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-6">
          <Layers className="w-4 h-4" /> Fundamentos
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Metodologias de Desenvolvimento</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Uma <strong>metodologia</strong> é um conjunto de métodos, regras e postulados empregados por uma disciplina (Webster's, 1998).
          No desenvolvimento de software, ela harmoniza pessoas, prazos e entregas — evitando que a tarefa, complexa por natureza, vire caos.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl border border-border bg-card hover:border-violet-500/40 transition">
            <c.icon className="w-8 h-8 text-violet-500 mb-3" />
            <h3 className="font-bold mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetodologiasSection;
