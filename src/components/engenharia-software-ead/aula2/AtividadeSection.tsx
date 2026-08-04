import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, Users, Clock } from "lucide-react";

const perguntas = [
  {
    n: 1,
    titulo: "Nesse contexto, faria sentido usar cascata puro? Por quê?",
    dica: "Considere: regulação, estabilidade de requisitos, segurança, compliance, contrato de licitação com escopo fechado.",
  },
  {
    n: 2,
    titulo: "Que risco você vê se tentar usar só cascata?",
    dica: "Pense em: mudanças regulatórias, feedback de médicos e enfermeiros, integração com sistemas legados, software funcional só no fim.",
  },
  {
    n: 3,
    titulo: "Monte o modelo híbrido: quais módulos vão em cascata e quais em incremental/evolucionário?",
    dica: "Justifique módulo a módulo: PEP, agendamento, prescrição, integração SUS, trilha de auditoria.",
  },
  {
    n: 4,
    titulo: "Em qual nível CMMI o hospital está hoje e qual é o próximo alvo realista em 12 meses?",
    dica: "Use as áreas de processo do nível 2 (REQM, PP, PMC, CM, PPQA, MA) como checklist de evidências.",
  },
  {
    n: 5,
    titulo: "Traduza esse alvo para o MPS.BR: qual nível (G→A) e quais processos-chave a empresa contratada deve evidenciar?",
    dica: "Lembre da equivalência: G/F ≈ CMMI 2; E/D/C ≈ CMMI 3; B ≈ 4; A ≈ 5.",
  },
  {
    n: 6,
    titulo: "Escolha um problema de qualidade do hospital e rode um DMAIC de uma página.",
    dica: "Ex.: conflito de agendamento, lentidão do PEP em pico, falha de sincronização com o SUS.",
  },
  {
    n: 7,
    titulo: "Defina 5 indicadores com meta numérica e diga como serão coletados.",
    dica: "Sem meta numérica e sem fonte de dado, não existe nível 4 / nível B.",
  },
];

const rubrica = [
  { criterio: "Justificativa técnica do ciclo de vida escolhido", peso: "25%" },
  { criterio: "Aplicação correta dos níveis e áreas de processo do CMMI", peso: "25%" },
  { criterio: "Aplicação correta dos níveis e processos do MPS.BR", peso: "25%" },
  { criterio: "Indicadores mensuráveis + análise de riscos", peso: "25%" },
];

const AtividadeSection = () => (
  <section id="atividade" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">🎯 Atividade Prática</h2>
            <p className="text-muted-foreground mb-6">Estudo de caso em grupo — processo, CMMI e MPS.BR</p>

            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 border border-border text-muted-foreground">
                <Users className="w-4 h-4 text-blue-500" /> Grupos de 3 a 5
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/60 border border-border text-muted-foreground">
                <Clock className="w-4 h-4 text-blue-500" /> 50 min de discussão + entrega
              </span>
            </div>

            <div className="p-5 rounded-xl bg-background/50 border border-border mb-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> Cenário
              </h3>
              <p className="text-muted-foreground">
                <em>"Sistema para gestão de prontuários em um hospital público"</em> — o sistema precisa gerenciar prontuários eletrônicos de pacientes, agendamentos médicos,
                prescrições e integração com o SUS. O hospital atende 500 pacientes/dia e opera 24h.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {perguntas.map((p) => (
                <div key={p.n} className="p-4 rounded-xl bg-background/50 border border-border">
                  <p className="font-semibold text-foreground">
                    <span className="text-blue-400">Pergunta {p.n}:</span> {p.titulo}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{p.dica}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-background/50 border border-border mb-6">
              <h3 className="font-bold text-foreground mb-3">📋 Rubrica de avaliação</h3>
              <div className="space-y-2">
                {rubrica.map((r) => (
                  <div key={r.criterio} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">{r.criterio}</span>
                    <span className="font-bold text-blue-500 shrink-0">{r.peso}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-400">
              <CheckCircle className="w-4 h-4" />
              <span>Entrega: documento de 1 a 2 páginas por grupo no AVA</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default AtividadeSection;
