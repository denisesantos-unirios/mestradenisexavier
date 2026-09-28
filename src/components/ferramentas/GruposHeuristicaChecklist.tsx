import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, FolderOpen, X, Save, Download, Check, Minus, FileText } from "lucide-react";
import html2pdf from "html2pdf.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { uid, baixarMd } from "@/lib/ferramentas-store";

export const CHECKLIST = [
  { h: "H1 — Visibilidade do status do sistema", q: "O sistema sempre informa ao usuário o que está acontecendo (carregamento, confirmações, progresso) em tempo razoável?" },
  { h: "H2 — Correspondência entre o sistema e o mundo real", q: "A interface usa linguagem, ícones e conceitos familiares ao usuário, em vez de termos técnicos?" },
  { h: "H3 — Controle e liberdade do usuário", q: "O usuário consegue desfazer, refazer, cancelar ou sair facilmente de uma ação indesejada?" },
  { h: "H4 — Consistência e padrões", q: "Elementos, termos e ações seguem o mesmo padrão em todas as telas e as convenções da plataforma?" },
  { h: "H5 — Prevenção de erros", q: "O design evita que erros aconteçam (validações, confirmações antes de ações destrutivas, restrições)?" },
  { h: "H6 — Reconhecimento em vez de memorização", q: "Opções, ações e informações estão visíveis, sem exigir que o usuário memorize dados entre telas?" },
  { h: "H7 — Flexibilidade e eficiência de uso", q: "Existem atalhos, filtros ou personalizações que aceleram o uso para usuários experientes?" },
  { h: "H8 — Estética e design minimalista", q: "As telas mostram apenas informações relevantes, sem excesso visual que dispute atenção?" },
  { h: "H9 — Reconhecer, diagnosticar e recuperar-se de erros", q: "As mensagens de erro são claras, em linguagem simples, indicam o problema e sugerem uma solução?" },
  { h: "H10 — Ajuda e documentação", q: "Há ajuda, dicas ou documentação acessível e fácil de pesquisar quando o usuário precisa?" },
];

type Resp = "sim" | "nao" | "na" | "";
type Item = { resposta: Resp; obs: string };
export type GrupoAval = {
  id: string; nome: string; periodo: string; data: string; integrantes: string;
  checklist: Item[]; criadoEm: string;
};

const KEY = "ferramentas_heuristicas_grupos";
const novo = (): GrupoAval => ({
  id: uid(), nome: "", periodo: "", data: new Date().toISOString().slice(0, 10), integrantes: "",
  checklist: CHECKLIST.map(() => ({ resposta: "", obs: "" })), criadoEm: new Date().toISOString(),
});

const placar = (g: GrupoAval) => {
  const sim = g.checklist.filter((i) => i.resposta === "sim").length;
  const nao = g.checklist.filter((i) => i.resposta === "nao").length;
  const aplic = sim + nao;
  return { sim, nao, resp: g.checklist.filter((i) => i.resposta).length, pct: aplic ? Math.round((sim / aplic) * 100) : 0 };
};

