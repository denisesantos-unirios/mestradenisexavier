import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { History, MapPin, Users, Snowflake } from "lucide-react";

const signatarios = [
  { nome: "Kent Beck", contrib: "Criador do XP (Extreme Programming)" },
  { nome: "Jeff Sutherland & Ken Schwaber", contrib: "Inventores do Scrum" },
  { nome: "Martin Fowler", contrib: "Referência em projeto para desenvolvedores" },
  { nome: "Alistair Cockburn", contrib: "Criador da família Crystal" },
  { nome: "Ward Cunningham", contrib: "Criador do Wiki e padrões de software" },
  { nome: "+ 12 outros estudiosos", contrib: "Que mais tarde formaram a Agile Alliance" },
];

const HistoriaSection = () => (
  <section id="historia" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 mb-4">
          <History className="w-4 h-4" /> <span className="text-sm font-medium">Contexto Histórico</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          De onde veio o <span className="text-violet-400">Manifesto Ágil?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A engenharia de software nasceu inspirada em processos da manufatura. Mas software evolui rápido demais para processos "pesados".
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-5 text-center">
            <div className="text-3xl font-black text-violet-400 mb-1">Anos 50-80</div>
            <p className="text-sm text-muted-foreground">Processos pesados, padronização inspirada na engenharia clássica</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-5 text-center">
            <div className="text-3xl font-black text-violet-400 mb-1">Anos 90</div>
            <p className="text-sm text-muted-foreground">Surgem alternativas: XP, Scrum, Crystal, FDD, DSDM</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-5 text-center">
            <div className="text-3xl font-black text-violet-400 mb-1">Fev/2001</div>
            <p className="text-sm text-muted-foreground">17 estudiosos criam o Manifesto Ágil em Utah, EUA</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20 mb-10">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
              <Snowflake className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-violet-400" /> Resort de esqui em Utah, EUA
              </h3>
              <p className="text-muted-foreground">
                Em fevereiro de 2001, 17 estudiosos da engenharia de software se reuniram para discutir uma alternativa aos processos pesados,
                fortemente orientados por documentação. Resultado: o documento <strong className="text-violet-400">Manifesto para Desenvolvimento Ágil de Software</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {signatarios.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                <Users className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{s.nome}</p>
                  <p className="text-xs text-muted-foreground">{s.contrib}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Card className="bg-amber-500/5 border-amber-500/20">
          <CardContent className="p-6">
            <p className="text-foreground italic">
              💡 <strong className="text-amber-400">Pressman & Maxim (2016):</strong> "Não precisamos optar por agilidade <em>ou</em> engenharia de software. 
              Devemos buscar uma abordagem de engenharia de software que seja <strong className="text-amber-400">ágil</strong>."
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default HistoriaSection;
