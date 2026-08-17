import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Building2, Layers, MessageSquare, ShieldCheck, FileText, Boxes } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const caracteristicas = [
  "Linguagem gráfica padronizada para modelagem de software.",
  "Pode ser usada em diferentes fases do desenvolvimento do sistema.",
  "Suporta diferentes paradigmas, mas é mais voltada à orientação a objetos.",
  "Facilita a comunicação entre os membros do time de desenvolvimento.",
];

const utilizacoes = [
  { titulo: "Modelagem de requisitos", desc: "Especificações e regras de negócio representadas visualmente." },
  { titulo: "Estrutura e comportamento", desc: "Definição de classes, componentes e fluxos do sistema." },
  { titulo: "Documentação da arquitetura", desc: "Registro das interações entre componentes." },
  { titulo: "Processos empresariais", desc: "Visualização de fluxos de trabalho da organização." },
];

const beneficios = [
  { icone: ShieldCheck, titulo: "Padronização", desc: "Segue normas aceitas globalmente (OMG)." },
  { icone: MessageSquare, titulo: "Comunicação", desc: "Melhora o entendimento entre a equipe e stakeholders." },
  { icone: FileText, titulo: "Documentação clara", desc: "Visão nítida da arquitetura do sistema." },
  { icone: CheckCircle2, titulo: "Redução de erros", desc: "Detecta falhas de design antes da implementação." },
];

const ondeUsar = [
  "Desenvolvimento de software",
  "Modelagem de processos empresariais",
  "Engenharia de sistemas",
  "Arquitetura de software",
  "Modelagem de banco de dados",
];

const CaracteristicasSection = () => {
  return (
    <section id="caracteristicas" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Fundamentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que é a UML e para que serve
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A <strong>Unified Modelling Language</strong> é uma linguagem de modelagem visual padronizada usada para
              <strong> especificar, visualizar, documentar e construir</strong> sistemas de software orientados a objetos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" /> Características da UML
              </h3>
              <ul className="space-y-3">
                {caracteristicas.map((c, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Boxes className="w-5 h-5 text-primary" /> Onde a UML é aplicada
              </h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {ondeUsar.map((o, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {o}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {utilizacoes.map((u, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/40">
                    <p className="text-sm font-semibold text-foreground">{u.titulo}</p>
                    <p className="text-xs text-muted-foreground">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <b.icone className="w-7 h-7 text-primary mb-3" />
                <p className="font-bold text-foreground mb-1">{b.titulo}</p>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" /> Exemplo: representando objetos do mundo real
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Um <strong>celular</strong> pode ser modelado como um conjunto de objetos que se relacionam. Cada objeto
              tem atributos e operações próprios:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { obj: "Telefone", attr: "modelo, imei, bateria", op: "ligar(), desligar()" },
                { obj: "Tecla", attr: "número, letra", op: "pressionar()" },
                { obj: "Câmera", attr: "resolução, lente", op: "capturar(), focar()" },
              ].map((o, i) => (
                <div key={i} className="rounded-xl border border-border bg-card overflow-hidden text-sm">
                  <div className="px-3 py-2 font-bold text-foreground border-b border-border bg-muted/40">{o.obj}</div>
                  <div className="px-3 py-2 text-muted-foreground border-b border-border font-mono text-xs">{o.attr}</div>
                  <div className="px-3 py-2 text-muted-foreground font-mono text-xs">{o.op}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CaracteristicasSection;
