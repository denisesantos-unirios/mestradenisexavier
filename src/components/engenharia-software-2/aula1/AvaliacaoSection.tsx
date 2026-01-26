import { motion } from "framer-motion";
import { 
  ClipboardCheck, FileText, MessageSquare, 
  Calendar, Award, AlertCircle 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AvaliacaoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 mb-4">
            <ClipboardCheck className="w-4 h-4" />
            <span className="text-sm font-medium">Sistema de Avaliação</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como você será avaliado
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 1ª Etapa */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-purple-400">1ª</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Etapa 1</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">PBL - Fases 1, 2 e 3</span>
                  <span className="text-purple-400 font-bold">40%</span>
                </div>
                <Progress value={40} className="h-2 mb-2" />
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Fase 1: Mini-Mundo e Elicitação Inicial</li>
                  <li>• Fase 2: Requisitos Funcionais e Não-Funcionais</li>
                  <li>• Fase 3: Casos de Uso e Diagrama de Casos de Uso</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Seminários/Debates/Atividades</span>
                  <span className="text-pink-400 font-bold">20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Atividades Extra-Classe</span>
                  <span className="text-blue-400 font-bold">10%</span>
                </div>
                <Progress value={10} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">JITT / WebQuest / Fóruns</p>
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Avaliação Institucional (ENADE)</span>
                  <span className="text-green-400 font-bold">30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </div>
          </motion.div>

          {/* 2ª Etapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-pink-400">2ª</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Etapa 2</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">PBL - Fases 4, 5 e Entrega Final</span>
                  <span className="text-purple-400 font-bold">40%</span>
                </div>
                <Progress value={40} className="h-2 mb-2" />
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Fase 4: Diagramas de Classe e Objeto</li>
                  <li>• Fase 5: Diagramas de Sequência, Atividade e Estado</li>
                  <li>• Entrega Final: Documentação Completa + Apresentação</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Seminários/Debates/Atividades</span>
                  <span className="text-pink-400 font-bold">20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Atividades Extra-Classe</span>
                  <span className="text-blue-400 font-bold">10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>

              <div className="p-4 rounded-lg bg-background/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">Avaliação Institucional (ENADE)</span>
                  <span className="text-green-400 font-bold">30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Frequência */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card p-6 border-amber-500/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Frequência Obrigatória</h4>
              <p className="text-sm text-muted-foreground">
                O aluno deverá ter frequência mínima de <strong className="text-foreground">75%</strong> às 
                aulas e demais atividades da disciplina para aprovação.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvaliacaoSection;
