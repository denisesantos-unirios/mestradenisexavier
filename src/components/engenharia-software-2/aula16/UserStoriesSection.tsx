import { motion } from "framer-motion";
import { StickyNote, Lightbulb, ArrowRight, BookOpen, CheckCircle2, AlertTriangle, FileText, Target, Users } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const userStoryExamples = [
  {
    role: "Administrador",
    action: "cadastrar novos funcionários",
    benefit: "gerenciar a equipe do sistema",
    priority: "Alta",
    origin: "RF001 - Cadastro de funcionários"
  },
  {
    role: "Cliente",
    action: "visualizar meu histórico de pedidos",
    benefit: "acompanhar minhas compras anteriores",
    priority: "Média",
    origin: "RF012 - Consulta de pedidos"
  },
  {
    role: "Usuário",
    action: "recuperar minha senha por email",
    benefit: "acessar minha conta mesmo se esquecer a senha",
    priority: "Alta",
    origin: "RF005 - Recuperação de acesso"
  },
  {
    role: "Gerente",
    action: "gerar relatórios de vendas mensais",
    benefit: "tomar decisões estratégicas baseadas em dados",
    priority: "Alta",
    origin: "RF018 - Relatórios gerenciais"
  },
  {
    role: "Atendente",
    action: "buscar cliente por CPF ou nome",
    benefit: "agilizar o atendimento no balcão",
    priority: "Média",
    origin: "RF007 - Busca de clientes"
  }
];

const investCriteria = [
  { letter: "I", word: "Independent", meaning: "Independente de outras histórias — pode ser desenvolvida em qualquer ordem", example: "❌ 'Login' depende de 'Cadastro' → Separe-as" },
  { letter: "N", word: "Negotiable", meaning: "Negociável — não é um contrato rígido, é uma conversa", example: "O PO e o time discutem os detalhes durante o refinamento" },
  { letter: "V", word: "Valuable", meaning: "Valor real para o usuário ou negócio", example: "❌ 'Criar tabela no banco' não é HU — é tarefa técnica" },
  { letter: "E", word: "Estimable", meaning: "Possível de estimar o esforço necessário", example: "Se não consegue estimar, a HU está grande demais → divida" },
  { letter: "S", word: "Small", meaning: "Pequena o suficiente para caber em uma Sprint", example: "Regra prática: 1-3 dias de trabalho para o time" },
  { letter: "T", word: "Testable", meaning: "Possui critérios de aceite claros e verificáveis", example: "'O sistema deve ser rápido' ❌ → 'Carrega em < 2s' ✅" }
];

const transformationSteps = [
  {
    step: 1,
    title: "Identificar o Requisito",
    description: "Parta do documento de requisitos (IEEE 830) que vocês já construíram",
    example: "RF003: O sistema deve permitir que o administrador cadastre novos produtos com nome, preço e categoria.",
    icon: FileText,
    color: "text-blue-500"
  },
  {
    step: 2,
    title: "Identificar o Ator (Caso de Uso)",
    description: "Use o diagrama de casos de uso para identificar QUEM interage com o sistema",
    example: "Ator: Administrador → Caso de Uso: UC003 - Cadastrar Produto",
    icon: Users,
    color: "text-emerald-500"
  },
  {
    step: 3,
    title: "Extrair o Valor de Negócio",
    description: "Pergunte: POR QUÊ esse requisito existe? Qual problema ele resolve?",
    example: "Valor: manter o catálogo atualizado para os clientes",
    icon: Target,
    color: "text-amber-500"
  },
  {
    step: 4,
    title: "Montar a História",
    description: "Combine os três elementos no formato padrão",
    example: "Como Administrador, eu quero cadastrar novos produtos com nome, preço e categoria, para que o catálogo esteja sempre atualizado para os clientes.",
    icon: StickyNote,
    color: "text-primary"
  }
];

