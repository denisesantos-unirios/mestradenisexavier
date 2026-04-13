import { motion } from "framer-motion";
import { BookOpen, Users, ShoppingCart, User, Package, Store } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const entidadesLivraria = [
  { nome: "Cliente", icon: User, atributos: ["Nome", "Sobrenome", "CPF (PK)", "Telefone", "Celular", "Endereço", "Bairro", "Cidade", "Estado"] },
  { nome: "Livro", icon: BookOpen, atributos: ["Nome", "Autor", "Coautor", "ISBN (PK)", "Estoque", "Qtd_páginas", "Valor", "Fornecedor"] },
  { nome: "Vendedor", icon: Store, atributos: ["ID (PK)", "Nome", "Comissão", "Horário de trabalho"] },
];

const relacionamentos = [
  { de: "Cliente", para: "Livros", cardinalidade: "N:N", verbo: "compra" },
  { de: "Cliente", para: "Vendedor", cardinalidade: "N:1", verbo: "é atendido por" },
  { de: "Vendedor", para: "Livros", cardinalidade: "N:N", verbo: "vende" },
];

const passosMontagem = [
  "Listar as Entidades candidatas (substantivos no texto)",
  "Analisar e selecionar as entidades reais do modelo",
  "Analisar os relacionamentos entre entidades",
  "Definir as cardinalidades entre os relacionamentos",
  "Definir as restrições de integridade",
  "Definir atributos, chaves primárias e estrangeiras",
  "Desenhar o Diagrama de Entidade-Relacionamento",
];

