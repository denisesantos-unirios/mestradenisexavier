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
import { useAuth } from "@/hooks/useAuth";

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

const GerenciadorRegistros = () => {
  const location = useLocation();
  const { toast } = useToast();
  const { isProfessor, hasPermission } = useAuth();
  const cfg = ROTA_CHAVE[location.pathname];
  const permitido =
    isProfessor && hasPermission(location.pathname.startsWith("/avancado") ? "avancado" : "ferramentas");

  const [dados, setDados] = useState<unknown>(null);
  const [verIdx, setVerIdx] = useState<number | null>(null);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [rascunho, setRascunho] = useState<Record<string, string>>({});
  const [jsonBruto, setJsonBruto] = useState("");
  const [confirmar, setConfirmar] = useState<number | "tudo" | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!cfg) return;
    setDados(readLS<unknown>(cfg.chave, []));
  }, [cfg, tick]);

  const lista = useMemo<Registro[]>(() => (Array.isArray(dados) ? (dados as Registro[]) : []), [dados]);
  const ehObjeto = !!dados && !Array.isArray(dados) && typeof dados === "object";

  if (!cfg || !permitido) return null;

  const persistir = (novo: unknown, msg: string) => {
    writeLS(cfg.chave, novo);
    setDados(novo);
    toast({ title: msg });
    // recarrega a página para que a ferramenta reflita o dado atualizado
    setTimeout(() => window.location.reload(), 400);
  };

  const abrirEdicao = (i: number) => {
    const r = lista[i];
    const draft: Record<string, string> = {};
    Object.entries(r).forEach(([k, v]) => {
      draft[k] = typeof v === "object" && v !== null ? JSON.stringify(v, null, 2) : String(v ?? "");
    });
    setRascunho(draft);
    setEditIdx(i);
  };

  const salvarEdicao = () => {
    if (editIdx === null) return;
    const original = lista[editIdx];
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
    const novo = lista.map((r, i) => (i === editIdx ? atualizado : r));
    setEditIdx(null);
    persistir(novo, "Registro atualizado.");
  };

  const excluir = (i: number) => persistir(lista.filter((_, idx) => idx !== i), "Registro excluído.");
  const excluirTudo = () => persistir([], "Todos os registros foram excluídos.");

  const salvarJson = () => {
    try {
      const parsed = JSON.parse(jsonBruto);
      persistir(parsed, "Dados atualizados.");
    } catch {
      toast({ title: "JSON inválido.", variant: "destructive" });
    }
  };

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
            <Badge variant="outline">{ehObjeto ? "1 conjunto" : `${lista.length} registro(s)`}</Badge>
            <Button variant="outline" size="sm" onClick={() => setTick((t) => t + 1)}>Atualizar</Button>
            {!ehObjeto && lista.length > 0 && (
              <Button variant="outline" size="sm" onClick={() => setConfirmar("tudo")}>
                <Trash2 className="w-3.5 h-3.5 mr-1 text-destructive" /> Excluir tudo
              </Button>
            )}
          </div>
        </div>

        {ehObjeto ? (
          <div className="space-y-2">
            <Label>Conteúdo (JSON)</Label>
            <Textarea
              rows={10}
              className="font-mono text-xs"
              value={jsonBruto || JSON.stringify(dados, null, 2)}
              onChange={(e) => setJsonBruto(e.target.value)}
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={salvarJson}>Salvar alterações</Button>
              <Button size="sm" variant="outline" onClick={() => persistir({}, "Conteúdo limpo.")}>Excluir conteúdo</Button>
            </div>
          </div>
        ) : lista.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">Nenhum registro salvo ainda.</p>
        ) : (
          <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
            {lista.map((r, i) => (
              <div key={(r.id as string) ?? i} className="flex items-start justify-between gap-3 p-3 rounded-lg border border-border bg-card">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{rotulo(r, i)}</p>
                  <p className="text-xs text-muted-foreground truncate">{resumoCampos(r).join(" · ")}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button size="icon" variant="ghost" className="h-8 w-8" title="Visualizar" onClick={() => setVerIdx(i)}>
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8" title="Editar" onClick={() => abrirEdicao(i)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8" title="Excluir" onClick={() => setConfirmar(i)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Visualizar */}
      <Dialog open={verIdx !== null} onOpenChange={(o) => !o && setVerIdx(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{verIdx !== null ? rotulo(lista[verIdx], verIdx) : ""}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-[60vh] overflow-y-auto text-sm">
            {verIdx !== null &&
              Object.entries(lista[verIdx]).map(([k, v]) => (
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
            <Button variant="outline" onClick={() => setVerIdx(null)}>Fechar</Button>
            {verIdx !== null && (
              <Button onClick={() => { const i = verIdx; setVerIdx(null); abrirEdicao(i); }}>
                <Pencil className="w-4 h-4 mr-1" /> Editar
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Editar */}
      <Dialog open={editIdx !== null} onOpenChange={(o) => !o && setEditIdx(null)}>
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
            <Button variant="outline" onClick={() => setEditIdx(null)}>Cancelar</Button>
            <Button onClick={salvarEdicao}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmar exclusão */}
      <Dialog open={confirmar !== null} onOpenChange={(o) => !o && setConfirmar(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" /> Confirmar exclusão
            </DialogTitle>
            <DialogDescription>
              {confirmar === "tudo"
                ? "Todos os registros desta ferramenta serão excluídos. Esta ação não pode ser desfeita."
                : "Este registro será excluído permanentemente."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmar(null)}>Cancelar</Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (confirmar === "tudo") excluirTudo();
                else if (typeof confirmar === "number") excluir(confirmar);
                setConfirmar(null);
              }}
            >
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GerenciadorRegistros;
