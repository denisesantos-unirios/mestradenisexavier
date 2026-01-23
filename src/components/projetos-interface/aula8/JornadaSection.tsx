import { motion } from "framer-motion";
import { Map, Search, ShoppingCart, CreditCard, Package, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const JornadaSection = () => {
  const etapasJornada = [
    {
      fase: "Descoberta",
      icon: Search,
      acoes: "Pesquisa no Google, vê anúncio",
      pensamentos: "Preciso de um novo celular",
      emocao: "Curiosidade",
      touchpoint: "Google, Redes Sociais",
      cor: "bg-blue-500",
    },
    {
      fase: "Consideração",
      icon: ShoppingCart,
      acoes: "Compara modelos, lê reviews",
      pensamentos: "Qual é o melhor custo-benefício?",
      emocao: "Análise",
      touchpoint: "Site, YouTube",
      cor: "bg-purple-500",
    },
    {
      fase: "Decisão",
      icon: CreditCard,
      acoes: "Adiciona ao carrinho, finaliza compra",
      pensamentos: "Espero que chegue rápido",
      emocao: "Expectativa",
      touchpoint: "E-commerce, App",
      cor: "bg-primary",
    },
    {
      fase: "Entrega",
      icon: Package,
      acoes: "Rastreia pedido, recebe produto",
      pensamentos: "Que bom, chegou!",
      emocao: "Satisfação",
      touchpoint: "Email, SMS, App",
      cor: "bg-green-500",
    },
    {
      fase: "Pós-compra",
      icon: Star,
      acoes: "Usa produto, avalia experiência",
      pensamentos: "Recomendo para amigos",
      emocao: "Lealdade",
      touchpoint: "App, Suporte",
      cor: "bg-yellow-500",
    },
  ];

  const elementosJornada = [
    {
      nome: "Persona",
      desc: "Quem é o usuário? Características e necessidades.",
    },
    {
      nome: "Cenário",
      desc: "Em qual contexto a interação acontece?",
    },
    {
      nome: "Fases/Etapas",
      desc: "Momentos principais da jornada do usuário.",
    },
    {
      nome: "Ações",
      desc: "O que o usuário faz em cada etapa?",
    },
    {
      nome: "Pensamentos",
      desc: "O que o usuário está pensando?",
    },
    {
      nome: "Emoções",
      desc: "Como o usuário se sente?",
    },
    {
      nome: "Touchpoints",
      desc: "Pontos de contato com a marca/produto.",
    },
    {
      nome: "Oportunidades",
      desc: "Onde podemos melhorar a experiência?",
    },
  ];

  return (
    <section id="jornada" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Map className="w-4 h-4" />
            Customer Journey Map
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mapa de Jornada do Usuário
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramenta visual que documenta toda a experiência do usuário, 
            desde o primeiro contato até a fidelização.
          </p>
        </motion.div>

        {/* Elementos do mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Elementos de um Mapa de Jornada
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {elementosJornada.map((elemento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <h4 className="font-bold text-foreground mb-1">{elemento.nome}</h4>
                <p className="text-sm text-muted-foreground">{elemento.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exemplo de jornada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader className="bg-primary/5 border-b border-border">
              <CardTitle className="flex items-center gap-2">
                <Map className="w-5 h-5 text-primary" />
                Exemplo: Jornada de Compra Online
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 overflow-x-auto">
              {/* Timeline visual */}
              <div className="flex items-center justify-between min-w-[800px] mb-8">
                {etapasJornada.map((etapa, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full ${etapa.cor} flex items-center justify-center`}>
                        <etapa.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="mt-2 text-sm font-medium text-foreground">{etapa.fase}</span>
                    </div>
                    {index < etapasJornada.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-muted-foreground mx-4" />
                    )}
                  </div>
                ))}
              </div>

              {/* Tabela de detalhes */}
              <div className="min-w-[800px]">
                <div className="grid grid-cols-6 gap-4 text-sm">
                  <div className="font-bold text-muted-foreground">Aspecto</div>
                  {etapasJornada.map((etapa) => (
                    <div key={etapa.fase} className="font-bold text-center text-foreground">
                      {etapa.fase}
                    </div>
                  ))}
                </div>
                
                {/* Ações */}
                <div className="grid grid-cols-6 gap-4 text-sm py-3 border-t border-border">
                  <div className="text-muted-foreground">Ações</div>
                  {etapasJornada.map((etapa) => (
                    <div key={etapa.fase} className="text-center text-muted-foreground">
                      {etapa.acoes}
                    </div>
                  ))}
                </div>

                {/* Pensamentos */}
                <div className="grid grid-cols-6 gap-4 text-sm py-3 border-t border-border">
                  <div className="text-muted-foreground">Pensamentos</div>
                  {etapasJornada.map((etapa) => (
                    <div key={etapa.fase} className="text-center text-muted-foreground italic">
                      "{etapa.pensamentos}"
                    </div>
                  ))}
                </div>

                {/* Emoções */}
                <div className="grid grid-cols-6 gap-4 text-sm py-3 border-t border-border">
                  <div className="text-muted-foreground">Emoção</div>
                  {etapasJornada.map((etapa) => (
                    <div key={etapa.fase} className="text-center">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                        {etapa.emocao}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Touchpoints */}
                <div className="grid grid-cols-6 gap-4 text-sm py-3 border-t border-border">
                  <div className="text-muted-foreground">Touchpoints</div>
                  {etapasJornada.map((etapa) => (
                    <div key={etapa.fase} className="text-center text-muted-foreground">
                      {etapa.touchpoint}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default JornadaSection;
