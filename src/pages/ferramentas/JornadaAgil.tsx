import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock, CheckCircle2, Users, FileText, Shapes, BookOpen, Trophy, RotateCcw, ArrowLeft } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import MermaidDiagram from "@/components/MermaidDiagram";

type Progresso = { concluidas: string[]; pontos: number };
const KEY = "jornada-agil-progresso";
const ler = (): Progresso => {
  try { return JSON.parse(localStorage.getItem(KEY) || "") as Progresso; } catch { return { concluidas: [], pontos: 0 }; }
};

const ESTACOES = [
  { id: "cerimonias", nome: "Cerimônias Ágeis", icon: Users, badge: "Mestre das Cerimônias", desc: "Daily, Planning, Review e Retrospectiva em diálogos." },
  { id: "stories", nome: "User Stories", icon: FileText, badge: "Contador de Histórias", desc: "Escreva histórias com critérios de aceite." },
  { id: "uml", nome: "Diagramas UML", icon: Shapes, badge: "Arquiteto UML", desc: "Casos de Uso, Classes, Sequência e Atividades." },
  { id: "docs", nome: "Documentação", icon: BookOpen, badge: "Guardião da Documentação", desc: "Monte o documento de projeto e baixe em PDF." },
];

type Fala = { quem: string; texto: string };
type Cena = { titulo: string; falas: Fala[]; diagrama?: string; pergunta: string; opcoes: string[]; correta: number; explica: string };

const CENAS_PADRAO: Cena[] = [
  {
    titulo: "Daily Scrum",
    falas: [
      { quem: "Ana (Dev)", texto: "Bom dia! Ontem terminei a tela de login." },
      { quem: "Bruno (Dev)", texto: "Vou aproveitar e mostrar em detalhes como resolvi o bug do banco, leva uns 20 min..." },
    ],
    pergunta: "Como Scrum Master, o que você faz?",
    opcoes: [
      "Deixa o Bruno explicar tudo, é importante",
      "Sugere discutir o detalhe técnico após a Daily, mantendo o timebox de 15 min",
      "Cancela a Daily e marca outra reunião",
      "Pede para o Product Owner decidir",
    ],
    correta: 1,
    explica: "A Daily tem timebox de 15 minutos e foca em inspecionar o progresso rumo à Meta da Sprint. Detalhes técnicos vão para conversas posteriores.",
  },
  {
    titulo: "Sprint Planning",
    falas: [
      { quem: "Carla (PO)", texto: "Priorizei o backlog. O item mais importante é o agendamento online." },
      { quem: "Diego (Dev)", texto: "Nossa velocidade média é 20 pontos. Os itens do topo somam 34." },
    ],
    pergunta: "Qual a melhor decisão da equipe?",
    opcoes: [
      "Aceitar os 34 pontos para agradar o PO",
      "Os Developers selecionam o que cabe (~20 pts) e definem juntos a Meta da Sprint",
      "O Scrum Master escolhe os itens",
      "Deixar a Sprint sem meta definida",
    ],
    correta: 1,
    explica: "Na Planning, os Developers escolhem quanto trabalho cabem na Sprint, e o time Scrum colabora para definir a Meta da Sprint.",
  },
  {
    titulo: "Sprint Review",
    falas: [
      { quem: "Carla (PO)", texto: "Os stakeholders chegaram para ver o incremento." },
      { quem: "Stakeholder", texto: "Gostei, mas o relatório precisa de filtro por data." },
    ],
    pergunta: "O que acontece com esse feedback?",
    opcoes: [
      "É ignorado até a próxima release",
      "O time implementa agora mesmo, durante a Review",
      "O PO avalia e pode adicioná-lo/ajustá-lo no Product Backlog",
      "Vira um bug crítico automaticamente",
    ],
    correta: 2,
    explica: "A Review inspeciona o incremento com stakeholders; o feedback ajusta o Product Backlog, gerido pelo PO.",
  },
  {
    titulo: "Retrospectiva",
    falas: [
      { quem: "Eva (Dev)", texto: "Tivemos muitos retrabalhos por requisitos mal entendidos." },
      { quem: "Scrum Master", texto: "Vamos pensar em como melhorar nosso processo." },
    ],
    pergunta: "Qual é o resultado esperado da Retrospectiva?",
    opcoes: [
      "Apontar culpados pelos retrabalhos",
      "Apresentar o produto ao cliente",
      "Identificar melhorias acionáveis no processo, como refinar critérios de aceite",
      "Reestimar todo o backlog",
    ],
    correta: 2,
    explica: "A Retrospectiva busca melhorar qualidade e eficácia: o time identifica mudanças úteis e se compromete com elas.",
  },
];


