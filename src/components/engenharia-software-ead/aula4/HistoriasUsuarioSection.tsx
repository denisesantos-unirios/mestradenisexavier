import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Lightbulb, CheckCircle2, Sparkles } from "lucide-react";

const investItems = [
  { letra: "I", palavra: "Independent", trad: "Independente", desc: "A história precisa ser independente — não deve depender de outras histórias para ser implementada." },
  { letra: "N", palavra: "Negotiable", trad: "Negociável", desc: "Não é apenas uma narrativa fechada do PO; é ponto de partida para discussão e melhorias com a equipe." },
  { letra: "V", palavra: "Valuable", trad: "Valiosa", desc: "Precisa entregar valor claro ao cliente. Sem valor descrito, ela não tem serventia." },
  { letra: "E", palavra: "Estimable", trad: "Estimável", desc: "Deve conter informações suficientes para que os desenvolvedores consigam estimar esforço." },
  { letra: "S", palavra: "Small", trad: "Pequena", desc: "Precisa caber em uma única Sprint. Se for grande demais, deve ser quebrada." },
  { letra: "T", palavra: "Testable", trad: "Testável", desc: "Sem informações para testes/critérios de aceitação, não pode entrar no Backlog." },
];

const exemplos = [
  {
    bom: true,
    titulo: "✅ Boa história",
    texto: "Como cliente do app, quero filtrar produtos por categoria, para encontrar mais rapidamente o que desejo comprar.",
    criterios: ["Lista de categorias visível na tela inicial", "Resultado atualiza em até 2 segundos", "Possível combinar até 3 categorias"],
  },
  {
    bom: false,
    titulo: "❌ História ruim",
    texto: "Sistema deve ter filtros.",
    criterios: ["Sem ator definido", "Sem valor explicitado", "Sem critérios de aceitação"],
  },
];

const HistoriasUsuarioSection = () => (
  <section id="historias" className="py-20 px-6 bg-background/50">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          📝 Construindo <span className="text-orange-400">Histórias de Usuário</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A história de usuário é uma <strong>descrição curta e simples</strong> da necessidade do cliente, contada da perspectiva de quem precisa da funcionalidade. 
          Quanto mais explicativa, maior a qualidade do software desenvolvido.
        </p>
      </motion.div>

      {/* Template */}
      <Card className="mb-10 bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/30">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 text-orange-400" />
            <h3 className="text-2xl font-bold text-foreground">Template Clássico</h3>
          </div>
          <div className="bg-background/60 rounded-xl p-6 font-mono text-base md:text-lg text-foreground">
            <p><span className="text-orange-400 font-bold">Como</span> &lt;tipo de usuário&gt;,</p>
            <p><span className="text-amber-400 font-bold">quero</span> &lt;ação / funcionalidade&gt;,</p>
            <p><span className="text-yellow-400 font-bold">para</span> &lt;benefício / valor&gt;.</p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Explicite bem <strong>para quem</strong>, <strong>o que</strong> e <strong>por que</strong> a funcionalidade está sendo criada.
          </p>
        </CardContent>
      </Card>

      {/* INVEST */}
      <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-orange-400" /> Critérios INVEST de qualidade
      </h3>
      <p className="text-muted-foreground mb-6">Acrônimo que garante qualidade na criação de histórias de usuário:</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {investItems.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Card className="h-full bg-card/50 border-border hover:border-orange-500/40 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-black text-orange-400">{it.letra}</span>
                  <div>
                    <p className="font-bold text-foreground">{it.palavra}</p>
                    <p className="text-xs text-muted-foreground italic">{it.trad}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Exemplos */}
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-amber-400" /> Exemplos comparativos
      </h3>
      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {exemplos.map((ex, i) => (
          <Card key={i} className={ex.bom ? "bg-emerald-500/5 border-emerald-500/30" : "bg-red-500/5 border-red-500/30"}>
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-3">{ex.titulo}</h4>
              <p className="italic text-foreground mb-4 p-3 rounded-lg bg-background/60">"{ex.texto}"</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {ex.criterios.map((c, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${ex.bom ? "text-emerald-400" : "text-red-400"}`} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Atividade prática */}
      <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/30">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">🎯 Atividade Prática — Construindo Histórias</h3>
          <p className="text-muted-foreground mb-4">
            Em grupos de 3-5 pessoas, escolham um produto digital e construam <strong>5 histórias de usuário</strong> aplicando o template e os critérios INVEST.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {["📱 App de delivery", "🏥 Agenda de consultas", "💰 Controle financeiro pessoal"].map((p, i) => (
              <div key={i} className="p-3 rounded-lg bg-background/50 border border-border text-center text-sm text-muted-foreground">{p}</div>
            ))}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-orange-400">1.</strong> Defina o produto e o público-alvo (personas).</p>
            <p><strong className="text-orange-400">2.</strong> Escreva 5 histórias usando o template "Como…, quero…, para…".</p>
            <p><strong className="text-orange-400">3.</strong> Para cada história, liste pelo menos 2 critérios de aceitação (testáveis).</p>
            <p><strong className="text-orange-400">4.</strong> Valide cada uma contra o checklist INVEST.</p>
            <p><strong className="text-orange-400">5.</strong> Postem o Product Backlog resultante no AVA.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default HistoriasUsuarioSection;
