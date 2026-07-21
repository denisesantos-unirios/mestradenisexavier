import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileText, BookOpen, ClipboardCheck } from "lucide-react";

const guias = [
  { icon: BookOpen, titulo: "Guia Geral", desc: "Descrição geral do modelo MPS.BR, detalhando o modelo de referência." },
  { icon: FileText, titulo: "Guia de Aquisição", desc: "Recomendações para a compra de software e serviços." },
  { icon: ClipboardCheck, titulo: "Guia de Avaliação", desc: "Descrição detalhada dos elementos e processos de avaliação baseados no MPS.BR." },
];

const niveis = [
  { letra: "A", nome: "Em otimização", desc: "Melhor nível. Total maturidade. Processos para analisar inovações e busca por melhoria contínua.", cor: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-600" },
  { letra: "B", nome: "Gerenciado quantitativamente", desc: "Gerência quantitativa do projeto, monitoramento de desempenho e qualidade.", cor: "from-teal-500/20 to-teal-500/5 border-teal-500/30 text-teal-600" },
  { letra: "C", nome: "Definido", desc: "Gerenciamento de riscos e análise de decisão e resolução de problemas.", cor: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-600" },
  { letra: "D", nome: "Largamente definido", desc: "Bom gerenciamento de requisitos, técnicas para medir e garantir qualidade, validação e verificação.", cor: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-600" },
  { letra: "E", nome: "Parcialmente definido", desc: "Processos organizados, política de treinamento, clientes envolvidos no desenvolvimento.", cor: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30 text-indigo-600" },
  { letra: "F", nome: "Gerenciado", desc: "Maturidade maior, garantia de qualidade do produto conforme o planejado.", cor: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-600" },
  { letra: "G", nome: "Parcialmente gerenciado", desc: "Nível inicial. Gerência de projeto e requisitos superficial. Ponto de partida.", cor: "from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-600" },
];

const componentes = [
  { nome: "Modelo de Referência (MR-MPS)", desc: "Requisitos que devem ser cumpridos pelas empresas, com níveis cumulativos de maturidade." },
  { nome: "Método de Avaliação", desc: "Estabelece os processos a serem seguidos pelos avaliadores das empresas." },
  { nome: "Modelo de Negócio", desc: "Regras a serem seguidas para a implementação do MPS.BR nas empresas." },
];

const MpsBrSection = () => (
  <section id="mpsbr" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 text-sm font-medium mb-4">
          <Award className="w-4 h-4" /> Modelo Brasileiro
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Modelo <span className="text-emerald-600">MPS.BR</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          <strong>Melhoria do Processo de Software Brasileiro</strong> — criado pela Softex em parceria com o MCTIC (2003), com foco em micro, pequenas e médias empresas de TI.
        </p>
      </motion.div>

      {/* 3 Guias */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">📚 O MPS.BR é formado por 3 guias</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {guias.map((g, i) => (
            <Card key={i} className="bg-card/50 border-border">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{g.titulo}</h4>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* 7 Niveis */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-2 text-center">🏆 Os 7 níveis de maturidade (A → G)</h3>
        <p className="text-sm text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
          Dois níveis a mais que o CMMI. A implantação é mais lenta e gradual — perfeita para empresas menores. Os níveis são cumulativos e a leitura é <strong>de baixo (G) para cima (A)</strong>.
        </p>
        <div className="space-y-3">
          {niveis.map((n, i) => (
            <motion.div key={n.letra} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r border ${n.cor}`}>
                <div className="w-14 h-14 rounded-xl bg-background/70 border-2 border-current flex items-center justify-center font-black text-2xl shrink-0">
                  {n.letra}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base">{n.nome}</p>
                  <p className="text-sm text-foreground/80">{n.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Componentes */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">🧩 Estrutura do modelo — 3 componentes</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {componentes.map((c, i) => (
            <Card key={i} className="bg-emerald-500/5 border-emerald-500/20">
              <CardContent className="p-5">
                <p className="font-bold text-emerald-600 text-sm mb-1">{i + 1}. {c.nome}</p>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center italic">
          Baseado em Santos & Oliveira (2017) • Softex, MCTIC (2003)
        </p>
      </motion.div>
    </div>
  </section>
);

export default MpsBrSection;
