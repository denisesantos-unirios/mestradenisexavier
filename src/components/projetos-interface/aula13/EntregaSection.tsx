import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { 
  Upload, Calendar, FileText, Clock, 
  CheckCircle, AlertCircle, HelpCircle, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EntregaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
              <Upload className="w-4 h-4" />
              Instruções de Entrega
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Entregar o Projeto
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {/* Card de prazo */}
          <ScrollReveal animation="fadeUp">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/30 flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Prazo de Entrega</h3>
                    <p className="text-muted-foreground">Confira a data no AVA</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Até 23:59</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Formato de entrega */}
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="bg-background rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                Formato do Arquivo
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50">
                  <h4 className="font-medium mb-2">Documento Principal</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Formato: PDF
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Nome: Fase1_NomeAluno.pdf
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Tamanho máximo: 20MB
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-secondary/50">
                  <h4 className="font-medium mb-2">Arquivos Complementares</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Screenshots em pasta .zip (se necessário)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Diagramas em formato editável (opcional)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      Relatório de auditoria (Lighthouse/WAVE)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Estrutura do documento */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="bg-background rounded-2xl border border-border/50 p-6">
              <h3 className="text-lg font-bold mb-4">Estrutura Sugerida do Documento</h3>
              
              <div className="space-y-3">
                {[
                  { num: "1", titulo: "Capa", desc: "Título, nome, data, disciplina" },
                  { num: "2", titulo: "Sumário", desc: "Índice com paginação" },
                  { num: "3", titulo: "Introdução", desc: "Contexto e objetivos (1-2 páginas)" },
                  { num: "4", titulo: "Análise de Usuários", desc: "Perfis e personas (3-4 páginas)" },
                  { num: "5", titulo: "Análise de Tarefas", desc: "HTA e fluxogramas (2-3 páginas)" },
                  { num: "6", titulo: "Avaliação Heurística", desc: "Problemas e soluções (4-5 páginas)" },
                  { num: "7", titulo: "Acessibilidade", desc: "Auditoria e recomendações (2-3 páginas)" },
                  { num: "8", titulo: "Conclusão", desc: "Síntese e próximos passos (1 página)" },
                  { num: "9", titulo: "Referências", desc: "Bibliografia utilizada" },
                  { num: "10", titulo: "Anexos", desc: "Screenshots e materiais complementares" }
                ].map((secao) => (
                  <motion.div
                    key={secao.num}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400">
                      {secao.num}
                    </span>
                    <div>
                      <span className="font-medium">{secao.titulo}</span>
                      <span className="text-muted-foreground"> – {secao.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Dúvidas e suporte */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">Dúvidas?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Em caso de dúvidas sobre a entrega, entre em contato através do fórum da disciplina no AVA 
                    ou envie mensagem direta para a professora.
                  </p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Acessar Fórum no AVA
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EntregaSection;
