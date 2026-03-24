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
