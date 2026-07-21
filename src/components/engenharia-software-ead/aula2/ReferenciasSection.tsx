import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookMarked } from "lucide-react";

const refs = [
  "BARRETO, J. dos S. Melhorias de processos de software. In: Qualidade de Software. Porto Alegre: SAGAH, 2019.",
  "KOSCIANSKI, A.; SOARES, M. S. Qualidade de software. São Paulo: Novatec, 2006.",
  "SANTOS, L. D. V.; OLIVEIRA, C. V. S. Introdução à garantia de qualidade de software. Timburi, SP: Cia do Ebook, 2017.",
  "SOMMERVILLE, I. Engenharia de software. 9. ed. São Paulo: Pearson, 2011.",
  "WOJEWODA, S.; HASTIE, S. Standish group 2015 chaos report. InfoQ, 2015.",
];

const ReferenciasSection = () => (
  <section id="referencias" className="py-20 px-6 bg-muted/20">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-3 mb-6">
          <BookMarked className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Referências</h2>
        </div>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6 space-y-3">
            {refs.map((r, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed">• {r}</p>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default ReferenciasSection;
