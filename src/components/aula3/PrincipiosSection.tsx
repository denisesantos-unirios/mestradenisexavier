import { motion } from "framer-motion";
import { ListChecks, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const principios = [
  {
    t: "Satisfazer o cliente com entregas contínuas e adiantadas de software de valor.",
    p: "Libere a primeira versão útil em semanas, não em meses.",
  },
  {
    t: "Aceitar mudanças de requisitos, mesmo no fim do desenvolvimento.",
    p: "O backlog é repriorizado a cada sprint sem 'punir' o cliente.",
  },
  {
    t: "Entregar software funcionando com frequência (semanas, não meses).",
    p: "Sprints de 1 a 4 semanas com incremento potencialmente entregável.",
  },
  {
    t: "Pessoas de negócio e desenvolvedores trabalham juntos diariamente.",
    p: "Product Owner acessível ao time, e não apenas em reuniões formais.",
  },
  {
    t: "Construir projetos em torno de indivíduos motivados e confiar neles.",
    p: "Time auto-organizado decide como fazer o trabalho da sprint.",
  },
  {
    t: "Conversa face a face é a forma mais eficiente de comunicação.",
    p: "Daily de 15 min em pé resolve o que 10 e-mails não resolvem.",
  },
  {
    t: "Software funcionando é a principal medida de progresso.",
    p: "Não é '80% codificado': ou está pronto (DoD) ou não está.",
  },
  {
    t: "Promover desenvolvimento sustentável, em ritmo constante.",
    p: "Velocidade estável evita heroísmo, burnout e queda de qualidade.",
  },
  {
    t: "Atenção contínua à excelência técnica e ao bom design.",
    p: "Refatoração, testes automatizados e revisão de código na sprint.",
  },
  {
    t: "Simplicidade: a arte de maximizar o trabalho não realizado.",
    p: "Fazer o mínimo que entrega valor — evitar 'features por precaução'.",
  },
  {
    t: "As melhores arquiteturas e requisitos emergem de times auto-organizáveis.",
    p: "A solução técnica é decidida por quem constrói, não imposta de cima.",
  },
  {
    t: "O time reflete e ajusta seu comportamento em intervalos regulares.",
    p: "Retrospectiva ao fim de cada sprint gera ações concretas de melhoria.",
  },
];

const PrincipiosSection = () => (
  <section id="principios" className="py-20 px-6 relative bg-secondary/20">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <ListChecks className="w-4 h-4" />
            <span className="text-sm font-medium">Parte 2 • Fundamentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Os 12 Princípios do Manifesto</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os valores dizem <em>o que</em> priorizar; os princípios mostram <em>como</em> isso aparece
            no dia a dia do time. Cada princípio abaixo vem com sua tradução prática.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-4">
        {principios.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.06 }}
            className="p-5 rounded-2xl border border-border bg-card flex gap-4"
          >
            <span className="w-9 h-9 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-foreground mb-2">{p.t}</p>
              <p className="text-sm text-muted-foreground flex gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{p.p}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ScrollReveal animation="fadeUp">
        <div className="mt-10 p-6 rounded-2xl border border-primary/30 bg-primary/5">
          <h3 className="font-bold text-foreground mb-2">Impacto nos processos de desenvolvimento</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>O <strong>planejamento</strong> deixa de ser um documento fixo e vira um backlog priorizado e vivo.</li>
            <li>A <strong>qualidade</strong> passa a ser construída durante a sprint (testes, CI, DoD), não em uma fase final.</li>
            <li>A <strong>gestão</strong> muda de comando-e-controle para facilitação e remoção de impedimentos.</li>
            <li>O <strong>contrato</strong> tende a escopo variável com prazo/custo fixos, apoiado em colaboração.</li>
            <li>As <strong>métricas</strong> deixam de ser "% de fases concluídas" e passam a ser valor entregue e velocidade.</li>
          </ul>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PrincipiosSection;
