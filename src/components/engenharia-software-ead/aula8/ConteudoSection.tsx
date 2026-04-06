import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ChevronDown, CheckCircle } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-background to-emerald-950/30" />
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
          <ShoppingCart className="w-4 h-4" /> Aula 8 • Prática - Estudo de Caso 1
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Modelagem Prática</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">E-Commerce Simples</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Prática de modelagem a partir de um case próximo do mercado</p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#case" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-green-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const atoresEsperados = [
  { ator: "Cliente", desc: "Navega, pesquisa, compra, acompanha pedidos" },
  { ator: "Administrador", desc: "Gerencia produtos, categorias, promoções" },
  { ator: "Atendente", desc: "Gerencia pedidos, trocas, devoluções" },
  { ator: "Sistema de Pagamento", desc: "Ator externo que processa pagamentos (PagSeguro, Mercado Pago)" },
  { ator: "Transportadora", desc: "Ator externo responsável pela entrega" },
];

const casosUso = [
  "Cadastrar Produto", "Pesquisar Produto", "Adicionar ao Carrinho", "Realizar Pedido",
  "Processar Pagamento", "Acompanhar Entrega", "Cadastrar Cliente", "Gerenciar Estoque",
  "Solicitar Troca/Devolução", "Aplicar Cupom de Desconto", "Gerar Relatório de Vendas",
];

const ConteudoSection = () => (
  <section id="case" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <Card className="bg-green-500/5 border-green-500/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-3">📋 Estudo de Caso 1</h2>
            <p className="text-lg text-muted-foreground">
              <em>"Sistema de vendas online para uma pequena loja (e-commerce simples)"</em>
            </p>
            <p className="text-muted-foreground mt-3">
              A loja vende roupas e acessórios, tem 1 dono que gerencia tudo, 2 atendentes e quer vender pela internet. 
              Precisa de: catálogo de produtos, carrinho de compras, pagamento online e controle de entregas.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Revisão rápida */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-4">🔄 Revisão rápida</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { elem: "Atores", desc: "Quem interage com o sistema", symbol: "🧑" },
            { elem: "Casos de Uso", desc: "O que o sistema faz (verbos)", symbol: "⭕" },
            { elem: "Fronteira", desc: "Limite do sistema", symbol: "📦" },
          ].map((e, i) => (
            <div key={i} className="p-4 rounded-xl bg-card/50 border border-border text-center">
              <span className="text-2xl block mb-2">{e.symbol}</span>
              <p className="font-bold text-foreground text-sm">{e.elem}</p>
              <p className="text-xs text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Guia de atores */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-4">👥 Atores esperados (referência)</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {atoresEsperados.map((a, i) => (
            <div key={i} className="p-3 rounded-lg bg-card/50 border border-border">
              <p className="font-semibold text-green-400 text-sm">{a.ator}</p>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Casos de uso esperados */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-xl font-bold text-foreground mb-4">⭕ Casos de Uso principais (referência)</h3>
        <div className="flex flex-wrap gap-2">
          {casosUso.map((c, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">{c}</span>
          ))}
        </div>
      </motion.div>

      {/* Atividade */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">🎯 Atividade Prática (aula inteira)</h3>
            <p className="text-muted-foreground mb-6">Em grupos, construir o diagrama de casos de uso do e-commerce:</p>
            <div className="space-y-3 mb-6">
              {[
                "Identificar todos os atores (internos e externos)",
                "Listar os casos de uso principais",
                "Montar o diagrama de casos de uso (à mão ou ferramenta web)",
              ].map((p, i) => (
                <div key={i} className="p-3 rounded-lg bg-background/50 border border-border flex items-center gap-3">
                  <span className="text-green-400 font-bold">{i + 1}.</span>
                  <span className="text-sm text-muted-foreground">{p}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-background/50 border border-border mb-6">
              <p className="font-semibold text-foreground text-sm mb-1">📤 Entrega no AVA:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Diagrama em PDF/imagem</li>
                <li>• Lista breve dos casos de uso em texto</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span>Ferramentas sugeridas: Draw.io, Lucidchart, StarUML ou papel</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export { HeroSection };
export default ConteudoSection;
