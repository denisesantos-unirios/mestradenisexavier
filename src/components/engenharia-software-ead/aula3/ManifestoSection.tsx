import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Handshake, RefreshCw, AlertCircle } from "lucide-react";

const valores = [
  {
    icon: Users,
    titulo: "Indivíduos e interações",
    versus: "processos e ferramentas",
    desc: "Software é construído por pessoas e para pessoas. A confiança cega em processos e ferramentas em detrimento da comunicação direta gera retrabalho. Conversas, discussões e comunicação face a face são insubstituíveis no trabalho em equipe.",
    exemplo: "Em vez de seguir um processo rígido de aprovação por email, fazer uma daily meeting de 15 minutos para alinhar bloqueios.",
  },
  {
    icon: Code,
    titulo: "Software em funcionamento",
    versus: "documentação abrangente",
    desc: "Documentar tudo em detalhes não tem valor se nenhuma parte do software está funcionando. É um equilíbrio: documentar o que será útil, o que tem baixa volatilidade, o que será realmente usado. Nem documentação extrema, nem ausência de documentação.",
    exemplo: "Entregar um MVP funcional em 2 semanas com documentação mínima essencial, ao invés de 3 meses elaborando especificações detalhadas.",
  },
  {
    icon: Handshake,
    titulo: "Colaboração com o cliente",
    versus: "negociação de contratos",
    desc: "O escopo de software é imprevisível — prioridades do cliente mudam durante o projeto. Trabalhar em colaboração permite entregar software que realmente atende as necessidades. Ainda assim, contratos são necessários para segurança das partes.",
    exemplo: "Reuniões semanais de review com o cliente para validar incrementos, ao invés de entregar tudo no fim conforme contrato fechado meses atrás.",
  },
  {
    icon: RefreshCw,
    titulo: "Responder a mudanças",
    versus: "seguir um plano",
    desc: "Mudanças vão acontecer independentemente das nossas expectativas. Quanto mais cedo identificadas, mais baratas. Equipes ágeis estão preparadas para reagir rapidamente, entregando o valor que o cliente precisa para seu negócio.",
    exemplo: "Replanejar a sprint para incluir uma demanda regulatória nova, em vez de seguir rigidamente o cronograma original.",
  },
];

const ManifestoSection = () => (
  <section id="manifesto" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          📜 Os <span className="text-violet-400">4 Valores</span> do Manifesto Ágil
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Adaptado de Beck <em>et al.</em> (2001). De acordo com o Manifesto, devemos valorizar <strong>os itens à esquerda mais que</strong> os à direita.
        </p>
      </motion.div>

      <Card className="bg-amber-500/5 border-amber-500/20 mb-10 max-w-4xl mx-auto">
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              <strong className="text-amber-400">Atenção:</strong> isto <em>não</em> significa que os itens à direita devem ser menosprezados — 
              eles têm valor, mas o valor dos itens à esquerda <strong>se sobrepõe</strong>.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {valores.map((v, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="bg-card/50 border-border h-full hover:border-violet-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                    <v.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">Valor #{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{v.titulo}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  mais que <span className="line-through">{v.versus}</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{v.desc}</p>
                <div className="p-3 rounded-lg bg-violet-500/5 border border-violet-500/10">
                  <p className="text-xs text-foreground"><strong className="text-violet-400">Exemplo prático:</strong> {v.exemplo}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ManifestoSection;
