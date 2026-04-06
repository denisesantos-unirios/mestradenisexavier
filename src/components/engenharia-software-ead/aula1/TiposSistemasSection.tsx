import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, Cloud, Building, Landmark, Lightbulb } from "lucide-react";

const tipos = [
  { icon: Globe, title: "Web", exemplos: "E-commerces, portais, sistemas internos web", ex: "Amazon, Mercado Livre, sistemas corporativos", color: "from-blue-500 to-cyan-500" },
  { icon: Smartphone, title: "Mobile", exemplos: "Apps nativos ou híbridos para smartphones", ex: "iFood, Uber, Nubank", color: "from-purple-500 to-pink-500" },
  { icon: Cloud, title: "SaaS", exemplos: "Software como Serviço, assinatura mensal/anual", ex: "Slack, Notion, Salesforce, Google Workspace", color: "from-emerald-500 to-teal-500" },
  { icon: Building, title: "Legado", exemplos: "Sistemas antigos ainda em uso, difíceis de manter", ex: "Sistemas bancários em COBOL, ERPs antigos", color: "from-amber-500 to-orange-500" },
  { icon: Landmark, title: "Governamental", exemplos: "Sistemas do governo, alta regulação e burocracia", ex: "gov.br, SIAFI, sistemas do SUS", color: "from-red-500 to-rose-500" },
  { icon: Lightbulb, title: "Startups", exemplos: "MVPs, produtos inovadores, alta velocidade", ex: "Fintechs, healthtechs, edtechs", color: "from-yellow-500 to-amber-500" },
];

const TiposSistemasSection = () => {
  return (
    <section id="tipos-sistemas" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tipos de <span className="text-emerald-400">Sistemas no Mercado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O mercado de software é diverso. Conheça os principais tipos de sistemas que você vai encontrar na carreira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipos.map((tipo, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-all group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tipo.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tipo.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{tipo.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tipo.exemplos}</p>
                  <div className="px-3 py-2 rounded-lg bg-secondary/50 text-xs text-muted-foreground">
                    <strong>Exemplos:</strong> {tipo.ex}
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

export default TiposSistemasSection;
