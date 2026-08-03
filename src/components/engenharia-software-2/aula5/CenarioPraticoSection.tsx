import { motion } from "framer-motion";
import { Building2, Quote, FileText, CheckCircle2, ShieldCheck, GitBranch, Search } from "lucide-react";

const CenarioPraticoSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-4">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Cenário Prático Guiado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Caso "AgendaFácil" — Clínica PetCare
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Vamos percorrer as cinco etapas com o mesmo cenário, mostrando o que muda no artefato a cada passo.
          </p>
        </motion.div>

        {/* Etapa 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <Search className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg font-bold text-foreground">1. Levantamento — trechos reais das entrevistas</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { quem: "Recepcionista (Marta)", fala: "Tem dia que marco dois animais no mesmo horário e só descubro quando os dois chegam." },
              { quem: "Veterinário (Dr. Alan)", fala: "Perco tempo procurando a ficha do animal no caderno; às vezes ela simplesmente não está lá." },
              { quem: "Tutora (Cláudia)", fala: "Só lembro da vacina quando a clínica liga. Se ninguém liga, eu esqueço." }
            ].map((c) => (
              <div key={c.quem} className="p-4 rounded-lg bg-background/50 border border-border/50">
                <Quote className="w-4 h-4 text-violet-400 mb-2" />
                <p className="text-sm text-muted-foreground italic mb-3">"{c.fala}"</p>
                <p className="text-xs font-semibold text-foreground">{c.quem}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-violet-500/5 border border-violet-500/20">
            <p className="text-sm text-foreground font-semibold mb-2">Necessidades extraídas</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• N1 — Impedir duplicidade de horário por veterinário</li>
              <li>• N2 — Centralizar o histórico clínico do animal</li>
              <li>• N3 — Lembrar o tutor do reforço de vacina automaticamente</li>
            </ul>
          </div>
        </motion.div>

        {/* Etapa 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <FileText className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-foreground">2. Registro — do Mini-Mundo ao critério de aceite</h3>
          </div>

          <div className="p-5 rounded-lg bg-background/50 text-sm text-muted-foreground mb-6 leading-relaxed">
            <p className="mb-3">
              <strong className="text-foreground">Trecho do Mini-Mundo (v1.0):</strong> "A recepcionista agenda
              consultas para um animal previamente cadastrado, escolhendo veterinário, data e horário. O sistema
              não permite dois agendamentos para o mesmo veterinário no mesmo horário, e cada veterinário atende
              no máximo 8 consultas por dia. O cancelamento é gratuito até 24h antes do atendimento."
            </p>
            <p className="text-xs">
              Note: cada frase carrega uma <strong className="text-foreground">regra de negócio verificável</strong> —
              é isso que diferencia um Mini-Mundo bom de uma redação genérica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <p className="text-xs font-semibold text-purple-400 mb-2">REQUISITOS DERIVADOS</p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li><strong className="text-foreground">RF01</strong> — Agendar consulta (animal, vet, data/hora)</li>
                <li><strong className="text-foreground">RN01</strong> — Bloquear conflito de horário por veterinário</li>
                <li><strong className="text-foreground">RN02</strong> — Limite de 8 consultas/dia por veterinário</li>
                <li><strong className="text-foreground">RNF01</strong> — Confirmar agendamento em até 2 segundos</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border/50">
              <p className="text-xs font-semibold text-purple-400 mb-2">HISTÓRIA + GHERKIN</p>
              <p className="text-sm text-muted-foreground mb-3">
                <strong className="text-foreground">US01:</strong> Como recepcionista, quero agendar uma consulta
                para que o tutor tenha horário garantido.
              </p>
              <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono">
{`Dado que o Dr. Alan já tem consulta às 14h
Quando eu tentar agendar outro animal às 14h
Então o sistema deve recusar o agendamento
E sugerir o próximo horário livre`}
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Etapas 3 e 4 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-lg font-bold text-foreground">3. Validação (produto certo?)</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Leitura do Mini-Mundo com Marta e Dr. Alan → descoberta de encaixe de emergência não previsto.</li>
              <li>• Novo requisito <strong className="text-foreground">RF04 — Encaixe de emergência</strong> (ignora RN02, exige justificativa).</li>
              <li>• Wireframe da tela de agenda apresentado antes de codificar.</li>
              <li>• Resultado: Mini-Mundo v1.1 aprovado pelo cliente.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-foreground">4. Verificação (produto correto?)</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong className="text-foreground">CT01</strong> — Agendar em horário livre → confirmado.</li>
              <li>• <strong className="text-foreground">CT02</strong> — Agendar em horário ocupado → recusa + sugestão.</li>
              <li>• <strong className="text-foreground">CT03</strong> — 9ª consulta do dia → bloqueio (RN02).</li>
              <li>• Defeito encontrado: encaixe de emergência estava sendo contado no limite diário → bug registrado e RF04 revisado.</li>
            </ul>
          </motion.div>
        </div>

        {/* Etapa 5 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <GitBranch className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-foreground">5. Gerência — controlando a mudança</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {["Versão", "Mudança solicitada", "Origem", "Impacto", "Decisão"].map((h) => (
                    <th key={h} className="text-left py-2 px-3 font-semibold text-foreground whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["v1.0", "Versão inicial do Mini-Mundo", "Equipe", "—", "Baseline"],
                  ["v1.1", "Incluir encaixe de emergência (RF04)", "Dr. Alan", "+1 história, +3 pontos", "Aprovada"],
                  ["v1.2", "Enviar lembrete por WhatsApp", "Tutores", "Integração externa, +8 pontos", "Adiada (Sprint 3)"],
                  ["v1.2", "Controle de estoque de vacinas", "Administrador", "Novo módulo completo", "Fora de escopo"]
                ].map((l, i) => (
                  <tr key={i} className="border-b border-border/40">
                    {l.map((c, j) => (
                      <td key={j} className="py-2 px-3">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground mt-5">
            Toda mudança entra pela mesma porta: solicitação → análise de impacto → decisão registrada → nova
            versão do Mini-Mundo. Sem isso, o escopo cresce silenciosamente (<em>scope creep</em>).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CenarioPraticoSection;
