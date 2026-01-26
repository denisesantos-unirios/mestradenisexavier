import { motion } from "framer-motion";
import { FileText, CheckCircle, Target, Calendar, Users, Image } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const criteriosAvaliacao = [
  { criterio: "Diagrama de Casos de Uso", peso: "30%", descricao: "Completude, notação correta, limite do sistema" },
  { criterio: "Especificações de UC", peso: "25%", descricao: "Pelo menos 3 UCs detalhados com fluxos" },
  { criterio: "Identificação de Atores", peso: "15%", descricao: "Atores corretos e bem definidos" },
  { criterio: "Relacionamentos", peso: "15%", descricao: "Uso correto de include/extend/generalização" },
  { criterio: "Rastreabilidade", peso: "15%", descricao: "Matriz RF → UC atualizada" }
];

const EntregaFase3Section = () => {
  return (
    <section id="entrega" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              PBL Fase 3
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Requisitos da Entrega
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checklist */}
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rose-400" />
                Checklist de Entrega
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Diagrama de Casos de Uso</p>
                    <p className="text-sm text-muted-foreground">Imagem PNG/PDF do diagrama completo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Lista de Atores</p>
                    <p className="text-sm text-muted-foreground">Descrição de cada ator e seu papel</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Especificação de 3+ Casos de Uso</p>
                    <p className="text-sm text-muted-foreground">Template completo com fluxos principal/alternativo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Matriz de Rastreabilidade</p>
                    <p className="text-sm text-muted-foreground">Todos os RFs mapeados para UCs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Documento atualizado</p>
                    <p className="text-sm text-muted-foreground">Integrado ao documento da Fase 2</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Critérios */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-500/5 to-rose-500/10 border border-rose-500/20 h-full">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-rose-400" />
                Critérios de Avaliação
              </h3>
              
              <div className="space-y-3">
                {criteriosAvaliacao.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-card/50">
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{item.criterio}</p>
                      <p className="text-xs text-muted-foreground">{item.descricao}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-sm font-bold">
                      {item.peso}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Informações de Entrega */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 p-6 rounded-2xl bg-card border border-border">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Prazo</p>
                  <p className="text-sm text-muted-foreground">Domingo da semana 8, 23:59</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Formato</p>
                  <p className="text-sm text-muted-foreground">PDF ou link Notion/Docs + imagem diagrama</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Submissão</p>
                  <p className="text-sm text-muted-foreground">Um membro por equipe no AVA</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Próximos Passos */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20">
            <h3 className="text-lg font-bold text-foreground mb-4">🎯 Próximos Passos</h3>
            <p className="text-muted-foreground">
              Com a conclusão da <strong className="text-foreground">Fase 3</strong>, sua equipe terá completado 
              a <strong className="text-rose-400">Etapa 1</strong> do Projeto Integrador. 
              Na próxima semana, iniciaremos a <strong className="text-foreground">Etapa 2</strong>, 
              focando em diagramas estruturais (Classes e Objetos) e refinamento da modelagem.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EntregaFase3Section;
