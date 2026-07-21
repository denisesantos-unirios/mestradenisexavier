import { motion } from "framer-motion";
import { UserCircle2, Target } from "lucide-react";

const invest = [
  { l: "I", nome: "Independent", desc: "Independente — não depende de outras histórias." },
  { l: "N", nome: "Negotiable", desc: "Negociável — ponto de partida para discussão e melhorias." },
  { l: "V", nome: "Valuable", desc: "De grande valor — entrega valor claro para o cliente." },
  { l: "E", nome: "Estimable", desc: "Estimável — contém informação suficiente para estimar esforço." },
  { l: "S", nome: "Small", desc: "Pequena — cabe na duração de uma sprint." },
  { l: "T", nome: "Testable", desc: "Testável — pode ser validada com critérios claros." },
];

const HistoriaUsuarioSection = () => (
  <section id="user-stories" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-500 text-sm font-medium mb-6">
          <UserCircle2 className="w-4 h-4" /> Requisitos Ágeis
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Histórias de Usuário</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Descrição <strong>curta e simples</strong> de uma necessidade, contada da perspectiva de quem precisa.
          Deve explicar <em>para quem</em>, <em>o quê</em> e <em>por quê</em>.
        </p>
      </motion.div>

      {/* Template */}
      <div className="p-8 rounded-2xl border-2 border-fuchsia-500/30 bg-fuchsia-500/5 mb-12">
        <h3 className="font-bold text-xl mb-4">📝 Template padrão</h3>
        <p className="text-lg font-mono bg-background p-4 rounded-lg border border-border">
          <strong>Como</strong> [tipo de usuário],<br />
          <strong>eu quero</strong> [alguma funcionalidade],<br />
          <strong>para que</strong> [algum benefício/valor].
        </p>
        <div className="mt-4 p-4 rounded-lg bg-background border border-border">
          <span className="text-xs uppercase tracking-wider text-fuchsia-500">Exemplo</span>
          <p className="mt-2 italic">
            "Como cliente do banco, eu quero transferir dinheiro pelo aplicativo, para que eu possa pagar contas sem ir à agência."
          </p>
        </div>
      </div>

      {/* INVEST */}
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-6 h-6 text-fuchsia-500" />
        <h3 className="text-2xl font-bold">INVEST — Qualidade de uma boa história</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {invest.map((i, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
            className="p-5 rounded-xl border border-border bg-card flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white flex items-center justify-center font-black text-2xl shrink-0">
              {i.l}
            </div>
            <div>
              <h4 className="font-bold">{i.nome}</h4>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HistoriaUsuarioSection;
