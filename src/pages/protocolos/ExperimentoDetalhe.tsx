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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Save, Plus, Trash2, ArrowLeft } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";

type MetricaTipo = "eficacia" | "eficiencia" | "satisfacao";
type Metrica = { nome: string; tipo: MetricaTipo; formula?: string };
type Persona = { nome: string; perfil: string; contexto: string; objetivos: string };
type Tarefa = { id: string; descricao: string; criterio_sucesso: string; tempo_esperado_seg: number };
type Resultado = { participante: string; tarefa_id: string; sucesso: boolean; tempo_seg: number; erros: number; sus_score: number; observacoes?: string };

type Experimento = {
  id: string; titulo: string; data_aplicacao: string | null;
  objetivo: string | null;
  hipoteses: string[]; questoes: string[];
  metricas: Metrica[]; personas: Persona[];
  tarefas: Tarefa[]; resultados: Resultado[];
};

const uid = () => Math.random().toString(36).slice(2, 10);

export default function ExperimentoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [exp, setExp] = useState<Experimento | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { if (!loading && !user) navigate("/provas/login"); }, [loading, user, navigate]);

  const load = async () => {
    const { data, error } = await supabase.from("experimentos").select("*").eq("id", id!).maybeSingle();
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    if (!data) return navigate("/protocolos/experimentos");
    setExp({
      ...(data as any),
      hipoteses: data.hipoteses ?? [],
      questoes: data.questoes ?? [],
      metricas: data.metricas ?? [],
      personas: data.personas ?? [],
      tarefas: data.tarefas ?? [],
      resultados: data.resultados ?? [],
    });
  };
  useEffect(() => { if (user && id) load(); }, [user, id]);

  const save = async () => {
    if (!exp) return;
    setSaving(true);
    const { error } = await supabase.from("experimentos").update({
      titulo: exp.titulo, data_aplicacao: exp.data_aplicacao,
      objetivo: exp.objetivo, hipoteses: exp.hipoteses, questoes: exp.questoes,
      metricas: exp.metricas, personas: exp.personas, tarefas: exp.tarefas,
      resultados: exp.resultados,
    }).eq("id", exp.id);
    setSaving(false);
    if (error) return toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
    toast({ title: "Experimento salvo" });
  };

  if (loading || !exp) return null;

  const update = <K extends keyof Experimento>(k: K, v: Experimento[K]) => setExp({ ...exp, [k]: v });

  // === Análise ===
  const participantes = Array.from(new Set(exp.resultados.map(r => r.participante))).filter(Boolean);
  const tarefaStats = exp.tarefas.map(t => {
    const rs = exp.resultados.filter(r => r.tarefa_id === t.id);
    const n = rs.length || 1;
    const sucessos = rs.filter(r => r.sucesso).length;
    const tempoMedio = rs.reduce((s, r) => s + (r.tempo_seg || 0), 0) / n;
    const errosMedio = rs.reduce((s, r) => s + (r.erros || 0), 0) / n;
    const tempos = rs.map(r => r.tempo_seg || 0);
    const desvio = tempos.length ? Math.sqrt(tempos.reduce((s, x) => s + (x - tempoMedio) ** 2, 0) / tempos.length) : 0;
    return {
      tarefa: t.descricao.slice(0, 30) || t.id,
      taxaSucesso: rs.length ? +(sucessos / rs.length * 100).toFixed(1) : 0,
      tempoMedio: +tempoMedio.toFixed(1),
      errosMedio: +errosMedio.toFixed(2),
      desvio: +desvio.toFixed(1),
      n: rs.length,
    };
  });
  const susPorParticipante = participantes.map(p => {
    const rs = exp.resultados.filter(r => r.participante === p && r.sus_score);
    const media = rs.length ? rs.reduce((s, r) => s + r.sus_score, 0) / rs.length : 0;
    return { participante: p, sus: +media.toFixed(1) };
  });
  const susMedio = susPorParticipante.length ? susPorParticipante.reduce((s, x) => s + x.sus, 0) / susPorParticipante.length : 0;
  const totalSucesso = exp.resultados.filter(r => r.sucesso).length;
  const totalFalha = exp.resultados.length - totalSucesso;

  const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--destructive))", "hsl(var(--muted-foreground))"];

  return (
    <main className="min-h-screen bg-background">
      <MainNavigation />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <Button variant="ghost" onClick={() => navigate("/protocolos/experimentos")} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />Voltar
        </Button>

        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="flex-1">
            <Input
              className="text-2xl font-bold border-0 px-0 focus-visible:ring-0 bg-transparent"
              value={exp.titulo}
              onChange={e => update("titulo", e.target.value)}
            />
            <Input
              type="date"
              className="w-48 mt-2"
              value={exp.data_aplicacao ?? ""}
              onChange={e => update("data_aplicacao", e.target.value || null)}
            />
          </div>
          <Button onClick={save} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />{saving ? "Salvando…" : "Salvar"}
          </Button>
        </div>

        <Tabs defaultValue="protocolo">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="protocolo">Protocolo DECIDE</TabsTrigger>
            <TabsTrigger value="coleta">Coleta</TabsTrigger>
            <TabsTrigger value="analise">Análise</TabsTrigger>
          </TabsList>

          {/* PROTOCOLO */}
          <TabsContent value="protocolo" className="space-y-6 mt-6">
            <Card>
              <CardHeader><CardTitle>D — Determine os objetivos</CardTitle></CardHeader>
              <CardContent>
                <Textarea rows={3} placeholder="Qual o propósito deste experimento de usabilidade?"
                  value={exp.objetivo ?? ""} onChange={e => update("objetivo", e.target.value)} />
              </CardContent>
            </Card>

            <ListEditor title="E — Explore as questões/hipóteses (Hipóteses)"
              items={exp.hipoteses} setItems={v => update("hipoteses", v)} placeholder="Ex: O sistema permite concluir tarefa X em menos de 30s" />

            <ListEditor title="Questões de pesquisa"
              items={exp.questoes} setItems={v => update("questoes", v)} placeholder="Ex: Os usuários conseguem localizar a função Y sem ajuda?" />

            <Card>
              <CardHeader><CardTitle>C — Choose as métricas (Eficácia, Eficiência, Satisfação)</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                {exp.metricas.map((m, i) => (
                  <div key={i} className="grid grid-cols-[2fr_1fr_2fr_auto] gap-2">
                    <Input placeholder="Nome da métrica" value={m.nome}
                      onChange={e => { const arr = [...exp.metricas]; arr[i] = { ...m, nome: e.target.value }; update("metricas", arr); }} />
                    <Select value={m.tipo} onValueChange={(v: MetricaTipo) => { const arr = [...exp.metricas]; arr[i] = { ...m, tipo: v }; update("metricas", arr); }}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eficacia">Eficácia</SelectItem>
                        <SelectItem value="eficiencia">Eficiência</SelectItem>
                        <SelectItem value="satisfacao">Satisfação</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Fórmula / como medir" value={m.formula ?? ""}
                      onChange={e => { const arr = [...exp.metricas]; arr[i] = { ...m, formula: e.target.value }; update("metricas", arr); }} />
                    <Button size="icon" variant="ghost" onClick={() => update("metricas", exp.metricas.filter((_, idx) => idx !== i))}>
                      <Trash2 className="w-4 h-4 text-destructive" /></Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={() => update("metricas", [...exp.metricas, { nome: "", tipo: "eficacia" }])}>
                  <Plus className="w-4 h-4 mr-2" />Adicionar métrica
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>I — Identifique os usuários (Personas)</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {exp.personas.map((p, i) => (
                  <div key={i} className="border border-border rounded-lg p-3 space-y-2 relative">
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2"
                      onClick={() => update("personas", exp.personas.filter((_, idx) => idx !== i))}>
                      <Trash2 className="w-4 h-4 text-destructive" /></Button>
                    <Input placeholder="Nome da persona" value={p.nome}
                      onChange={e => { const arr = [...exp.personas]; arr[i] = { ...p, nome: e.target.value }; update("personas", arr); }} />
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Perfil (idade, ocupação)" value={p.perfil}
                        onChange={e => { const arr = [...exp.personas]; arr[i] = { ...p, perfil: e.target.value }; update("personas", arr); }} />
                      <Input placeholder="Contexto de uso" value={p.contexto}
                        onChange={e => { const arr = [...exp.personas]; arr[i] = { ...p, contexto: e.target.value }; update("personas", arr); }} />
                    </div>
                    <Textarea rows={2} placeholder="Objetivos" value={p.objetivos}
                      onChange={e => { const arr = [...exp.personas]; arr[i] = { ...p, objetivos: e.target.value }; update("personas", arr); }} />
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={() => update("personas", [...exp.personas, { nome: "", perfil: "", contexto: "", objetivos: "" }])}>
                  <Plus className="w-4 h-4 mr-2" />Adicionar persona
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>D — Decida sobre as tarefas (E — Evaluate)</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {exp.tarefas.map((t, i) => (
                  <div key={t.id} className="border border-border rounded-lg p-3 space-y-2 relative">
                    <p className="text-xs text-muted-foreground">Tarefa {i + 1} · id: <code>{t.id}</code></p>
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2"
                      onClick={() => update("tarefas", exp.tarefas.filter(x => x.id !== t.id))}>
                      <Trash2 className="w-4 h-4 text-destructive" /></Button>
                    <Textarea rows={2} placeholder="Descrição da tarefa" value={t.descricao}
                      onChange={e => { const arr = exp.tarefas.map(x => x.id === t.id ? { ...x, descricao: e.target.value } : x); update("tarefas", arr); }} />
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Critério de sucesso" value={t.criterio_sucesso}
                        onChange={e => { const arr = exp.tarefas.map(x => x.id === t.id ? { ...x, criterio_sucesso: e.target.value } : x); update("tarefas", arr); }} />
                      <Input type="number" placeholder="Tempo esperado (s)" value={t.tempo_esperado_seg || ""}
                        onChange={e => { const arr = exp.tarefas.map(x => x.id === t.id ? { ...x, tempo_esperado_seg: Number(e.target.value) } : x); update("tarefas", arr); }} />
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={() => update("tarefas", [...exp.tarefas, { id: uid(), descricao: "", criterio_sucesso: "", tempo_esperado_seg: 0 }])}>
                  <Plus className="w-4 h-4 mr-2" />Adicionar tarefa
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* COLETA */}
          <TabsContent value="coleta" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Coleta de Resultados</CardTitle>
                <p className="text-sm text-muted-foreground">Uma linha por participante × tarefa.</p>
              </CardHeader>
              <CardContent>
                {exp.tarefas.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Cadastre tarefas no Protocolo antes de coletar resultados.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border text-left">
                          <th className="p-2">Participante</th>
                          <th className="p-2">Tarefa</th>
                          <th className="p-2">Sucesso</th>
                          <th className="p-2">Tempo (s)</th>
                          <th className="p-2">Erros</th>
                          <th className="p-2">SUS (0-100)</th>
                          <th className="p-2">Observações</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {exp.resultados.map((r, i) => (
                          <tr key={i} className="border-b border-border/50">
                            <td className="p-1"><Input value={r.participante} onChange={e => { const arr = [...exp.resultados]; arr[i] = { ...r, participante: e.target.value }; update("resultados", arr); }} /></td>
                            <td className="p-1">
                              <Select value={r.tarefa_id} onValueChange={v => { const arr = [...exp.resultados]; arr[i] = { ...r, tarefa_id: v }; update("resultados", arr); }}>
                                <SelectTrigger className="w-48"><SelectValue placeholder="Tarefa" /></SelectTrigger>
                                <SelectContent>{exp.tarefas.map(t => <SelectItem key={t.id} value={t.id}>{t.descricao.slice(0, 40) || t.id}</SelectItem>)}</SelectContent>
                              </Select>
                            </td>
                            <td className="p-1">
                              <Select value={r.sucesso ? "1" : "0"} onValueChange={v => { const arr = [...exp.resultados]; arr[i] = { ...r, sucesso: v === "1" }; update("resultados", arr); }}>
                                <SelectTrigger className="w-20"><SelectValue /></SelectTrigger>
                                <SelectContent><SelectItem value="1">Sim</SelectItem><SelectItem value="0">Não</SelectItem></SelectContent>
                              </Select>
                            </td>
                            <td className="p-1"><Input type="number" className="w-20" value={r.tempo_seg || ""} onChange={e => { const arr = [...exp.resultados]; arr[i] = { ...r, tempo_seg: Number(e.target.value) }; update("resultados", arr); }} /></td>
                            <td className="p-1"><Input type="number" className="w-16" value={r.erros || ""} onChange={e => { const arr = [...exp.resultados]; arr[i] = { ...r, erros: Number(e.target.value) }; update("resultados", arr); }} /></td>
                            <td className="p-1"><Input type="number" className="w-20" value={r.sus_score || ""} onChange={e => { const arr = [...exp.resultados]; arr[i] = { ...r, sus_score: Number(e.target.value) }; update("resultados", arr); }} /></td>
                            <td className="p-1"><Input value={r.observacoes ?? ""} onChange={e => { const arr = [...exp.resultados]; arr[i] = { ...r, observacoes: e.target.value }; update("resultados", arr); }} /></td>
                            <td className="p-1"><Button size="icon" variant="ghost" onClick={() => update("resultados", exp.resultados.filter((_, idx) => idx !== i))}><Trash2 className="w-4 h-4 text-destructive" /></Button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <Button variant="outline" size="sm" className="mt-3" disabled={exp.tarefas.length === 0}
                  onClick={() => update("resultados", [...exp.resultados, { participante: "", tarefa_id: exp.tarefas[0]?.id ?? "", sucesso: false, tempo_seg: 0, erros: 0, sus_score: 0 }])}>
                  <Plus className="w-4 h-4 mr-2" />Adicionar linha
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ANALISE */}
          <TabsContent value="analise" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <StatCard label="Participantes" value={participantes.length} />
              <StatCard label="Tarefas avaliadas" value={exp.tarefas.length} />
              <StatCard label="SUS médio" value={susMedio.toFixed(1)} hint="0–100, ≥68 = aceitável" />
            </div>

            <Card>
              <CardHeader><CardTitle>Estatísticas por Tarefa</CardTitle></CardHeader>
              <CardContent className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border text-left">
                    <th className="p-2">Tarefa</th><th className="p-2">N</th>
                    <th className="p-2">Taxa Sucesso (Eficácia)</th>
                    <th className="p-2">Tempo Médio (s) (Eficiência)</th>
                    <th className="p-2">Desvio (s)</th><th className="p-2">Erros Médios</th>
                  </tr></thead>
                  <tbody>
                    {tarefaStats.map((s, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="p-2">{s.tarefa}</td><td className="p-2">{s.n}</td>
                        <td className="p-2">{s.taxaSucesso}%</td>
                        <td className="p-2">{s.tempoMedio}</td>
                        <td className="p-2">{s.desvio}</td>
                        <td className="p-2">{s.errosMedio}</td>
                      </tr>
                    ))}
                    {tarefaStats.length === 0 && <tr><td colSpan={6} className="p-4 text-center text-muted-foreground">Sem dados coletados.</td></tr>}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {tarefaStats.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Eficácia — Taxa de Sucesso por Tarefa</CardTitle></CardHeader>
                  <CardContent style={{ height: 280 }}>
                    <ResponsiveContainer><BarChart data={tarefaStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="tarefa" tick={{ fontSize: 11 }} /><YAxis unit="%" />
                      <Tooltip /><Bar dataKey="taxaSucesso" fill="hsl(var(--primary))" />
                    </BarChart></ResponsiveContainer>
                  </CardContent></Card>

                <Card><CardHeader><CardTitle>Eficiência — Tempo Médio por Tarefa</CardTitle></CardHeader>
                  <CardContent style={{ height: 280 }}>
                    <ResponsiveContainer><BarChart data={tarefaStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="tarefa" tick={{ fontSize: 11 }} /><YAxis unit="s" />
                      <Tooltip /><Bar dataKey="tempoMedio" fill="hsl(var(--accent))" />
                    </BarChart></ResponsiveContainer>
                  </CardContent></Card>

                {susPorParticipante.length > 0 && (
                  <Card><CardHeader><CardTitle>Satisfação — SUS por Participante</CardTitle></CardHeader>
                    <CardContent style={{ height: 280 }}>
                      <ResponsiveContainer>
                        <RadarChart data={susPorParticipante}>
                          <PolarGrid /><PolarAngleAxis dataKey="participante" />
                          <PolarRadiusAxis domain={[0, 100]} />
                          <Radar dataKey="sus" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </CardContent></Card>
                )}

                <Card><CardHeader><CardTitle>Distribuição Sucesso × Falha</CardTitle></CardHeader>
                  <CardContent style={{ height: 280 }}>
                    <ResponsiveContainer><PieChart>
                      <Pie data={[{ name: "Sucesso", value: totalSucesso }, { name: "Falha", value: totalFalha }]} dataKey="value" nameKey="name" outerRadius={90} label>
                        <Cell fill="hsl(var(--primary))" /><Cell fill="hsl(var(--destructive))" />
                      </Pie><Tooltip /><Legend />
                    </PieChart></ResponsiveContainer>
                  </CardContent></Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <Card><CardContent className="pt-6">
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold text-foreground mt-1">{value}</p>
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </CardContent></Card>
  );
}

function ListEditor({ title, items, setItems, placeholder }: { title: string; items: string[]; setItems: (v: string[]) => void; placeholder: string }) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <Textarea rows={2} value={it} placeholder={placeholder}
              onChange={e => { const arr = [...items]; arr[i] = e.target.value; setItems(arr); }} />
            <Button size="icon" variant="ghost" onClick={() => setItems(items.filter((_, idx) => idx !== i))}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => setItems([...items, ""])}>
          <Plus className="w-4 h-4 mr-2" />Adicionar
        </Button>
      </CardContent>
    </Card>
  );
}
