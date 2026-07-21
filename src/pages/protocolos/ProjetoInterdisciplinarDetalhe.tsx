import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Plus, Trash2, Save, Users, Calendar, FileCheck2, Star, Link as LinkIcon, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

type Projeto = {
  id: string; nome: string; tema: string | null; mini_mundo: string | null;
  disciplinas: string[]; edital_ref: string | null; status: string;
};
type Membro = { id: string; nome: string; email: string | null; matricula: string | null };
type Prof = { id: string; user_id: string; disciplina: string };
type Fase = {
  id: string; disciplina: string; fase_num: number; descricao: string;
  data_limite: string | null; pontos_max: number | null;
  status: string; nota: number | null; feedback: string | null; entregavel_url: string | null;
};
type Doc = { id: string; titulo: string; url: string; tipo: string | null };
type Par = { id: string; fase_id: string | null; avaliador_membro_id: string; avaliado_membro_id: string; pontos: number };

const STATUS = ["proposto", "aprovado", "em_andamento", "concluido"] as const;
const STATUS_LABEL: Record<string, string> = {
  proposto: "Proposto", aprovado: "Aprovado", em_andamento: "Em andamento", concluido: "Concluído",
};
const FASE_STATUS = ["pendente", "em_andamento", "entregue", "avaliado"] as const;
const FASE_STATUS_LABEL: Record<string, string> = {
  pendente: "Pendente", em_andamento: "Em andamento", entregue: "Entregue", avaliado: "Avaliado",
};

