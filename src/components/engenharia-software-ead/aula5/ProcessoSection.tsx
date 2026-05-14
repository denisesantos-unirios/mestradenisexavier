import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileEdit, CheckCircle2, Settings, RefreshCw, MessageSquare } from "lucide-react";

const etapas = [
  {
    num: "01",
    icon: Search,
    titulo: "Elicitação (Levantamento)",
    cor: "cyan",
    desc: "Descobrir quais são as reais necessidades dos stakeholders.",
    como: ["Entrevistas com usuários", "Workshops e brainstorming", "Observação do trabalho atual", "Questionários", "Análise de documentos", "Prototipação"],
  },
  {
    num: "02",
    icon: FileEdit,
    titulo: "Análise e Negociação",
    cor: "teal",
    desc: "Classificar, priorizar, resolver conflitos entre stakeholders.",
    como: ["Agrupar requisitos por categoria", "Detectar conflitos e ambiguidades", "Priorizar (MoSCoW)", "Negociar trade-offs com cliente"],
  },
  {
    num: "03",
    icon: MessageSquare,
    titulo: "Especificação (Documentação)",
    cor: "emerald",
    desc: "Escrever os requisitos de forma clara, completa e verificável.",
    como: ["Documento de Requisitos (SRS)", "User Stories e Casos de Uso", "Diagramas (UML, BPMN)", "Critérios de aceitação"],
  },
  {
    num: "04",
    icon: CheckCircle2,
    titulo: "Validação",
    cor: "blue",
    desc: "Confirmar com o cliente que os requisitos refletem o que ele quer.",
    como: ["Revisões com stakeholders", "Protótipos navegáveis", "Cenários de teste", "Walkthrough estruturado"],
  },
  {
    num: "05",
    icon: RefreshCw,
    titulo: "Gerenciamento (Mudanças)",
    cor: "violet",
    desc: "Controlar mudanças nos requisitos ao longo do projeto.",
    como: ["Rastreabilidade (matriz)", "Controle de versão", "Análise de impacto", "Aprovação formal de mudanças"],
  },
];

const moscow = [
  { letra: "M", nome: "Must have", desc: "Obrigatórios — sem eles o sistema não funciona", cor: "red" },
  { letra: "S", nome: "Should have", desc: "Importantes — devem ser entregues se possível", cor: "amber" },
  { letra: "C", nome: "Could have", desc: "Desejáveis — entregues se sobrar tempo/recurso", cor: "cyan" },
  { letra: "W", nome: "Won't have", desc: "Não nesta versão — ficam para releases futuras", cor: "muted" },
];

const ProcessoSection = () => (
  <section id="processo" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
          <Settings className="w-4 h-4" /> Processo
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Engenharia de Requisitos — <span className="text-teal-400">5 Etapas</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Um processo iterativo, não linear. Você volta etapas conforme aprende sobre o problema.
        </p>
      </motion.div>

      <div className="space-y-4 mb-12">
        {etapas.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="bg-card/50 border-border hover:border-teal-500/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-black text-teal-400/30 shrink-0">{e.num}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <e.icon className="w-5 h-5 text-teal-400" />
                      <h3 className="text-lg font-bold text-foreground">{e.titulo}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{e.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {e.como.map((c, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* MoSCoW */}
      <Card className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-500/20">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-2">📊 Priorização com MoSCoW</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Técnica clássica para priorizar requisitos junto ao cliente.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {moscow.map((m, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 font-black text-lg shrink-0">
                  {m.letra}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{m.nome}</p>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ProcessoSection;
