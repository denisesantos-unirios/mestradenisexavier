import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const habilidades = [
  "Escutar", "Entrevistar e questionar", "Pensar/agir rapidamente", "Aprender",
  "Comunicação", "Organização", "Modelagem", "Analítica",
  "Interpessoais", "Pensamento sistêmico", "Liderança", "Criatividade",
  "Observação", "Ser um facilitador",
];

const HabilidadesSection = () => (
  <section id="habilidades" className="py-20 px-6 bg-card/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" /> Perfil
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Habilidades do Analista de Requisitos
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Independentemente da técnica, Wiegers & Beatty (2013) destacam um conjunto de habilidades essenciais.
        </p>
      </motion.div>

      <Card className="bg-card/50 border-border">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {habilidades.map((h, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 text-sm font-medium text-foreground"
              >
                {h}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default HabilidadesSection;
