import { motion } from "framer-motion";
import { 
  Target, Zap, Heart, Shield, Search, Accessibility, 
  Hexagon, CheckCircle 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrincipiosUXSection = () => {
  const principios = [
    {
      icon: Target,
      nome: "Útil",
      descricao: "O produto resolve um problema real do usuário?",
      pergunta: "Isso ajuda o usuário a atingir seu objetivo?",
      exemplo: "Um app de banco que permite pagar contas é útil.",
      cor: "bg-blue-500/20",
      iconCor: "text-blue-500",
    },
    {
      icon: Zap,
      nome: "Utilizável",
      descricao: "É fácil de usar e aprender?",
      pergunta: "O usuário consegue completar tarefas sem frustrações?",
      exemplo: "Formulário de cadastro simples com poucos campos.",
      cor: "bg-yellow-500/20",
      iconCor: "text-yellow-500",
    },
    {
      icon: Heart,
      nome: "Desejável",
      descricao: "As pessoas querem usar?",
      pergunta: "O design é atraente e gera conexão emocional?",
      exemplo: "Interface elegante que transmite profissionalismo.",
      cor: "bg-pink-500/20",
      iconCor: "text-pink-500",
    },
    {
      icon: Search,
      nome: "Encontrável",
      descricao: "O conteúdo é fácil de encontrar?",
      pergunta: "A navegação e busca são intuitivas?",
      exemplo: "Menu bem organizado e busca que funciona.",
      cor: "bg-green-500/20",
      iconCor: "text-green-500",
    },
    {
      icon: Accessibility,
      nome: "Acessível",
      descricao: "Pessoas com deficiências podem usar?",
      pergunta: "Segue princípios de acessibilidade (WCAG)?",
      exemplo: "Contraste adequado, textos alternativos em imagens.",
      cor: "bg-purple-500/20",
      iconCor: "text-purple-500",
    },
    {
      icon: Shield,
      nome: "Credível",
      descricao: "Os usuários confiam no produto?",
      pergunta: "Transmite segurança e profissionalismo?",
      exemplo: "Certificados de segurança, design consistente.",
      cor: "bg-orange-500/20",
      iconCor: "text-orange-500",
    },
    {
      icon: Hexagon,
      nome: "Valioso",
      descricao: "Entrega valor para usuário e negócio?",
      pergunta: "Justifica o tempo e investimento?",
      exemplo: "Economiza tempo do usuário, gera receita para empresa.",
      cor: "bg-primary/20",
      iconCor: "text-primary",
    },
  ];

  return (
    <section id="principios" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Hexagon className="w-4 h-4" />
            Honeycomb de Morville
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Os 7 Pilares da UX
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peter Morville definiu 7 facetas que um produto deve ter para 
            oferecer uma experiência completa ao usuário.
          </p>
        </motion.div>

        {/* Honeycomb visual */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-2">
              {/* Linha 1 */}
              <div className="col-start-2 flex justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center rotate-45">
                  <span className="font-bold text-primary -rotate-45 text-sm">Valioso</span>
                </div>
              </div>
              {/* Linha 2 */}
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-medium text-blue-500 text-xs">Útil</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-medium text-yellow-500 text-xs">Utilizável</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-medium text-pink-500 text-xs">Desejável</span>
                </div>
              </div>
              {/* Linha 3 */}
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-medium text-green-500 text-xs">Encontrável</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-medium text-purple-500 text-xs">Acessível</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <span className="font-medium text-orange-500 text-xs">Credível</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards detalhados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principios.map((principio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${principio.cor} flex items-center justify-center`}>
                      <principio.icon className={`w-6 h-6 ${principio.iconCor}`} />
                    </div>
                    <CardTitle>{principio.nome}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{principio.descricao}</p>
                  
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <p className="text-sm font-medium text-foreground mb-1">Pergunta-chave:</p>
                    <p className="text-sm text-muted-foreground italic">"{principio.pergunta}"</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Ex:</span> {principio.exemplo}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrincipiosUXSection;
