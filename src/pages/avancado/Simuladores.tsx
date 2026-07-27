import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, RotateCcw, Trophy } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FKEYS, readLS, writeLS } from "@/lib/ferramentas-store";

type Opcao = { texto: string; pontos: number; feedback: string };
type Cenario = { id: string; area: string; contexto: string; pergunta: string; opcoes: Opcao[] };

const CENARIOS: Cenario[] = [
  {
    id: "req-1", area: "Requisitos",
    contexto: "A cliente pede uma funcionalidade nova na véspera da entrega da sprint, alegando que 'é rapidinho'.",
    pergunta: "Qual a decisão mais alinhada às boas práticas ágeis?",
    opcoes: [
      { texto: "Aceitar e incluir na sprint atual sem alterar o escopo", pontos: 0, feedback: "Compromete o objetivo da sprint e a previsibilidade do time." },
      { texto: "Registrar no Product Backlog e priorizar com a P.O. para a próxima sprint", pontos: 3, feedback: "Correto: protege o Sprint Goal e mantém a transparência." },
      { texto: "Recusar sem registrar", pontos: 1, feedback: "Evita o risco, mas perde informação valiosa de requisito." },
    ],
  },
  {
    id: "req-2", area: "Requisitos",
    contexto: "Dois stakeholders dão versões conflitantes da mesma regra de negócio.",
    pergunta: "Qual técnica resolve melhor o conflito?",
    opcoes: [
      { texto: "Escolher a versão do stakeholder mais influente", pontos: 1, feedback: "Poder não garante corretude do requisito." },
      { texto: "Realizar uma reunião JAD com ambos e registrar a decisão validada", pontos: 3, feedback: "Correto: negociação estruturada com rastreabilidade." },
      { texto: "Implementar as duas versões e decidir depois", pontos: 0, feedback: "Gera retrabalho e ambiguidade no sistema." },
    ],
  },
  {
    id: "proc-1", area: "Processo",
    contexto: "Projeto com requisitos muito instáveis e cliente disponível para feedback semanal.",
    pergunta: "Qual modelo de processo escolher?",
    opcoes: [
      { texto: "Cascata", pontos: 0, feedback: "Exige requisitos estáveis desde o início." },
      { texto: "Scrum com sprints curtas", pontos: 3, feedback: "Correto: entregas incrementais com feedback frequente." },
      { texto: "Modelo V", pontos: 1, feedback: "Forte em verificação, mas rígido para mudanças." },
    ],
  },
  {
    id: "qual-1", area: "Qualidade",
    contexto: "Perto do fim da sprint, faltam testes e o time sugere entregar sem executá-los.",
    pergunta: "Qual decisão preserva a qualidade?",
    opcoes: [
      { texto: "Entregar e testar em produção", pontos: 0, feedback: "Transfere o custo do defeito para o usuário." },
      { texto: "Reduzir o escopo entregue e testar o que ficar pronto", pontos: 3, feedback: "Correto: qualidade não é variável negociável no incremento." },
      { texto: "Entregar e abrir bugs preventivos", pontos: 1, feedback: "Registra o risco, mas não elimina a falha de Definition of Done." },
    ],
  },
  {
    id: "ux-1", area: "UX",
    contexto: "O teste de usabilidade mostra taxa de sucesso de 45% em uma tarefa crítica.",
    pergunta: "Qual o próximo passo mais adequado?",
    opcoes: [
      { texto: "Aumentar o número de participantes até melhorar o número", pontos: 0, feedback: "Manipular a amostra não resolve o problema de interface." },
      { texto: "Analisar os erros por persona, redesenhar o fluxo e reavaliar", pontos: 3, feedback: "Correto: ciclo iterativo de avaliação DECIDE." },
      { texto: "Adicionar um tutorial explicando a tela", pontos: 1, feedback: "Paliativo: documentação não corrige má usabilidade." },
    ],
  },
  {
    id: "gp-1", area: "Gestão",
    contexto: "A velocidade do time caiu 40% e o burndown está acima da linha ideal há 4 dias.",
    pergunta: "O que fazer primeiro?",
    opcoes: [
      { texto: "Adicionar desenvolvedores ao time imediatamente", pontos: 0, feedback: "Lei de Brooks: adicionar pessoas a um projeto atrasado o atrasa mais." },
      { texto: "Levantar impedimentos na daily e replanejar o escopo da sprint", pontos: 3, feedback: "Correto: diagnóstico antes de ação corretiva." },
      { texto: "Aumentar a jornada do time", pontos: 1, feedback: "Insustentável e contrário ao princípio de ritmo sustentável." },
    ],
  },
];

