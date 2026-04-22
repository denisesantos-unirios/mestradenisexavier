import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookMarked, ExternalLink, GraduationCap } from "lucide-react";

const referencias = [
  {
    autor: "ZANIN, A.",
    titulo: "Conceitos da Engenharia de Software",
    detalhes: "Capítulo do livro Engenharia de Software. Porto Alegre: SAGAH, 2017.",
    tipo: "Capítulo de Livro (texto-base desta aula)",
    destaque: true,
  },
  {
    autor: "SOMMERVILLE, I.",
    titulo: "Engenharia de Software",
    detalhes: "9. ed. São Paulo: Pearson, 2011. Capítulos 1, 2 e 3.",
    tipo: "Livro de Referência",
    destaque: true,
  },
  {
    autor: "BECK, K. et al.",
    titulo: "Manifesto for Agile Software Development",
    detalhes: "2001. Disponível em: agilemanifesto.org",
    tipo: "Manifesto",
    link: "https://agilemanifesto.org/iso/ptbr/",
  },
  {
    autor: "ABÍLIO, I.",
    titulo: "Programação orientada a objetos versus programação estruturada",
    detalhes: "DevMedia, 2017.",
    tipo: "Artigo Web",
    link: "https://www.devmedia.com.br/programacao-orientada-a-objetos-versus-programacao-estruturada/32813",
  },
  {
    autor: "PACIEVITCH, Y.",
    titulo: "História da programação",
    detalhes: "InfoEscola, 2017.",
    tipo: "Artigo Web",
    link: "https://www.infoescola.com/informatica/historia-da-programacao/",
  },
  {
    autor: "PRESSMAN, R. S.; MAXIM, B. R.",
    titulo: "Engenharia de Software: Uma Abordagem Profissional",
    detalhes: "8. ed. Porto Alegre: AMGH, 2016.",
    tipo: "Livro Complementar",
  },
  {
    autor: "STANDISH GROUP",
    titulo: "CHAOS Report",
    detalhes: "Relatório anual sobre sucesso e falha de projetos de TI. 1995–2020.",
    tipo: "Relatório de Indústria",
    link: "https://www.standishgroup.com/",
  },
];

const ReferenciasSection = () => {
  return (
    <section id="referencias" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            📚 <span className="text-emerald-400">Referências</span> Bibliográficas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Esta aula é baseada no capítulo <strong className="text-emerald-400">"Conceitos da Engenharia de Software"</strong> de 
            Aline Zanin, complementado por bibliografia clássica e contemporânea da área.
          </p>
        </motion.div>

        <div className="space-y-3">
          {referencias.map((ref, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                className={`bg-card/50 ${
                  ref.destaque ? "border-emerald-500/40" : "border-border"
                }`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        ref.destaque ? "bg-emerald-500/15" : "bg-secondary/30"
                      }`}
                    >
                      {ref.destaque ? (
                        <GraduationCap className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <BookMarked className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-bold text-foreground text-sm">{ref.autor}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold ${
                            ref.destaque
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : "bg-secondary/40 text-muted-foreground border border-border"
                          }`}
                        >
                          {ref.tipo}
                        </span>
                      </div>
                      <p className="text-sm text-foreground italic mb-1">{ref.titulo}</p>
                      <p className="text-xs text-muted-foreground">{ref.detalhes}</p>
                      {ref.link && (
                        <a
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Acessar fonte
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="bg-emerald-500/5 border-emerald-500/20">
            <CardContent className="p-6">
              <h3 className="font-bold text-emerald-400 mb-2">📖 Leituras Recomendadas</h3>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-foreground">Endeavor Brasil:</strong> "PDCA: a prática levando sua gestão à perfeição" (2015) — 
                  para entender o ciclo PDCA aplicado à melhoria de processos.
                </li>
                <li>
                  <strong className="text-foreground">Sommerville (2011) — Cap. 2:</strong> Modelos de Processo de Software (Cascata, 
                  Incremental, Espiral, Reuso).
                </li>
                <li>
                  <strong className="text-foreground">Pressman & Maxim (2016) — Cap. 1:</strong> A natureza do software e a Engenharia 
                  de Software como disciplina.
                </li>
                <li>
                  <strong className="text-foreground">Manifesto Ágil (PT-BR):</strong> agilemanifesto.org/iso/ptbr — leia os 4 valores 
                  e os 12 princípios na íntegra.
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferenciasSection;
