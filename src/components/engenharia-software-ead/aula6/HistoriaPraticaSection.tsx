import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hammer, ArrowDown, CheckCircle2, XCircle, MessageSquare, ClipboardList, Eye } from "lucide-react";

type Exemplo = {
  id: string;
  tecnica: string;
  icon: typeof MessageSquare;
  contexto: string;
  evidencia: { tipo: string; texto: string }[];
  necessidade: string;
  persona: string;
  ruim: string;
  boa: { como: string; quero: string; para: string };
  criterios: string[];
  gherkin: string;
  invest: string[];
  prioridade: string;
  pontos: string;
};

const exemplos: Exemplo[] = [
  {
    id: "entrevista",
    tecnica: "Entrevista",
    icon: MessageSquare,
    contexto: "Clínica Vida+ — entrevista semiestruturada de 40 min com a recepcionista Marta (8 anos na função).",
    evidencia: [
      { tipo: "Pergunta", texto: "“Qual é a parte mais demorada do seu dia?”" },
      { tipo: "Resposta", texto: "“Ligar para cada paciente confirmando a consulta de amanhã. São uns 60 telefonemas e metade não atende.”" },
      { tipo: "Sondagem", texto: "“E o que acontece quando ninguém confirma?”" },
      { tipo: "Resposta", texto: "“O horário fica vazio. Perdemos uns 15% das consultas por falta.”" },
    ],
    necessidade: "Reduzir faltas (no-show) sem depender de ligações manuais.",
    persona: "Marta, recepcionista, 42 anos, usa WhatsApp no celular, pouca paciência para sistemas complexos.",
    ruim: "O sistema deve mandar mensagens.",
    boa: {
      como: "recepcionista da clínica",
      quero: "que o sistema envie automaticamente um lembrete por WhatsApp 24 h antes de cada consulta, com opção de confirmar ou cancelar",
      para: "reduzir as faltas e liberar meu tempo das ligações de confirmação",
    },
    criterios: [
      "Lembrete enviado entre 23 h e 25 h antes do horário agendado.",
      "Paciente responde 1 (confirmar) ou 2 (cancelar); o status da consulta é atualizado.",
      "Cancelamento libera o horário na agenda imediatamente.",
      "Recepção vê no painel quem não respondeu até 12 h antes.",
    ],
    gherkin: `Funcionalidade: Lembrete automático de consulta

Cenário: Paciente confirma pelo WhatsApp
  Dado que João tem consulta amanhã às 14:00
  E o telefone dele está cadastrado
  Quando faltarem 24 horas para a consulta
  Então o sistema envia o lembrete por WhatsApp
  E ao responder "1" o status muda para "Confirmada"

Cenário: Paciente cancela
  Dado que João recebeu o lembrete
  Quando ele responde "2"
  Então a consulta fica "Cancelada"
  E o horário das 14:00 volta a ficar livre na agenda`,
    invest: ["Independente: não depende de outra história.", "Negociável: o canal (WhatsApp/SMS) pode mudar.", "Valiosa: atinge a dor de 15% de faltas.", "Estimável: integração conhecida.", "Pequena: cabe em 1 sprint.", "Testável: critérios objetivos."],
    prioridade: "Must have (MoSCoW)",
    pontos: "5 pontos",
  },
  {
    id: "questionario",
    tecnica: "Questionário",
    icon: ClipboardList,
    contexto: "Clínica Vida+ — formulário on-line respondido por 312 pacientes (escala Likert + perguntas abertas).",
    evidencia: [
      { tipo: "Pergunta fechada", texto: "“Qual o canal preferido para marcar consulta?” → 68% aplicativo/site, 22% telefone, 10% presencial." },
      { tipo: "Pergunta Likert", texto: "“Marcar consulta hoje é fácil” → média 2,1 de 5." },
      { tipo: "Pergunta aberta", texto: "“Nunca consigo falar no telefone no horário de almoço, que é quando eu posso.” (citado por 41 pacientes)" },
    ],
    necessidade: "Permitir agendamento fora do horário comercial, sem telefone.",
    persona: "Carla, 29 anos, analista, trabalha das 8h às 18h, resolve tudo pelo celular.",
    ruim: "Fazer um aplicativo de agendamento completo com tudo.",
    boa: {
      como: "paciente que trabalha em horário comercial",
      quero: "ver os horários livres por especialidade e agendar uma consulta pelo celular a qualquer hora",
      para: "não depender de ligar para a clínica no meu horário de trabalho",
    },
    criterios: [
      "Mostra apenas horários livres dos próximos 30 dias.",
      "Filtro por especialidade e por médico.",
      "Agendamento concluído em no máximo 3 toques após o login.",
      "Paciente recebe comprovante por e-mail.",
    ],
    gherkin: `Funcionalidade: Agendamento on-line

Cenário: Agendar horário disponível
  Dado que Carla está logada
  E escolheu "Dermatologia"
  Quando seleciona o horário livre de 20/11 às 12:30
  E confirma o agendamento
  Então a consulta aparece em "Minhas consultas"
  E ela recebe o comprovante por e-mail

Cenário: Horário ocupado no mesmo instante
  Dado que outro paciente reservou 20/11 às 12:30
  Quando Carla tenta confirmar esse horário
  Então o sistema avisa "Horário indisponível"
  E sugere os 3 horários livres mais próximos`,
    invest: ["Independente do lembrete.", "Negociável: limite de 30 dias pode mudar.", "Valiosa: 68% preferem esse canal.", "Estimável: telas definidas.", "Pequena: sem pagamento nesta versão.", "Testável: 3 toques, 30 dias."],
    prioridade: "Must have (MoSCoW)",
    pontos: "8 pontos",
  },
  {
    id: "observacao",
    tecnica: "Observação",
    icon: Eye,
    contexto: "Clínica Vida+ — observação passiva de 2 turnos na triagem de enfermagem (técnica ‘shadowing’).",
    evidencia: [
      { tipo: "Observado", texto: "A enfermeira anota pressão e peso num papel e depois digita tudo de novo no sistema (média de 3 min por paciente)." },
      { tipo: "Observado", texto: "Em 4 de 27 atendimentos o papel se perdeu ou houve erro de digitação." },
      { tipo: "Dito vs. feito", texto: "Na entrevista ela disse “o sistema funciona bem” — a observação revelou o retrabalho que ela não percebia." },
    ],
    necessidade: "Registrar sinais vitais uma única vez, no momento da triagem.",
    persona: "Paulo, técnico de enfermagem, 35 anos, atende em pé, mãos ocupadas, usa tablet da clínica.",
    ruim: "Melhorar a triagem.",
    boa: {
      como: "técnico de enfermagem na triagem",
      quero: "registrar pressão, peso, temperatura e saturação direto no tablet, com campos grandes e valores sugeridos",
      para: "eliminar a digitação em dobro e os erros de transcrição",
    },
    criterios: [
      "Formulário com no máximo 4 campos numéricos em uma tela.",
      "Valores fora da faixa normal (ex.: PA ≥ 140/90) ficam destacados em alerta.",
      "Dados aparecem no prontuário do médico em até 5 segundos.",
      "Funciona sem internet e sincroniza quando a conexão voltar.",
    ],
    gherkin: `Funcionalidade: Registro de sinais vitais

Cenário: Registro com valor de alerta
  Dado que Paulo abriu a triagem do paciente Ana
  Quando informa pressão 160/100
  Então o campo fica destacado como "Alerta"
  E o médico vê o aviso no prontuário

Cenário: Sem conexão
  Dado que o tablet está sem internet
  Quando Paulo salva os sinais vitais
  Então os dados ficam guardados no aparelho
  E são enviados automaticamente quando a conexão voltar`,
    invest: ["Independente do agendamento.", "Negociável: modo off-line pode virar outra história.", "Valiosa: 3 min economizados por paciente.", "Estimável.", "Pequena (se o off-line for separado).", "Testável: faixas e tempo definidos."],
    prioridade: "Should have (MoSCoW)",
    pontos: "5 pontos (+3 se incluir off-line)",
  },
];

