import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, Lightbulb, AlertTriangle } from "lucide-react";
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
              Fórum de Dúvidas e Discussão
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Espaço para tirar dúvidas e discutir desafios encontrados na documentação
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              💬 Participação no Fórum
            </h3>

            <div className="space-y-6 mb-8">
              <div className="p-4 rounded-xl bg-background/50">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Poste uma Dúvida ou Desafio</p>
                    <p className="text-sm text-muted-foreground">
                      Compartilhe uma dificuldade que sua equipe encontrou durante a 
                      documentação de requisitos. Pode ser sobre interpretação, priorização, 
                      conflitos entre requisitos, etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background/50">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Responda a um Colega</p>
                    <p className="text-sm text-muted-foreground">
                      Escolha a dúvida de outra equipe e ofereça uma sugestão construtiva 
                      baseada na sua experiência ou conhecimento teórico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background/50">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-2">Reflita sobre o Feedback</p>
                    <p className="text-sm text-muted-foreground">
                      Comente como o feedback da revisão cruzada ajudou (ou não) a 
                      melhorar a qualidade dos seus requisitos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Avaliação</p>
                  <p className="text-sm text-muted-foreground">
                    A participação no fórum vale <strong>5% da nota da Etapa 1</strong>. 
                    É necessário fazer pelo menos uma postagem original e uma resposta 
                    para obter a pontuação completa.
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
