import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Layers, ArrowDown, ArrowRight, RefreshCw, Repeat, Zap, Heart } from "lucide-react";
import MermaidDiagram from "@/components/MermaidDiagram";

const modeloDiagrams: Record<string, string> = {
  "Modelo Cascata (1970)": `flowchart TD
  A[Definição de Requisitos] --> B[Projeto de Sistema e Software]
  B --> C[Implementação e Teste Unitário]
  C --> D[Integração e Teste de Sistema]
  D --> E[Operação e Manutenção]`,
  "Modelo Iterativo e Incremental": `flowchart LR
  A[Esboço de Requisitos] --> B[Atribuir aos Incrementos]
  B --> C[Projetar Arquitetura]
  C --> D[Desenvolver Incremento]
  D --> E{Completo?}
  E -- Nao --> F[Validar e Integrar]
  F --> G[Implantar Incremento]
  G --> D
  E -- Sim --> H[Sistema Final]`,
  "Modelo em Espiral": `flowchart TB
  Q1[1. Determinar objetivos<br/>e restricoes] --> Q2[2. Avaliar riscos<br/>Prototipos 1, 2, 3]
  Q2 --> Q3[3. Desenvolver e verificar<br/>Requisitos, Codigo, Testes]
  Q3 --> Q4[4. Planejar proxima fase]
  Q4 --> Q1
  Q4 --> FIM[Sistema Final]`,
  "Métodos Ágeis (2001)": `flowchart LR
  A[Backlog do Produto] --> B[Sprint Planning]
  B --> C[Sprint 1-4 semanas]
  C --> D[Daily Meetings]
  D --> C
  C --> E[Incremento Entregavel]
  E --> F[Sprint Review]
  F --> G[Retrospectiva]
  G --> A`,
};

const linguagens = [
  { era: "1725", nome: "Cartões Perfurados", desc: "Instruções mecânicas em cartões para teares automáticos — os primórdios da programação.", tipo: "Pré-computação" },
  { era: "1955", nome: "FORTRAN", desc: "Primeira linguagem de alto nível. Usada para cálculos científicos e engenharia. Ainda existe em supercomputação!", tipo: "Científica" },
  { era: "1958", nome: "LISP", desc: "Linguagem funcional para inteligência artificial. Influenciou Python, JavaScript e muitas linguagens modernas.", tipo: "IA" },
  { era: "1959", nome: "COBOL", desc: "Linguagem para negócios. Ainda processa 95% das transações de ATM bancário e 80% das transações comerciais no mundo.", tipo: "Comercial" },
  { era: "1990s+", nome: "Java, JS, PHP, Python", desc: "Linguagens de alto nível que se aproximam da linguagem humana. Dominam o desenvolvimento web, mobile e IA.", tipo: "Modernas" },
];

const paradigmas = [
  {
    icon: ArrowDown,
    title: "Paradigma Estruturado",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    desc: "O programa é dividido em três partes que se interligam:",
    items: [
      { nome: "Sequência", desc: "Código executado na ordem em que foi programado", ex: "Receber 2 números → somar → mostrar resultado" },
      { nome: "Seleção", desc: "O programa segue caminhos distintos com base em condições", ex: "Escolher se deve somar OU subtrair" },
      { nome: "Iteração", desc: "O programa repete trechos de código", ex: "Perguntar se deseja calcular novamente" },
    ],
  },
  {
    icon: Layers,
    title: "Paradigma Orientado a Objetos",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    desc: "Tudo é um objeto que pertence a uma classe com características e ações:",
    items: [
      { nome: "Classes", desc: "Modelos que definem a estrutura", ex: "Classe 'Carro' define marca, cor, modelo" },
      { nome: "Atributos", desc: "Características do objeto", ex: "cor = 'vermelho', marca = 'Fiat'" },
      { nome: "Métodos", desc: "Ações que o objeto pode executar", ex: "ligar(), acelerar(), frear()" },
    ],
  },
];

const modelos = [
  {
    icon: ArrowDown,
    title: "Modelo Cascata (1970)",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    desc: "Etapas executadas de forma sequencial, sem retorno. Primeiro modelo formal de processo.",
    etapas: ["Definição de requisitos", "Projeto de sistema e software", "Implementação e teste unitário", "Integração e teste de sistema", "Operação e manutenção"],
    pros: ["Simples e bem documentado", "Bom para escopo bem definido"],
    cons: ["Não permite voltar etapas", "Cliente só vê resultado no final", "Mudanças são caríssimas"],
    quando: "Projetos governamentais, contratos fixos, sistemas embarcados com requisitos estáveis.",
    ref: "Fonte: Sommerville (2011, p. 20)"
  },
  {
    icon: Repeat,
    title: "Modelo Iterativo e Incremental",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    desc: "Implementa pequenas partes entregáveis para feedback mais rápido do cliente.",
    etapas: ["Definição esboço de requisitos", "Atribuir requisitos aos incrementos", "Projetar arquitetura", "Desenvolver incremento", "Validar → Integrar → Implantar"],
    pros: ["Cliente vê resultados parciais", "Permite ajustes a cada incremento"],
    cons: ["Arquitetura pode degradar", "Gerenciamento mais complexo"],
    quando: "Projetos de médio porte onde o cliente quer acompanhar o progresso.",
    ref: "Fonte: Sommerville (2011, p. 31)"
  },
  {
    icon: RefreshCw,
    title: "Modelo em Espiral",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    desc: "Similar ao iterativo, mas com análise de riscos explícita em cada iteração.",
    etapas: ["Definir objetivos e restrições", "Avaliar riscos e alternativas", "Desenvolver e verificar", "Planejar próxima iteração"],
    pros: ["Gestão de riscos integrada", "Flexível para projetos complexos"],
    cons: ["Complexo de gerenciar", "Requer expertise em riscos"],
    quando: "Projetos grandes, inovadores ou com alto risco técnico.",
    ref: "Fonte: Sommerville (2011, p. 33)"
  },
  {
    icon: Zap,
    title: "Métodos Ágeis (2001)",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    desc: "Manifesto Ágil: foco em pessoas, software funcionando, colaboração e adaptação.",
    etapas: ["Sprints curtas (1-4 semanas)", "Entregas frequentes", "Feedback contínuo do cliente", "Retrospectivas de melhoria"],
    pros: ["Adaptação a mudanças", "Cliente no centro", "Entregas rápidas"],
    cons: ["Exige maturidade da equipe", "Documentação pode ser insuficiente"],
    quando: "Startups, squads de produto, times de inovação, projetos com requisitos mutáveis.",
    ref: "Beck et al. (2001) – Manifesto Ágil"
  },
];