const PraticaSection = () => {
  return (
    <section id="pratica" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Na Prática</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Exemplo: Sistema de Livraria
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vamos construir um MER do zero — da observação do ambiente até o diagrama completo.
            </p>
          </div>
        </ScrollReveal>

        {/* Mini-Mundo */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">📖 Mini-Mundo da Livraria</h3>
            <p className="text-muted-foreground leading-relaxed">
              O sistema tem como função a <strong className="text-teal-400">comercialização de livros</strong> em uma grande livraria.
              O <strong className="text-primary">cliente</strong> entra na loja, busca por um livro (por nome, ISBN, autor ou categoria);
              caso a livraria o tenha em <strong className="text-primary">estoque</strong>, pega o livro e vai até o caixa
              (<strong className="text-primary">vendedor</strong>) efetivar a <strong className="text-primary">compra</strong>;
              passa dados como CPF para emitir o cupom fiscal, paga e vai para casa.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Entidades Identificadas */}
        <ScrollReveal animation="scale" delay={0.3}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Entidades e seus Atributos</h3>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
            {entidadesLivraria.map((ent) => (
              <StaggerItem key={ent.nome}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-card/90 border border-border h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                      <ent.icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <h4 className="font-bold text-foreground text-lg">{ent.nome}</h4>
                  </div>
                  <div className="space-y-1.5">
                    {ent.atributos.map((attr, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${attr.includes("PK") ? "bg-amber-400" : "bg-muted-foreground/40"}`} />
                        <span className={attr.includes("PK") ? "text-amber-400 font-medium" : "text-muted-foreground"}>
                          {attr}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Relacionamentos */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Relacionamentos Identificados</h3>
          <div className="space-y-4 mb-12">
            {relacionamentos.map((rel, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className="p-5 rounded-xl bg-card/90 border border-border flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-400 font-bold text-sm">
                  {rel.de}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">{rel.verbo}</span>
                  <span className="text-lg font-mono font-bold text-primary">── {rel.cardinalidade} ──</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold text-sm">
                  {rel.para}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* DER Completo da Livraria */}
        <ScrollReveal animation="scale" delay={0.45}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Diagrama Entidade-Relacionamento (DER) da Livraria</h3>
          <div className="p-6 rounded-2xl bg-card/90 border border-border overflow-x-auto mb-12">
            <svg viewBox="0 0 800 380" className="w-full max-w-3xl mx-auto" style={{ minWidth: 500 }}>
              {/* Entidade Cliente */}
              <rect x="30" y="140" width="140" height="55" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
              <text x="100" y="172" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">CLIENTE</text>
              <ellipse cx="40" cy="70" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="40" y="74" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="bold" textDecoration="underline">CPF</text>
              <line x1="45" y1="86" x2="65" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <ellipse cx="120" cy="70" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="120" y="74" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Nome</text>
              <line x1="115" y1="86" x2="105" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <ellipse cx="40" cy="260" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="40" y="264" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Telefone</text>
              <line x1="50" y1="244" x2="70" y2="195" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

              {/* Relacionamento compra N:N */}
              <polygon points="330,140 390,167.5 330,195 270,167.5" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
              <text x="330" y="172" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">compra</text>
              <line x1="170" y1="167.5" x2="270" y2="167.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <line x1="390" y1="167.5" x2="490" y2="167.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <text x="190" y="158" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
              <text x="470" y="158" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>

              {/* Entidade Livro */}
              <rect x="490" y="140" width="130" height="55" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
              <text x="555" y="172" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">LIVRO</text>
              <ellipse cx="500" cy="70" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="500" y="74" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="bold" textDecoration="underline">ISBN</text>
              <line x1="505" y1="86" x2="520" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <ellipse cx="580" cy="70" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="580" y="74" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Titulo</text>
              <line x1="575" y1="86" x2="565" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <ellipse cx="660" cy="70" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="660" y="74" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Autor</text>
              <line x1="645" y1="86" x2="600" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <ellipse cx="740" cy="130" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="740" y="134" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Valor</text>
              <line x1="710" y1="138" x2="620" y2="155" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

              {/* Entidade Vendedor */}
              <rect x="250" y="290" width="150" height="55" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
              <text x="325" y="322" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">VENDEDOR</text>
              <ellipse cx="460" cy="340" rx="30" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="460" y="344" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="bold" textDecoration="underline">ID</text>
              <line x1="430" y1="335" x2="400" y2="320" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <ellipse cx="460" cy="290" rx="42" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
              <text x="460" y="294" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Comissao</text>
              <line x1="420" y1="295" x2="400" y2="305" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

              {/* Relacionamento atende N:1 */}
              <polygon points="130,290 170,317.5 130,345 90,317.5" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
              <text x="130" y="322" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">atende</text>
              <line x1="100" y1="195" x2="100" y2="275" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <line x1="100" y1="275" x2="90" y2="317.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <line x1="170" y1="317.5" x2="250" y2="317.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <text x="80" y="240" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
              <text x="210" y="310" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">1</text>

              {/* Relacionamento vende N:N */}
              <polygon points="555,250 595,277.5 555,305 515,277.5" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
              <text x="555" y="282" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">vende</text>
              <line x1="555" y1="195" x2="555" y2="250" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <line x1="515" y1="277.5" x2="400" y2="300" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <text x="545" y="230" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
              <text x="440" y="285" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
            </svg>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            DER completo do sistema de livraria com 3 entidades, 3 relacionamentos e seus atributos. Chaves primárias estão <strong className="text-amber-400">sublinhadas</strong>.
          </p>
        </ScrollReveal>

        {/* 7 Passos */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="bg-card/90 border border-primary/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">🔑 7 Passos para Montagem do DER</h3>
            <div className="space-y-3">
              {passosMontagem.map((passo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{passo}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Grandes Verdades */}
        <ScrollReveal animation="fadeUp" delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-amber-500/10 via-primary/10 to-amber-500/10 rounded-2xl p-8 border border-amber-500/30 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">💡 Grandes Verdades da Modelagem</h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <blockquote className="text-lg text-muted-foreground italic">
                "Não ame seu modelo"
              </blockquote>
              <blockquote className="text-lg text-muted-foreground italic">
                "Se você acha que seu modelo está bom, é porque talvez ainda não tenha olhado direito"
              </blockquote>
              <blockquote className="text-lg text-muted-foreground italic">
                "Em modelagem de dados só podemos ter uma certeza: a de que nosso modelo <strong className="text-amber-400">nunca estará completamente acabado</strong>"
              </blockquote>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PraticaSection;
