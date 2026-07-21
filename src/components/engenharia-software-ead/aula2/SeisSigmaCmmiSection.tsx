import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart3, Wrench, Settings, ClipboardList } from "lucide-react";

const dmaic = [
  { letra: "D", palavra: "Definir", desc: "Identifica problemas e oportunidades sob a visão do cliente." },
  { letra: "M", palavra: "Medir", desc: "Mapeia e mede os processos, registrando resultados e capacidades." },
  { letra: "A", palavra: "Analisar", desc: "Verifica quando, onde e por que os defeitos ocorrem." },
  { letra: "I", palavra: "Melhorar", desc: "Identifica características a melhorar para atingir os objetivos." },
  { letra: "C", palavra: "Controlar", desc: "Documenta e monitora processos novos/modificados para perpetuar ganhos." },
];

const cmmiEstagios = [
  { nivel: 1, nome: "Inicial", cor: "bg-red-500/10 border-red-500/30 text-red-600", desc: "Poucos processos definidos. Sucesso depende do esforço individual." },
  { nivel: 2, nome: "Repetível", cor: "bg-orange-500/10 border-orange-500/30 text-orange-600", desc: "Políticas de desenvolvimento e gerência de software definidas e seguidas." },
  { nivel: 3, nome: "Definido", cor: "bg-amber-500/10 border-amber-500/30 text-amber-600", desc: "Processo documentado, padronizado e integrado como padrão da empresa." },
  { nivel: 4, nome: "Gerenciado", cor: "bg-blue-500/10 border-blue-500/30 text-blue-600", desc: "Métricas medem o desempenho dos processos e dos produtos entregues." },
  { nivel: 5, nome: "Otimizado", cor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600", desc: "Melhoria contínua dos processos baseada nas métricas do nível 4." },
];

const SeisSigmaCmmiSection = () => (
  <section id="modelos" className="py-20 px-6 bg-muted/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Processos de <span className="text-blue-500">Melhoria de Software</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Modelos que estabelecem diretrizes para as práticas e processos de desenvolvimento, promovendo <strong>melhoria contínua</strong> e reduzindo falhas na entrega.
        </p>
      </motion.div>

      {/* Seis Sigma */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Target className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Modelo Seis Sigma</h3>
                <p className="text-xs text-muted-foreground">Motorola (1986) • Popularizado pela GE (final da década de 1990)</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Modelo focado em <strong>melhoria contínua dos processos</strong>, redução de defeitos e otimização das operações.
              O termo <em>sigma</em> refere-se à capacidade do processo de operar sem falhas, reduzindo a diferença entre o resultado esperado e o efetivamente entregue.
            </p>
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 mb-6">
              <p className="text-sm text-foreground">
                💰 <strong>Case GE:</strong> investiu ~US$ 450 milhões na implementação e obteve ganhos de ~US$ 1,5 bilhão graças à confiança conquistada dos clientes.
              </p>
            </div>

            <h4 className="font-bold text-foreground mb-3">🔄 As 5 fases do método DMAIC</h4>
            <div className="grid md:grid-cols-5 gap-3">
              {dmaic.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="h-full p-4 rounded-xl bg-gradient-to-b from-purple-500/10 to-purple-500/5 border border-purple-500/20 text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-purple-500 text-white flex items-center justify-center font-black text-lg">{f.letra}</div>
                    <p className="font-bold text-foreground text-sm mb-1">{f.palavra}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              O modelo original da Motorola (MAIC) tinha 4 fases. A GE aperfeiçoou adicionando a fase "Definir", formando o DMAIC.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* CMMI */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <BarChart3 className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Modelo CMMI</h3>
                <p className="text-xs text-muted-foreground">Capability Maturity Model Integration</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Guia para garantir a <strong>maturidade na capacidade de desenvolvimento de software</strong>, estabelecendo diretrizes para melhoria dos processos. Apresenta duas formas de representação:
            </p>

            {/* Contínua */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-4 h-4 text-blue-500" />
                <h4 className="font-bold text-foreground">1. Representação Contínua</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Formada por <strong>níveis de capacidade (0 a 5)</strong>, permite selecionar a área ou processo a melhorar. Os níveis são cumulativos.
              </p>
              <div className="grid md:grid-cols-3 gap-2">
                {[
                  { n: 0, nome: "Incompleto", desc: "Não existe ou existe parcialmente" },
                  { n: 1, nome: "Executado", desc: "Satisfaz as metas da área" },
                  { n: 2, nome: "Gerenciado", desc: "Executado e planejado por projeto" },
                  { n: 3, nome: "Definido", desc: "Documentado e padronizado" },
                  { n: 4, nome: "Gerenciado", desc: "Controlado quantitativamente por métricas" },
                  { n: 5, nome: "Em Otimização", desc: "Métricas guiam a melhoria contínua" },
                ].map((l) => (
                  <div key={l.n} className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <p className="font-bold text-blue-500 text-sm">Nível {l.n} — {l.nome}</p>
                    <p className="text-xs text-muted-foreground">{l.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Estágios */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-4 h-4 text-emerald-500" />
                <h4 className="font-bold text-foreground">2. Representação por Estágios</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Formada por <strong>5 níveis de maturidade</strong>, cada um servindo de base para o próximo:
              </p>
              <div className="space-y-2">
                {cmmiEstagios.map((e) => (
                  <div key={e.nivel} className={`flex items-center gap-4 p-4 rounded-xl border ${e.cor}`}>
                    <div className="w-12 h-12 rounded-full bg-background border-2 border-current flex items-center justify-center font-black text-xl shrink-0">
                      {e.nivel}
                    </div>
                    <div>
                      <p className="font-bold">{e.nome}</p>
                      <p className="text-xs text-foreground/80">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-3">
              <ClipboardList className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <strong>Certificação CMMI:</strong> significa que a empresa é capaz de entregar produtos de software com qualidade,
                cumprindo prazos acordados dentro do orçamento previsto e atendendo às necessidades do cliente para cada projeto.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default SeisSigmaCmmiSection;
