import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, CheckCircle, XCircle, AlertTriangle, Building } from "lucide-react";

const fases = [
  { nome: "Requisitos", desc: "Levantamento e documentação de todas as necessidades" },
  { nome: "Projeto", desc: "Arquitetura e design do sistema" },
  { nome: "Implementação", desc: "Codificação do software" },
  { nome: "Testes", desc: "Verificação e validação" },
  { nome: "Implantação", desc: "Entrega e operação" },
  { nome: "Manutenção", desc: "Correções e evoluções" },
];

const ConteudoSection = () => (
  <section id="conceito" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O que é um <span className="text-blue-400">Processo de Software</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          É um conjunto de atividades <strong>organizadas</strong> que levam à produção de um produto de software. 
          Define <em>quem</em> faz <em>o quê</em>, <em>quando</em> e <em>como</em>.
        </p>
      </motion.div>

      {/* Modelo Cascata */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">🌊 Modelo Cascata (Waterfall)</h3>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Modelo sequencial e linear. Cada fase deve ser <strong>completamente finalizada</strong> antes de iniciar a próxima.
        </p>
        
        <div className="max-w-md mx-auto space-y-2">
          {fases.map((fase, i) => (
            <div key={i}>
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                <p className="font-bold text-foreground">{i + 1}. {fase.nome}</p>
                <p className="text-sm text-muted-foreground">{fase.desc}</p>
              </div>
              {i < fases.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-5 h-5 text-blue-400/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Vantagens e Limitações */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <Card className="bg-emerald-500/5 border-emerald-500/20">
          <CardContent className="p-6">
            <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Vantagens</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Simples de entender e gerenciar", "Documentação completa em cada fase", "Bom quando requisitos são estáveis e bem definidos", "Marcos claros de progresso", "Funciona bem em projetos com regulação rigorosa"].map((v, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">✓</span>{v}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="p-6">
            <h4 className="text-lg font-bold text-destructive mb-4 flex items-center gap-2"><XCircle className="w-5 h-5" /> Limitações</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Requisitos devem ser conhecidos no início", "Feedback do cliente só no final", "Inflexível a mudanças", "Alto risco de entrega inadequada", "O software funcional só aparece tarde no processo"].map((v, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-destructive mt-0.5">✗</span>{v}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Modelos incrementais */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-4 text-center">📊 Modelos Incrementais e Evolucionários</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-2">Incremental</h4>
              <p className="text-sm text-muted-foreground">O software é entregue em <strong>partes funcionais</strong> (incrementos). Cada incremento adiciona funcionalidades novas ao sistema já entregue.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-2">Evolucionário (Prototipação/Espiral)</h4>
              <p className="text-sm text-muted-foreground">O software <strong>evolui</strong> a partir de versões iniciais. Cada ciclo refina requisitos e design baseado em feedback real.</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Onde aparecem */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <Building className="w-5 h-5" /> Onde esses modelos aparecem no mercado?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="p-3 rounded-lg bg-background/50"><strong>Projetos governamentais:</strong> licitações com escopo fechado exigem cascata</div>
            <div className="p-3 rounded-lg bg-background/50"><strong>Contratos fixos:</strong> quando o preço é fechado e o escopo não muda</div>
            <div className="p-3 rounded-lg bg-background/50"><strong>Sistemas legados:</strong> manutenção de software antigo com processos rígidos</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ConteudoSection;
