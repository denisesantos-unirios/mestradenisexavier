import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle2, ClipboardList, Users, Lightbulb, Camera, Trophy, MessageSquare, BookOpen } from "lucide-react";

const tarefasJudy = [
  "Estabelecer um padrão para escrever as histórias",
  "Identificar todos os stakeholders do projeto",
  "Fazer um workshop de entendimento dos requisitos",
  "Documentar as histórias de usuário",
];

const lembretes = [
  "As histórias são escritas na forma de uma frase simples, que contém QUEM + O QUE + POR QUÊ.",
  "Só os cartões ou Post-it® não são suficientes; é preciso CARTÃO + CONVERSA + CONFIRMAÇÃO.",
  "O livro de Jeff Patton (User Story Mapping) tem muitas dicas úteis para aproveitar.",
];

const personas = [
  {
    nome: "Claire, 30 anos",
    perfil: "Casada, sem filhos, advogada",
    descricao: "Realiza a maior parte das tarefas do dia a dia usando a tecnologia. Seu smartphone é muito usado para atividades pessoais e profissionais.",
    desejo: "Deseja poder ter acesso a todas as funcionalidades referentes à sua CNH e aos dois veículos da família.",
    stories: [
      "Como motorista, eu quero poder utilizar a CNH digital para evitar carregar documentos de papel.",
      "Eu, como proprietária, quero poder acessar e pagar meu IPVA e licenciamento pelo celular, para evitar filas nos bancos.",
    ],
  },
  {
    nome: "James, 65 anos",
    perfil: "Motorista de aplicativo, casado",
    descricao: "Não tem muita intimidade com a tecnologia. Começou a usar o aplicativo há pouco tempo. Como está na rua o dia todo, às vezes é multado por parar em local proibido.",
    desejo: "Ele quer receber uma notificação quando uma multa for emitida.",
    stories: [
      "Como motorista, eu quero receber um aviso de que uma multa foi emitida para eu não esquecer de pagar.",
      "Como motorista, eu quero poder consultar os pontos na minha CNH para evitar a suspensão da carteira.",
    ],
  },
  {
    nome: "Chris, 18 anos",
    perfil: "Estudante",
    descricao: "Jovem, antenada com a tecnologia, está acostumada com vários tipos de aplicativos diferentes. Acabou de fazer 18 anos e deseja tirar a sua primeira CNH.",
    desejo: "Quer fazer todo o processo da CNH de modo rápido e evitando burocracias.",
    stories: [
      "Como motorista, eu desejo poder fazer todo o processo da CNH pelo celular, de modo a agilizar sua liberação.",
    ],
  },
];

const JudyDetranSection = () => (
  <section id="judy-detran" className="py-20 px-6 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/10 via-background to-cyan-950/10 pointer-events-none" />
    <div className="max-w-6xl mx-auto relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-400 text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" /> Na Prática • Estudo de Caso
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Especificação com <span className="text-fuchsia-400">Histórias de Usuário</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A trajetória de <strong>Judy</strong>, analista de requisitos envolvida na especificação de um aplicativo
          para apoiar o <strong>Detran</strong> em seu relacionamento com motoristas e proprietários de veículos automotores.
          A empresa deseja usar o método ágil <strong>Scrum</strong>.
        </p>
      </motion.div>

      {/* Contexto + Tarefas */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="bg-card/50 border-fuchsia-500/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <UserCircle2 className="w-8 h-8 text-fuchsia-400" />
              <h3 className="text-lg font-bold text-foreground">Quem é a Judy?</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Judy é analista de requisitos e vem desenvolvendo um excelente trabalho usando a abordagem de
              <strong> casos de uso</strong>. Neste momento, ela está envolvida na especificação de um aplicativo
              para apoiar o Detran. Foi encarregada de utilizar <strong>histórias de usuário</strong>,
              pois a empresa deseja adotar Scrum.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-rose-500/5 border-rose-500/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <ClipboardList className="w-7 h-7 text-rose-400" />
              <h3 className="text-lg font-bold text-foreground">Tarefas da Judy</h3>
            </div>
            <ul className="space-y-2">
              {tarefasJudy.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-rose-400 font-bold mt-0.5">›</span>{t}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Lembretes */}
      <Card className="bg-cyan-500/5 border-cyan-500/20 mb-12">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-cyan-400">Lembretes que Judy levou para o workshop</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {lembretes.map((l, i) => (
              <div key={i} className="p-4 rounded-lg bg-background/60 border border-cyan-500/20">
                <p className="text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Judy enviou um exemplo de história de usuário junto com o convite para o workshop, agilizando o processo no dia do evento.
          </p>
        </CardContent>
      </Card>

      {/* Personas + User Stories */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
            <Users className="w-6 h-6 text-fuchsia-400" /> Construção de Personas
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Com a definição das <em>personas</em>, o processo de especificação — principalmente de
            <strong> requisitos não funcionais</strong> — fica mais fácil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {personas.map((p, i) => (
            <Card key={i} className="bg-card/50 border-fuchsia-500/20 flex flex-col">
              <CardContent className="p-5 flex flex-col gap-3 h-full">
                <div>
                  <p className="font-bold text-fuchsia-400 text-sm">{p.nome}</p>
                  <p className="text-xs text-muted-foreground italic">{p.perfil}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.descricao}</p>
                <p className="text-xs text-foreground bg-background/60 p-2 rounded border border-border">
                  <strong className="text-fuchsia-400">Desejo:</strong> {p.desejo}
                </p>
                <div className="mt-auto space-y-2">
                  <p className="text-xs font-semibold text-rose-400 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" /> Histórias de Usuário
                  </p>
                  {p.stories.map((s, j) => (
                    <div key={j} className="text-xs text-muted-foreground p-2 rounded bg-rose-500/5 border border-rose-500/20">
                      {s}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Workshop */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="bg-violet-500/5 border-violet-500/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-violet-400" />
              <h3 className="text-lg font-bold text-foreground">O Workshop de Requisitos</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>Estiveram presentes <strong>coordenadores do Detran</strong>, que conhecem muito bem o negócio.</li>
              <li>Membros do time de desenvolvimento participaram ativamente.</li>
              <li>Foram convidadas pessoas <strong>compatíveis com o perfil das personas</strong>.</li>
              <li>Com as dicas que Judy enviou antecipadamente, os stakeholders foram muito produtivos na definição das histórias.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-amber-500/5 border-amber-500/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Camera className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-foreground">Registro e Repositório</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>Tiraram <strong>fotos do quadro</strong> e dos desenhos de apoio.</li>
              <li>Mantiveram um <strong>repositório</strong> para auxiliar a equipe de desenvolvimento.</li>
              <li>Todos permitiram <strong>gravar o workshop</strong> em áudio e vídeo.</li>
              <li>Os artefatos serviram de base para refinamento posterior das user stories.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Resultado */}
      <Card className="bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 border-fuchsia-500/30">
        <CardContent className="p-8 text-center">
          <Trophy className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">Resultado da Experiência</h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            A experiência da equipe com o workshop de requisitos utilizando histórias de usuário foi
            <strong className="text-fuchsia-400"> muito positiva</strong>. Todos sentiram que a
            <strong> proximidade com os coordenadores do Detran</strong> ajudou a compreender o problema em profundidade.
            <strong className="text-cyan-400"> Todos estão confiantes no sucesso do projeto!</strong>
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default JudyDetranSection;
