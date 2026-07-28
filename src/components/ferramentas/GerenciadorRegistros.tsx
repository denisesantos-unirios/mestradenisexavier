import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Eye, Pencil, Trash2, Database, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, readLS, writeLS } from "@/lib/ferramentas-store";

/** Mapa rota → chave de armazenamento da ferramenta / recurso avançado. */
const ROTA_CHAVE: Record<string, { chave: string; titulo: string }> = {
  "/ferramentas/historias-usuario": { chave: FKEYS.historias, titulo: "Histórias de Usuário" },
  "/ferramentas/backlog": { chave: FKEYS.backlog, titulo: "Backlog" },
  "/ferramentas/kanban": { chave: FKEYS.kanban, titulo: "Kanban" },
  "/ferramentas/sprint-planning": { chave: FKEYS.sprint, titulo: "Planejamento de Sprint" },
  "/ferramentas/casos-de-uso": { chave: FKEYS.casosUso, titulo: "Casos de Uso" },
  "/ferramentas/stakeholders": { chave: FKEYS.stakeholders, titulo: "Mapa de Stakeholders" },
  "/ferramentas/personas": { chave: FKEYS.personas, titulo: "Personas" },
  "/ferramentas/jornada-usuario": { chave: FKEYS.jornadas, titulo: "Jornadas do Usuário" },
  "/ferramentas/casos-de-teste": { chave: FKEYS.casosTeste, titulo: "Casos de Teste" },
  "/ferramentas/bugs": { chave: FKEYS.bugs, titulo: "Registro de Bugs" },
  "/ferramentas/avaliacao-heuristica": { chave: FKEYS.heuristicas, titulo: "Avaliações Heurísticas" },
  "/ferramentas/acessibilidade": { chave: FKEYS.acessibilidade, titulo: "Checklists de Acessibilidade" },
  "/ferramentas/wireframes": { chave: FKEYS.wireframes, titulo: "Wireframes" },
  "/avancado/editor-uml": { chave: FKEYS.uml, titulo: "Diagramas UML" },
  "/avancado/planning-poker": { chave: FKEYS.poker, titulo: "Sessões de Planning Poker" },
  "/avancado/burndown": { chave: FKEYS.burndown, titulo: "Gráficos de Burndown" },
  "/avancado/prototipos": { chave: FKEYS.prototipos, titulo: "Protótipos" },
  "/avancado/versionamento": { chave: FKEYS.versionamento, titulo: "Registros de Versionamento" },
  "/avancado/simuladores": { chave: FKEYS.simuladores, titulo: "Simulações de Decisão" },
  "/avancado/competencias": { chave: FKEYS.badges, titulo: "Badges e Competências" },
};

type Registro = Record<string, unknown> & { id?: string };
type Grupo = { campo: string | null; titulo: string; itens: Registro[] };

const LABEL_CAMPO: Record<string, string> = {
  cards: "Cards do quadro",
  itens: "Itens",
  dias: "Dias",
  colunas: "Colunas",
  etapas: "Etapas",
};

const rotulo = (r: Registro, i: number) => {
  const campos = ["titulo", "nome", "descricao", "acao", "cenario", "persona", "sprint", "texto", "resumo", "objetivo"];
  for (const c of campos) {
    const v = r[c];
    if (typeof v === "string" && v.trim()) return v.length > 80 ? `${v.slice(0, 80)}…` : v;
  }
  return `Registro ${i + 1}`;
};

const resumoCampos = (r: Registro) =>
  Object.entries(r)
    .filter(([k]) => !["id", "criadoEm"].includes(k))
    .slice(0, 4)
    .map(([k, v]) => `${k}: ${typeof v === "object" ? (Array.isArray(v) ? `${v.length} itens` : "objeto") : String(v ?? "—")}`);

/** Extrai grupos gerenciáveis: raiz em array, ou listas dentro de um objeto (kanban, sprint…). */
const extrairGrupos = (dados: unknown): Grupo[] => {
  if (Array.isArray(dados)) {
    return [{ campo: null, titulo: "Registros", itens: dados as Registro[] }];
  }
  if (dados && typeof dados === "object") {
    return Object.entries(dados as Record<string, unknown>)
      .filter(([, v]) => Array.isArray(v) && (v as unknown[]).every((x) => x && typeof x === "object"))
      .map(([k, v]) => ({ campo: k, titulo: LABEL_CAMPO[k] ?? k, itens: v as Registro[] }));
  }
  return [];
};

