import { motion } from "framer-motion";
import { Users, MessageSquare, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const DinamicaSection = () => {
  return (
    <section id="dinamica" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Dinâmica em Sala
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revisão Cruzada de Requisitos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada equipe validará os requisitos de outra equipe identificando problemas
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              🔄 Rotação de Equipes
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Troca de Documentos</p>
                  <p className="text-sm text-muted-foreground">
                    Equipes trocam seus documentos de requisitos com outra equipe (5 min)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Análise Individual</p>
                  <p className="text-sm text-muted-foreground">
                    Cada membro lê e anota problemas encontrados (10 min)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Consolidação</p>
                  <p className="text-sm text-muted-foreground">
                    Equipe revisora consolida os problemas encontrados (10 min)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Feedback</p>
                  <p className="text-sm text-muted-foreground">
                    Apresentação do feedback para a equipe original (15 min)
                  </p>
                </div>
              </div>
            </div>

            {/* Critérios de Revisão */}
            <div className="p-4 rounded-xl bg-background/50 mb-6">
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                O que procurar na revisão:
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-sm text-muted-foreground">Requisitos ambíguos ou vagos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-sm text-muted-foreground">Requisitos não verificáveis</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-sm text-muted-foreground">Conflitos entre requisitos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-sm text-muted-foreground">Requisitos incompletos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-sm text-muted-foreground">Falta de critérios de aceitação</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-sm text-muted-foreground">Prioridades não definidas</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Resultado Esperado</p>
                  <p className="text-sm text-muted-foreground">
                    Cada equipe recebe feedback construtivo e deve corrigir os problemas 
                    identificados antes da entrega final da Fase 2 do PBL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DinamicaSection;
