import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Headphones, Briefcase, HelpCircle, Building2, Volume2, Sun, Accessibility } from "lucide-react";

const fontes = [
  { icon: MessageSquare, t: "Os próprios usuários", d: "Entrevistas individuais ou em grupo revelam necessidades, cultura de trabalho e motivações (Schach, 2011)." },
  { icon: Briefcase, t: "Setor de vendas", d: "Encontra usuários com regularidade e ajuda a classificar perfis e requisitos." },
  { icon: Headphones, t: "Setor de suporte", d: "Conversa diariamente com quem usa: sabe o que funciona, o que irrita e quais recursos geram mais chamados." },
];

const perguntas = [
  "Quais são os segmentos de idade dos usuários?",
  "Qual é o gênero predominante?",
  "Quais são as consequências do uso incorreto do sistema?",
  "Qual é o nível de especialização dos usuários no nicho em que atuam?",
  "Qual a receptividade da equipe ao novo sistema?",
  "Os usuários trabalham em turnos, sob pressão ou com interrupções constantes?",
];

const ambiente = [
  { icon: Volume2, t: "Ruído", d: "Em ambiente ruidoso, alertas sonoros não cumprem sua função — use cor, animação ou vibração." },
  { icon: Sun, t: "Iluminação", d: "Chão de fábrica e ambientes externos exigem alto contraste e fontes maiores." },
  { icon: Building2, t: "Acesso físico e ergonomia", d: "Nem sempre há teclado e mouse: considere toque, luvas, leitores de código e comandos de voz." },
  { icon: Accessibility, t: "Limitações do usuário", d: "Restrições visuais, auditivas, motoras ou de aprendizado devem estar previstas desde a análise." },
];

const IdentificacaoSection = () => (
  <section id="identificacao" className="py-20 bg-muted/20">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Identificar o <span className="text-indigo-500">Usuário</span>, as Tarefas e o <span className="text-purple-500">Ambiente</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Na engenharia de software é fundamental compreender o problema antes de propor a solução
          (Schach, 2010). Isso significa levantar três coisas: quem usa, o que faz e onde faz.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {fontes.map((f, i) => (
          <motion.div key={f.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full bg-card/50 border-border/50">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-indigo-500/10 mb-2"><f.icon className="w-5 h-5 text-indigo-500" /></div>
                <CardTitle className="text-lg">{f.t}</CardTitle>
              </CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{f.d}</p></CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-indigo-500" /> Perguntas que guiam o levantamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {perguntas.map((p) => (
                <div key={p} className="p-3 rounded-lg bg-muted/40 border border-border/50 text-sm">❓ {p}</div>
              ))}
            </div>
            <div className="mt-5 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm">
              <strong>Fique atento:</strong> dedique tempo para realmente conversar com os usuários. Uma
              opinião bem formulada pode não ser consenso e nem sempre é o melhor caminho para uma
              interface coesa.
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-center mb-6">Análise do Ambiente de Trabalho</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {ambiente.map((a) => (
            <div key={a.t} className="p-5 rounded-xl bg-card border border-border/50 flex gap-4">
              <div className="p-2 h-fit rounded-lg bg-purple-500/10"><a.icon className="w-5 h-5 text-purple-500" /></div>
              <div>
                <p className="font-semibold mb-1">{a.t}</p>
                <p className="text-sm text-muted-foreground">{a.d}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default IdentificacaoSection;