const GerenciadorRegistros = () => {
  const location = useLocation();
  const { toast } = useToast();
  const cfg = ROTA_CHAVE[location.pathname];

  const [dados, setDados] = useState<unknown>(null);
  const [ver, setVer] = useState<{ g: number; i: number } | null>(null);
  const [edit, setEdit] = useState<{ g: number; i: number } | null>(null);
  const [rascunho, setRascunho] = useState<Record<string, string>>({});
  const [jsonBruto, setJsonBruto] = useState("");
  const [mostrarJson, setMostrarJson] = useState(false);
  const [confirmar, setConfirmar] = useState<{ g: number; i: number | "tudo" } | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!cfg) return;
    setDados(readLS<unknown>(cfg.chave, []));
    setJsonBruto("");
    setMostrarJson(false);
  }, [cfg, tick]);

  const grupos = useMemo(() => extrairGrupos(dados), [dados]);
  const totalRegistros = grupos.reduce((a, g) => a + g.itens.length, 0);

  if (!cfg) return null;

  const persistir = (novo: unknown, msg: string) => {
    writeLS(cfg.chave, novo);
    setDados(novo);
    toast({ title: msg });
    setTimeout(() => window.location.reload(), 500);
  };

  /** Substitui os itens de um grupo mantendo a estrutura original (array ou objeto). */
  const aplicarGrupo = (gi: number, itens: Registro[], msg: string) => {
    const g = grupos[gi];
    if (g.campo === null) return persistir(itens, msg);
    persistir({ ...(dados as Record<string, unknown>), [g.campo]: itens }, msg);
  };

  const abrirEdicao = (gi: number, i: number) => {
    const r = grupos[gi].itens[i];
    const draft: Record<string, string> = {};
    Object.entries(r).forEach(([k, v]) => {
      draft[k] = typeof v === "object" && v !== null ? JSON.stringify(v, null, 2) : String(v ?? "");
    });
    setRascunho(draft);
    setEdit({ g: gi, i });
  };

  const salvarEdicao = () => {
    if (!edit) return;
    const original = grupos[edit.g].itens[edit.i];
    const atualizado: Registro = { ...original };
    for (const [k, v] of Object.entries(rascunho)) {
      const orig = original[k];
      if (typeof orig === "object" && orig !== null) {
        try {
          atualizado[k] = JSON.parse(v);
        } catch {
          toast({ title: `Campo "${k}" com JSON inválido.`, variant: "destructive" });
          return;
        }
      } else if (typeof orig === "number") {
        const n = Number(v);
        atualizado[k] = Number.isNaN(n) ? orig : n;
      } else if (typeof orig === "boolean") {
        atualizado[k] = v === "true";
      } else {
        atualizado[k] = v;
      }
    }
    const itens = grupos[edit.g].itens.map((r, i) => (i === edit.i ? atualizado : r));
    const gi = edit.g;
    setEdit(null);
    aplicarGrupo(gi, itens, "Registro atualizado.");
  };

  const confirmarExclusao = () => {
    if (!confirmar) return;
    const { g, i } = confirmar;
    setConfirmar(null);
    if (i === "tudo") return aplicarGrupo(g, [], "Todos os registros foram excluídos.");
    aplicarGrupo(g, grupos[g].itens.filter((_, idx) => idx !== i), "Registro excluído.");
  };

  const salvarJson = () => {
    try {
      persistir(JSON.parse(jsonBruto), "Dados atualizados.");
    } catch {
      toast({ title: "JSON inválido.", variant: "destructive" });
    }
  };

  const registroVisto = ver ? grupos[ver.g]?.itens[ver.i] : null;

  return (
    <section className="px-4 sm:px-6 pb-16 max-w-6xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Registros salvos — {cfg.titulo}</h2>
              <p className="text-xs text-muted-foreground">
                Visualize, edite ou exclua os dados salvos nesta ferramenta (sincronizados com o banco).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{totalRegistros} registro(s)</Badge>
            <Button variant="outline" size="sm" onClick={() => setTick((t) => t + 1)}>Atualizar</Button>
            <Button variant="outline" size="sm" onClick={() => { setJsonBruto(JSON.stringify(dados, null, 2)); setMostrarJson((v) => !v); }}>
              {mostrarJson ? "Ocultar JSON" : "Editar JSON"}
            </Button>
          </div>
        </div>

        {mostrarJson && (
          <div className="space-y-2 mb-5">
            <Label>Conteúdo bruto (JSON)</Label>
            <Textarea rows={10} className="font-mono text-xs" value={jsonBruto} onChange={(e) => setJsonBruto(e.target.value)} />
            <Button size="sm" onClick={salvarJson}>Salvar JSON</Button>
          </div>
        )}

        {totalRegistros === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">Nenhum registro salvo ainda.</p>
        ) : (
          <div className="space-y-6">
            {grupos.map((g, gi) => (
              <div key={g.campo ?? "raiz"}>
                {grupos.length > 1 && (
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-foreground">{g.titulo} ({g.itens.length})</p>
                    {g.itens.length > 0 && (
                      <Button variant="ghost" size="sm" onClick={() => setConfirmar({ g: gi, i: "tudo" })}>
                        <Trash2 className="w-3.5 h-3.5 mr-1 text-destructive" /> Limpar
                      </Button>
                    )}
                  </div>
                )}
                {grupos.length === 1 && g.itens.length > 0 && (
                  <div className="flex justify-end mb-2">
                    <Button variant="outline" size="sm" onClick={() => setConfirmar({ g: gi, i: "tudo" })}>
                      <Trash2 className="w-3.5 h-3.5 mr-1 text-destructive" /> Excluir tudo
                    </Button>
                  </div>
                )}
                <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                  {g.itens.map((r, i) => (
                    <div key={(r.id as string) ?? i} className="flex items-start justify-between gap-3 p-3 rounded-lg border border-border bg-card">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{rotulo(r, i)}</p>
                        <p className="text-xs text-muted-foreground truncate">{resumoCampos(r).join(" · ")}</p>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <Button size="icon" variant="ghost" className="h-8 w-8" title="Visualizar" onClick={() => setVer({ g: gi, i })}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8" title="Editar" onClick={() => abrirEdicao(gi, i)}>
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8" title="Excluir" onClick={() => setConfirmar({ g: gi, i })}>
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Visualizar */}
      <Dialog open={!!ver} onOpenChange={(o) => !o && setVer(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{registroVisto && ver ? rotulo(registroVisto, ver.i) : ""}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-[60vh] overflow-y-auto text-sm">
            {registroVisto &&
              Object.entries(registroVisto).map(([k, v]) => (
                <div key={k}>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{k}</p>
                  {typeof v === "object" && v !== null ? (
                    <pre className="text-xs bg-muted/50 rounded p-2 overflow-x-auto">{JSON.stringify(v, null, 2)}</pre>
                  ) : (
                    <p className="text-foreground break-words">{String(v ?? "—")}</p>
                  )}
                </div>
              ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setVer(null)}>Fechar</Button>
            {ver && (
              <Button onClick={() => { const alvo = ver; setVer(null); abrirEdicao(alvo.g, alvo.i); }}>
                <Pencil className="w-4 h-4 mr-1" /> Editar
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Editar */}
      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Editar registro</DialogTitle>
            <DialogDescription>Campos com listas/objetos são editados em JSON.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
            {Object.entries(rascunho).map(([k, v]) => {
              const multilinha = v.length > 60 || v.includes("\n");
              return (
                <div key={k}>
                  <Label className="text-xs">{k}</Label>
                  {multilinha ? (
                    <Textarea
                      rows={Math.min(10, v.split("\n").length + 1)}
                      className="font-mono text-xs"
                      value={v}
                      onChange={(e) => setRascunho((p) => ({ ...p, [k]: e.target.value }))}
                      disabled={k === "id"}
                    />
                  ) : (
                    <Input
                      value={v}
                      onChange={(e) => setRascunho((p) => ({ ...p, [k]: e.target.value }))}
                      disabled={k === "id"}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEdit(null)}>Cancelar</Button>
            <Button onClick={salvarEdicao}>Salvar alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmar exclusão */}
      <Dialog open={!!confirmar} onOpenChange={(o) => !o && setConfirmar(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" /> Confirmar exclusão
            </DialogTitle>
            <DialogDescription>
              {confirmar?.i === "tudo"
                ? "Todos os registros desta lista serão removidos. Esta ação não pode ser desfeita."
                : "Este registro será removido permanentemente."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmar(null)}>Cancelar</Button>
            <Button variant="destructive" onClick={confirmarExclusao}>Excluir</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GerenciadorRegistros;
