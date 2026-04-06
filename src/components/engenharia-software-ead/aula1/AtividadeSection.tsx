import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, CheckCircle } from "lucide-react";

const AtividadeSection = () => {
  return (
    <section id="atividade" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 Atividade <span className="text-emerald-400">Prática</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-foreground">Dinâmica em Grupo</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Em grupos, cada equipe escolhe um <strong>sistema real</strong> (iFood, Nubank, gov.br, Netflix, Spotify, etc.) e responde:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Que problemas de negócio esse sistema resolve?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pense no "antes" e "depois" do sistema existir. Ex: Antes do iFood, você ligava para o restaurante...
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Que papéis de ES você enxerga que atuam nele?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Identifique ao menos 4 papéis (Dev, QA, PO, UX, DevOps, Analista) e justifique por quê.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Socialização</p>
                  <p className="text-sm text-muted-foreground">
                    Cada grupo apresenta em 3-5 minutos. Após as apresentações, debate coletivo sobre os padrões observados.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Entrega: participação ativa na socialização</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AtividadeSection;
