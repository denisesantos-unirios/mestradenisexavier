import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle } from "lucide-react";

const AtividadeSection = () => (
  <section id="atividade" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">🎯 Atividade Prática</h2>
            <p className="text-muted-foreground mb-6">Estudo de caso em grupo</p>

            <div className="p-5 rounded-xl bg-background/50 border border-border mb-6">
              <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" /> Cenário
              </h3>
              <p className="text-muted-foreground">
                <em>"Sistema para gestão de prontuários em um hospital público"</em> — o sistema precisa gerenciar prontuários eletrônicos de pacientes, agendamentos médicos, 
                prescrições e integração com o SUS. O hospital atende 500 pacientes/dia e opera 24h.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground">
                  <span className="text-blue-400">Pergunta 1:</span> Nesse contexto, faria sentido usar cascata puro? Por quê?
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Considere: regulação, estabilidade de requisitos, segurança, compliance.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="font-semibold text-foreground">
                  <span className="text-blue-400">Pergunta 2:</span> Que risco você vê se tentar usar só cascata?
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Pense em: mudanças regulatórias, feedback de médicos e enfermeiros, integração com sistemas legados.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-400">
              <CheckCircle className="w-4 h-4" />
              <span>Entrega: parágrafo por grupo no AVA</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default AtividadeSection;
