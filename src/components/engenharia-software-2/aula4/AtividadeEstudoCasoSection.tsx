import { motion } from "framer-motion";
import { Target, Clock, Users, ClipboardCheck } from "lucide-react";

const etapasAtividade = [
  {
    t: "Etapa 1 — Elicitação (20 min)",
    d: "Em duplas, simule uma entrevista com o cliente. Uma pessoa é o dono do negócio, a outra é o analista. Registre no mínimo 12 necessidades brutas.",
    entrega: "Lista bruta de necessidades + 8 perguntas usadas na entrevista",
  },
  {
    t: "Etapa 2 — Classificação (15 min)",
    d: "Separe as necessidades em Requisitos Funcionais (RF) e Não-Funcionais (RNF), atribuindo IDs e categoria (desempenho, segurança, usabilidade...).",
    entrega: "Tabela com ID, descrição, tipo e categoria",
  },
  {
    t: "Etapa 3 — Priorização (10 min)",
    d: "Aplique MoSCoW. Justifique cada 'Must' em uma frase ligada a valor de negócio.",
    entrega: "Backlog priorizado (M/S/C/W) com justificativas",
  },
  {
    t: "Etapa 4 — Especificação (25 min)",
    d: "Escolha 5 requisitos Must e reescreva-os no template completo. Converta 3 deles em user stories com critérios de aceite em Gherkin.",
    entrega: "5 requisitos no template + 3 user stories com critérios",
  },
  {
    t: "Etapa 5 — Personas (15 min)",
    d: "Construa 2 personas dos principais perfis de usuário do sistema, com objetivos, dores e citação.",
    entrega: "2 fichas de persona",
  },
  {
    t: "Etapa 6 — Validação cruzada (15 min)",
    d: "Troque o material com outro grupo e aplique a checklist de qualidade: completo, não ambíguo, verificável, consistente, rastreável, viável, necessário.",
    entrega: "Relatório de revisão com no mínimo 5 apontamentos",
  },
];

const rubrica = [
  { c: "Cobertura e completude dos requisitos", p: "25%" },
  { c: "Classificação correta entre RF e RNF", p: "15%" },
  { c: "Clareza e testabilidade da redação", p: "25%" },
  { c: "Qualidade das user stories e critérios de aceite", p: "20%" },
  { c: "Consistência das personas com os requisitos", p: "15%" },
];

const AtividadeEstudoCasoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-orange-500 mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Prática</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 Atividade: Estudo de Caso Completo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Percorra todas as etapas da Engenharia de Requisitos sobre o sistema da locadora de
            veículos — da entrevista à validação cruzada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Users, t: "Formato", d: "Grupos de 3 a 4 estudantes" },
            { icon: Clock, t: "Duração", d: "100 minutos (2 aulas)" },
            { icon: ClipboardCheck, t: "Entrega", d: "Documento de Requisitos no AVA" },
          ].map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                <i.icon className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{i.t}</p>
                <p className="font-semibold text-foreground text-sm">{i.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4 mb-12">
          {etapasAtividade.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="glass-card p-6 border-l-4 border-orange-500"
            >
              <h3 className="font-bold text-foreground mb-2">{e.t}</h3>
              <p className="text-sm text-muted-foreground">{e.d}</p>
              <p className="text-xs mt-3 inline-block px-3 py-1.5 rounded-md bg-background/60 border border-border text-foreground">
                <span className="font-semibold">Entrega:</span> {e.entrega}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Rubrica de Avaliação</h3>
          <div className="space-y-3">
            {rubrica.map((r, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 p-4 rounded-lg bg-background/50 border border-border"
              >
                <span className="text-sm text-foreground">{r.c}</span>
                <span className="text-sm font-bold text-orange-500 flex-shrink-0">{r.p}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtividadeEstudoCasoSection;
