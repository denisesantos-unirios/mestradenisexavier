import { motion } from "framer-motion";
import { ClipboardList, Smartphone, Type, Palette, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AtividadeSection = () => {
  const exerciseSteps = [
    {
      step: "1",
      title: "Criar Arquivo",
      icon: Smartphone,
      tasks: [
        "Criar novo arquivo no Figma",
        "Adicionar frame de smartphone",
        "Nomear o arquivo e frame",
        "Organizar em página apropriada"
      ]
    },
    {
      step: "2",
      title: "Elementos Básicos",
      icon: Type,
      tasks: [
        "Adicionar retângulos e círculos",
        "Inserir textos com diferentes estilos",
        "Criar hierarquia visual",
        "Experimentar alinhamentos"
      ]
    },
    {
      step: "3",
      title: "Estilos e Cores",
      icon: Palette,
      tasks: [
        "Definir cores do projeto",
        "Criar estilos de texto",
        "Aplicar fills e strokes",
        "Experimentar efeitos (sombras)"
      ]
    },
    {
      step: "4",
      title: "Auto Layout",
      icon: CheckCircle,
      tasks: [
        "Criar um botão com Auto Layout",
        "Fazer uma lista de itens",
        "Criar um card com padding",
        "Testar diferentes espaçamentos"
      ]
    }
  ];

  return (
    <section id="atividade" className="py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4">
            <ClipboardList className="w-4 h-4" />
            Exercício Prático
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Primeira Tela no Figma
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crie sua primeira tela no Figma praticando os conceitos 
            aprendidos nesta aula.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {exerciseSteps.map((exercise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold">
                      {exercise.step}
                    </div>
                    <div className="flex items-center gap-2">
                      <exercise.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {exercise.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded border border-violet-500/30 flex items-center justify-center text-xs text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Deliverable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Entregável: Tela de Login
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Crie uma tela de login simples contendo:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Logo ou título do app
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Campos de email e senha (usando Auto Layout)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Botão de login estilizado
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Link "Esqueci minha senha"
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Compartilhar link do arquivo Figma
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AtividadeSection;
