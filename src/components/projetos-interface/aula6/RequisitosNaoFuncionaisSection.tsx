import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, LifeBuoy, AlertOctagon, Accessibility, Globe2, XCircle, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const requisitos = [
  {
    icon: Timer,
    t: "Tempo de resposta",
    d: "Medido do clique/Enter até o retorno do sistema. Tem duas características: duração e variabilidade.",
    detalhe: "Um tempo constante de 1,5 s é melhor do que um que varia de 0,5 s a 8 s: a baixa variabilidade permite ao usuário encontrar um ritmo de trabalho. Atenção — respostas lentas podem vir da infraestrutura, não do software.",
  },
  {
    icon: LifeBuoy,
    t: "Recursos de ajuda",
    d: "Ajuda on-line permite resolver a dúvida sem abandonar a interface.",
    detalhe: "Três decisões de projeto: (1) a ajuda cobre todas as funções ou um subconjunto? (2) como o usuário a solicita — menu, tecla de função, comando? (3) como será apresentada — janela separada, dica de uma linha em posição fixa, documento externo (não ideal)?",
  },
  {
    icon: AlertOctagon,
    t: "Tratamento de erros",
    d: "Mensagens de erro incompreensíveis são das maiores fontes de frustração.",
    detalhe: "Uma boa mensagem descreve o problema na linguagem do usuário, oferece informação construtiva para recuperação, indica as consequências, emite um sinal visual ou sonoro e nunca culpa o usuário.",
  },
  {
    icon: Accessibility,
    t: "Acessibilidade",
    d: "Usuários podem ter limitações físicas, visuais, auditivas, motoras, de fala ou de aprendizado.",
    detalhe: "A interface precisa de mecanismos que garantam operação por pessoas com necessidades específicas — contraste, leitores de tela, navegação por teclado, legendas (referência: cartilha de acessibilidade do W3C Brasil).",
  },
  {
    icon: Globe2,
    t: "Internacionalização",
    d: "Interfaces costumam nascer para um país e um idioma e depois recebem 'gambiarras'.",
    detalhe: "Projete de forma genérica e use recursos de localização (i18n/l10n): textos externalizados, formatos de data, moeda, unidades e direção de leitura.",
  },
];

const RequisitosNaoFuncionaisSection = () => (
  <section id="requisitos-nf" className="py-20 bg-muted/20">
    <div className="container mx-auto px-6">
      <ScrollReveal animation="fadeUp">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Impacto real nas pessoas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Requisitos Não Funcionais da Interface</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Menos atraentes, esses requisitos costumam ser lembrados tarde demais — quando o projeto já
            avançou. Defini-los no início evita retrabalho e reduz o estresse do usuário.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {requisitos.map((r, i) => (
          <motion.div key={r.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <Card className="h-full bg-card/50 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10"><r.icon className="w-5 h-5 text-primary" /></div>
                  <CardTitle className="text-lg">{r.t}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{r.d}</p>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm">{r.detalhe}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ScrollReveal animation="fadeUp">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive text-lg">
                <XCircle className="w-5 h-5" /> Mensagem de erro ruim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs whitespace-pre-wrap p-3 rounded-lg bg-background/70 border border-border/50">
{`Program critical error
The instruction at 0x0000000025C2E42B referenced
memory at 0x000000034D02F4.
The memory could not be read.
[OK]  [Cancel]`}
              </pre>
              <p className="text-sm text-muted-foreground mt-3">
                Não explica a causa, não indica solução, não aponta consequências e não oferece fonte de
                informação. Só assusta.
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/30 bg-emerald-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-600 text-lg">
                <CheckCircle2 className="w-5 h-5" /> Mensagem de erro boa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs whitespace-pre-wrap p-3 rounded-lg bg-background/70 border border-border/50">
{`Não foi possível salvar o agendamento
Sua conexão caiu durante o envio.
Nada foi perdido: o rascunho ficou salvo
neste dispositivo.
[Tentar novamente]  [Salvar como rascunho]`}
              </pre>
              <p className="text-sm text-muted-foreground mt-3">
                Linguagem do usuário, causa provável, consequência explícita, caminho de recuperação — e
                sem culpar quem estava usando.
              </p>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RequisitosNaoFuncionaisSection;
