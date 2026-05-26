import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const refs = [
  "BARRIBEAU, P. et al. Survey research. In: WRITING@CSU. Colorado, 2020.",
  "BOURQUE, P.; FAIRLEY, R. SWEBOK: guide to the software engineering body of knowledge v3. IEEE Computer Society, 2014.",
  "DENNIS, A.; WIXON, B.; ROTH, R. System Analysis and Design. 5. ed. Hoboken: John Wiley & Sons, 2012.",
  "LEFFINGWELL, D. Agile Software Requirements: lean requirements practices for teams, programs, and the enterprise. Pearson, 2011.",
  "WIEGERS, K. E.; BEATTY, J. Software Requirements. 3. ed. Microsoft Press, 2013.",
  "WIEGERS, K. More about Software Requirements: thorny issues and practical advices. Microsoft Press, 2006.",
  "REINEHR, S. Engenharia de Requisitos. SAGAH Soluções Educacionais Integradas.",
];

const ReferenciasSection = () => (
  <section id="referencias" className="py-20 px-6 bg-card/20">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
          <BookOpen className="w-8 h-8 text-rose-400" /> Referências
        </h2>
      </motion.div>
      <Card className="bg-card/50 border-border">
        <CardContent className="p-6">
          <ul className="space-y-3">
            {refs.map((r, i) => (
              <li key={i} className="text-sm text-muted-foreground border-l-2 border-rose-500/30 pl-4">
                {r}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ReferenciasSection;
