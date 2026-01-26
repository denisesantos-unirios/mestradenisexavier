import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { CheckSquare, Square, BookOpen, FileText, Users, Palette } from "lucide-react";

const checklistItems = [
  {
    categoria: "Conceitos Fundamentais",
    icon: BookOpen,
    cor: "text-blue-400",
    items: [
      "Entendo a diferença entre Interface e Interação",
      "Conheço os 6 princípios de Don Norman",
      "Sei definir Usabilidade (Eficácia, Eficiência, Satisfação)",
      "Compreendo as 10 Heurísticas de Nielsen"
    ]
  },
  {
    categoria: "Usuários e Personas",
    icon: Users,
    cor: "text-purple-400",
    items: [
      "Sei criar perfis de usuários baseados em dados",
      "Consigo desenvolver personas realistas",
      "Entendo modelos mentais vs modelos conceituais",
      "Sei conduzir análise de stakeholders"
    ]
  },
  {
    categoria: "Cognição e Tarefas",
    icon: FileText,
    cor: "text-green-400",
    items: [
      "Compreendo as Leis de Miller, Hick e Fitts",
      "Conheço os princípios da Gestalt",
      "Sei fazer Análise Hierárquica de Tarefas (HTA)",
      "Consigo criar fluxogramas de interação"
    ]
  },
  {
    categoria: "UX e Acessibilidade",
    icon: Palette,
    cor: "text-amber-400",
    items: [
      "Diferencio UX de UI",
      "Conheço a Pirâmide de Walter e Honeycomb de Morville",
      "Sei criar Mapas de Jornada do Usuário",
      "Compreendo WCAG 2.1 e os princípios POUR",
      "Sei usar ferramentas de auditoria de acessibilidade"
    ]
  }
];

const ChecklistSection = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoria: string, index: number) => {
    const key = `${categoria}-${index}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalItems = checklistItems.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = (checkedCount / totalItems) * 100;

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Checklist de Autoavaliação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Marque os tópicos que você já domina para identificar pontos de revisão
            </p>
            
            {/* Barra de progresso */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progresso</span>
                <span className="font-medium">{checkedCount} / {totalItems}</span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {checklistItems.map((categoria, catIndex) => (
            <ScrollReveal key={categoria.categoria} animation="fadeUp" delay={catIndex * 0.1}>
              <div className="bg-background rounded-2xl border border-border/50 p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center ${categoria.cor}`}>
                    <categoria.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold">{categoria.categoria}</h3>
                </div>
                
                <ul className="space-y-3">
                  {categoria.items.map((item, index) => {
                    const key = `${categoria.categoria}-${index}`;
                    const isChecked = checkedItems[key];
                    
                    return (
                      <motion.li
                        key={index}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleItem(categoria.categoria, index)}
                        className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          isChecked 
                            ? "bg-green-500/10 border border-green-500/30" 
                            : "bg-secondary/30 hover:bg-secondary/50"
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${isChecked ? "text-foreground" : "text-muted-foreground"}`}>
                          {item}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mensagem de conclusão */}
        {progressPercent === 100 && (
          <ScrollReveal animation="scale" delay={0.5}>
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                🎉 Parabéns! Você completou o checklist!
              </h3>
              <p className="text-muted-foreground">
                Você está pronto para a entrega da Fase 1 do projeto!
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default ChecklistSection;