const GruposHeuristicaChecklist = () => {
  const { toast } = useToast();
  const [grupos, setGrupos] = useState<GrupoAval[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState<GrupoAval | null>(null);
  const [abertoId, setAbertoId] = useState<string | null>(null);

  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(grupos)); } catch { /* ignore */ } }, [grupos]);

  const aberto = grupos.find((g) => g.id === abertoId) || null;

  const salvarForm = () => {
    if (!form || !form.nome.trim()) { toast({ title: "Informe o nome do grupo.", variant: "destructive" }); return; }
    setGrupos((l) => l.some((g) => g.id === form.id) ? l.map((g) => g.id === form.id ? form : g) : [form, ...l]);
    toast({ title: "Grupo salvo!" });
    setForm(null);
  };

  const excluir = (id: string) => {
    if (!confirm("Excluir este grupo e seu checklist?")) return;
    setGrupos((l) => l.filter((g) => g.id !== id));
    if (abertoId === id) setAbertoId(null);
  };

  const setItem = (idx: number, patch: Partial<Item>) => {
    if (!aberto) return;
    setGrupos((l) => l.map((g) => g.id !== aberto.id ? g : { ...g, checklist: g.checklist.map((it, i) => i === idx ? { ...it, ...patch } : it) }));
  };

  const exportarPdf = async (g: GrupoAval) => {
    const p = placar(g);
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const rotulo = (r: Resp) => r === "sim" ? "✅ Sim" : r === "nao" ? "❌ Não" : r === "na" ? "N/A" : "— não avaliado";
    const linhas = CHECKLIST.map((c, i) => {
      const it = g.checklist[i];
      const cor = it.resposta === "sim" ? "#16a34a" : it.resposta === "nao" ? "#dc2626" : "#6b7280";
      return `<div style="border:1px solid #e5e7eb;border-radius:8px;padding:10px 12px;margin-bottom:8px;page-break-inside:avoid;">
        <p style="margin:0 0 2px;font-size:11px;font-weight:700;color:#1d4ed8;">${esc(c.h)}</p>
        <p style="margin:0 0 4px;font-size:12px;color:#111827;">${esc(c.q)}</p>
        <p style="margin:0;font-size:12px;font-weight:700;color:${cor};">${rotulo(it.resposta)}</p>
        ${it.obs ? `<p style="margin:4px 0 0;font-size:11px;color:#374151;"><b>Observação:</b> ${esc(it.obs)}</p>` : ""}
      </div>`;
    }).join("");
    const el = document.createElement("div");
    el.style.cssText = "width:700px;padding:24px;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#111827;";
    el.innerHTML = `
      <h1 style="font-size:20px;margin:0 0 4px;">Avaliação Heurística — ${esc(g.nome)}</h1>
      <p style="font-size:12px;color:#4b5563;margin:0 0 12px;">
        <b>Período:</b> ${esc(g.periodo || "—")} &nbsp;·&nbsp; <b>Data:</b> ${g.data ? new Date(g.data + "T00:00").toLocaleDateString("pt-BR") : "—"}
        ${g.integrantes ? ` &nbsp;·&nbsp; <b>Integrantes:</b> ${esc(g.integrantes)}` : ""}
      </p>
      <div style="display:flex;gap:8px;margin-bottom:14px;">
        <div style="flex:1;border:1px solid #e5e7eb;border-radius:8px;padding:8px;text-align:center;"><p style="margin:0;font-size:18px;font-weight:800;color:#16a34a;">${p.sim}</p><p style="margin:0;font-size:10px;color:#6b7280;">Atende</p></div>
        <div style="flex:1;border:1px solid #e5e7eb;border-radius:8px;padding:8px;text-align:center;"><p style="margin:0;font-size:18px;font-weight:800;color:#dc2626;">${p.nao}</p><p style="margin:0;font-size:10px;color:#6b7280;">Não atende</p></div>
        <div style="flex:1;border:1px solid #e5e7eb;border-radius:8px;padding:8px;text-align:center;"><p style="margin:0;font-size:18px;font-weight:800;color:#1d4ed8;">${p.pct}%</p><p style="margin:0;font-size:10px;color:#6b7280;">Conformidade</p></div>
      </div>
      <h2 style="font-size:14px;margin:0 0 8px;">Resumo das observações por heurística</h2>
      ${linhas}
      <p style="font-size:10px;color:#9ca3af;margin-top:12px;">Gerado em ${new Date().toLocaleString("pt-BR")} — Portal de Aulas · Avaliação Heurística (10 heurísticas de Nielsen)</p>`;
    document.body.appendChild(el);
    try {
      await html2pdf().set({
        margin: 10,
        filename: `avaliacao-heuristica-${g.nome.replace(/\s+/g, "-").toLowerCase()}.pdf`,
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: { scale: 2, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      }).from(el).save();
      toast({ title: "PDF gerado!" });
    } finally {
      el.remove();
    }
  };

  const exportar = (g: GrupoAval) => {
    const p = placar(g);
    baixarMd(`checklist-heuristico-${g.nome.replace(/\s+/g, "-").toLowerCase()}.md`,
      `# Checklist Heurístico — ${g.nome}\n**Período:** ${g.periodo || "—"} · **Data:** ${g.data || "—"}\n**Integrantes:** ${g.integrantes || "—"}\n\nAtende: ${p.sim} · Não atende: ${p.nao} · Conformidade: ${p.pct}%\n\n` +
      CHECKLIST.map((c, i) => {
        const it = g.checklist[i];
        const r = it.resposta === "sim" ? "✅ Sim" : it.resposta === "nao" ? "❌ Não" : it.resposta === "na" ? "N/A" : "— não avaliado";
        return `## ${c.h}\n**Pergunta:** ${c.q}\n**Resposta:** ${r}${it.obs ? `\n**Observação:** ${it.obs}` : ""}`;
      }).join("\n\n"));
  };

  const RespBtn = ({ idx, v, label, icon }: { idx: number; v: Resp; label: string; icon: React.ReactNode }) => {
    const ativo = aberto?.checklist[idx].resposta === v;
    return (
      <Button size="sm" variant={ativo ? (v === "nao" ? "destructive" : "default") : "outline"} className="h-8"
        onClick={() => setItem(idx, { resposta: ativo ? "" : v })}>{icon}{label}</Button>
    );
  };

  return (
    <Card className="p-5 mb-6 space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h2 className="text-lg font-semibold">Grupos avaliados ({grupos.length})</h2>
          <p className="text-xs text-muted-foreground">Cadastre os grupos e abra cada um para responder o checklist das 10 heurísticas.</p>
        </div>
        <Button size="sm" onClick={() => setForm(novo())}><Plus className="w-4 h-4 mr-1" /> Inserir grupo</Button>
      </div>

      {form && (
        <div className="p-4 rounded-lg border border-border bg-muted/30 space-y-3">
          <div className="grid sm:grid-cols-3 gap-3">
            <div><Label>Nome do grupo / projeto</Label><Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="ex.: Equipe FoodShare" /></div>
            <div><Label>Período</Label><Input value={form.periodo} onChange={(e) => setForm({ ...form, periodo: e.target.value })} placeholder="ex.: 2026.2" /></div>
            <div><Label>Data da avaliação</Label><Input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} /></div>
          </div>
          <div><Label>Integrantes (opcional)</Label><Input value={form.integrantes} onChange={(e) => setForm({ ...form, integrantes: e.target.value })} /></div>
          <div className="flex gap-2 justify-end">
            <Button size="sm" variant="ghost" onClick={() => setForm(null)}><X className="w-4 h-4 mr-1" /> Cancelar</Button>
            <Button size="sm" onClick={salvarForm}><Save className="w-4 h-4 mr-1" /> Salvar</Button>
          </div>
        </div>
      )}

      {!grupos.length && !form && <p className="text-sm text-muted-foreground text-center py-4">Nenhum grupo cadastrado.</p>}

      {grupos.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-xs text-muted-foreground border-b border-border">
              <th className="py-2">Grupo</th><th>Período</th><th>Data</th><th>Progresso</th><th>Conformidade</th><th className="text-right">Ações</th>
            </tr></thead>
            <tbody>
              {grupos.map((g) => {
                const p = placar(g);
                return (
                  <tr key={g.id} className={`border-b border-border ${abertoId === g.id ? "bg-primary/5" : ""}`}>
                    <td className="py-2 font-medium text-foreground">{g.nome}</td>
                    <td>{g.periodo || "—"}</td>
                    <td>{g.data ? new Date(g.data + "T00:00").toLocaleDateString("pt-BR") : "—"}</td>
                    <td>{p.resp}/10</td>
                    <td><Badge variant={p.pct >= 70 ? "default" : "outline"}>{p.pct}%</Badge></td>
                    <td className="text-right whitespace-nowrap">
                      <Button size="icon" variant="ghost" className="h-8 w-8" title="Abrir" onClick={() => setAbertoId(abertoId === g.id ? null : g.id)}><FolderOpen className="w-4 h-4 text-primary" /></Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8" title="Editar" onClick={() => setForm({ ...g })}><Pencil className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8" title="Excluir" onClick={() => excluir(g.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {aberto && (
        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="font-semibold text-foreground">Checklist — {aberto.nome}</h3>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => exportarPdf(aberto)}><FileText className="w-3 h-3 mr-1" /> PDF</Button>
              <Button size="sm" variant="outline" onClick={() => exportar(aberto)}><Download className="w-3 h-3 mr-1" /> .md</Button>
              <Button size="sm" variant="ghost" onClick={() => setAbertoId(null)}><X className="w-4 h-4" /></Button>
            </div>
          </div>
          {CHECKLIST.map((c, i) => (
            <div key={c.h} className="p-3 rounded-lg border border-border bg-card space-y-2">
              <p className="text-xs font-semibold text-primary">{c.h}</p>
              <p className="text-sm text-foreground">{c.q}</p>
              <div className="flex gap-2 flex-wrap">
                <RespBtn idx={i} v="sim" label="Sim" icon={<Check className="w-3 h-3 mr-1" />} />
                <RespBtn idx={i} v="nao" label="Não" icon={<X className="w-3 h-3 mr-1" />} />
                <RespBtn idx={i} v="na" label="Não se aplica" icon={<Minus className="w-3 h-3 mr-1" />} />
              </div>
              <Textarea rows={1} placeholder="Observação / evidência (opcional)" value={aberto.checklist[i].obs} onChange={(e) => setItem(i, { obs: e.target.value })} />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default GruposHeuristicaChecklist;
