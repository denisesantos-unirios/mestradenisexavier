import { motion } from "framer-motion";
import { PenTool, Image as ImageIcon, MousePointer2 } from "lucide-react";

const tipos = [
  {
    icon: PenTool, cor: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/30",
    titulo: "Wireframes & Rascunhos",
    fidelidade: "Baixa fidelidade",
    prosCons: ["Alterações rápidas", "Validação de regras de negócio", "Sem detalhes visuais/interação"],
  },
  {
    icon: ImageIcon, cor: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30",
    titulo: "Protótipos Visuais",
    fidelidade: "Média-alta fidelidade",
    prosCons: ["Maior apelo visual", "Feitos em Figma/edição gráfica", "Sem interação real; ajustes demorados"],
  },
  {
    icon: MousePointer2, cor: "text-fuchsia-500", bg: "bg-fuchsia-500/10 border-fuchsia-500/30",
    titulo: "Protótipos Interativos",
    fidelidade: "Alta fidelidade",
    prosCons: ["Efeitos e navegação reais", "Descobrem requisitos ocultos", "Exigem experiência e mais tempo"],
  },
];

const PrototipacaoSection = () => (
  <section id="prototipacao" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-sm font-medium mb-6">
          <PenTool className="w-4 h-4" /> Prototipação
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Desenvolvimento por Prototipação</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Esclarece <strong>requisitos, conceitos e funcionalidades</strong> antes do desenvolvimento pleno, propondo soluções adequadas ao problema.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {tipos.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`p-6 rounded-2xl border ${t.bg}`}>
            <t.icon className={`w-10 h-10 ${t.cor} mb-3`} />
            <h3 className="font-bold text-lg mb-1">{t.titulo}</h3>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">{t.fidelidade}</span>
            <ul className="mt-4 space-y-2 text-sm">
              {t.prosCons.map((p, j) => (
                <li key={j} className="flex gap-2"><span className={t.cor}>•</span>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PrototipacaoSection;
