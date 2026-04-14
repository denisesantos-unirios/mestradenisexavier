import { motion } from "framer-motion";
import { BookOpen, Users, ShoppingCart, User, Package, Store, ArrowRight, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const entidadesLivraria = [
  { nome: "Cliente", icon: User, atributos: ["Nome", "Sobrenome", "CPF (PK)", "Telefone", "Celular", "Endereço", "Bairro", "Cidade", "Estado"] },
  { nome: "Livro", icon: BookOpen, atributos: ["Nome", "Autor", "Coautor", "ISBN (PK)", "Estoque", "Qtd_páginas", "Valor", "Fornecedor"] },
  { nome: "Vendedor", icon: Store, atributos: ["ID (PK)", "Nome", "Comissão", "Horário de trabalho"] },
];

const passosMontagem = [
  { titulo: "Identificar Entidades", desc: "Leia o mini-mundo e destaque os substantivos que representam 'coisas' sobre as quais precisamos armazenar dados: Cliente, Livro, Vendedor." },
  { titulo: "Definir Atributos", desc: "Para cada entidade, liste as informações relevantes. Ex.: Cliente tem Nome, CPF, Telefone. Marque a chave primária (PK)." },
  { titulo: "Identificar Relacionamentos", desc: "Encontre os verbos que conectam entidades: Cliente COMPRA Livro, Vendedor VENDE Livro, Cliente É ATENDIDO POR Vendedor." },
  { titulo: "Definir Cardinalidades", desc: "Analise: Um cliente compra vários livros? Um livro é comprado por vários clientes? Sim → N:N. Um cliente é atendido por um vendedor? → N:1." },
  { titulo: "Tratar Relacionamentos N:N", desc: "Relacionamentos N:N não podem ser implementados diretamente. Eles se transformam em ENTIDADES ASSOCIATIVAS com chaves estrangeiras de ambas as entidades." },
  { titulo: "Desenhar o DER Conceitual", desc: "Monte o diagrama com retângulos (entidades), losangos (relacionamentos), elipses (atributos) e linhas com cardinalidades." },
  { titulo: "Revisar e Validar", desc: "Confronte o diagrama com o mini-mundo. Todas as regras de negócio estão representadas? Falta alguma entidade ou atributo?" },
];

const PraticaSection = () => {
  return (
    <section id="pratica" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Na Prática — Passo a Passo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Construindo o DER da Livraria
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acompanhe cada etapa da construção do Diagrama Entidade-Relacionamento, do mini-mundo ao diagrama final.
            </p>
          </div>
        </ScrollReveal>

        {/* Passo 1: Mini-Mundo */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Leitura do Mini-Mundo</h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-2xl p-8"
            >
              <h4 className="text-lg font-bold text-foreground mb-4">📖 Mini-Mundo da Livraria</h4>
              <p className="text-muted-foreground leading-relaxed">
                O sistema tem como função a <strong className="text-teal-400">comercialização de livros</strong> em uma grande livraria.
                O <strong className="text-primary">cliente</strong> entra na loja, busca por um livro (por nome, ISBN, autor ou categoria);
                caso a livraria o tenha em <strong className="text-primary">estoque</strong>, pega o livro e vai até o caixa
                (<strong className="text-primary">vendedor</strong>) efetivar a <strong className="text-primary">compra</strong>;
                passa dados como CPF para emitir o cupom fiscal, paga e vai para casa.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-background/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-amber-400">Dica:</strong> Destaque os <strong>substantivos</strong> (possíveis entidades) e os <strong>verbos</strong> (possíveis relacionamentos) no texto.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Passo 2: Entidades e Atributos */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Identificar Entidades e Atributos</h3>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
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
          </div>
        </ScrollReveal>

        {/* Passo 3: Relacionamentos e Cardinalidades */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Identificar Relacionamentos e Cardinalidades</h3>
            </div>
            <div className="space-y-4">
              {[
                { de: "Cliente", para: "Livro", card: "N:N", verbo: "compra", explicacao: "Um cliente pode comprar vários livros, e um livro pode ser comprado por vários clientes." },
                { de: "Cliente", para: "Vendedor", card: "N:1", verbo: "é atendido por", explicacao: "Um cliente é atendido por um vendedor, mas um vendedor atende vários clientes." },
                { de: "Vendedor", para: "Livro", card: "N:N", verbo: "vende", explicacao: "Um vendedor vende vários livros, e um livro pode ser vendido por vários vendedores." },
              ].map((rel, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.01 }}
                  className="p-5 rounded-xl bg-card/90 border border-border"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-3">
                    <div className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-400 font-bold text-sm">{rel.de}</div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-muted-foreground">{rel.verbo}</span>
                      <span className="text-lg font-mono font-bold text-primary">── {rel.card} ──</span>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-bold text-sm">{rel.para}</div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center sm:text-left">{rel.explicacao}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Passo 4: DER Conceitual (antes da transformação N:N) */}
        <ScrollReveal animation="scale" delay={0.35}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">4</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">DER Conceitual (com losangos)</h3>
            </div>
            <p className="text-muted-foreground mb-4">Primeiro desenhamos o diagrama conceitual usando a notação de Peter Chen: retângulos para entidades, losangos para relacionamentos e elipses para atributos.</p>
            <div className="p-6 rounded-2xl bg-card/90 border border-border overflow-x-auto">
              <svg viewBox="0 0 800 400" className="w-full max-w-3xl mx-auto" style={{ minWidth: 500 }}>
                {/* Entidade Cliente */}
                <rect x="30" y="150" width="140" height="55" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                <text x="100" y="182" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">CLIENTE</text>
                <ellipse cx="40" cy="80" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="40" y="84" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="bold" textDecoration="underline">CPF</text>
                <line x1="45" y1="96" x2="65" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="120" cy="80" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="120" y="84" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Nome</text>
                <line x1="115" y1="96" x2="105" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="40" cy="270" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="40" y="274" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Telefone</text>
                <line x1="50" y1="254" x2="70" y2="205" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* Relacionamento compra N:N */}
                <polygon points="330,150 390,177.5 330,205 270,177.5" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                <text x="330" y="182" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">compra</text>
                <line x1="170" y1="177.5" x2="270" y2="177.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="390" y1="177.5" x2="490" y2="177.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="195" y="170" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
                <text x="465" y="170" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>

                {/* Entidade Livro */}
                <rect x="490" y="150" width="130" height="55" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                <text x="555" y="182" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">LIVRO</text>
                <ellipse cx="500" cy="80" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="500" y="84" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="bold" textDecoration="underline">ISBN</text>
                <line x1="505" y1="96" x2="520" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="580" cy="80" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="580" y="84" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Titulo</text>
                <line x1="575" y1="96" x2="565" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="660" cy="80" rx="35" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="660" y="84" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Valor</text>
                <line x1="645" y1="96" x2="610" y2="150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* Entidade Vendedor */}
                <rect x="250" y="310" width="150" height="55" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                <text x="325" y="342" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">VENDEDOR</text>
                <ellipse cx="460" cy="355" rx="30" ry="16" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="460" y="359" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10" fontWeight="bold" textDecoration="underline">ID</text>
                <line x1="430" y1="350" x2="400" y2="340" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* Relacionamento atende N:1 */}
                <polygon points="130,310 170,337.5 130,365 90,337.5" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                <text x="130" y="342" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">atende</text>
                <line x1="100" y1="205" x2="100" y2="295" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="100" y1="295" x2="90" y2="337.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="170" y1="337.5" x2="250" y2="337.5" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="80" y="255" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
                <text x="210" y="330" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">1</text>

                {/* Relacionamento vende N:N */}
                <polygon points="555,260 595,287.5 555,315 515,287.5" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                <text x="555" y="292" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">vende</text>
                <line x1="555" y1="205" x2="555" y2="260" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="515" y1="287.5" x2="400" y2="320" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="545" y="240" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
                <text x="440" y="300" fill="hsl(168,80%,50%)" fontSize="13" fontWeight="bold">N</text>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-3">
              DER Conceitual com losangos. Note que há <strong className="text-amber-400">dois relacionamentos N:N</strong> (compra e vende).
            </p>
          </div>
        </ScrollReveal>

        {/* Passo 5: REGRA N:N → Entidade Associativa */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Regra Fundamental: N:N vira Entidade!</h3>
            </div>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8 mb-6">
              <p className="text-lg text-muted-foreground mb-4">
                Quando encontramos um relacionamento <strong className="text-amber-400">N para N (muitos para muitos)</strong>, ele <strong className="text-foreground">não pode ser implementado diretamente</strong> no banco de dados relacional.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                A solução é <strong className="text-foreground">transformar o relacionamento em uma nova entidade</strong> — chamada de <strong className="text-amber-400">Entidade Associativa</strong> (ou Tabela Associativa). Essa nova entidade recebe as chaves primárias das duas entidades originais como chaves estrangeiras.
              </p>

              {/* Exemplo visual da transformação */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Antes */}
                <div className="p-5 rounded-xl bg-background/50 border border-border">
                  <h4 className="font-bold text-foreground mb-3 text-center">❌ Antes (N:N conceitual)</h4>
                  <svg viewBox="0 0 320 100" className="w-full" style={{ minWidth: 250 }}>
                    <rect x="10" y="25" width="90" height="40" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="55" y="50" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">CLIENTE</text>
                    <polygon points="160,25 195,45 160,65 125,45" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                    <text x="160" y="49" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">compra</text>
                    <rect x="220" y="25" width="90" height="40" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="265" y="50" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">LIVRO</text>
                    <line x1="100" y1="45" x2="125" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                    <line x1="195" y1="45" x2="220" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                    <text x="107" y="38" fill="hsl(168,80%,50%)" fontSize="11" fontWeight="bold">N</text>
                    <text x="205" y="38" fill="hsl(168,80%,50%)" fontSize="11" fontWeight="bold">N</text>
                  </svg>
                </div>
                {/* Depois */}
                <div className="p-5 rounded-xl bg-background/50 border border-amber-500/20">
                  <h4 className="font-bold text-amber-400 mb-3 text-center">✅ Depois (Entidade Associativa)</h4>
                  <svg viewBox="0 0 380 100" className="w-full" style={{ minWidth: 280 }}>
                    <rect x="5" y="25" width="90" height="40" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="50" y="50" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">CLIENTE</text>
                    <rect x="140" y="20" width="100" height="50" rx="4" fill="none" stroke="hsl(38,92%,50%)" strokeWidth="2.5" />
                    <text x="190" y="42" textAnchor="middle" fill="hsl(38,92%,50%)" fontSize="11" fontWeight="bold">COMPRA</text>
                    <text x="190" y="58" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">(Entidade)</text>
                    <rect x="285" y="25" width="90" height="40" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x="330" y="50" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">LIVRO</text>
                    <line x1="95" y1="45" x2="140" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                    <line x1="240" y1="45" x2="285" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                    <text x="105" y="38" fill="hsl(168,80%,50%)" fontSize="11" fontWeight="bold">1</text>
                    <text x="255" y="38" fill="hsl(168,80%,50%)" fontSize="11" fontWeight="bold">N</text>
                    <text x="125" y="58" fill="hsl(168,80%,50%)" fontSize="11" fontWeight="bold">N</text>
                    <text x="270" y="58" fill="hsl(168,80%,50%)" fontSize="11" fontWeight="bold">1</text>
                  </svg>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-background/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-amber-400">Por que isso acontece?</strong> No modelo relacional, uma tabela não consegue ter uma coluna que armazene "vários valores" ao mesmo tempo. 
                  A entidade associativa resolve isso criando uma linha para cada combinação. Por exemplo, a tabela COMPRA terá uma linha para cada livro comprado por cada cliente, 
                  com colunas <strong>CPF_Cliente (FK)</strong> e <strong>ISBN_Livro (FK)</strong>, além de atributos próprios como <strong>Data_Compra</strong> e <strong>Quantidade</strong>.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Passo 6: DER Final com entidades associativas */}
        <ScrollReveal animation="scale" delay={0.45}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">6</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">DER Final — Com Entidades Associativas</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Após transformar os relacionamentos N:N em entidades associativas, o diagrama fica pronto para implementação:
            </p>
            <div className="p-6 rounded-2xl bg-card/90 border border-border overflow-x-auto">
              <svg viewBox="0 0 850 320" className="w-full max-w-4xl mx-auto" style={{ minWidth: 550 }}>
                {/* CLIENTE */}
                <rect x="10" y="120" width="120" height="50" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                <text x="70" y="150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">CLIENTE</text>
                <ellipse cx="30" cy="60" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="30" y="64" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontWeight="bold" textDecoration="underline">CPF</text>
                <line x1="35" y1="74" x2="50" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="90" cy="60" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="90" y="64" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Nome</text>
                <line x1="88" y1="74" x2="85" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* COMPRA (entidade associativa) */}
                <rect x="200" y="110" width="130" height="70" rx="5" fill="none" stroke="hsl(38,92%,50%)" strokeWidth="2.5" />
                <text x="265" y="138" textAnchor="middle" fill="hsl(38,92%,50%)" fontSize="13" fontWeight="bold">COMPRA</text>
                <text x="265" y="155" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">(Ent. Associativa)</text>
                <text x="265" y="172" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Data, Qtd, Valor_Total</text>
                {/* Linha Cliente → Compra */}
                <line x1="130" y1="145" x2="200" y2="145" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="145" y="138" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">1</text>
                <text x="185" y="138" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">N</text>

                {/* LIVRO */}
                <rect x="410" y="120" width="120" height="50" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                <text x="470" y="150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">LIVRO</text>
                <ellipse cx="420" cy="60" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="420" y="64" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontWeight="bold" textDecoration="underline">ISBN</text>
                <line x1="425" y1="74" x2="440" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="490" cy="60" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="490" y="64" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Titulo</text>
                <line x1="488" y1="74" x2="480" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="555" cy="75" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="555" y="79" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Valor</text>
                <line x1="540" y1="87" x2="510" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                {/* Linha Compra → Livro */}
                <line x1="330" y1="145" x2="410" y2="145" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="345" y="138" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">N</text>
                <text x="395" y="138" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">1</text>

                {/* VENDEDOR */}
                <rect x="610" y="230" width="130" height="50" rx="5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" />
                <text x="675" y="260" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">VENDEDOR</text>
                <ellipse cx="775" cy="240" rx="28" ry="14" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="775" y="244" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" fontWeight="bold" textDecoration="underline">ID</text>
                <line x1="750" y1="245" x2="740" y2="255" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />

                {/* VENDA (entidade associativa) */}
                <rect x="540" y="110" width="120" height="70" rx="5" fill="none" stroke="hsl(38,92%,50%)" strokeWidth="2.5" />
                <text x="600" y="138" textAnchor="middle" fill="hsl(38,92%,50%)" fontSize="13" fontWeight="bold">VENDA</text>
                <text x="600" y="155" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">(Ent. Associativa)</text>
                <text x="600" y="172" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Data, Comissão</text>
                {/* Linha Livro → Venda */}
                <line x1="530" y1="145" x2="540" y2="145" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="533" y="138" fill="hsl(168,80%,50%)" fontSize="10" fontWeight="bold">1</text>
                {/* Linha Venda → Vendedor */}
                <line x1="660" y1="180" x2="675" y2="230" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="648" y="195" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">N</text>
                <text x="680" y="225" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">1</text>

                {/* Linha Cliente → atende → Vendedor */}
                <polygon points="70,260 100,280 70,300 40,280" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                <text x="70" y="284" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">atende</text>
                <line x1="70" y1="170" x2="70" y2="260" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="100" y1="280" x2="610" y2="255" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="55" y="220" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">N</text>
                <text x="550" y="265" fill="hsl(168,80%,50%)" fontSize="12" fontWeight="bold">1</text>
              </svg>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-3">
              DER Final: os relacionamentos N:N (<strong className="text-amber-400">compra</strong> e <strong className="text-amber-400">vende</strong>) foram transformados nas entidades associativas <strong className="text-amber-400">COMPRA</strong> e <strong className="text-amber-400">VENDA</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* Resumo dos 7 Passos */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="bg-card/90 border border-primary/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">🔑 Resumo: 7 Passos para Montagem do DER</h3>
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
                  <div>
                    <p className="font-bold text-foreground">{passo.titulo}</p>
                    <p className="text-sm text-muted-foreground">{passo.desc}</p>
                  </div>
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
