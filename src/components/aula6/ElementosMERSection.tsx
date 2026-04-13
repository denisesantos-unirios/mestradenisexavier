import { motion } from "framer-motion";
import { Box, Tag, Link2, GitFork, Shield, Puzzle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const elementosPrincipais = [
  {
    icon: Box,
    titulo: "Entidades",
    descricao: "Objetos envolvidos no ambiente que irão realizar conexões entre si para trocar informações.",
    cor: "text-teal-400",
    bgCor: "bg-teal-500/20",
  },
  {
    icon: Tag,
    titulo: "Atributos",
    descricao: "Características de cada entidade pertinentes ao sistema.",
    cor: "text-cyan-400",
    bgCor: "bg-cyan-500/20",
  },
  {
    icon: Link2,
    titulo: "Relacionamentos",
    descricao: "Conexões entre entidades que trocam informações transacionais.",
    cor: "text-emerald-400",
    bgCor: "bg-emerald-500/20",
  },
];

const tiposEntidade = [
  {
    tipo: "Entidade Forte",
    icon: Shield,
    descricao: "Justifica sua existência somente pela sua própria importância, não depende de outras entidades.",
    exemplo: "Em um sistema de estoque, a entidade Produto é forte — não depende de nenhuma outra.",
    cor: "border-teal-500/30 bg-teal-500/5",
  },
  {
    tipo: "Entidade Fraca",
    icon: GitFork,
    descricao: "Tem na sua existência a dependência de outra entidade.",
    exemplo: "A entidade Fornecedor existe em virtude da entidade Produto. Sem produto, não faz sentido ter o fornecedor.",
    cor: "border-cyan-500/30 bg-cyan-500/5",
  },
  {
    tipo: "Entidade Associativa",
    icon: Puzzle,
    descricao: "Existe somente se alguma associação ao relacionamento for necessária.",
    exemplo: "Desconto de Compra surge da relação entre Fornecedor e a transação de reposição de estoque.",
    cor: "border-emerald-500/30 bg-emerald-500/5",
  },
];

const tiposAtributo = [
  { tipo: "Descritivos", descricao: "Descrevem alguma característica da entidade.", exemplo: "Nome, Cor, Peso", emoji: "📝" },
  { tipo: "Nominativos", descricao: "Descrevem e também identificam a entidade como única.", exemplo: "Código do Cliente, CPF", emoji: "🏷️" },
  { tipo: "Referenciais", descricao: "Representam uma entidade na relação com outra.", exemplo: "CPF do cliente na entidade Venda", emoji: "🔗" },
];

const classificacaoAtributo = [
  { tipo: "Simples", descricao: "Atributo sozinho define uma característica.", exemplo: "Nome", emoji: "1️⃣" },
  { tipo: "Compostos", descricao: "Atributos combinados definem uma característica.", exemplo: "Endereço = Rua + Nº + Bairro + Cidade + Estado", emoji: "🧩" },
];

const cardinalidades = [
  {
    tipo: "1:1 (Um para Um)",
    descricao: "Um objeto da entidade A relaciona-se com exatamente um objeto da entidade B.",
    exemplo: "Aluno possui Bolsa",
    visual: "1 ─── 1",
  },
  {
    tipo: "1:N (Um para Muitos)",
    descricao: "Um objeto da entidade A relaciona-se com mais de um objeto da entidade B.",
    exemplo: "Proprietário possui Carros",
    visual: "1 ─── N",
  },
  {
    tipo: "N:N (Muitos para Muitos)",
    descricao: "Um ou mais objetos de A relacionam-se com um ou mais objetos de B.",
    exemplo: "Operadora possui Clientes",
    visual: "N ─── N",
  },
];

const ElementosMERSection = () => {
  return (
    <section id="elementos" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 mb-6">
              <Box className="w-4 h-4" />
              <span className="text-sm font-medium">Modelo Entidade-Relacionamento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Elementos do MER
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Técnica criada em 1976 pelo professor <strong className="text-teal-400">Peter P. Chen</strong>,
              referencial definitivo na modelagem de dados até hoje.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Elementos Principais */}
        <ScrollReveal animation="scale" delay={0.2}>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16">
            {elementosPrincipais.map((el) => (
              <StaggerItem key={el.titulo}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-6 rounded-2xl bg-card/90 border border-border text-center h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${el.bgCor} flex items-center justify-center mx-auto mb-4`}>
                    <el.icon className={`w-8 h-8 ${el.cor}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${el.cor} mb-2`}>{el.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{el.descricao}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Tipos de Entidade */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Classificação das Entidades</h3>
          <div className="space-y-4 mb-16">
            {tiposEntidade.map((tipo) => (
              <motion.div
                key={tipo.tipo}
                whileHover={{ x: 5 }}
                className={`p-6 rounded-xl border ${tipo.cor}`}
              >
                <div className="flex items-start gap-3">
                  <tipo.icon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{tipo.tipo}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{tipo.descricao}</p>
                    <div className="p-3 rounded-lg bg-card/50">
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-primary">Exemplo:</strong> {tipo.exemplo}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Atributos */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Tipos de Atributos</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {tiposAtributo.map((attr) => (
              <motion.div
                key={attr.tipo}
                whileHover={{ scale: 1.03 }}
                className="p-5 rounded-xl bg-card/90 border border-border"
              >
                <span className="text-2xl mb-2 block">{attr.emoji}</span>
                <h4 className="font-bold text-foreground mb-1">{attr.tipo}</h4>
                <p className="text-sm text-muted-foreground mb-2">{attr.descricao}</p>
                <p className="text-xs text-teal-400 font-medium">Ex: {attr.exemplo}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {classificacaoAtributo.map((attr) => (
              <motion.div
                key={attr.tipo}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-gradient-to-r from-teal-500/5 to-cyan-500/5 border border-teal-500/20"
              >
                <span className="text-2xl mb-2 block">{attr.emoji}</span>
                <h4 className="font-bold text-foreground mb-1">{attr.tipo}</h4>
                <p className="text-sm text-muted-foreground mb-2">{attr.descricao}</p>
                <p className="text-xs text-cyan-400 font-medium">Ex: {attr.exemplo}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Cardinalidades */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Cardinalidades dos Relacionamentos</h3>
          <p className="text-muted-foreground mb-6">
            Utilizamos <strong className="text-primary">verbos de ação</strong> para ler um relacionamento entre entidades.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {cardinalidades.map((card) => (
              <motion.div
                key={card.tipo}
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-6 rounded-2xl bg-card/90 border border-border text-center"
              >
                <div className="text-3xl font-mono font-bold text-teal-400 mb-3">{card.visual}</div>
                <h4 className="font-bold text-foreground mb-2">{card.tipo}</h4>
                <p className="text-sm text-muted-foreground mb-3">{card.descricao}</p>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-xs text-primary font-medium">{card.exemplo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Diagramas ER Visuais */}
        <ScrollReveal animation="fadeUp" delay={0.6}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Diagramas Entidade-Relacionamento (DER)</h3>
          <p className="text-muted-foreground mb-8">
            Representação visual usando a notação de <strong className="text-teal-400">Peter Chen</strong>: retângulos para entidades, losangos para relacionamentos e elipses para atributos.
          </p>

          {/* DER 1:1 */}
          <div className="mb-8">
            <h4 className="font-bold text-foreground mb-4 text-lg">Exemplo 1:1 — Aluno possui Bolsa</h4>
            <div className="p-6 rounded-2xl bg-card/90 border border-border overflow-x-auto">
              <svg viewBox="0 0 700 200" className="w-full max-w-2xl mx-auto" style={{ minWidth: 400 }}>
                {/* Entidade Aluno */}
                <rect x="30" y="70" width="130" height="60" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="95" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="bold">ALUNO</text>
                {/* Relacionamento */}
                <polygon points="350,70 410,100 350,130 290,100" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                <text x="350" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">possui</text>
                {/* Entidade Bolsa */}
                <rect x="540" y="70" width="130" height="60" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="605" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="bold">BOLSA</text>
                {/* Linhas */}
                <line x1="160" y1="100" x2="290" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="410" y1="100" x2="540" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                {/* Cardinalidades */}
                <text x="175" y="90" fill="hsl(168,80%,50%)" fontSize="14" fontWeight="bold">1</text>
                <text x="525" y="90" fill="hsl(168,80%,50%)" fontSize="14" fontWeight="bold">1</text>
                {/* Atributos Aluno */}
                <ellipse cx="60" cy="30" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="60" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">RA</text>
                <line x1="60" y1="48" x2="80" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="150" cy="30" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="150" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Nome</text>
                <line x1="145" y1="48" x2="120" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                {/* Atributos Bolsa */}
                <ellipse cx="570" cy="30" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="570" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Codigo</text>
                <line x1="570" y1="48" x2="590" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="660" cy="30" rx="35" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="660" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Valor</text>
                <line x1="650" y1="48" x2="630" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* DER 1:N */}
          <div className="mb-8">
            <h4 className="font-bold text-foreground mb-4 text-lg">Exemplo 1:N — Proprietario possui Carros</h4>
            <div className="p-6 rounded-2xl bg-card/90 border border-border overflow-x-auto">
              <svg viewBox="0 0 700 200" className="w-full max-w-2xl mx-auto" style={{ minWidth: 400 }}>
                <rect x="30" y="70" width="150" height="60" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="105" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">PROPRIETARIO</text>
                <polygon points="350,70 410,100 350,130 290,100" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                <text x="350" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">possui</text>
                <rect x="540" y="70" width="130" height="60" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="605" y="105" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="16" fontWeight="bold">CARRO</text>
                <line x1="180" y1="100" x2="290" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="410" y1="100" x2="540" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="200" y="90" fill="hsl(168,80%,50%)" fontSize="14" fontWeight="bold">1</text>
                <text x="520" y="90" fill="hsl(168,80%,50%)" fontSize="14" fontWeight="bold">N</text>
                {/* Atributos */}
                <ellipse cx="65" cy="30" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="65" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">CPF</text>
                <line x1="75" y1="48" x2="90" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="160" cy="30" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="160" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Nome</text>
                <line x1="150" y1="48" x2="130" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="570" cy="30" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="570" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Placa</text>
                <line x1="575" y1="48" x2="590" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="660" cy="30" rx="40" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="660" y="35" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Modelo</text>
                <line x1="650" y1="48" x2="630" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* DER N:N */}
          <div className="mb-8">
            <h4 className="font-bold text-foreground mb-4 text-lg">Exemplo N:N — Operadora possui Clientes</h4>
            <div className="p-6 rounded-2xl bg-card/90 border border-border overflow-x-auto">
              <svg viewBox="0 0 700 220" className="w-full max-w-2xl mx-auto" style={{ minWidth: 400 }}>
                <rect x="30" y="80" width="150" height="60" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="105" y="115" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">OPERADORA</text>
                <polygon points="350,80 410,110 350,140 290,110" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="2" />
                <text x="350" y="115" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">possui</text>
                <rect x="540" y="80" width="130" height="60" rx="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="605" y="115" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="15" fontWeight="bold">CLIENTE</text>
                <line x1="180" y1="110" x2="290" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <line x1="410" y1="110" x2="540" y2="110" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
                <text x="200" y="100" fill="hsl(168,80%,50%)" fontSize="14" fontWeight="bold">N</text>
                <text x="520" y="100" fill="hsl(168,80%,50%)" fontSize="14" fontWeight="bold">N</text>
                {/* Atributo do relacionamento (Plano) */}
                <ellipse cx="350" cy="185" rx="45" ry="18" fill="none" stroke="hsl(168,80%,50%)" strokeWidth="1.5" />
                <text x="350" y="190" textAnchor="middle" fill="hsl(168,80%,50%)" fontSize="11">Plano</text>
                <line x1="350" y1="140" x2="350" y2="167" stroke="hsl(168,80%,50%)" strokeWidth="1" />
                {/* Atributos Operadora */}
                <ellipse cx="60" cy="40" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="60" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">CNPJ</text>
                <line x1="70" y1="58" x2="85" y2="80" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="160" cy="40" rx="45" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="160" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Nome</text>
                <line x1="150" y1="58" x2="130" y2="80" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                {/* Atributos Cliente */}
                <ellipse cx="570" cy="40" rx="40" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="570" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">CPF</text>
                <line x1="575" y1="58" x2="590" y2="80" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
                <ellipse cx="660" cy="40" rx="40" ry="18" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
                <text x="660" y="45" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">Nome</text>
                <line x1="650" y1="58" x2="630" y2="80" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              No relacionamento N:N, o atributo <strong className="text-teal-400">Plano</strong> pertence ao relacionamento, não a nenhuma das entidades.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ElementosMERSection;