const manifestoValues = [
  { left: "Indivíduos e interações", right: "Processos e ferramentas" },
  { left: "Software em funcionamento", right: "Documentação abrangente" },
  { left: "Colaboração com o cliente", right: "Negociação de contratos" },
  { left: "Responder a mudanças", right: "Seguir um plano" },
];

const EvolucaoSection = () => {
  return (
    <section id="evolucao" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🔄 Evolução do <span className="text-emerald-400">Desenvolvimento de Software</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            As principais evoluções podem ser classificadas em dois grupos: <strong>mudanças tecnológicas</strong> (linguagens e paradigmas) 
            e <strong>mudanças processuais</strong> (como as equipes se organizam).
          </p>
        </motion.div>

        {/* Mudanças Tecnológicas — Linguagens */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Mudanças Tecnológicas — Linguagens</h3>
          </div>
          <div className="space-y-3">
            {linguagens.map((lang, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border">
                  <div className="shrink-0 text-center w-16">
                    <span className="font-black text-blue-400">{lang.era}</span>
                    <p className="text-[10px] text-muted-foreground mt-1">{lang.tipo}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{lang.nome}</h4>
                    <p className="text-sm text-muted-foreground">{lang.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Paradigmas */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Paradigmas de Programação</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Um <strong>paradigma</strong> é a forma como um sistema é construído e seu desenvolvimento é organizado. Os dois mais importantes:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {paradigmas.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <Card className={`h-full bg-card/50 ${p.border}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`p-1.5 rounded ${p.bg}`}>
                        <p.icon className={`w-4 h-4 ${p.color}`} />
                      </div>
                      <h4 className={`font-bold ${p.color}`}>{p.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                    <div className="space-y-2">
                      {p.items.map((item, j) => (
                        <div key={j} className="p-3 rounded-lg bg-background/50 border border-border">
                          <p className="font-semibold text-foreground text-sm">{item.nome}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                          <p className="text-xs text-emerald-400 mt-1 italic">Ex: {item.ex}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-purple-400">📝 Exemplo da calculadora (Abílio, 2017):</strong> Ao programar uma calculadora, 
              se o único fluxo é receber dois números, somar e mostrar o resultado → <strong>sequência</strong>. Se inserir a opção de 
              somar ou subtrair → <strong>seleção</strong>. Se perguntar ao usuário se deseja fazer novamente → <strong>iteração</strong>.
            </p>
          </div>
        </motion.div>

        {/* Mudanças de Processo */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <RefreshCw className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Mudanças de Processo — Modelos de Ciclo de Vida</h3>
          </div>
          <div className="space-y-6">
            {modelos.map((modelo, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={modelo.bg + " p-1.5 rounded"}>
                        <modelo.icon className={`w-4 h-4 ${modelo.color}`} />
                      </div>
                      <h4 className={`font-bold text-lg ${modelo.color}`}>{modelo.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{modelo.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {modelo.etapas.map((etapa, j) => (
                        <span key={j} className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-background/50 border border-border text-foreground">
                          {j > 0 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
                          {etapa}
                        </span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                        <p className="font-semibold text-emerald-400 text-xs mb-1">✅ Vantagens</p>
                        {modelo.pros.map((p, j) => (
                          <p key={j} className="text-xs text-muted-foreground">• {p}</p>
                        ))}
                      </div>
                      <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                        <p className="font-semibold text-red-400 text-xs mb-1">❌ Limitações</p>
                        {modelo.cons.map((c, j) => (
                          <p key={j} className="text-xs text-muted-foreground">• {c}</p>
                        ))}
                      </div>
                      <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                        <p className="font-semibold text-amber-400 text-xs mb-1">🏢 Quando usar</p>
                        <p className="text-xs text-muted-foreground">{modelo.quando}</p>
                        <p className="text-[10px] text-muted-foreground mt-2 italic">{modelo.ref}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Manifesto Ágil */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-emerald-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-foreground">Manifesto Ágil (2001)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Em 2001, 17 profissionais de TI lançaram o <strong>Manifesto Ágil</strong>. Seus 4 valores revolucionaram a indústria:
              </p>
              <div className="space-y-2">
                {manifestoValues.map((v, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border">
                    <span className="text-emerald-400 font-bold text-sm flex-1 text-right">{v.left}</span>
                    <span className="text-muted-foreground text-xs shrink-0">mais que</span>
                    <span className="text-muted-foreground text-sm flex-1">{v.right}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                "Mesmo havendo valor nos itens à direita, valorizamos mais os itens à esquerda." — Beck et al. (2001)
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EvolucaoSection;