const passos = [
  "Evidência bruta (fala, resposta, observação)",
  "Necessidade / dor identificada",
  "Persona (quem sente a dor)",
  "História: Como… Quero… Para…",
  "Critérios de aceite + Gherkin",
  "Checagem INVEST, prioridade e estimativa",
];

const HistoriaPraticaSection = () => {
  const [tab, setTab] = useState("entrevista");
  return (
    <section id="pratica-hu" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            <Hammer className="w-4 h-4" /> Prática
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Da Elicitação à História de Usuário</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Três exemplos reais de como transformar o que foi coletado em uma entrevista, um questionário e uma observação
            em histórias de usuário prontas para o backlog — usando o caso da Clínica Vida+.
          </p>
        </motion.div>

        <Card className="bg-card/50 border-border mb-10">
          <CardContent className="p-6">
            <h3 className="font-bold text-foreground mb-4">🧭 Roteiro de construção (6 passos)</h3>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {passos.map((p, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/15">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-sm text-muted-foreground">{p}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="grid grid-cols-3 w-full mb-6 h-auto">
            {exemplos.map((e) => (
              <TabsTrigger key={e.id} value={e.id} className="gap-2 py-2">
                <e.icon className="w-4 h-4" /> {e.tecnica}
              </TabsTrigger>
            ))}
          </TabsList>

          {exemplos.map((e) => (
            <TabsContent key={e.id} value={e.id} className="space-y-4">
              <Card className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Passo 1 · Evidência coletada</p>
                  <p className="text-sm text-muted-foreground mb-4 italic">{e.contexto}</p>
                  <ul className="space-y-2">
                    {e.evidencia.map((ev, i) => (
                      <li key={i} className="text-sm"><strong className="text-foreground">{ev.tipo}:</strong> <span className="text-muted-foreground">{ev.texto}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <ArrowDown className="mx-auto w-5 h-5 text-primary" />
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-accent/5 border-accent/20"><CardContent className="p-5">
                  <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">Passo 2 · Necessidade</p>
                  <p className="text-sm text-foreground">{e.necessidade}</p>
                </CardContent></Card>
                <Card className="bg-accent/5 border-accent/20"><CardContent className="p-5">
                  <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">Passo 3 · Persona</p>
                  <p className="text-sm text-foreground">{e.persona}</p>
                </CardContent></Card>
              </div>
              <ArrowDown className="mx-auto w-5 h-5 text-primary" />
              <Card className="bg-card/50 border-border"><CardContent className="p-6 space-y-4">
                <p className="text-xs uppercase tracking-wide text-primary font-semibold">Passo 4 · Escrevendo a história</p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30">
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm"><strong className="text-foreground">Versão fraca:</strong> <span className="text-muted-foreground">“{e.ruim}” — sem usuário, sem valor, impossível testar.</span></p>
                </div>
                <div className="flex items-start gap-2 p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>Como</strong> {e.boa.como},<br />
                    <strong>quero</strong> {e.boa.quero},<br />
                    <strong>para</strong> {e.boa.para}.
                  </p>
                </div>
              </CardContent></Card>
              <ArrowDown className="mx-auto w-5 h-5 text-primary" />
              <div className="grid lg:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border"><CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-3">Passo 5 · Critérios de aceite</p>
                  <ul className="space-y-2">
                    {e.criterios.map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{c}</li>
                    ))}
                  </ul>
                </CardContent></Card>
                <Card className="bg-card/50 border-border"><CardContent className="p-6">
                  <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-3">Passo 5 · Cenários em Gherkin</p>
                  <pre className="text-xs bg-muted/50 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap text-foreground">{e.gherkin}</pre>
                </CardContent></Card>
              </div>
              <ArrowDown className="mx-auto w-5 h-5 text-primary" />
              <Card className="bg-accent/5 border-accent/20"><CardContent className="p-6">
                <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-3">Passo 6 · Checagem INVEST, prioridade e estimativa</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                  {e.invest.map((v, i) => <li key={i} className="text-sm text-muted-foreground">✔ {v}</li>)}
                </ul>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/15 text-primary font-medium">{e.prioridade}</span>
                  <span className="px-3 py-1 rounded-full bg-accent/15 text-accent font-medium">Estimativa: {e.pontos}</span>
                </div>
              </CardContent></Card>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="bg-primary/5 border-primary/20 mt-10">
          <CardContent className="p-6">
            <h3 className="font-bold text-foreground mb-3">✍️ Agora é sua vez</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Na entrevista com o médico Dr. Ricardo, ele disse: <em>“Perco tempo procurando exames antigos do paciente; às vezes estão em
              papel, às vezes em PDF no e-mail.”</em> Siga os 6 passos e escreva a história completa.
            </p>
            <details className="text-sm">
              <summary className="cursor-pointer text-primary font-medium">Ver uma resposta possível</summary>
              <div className="mt-3 p-4 rounded-lg bg-card border border-border text-muted-foreground space-y-2">
                <p><strong className="text-foreground">Como</strong> médico, <strong className="text-foreground">quero</strong> ver todos os exames do paciente em ordem cronológica dentro do prontuário, <strong className="text-foreground">para</strong> decidir o tratamento sem procurar em papéis e e-mails.</p>
                <p><strong className="text-foreground">Critérios:</strong> exames listados do mais recente ao mais antigo; filtro por tipo; abre o PDF em até 2 s; recepção anexa exames externos.</p>
                <pre className="text-xs bg-muted/50 rounded p-3 whitespace-pre-wrap text-foreground">{`Dado que a paciente Ana tem 5 exames anexados
Quando o Dr. Ricardo abre o prontuário dela
Então vê os 5 exames do mais recente ao mais antigo`}</pre>
              </div>
            </details>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HistoriaPraticaSection;