const Simuladores = () => {
  const [respostas, setRespostas] = useState<Record<string, number>>({});
  const [historico, setHistorico] = useState<any[]>([]);

  useEffect(() => setHistorico(readLS<any[]>(FKEYS.simuladores, [])), []);

  const maxPontos = CENARIOS.length * 3;
  const pontos = useMemo(() => CENARIOS.reduce((a, c) => {
    const i = respostas[c.id];
    return a + (i === undefined ? 0 : c.opcoes[i].pontos);
  }, 0), [respostas]);
  const respondidos = Object.keys(respostas).length;
  const percentual = Math.round((pontos / maxPontos) * 100);
  const nivel = percentual >= 85 ? "Decisor Sênior" : percentual >= 60 ? "Decisor Pleno" : percentual >= 35 ? "Decisor Júnior" : "Em formação";

  const finalizar = () => {
    const novo = [{ data: new Date().toISOString(), pontos, maxPontos, percentual, nivel }, ...historico];
    setHistorico(novo);
    writeLS(FKEYS.simuladores, novo);
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Gamepad2 className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Simuladores de Decisões</h1>
            <p className="text-sm text-muted-foreground">Cenários reais de projeto: escolha e receba feedback imediato sobre a decisão.</p>
          </div>
        </motion.header>

        <Card className="p-5 mb-6 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{respondidos}/{CENARIOS.length} cenários • {pontos}/{maxPontos} pontos</span>
            <Badge className="bg-primary/15 text-primary">{nivel}</Badge>
          </div>
          <Progress value={percentual} />
          <div className="flex gap-2 pt-1">
            <Button size="sm" variant="outline" onClick={() => setRespostas({})}><RotateCcw className="w-3 h-3 mr-1" /> Reiniciar</Button>
            <Button size="sm" onClick={finalizar} disabled={respondidos < CENARIOS.length}><Trophy className="w-3 h-3 mr-1" /> Registrar resultado</Button>
          </div>
        </Card>

        <div className="space-y-4">
          {CENARIOS.map((c, idx) => {
            const escolhida = respostas[c.id];
            return (
              <Card key={c.id} className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Cenário {idx + 1}</Badge>
                  <Badge variant="outline">{c.area}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{c.contexto}</p>
                <h3 className="font-semibold">{c.pergunta}</h3>
                <div className="space-y-2">
                  {c.opcoes.map((o, i) => {
                    const ativa = escolhida === i;
                    const cor = !ativa ? "border-border hover:border-primary/50"
                      : o.pontos === 3 ? "border-emerald-500 bg-emerald-500/10"
                      : o.pontos === 0 ? "border-red-500 bg-red-500/10" : "border-amber-500 bg-amber-500/10";
                    return (
                      <button key={i} onClick={() => setRespostas({ ...respostas, [c.id]: i })}
                        className={`w-full text-left rounded-lg border p-3 text-sm transition-colors ${cor}`}>
                        <span className="font-medium">{o.texto}</span>
                        {ativa && <p className="text-xs mt-1 text-muted-foreground">{o.feedback} ({o.pontos} pts)</p>}
                      </button>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        {!!historico.length && (
          <Card className="p-6 mt-6">
            <h2 className="text-lg font-semibold mb-3">Tentativas anteriores</h2>
            <div className="space-y-1 text-sm">
              {historico.slice(0, 5).map((h, i) => (
                <div key={i} className="flex justify-between border-b border-border pb-1">
                  <span className="text-muted-foreground">{new Date(h.data).toLocaleString("pt-BR")}</span>
                  <span>{h.pontos}/{h.maxPontos} — {h.nivel}</span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </main>
  );
};

export default Simuladores;
