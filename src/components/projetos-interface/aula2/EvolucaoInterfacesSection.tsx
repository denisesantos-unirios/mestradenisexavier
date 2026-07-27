import { motion } from "framer-motion";
import { History, Monitor, Sparkles, Users, Quote, Car, DoorOpen, Phone, Tv, Fan, Disc, Droplets, CreditCard } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

import lisa from "@/assets/ihc/lisa-1983.jpg";
import win101 from "@/assets/ihc/windows-101-1985.jpg";
import win2 from "@/assets/ihc/windows-2-1987.jpg";
import win95 from "@/assets/ihc/windows-95.jpg";
import kde1 from "@/assets/ihc/kde1-1997.jpg";
import macosx from "@/assets/ihc/macosx-aqua.jpg";
import ubuntu from "@/assets/ihc/ubuntu-2005.jpg";

const linhaTempo = [
  {
    ano: "1983",
    titulo: "Apple Lisa",
    img: lisa,
    alt: "Área de trabalho do Apple Lisa com ícones de arquivos e menus",
    desc: "Primeira GUI comercial de massa: ícones de arquivos, janelas e arrastar-e-soltar. Custava US$ 10.000 (o Macintosh, em 1984, saiu por US$ 2.495).",
    marco: "Nasce a metáfora da mesa de trabalho (desktop).",
  },
  {
    ano: "1985",
    titulo: "Microsoft Windows 1.01",
    img: win101,
    alt: "Windows 1.01 exibindo as janelas Calendar e Cardfile",
    desc: "Janelas lado a lado (tiling), sem sobreposição. Aplicativos simples como Calendar e Cardfile mostravam o conceito de multitarefa visual.",
    marco: "Evolução do MS-DOS: da linha de comando para o gráfico.",
  },
  {
    ano: "1987",
    titulo: "Microsoft Windows 2",
    img: win2,
    alt: "Windows 2 com o aplicativo Write, uma caixa de diálogo e o relógio",
    desc: "Janelas sobrepostas, atalhos de teclado e caixas de diálogo modais (\"Salvar alterações?\") — feedback e prevenção de erros ganham forma.",
    marco: "Surgem os diálogos de confirmação.",
  },
  {
    ano: "1995",
    titulo: "Windows 95",
    img: win95,
    alt: "Área de trabalho do Windows 95 com o menu Iniciar e várias janelas abertas",
    desc: "Menu Iniciar, barra de tarefas e botão Fechar padronizado. A interface passa a ser projetada para o usuário comum, não para o especialista.",
    marco: "Popularização definitiva da GUI + chegada da Web.",
  },
  {
    ano: "1997",
    titulo: "KDE 1 (Linux/BSD)",
    img: kde1,
    alt: "Ambiente de trabalho KDE 1 em Linux",
    desc: "O software livre ganha um ambiente gráfico consistente e configurável, provando que interface é também escolha cultural e de comunidade.",
    marco: "Consistência e personalização no mundo open source.",
  },
  {
    ano: "2001",
    titulo: "Mac OS X — GUI Aqua",
    img: macosx,
    alt: "Área de trabalho do Mac OS X com a janela do Finder e a interface Aqua",
    desc: "Transparências, sombras, animações e o Dock. A estética entra no jogo: o design deixa de ser só funcional e passa a ser experiência.",
    marco: "Interface como identidade de marca.",
  },
  {
    ano: "2005",
    titulo: "Ubuntu 5.04",
    img: ubuntu,
    alt: "Área de trabalho do Ubuntu 5.04 com menus Applications, Places e System",
    desc: "GNOME com foco em simplicidade: menus previsíveis (Applications / Places / System) e instalação acessível para não-especialistas.",
    marco: "Usabilidade como argumento de adoção.",
  },
];

const hoje = [
  { emoji: "📱", titulo: "Mobile-first & toque", desc: "Gestos, thumb zone, telas pequenas: o dedo substitui o cursor." },
  { emoji: "🗣️", titulo: "Voz e conversação", desc: "Alexa, Siri e chatbots: a interface sem tela (zero UI)." },
  { emoji: "🤖", titulo: "Interfaces com IA", desc: "Prompts, respostas generativas e personalização em tempo real." },
  { emoji: "⌚", titulo: "Vestíveis e IoT", desc: "Relógios, TVs, carros e geladeiras conectadas — microinterações." },
  { emoji: "🥽", titulo: "AR / VR / espacial", desc: "Interfaces em 3D no espaço físico (Vision Pro, Quest)." },
  { emoji: "♿", titulo: "Acessibilidade", desc: "WCAG, leitores de tela e design inclusivo como requisito, não extra." },
];

const ondeTemInterface = [
  { icon: Car, label: "No carro" },
  { icon: DoorOpen, label: "Na porta" },
  { icon: Phone, label: "No telefone" },
  { icon: Tv, label: "Na televisão" },
  { icon: Fan, label: "No ventilador" },
  { icon: Disc, label: "No DVD" },
  { icon: Droplets, label: "Na torneira" },
  { icon: CreditCard, label: "No caixa eletrônico" },
];

