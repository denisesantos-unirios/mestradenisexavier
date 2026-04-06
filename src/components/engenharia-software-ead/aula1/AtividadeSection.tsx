import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, CheckCircle, Target, Lightbulb } from "lucide-react";

const AtividadeSection = () => {
  return (
    <section id="atividade" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 Atividade <span className="text-emerald-400">Prática</span>
          </h2>
          <p className="text-muted-foreground">Tempo estimado: 15-20 minutos</p>
        </motion.div>

        {/* Atividade principal */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-foreground">Dinâmica em Grupo — "Engenheiro de Software por um dia"</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Em grupos de 3-4 pessoas, cada equipe escolhe um <strong>sistema real</strong> da lista abaixo e faz uma análise completa:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                {["📱 iFood", "💳 Nubank", "🏛️ gov.br", "🎬 Netflix", "🎵 Spotify", "🚗 Uber", "📦 Mercado Livre", "💬 WhatsApp", "🎮 Steam"].map((app) => (
                  <div key={app} className="p-2 rounded-lg bg-background/50 border border-border text-center text-sm text-muted-foreground">{app}</div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Que problemas de negócio esse sistema resolve?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Pense no "antes" e "depois" do sistema existir. Ex: Antes do iFood, você ligava para o restaurante, não sabia o tempo de entrega, pagava só em dinheiro...
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Que papéis de ES você enxerga atuando nesse sistema?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Identifique ao menos 4 papéis (Dev, QA, PO, UX, DevOps, Analista) e justifique por quê cada um é necessário. 
                      Ex: "O Nubank precisa de DevOps porque precisa estar disponível 24/7 para transações bancárias."
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Que tipo de sistema é? Quais desafios de ES ele enfrenta?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Classifique (Web, Mobile, SaaS, etc.) e liste 2-3 desafios reais. 
                      Ex: "Netflix é SaaS — desafio: streaming de vídeo para 260 milhões de usuários em 190 países sem travar."
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Se esse sistema tivesse uma "crise Healthcare.gov", o que teria dado errado?</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Imagine um cenário de falha grave e diga qual prática de ES teria prevenido. 
                      Ex: "Se o iFood caísse em dia de jogo do Brasil, foi porque não fizeram teste de carga."
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Socialização</p>
                  <p className="text-sm text-muted-foreground">
                    Cada grupo apresenta em 3-5 minutos. Após as apresentações, debate coletivo: 
                    "Quais padrões vocês perceberam em comum entre os sistemas analisados?"
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Entrega: participação ativa na socialização + post no fórum do AVA</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reflexão final */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Para pensar até a próxima aula...</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Na próxima aula vamos estudar <strong>Processos de Software</strong> — como organizar todo esse trabalho em etapas. 
                    Pense no seguinte:
                  </p>
                  <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                    <p className="text-sm text-muted-foreground italic">
                      "Se você fosse contratado para construir um sistema de gestão hospitalar para o SUS, 
                      por onde começaria? Quais etapas seguiria? Em que ordem?"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AtividadeSection;
