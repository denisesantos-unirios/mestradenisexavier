import { motion } from "framer-motion";
import { 
  Upload, FileText, Users, Calendar, 
  CheckCircle2, AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EntregaSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-4">
            <Upload className="w-4 h-4" />
            <span className="text-sm font-medium">Entrega da Fase 1</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que entregar
          </h2>
        </motion.div>

        {/* Instruções */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Documento do Mini-Mundo</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-violet-400 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Capa</h4>
                <p className="text-sm text-muted-foreground">
                  Nome do projeto, nome da equipe, integrantes, curso, disciplina, data
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-violet-400 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Descrição do Problema</h4>
                <p className="text-sm text-muted-foreground">
                  Contexto atual, dificuldades, motivação para o sistema (1-2 parágrafos)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-violet-400 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Mini-Mundo</h4>
                <p className="text-sm text-muted-foreground">
                  Descrição textual completa seguindo o modelo apresentado em aula
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-violet-400 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Lista de Stakeholders</h4>
                <p className="text-sm text-muted-foreground">
                  Tabela com: Nome do stakeholder, Tipo (primário/secundário), 
                  Responsabilidades, Expectativas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
              <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-violet-400 font-bold">5</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Requisitos Iniciais</h4>
                <p className="text-sm text-muted-foreground">
                  Lista preliminar de 5-10 requisitos funcionais e 3-5 não-funcionais 
                  identificados a partir do mini-mundo
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Critérios e Prazo */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-foreground">Critérios de Avaliação</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Clareza e completude do Mini-Mundo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Identificação correta dos stakeholders
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Requisitos coerentes com o contexto
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Formatação e organização do documento
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Participação de todos os membros
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-bold text-foreground">Prazo e Formato</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5" />
                <span>Entregar até a <strong className="text-foreground">data indicada no AVA</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-amber-400 mt-0.5" />
                <span>Formato: <strong className="text-foreground">PDF</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 text-amber-400 mt-0.5" />
                <span>Apenas <strong className="text-foreground">1 membro</strong> da equipe envia</span>
              </li>
              <li className="flex items-start gap-2">
                <Upload className="w-4 h-4 text-amber-400 mt-0.5" />
                <span>Nome do arquivo: <code className="text-xs bg-background px-1 py-0.5 rounded">Fase1_NomeEquipe.pdf</code></span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EntregaSection;
