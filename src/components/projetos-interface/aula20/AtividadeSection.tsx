import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, CheckCircle, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AtividadeSection = () => (
  <section id="atividade" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ✍️ Atividade <span className="text-violet-400">Prática</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aplique o DECIDE ao projeto da sua equipe — planejamento completo de avaliação empírica.
          </p>
        </div>
      </ScrollReveal>

      <Card className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border-violet-500/20 mb-8">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Pencil className="w-5 h-5 text-violet-400" /> Entrega: Protocolo DECIDE do Projeto
          </h3>
          <div className="space-y-4">
            {[
              { letra: "D", desc: "Defina o objetivo geral da avaliação do seu protótipo" },
              { letra: "E", desc: "Liste ao menos 3 perguntas específicas que a avaliação deve responder" },
              { letra: "C", desc: "Escolha a técnica de avaliação (teste de usabilidade, comunicabilidade, etc.) e justifique" },
              { letra: "I", desc: "Descreva: perfil dos participantes (mínimo 5), tarefas selecionadas, materiais necessários" },
              { letra: "D", desc: "Elabore o TCLE e defina como será garantido o anonimato" },
              { letra: "E", desc: "Defina as métricas e como os dados serão analisados (tabela de medidas com pior/almejado/melhor)" },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-violet-400 font-black text-lg">{item.letra}</span>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-amber-400">Dica:</strong> Use o estudo de caso do Projeto Oré como referência para o nível de detalhamento esperado.
                  Preencha a tabela de medidas com limites específicos para seu projeto.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-violet-400">
            <CheckCircle className="w-4 h-4" />
            <span>Entrega: Documento no AVA • Fase 4 do Projeto de Usabilidade (2,5 pts)</span>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default AtividadeSection;
