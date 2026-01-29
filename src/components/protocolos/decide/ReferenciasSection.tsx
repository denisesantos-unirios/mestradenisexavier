import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ReferenciasSection = () => {
  const referencias = [
    {
      autores: "BARBOSA, S. D. J.; SILVA, B. S.",
      titulo: "Interação Humano-Computador",
      info: "Rio de Janeiro: Elsevier, 2010."
    },
    {
      autores: "BRAUN, V.; CLARKE, V.",
      titulo: "Using thematic analysis in psychology",
      info: "Qualitative Research in Psychology, v. 3, n. 2, p. 77-101, 2006."
    },
    {
      autores: "ISO 9241-11:2018",
      titulo: "Ergonomics of human-system interaction — Part 11: Usability: Definitions and concepts",
      info: "International Organization for Standardization, 2018."
    },
    {
      autores: "NIELSEN, J.",
      titulo: "Why You Only Need to Test with 5 Users",
      info: "Nielsen Norman Group, 2000.",
      link: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/"
    },
    {
      autores: "PREECE, J.; ROGERS, Y.; SHARP, H.",
      titulo: "Interaction Design: Beyond Human-Computer Interaction",
      info: "New York: John Wiley & Sons, 2002."
    },
    {
      autores: "ROSSON, M. B.; CARROLL, J. M.",
      titulo: "Usability Engineering: Scenario-Based Development of Human-Computer Interaction",
      info: "San Francisco: Morgan Kaufmann, 2002."
    },
    {
      autores: "RUBIN, J.; CHISNELL, D.",
      titulo: "Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests",
      info: "2nd ed. Indianapolis: Wiley, 2008."
    }
  ];

  return (
    <section id="Referências" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Bibliografia</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Referências Bibliográficas
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {referencias.map((ref, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                className="glass-card p-4 hover:border-primary/30 transition-colors"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm">
                  <span className="text-foreground font-medium">{ref.autores}</span>{" "}
                  <span className="text-primary italic">{ref.titulo}</span>.{" "}
                  <span className="text-muted-foreground">{ref.info}</span>
                  {ref.link && (
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 ml-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Link
                    </a>
                  )}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Créditos */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Documento elaborado por
            </p>
            <p className="text-foreground font-semibold">
              Mestra em Ciência da Computação Denise Xavier dos Santos
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Versão Digital • 2025
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReferenciasSection;
