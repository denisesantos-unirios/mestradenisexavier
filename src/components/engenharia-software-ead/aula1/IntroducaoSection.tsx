import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Smartphone, Building2, GraduationCap, Factory } from "lucide-react";

const exemplos = [
  { icon: Smartphone, label: "Celular", desc: "Apps bancários, redes sociais, GPS — todos dependem de software bem construído" },
  { icon: Building2, label: "Banco", desc: "Milhões de transações por segundo exigem software confiável e seguro" },
  { icon: GraduationCap, label: "Educação", desc: "AVAs, sistemas de matrícula, notas — o campus inteiro roda em software" },
  { icon: Factory, label: "Indústria", desc: "Automação, IoT, controle de qualidade — software controla máquinas e processos" },
];

const IntroducaoSection = () => {
  return (
    <section id="introducao" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que estudar <span className="text-emerald-400">Engenharia de Software</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Hoje, grande parte dos equipamentos, serviços e sistemas utilizados diariamente depende diretamente de softwares para funcionar. 
            Construir esses sistemas com qualidade <strong>não é só escrever código</strong> — envolve entender problemas, planejar soluções, 
            coordenar equipes, testar, entregar e cuidar do que foi implantado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {exemplos.map((ex, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-colors">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                    <ex.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{ex.label}</h4>
                  <p className="text-sm text-muted-foreground">{ex.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-emerald-500/5 border-emerald-500/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">A ideia central</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A engenharia de software nasceu para organizar esse caminho e evitar os erros históricos que levaram a projetos 
                    atrasados, caros e cheios de falhas — um cenário que ficou conhecido como a <strong className="text-emerald-400">crise do software</strong>. 
                    Ao trazer métodos, padrões e atenção ao ciclo de vida completo, ela transforma o desenvolvimento em uma atividade 
                    mais confiável e sustentável (Sommerville, 2019).
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    Não basta ter boas ideias — é preciso ter <strong>processos que garantam que essas ideias se tornem produtos 
                    funcionais e de qualidade</strong>. A ES não se limita a técnicas ou ferramentas; ela trata também da forma como 
                    equipes trabalham, como os riscos são gerenciados e como o cliente é colocado no centro das decisões.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroducaoSection;
