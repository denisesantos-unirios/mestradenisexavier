import { motion } from "framer-motion";
import { BookOpen, Sparkles, FlaskConical, UserCircle2 } from "lucide-react";

const invest = [
  { l: "I", t: "Independent", d: "Pode ser desenvolvida e entregue sem depender de outra história." },
  { l: "N", t: "Negotiable", d: "Não é contrato: o 'como' é conversado com o time." },
  { l: "V", t: "Valuable", d: "Entrega valor perceptível ao usuário ou ao negócio." },
  { l: "E", t: "Estimable", d: "O time consegue dimensionar o esforço." },
  { l: "S", t: "Small", d: "Cabe em uma sprint — idealmente em poucos dias." },
  { l: "T", t: "Testable", d: "Possui critérios de aceite objetivos." },
];

const historias = [
  {
    titulo: "Consultar disponibilidade",
    story:
      "Como atendente da locadora, quero consultar veículos disponíveis por categoria e período, para oferecer opções ao cliente sem sair do balcão.",
    criterios: [
      "Dado que existem veículos livres no período, Quando eu filtrar por categoria 'SUV' e datas 10/03 a 12/03, Então devo ver apenas SUVs sem reserva nesse intervalo.",
      "Dado que não há veículos disponíveis, Quando eu realizar a busca, Então devo ver a mensagem 'Nenhum veículo disponível' e a sugestão da próxima data livre.",
    ],
  },
  {
    titulo: "Multa por atraso",
    story:
      "Como gerente financeiro, quero que o sistema calcule automaticamente a multa por atraso, para evitar perda de receita e erros de cálculo manual.",
    criterios: [
      "Dado que a devolução ocorreu 3 horas após o prazo, Quando eu registrar a devolução, Então a multa deve ser 60% do valor da diária.",
      "Dado que o atraso ultrapassa 2 diárias, Quando a multa for calculada, Então o valor deve ser limitado a 2 diárias.",
    ],
  },
];

const personas = [
  {
    nome: "Marcos, 28 — Atendente de Balcão",
    contexto: "Ensino médio completo, 2 anos na locadora. Usa o sistema 8h/dia em pé.",
    objetivos: "Fechar a locação em menos de 5 minutos; não errar dados da CNH.",
    dores: "Telas com muitos campos; retrabalho quando o cliente muda de ideia.",
    citacao: "“Se eu tiver que abrir três telas pra ver um carro, o cliente vai embora.”",
  },
  {
    nome: "Cláudia, 45 — Gerente Financeira",
    contexto: "Pós-graduada, acessa o sistema 2x ao dia pelo notebook.",
    objetivos: "Acompanhar faturamento diário e inadimplência; exportar dados.",
    dores: "Números que não batem com a planilha; relatórios sem filtro por período.",
    citacao: "“Preciso confiar no número que aparece na tela sem conferir no Excel.”",
  },
  {
    nome: "Roberto, 34 — Cliente Corporativo",
    contexto: "Aluga 4 a 6 veículos por mês para a equipe comercial.",
    objetivos: "Reservar rápido, receber nota fiscal e histórico consolidado.",
    dores: "Ligar para confirmar disponibilidade; recibos avulsos.",
    citacao: "“Quero resolver tudo sem precisar telefonar.”",
  },
];

const camposPersona = [
  "Nome, idade e foto (torna concreto)",
  "Cargo e contexto de uso (onde, quando, com qual dispositivo)",
  "Nível de familiaridade com tecnologia",
  "Objetivos e tarefas principais",
  "Frustrações e dores atuais",
  "Citação representativa",
];

const UserStoriesSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-500 mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Ágil</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Requisitos como User Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Em contextos ágeis, a especificação acontece por conversa — a história é o convite ao
            diálogo, e os critérios de aceite são o contrato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Especificação com Histórias de Usuário
          </p>
          <p className="text-lg md:text-2xl font-semibold text-foreground leading-relaxed">
            <span className="text-purple-500">Como</span> &lt;papel/persona&gt;,{" "}
            <span className="text-orange-500">quero</span> &lt;funcionalidade&gt;,{" "}
            <span className="text-emerald-600">para</span> &lt;benefício/valor&gt;.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Os 3 Cs: <strong>Card</strong> (o cartão curto) · <strong>Conversation</strong> (o
            detalhamento com o time) · <strong>Confirmation</strong> (os critérios de aceite).
          </p>
        </motion.div>

        {/* INVEST */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground text-center mb-8"
        >
          Critérios INVEST — boa user story
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {invest.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="glass-card p-5 flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white font-black flex items-center justify-center flex-shrink-0">
                {i.l}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{i.t}</p>
                <p className="text-xs text-muted-foreground mt-1">{i.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gherkin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <FlaskConical className="w-5 h-5 text-emerald-600" />
            <h3 className="text-2xl font-bold text-foreground text-center">
              🧪 Critérios de Aceite — formato Gherkin
            </h3>
          </div>

          <div className="glass-card p-6 mb-6 font-mono text-sm text-foreground overflow-x-auto">
            <p><span className="text-purple-500">Dado</span> que &lt;contexto inicial&gt;</p>
            <p><span className="text-orange-500">Quando</span> &lt;ação do usuário&gt;</p>
            <p><span className="text-emerald-600">Então</span> &lt;resultado observável&gt;</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {historias.map((h, idx) => (
              <div key={idx} className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <h4 className="font-bold text-foreground">{h.titulo}</h4>
                </div>
                <p className="text-sm text-foreground p-4 rounded-lg bg-background/60 border-l-4 border-purple-500 mb-4">
                  {h.story}
                </p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  Critérios de aceite
                </p>
                <ul className="space-y-2">
                  {h.criterios.map((c, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground p-3 rounded-lg bg-background/50 border border-border"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <UserCircle2 className="w-5 h-5 text-blue-500" />
            <h3 className="text-2xl font-bold text-foreground text-center">Construção de Personas</h3>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            A persona dá rosto ao “Como &lt;papel&gt;” da história. Ela deve nascer de dados reais
            (entrevistas e observação), nunca de suposição.
          </p>

          <div className="glass-card p-6 mb-8">
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">
              O que toda persona precisa ter
            </p>
            <ul className="grid md:grid-cols-2 gap-2">
              {camposPersona.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {personas.map((p, idx) => (
              <div key={idx} className="glass-card p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <UserCircle2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-foreground">{p.nome}</h4>
                <p className="text-xs text-muted-foreground mt-2">{p.contexto}</p>
                <p className="text-sm text-foreground mt-3">
                  <span className="font-semibold">Objetivos:</span>{" "}
                  <span className="text-muted-foreground">{p.objetivos}</span>
                </p>
                <p className="text-sm text-foreground mt-2">
                  <span className="font-semibold">Dores:</span>{" "}
                  <span className="text-muted-foreground">{p.dores}</span>
                </p>
                <p className="text-sm italic text-blue-500 mt-4">{p.citacao}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserStoriesSection;
