import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, Send, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { CaseStudy } from "@/data/modelagem/cases";
import { buildCasosUso, getAtorPrincipal, type CasoUsoGerado } from "@/data/modelagem/casosUso";
import { readLS, writeLS, uid } from "@/lib/ferramentas-store";

type Tool = "historias" | "backlog" | "kanban" | "sprint" | "casos";

const IntegracaoFerramentas = ({ cs }: { cs: CaseStudy }) => {
  const { toast } = useToast();
  const [enviados, setEnviados] = useState<Record<Tool, boolean>>({ historias: false, backlog: false, kanban: false, sprint: false, casos: false });
  const casos: CasoUsoGerado[] = buildCasosUso(cs);
  const ator = getAtorPrincipal(cs.slug);
  const tag = `[${cs.titulo}]`;

  const marcar = (t: Tool) => {
    setEnviados((p) => ({ ...p, [t]: true }));
    setTimeout(() => setEnviados((p) => ({ ...p, [t]: false })), 2500);
  };

  const enviarHistorias = () => {
    const key = "ferramentas_historias_usuario";
    const atuais = readLS<any[]>(key, []);
    const novas = cs.historiasUsuario.map((hu) => ({
      id: uid(),
      persona: hu.comoQuem,
      acao: hu.quero,
      beneficio: hu.paraQue,
      prioridade: "Should" as const,
      estimativa: 3,
      criterios: hu.criterios.map((c) => ({ id: uid(), texto: c })),
      invest: { I: true, N: true, V: true, E: true, S: true, T: hu.criterios.length > 0 },
      criadoEm: new Date().toISOString(),
      origemModelagem: tag,
    }));
    writeLS(key, [...novas, ...atuais]);
    toast({ title: `${novas.length} histórias enviadas para Ferramentas → Histórias de Usuário.` });
    marcar("historias");
  };

  const enviarCasos = () => {
    const key = "ferramentas_casos_uso";
    const atuais = readLS<any[]>(key, []);
    writeLS(key, [...casos.map((c) => ({ ...c, nome: `${tag} ${c.nome}` })), ...atuais]);
    toast({ title: `${casos.length} casos de uso enviados para Ferramentas → Casos de Uso.` });
    marcar("casos");
  };

  const enviarBacklog = () => {
    const key = "ferramentas_backlog";
    const atuais = readLS<any[]>(key, []);
    const itens = cs.requisitosFuncionais.map((rf, idx) => ({
      id: uid(),
      titulo: `${tag} ${rf.titulo}`,
      descricao: rf.descricao,
      epico: cs.titulo,
      prioridade: idx < 2 ? "Must" : idx < 4 ? "Should" : "Could",
      estimativa: idx < 2 ? 5 : 3,
      status: "Novo",
      valor: idx < 2 ? 5 : 3,
      criadoEm: new Date().toISOString(),
    }));
    writeLS(key, [...itens, ...atuais]);
    toast({ title: `${itens.length} itens enviados para Ferramentas → Backlog.` });
    marcar("backlog");
  };

  const enviarKanban = () => {
    const key = "ferramentas_kanban";
    const atual = readLS<{ colunas?: any[]; cards?: any[] }>(key, {});
    const colunas = atual.colunas ?? [
      { nome: "Backlog", wip: null }, { nome: "To Do", wip: 5 }, { nome: "Doing", wip: 3 },
      { nome: "Review", wip: 3 }, { nome: "Done", wip: null },
    ];
    const novos = cs.requisitosFuncionais.map((rf, idx) => ({
      id: uid(),
      titulo: `${tag} ${rf.titulo}`,
      responsavel: ator,
      prioridade: (idx < 2 ? "Alta" : idx < 4 ? "Média" : "Baixa") as "Alta" | "Média" | "Baixa",
      coluna: 0,
    }));
    writeLS(key, { colunas, cards: [...(atual.cards ?? []), ...novos] });
    toast({ title: `${novos.length} cards enviados para Ferramentas → Kanban.` });
    marcar("kanban");
  };

  const enviarSprint = () => {
    const key = "ferramentas_sprint_planning";
    const atual = readLS<{ sprint?: any; itens?: any[] }>(key, {});
    const sprint = atual.sprint ?? { numero: 1, nome: "Sprint 1", objetivo: `Entregar módulo inicial: ${cs.titulo}`, capacidade: 20, inicio: "", fim: "" };
    const itens = cs.requisitosFuncionais.map((rf, idx) => ({
      id: uid(),
      titulo: `${tag} ${rf.titulo}`,
      pontos: idx < 2 ? 5 : 3,
      prioridade: (idx < 2 ? "Must" : idx < 4 ? "Should" : "Could") as "Must" | "Should" | "Could",
      origem: "backlog" as const,
    }));
    writeLS(key, { sprint, itens: [...(atual.itens ?? []), ...itens] });
    toast({ title: `${itens.length} itens enviados para Ferramentas → Sprint Planning.` });
    marcar("sprint");
  };

  const enviarTudo = () => {
    enviarHistorias(); enviarCasos(); enviarBacklog(); enviarKanban(); enviarSprint();
  };

  const BtnRow = ({ tool, label, path, onClick }: { tool: Tool; label: string; path: string; onClick: () => void }) => (
    <div className="flex items-center gap-2">
      <Button size="sm" variant="outline" className="flex-1 justify-start" onClick={onClick}>
        {enviados[tool] ? <Check className="w-4 h-4 mr-2 text-emerald-500" /> : <Send className="w-4 h-4 mr-2" />}
        {label}
      </Button>
      <Link to={path}>
        <Button size="icon" variant="ghost" title="Abrir ferramenta">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );

  return (
    <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-8">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-orange-400/30">
            <Wrench className="w-6 h-6 text-orange-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground">Enviar para Ferramentas</h2>
            <p className="text-sm text-muted-foreground">Exporte requisitos, histórias e casos de uso deste estudo para as ferramentas ágeis.</p>
          </div>
          <Button onClick={enviarTudo} className="bg-gradient-to-r from-blue-500 to-orange-500 hover:opacity-90">
            <Send className="w-4 h-4 mr-2" /> Enviar tudo
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <BtnRow tool="historias" label={`Histórias de Usuário (${cs.historiasUsuario.length})`} path="/ferramentas/historias-usuario" onClick={enviarHistorias} />
          <BtnRow tool="casos" label={`Casos de Uso (${casos.length})`} path="/ferramentas/casos-de-uso" onClick={enviarCasos} />
          <BtnRow tool="backlog" label={`Backlog (${cs.requisitosFuncionais.length})`} path="/ferramentas/backlog" onClick={enviarBacklog} />
          <BtnRow tool="kanban" label={`Kanban (${cs.requisitosFuncionais.length})`} path="/ferramentas/kanban" onClick={enviarKanban} />
          <BtnRow tool="sprint" label={`Sprint Planning (${cs.requisitosFuncionais.length})`} path="/ferramentas/sprint-planning" onClick={enviarSprint} />
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegracaoFerramentas;
