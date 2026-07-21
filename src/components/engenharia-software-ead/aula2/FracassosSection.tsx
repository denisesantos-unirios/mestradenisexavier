import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Users, Target, ShieldAlert, ClipboardCheck, UserCog } from "lucide-react";

const chaos = [
  { ano: "2011", sucesso: 29, parcial: 49, fracasso: 22 },
  { ano: "2012", sucesso: 27, parcial: 56, fracasso: 17 },
  { ano: "2013", sucesso: 31, parcial: 50, fracasso: 19 },
  { ano: "2014", sucesso: 28, parcial: 55, fracasso: 17 },
  { ano: "2015", sucesso: 29, parcial: 52, fracasso: 19 },
];

const causas = [
  { icon: Target, titulo: "Escopo mal definido ou incompleto", desc: "Analistas não entendem claramente o que o usuário precisa, ou usuários não conseguem transmitir requisitos. Sem validação, o projeto entrega o produto errado." },
  { icon: ShieldAlert, titulo: "Identificação de riscos malfeita", desc: "Sem antecipar problemas (técnicos, humanos, prazos), a equipe não consegue evitar ou minimizar prejuízos ao cronograma e orçamento." },
  { icon: Users, titulo: "Pessoas que não sabem trabalhar em equipe", desc: "Comunicação falha e falta de união prejudicam o andamento global do projeto e comprometem a entrega dentro do prazo." },
  { icon: UserCog, titulo: "Liderança ineficiente", desc: "O líder deve acompanhar de perto todas as atividades para garantir qualidade e cumprimento dos prazos estipulados." },
  { icon: ClipboardCheck, titulo: "Testes inexistentes ou malfeitos", desc: "Sem testes detalhados (desempenho, segurança, usabilidade), falhas só aparecem após a entrega, quando corrigir sai muito mais caro." },
];

const FracassosSection = () => (
  <section id="fracassos" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-sm font-medium mb-4">
          <TrendingDown className="w-4 h-4" /> Diagnóstico da indústria
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Por que os projetos de software <span className="text-red-500">fracassam</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Enquanto engenharia civil e medicina exigem excelência, a área de software apresenta há décadas índices baixos de satisfação dos clientes (Santos & Oliveira, 2017).
        </p>
      </motion.div>

      {/* Chaos Report */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-foreground">Relatório do Caos — Standish Group (2015)</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              O <strong>Standish Group International</strong>, empresa de consultoria em TI fundada em 1985, publica estatísticas globais sobre projetos de software.
              O quadro abaixo mostra a evolução da entrega de projetos entre 2011 e 2015:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 border border-border">Situação</th>
                    {chaos.map((c) => (
                      <th key={c.ano} className="p-3 border border-border">{c.ano}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border font-semibold text-emerald-600">Bem-sucedidos</td>
                    {chaos.map((c) => <td key={c.ano} className="p-3 border border-border text-center">{c.sucesso}%</td>)}
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-semibold text-amber-600">Sucesso parcial</td>
                    {chaos.map((c) => <td key={c.ano} className="p-3 border border-border text-center">{c.parcial}%</td>)}
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-semibold text-red-600">Fracassados</td>
                    {chaos.map((c) => <td key={c.ano} className="p-3 border border-border text-center">{c.fracasso}%</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">Fonte: adaptado de Wojewoda & Hastie (2015).</p>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-sm text-foreground">
                  <strong>2015:</strong> apenas <strong className="text-emerald-600">29%</strong> dos projetos foram entregues com sucesso;
                  <strong className="text-amber-600"> 52%</strong> tiveram falhas, atrasos ou estouro de orçamento;
                  <strong className="text-red-600"> 19%</strong> fracassaram completamente.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-sm text-foreground">
                  <strong>Harvard (2016):</strong> <strong className="text-red-600">70%</strong> dos projetos de TI são entregues fora do prazo, a maioria de desenvolvimento de software.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <p className="text-sm text-muted-foreground italic">
                💡 <strong>Reflexão:</strong> você compraria um apartamento sabendo que menos de 30% dos imóveis entregues não desabam? Ou investiria em um banco que garantisse apenas 30% de segurança do seu dinheiro?
                Por que aceitamos essa realidade no software?
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Causas */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          🎯 Principais causas de insucesso
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {causas.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="h-full bg-card/50 border-border hover:border-red-500/40 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 shrink-0">
                      <c.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{c.titulo}</h4>
                      <p className="text-sm text-muted-foreground">{c.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FracassosSection;