const criteriosAceite = [
  {
    hu: "Como Cliente, eu quero filtrar produtos por categoria, para encontrar o que preciso rapidamente.",
    criterios: [
      "Dado que estou na página de produtos, quando seleciono uma categoria, então apenas produtos dessa categoria são exibidos",
      "Dado que filtro por 'Eletrônicos', quando não há produtos, então exibe mensagem 'Nenhum produto encontrado'",
      "Dado que apliquei um filtro, quando clico em 'Limpar filtros', então todos os produtos voltam a aparecer"
    ]
  }
];

const antiPatterns = [
  { bad: "Como usuário, eu quero que o sistema seja rápido.", why: "Não é testável nem específica" },
  { bad: "Como desenvolvedor, eu quero refatorar o banco de dados.", why: "Não entrega valor ao usuário — é tarefa técnica" },
  { bad: "Como admin, eu quero gerenciar tudo do sistema.", why: "Muito ampla — impossível estimar" },
  { bad: "Como cliente, eu quero fazer login, cadastro, compra e pagamento.", why: "Múltiplas histórias em uma — viole o S do INVEST" }
];

const UserStoriesSection = () => {
  return (
    <section id="user-stories" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <StickyNote className="w-4 h-4" />
              <span className="text-sm font-medium">Parte 1 • Histórias de Usuário</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              User Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A ponte entre requisitos técnicos e o desenvolvimento ágil — 
              transformando o que vocês já documentaram em histórias prontas para o backlog
            </p>
          </div>
        </ScrollReveal>

        {/* Context: From Requirements to User Stories */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <Card className="mb-12 bg-gradient-to-br from-blue-500/5 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    O Caminho que Percorremos
                  </h3>
                  <p className="text-muted-foreground">
                    Vocês já construíram a base. Agora vamos transformá-la em artefatos ágeis.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { num: "1", title: "Requisitos", desc: "Identificaram RFs e RNFs usando técnicas de elicitação", status: "✅ Feito" },
                  { num: "2", title: "Documento IEEE 830", desc: "Organizaram e documentaram os requisitos formalmente", status: "✅ Feito" },
                  { num: "3", title: "Casos de Uso", desc: "Modelaram interações ator-sistema com diagramas UML", status: "✅ Feito" },
                  { num: "4", title: "User Stories", desc: "Agora: estruturar histórias para o backlog ágil", status: "📌 Hoje" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className={`p-4 rounded-xl border ${i === 3 ? 'bg-primary/10 border-primary/30' : 'bg-card/50 border-border/50'}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        {item.num}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">{item.status}</span>
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* What is a User Story */}
        <ScrollReveal animation="fadeUp" delay={0.15}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <StickyNote className="w-6 h-6 text-primary" />
              O que é uma User Story?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-3">Definição</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Uma User Story (História de Usuário) é uma <strong className="text-foreground">descrição curta e informal</strong> de 
                    uma funcionalidade contada do <strong className="text-foreground">ponto de vista do usuário</strong>. 
                    É o principal artefato para expressar requisitos em metodologias ágeis.
                  </p>
                  <div className="p-3 rounded-lg bg-muted/50 text-sm">
                    <p className="text-muted-foreground italic">
                      "User stories are not requirements; they are discussions about solving problems." 
                      — Jeff Patton
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-3">Os 3 Cs (Ron Jeffries)</h4>
                  <div className="space-y-3">
                    {[
                      { c: "Card", desc: "A história escrita em um cartão (Post-it) — breve e objetiva" },
                      { c: "Conversation", desc: "A discussão entre PO, time e stakeholders sobre os detalhes" },
                      { c: "Confirmation", desc: "Os critérios de aceite que confirmam quando está pronta" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                          {item.c[0]}
                        </span>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{item.c}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>

        {/* Anatomy */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
              <StickyNote className="w-6 h-6 text-primary" />
              Anatomia de uma User Story
            </h3>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <p className="text-2xl font-mono text-foreground mb-6">
                  <span className="text-blue-400 font-bold">Como</span> [tipo de usuário],
                  <br />
                  <span className="text-emerald-400 font-bold">Eu quero</span> [ação/funcionalidade],
                  <br />
                  <span className="text-amber-400 font-bold">Para que</span> [benefício/valor].
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">👤 Quem? (Ator do UC)</span>
                  <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">⚡ O quê? (Requisito Funcional)</span>
                  <span className="px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">🎯 Por quê? (Valor de negócio)</span>
                </div>
              </div>
            </motion.div>

            {/* Examples as sticky notes */}
            <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {userStoryExamples.map((story, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: 0 }}
                    className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-lg shadow-md"
                    style={{ transform: `rotate(${(index % 3 - 1) * 2}deg)` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <StickyNote className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        story.priority === "Alta" 
                          ? "bg-red-500/20 text-red-600 dark:text-red-400" 
                          : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                      }`}>
                        {story.priority}
                      </span>
                    </div>
                    <p className="text-xs text-amber-900 dark:text-amber-100 mb-2">
                      <span className="font-bold">Como</span> {story.role}, 
                      <span className="font-bold"> eu quero</span> {story.action}, 
                      <span className="font-bold"> para que</span> {story.benefit}.
                    </p>
                    <div className="pt-2 border-t border-amber-300/50 dark:border-amber-700/50">
                      <p className="text-[10px] text-amber-700 dark:text-amber-300">
                        📋 Origem: {story.origin}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Transformation: Requisitos → User Stories */}
        <ScrollReveal animation="fadeUp" delay={0.25}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center flex items-center justify-center gap-2">
              <ArrowRight className="w-6 h-6 text-primary" />
              De Requisitos & Casos de Uso → User Stories
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passo a passo para transformar o que vocês já documentaram em histórias prontas para o backlog
            </p>
            
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-emerald-500/30 to-primary/30" />
              
              <div className="space-y-6">
                {transformationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <Card className="flex-1 bg-card/50 border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center`}>
                            <step.icon className={`w-5 h-5 ${step.color}`} />
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Passo {step.step}</span>
                            <h4 className="font-bold text-foreground">{step.title}</h4>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                        <div className="p-3 rounded-lg bg-muted/50 font-mono text-xs text-foreground">
                          {step.example}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Acceptance Criteria */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              Critérios de Aceite (BDD - Given/When/Then)
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Toda User Story precisa de critérios de aceite — são eles que definem quando a história está "pronta"
            </p>

            {criteriosAceite.map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-border/50 mb-6 max-w-4xl mx-auto">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <StickyNote className="w-5 h-5 text-amber-500" />
                    <CardTitle className="text-base">{item.hu}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-foreground mb-3">Critérios de Aceite:</p>
                  <div className="space-y-3">
                    {item.criterios.map((c, i) => (
                      <div key={i} className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 font-mono text-xs text-foreground">
                        <span className="text-emerald-500 font-bold">✓ </span>{c}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-muted/50">
                    <p className="text-xs text-muted-foreground">
                      💡 <strong>Formato BDD:</strong> Dado [contexto], Quando [ação], Então [resultado esperado]
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* INVEST Criteria */}
        <ScrollReveal animation="fadeUp" delay={0.35}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center flex items-center justify-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              Critérios INVEST
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              6 critérios para validar se uma User Story está bem escrita
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {investCriteria.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="h-full bg-card/50 border-border/50">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                          {item.letter}
                        </span>
                        <div>
                          <p className="font-bold text-foreground">{item.word}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{item.meaning}</p>
                      <div className="p-2 rounded-lg bg-muted/50 text-xs text-muted-foreground">
                        {item.example}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Anti-patterns */}
        <ScrollReveal animation="fadeUp" delay={0.4}>
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Anti-padrões: Histórias Mal Escritas
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {antiPatterns.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-destructive/5 border border-destructive/20"
                >
                  <p className="text-sm font-mono text-foreground mb-2 line-through decoration-destructive/50">
                    "{item.bad}"
                  </p>
                  <p className="text-xs text-muted-foreground flex items-start gap-1">
                    <AlertTriangle className="w-3 h-3 text-destructive flex-shrink-0 mt-0.5" />
                    {item.why}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UserStoriesSection;
