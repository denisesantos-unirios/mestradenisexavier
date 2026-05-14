import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PenLine, CheckCircle, XCircle, ArrowRight } from "lucide-react";

const boasPraticas = [
  { titulo: "Claro", desc: "Sem jargão técnico desnecessário. Linguagem do negócio." },
  { titulo: "Completo", desc: "Inclui todas as informações necessárias para implementação." },
  { titulo: "Consistente", desc: "Não contradiz outros requisitos do mesmo documento." },
  { titulo: "Verificável", desc: "É possível testar se foi atendido (com critério mensurável)." },
  { titulo: "Rastreável", desc: "Tem ID único e pode ser ligado à origem (stakeholder, regra)." },
  { titulo: "Viável", desc: "É tecnicamente possível dentro do orçamento e prazo." },
  { titulo: "Priorizado", desc: "Tem nível de importância (MoSCoW, alta/média/baixa)." },
  { titulo: "Modificável", desc: "Pode ser alterado sem grande impacto na estrutura." },
];

const exemplosRuim = [
  {
    ruim: "O sistema deve ser amigável e rápido.",
    bom: "O sistema deve carregar a tela inicial em até 2 segundos em conexão 4G e seguir as heurísticas de Nielsen para usabilidade.",
  },
  {
    ruim: "O sistema deve gerar relatórios.",
    bom: "O gerente deve poder gerar relatório mensal de vendas em PDF, filtrando por vendedor e por categoria de produto.",
  },
  {
    ruim: "Os dados devem ser seguros.",
    bom: "Senhas devem ser armazenadas com hash bcrypt (custo ≥10) e dados pessoais criptografados em repouso (AES-256).",
  },
];

const passos = [
  { n: 1, t: "Identifique o ator", d: "Quem realiza a ação? (cliente, gerente, sistema externo)" },
  { n: 2, t: "Descreva a ação", d: "O que ele faz? Use verbo no infinitivo ('cadastrar', 'consultar')." },
  { n: 3, t: "Especifique o objeto", d: "Sobre o que? (cliente, produto, pedido)" },
  { n: 4, t: "Adicione condições", d: "Quando? Sob quais regras? Com quais restrições?" },
  { n: 5, t: "Defina critério de aceite", d: "Como saber que está pronto? Métrica clara." },
  { n: 6, t: "Atribua ID e prioridade", d: "RF-001, prioridade Alta. Para rastreabilidade." },
];

const ComoEscreverSection = () => (
  <section id="como-escrever" className="py-20 px-6 bg-card/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-4">
          <PenLine className="w-4 h-4" /> Mão na massa
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Como <span className="text-emerald-400">Construir</span> um Bom Requisito
        </h2>
      </motion.div>

      {/* Passos */}
      <h3 className="text-xl font-bold text-foreground mb-6">📝 Passo a Passo</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {passos.map((p) => (
          <Card key={p.n} className="bg-card/50 border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {p.n}
                </div>
                <h4 className="font-bold text-foreground">{p.t}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Template */}
      <Card className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/30 mb-12">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-emerald-400 mb-4">🧩 Template de Requisito Funcional</h3>
          <div className="font-mono text-sm bg-background/70 p-4 rounded-lg border border-border space-y-1 text-muted-foreground">
            <p><span className="text-cyan-400">ID:</span> RF-001</p>
            <p><span className="text-cyan-400">Nome:</span> Cadastrar cliente</p>
            <p><span className="text-cyan-400">Descrição:</span> O <em>recepcionista</em> deve poder cadastrar um novo cliente informando nome, CPF, telefone e e-mail.</p>
            <p><span className="text-cyan-400">Ator:</span> Recepcionista</p>
            <p><span className="text-cyan-400">Pré-condição:</span> Usuário autenticado no sistema.</p>
            <p><span className="text-cyan-400">Pós-condição:</span> Cliente armazenado e visível na lista.</p>
            <p><span className="text-cyan-400">Regras:</span> CPF deve ser válido e único. E-mail deve seguir formato padrão.</p>
            <p><span className="text-cyan-400">Prioridade:</span> Alta (Must)</p>
            <p><span className="text-cyan-400">Critério de aceite:</span> Dado um CPF válido e novo, ao confirmar, o sistema exibe mensagem "Cliente cadastrado" em até 1s.</p>
          </div>
        </CardContent>
      </Card>

      {/* Boas práticas */}
      <h3 className="text-xl font-bold text-foreground mb-6">✅ Características de um Bom Requisito</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
        {boasPraticas.map((b, i) => (
          <Card key={i} className="bg-card/50 border-border">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{b.titulo}</p>
                  <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Antes e Depois */}
      <h3 className="text-xl font-bold text-foreground mb-6">🔄 Antes e Depois — Reescrevendo Requisitos</h3>
      <div className="space-y-4">
        {exemplosRuim.map((e, i) => (
          <Card key={i} className="bg-card/50 border-border">
            <CardContent className="p-5 grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-semibold text-red-400">RUIM</span>
                </div>
                <p className="text-sm text-muted-foreground italic">"{e.ruim}"</p>
              </div>
              <ArrowRight className="w-6 h-6 text-emerald-400 mx-auto hidden md:block" />
              <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400">BOM</span>
                </div>
                <p className="text-sm text-muted-foreground">{e.bom}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ComoEscreverSection;
