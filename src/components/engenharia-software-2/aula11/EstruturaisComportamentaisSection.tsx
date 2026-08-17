import { GitCompare, Box, Activity, ThumbsUp, ThumbsDown, Puzzle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const estruturais = [
  { nome: "Diagrama de Classes", desc: "Mostra as classes, atributos, operações e seus relacionamentos." },
  { nome: "Diagrama de Objetos", desc: "Representa instâncias das classes em um instante do sistema." },
  { nome: "Diagrama de Componentes", desc: "Define os componentes de software e suas interfaces." },
  { nome: "Diagrama de Pacotes", desc: "Organiza os elementos do modelo em pacotes." },
  { nome: "Diagrama de Implantação", desc: "Mostra a distribuição física dos componentes (nós, servidores)." },
];

const comportamentais = [
  { nome: "Diagrama de Casos de Uso", desc: "Representa atores e funcionalidades do sistema." },
  { nome: "Diagrama de Sequência", desc: "Interação entre objetos ao longo do tempo (mensagens)." },
  { nome: "Diagrama de Atividades", desc: "Fluxos de processos, decisões e paralelismo." },
  { nome: "Diagrama de Estados", desc: "Estados de um objeto e as transições entre eles." },
];

const comparacao = [
  { car: "Representam", est: "Estrutura estática do sistema", comp: "Comportamento dinâmico do sistema" },
  { car: "Foco", est: "Elementos fixos (classes, componentes)", comp: "Interações e processos" },
  { car: "Exemplos", est: "Classes, Componentes, Implantação", comp: "Sequência, Casos de Uso, Atividades" },
  { car: "Quando usar", est: "Definir arquitetura e componentes fixos", comp: "Descrever a interação ao longo do tempo" },
];

const componentesEstruturais = ["Ator", "Classe", "Atributo", "Componente", "Interface", "Objeto", "Pacote"];
const componentesComportamentais = ["Atividade", "Evento", "Mensagem", "Método", "Operação", "Estado", "Caso de Uso"];

const vantagens = [
  "Facilita a compreensão do sistema antes da implementação.",
  "Melhora a comunicação entre equipes técnicas e não técnicas.",
  "Ajuda a detectar falhas ainda na fase de planejamento.",
];

const desvantagens = [
  "Pode ser complexa para iniciantes.",
  "Requer treinamento para ser utilizada corretamente.",
  "Pode gerar sobrecarga documental se não for bem gerenciada.",
];

const classesExemplo = [
  { classe: "Customer", atributos: "customerName, address, email, accountBalance", metodos: "register(), login(), updateProfile()" },
  { classe: "User", atributos: "userId, password, loginStatus, registerDate", metodos: "verifyLogin(): bool" },
  { classe: "Shopping cart", atributos: "cartId, productId, quantity, dateAdded", metodos: "addCartItem(), checkOut()" },
  { classe: "Order", atributos: "orderId, dateCreated, customerId, status", metodos: "placeOrder()" },
  { classe: "Order details", atributos: "orderId, productId, quantity, unitCost, subtotal", metodos: "calcPrice()" },
];

const EstruturaisComportamentaisSection = () => {
  return (
    <section id="estruturais-comportamentais" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <GitCompare className="w-4 h-4" />
              Classificação dos diagramas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diagramas Estruturais x Comportamentais
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Diagramas são representações visuais que ajudam a entender, projetar e documentar sistemas. Eles se dividem
              em duas grandes categorias.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Box className="w-5 h-5 text-primary" /> Estruturais (estático)
              </h3>
              <div className="space-y-3">
                {estruturais.map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/40">
                    <p className="text-sm font-semibold text-foreground">{d.nome}</p>
                    <p className="text-xs text-muted-foreground">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-card border border-border h-full">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" /> Comportamentais (dinâmico)
              </h3>
              <div className="space-y-3">
                {comportamentais.map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/40">
                    <p className="text-sm font-semibold text-foreground">{d.nome}</p>
                    <p className="text-xs text-muted-foreground">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <div className="rounded-2xl border border-border overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-3 font-bold text-foreground">Característica</th>
                    <th className="text-left p-3 font-bold text-foreground">Estruturais</th>
                    <th className="text-left p-3 font-bold text-foreground">Comportamentais</th>
                  </tr>
                </thead>
                <tbody>
                  {comparacao.map((l, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3 font-semibold text-foreground">{l.car}</td>
                      <td className="p-3 text-muted-foreground">{l.est}</td>
                      <td className="p-3 text-muted-foreground">{l.comp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-2xl bg-card border border-border mb-10">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-primary" /> Componentes da UML
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Componentes Estruturais</p>
                <div className="flex flex-wrap gap-2">
                  {componentesEstruturais.map((c) => (
                    <span key={c} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Componentes Comportamentais</p>
                <div className="flex flex-wrap gap-2">
                  {componentesComportamentais.map((c) => (
                    <span key={c} className="px-3 py-1 rounded-full bg-accent/20 text-foreground text-xs">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="p-6 rounded-2xl bg-card border border-border mb-10">
            <h3 className="font-bold text-foreground mb-2">Exemplo prático: sistema de loja online</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recorte de um diagrama de classes com atributos e métodos das principais entidades.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-3 font-bold text-foreground">Classe</th>
                    <th className="text-left p-3 font-bold text-foreground">Atributos</th>
                    <th className="text-left p-3 font-bold text-foreground">Métodos</th>
                  </tr>
                </thead>
                <tbody>
                  {classesExemplo.map((c, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3 font-semibold text-foreground">{c.classe}</td>
                      <td className="p-3 text-muted-foreground font-mono text-xs">{c.atributos}</td>
                      <td className="p-3 text-muted-foreground font-mono text-xs">{c.metodos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No caso de uso correspondente, o ator <strong>Customer</strong> executa "View items", "Make purchase" e
              "Complete checkout", com <em>&lt;&lt;service&gt;&gt;</em> Authentication e serviços de pagamento (Cartão, PayPal).
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.4}>
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 h-full">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-emerald-500" /> Vantagens
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {vantagens.map((v, i) => <li key={i}>{v}</li>)}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 h-full">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <ThumbsDown className="w-5 h-5 text-orange-500" /> Desvantagens
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {desvantagens.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="font-bold text-foreground mb-2">Conclusão</h3>
            <p className="text-sm text-muted-foreground">
              A UML é uma ferramenta essencial para modelagem de sistemas, permitindo visualizar e estruturar projetos de
              forma clara e organizada. Seu uso adequado melhora a compreensão, o planejamento e a documentação,
              garantindo maior qualidade no desenvolvimento de software.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EstruturaisComportamentaisSection;
