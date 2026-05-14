import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollText, Sparkles } from "lucide-react";

const exemplosUS = [
  {
    quem: "cliente da clínica",
    quero: "agendar consulta pelo celular",
    para: "evitar ligar e ficar esperando atendimento",
    aceite: [
      "Posso escolher médico, data e horário disponíveis",
      "Recebo confirmação por SMS em até 1 minuto",
      "Posso cancelar até 24h antes sem custo",
    ],
  },
  {
    quem: "recepcionista",
    quero: "ver a agenda do dia em uma única tela",
    para: "organizar a recepção e antecipar atrasos",
    aceite: [
      "Vejo todos os médicos lado a lado",
      "Pacientes aparecem ordenados por horário",
      "Posso marcar 'chegou' com um clique",
    ],
  },
];

const invest = [
  { l: "I", n: "Independente", d: "Pode ser desenvolvida sem depender de outras" },
  { l: "N", n: "Negociável", d: "Detalhes podem evoluir na conversa com o cliente" },
  { l: "V", n: "Valiosa", d: "Entrega valor real para o usuário ou negócio" },
  { l: "E", n: "Estimável", d: "Equipe consegue dimensionar esforço" },
  { l: "S", n: "Small (pequena)", d: "Cabe em uma sprint, idealmente poucos dias" },
  { l: "T", n: "Testável", d: "Tem critérios objetivos de aceite" },
];

const UserStoriesSection = () => (
  <section id="user-stories" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
          <ScrollText className="w-4 h-4" /> Abordagem Ágil
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Requisitos como <span className="text-violet-400">User Stories</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Em times ágeis, requisitos são escritos como histórias curtas focadas no usuário e seu valor.
        </p>
      </motion.div>

      {/* Fórmula */}
      <Card className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border-violet-500/30 mb-10">
        <CardContent className="p-8 text-center">
          <p className="text-sm text-violet-400 mb-3 font-semibold">FÓRMULA CLÁSSICA</p>
          <p className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
            <span className="text-violet-400">Como</span> &lt;tipo de usuário&gt;,<br />
            <span className="text-violet-400">eu quero</span> &lt;ação/funcionalidade&gt;,<br />
            <span className="text-violet-400">para que</span> &lt;benefício/valor&gt;.
          </p>
        </CardContent>
      </Card>

      {/* Exemplos */}
      <h3 className="text-xl font-bold text-foreground mb-6">💡 Exemplos Completos</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {exemplosUS.map((u, i) => (
          <Card key={i} className="bg-card/50 border-violet-500/20">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                <span className="text-violet-400 font-semibold">Como</span> {u.quem},<br />
                <span className="text-violet-400 font-semibold">eu quero</span> {u.quero},<br />
                <span className="text-violet-400 font-semibold">para que</span> {u.para}.
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-violet-400 mb-2">CRITÉRIOS DE ACEITE</p>
                <ul className="space-y-1">
                  {u.aceite.map((a, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">✓</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* INVEST */}
      <Card className="bg-card/50 border-violet-500/20 mb-10">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-400" /> Critérios INVEST — boa user story
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Acrônimo de Bill Wake para avaliar a qualidade de uma história.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {invest.map((i, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                <div className="w-9 h-9 rounded bg-violet-500/20 flex items-center justify-center text-violet-400 font-black shrink-0">
                  {i.l}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{i.n}</p>
                  <p className="text-xs text-muted-foreground">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Critérios de aceite - Gherkin */}
      <Card className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-violet-500/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">🧪 Critérios de Aceite — formato Gherkin</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Cada cenário tem três partes que descrevem comportamento esperado de forma testável.
          </p>
          <div className="font-mono text-sm bg-background/70 p-4 rounded-lg border border-border space-y-1">
            <p><span className="text-violet-400 font-bold">Dado</span> <span className="text-muted-foreground">que sou um cliente cadastrado</span></p>
            <p><span className="text-violet-400 font-bold">E</span> <span className="text-muted-foreground">existem horários disponíveis para o Dr. Silva amanhã</span></p>
            <p><span className="text-violet-400 font-bold">Quando</span> <span className="text-muted-foreground">eu seleciono "10:00" e confirmo</span></p>
            <p><span className="text-violet-400 font-bold">Então</span> <span className="text-muted-foreground">o agendamento é registrado</span></p>
            <p><span className="text-violet-400 font-bold">E</span> <span className="text-muted-foreground">recebo SMS de confirmação em até 1 minuto</span></p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default UserStoriesSection;
