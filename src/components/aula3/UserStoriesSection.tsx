import { motion } from "framer-motion";
import { UserCircle2, Target, CheckCircle2, XCircle, Dices } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const invest = [
  { l: "I", nome: "Independent", desc: "Independente — pode ser desenvolvida sem depender de outra história." },
  { l: "N", nome: "Negotiable", desc: "Negociável — é um convite à conversa, não um contrato fechado." },
  { l: "V", nome: "Valuable", desc: "Valiosa — entrega valor perceptível para o usuário ou negócio." },
  { l: "E", nome: "Estimable", desc: "Estimável — o time consegue dimensionar o esforço." },
  { l: "S", nome: "Small", desc: "Pequena — cabe confortavelmente dentro de uma sprint." },
  { l: "T", nome: "Testable", desc: "Testável — possui critérios de aceite verificáveis." },
];

const exemplos = [
  {
    ok: false,
    texto: "O sistema deve ter um cadastro.",
    motivo: "Não diz para quem, nem qual valor gera; impossível de testar ou estimar.",
  },
  {
    ok: true,
    texto:
      "Como cliente da locadora, eu quero reservar um veículo pelo aplicativo, para que eu garanta o carro sem ir até a loja.",
    motivo: "Tem persona, funcionalidade e benefício claros — permite critérios de aceite.",
  },
];

const gherkin = [
  {
    titulo: "Cenário 1 — Reserva com sucesso",
    linhas: [
      "DADO que estou autenticado e existe um veículo disponível para as datas escolhidas",
      "QUANDO eu confirmo a reserva",
      "ENTÃO o veículo é bloqueado para o período e recebo um e-mail com o código da reserva",
    ],
  },
  {
    titulo: "Cenário 2 — Veículo indisponível",
    linhas: [
      "DADO que o veículo escolhido já está reservado para as datas",
      "QUANDO eu tento confirmar a reserva",
      "ENTÃO o sistema informa a indisponibilidade e sugere veículos da mesma categoria",
    ],
  },
];

const pontos = [1, 2, 3, 5, 8, 13, 21];

const UserStoriesSection = () => (
  <section id="user-stories" className="py-20 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <UserCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Parte 6 • Requisitos Ágeis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Histórias de Usuário, INVEST e Critérios de Aceite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No Ágil, o requisito vira conversa. A história de usuário é o item do Product Backlog que
            descreve <strong>para quem</strong>, <strong>o quê</strong> e <strong>por quê</strong>.
          </p>
        </div>
      </ScrollReveal>

      {/* Template */}
      <ScrollReveal animation="fadeUp">
        <div className="p-8 rounded-2xl border-2 border-primary/30 bg-primary/5 mb-12">
          <h3 className="font-bold text-xl mb-4 text-foreground">📝 Template padrão</h3>
          <p className="text-lg font-mono bg-card p-4 rounded-lg border border-border text-foreground">
            <strong>Como</strong> [tipo de usuário/persona],
            <br />
            <strong>eu quero</strong> [funcionalidade],
            <br />
            <strong>para que</strong> [benefício/valor].
          </p>
        </div>
      </ScrollReveal>

      {/* Exemplos bom x ruim */}
      <div className="grid md:grid-cols-2 gap-5 mb-14">
        {exemplos.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-6 rounded-2xl border ${
              e.ok ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              {e.ok ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className="font-bold text-foreground">{e.ok ? "Boa história" : "História fraca"}</span>
            </div>
            <p className="italic text-foreground mb-3">"{e.texto}"</p>
            <p className="text-sm text-muted-foreground">{e.motivo}</p>
          </motion.div>
        ))}
      </div>

      {/* INVEST */}
      <ScrollReveal animation="fadeUp">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">INVEST — checklist de qualidade</h3>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {invest.map((i, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="p-5 rounded-2xl border border-border bg-card flex gap-4"
          >
            <span className="w-10 h-10 rounded-xl bg-primary/15 text-primary font-black flex items-center justify-center shrink-0">
              {i.l}
            </span>
            <div>
              <p className="font-bold text-foreground">{i.nome}</p>
              <p className="text-sm text-muted-foreground">{i.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gherkin */}
      <ScrollReveal animation="fadeUp">
        <h3 className="text-2xl font-bold text-foreground mb-2">Critérios de aceite no formato Gherkin</h3>
        <p className="text-muted-foreground mb-6">
          Cada história só é considerada pronta quando todos os cenários passam.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-5 mb-14">
        {gherkin.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <h4 className="font-bold text-foreground mb-3">{g.titulo}</h4>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              {g.linhas.map((l, j) => (
                <li key={j}>{l}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Estimativa */}
      <ScrollReveal animation="fadeUp">
        <div className="p-6 rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-3">
            <Dices className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Estimando com Story Points (Planning Poker)</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Story points medem <strong>complexidade, esforço e incerteza</strong> — não horas. O time
            estima em conjunto usando a sequência de Fibonacci; divergências grandes indicam que a
            história precisa ser mais bem entendida ou quebrada.
          </p>
          <div className="flex flex-wrap gap-3">
            {pontos.map((p) => (
              <span
                key={p}
                className="w-12 h-16 rounded-lg border-2 border-primary/30 bg-primary/5 text-primary font-black flex items-center justify-center"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Velocity:</strong> soma dos pontos concluídos por sprint. Serve para previsão do
            próprio time — nunca para comparar times diferentes.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default UserStoriesSection;
