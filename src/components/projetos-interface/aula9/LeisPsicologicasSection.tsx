import { motion } from "framer-motion";
import { Brain, Clock, MousePointer, Layers, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LeisPsicologicasSection = () => {
  const leis = [
    {
      icon: Clock,
      nome: "Lei de Hick",
      autor: "William Hick & Ray Hyman",
      enunciado: "O tempo de decisão aumenta com o número de opções.",
      aplicacao: "Limite escolhas. Agrupe opções em categorias. Use progressive disclosure.",
      exemplo: "Menu com 5 categorias principais em vez de 30 itens soltos.",
      cor: "bg-blue-500/20",
      iconCor: "text-blue-500",
    },
    {
      icon: MousePointer,
      nome: "Lei de Fitts",
      autor: "Paul Fitts",
      enunciado: "Tempo para atingir um alvo depende da distância e tamanho do alvo.",
      aplicacao: "Botões importantes devem ser grandes e fáceis de alcançar.",
      exemplo: "Botão de 'Comprar' grande e próximo ao produto.",
      cor: "bg-green-500/20",
      iconCor: "text-green-500",
    },
    {
      icon: Layers,
      nome: "Lei de Miller",
      autor: "George Miller",
      enunciado: "Pessoas conseguem manter 7±2 itens na memória de trabalho.",
      aplicacao: "Divida informações em chunks de 5-9 elementos.",
      exemplo: "Número de telefone dividido: (11) 9999-9999",
      cor: "bg-purple-500/20",
      iconCor: "text-purple-500",
    },
    {
      icon: Target,
      nome: "Lei de Jakob",
      autor: "Jakob Nielsen",
      enunciado: "Usuários passam mais tempo em outros sites, então preferem que o seu funcione igual.",
      aplicacao: "Siga convenções de design. Não reinvente padrões conhecidos.",
      exemplo: "Carrinho de compras no canto superior direito.",
      cor: "bg-orange-500/20",
      iconCor: "text-orange-500",
    },
    {
      icon: Zap,
      nome: "Lei de Tesler",
      autor: "Larry Tesler",
      enunciado: "Todo sistema tem complexidade inerente que não pode ser eliminada, só transferida.",
      aplicacao: "Absorva a complexidade no design, não force para o usuário.",
      exemplo: "Preenchimento automático de endereço via CEP.",
      cor: "bg-pink-500/20",
      iconCor: "text-pink-500",
    },
    {
      icon: Brain,
      nome: "Efeito Von Restorff",
      autor: "Hedwig von Restorff",
      enunciado: "Itens que se destacam são mais lembrados.",
      aplicacao: "Destaque elementos importantes com cor, tamanho ou posição diferente.",
      exemplo: "Plano recomendado com borda colorida diferente.",
      cor: "bg-primary/20",
      iconCor: "text-primary",
    },
  ];

  return (
    <section id="leis" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            Psicologia Aplicada
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leis Psicológicas do Design
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Princípios fundamentados em pesquisas de psicologia cognitiva que 
            ajudam a criar interfaces mais intuitivas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leis.map((lei, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${lei.cor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <lei.icon className={`w-7 h-7 ${lei.iconCor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{lei.nome}</CardTitle>
                      <p className="text-sm text-muted-foreground">{lei.autor}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Enunciado */}
                  <div className="p-4 rounded-xl bg-secondary/50 border-l-4 border-primary">
                    <p className="text-foreground font-medium">
                      "{lei.enunciado}"
                    </p>
                  </div>

                  {/* Aplicação */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">📌 Aplicação:</p>
                    <p className="text-sm text-muted-foreground">{lei.aplicacao}</p>
                  </div>

                  {/* Exemplo */}
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-sm">
                      <span className="font-medium text-primary">Exemplo:</span>{" "}
                      <span className="text-muted-foreground">{lei.exemplo}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recurso adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-center"
        >
          <p className="text-foreground mb-2">
            🔗 <span className="font-bold">Recurso Recomendado:</span>
          </p>
          <a 
            href="https://lawsofux.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            lawsofux.com
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Site com todas as leis de UX explicadas com exemplos visuais.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeisPsicologicasSection;