const CENAS_STORIES: Cena[] = [
  { titulo: "Formato da história", falas: [{ quem: "Carla (PO)", texto: "Os tutores reclamam que precisam ligar para marcar consulta." }],
    pergunta: "Qual é a user story bem escrita?", opcoes: [
      "Criar tela de agendamento com banco PostgreSQL",
      "Como tutor, quero agendar consultas online, para não precisar ligar para a clínica",
      "O sistema deve ser rápido e bonito",
      "Agendamento: prioridade alta",
    ], correta: 1, explica: "Formato Como [persona], quero [ação], para [benefício]: foca no valor para o usuário, não na solução técnica." },
  { titulo: "INVEST — Small", falas: [{ quem: "Diego (Dev)", texto: "A história 'Como gestor, quero um sistema completo de gestão da clínica' vale 89 pontos..." }],
    pergunta: "Qual critério INVEST ela viola e o que fazer?", opcoes: [
      "Valiosa — remover do backlog",
      "Small — quebrar em histórias menores que caibam em uma sprint",
      "Testável — escrever código primeiro",
      "Nenhum, está ótima",
    ], correta: 1, explica: "É um épico. Histórias devem ser pequenas (Small) o suficiente para caber numa sprint; divida por fluxo ou funcionalidade." },
  { titulo: "Critério de aceite (Gherkin)", falas: [{ quem: "Eva (QA)", texto: "Preciso de um critério testável para o agendamento." }],
    pergunta: "Qual critério segue o formato Gherkin corretamente?", opcoes: [
      "O agendamento deve funcionar bem",
      "Testar o agendamento várias vezes",
      "Dado que o horário 14h está livre, quando o tutor confirmar o agendamento, então o horário fica reservado e ele recebe confirmação",
      "Quando possível, agendar",
    ], correta: 2, explica: "Dado (contexto) / Quando (ação) / Então (resultado observável) torna o critério verificável e objetivo." },
  { titulo: "Priorização MoSCoW", falas: [{ quem: "Carla (PO)", texto: "Para o MVP temos: agendamento, login, tema escuro e chat com veterinário." }],
    pergunta: "Qual item é mais provavelmente 'Could have'?", opcoes: ["Agendamento online", "Login do tutor", "Tema escuro", "Cadastro do animal"],
    correta: 2, explica: "Tema escuro é desejável, mas não essencial para o MVP. Must = sem ele o produto não funciona." },
];