export default function ProjetoInterdisciplinarDetalhe() {
  const { id } = useParams<{ id: string }>();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const [membros, setMembros] = useState<Membro[]>([]);
  const [profs, setProfs] = useState<Prof[]>([]);
  const [fases, setFases] = useState<Fase[]>([]);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [pares, setPares] = useState<Par[]>([]);

  const [novoMembro, setNovoMembro] = useState({ nome: "", email: "", matricula: "" });
  const [novoDoc, setNovoDoc] = useState({ titulo: "", url: "", tipo: "" });
  const [novoProf, setNovoProf] = useState({ disciplina: "" });

  useEffect(() => { if (!loading && !user) navigate("/protocolos/login"); }, [loading, user, navigate]);

  const load = async () => {
    if (!id) return;
    const [p, m, pr, f, d, pa] = await Promise.all([
      supabase.from("projetos_interdisciplinares").select("*").eq("id", id).single(),
      supabase.from("projeto_membros").select("*").eq("projeto_id", id).order("nome"),
      supabase.from("projeto_professores").select("*").eq("projeto_id", id),
      supabase.from("projeto_fases").select("*").eq("projeto_id", id).order("disciplina").order("fase_num"),
      supabase.from("projeto_documentos").select("*").eq("projeto_id", id).order("created_at", { ascending: false }),
      supabase.from("projeto_avaliacoes_pares").select("*").eq("projeto_id", id),
    ]);
    setProjeto((p.data as any) ?? null);
    setMembros((m.data ?? []) as any);
    setProfs((pr.data ?? []) as any);
    setFases((f.data ?? []) as any);
    setDocs((d.data ?? []) as any);
    setPares((pa.data ?? []) as any);
  };
  useEffect(() => { if (user && id) load(); }, [user, id]);

  const salvarProjeto = async () => {
    if (!projeto) return;
    const { error } = await supabase.from("projetos_interdisciplinares").update({
      nome: projeto.nome, tema: projeto.tema, mini_mundo: projeto.mini_mundo, status: projeto.status,
    }).eq("id", projeto.id);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    toast({ title: "Projeto atualizado" });
  };

  const addMembro = async () => {
    if (!novoMembro.nome) return;
    const { error } = await supabase.from("projeto_membros").insert({ ...novoMembro, projeto_id: id! });
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    setNovoMembro({ nome: "", email: "", matricula: "" }); load();
  };
  const removeMembro = async (mid: string) => {
    await supabase.from("projeto_membros").delete().eq("id", mid); load();
  };

  const addProf = async () => {
    if (!novoProf.disciplina) return;
    const { error } = await supabase.from("projeto_professores").insert({
      projeto_id: id!, user_id: user!.id, disciplina: novoProf.disciplina,
    });
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    setNovoProf({ disciplina: "" }); load();
  };
  const removeProf = async (pid: string) => {
    await supabase.from("projeto_professores").delete().eq("id", pid); load();
  };

  const salvarFase = async (f: Fase) => {
    const { error } = await supabase.from("projeto_fases").update({
      descricao: f.descricao, data_limite: f.data_limite, pontos_max: f.pontos_max,
      status: f.status, nota: f.nota, feedback: f.feedback, entregavel_url: f.entregavel_url,
      avaliado_por: user!.id,
    }).eq("id", f.id);
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    toast({ title: "Fase salva" });
  };
  const updateFase = (fid: string, patch: Partial<Fase>) => {
    setFases((fs) => fs.map((f) => f.id === fid ? { ...f, ...patch } : f));
  };

  const addDoc = async () => {
    if (!novoDoc.titulo || !novoDoc.url) return;
    const { error } = await supabase.from("projeto_documentos").insert({ ...novoDoc, projeto_id: id! });
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    setNovoDoc({ titulo: "", url: "", tipo: "" }); load();
  };
  const removeDoc = async (did: string) => {
    await supabase.from("projeto_documentos").delete().eq("id", did); load();
  };

  // Avaliação por pares (por membro)
  const setPar = async (avaliadorId: string, avaliadoId: string, pontos: number) => {
    const existente = pares.find(p => p.avaliador_membro_id === avaliadorId && p.avaliado_membro_id === avaliadoId && !p.fase_id);
    if (existente) {
      await supabase.from("projeto_avaliacoes_pares").update({ pontos }).eq("id", existente.id);
    } else {
      await supabase.from("projeto_avaliacoes_pares").insert({
        projeto_id: id!, avaliador_membro_id: avaliadorId, avaliado_membro_id: avaliadoId, pontos,
      });
    }
    load();
  };
  const getPar = (av: string, ad: string) =>
    pares.find(p => p.avaliador_membro_id === av && p.avaliado_membro_id === ad && !p.fase_id)?.pontos ?? 0;

  // Dashboard: progresso por disciplina
  const dashData = useMemo(() => {
    const map: Record<string, { disc: string; total: number; concluidas: number; notaMedia: number; notaCount: number; pontos: number; pontosMax: number }> = {};
    fases.forEach((f) => {
      const k = f.disciplina;
      map[k] ??= { disc: k, total: 0, concluidas: 0, notaMedia: 0, notaCount: 0, pontos: 0, pontosMax: 0 };
      map[k].total += 1;
      map[k].pontosMax += Number(f.pontos_max ?? 0);
      if (f.status === "avaliado") map[k].concluidas += 1;
      if (f.nota != null) { map[k].notaMedia += Number(f.nota); map[k].notaCount += 1; map[k].pontos += Number(f.nota); }
    });
    return Object.values(map).map((r) => ({
      disciplina: r.disc,
      progresso: r.total ? Math.round((r.concluidas / r.total) * 100) : 0,
      pontos: Number(r.pontos.toFixed(2)),
      pontosMax: Number(r.pontosMax.toFixed(2)),
      notaMedia: r.notaCount ? Number((r.notaMedia / r.notaCount).toFixed(2)) : 0,
    }));
  }, [fases]);

  const fasesPorDisc = useMemo(() => {
    const g: Record<string, Fase[]> = {};
    fases.forEach((f) => { (g[f.disciplina] ??= []).push(f); });
    return g;
  }, [fases]);

  if (loading || !projeto) return null;

  return (
    <main className="min-h-screen bg-background">
      <MainNavigation />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <Button variant="ghost" onClick={() => navigate("/protocolos/interdisciplinar")} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
        </Button>

        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{projeto.nome}</h1>
            <div className="flex gap-2 mt-2">
              {projeto.disciplinas.map((d) => <Badge key={d} variant="outline">{d}</Badge>)}
              <Badge>{STATUS_LABEL[projeto.status]}</Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="visao" className="w-full">
          <TabsList className="mb-6 flex-wrap h-auto">
            <TabsTrigger value="visao"><Users className="w-4 h-4 mr-2" />Visão Geral</TabsTrigger>
            <TabsTrigger value="cronograma"><Calendar className="w-4 h-4 mr-2" />Cronograma</TabsTrigger>
            <TabsTrigger value="entregas"><FileCheck2 className="w-4 h-4 mr-2" />Entregas & Notas</TabsTrigger>
            <TabsTrigger value="pares"><Star className="w-4 h-4 mr-2" />Avaliação por Pares</TabsTrigger>
            <TabsTrigger value="docs"><LinkIcon className="w-4 h-4 mr-2" />Documentos</TabsTrigger>
            <TabsTrigger value="dashboard"><BarChart3 className="w-4 h-4 mr-2" />Dashboard</TabsTrigger>
          </TabsList>

          {/* VISÃO GERAL */}
          <TabsContent value="visao" className="space-y-4">
            <Card>
              <CardHeader><CardTitle>Informações do projeto</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div><Label>Nome</Label>
                  <Input value={projeto.nome} onChange={(e) => setProjeto({ ...projeto, nome: e.target.value })} />
                </div>
                <div><Label>Tema</Label>
                  <Input value={projeto.tema ?? ""} onChange={(e) => setProjeto({ ...projeto, tema: e.target.value })} />
                </div>
                <div><Label>Mini-mundo</Label>
                  <Textarea rows={5} value={projeto.mini_mundo ?? ""} onChange={(e) => setProjeto({ ...projeto, mini_mundo: e.target.value })} />
                </div>
                <div><Label>Status</Label>
                  <Select value={projeto.status} onValueChange={(v) => setProjeto({ ...projeto, status: v })}>
                    <SelectTrigger className="w-60"><SelectValue /></SelectTrigger>
                    <SelectContent>{STATUS.map((s) => <SelectItem key={s} value={s}>{STATUS_LABEL[s]}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <Button onClick={salvarProjeto}><Save className="w-4 h-4 mr-2" />Salvar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Membros ({membros.length})</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {membros.map((m) => (
                  <div key={m.id} className="flex items-center gap-2 border rounded-md p-2">
                    <div className="flex-1">
                      <p className="font-medium">{m.nome}</p>
                      <p className="text-xs text-muted-foreground">{m.matricula} · {m.email}</p>
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => removeMembro(m.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
                <div className="grid md:grid-cols-4 gap-2 items-end pt-2 border-t">
                  <div><Label className="text-xs">Nome</Label>
                    <Input value={novoMembro.nome} onChange={(e) => setNovoMembro({ ...novoMembro, nome: e.target.value })} />
                  </div>
                  <div><Label className="text-xs">Email</Label>
                    <Input value={novoMembro.email} onChange={(e) => setNovoMembro({ ...novoMembro, email: e.target.value })} />
                  </div>
                  <div><Label className="text-xs">Matrícula</Label>
                    <Input value={novoMembro.matricula} onChange={(e) => setNovoMembro({ ...novoMembro, matricula: e.target.value })} />
                  </div>
                  <Button onClick={addMembro}><Plus className="w-4 h-4 mr-2" />Adicionar</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Professores vinculados</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {profs.map((p) => (
                  <div key={p.id} className="flex items-center gap-2 border rounded-md p-2">
                    <Badge variant="outline">{p.disciplina}</Badge>
                    <span className="flex-1 text-sm text-muted-foreground">user: {p.user_id.slice(0, 8)}…</span>
                    <Button size="icon" variant="ghost" onClick={() => removeProf(p.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
                <div className="flex gap-2 items-end pt-2 border-t">
                  <div className="flex-1">
                    <Label className="text-xs">Vincular-me como responsável pela disciplina</Label>
                    <Select value={novoProf.disciplina} onValueChange={(v) => setNovoProf({ disciplina: v })}>
                      <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                        {projeto.disciplinas.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={addProf}><Plus className="w-4 h-4 mr-2" />Vincular</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CRONOGRAMA */}
          <TabsContent value="cronograma" className="space-y-6">
            {Object.entries(fasesPorDisc).map(([disc, fs]) => (
              <Card key={disc}>
                <CardHeader><CardTitle>{disc}</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {fs.map((f) => (
                    <div key={f.id} className="grid md:grid-cols-12 gap-2 items-end border rounded-md p-3">
                      <div className="md:col-span-1"><Label className="text-xs">Fase</Label>
                        <Input value={f.fase_num} disabled />
                      </div>
                      <div className="md:col-span-5"><Label className="text-xs">Descrição</Label>
                        <Input value={f.descricao} onChange={(e) => updateFase(f.id, { descricao: e.target.value })} />
                      </div>
                      <div className="md:col-span-2"><Label className="text-xs">Data limite</Label>
                        <Input type="date" value={f.data_limite ?? ""} onChange={(e) => updateFase(f.id, { data_limite: e.target.value })} />
                      </div>
                      <div className="md:col-span-2"><Label className="text-xs">Pontos máx.</Label>
                        <Input type="number" step="0.1" value={f.pontos_max ?? 0} onChange={(e) => updateFase(f.id, { pontos_max: Number(e.target.value) })} />
                      </div>
                      <div className="md:col-span-2">
                        <Button size="sm" onClick={() => salvarFase(f)} className="w-full">
                          <Save className="w-4 h-4 mr-1" />Salvar
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* ENTREGAS & NOTAS */}
          <TabsContent value="entregas" className="space-y-6">
            {Object.entries(fasesPorDisc).map(([disc, fs]) => (
              <Card key={disc}>
                <CardHeader><CardTitle>{disc} — Entregas</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  {fs.map((f) => (
                    <div key={f.id} className="border rounded-md p-3 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-medium">Fase {f.fase_num} · {f.descricao}</p>
                          <p className="text-xs text-muted-foreground">
                            Prazo: {f.data_limite ?? "—"} · Máx: {f.pontos_max ?? 0} pts
                          </p>
                        </div>
                        <Badge>{FASE_STATUS_LABEL[f.status]}</Badge>
                      </div>
                      <div className="grid md:grid-cols-12 gap-2 items-end">
                        <div className="md:col-span-4"><Label className="text-xs">Entregável (URL)</Label>
                          <Input value={f.entregavel_url ?? ""} onChange={(e) => updateFase(f.id, { entregavel_url: e.target.value })} />
                        </div>
                        <div className="md:col-span-2"><Label className="text-xs">Status</Label>
                          <Select value={f.status} onValueChange={(v) => updateFase(f.id, { status: v })}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>{FASE_STATUS.map((s) => <SelectItem key={s} value={s}>{FASE_STATUS_LABEL[s]}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        <div className="md:col-span-2"><Label className="text-xs">Nota</Label>
                          <Input type="number" step="0.1" min="0" max={f.pontos_max ?? undefined}
                            value={f.nota ?? ""} onChange={(e) => updateFase(f.id, { nota: e.target.value ? Number(e.target.value) : null })} />
                        </div>
                        <div className="md:col-span-4">
                          <Button size="sm" onClick={() => salvarFase(f)} className="w-full">
                            <Save className="w-4 h-4 mr-1" />Salvar avaliação
                          </Button>
                        </div>
                      </div>
                      <div><Label className="text-xs">Feedback</Label>
                        <Textarea rows={2} value={f.feedback ?? ""} onChange={(e) => updateFase(f.id, { feedback: e.target.value })} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* PARES */}
          <TabsContent value="pares">
            <Card>
              <CardHeader>
                <CardTitle>Avaliação por pares (0–10 por membro)</CardTitle>
                <p className="text-xs text-muted-foreground">Linha = avaliador · Coluna = avaliado</p>
              </CardHeader>
              <CardContent>
                {membros.length < 2 ? (
                  <p className="text-muted-foreground">Cadastre ao menos 2 membros para avaliar.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border">
                      <thead>
                        <tr>
                          <th className="border p-2 bg-muted text-left">Avaliador ↓ / Avaliado →</th>
                          {membros.map((m) => (
                            <th key={m.id} className="border p-2 bg-muted text-xs">{m.nome}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {membros.map((av) => (
                          <tr key={av.id}>
                            <td className="border p-2 font-medium">{av.nome}</td>
                            {membros.map((ad) => (
                              <td key={ad.id} className="border p-1">
                                <Input type="number" min="0" max="10" step="0.5" className="w-16 h-8"
                                  defaultValue={getPar(av.id, ad.id)}
                                  onBlur={(e) => setPar(av.id, ad.id, Number(e.target.value))}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* DOCUMENTOS */}
          <TabsContent value="docs">
            <Card>
              <CardHeader><CardTitle>Documentos & Links</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {docs.map((d) => (
                  <div key={d.id} className="flex items-center gap-2 border rounded-md p-2">
                    <div className="flex-1">
                      <a href={d.url} target="_blank" rel="noreferrer" className="font-medium text-primary underline">{d.titulo}</a>
                      {d.tipo && <Badge variant="outline" className="ml-2">{d.tipo}</Badge>}
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => removeDoc(d.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
                <div className="grid md:grid-cols-4 gap-2 items-end pt-2 border-t">
                  <div><Label className="text-xs">Título</Label>
                    <Input value={novoDoc.titulo} onChange={(e) => setNovoDoc({ ...novoDoc, titulo: e.target.value })} />
                  </div>
                  <div><Label className="text-xs">URL</Label>
                    <Input value={novoDoc.url} onChange={(e) => setNovoDoc({ ...novoDoc, url: e.target.value })} />
                  </div>
                  <div><Label className="text-xs">Tipo</Label>
                    <Input placeholder="Git, PDF, Figma…" value={novoDoc.tipo} onChange={(e) => setNovoDoc({ ...novoDoc, tipo: e.target.value })} />
                  </div>
                  <Button onClick={addDoc}><Plus className="w-4 h-4 mr-2" />Adicionar</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* DASHBOARD */}
          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {dashData.map((d) => (
                <Card key={d.disciplina}>
                  <CardHeader><CardTitle className="text-base">{d.disciplina}</CardTitle></CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>Progresso: <strong>{d.progresso}%</strong></p>
                    <p>Pontos: <strong>{d.pontos}</strong> / {d.pontosMax}</p>
                    <p>Nota média: <strong>{d.notaMedia}</strong></p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card>
              <CardHeader><CardTitle>Progresso por disciplina (%)</CardTitle></CardHeader>
              <CardContent style={{ height: 320 }}>
                <ResponsiveContainer>
                  <BarChart data={dashData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="disciplina" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="progresso" fill="hsl(var(--primary))" name="Progresso %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Pontos obtidos vs. máximos</CardTitle></CardHeader>
              <CardContent style={{ height: 320 }}>
                <ResponsiveContainer>
                  <BarChart data={dashData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="disciplina" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pontos" fill="hsl(var(--primary))" name="Obtidos" />
                    <Bar dataKey="pontosMax" fill="hsl(var(--muted-foreground))" name="Máximos" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
