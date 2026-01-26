import { motion } from "framer-motion";
import { PenTool, Users, Clock, FileText, CheckSquare } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AtividadeSection = () => {
  return (
    <section id="atividade" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <PenTool className="w-4 h-4" />
              Workshop Prático
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Documentando seu Projeto
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aplique os conceitos aprendidos documentando os requisitos do seu projeto PBL
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span>Equipe PBL</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>40 minutos</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4">
              📋 Tarefa: Criar Documento de Requisitos
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                <CheckSquare className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Etapa 1: Revisão do Mini-Mundo</p>
                  <p className="text-sm text-muted-foreground">
                    Revisar e refinar a descrição do mini-mundo da Aula 5
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                <CheckSquare className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Etapa 2: Listar Requisitos Funcionais</p>
                  <p className="text-sm text-muted-foreground">
                    Identificar pelo menos 10 requisitos funcionais usando o formato RF[XXX]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                <CheckSquare className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Etapa 3: Listar Requisitos Não-Funcionais</p>
                  <p className="text-sm text-muted-foreground">
                    Identificar pelo menos 5 requisitos não-funcionais por categoria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-background/50">
                <CheckSquare className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Etapa 4: Priorização</p>
                  <p className="text-sm text-muted-foreground">
                    Classificar cada requisito como Alta, Média ou Baixa prioridade
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Entrega</p>
                  <p className="text-sm text-muted-foreground">
                    Documento no Notion/Google Docs seguindo o template IEEE 830 simplificado. 
                    Link deve ser compartilhado no AVA até a próxima aula.
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

export default AtividadeSection;
