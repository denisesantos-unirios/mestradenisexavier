import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, Lightbulb, FileText } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ForumSection = () => {
  return (
    <section id="forum" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Atividade Virtual
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fórum: Dúvidas sobre Casos de Uso
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="space-y-6 mb-8">
              <div className="p-4 rounded-xl bg-background/50">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Tarefa 1: Identificar Atores e UC</p>
                    <p className="text-sm text-muted-foreground">
                      Com base no seu projeto PBL, identifique e liste todos os atores 
                      do sistema e pelo menos 5 casos de uso principais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background/50">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Tarefa 2: Especificar um UC</p>
                    <p className="text-sm text-muted-foreground">
                      Escolha o caso de uso mais importante do seu projeto e especifique 
                      completamente usando o template apresentado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background/50">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Tarefa 3: Revisar um Colega</p>
                    <p className="text-sm text-muted-foreground">
                      Leia a especificação de outra equipe e sugira melhorias ou 
                      identifique possíveis fluxos alternativos não contemplados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Preparação para Aula 14</p>
                  <p className="text-sm text-muted-foreground">
                    Na próxima aula presencial, cada equipe apresentará seu diagrama de 
                    casos de uso inicial. Venha preparado com a lista de atores e casos 
                    de uso identificados.
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

export default ForumSection;