const CENAS_UML: Cena[] = [
  { titulo: "Casos de Uso", falas: [{ quem: "Arquiteta", texto: "Veja este diagrama da clínica." }],
    diagrama: "flowchart LR\n  t((Tutor))\n  subgraph Sistema\n    a([Agendar consulta])\n    b([Autenticar])\n  end\n  t --> a\n  a -. include .-> b",
    pergunta: "O que significa a relação 'include' entre Agendar e Autenticar?", opcoes: [
      "Autenticar é opcional",
      "Agendar sempre executa Autenticar",
      "Autenticar é um ator",
      "Agendar herda de Autenticar",
    ], correta: 1, explica: "<<include>> indica comportamento obrigatório reutilizado; <<extend>> é que indica comportamento opcional/condicional." },
  { titulo: "Diagrama de Classes", falas: [{ quem: "Diego (Dev)", texto: "Um Tutor pode ter vários Animais; cada Animal tem um único Tutor." }],
    diagrama: "classDiagram\n  class Tutor { +nome }\n  class Animal { +especie }\n  Tutor \"1\" --> \"*\" Animal : possui",
    pergunta: "Qual é a multiplicidade correta?", opcoes: ["1 para 1", "N para N", "1 para * (um para muitos)", "0 para 0"],
    correta: 2, explica: "Um tutor (1) possui vários animais (*). A multiplicidade fica em cada ponta da associação." },
  { titulo: "Diagrama de Sequência", falas: [{ quem: "Eva (QA)", texto: "Quero mostrar a ordem das mensagens entre usuário, front-end e API no tempo." }],
    pergunta: "Qual diagrama UML é mais adequado?", opcoes: ["Diagrama de Classes", "Diagrama de Sequência", "Diagrama de Implantação", "Diagrama de Pacotes"],
    correta: 1, explica: "O Diagrama de Sequência é comportamental e mostra a troca de mensagens entre objetos ao longo do tempo (linhas de vida)." },
  { titulo: "Diagrama de Atividades", falas: [{ quem: "Arquiteta", texto: "Analise o fluxo." }],
    diagrama: "flowchart TD\n  A([Início]) --> B[Receber pedido]\n  B --> C{Horário livre?}\n  C -- Sim --> D[Confirmar]\n  C -- Não --> E[Sugerir outro]\n  E --> B\n  D --> F([Fim])",
    pergunta: "O losango 'Horário livre?' representa:", opcoes: ["Uma entidade", "Um nó de decisão", "Um ator", "Uma classe abstrata"],
    correta: 1, explica: "No Diagrama de Atividades, o losango é um nó de decisão com fluxos alternativos guardados por condições." },
];

function EstacaoCerimonias({ onConcluir, onVoltar, cenas: CENAS = CENAS_PADRAO, sprint = 1 }: { onConcluir: (pts: number) => void; onVoltar: () => void; cenas?: Cena[]; sprint?: number }) {
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [acertos, setAcertos] = useState(0);
  const [fim, setFim] = useState(false);
  const cena = CENAS[i];

  const responder = (k: number) => {
    if (escolha !== null) return;
    setEscolha(k);
    if (k === cena.correta) setAcertos((a) => a + 1);
  };
  const proxima = () => {
    if (i + 1 < CENAS.length) { setI(i + 1); setEscolha(null); } else setFim(true);
  };

  if (fim) {
    const aprovado = acertos >= 3;
    return (
      <Card className="p-8 text-center space-y-4">
        <Trophy className="w-14 h-14 mx-auto text-primary" />
        <h2 className="text-2xl font-bold">{aprovado ? `Sprint ${sprint} concluída!` : "Sprint não fechada"}</h2>
        <p className="text-muted-foreground">Você acertou {acertos} de {CENAS.length} cenas.{!aprovado && " São necessários 3 acertos."}</p>
        <div className="flex gap-2 justify-center">
          {aprovado ? (
            <Button onClick={() => onConcluir(acertos * 25)}>Receber badge e voltar ao mapa</Button>
          ) : (
            <Button onClick={() => { setI(0); setEscolha(null); setAcertos(0); setFim(false); }}>Tentar novamente</Button>
          )}
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onVoltar}><ArrowLeft className="w-4 h-4 mr-1" /> Mapa</Button>
        <Badge variant="secondary">Cena {i + 1}/{CENAS.length} • {cena.titulo}</Badge>
      </div>
      <Progress value={(i / CENAS.length) * 100} />
      <Card className="p-6 space-y-3">
        {cena.falas.map((f, k) => (
          <motion.div key={i + "-" + k} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: k * 0.3 }}
            className="bg-muted rounded-2xl rounded-tl-none px-4 py-2 max-w-[85%]">
            <p className="text-xs font-semibold text-primary">{f.quem}</p>
            <p>{f.texto}</p>
          </motion.div>
        ))}
        {cena.diagrama && <div className="bg-card border rounded-lg p-3"><MermaidDiagram chart={cena.diagrama} /></div>}
        <p className="font-semibold pt-2">{cena.pergunta}</p>
        <div className="grid gap-2">
          {cena.opcoes.map((o, k) => {
            const estado = escolha === null ? "" : k === cena.correta ? "border-primary bg-primary/10" : k === escolha ? "border-destructive bg-destructive/10" : "opacity-60";
            return (
              <button key={k} onClick={() => responder(k)} className={`text-left border rounded-lg px-4 py-3 transition hover:bg-accent ${estado}`}>
                {o}
              </button>
            );
          })}
        </div>
        {escolha !== null && (
          <div className="border-l-4 border-primary pl-3 text-sm">
            <p className="font-semibold">{escolha === cena.correta ? "Correto!" : "Não é bem isso."}</p>
            <p className="text-muted-foreground">{cena.explica}</p>
            <Button className="mt-3" onClick={proxima}>{i + 1 < CENAS.length ? "Próxima cena" : "Fechar Sprint"}</Button>
          </div>
        )}
      </Card>
    </div>
  );
}