const tiposUsuario = [
  { titulo: "Novatos", desc: "Nenhum conhecimento do sistema. Precisam de orientação, rótulos claros e caminhos guiados." },
  { titulo: "Esporádicos", desc: "Conhecimento razoável, mas lembram pouco. Precisam de reconhecimento em vez de memorização." },
  { titulo: "Frequentes", desc: "Bom domínio — levam à síndrome do \"sabe tudo\". Precisam de atalhos e aceleradores." },
];

const EvolucaoInterfacesSection = () => {
  return (
    <section id="evolucao-interfaces" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-sm mb-4">
              <History className="w-4 h-4 text-accent" />
              <span className="text-accent">Antes e Agora</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Evolução das Interfaces</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Até os anos 80, o computador era coisa de especialista — e a interação com o usuário quase não
              importava. Com a popularização dos PCs e a chegada da Web nos anos 90, pessoas comuns passaram a
              depender da "máquina", e as empresas começaram a investir pesado na interface de seus softwares.
            </p>
          </div>
        </ScrollReveal>

        {/* Citação Norman */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto mb-16 relative">
            <Quote className="w-8 h-8 text-primary/40 mb-3" />
            <p className="text-lg italic leading-relaxed">
              "O design pode ser a diferença entre prazer e <strong>frustração</strong>. Muitos acidentes são
              atribuídos a <strong>falha humana</strong>, mas em quase todos os casos o erro foi o resultado
              direto de um <strong>mau design</strong>."
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              — Donald Norman, <em>The Design of Everyday Things</em>
            </p>
          </div>
        </ScrollReveal>

        {/* Linha do tempo com imagens */}
        <div className="space-y-10 mb-20">
          {linhaTempo.map((item, index) => (
            <ScrollReveal key={item.ano} delay={0.05 * index}>
              <div className={`glass-card overflow-hidden grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}>
                <figure className="bg-secondary/40 flex items-center justify-center p-4">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="rounded-lg w-full h-auto object-contain max-h-72 border border-border"
                  />
                </figure>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-bold">
                      {item.ano}
                    </span>
                    <Monitor className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.titulo}</h3>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <p className="text-sm p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <strong>Marco:</strong> {item.marco}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Hoje */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-sm mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary">E agora?</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Das janelas para tudo ao redor</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A interface saiu da tela do desktop e se espalhou pelo cotidiano.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-4 mb-20">
          {hoje.map((h) => (
            <StaggerItem key={h.titulo}>
              <div className="glass-card p-6 h-full">
                <div className="text-3xl mb-3">{h.emoji}</div>
                <h4 className="font-bold mb-1">{h.titulo}</h4>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Há interfaces em todo canto */}
        <ScrollReveal>
          <div className="glass-card p-8 mb-12">
            <h3 className="text-2xl font-bold mb-2 text-center">Há interfaces em todo canto</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Interface = dispositivo de ligação entre sistemas. Não é só software.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ondeTemInterface.map((o) => (
                <motion.div
                  key={o.label}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-secondary/50 border border-border flex items-center gap-3"
                >
                  <o.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{o.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4 italic">
              ...e até numa fivela de cabelo!
            </p>
          </div>
        </ScrollReveal>

        {/* Tipos de usuário */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-bold">Para quem projetamos? Três tipos de usuário</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {tiposUsuario.map((t) => (
                <div key={t.titulo} className="glass-card p-6">
                  <h4 className="font-bold mb-2 text-primary">{t.titulo}</h4>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              Lembre-se dos 4 componentes da IHC: <strong>usuário</strong>, <strong>tarefa</strong>,{" "}
              <strong>contexto</strong> e <strong>sistema</strong> (software + hardware).
            </p>
          </div>
        </ScrollReveal>

        {/* Exercício */}
        <ScrollReveal>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-2">✏️ Exercício — Antes e Agora</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Escolha <strong>um</strong> dos sistemas abaixo e elabore duas versões da interface: uma no estilo
              "antes" (formulário denso, anos 90) e outra "agora" (mobile-first, acessível). Compare o esforço do
              usuário nas duas.
            </p>
            <ol className="space-y-2 text-sm list-decimal list-inside text-muted-foreground">
              <li>Cadastro de pacientes em uma clínica</li>
              <li>Cadastro de carros em uma frota</li>
              <li>Cadastro de alunos em uma faculdade</li>
              <li>Cadastro de currículo (Curriculum Vitae)</li>
            </ol>
            <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm">
              <strong>Bom design traz:</strong> satisfação do cliente, qualidade e reputação, confiabilidade
              (menos erros), fidelidade, foco na tarefa (e não na interface), eficiência, flexibilidade e
              funcionalidade.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EvolucaoInterfacesSection;
