import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const relacionamentos = [
  {
    nome: "Associação",
    notacao: "──────",
    desc: "Relação estrutural entre duas classes que indica que objetos de uma se conectam com objetos de outra.",
    exemplo: "Cliente ── Reserva",
    cor: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
  {
    nome: "Dependência",
    notacao: "- - - ▶",
    desc: "Uma classe depende de outra para funcionar (uso temporário). Mudança em uma pode afetar a outra.",
    exemplo: "Voo - - -▶ Bagagem",
    cor: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
  },
  {
    nome: "Generalização",
    notacao: "──────▷",
    desc: "Herança: subclasse herda atributos e métodos da superclasse. 'É um tipo de'.",
    exemplo: "Aluno ──▷ Pessoa",
    cor: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
  },
  {
    nome: "Agregação",
    notacao: "◇──────",
    desc: "Relação 'todo-parte' fraca. A parte pode existir independentemente do todo.",
    exemplo: "Time ◇── Jogador",
    cor: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
  {
    nome: "Composição",
    notacao: "◆──────",
    desc: "Relação 'todo-parte' forte. A parte NÃO existe sem o todo. Se o todo morre, a parte morre.",
    exemplo: "Casa ◆── Cômodo",
    cor: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
  },
  {
    nome: "Realização",
    notacao: "- - -▷",
    desc: "Uma classe implementa uma interface. Promessa de implementar contratos definidos.",
    exemplo: "PagamentoCartao - -▷ «Pagamento»",
    cor: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
  },
];

const multiplicidades = [
  { valor: "1", desc: "Exatamente um", ex: "Pessoa tem 1 CPF" },
  { valor: "0..1", desc: "Zero ou um (opcional)", ex: "Funcionário tem 0..1 cônjuge" },
  { valor: "0..*  ou  *", desc: "Zero ou muitos", ex: "Cliente faz * pedidos" },
  { valor: "1..*", desc: "Um ou muitos (obrigatório)", ex: "Time tem 1..* jogadores" },
  { valor: "3..5", desc: "Intervalo específico", ex: "Pôquer tem 3..5 jogadores" },
  { valor: "n", desc: "Número exato", ex: "Triângulo tem 3 lados" },
];

const RelacionamentosSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              🔗 Tipos de <span className="text-pink-400">Relacionamentos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conexões entre classes — cada uma com semântica e notação próprias.
              Escolher o relacionamento correto é o que diferencia um modelo bom de um confuso.
            </p>
          </div>
        </ScrollReveal>

        {/* Tipos de Relacionamentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {relacionamentos.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className={`${r.bg} ${r.border} h-full`}>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`font-bold text-lg ${r.cor}`}>{r.nome}</h4>
                    <span className="font-mono text-xl text-foreground">{r.notacao}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{r.desc}</p>
                  <div className="bg-background/50 rounded-md p-2 font-mono text-xs text-foreground border border-border">
                    {r.exemplo}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Composição vs Agregação */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <Card className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border-purple-500/30 mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                ⚔️ Agregação vs Composição
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Os dois mais confundidos. Pergunta-chave: <strong>"a parte sobrevive sem o todo?"</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <h4 className="font-bold text-cyan-400 text-lg mb-2">◇ Agregação</h4>
                  <p className="text-sm text-muted-foreground mb-3"><strong>SIM</strong> — a parte existe sozinha.</p>
                  <div className="bg-background/50 rounded-md p-3 text-sm">
                    <p className="text-foreground font-medium">Time ◇── Jogador</p>
                    <p className="text-xs text-muted-foreground mt-1">Se o time acaba, o jogador continua existindo (vai pra outro time).</p>
                  </div>
                </div>
                <div className="p-5 rounded-xl bg-pink-500/10 border border-pink-500/30">
                  <h4 className="font-bold text-pink-400 text-lg mb-2">◆ Composição</h4>
                  <p className="text-sm text-muted-foreground mb-3"><strong>NÃO</strong> — a parte morre com o todo.</p>
                  <div className="bg-background/50 rounded-md p-3 text-sm">
                    <p className="text-foreground font-medium">Casa ◆── Cômodo</p>
                    <p className="text-xs text-muted-foreground mt-1">Se a casa é demolida, o cômodo deixa de existir.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Multiplicidade */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            🔢 Multiplicidade
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Indica <strong>quantos objetos</strong> de uma classe podem se relacionar com objetos de outra.
            Aparece nas pontas das linhas de associação.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {multiplicidades.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="bg-card/50 border-border h-full">
                  <CardContent className="p-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl font-mono font-bold text-purple-400">{m.valor}</span>
                      <span className="text-sm text-muted-foreground">{m.desc}</span>
                    </div>
                    <p className="text-xs text-muted-foreground/80 italic flex items-center gap-1">
                      <ArrowRight className="w-3 h-3" /> {m.ex}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RelacionamentosSection;