export default function JornadaAgil() {
  const [prog, setProg] = useState<Progresso>(ler);
  const [ativa, setAtiva] = useState<string | null>(null);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(prog)); }, [prog]);

  const concluir = (id: string, pts: number) => {
    setProg((p) => ({ concluidas: p.concluidas.includes(id) ? p.concluidas : [...p.concluidas, id], pontos: p.pontos + pts }));
    setAtiva(null);
  };
  const pct = (prog.concluidas.length / ESTACOES.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="container mx-auto px-4 py-24 max-w-5xl">
        {ativa === "cerimonias" ? (
          <EstacaoCerimonias onVoltar={() => setAtiva(null)} onConcluir={(p) => concluir("cerimonias", p)} />
        ) : ativa === "stories" ? (
          <EstacaoCerimonias key="stories" cenas={CENAS_STORIES} sprint={2} onVoltar={() => setAtiva(null)} onConcluir={(p) => concluir("stories", p)} />
        ) : ativa === "uml" ? (
          <EstacaoCerimonias key="uml" cenas={CENAS_UML} sprint={3} onVoltar={() => setAtiva(null)} onConcluir={(p) => concluir("uml", p)} />
        ) : (
          <>
            <header className="mb-8 space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold">Jornada Ágil</h1>
              <p className="text-muted-foreground">Percorra as estações: cada uma concluída é uma sprint fechada.</p>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{prog.concluidas.length} de {ESTACOES.length} sprints concluídas</Badge>
                <Badge variant="secondary">{prog.pontos} pontos</Badge>
                <Button variant="ghost" size="sm" onClick={() => setProg({ concluidas: [], pontos: 0 })}><RotateCcw className="w-4 h-4 mr-1" /> Reiniciar</Button>
              </div>
              <Progress value={pct} />
            </header>
            <div className="grid md:grid-cols-2 gap-4">
              {ESTACOES.map((e, idx) => {
                const feita = prog.concluidas.includes(e.id);
                const liberada = idx === 0 || prog.concluidas.includes(ESTACOES[idx - 1].id);
                const disponivel = e.id !== "docs";
                const Icon = e.icon;
                return (
                  <motion.div key={e.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                    <Card className={`p-6 h-full space-y-3 ${!liberada ? "opacity-50" : ""}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Sprint {idx + 1}</span>
                        {feita ? <CheckCircle2 className="text-primary" /> : !liberada ? <Lock className="w-5 h-5" /> : null}
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon className="w-8 h-8 text-primary" />
                        <h2 className="text-xl font-semibold">{e.nome}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground">{e.desc}</p>
                      {feita && <Badge variant="outline"><Trophy className="w-3 h-3 mr-1" /> {e.badge}</Badge>}
                      <Button className="w-full" disabled={!liberada || !disponivel} onClick={() => setAtiva(e.id)}>
                        {!liberada ? "Bloqueada" : !disponivel ? "Em breve" : feita ? "Jogar novamente" : "Entrar na estação"}
                      </Button>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
