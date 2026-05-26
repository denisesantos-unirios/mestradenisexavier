import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, ClipboardList, Camera, BarChart, AlertTriangle, EyeOff, MessagesSquare } from "lucide-react";

const passos = [
  { num: "01", icon: Target, title: "Identificar o processo", desc: "Qual processo (ou parte dele) será observado. Pode surgir após entrevistas que revelem divergência entre o manual e a prática real." },
  { num: "02", icon: ClipboardList, title: "Preparar a observação", desc: "Adquirir conhecimento do contexto, agendar com a área, esclarecer objetivos, preparar prancheta, checklists, cronômetro e EPIs." },
  { num: "03", icon: Camera, title: "Realizar a observação", desc: "Observar no ambiente real, com tempo extra para imprevistos relevantes." },
  { num: "04", icon: BarChart, title: "Analisar informações", desc: "Confrontar com o já levantado. Inconsistências podem exigir workshop JAD para resolução." },
];

const tipos = [
  { icon: EyeOff, title: "Silenciosa", desc: "Sem interação. Usada quando o usuário não pode ser interrompido durante a tarefa." },
  { icon: MessagesSquare, title: "Interativa", desc: "Com interrupções para perguntas. Mais rica (revela o 'porquê'), mas exige cuidado para não ser invasiva." },
];

const ObservacaoSection = () => (
  <section id="observacao" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
          <Eye className="w-4 h-4" /> Técnica 3
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Observação</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ideal para processos complexos. Geralmente aplicada <strong className="text-rose-400">após</strong> entrevistas, para confirmar como o processo é
          realmente praticado e identificar problemas de usabilidade.
        </p>
      </motion.div>

      {/* Tipos */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">🎭 Tipos de Observação (Wiegers & Beatty, 2013)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {tipos.map((t, i) => (
            <Card key={i} className="bg-card/50 border-border hover:border-rose-500/30 transition-colors">
              <CardContent className="p-6">
                <t.icon className="w-8 h-8 text-rose-400 mb-3" />
                <h4 className="font-bold text-foreground mb-2 text-lg">{t.title}</h4>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Passos */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6">📋 Figura 3 — Passos da Observação</h3>
        <div className="space-y-4">
          {passos.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="bg-card/50 border-border hover:border-rose-500/30 transition-colors">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="text-4xl font-black text-rose-400/30 shrink-0">{p.num}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p.icon className="w-5 h-5 text-rose-400" />
                      <h4 className="font-bold text-foreground">{p.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
        <Card className="bg-amber-500/10 border-amber-500/30">
          <CardContent className="p-5 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <h4 className="font-bold text-foreground mb-1">⚠️ Fique atento — Gravação</h4>
              <p className="text-sm text-muted-foreground">
                Nenhuma gravação em vídeo/áudio sem autorização prévia. Mas lembre: quando as pessoas sabem que estão sendo gravadas,
                o comportamento muda — e isso introduz <strong>viés</strong> nos resultados.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-5">
            <h4 className="font-bold text-foreground mb-2">💡 Boas práticas na observação interativa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Evitar interrupções frequentes (desvia atenção e introduz viés).</li>
              <li>• Perguntas pontuais e estritamente ligadas à tarefa em execução.</li>
              <li>• Se a dúvida for de outra natureza, agende uma entrevista separada.</li>
              <li>• Atenção a detalhes e questões subjetivas/implícitas.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default ObservacaoSection;
