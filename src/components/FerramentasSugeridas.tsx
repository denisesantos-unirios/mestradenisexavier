import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Sugestao = { titulo: string; path: string; motivo: string };

const T: Record<string, Sugestao> = {
  historias: { titulo: "Histórias de Usuário", path: "/ferramentas/historias-usuario", motivo: "Escreva histórias no formato Como/Quero/Para com critérios de aceite." },
  backlog: { titulo: "Backlog do Produto", path: "/ferramentas/backlog", motivo: "Priorize itens com MoSCoW e estimativas." },
  kanban: { titulo: "Kanban", path: "/ferramentas/kanban", motivo: "Visualize o fluxo de trabalho e limite o WIP." },
  sprint: { titulo: "Planejamento de Sprint", path: "/ferramentas/sprint-planning", motivo: "Monte a meta da Sprint e selecione os itens." },
  casosUso: { titulo: "Casos de Uso", path: "/ferramentas/casos-de-uso", motivo: "Especifique atores, fluxos principal e alternativos." },
  stakeholders: { titulo: "Mapa de Stakeholders", path: "/ferramentas/stakeholders", motivo: "Classifique poder x interesse antes de elicitar." },
  personas: { titulo: "Personas", path: "/ferramentas/personas", motivo: "Represente os usuários-alvo com metas e frustrações." },
  jornada: { titulo: "Jornada do Usuário", path: "/ferramentas/jornada-usuario", motivo: "Mapeie etapas, emoções e oportunidades." },
  testes: { titulo: "Casos de Teste", path: "/ferramentas/casos-de-teste", motivo: "Derive testes das histórias e casos de uso." },
  bugs: { titulo: "Registro de Bugs", path: "/ferramentas/bugs", motivo: "Documente defeitos com severidade e evidências." },
  heuristica: { titulo: "Avaliação Heurística", path: "/ferramentas/avaliacao-heuristica", motivo: "Aplique as 10 heurísticas de Nielsen." },
  acessibilidade: { titulo: "Checklist de Acessibilidade", path: "/ferramentas/acessibilidade", motivo: "Verifique conformidade WCAG (POUR)." },
  wireframes: { titulo: "Wireframes", path: "/ferramentas/wireframes", motivo: "Esboce telas e gere histórias a partir dos blocos." },
  uml: { titulo: "Editor UML", path: "/avancado/editor-uml", motivo: "Modele classes, casos de uso e sequência." },
  poker: { titulo: "Planning Poker", path: "/avancado/planning-poker", motivo: "Estime esforço em Fibonacci com o time." },
  burndown: { titulo: "Gráfico de Burndown", path: "/avancado/burndown", motivo: "Acompanhe o progresso da Sprint." },
  prototipos: { titulo: "Galeria de Protótipos", path: "/avancado/prototipos", motivo: "Reúna e compare protótipos do projeto." },
  versionamento: { titulo: "Versionamento", path: "/avancado/versionamento", motivo: "Padronize branches e mensagens de commit." },
  simuladores: { titulo: "Simuladores de Decisões", path: "/avancado/simuladores", motivo: "Treine decisões de processo em cenários reais." },
  nuvem: { titulo: "Nuvem de Palavras", path: "/nuvem", motivo: "Colete percepções da turma em tempo real via QR Code." },
  competencias: { titulo: "Badges e Competências", path: "/avancado/competencias", motivo: "Acompanhe sua evolução por habilidade." },
  recomendacoes: { titulo: "Recomendações", path: "/avancado/recomendacoes", motivo: "Veja o que estudar a seguir conforme sua prática." },
  decide: { titulo: "Framework DECIDE", path: "/protocolos/framework-decide", motivo: "Planeje avaliações de usabilidade com rigor." },
};

const BASE = [T.nuvem, T.competencias, T.recomendacoes];

/** Palavras-chave (rota) -> chaves de ferramentas sugeridas */
const REGRAS: { re: RegExp; tools: Sugestao[] }[] = [
  { re: /engenharia-software-ead\/aula-(3|4)$/, tools: [T.historias, T.backlog, T.sprint, T.kanban, T.poker, T.burndown] },
  { re: /engenharia-software-ead\/aula-(5|6)$/, tools: [T.stakeholders, T.historias, T.casosUso, T.backlog, T.personas] },
  { re: /engenharia-software-ead\/aula-11$/, tools: [T.uml, T.casosUso, T.historias] },
  { re: /engenharia-software-1\/aula-(4|5)$/, tools: [T.stakeholders, T.historias, T.casosUso, T.backlog] },
  { re: /engenharia-software-2\/aula-4$/, tools: [T.stakeholders, T.historias, T.casosUso, T.backlog, T.personas] },
  { re: /projetos-interface\/aula-(1[0-9]|20)$/, tools: [T.heuristica, T.acessibilidade, T.decide, T.jornada, T.prototipos] },
  { re: /projetos-interface\//, tools: [T.personas, T.jornada, T.wireframes, T.prototipos, T.heuristica, T.acessibilidade] },
  { re: /gestao-projetos\//, tools: [T.backlog, T.sprint, T.kanban, T.burndown, T.simuladores] },
  { re: /engenharia-software-2\//, tools: [T.uml, T.casosUso, T.testes, T.bugs, T.versionamento] },
  { re: /engenharia-software-ead\//, tools: [T.historias, T.backlog, T.kanban, T.casosUso] },
  { re: /engenharia-software-1\//, tools: [T.historias, T.backlog, T.kanban, T.uml, T.simuladores] },
  { re: /^\/aula-?[1-6]$/, tools: [T.historias, T.backlog, T.casosUso, T.uml, T.simuladores] },
];

const isAula = (p: string) => /aula-?\d+/i.test(p);

const FerramentasSugeridas = () => {
  const { pathname } = useLocation();
  if (!isAula(pathname)) return null;

  const regra = REGRAS.find((r) => r.re.test(pathname));
  const tools = [...(regra?.tools ?? [T.historias, T.backlog, T.kanban]), ...BASE];
  const unicos = tools.filter((t, i, arr) => t && arr.findIndex((x) => x.path === t.path) === i);

  return (
    <section className="px-4 sm:px-6 pb-16 pt-4" data-pdf-ignore>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <Card className="p-6 sm:p-8 border-primary/20 bg-primary/5">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Ferramentas e recursos sugeridos</h2>
              <p className="text-sm text-muted-foreground">
                Aplique o conteúdo desta aula na prática — os artefatos criados alimentam suas competências no portal.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {unicos.map((t) => (
              <Link
                key={t.path}
                to={t.path}
                className="group rounded-xl border border-border bg-background p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-sm text-foreground">{t.titulo}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-xs text-muted-foreground">{t.motivo}</p>
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="w-3 h-3" /> Dica da Prof. Deny
            </Badge>
            <span className="text-xs text-muted-foreground">
              Comece pela primeira ferramenta da lista e siga a ordem — elas são integradas entre si.
            </span>
            <Button size="sm" variant="outline" asChild className="ml-auto">
              <Link to="/avancado/recomendacoes">Ver trilha recomendada</Link>
            </Button>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default FerramentasSugeridas;
