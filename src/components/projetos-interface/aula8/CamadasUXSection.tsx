import { motion } from "framer-motion";
import { Layers, Circle, Target, Zap, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CamadasUXSection = () => {
  const camadas = [
    {
      nivel: 1,
      nome: "Funcionalidade",
      descricao: "O produto faz o que deveria fazer?",
      pergunta: "Funciona?",
      cor: "from-red-500/20 to-red-500/5",
      borderCor: "border-red-500/30",
      icon: Circle,
    },
    {
      nivel: 2,
      nome: "Confiabilidade",
      descricao: "O produto funciona de forma consistente?",
      pergunta: "É confiável?",
      cor: "from-orange-500/20 to-orange-500/5",
      borderCor: "border-orange-500/30",
      icon: Target,
    },
    {
      nivel: 3,
      nome: "Usabilidade",
      descricao: "É fácil de usar e aprender?",
      pergunta: "É fácil?",
      cor: "from-yellow-500/20 to-yellow-500/5",
      borderCor: "border-yellow-500/30",
      icon: Zap,
    },
    {
      nivel: 4,
      nome: "Conveniência",
      descricao: "É confortável e prático usar?",
      pergunta: "É conveniente?",
      cor: "from-green-500/20 to-green-500/5",
      borderCor: "border-green-500/30",
      icon: Heart,
    },
    {
      nivel: 5,
      nome: "Prazer",
      descricao: "Usar o produto é agradável e memorável?",
      pergunta: "É prazeroso?",
      cor: "from-primary/20 to-primary/5",
      borderCor: "border-primary/30",
      icon: Star,
    },
  ];

  return (
    <section id="camadas" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Pirâmide de Walter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            As 5 Camadas da Experiência do Usuário
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Baseado na hierarquia de necessidades, cada camada deve ser satisfeita 
            antes de avançar para a próxima.
          </p>
        </motion.div>

        {/* Pyramid visualization */}
        <div className="flex flex-col items-center gap-4 mb-16">
          {camadas.slice().reverse().map((camada, index) => (
            <motion.div
              key={camada.nivel}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ width: `${60 + (4 - index) * 10}%` }}
              className={`p-4 rounded-xl bg-gradient-to-r ${camada.cor} border ${camada.borderCor} backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <camada.icon className="w-5 h-5 text-foreground" />
                  <span className="font-bold text-foreground">{camada.nome}</span>
                </div>
                <span className="text-sm text-muted-foreground">{camada.pergunta}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cards detalhados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {camadas.map((camada, index) => (
            <motion.div
              key={camada.nivel}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full bg-gradient-to-br ${camada.cor} border ${camada.borderCor} hover:scale-[1.02] transition-transform`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-background/50 flex items-center justify-center">
                      <span className="font-bold text-foreground">{camada.nivel}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{camada.nome}</h3>
                      <p className="text-sm text-muted-foreground">{camada.pergunta}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{camada.descricao}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Exemplo prático */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Exemplo: Aplicativo de Streaming
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <p className="font-medium text-red-400">Funcionalidade</p>
                  <p className="text-muted-foreground">Reproduz vídeos</p>
                </div>
                <div className="p-3 rounded-lg bg-orange-500/10">
                  <p className="font-medium text-orange-400">Confiabilidade</p>
                  <p className="text-muted-foreground">Sem travamentos</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-500/10">
                  <p className="font-medium text-yellow-400">Usabilidade</p>
                  <p className="text-muted-foreground">Busca intuitiva</p>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10">
                  <p className="font-medium text-green-400">Conveniência</p>
                  <p className="text-muted-foreground">Continuar assistindo</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <p className="font-medium text-primary">Prazer</p>
                  <p className="text-muted-foreground">Recomendações personalizadas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default CamadasUXSection;
