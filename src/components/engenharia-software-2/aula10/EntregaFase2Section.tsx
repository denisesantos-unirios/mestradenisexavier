import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertTriangle, Calendar, Users, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const criteriosAvaliacao = [
  { criterio: "Completude dos Requisitos", peso: "25%", descricao: "Todos os requisitos identificados e documentados" },
  { criterio: "Qualidade da Escrita", peso: "20%", descricao: "Requisitos claros, não ambíguos e verificáveis" },
  { criterio: "Formato e Estrutura", peso: "15%", descricao: "Seguiu o template IEEE 830 simplificado" },
  { criterio: "Priorização", peso: "15%", descricao: "Todos os requisitos com prioridade definida" },
  { criterio: "Critérios de Aceitação", peso: "15%", descricao: "Cada RF com critérios claros de validação" },
  { criterio: "Correções da Revisão", peso: "10%", descricao: "Aplicou as correções do feedback recebido" }
];

const EntregaFase2Section = () => {
  return (
    <section id="entrega" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              PBL Fase 2
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Requisitos da Entrega
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Checklist completo para garantir que sua entrega está pronta
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checklist de Entrega */}
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-500" />
                Checklist de Entrega
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Mini-Mundo revisado</p>
                    <p className="text-sm text-muted-foreground">Descrição textual do sistema atualizada</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Mínimo 10 Requisitos Funcionais</p>
                    <p className="text-sm text-muted-foreground">RF001 a RF010 documentados</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Mínimo 5 Requisitos Não-Funcionais</p>
                    <p className="text-sm text-muted-foreground">RNF001 a RNF005 por categoria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Critérios de Aceitação</p>
                    <p className="text-sm text-muted-foreground">Cada RF com critérios verificáveis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Priorização completa</p>
                    <p className="text-sm text-muted-foreground">Alta/Média/Baixa para cada requisito</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-border" />
                  <div>
                    <p className="font-medium text-foreground">Correções aplicadas</p>
                    <p className="text-sm text-muted-foreground">Feedback da revisão cruzada implementado</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Critérios de Avaliação */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/5 to-amber-500/10 border border-amber-500/20 h-full">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-500" />
                Critérios de Avaliação
              </h3>
              
              <div className="space-y-3">
                {criteriosAvaliacao.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-card/50">
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-sm">{item.criterio}</p>
                      <p className="text-xs text-muted-foreground">{item.descricao}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold">
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
                  <p className="text-sm text-muted-foreground">Até domingo, 23:59</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Formato</p>
                  <p className="text-sm text-muted-foreground">Link do Notion ou Google Docs</p>
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
      </div>
    </section>
  );
};

export default EntregaFase2Section;
