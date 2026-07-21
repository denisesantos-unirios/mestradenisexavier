import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Save, Plus, Trash2, ArrowLeft, Target, Gauge, Smile, FileText, Printer, BookOpen, Users, ClipboardList, Shield, BarChart3, UserPlus, CheckCircle2, Circle, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";

type FatorTipo = "eficacia" | "eficiencia" | "satisfacao";
type Metrica = { nome: string; tipo: FatorTipo; formula?: string; pior?: string; almejado?: string; melhor?: string };
type Persona = { nome: string; perfil: string; contexto: string; objetivos: string };
type Tarefa = { id: string; descricao: string; criterio_sucesso: string; criterios_sucesso?: string[]; personas_idx?: number[]; tempo_esperado_seg: number; fator?: FatorTipo };
type Hipotese = { fator: FatorTipo; texto: string };
type Questao = { fator: FatorTipo; texto: string };
type Resultado = { participante: string; persona_idx?: number | null; tarefa_id: string; sucesso: boolean; tempo_seg: number; erros: number; sus_score: number; observacoes?: string };

type TecnicaTipo = "teste_usabilidade" | "pensar_alto" | "questionario_pre" | "entrevista_pos" | "sus" | "observacao_direta" | "avaliacao_heuristica" | "percurso_cognitivo" | "focus_group";
type Tecnicas = { principal?: TecnicaTipo; complementares?: TecnicaTipo[]; justificativa?: string };

type TCLE = {
  pesquisa_titulo?: string;
  pesquisador?: string;
  instituicao?: string;
  contato?: string;
  local?: string;
  duracao_estimada?: string;
  objetivo_breve?: string;
  procedimentos?: string;
  riscos?: string;
  beneficios?: string;
  gravacao?: boolean;
  uso_imagem?: boolean;
};

type SatisfacaoResposta = { participante: string; respostas: number[]; comentario?: string };

type Experimento = {
  id: string; titulo: string; data_aplicacao: string | null;
  objetivo: string | null;
  fatores: FatorTipo[];
  hipoteses: Hipotese[]; questoes: Questao[];
  metricas: Metrica[]; personas: Persona[];
  tarefas: Tarefa[]; resultados: Resultado[];
  tecnicas: Tecnicas;
  tcle: TCLE;
  satisfacao_respostas: SatisfacaoResposta[];
};


const uid = () => Math.random().toString(36).slice(2, 10);

const FATOR_META: Record<FatorTipo, { label: string; desc: string; icon: any; color: string }> = {
  eficacia: { label: "Eficácia", desc: "Capacidade do usuário em concluir a tarefa", icon: Target, color: "text-blue-500" },
  eficiencia: { label: "Eficiência", desc: "Tempo / esforço para concluir a tarefa", icon: Gauge, color: "text-amber-500" },
  satisfacao: { label: "Satisfação", desc: "Percepção subjetiva do usuário (SUS, etc.)", icon: Smile, color: "text-emerald-500" },
};
const ALL_FATORES: FatorTipo[] = ["eficacia", "eficiencia", "satisfacao"];

// Normaliza strings antigas em objetos {fator, texto}
const normalizeStrList = (arr: any[]): { fator: FatorTipo; texto: string }[] =>
  (arr || []).map((it) =>
    typeof it === "string" ? { fator: "eficacia" as FatorTipo, texto: it } : { fator: (it.fator || "eficacia") as FatorTipo, texto: it.texto ?? "" }
  );


const TECNICAS_LABELS: Record<TecnicaTipo, string> = {
  teste_usabilidade: "Teste de Usabilidade",
  pensar_alto: "Protocolo Verbal (Pensar Alto / Think Aloud)",
  questionario_pre: "Questionário pré-teste",
  entrevista_pos: "Entrevista pós-teste semiestruturada",
  sus: "Escala SUS (System Usability Scale)",
  observacao_direta: "Observação direta",
  avaliacao_heuristica: "Avaliação Heurística (Nielsen)",
  percurso_cognitivo: "Percurso Cognitivo (Cognitive Walkthrough)",
  focus_group: "Focus Group",
};
const TECNICAS_TIPOS: TecnicaTipo[] = ["teste_usabilidade", "pensar_alto", "questionario_pre", "entrevista_pos", "sus", "observacao_direta", "avaliacao_heuristica", "percurso_cognitivo", "focus_group"];

export default function ExperimentoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [exp, setExp] = useState<Experimento | null>(null);
  const [saving, setSaving] = useState(false);
  const [tcleOpen, setTcleOpen] = useState(false);

  useEffect(() => { if (!loading && !user) navigate("/provas/login"); }, [loading, user, navigate]);

  const load = async () => {
    const { data, error } = await supabase.from("experimentos").select("*").eq("id", id!).maybeSingle();
    if (error) return toast({ title: "Erro", description: error.message, variant: "destructive" });
    if (!data) return navigate("/protocolos/experimentos");
    const d: any = data;
    setExp({
      ...d,
      fatores: Array.isArray(d.fatores) && d.fatores.length ? d.fatores : ALL_FATORES,
      hipoteses: normalizeStrList(d.hipoteses ?? []),
      questoes: normalizeStrList(d.questoes ?? []),
      metricas: d.metricas ?? [],
      personas: d.personas ?? [],
      tarefas: (d.tarefas ?? []).map((t: any) => ({
        ...t,
        fator: t.fator ?? "eficacia",
        personas_idx: Array.isArray(t.personas_idx) ? t.personas_idx : [],
        criterios_sucesso: Array.isArray(t.criterios_sucesso) && t.criterios_sucesso.length
          ? t.criterios_sucesso
          : (t.criterio_sucesso ? [t.criterio_sucesso] : []),
      })),
      resultados: d.resultados ?? [],
      tecnicas: d.tecnicas ?? { complementares: [] },
      tcle: d.tcle ?? {},
      satisfacao_respostas: Array.isArray(d.satisfacao_respostas) ? d.satisfacao_respostas : [],
    });
  };
  useEffect(() => { if (user && id) load(); }, [user, id]);

  const save = async () => {
    if (!exp) return;
    setSaving(true);
    const { error } = await supabase.from("experimentos").update({
      titulo: exp.titulo, data_aplicacao: exp.data_aplicacao,
      objetivo: exp.objetivo,
      fatores: exp.fatores as any,
      hipoteses: exp.hipoteses as any, questoes: exp.questoes as any,
      metricas: exp.metricas as any, personas: exp.personas as any,
      tarefas: exp.tarefas as any, resultados: exp.resultados as any,
      tecnicas: exp.tecnicas as any, tcle: exp.tcle as any,
      satisfacao_respostas: exp.satisfacao_respostas as any,
    } as any).eq("id", exp.id);
    setSaving(false);
    if (error) return toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
    toast({ title: "Experimento salvo" });
  };


  if (loading || !exp) return null;

  const update = <K extends keyof Experimento>(k: K, v: Experimento[K]) => setExp({ ...exp, [k]: v });

  const toggleFator = (f: FatorTipo, on: boolean) => {
    const set = new Set(exp.fatores);
    on ? set.add(f) : set.delete(f);
    update("fatores", ALL_FATORES.filter(x => set.has(x)));
  };

  // === Análise ===
  const participantes = Array.from(new Set(exp.resultados.map(r => r.participante))).filter(Boolean);
  // Agrupa por descrição da tarefa (dedup entre fatores) — 1 linha por tarefa
  const tarefaStats = (() => {
    const grupos = new Map<string, { ids: string[]; descricao: string; tempoEsperado: number }>();
    exp.tarefas.forEach(t => {
      const key = (t.descricao || t.id).trim().toLowerCase();
      const g = grupos.get(key) ?? { ids: [], descricao: t.descricao || t.id, tempoEsperado: t.tempo_esperado_seg || 0 };
      g.ids.push(t.id);
      g.tempoEsperado = g.tempoEsperado || t.tempo_esperado_seg || 0;
      grupos.set(key, g);
    });
    return Array.from(grupos.values()).map(g => {
      const rs = exp.resultados.filter(r => g.ids.includes(r.tarefa_id));
      const n = rs.length || 1;
      const sucessos = rs.filter(r => r.sucesso).length;
      const tempoMedio = rs.reduce((s, r) => s + (r.tempo_seg || 0), 0) / n;
      const errosMedio = rs.reduce((s, r) => s + (r.erros || 0), 0) / n;
      const tempos = rs.map(r => r.tempo_seg || 0);
      const desvio = tempos.length ? Math.sqrt(tempos.reduce((s, x) => s + (x - tempoMedio) ** 2, 0) / tempos.length) : 0;
      const susRs = rs.filter(r => r.sus_score);
      const susMed = susRs.length ? susRs.reduce((s, r) => s + r.sus_score, 0) / susRs.length : 0;
      const taxaSucesso = rs.length ? +(sucessos / rs.length * 100).toFixed(1) : 0;
      // Eficiência: quanto o tempo médio se compara ao esperado (100% = igual ou melhor)
      const eficiencia = g.tempoEsperado && tempoMedio ? +Math.min(100, (g.tempoEsperado / tempoMedio) * 100).toFixed(1) : 0;
      return {
        tarefa: g.descricao.slice(0, 32),
        descricaoCompleta: g.descricao,
        taxaSucesso,
        eficiencia,
        tempoMedio: +tempoMedio.toFixed(1),
        tempoEsperado: g.tempoEsperado,
        errosMedio: +errosMedio.toFixed(2),
        desvio: +desvio.toFixed(1),
        susMedio: +susMed.toFixed(1),
        n: rs.length,
      };
    });
  })();
  const susPorParticipante = participantes.map(p => {
    const rs = exp.resultados.filter(r => r.participante === p && r.sus_score);
    const media = rs.length ? rs.reduce((s, r) => s + r.sus_score, 0) / rs.length : 0;
    return { participante: p, sus: +media.toFixed(1) };
  });
  const susMedio = susPorParticipante.length ? susPorParticipante.reduce((s, x) => s + x.sus, 0) / susPorParticipante.length : 0;

  // Análise por persona: agrega resultados das tarefas atribuídas a cada persona
  const personaStats = exp.personas.map((p, pi) => {
    const tarefasDaPersona = exp.tarefas.filter(t => (t.personas_idx ?? []).includes(pi));
    const ids = tarefasDaPersona.map(t => t.id);
    const rs = exp.resultados.filter(r => ids.includes(r.tarefa_id));
    const n = rs.length;
    const participantesUnicos = new Set(rs.map(r => r.participante).filter(Boolean)).size;
    const sucessos = rs.filter(r => r.sucesso).length;
    const taxaSucesso = n ? +(sucessos / n * 100).toFixed(1) : 0;
    const tempoMedio = n ? +(rs.reduce((s, r) => s + (r.tempo_seg || 0), 0) / n).toFixed(1) : 0;
    const errosMedio = n ? +(rs.reduce((s, r) => s + (r.erros || 0), 0) / n).toFixed(2) : 0;
    const susRs = rs.filter(r => r.sus_score);
    const susMed = susRs.length ? +(susRs.reduce((s, r) => s + r.sus_score, 0) / susRs.length).toFixed(1) : 0;
    const metaSoma = tarefasDaPersona.reduce((s, t) => s + (t.tempo_esperado_seg || 0), 0);
    const metaMedia = tarefasDaPersona.length ? +(metaSoma / tarefasDaPersona.length).toFixed(1) : 0;
    return {
      persona: p.nome || `Persona ${pi + 1}`,
      perfil: p.perfil || "",
      qtdTarefas: tarefasDaPersona.length,
      participantes: participantesUnicos,
      n,
      taxaSucesso,
      tempoMedio,
      metaMedia,
      errosMedio,
      susMedio: susMed,
    };
  });
  const totalSucesso = exp.resultados.filter(r => r.sucesso).length;
  const totalFalha = exp.resultados.length - totalSucesso;

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

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-sm text-foreground/80">
                  O <strong>Framework DECIDE</strong> (Rogers, Sharp & Preece) estrutura uma avaliação empírica de usabilidade em 6 fases:
                  <strong> D</strong>etermine objetivos · <strong>E</strong>xplore questões · <strong>C</strong>hoose técnica ·
                  <strong> I</strong>dentify usuários · <strong>D</strong>ecide ética · <strong>E</strong>valuate resultados.
                  Preencha cada fase abaixo — os dados são reaproveitados na coleta, na análise e na geração do TCLE.
                </p>
              </CardContent>
            </Card>

            {/* D — DETERMINE */}
            <PhaseHeader letter="D" title="Determine os objetivos da avaliação" icon={Target} desc="Defina o propósito geral e os fatores de usabilidade (ISO 9241-11) que serão investigados." />
            <Card>
              <CardHeader><CardTitle className="text-base">Objetivo geral do experimento</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <Textarea rows={4} placeholder="Ex.: Verificar se os usuários conseguem concluir as principais funcionalidades do sistema X com eficácia, eficiência e satisfação, mesmo sem treinamento prévio."
                  value={exp.objetivo ?? ""} onChange={e => update("objetivo", e.target.value)} />

                <div>
                  <p className="text-sm font-medium mb-2">Fatores de usabilidade investigados</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Para cada fator marcado você definirá, nas fases <strong>E</strong> e <strong>E</strong> abaixo, hipóteses, questões de pesquisa, métricas e tarefas específicas.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {ALL_FATORES.map(f => {
                      const meta = FATOR_META[f];
                      const Icon = meta.icon;
                      const checked = exp.fatores.includes(f);
                      return (
                        <label key={f} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${checked ? "border-primary bg-primary/5" : "border-border"}`}>
                          <Checkbox checked={checked} onCheckedChange={v => toggleFator(f, !!v)} />
                          <div>
                            <div className="flex items-center gap-2">
                              <Icon className={`w-4 h-4 ${meta.color}`} />
                              <span className="font-medium">{meta.label}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{meta.desc}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* E — EXPLORE (Hipóteses + Questões por fator) */}
            <PhaseHeader letter="E" title="Explore as perguntas específicas" icon={BookOpen} desc="Para cada fator selecionado, registre hipóteses (afirmações a testar) e questões de pesquisa (perguntas a responder)." />

            {exp.fatores.length === 0 && (
              <Card><CardContent className="py-8 text-center text-muted-foreground text-sm">
                Selecione ao menos um fator na fase D para liberar as próximas fases.
              </CardContent></Card>
            )}

            {exp.fatores.map(f => {
              const meta = FATOR_META[f];
              const Icon = meta.icon;
              return (
                <Card key={`eh-${f}`} className="border-l-4" style={{ borderLeftColor: "hsl(var(--primary))" }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className={`w-5 h-5 ${meta.color}`} /> Fator: {meta.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <FatorListEditor
                      label="Hipóteses"
                      placeholder={`Ex (${meta.label}): O usuário concluirá a tarefa X em menos de Y segundos.`}
                      items={exp.hipoteses.filter(h => h.fator === f).map(h => h.texto)}
                      onChange={(arr) => {
                        const outros = exp.hipoteses.filter(h => h.fator !== f);
                        update("hipoteses", [...outros, ...arr.map(texto => ({ fator: f, texto }))]);
                      }}
                    />
                    <FatorListEditor
                      label="Questões de pesquisa"
                      placeholder="Ex: Os usuários conseguem...?"
                      items={exp.questoes.filter(q => q.fator === f).map(q => q.texto)}
                      onChange={(arr) => {
                        const outros = exp.questoes.filter(q => q.fator !== f);
                        update("questoes", [...outros, ...arr.map(texto => ({ fator: f, texto }))]);
                      }}
                    />
                  </CardContent>
                </Card>
              );
            })}

            {/* C — CHOOSE TÉCNICAS */}
            <PhaseHeader letter="C" title="Choose o paradigma e as técnicas de avaliação" icon={ClipboardList} desc="Selecione a técnica principal e as complementares que serão aplicadas — e justifique a escolha." />
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Técnica principal</p>
                  <Select value={exp.tecnicas.principal ?? ""} onValueChange={(v) => update("tecnicas", { ...exp.tecnicas, principal: v as TecnicaTipo })}>
                    <SelectTrigger><SelectValue placeholder="Selecione a técnica principal" /></SelectTrigger>
                    <SelectContent>
                      {TECNICAS_TIPOS.map(t => <SelectItem key={t} value={t}>{TECNICAS_LABELS[t]}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Técnicas complementares</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {TECNICAS_TIPOS.filter(t => t !== exp.tecnicas.principal).map(t => {
                      const arr = exp.tecnicas.complementares ?? [];
                      const checked = arr.includes(t);
                      return (
                        <label key={t} className={`flex items-center gap-2 p-2 rounded-md border cursor-pointer text-sm ${checked ? "border-primary bg-primary/5" : "border-border"}`}>
                          <Checkbox checked={checked} onCheckedChange={v => {
                            const next = v ? [...arr, t] : arr.filter(x => x !== t);
                            update("tecnicas", { ...exp.tecnicas, complementares: next });
                          }} />
                          {TECNICAS_LABELS[t]}
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Justificativa da escolha</p>
                  <Textarea rows={3} placeholder="Por que estas técnicas são adequadas para medir os fatores deste experimento?"
                    value={exp.tecnicas.justificativa ?? ""} onChange={e => update("tecnicas", { ...exp.tecnicas, justificativa: e.target.value })} />
                </div>
              </CardContent>
            </Card>

            {/* I — IDENTIFY USUÁRIOS */}
            <PhaseHeader letter="I" title="Identify os usuários (Personas)" icon={Users} desc="Descreva os perfis dos participantes do teste — usados também na geração do TCLE e nos relatórios." />
            <Card>
              <CardContent className="pt-6 space-y-3">
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
                    <Textarea rows={2} placeholder="Objetivos da persona" value={p.objetivos}
                      onChange={e => { const arr = [...exp.personas]; arr[i] = { ...p, objetivos: e.target.value }; update("personas", arr); }} />
                  </div>
                ))}
                <Button variant="outline" size="sm" onClick={() => update("personas", [...exp.personas, { nome: "", perfil: "", contexto: "", objetivos: "" }])}>
                  <Plus className="w-4 h-4 mr-2" />Adicionar persona
                </Button>
              </CardContent>
            </Card>

            {/* D — DECIDE ÉTICA + TCLE */}
            <PhaseHeader letter="D" title="Decide como lidar com as questões éticas" icon={Shield} desc="Conforme a Resolução CNS 510/2016. Preencha os dados abaixo e gere o modelo de TCLE pronto para impressão." />
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div><p className="text-xs text-muted-foreground mb-1">Título da pesquisa</p>
                    <Input value={exp.tcle.pesquisa_titulo ?? exp.titulo} onChange={e => update("tcle", { ...exp.tcle, pesquisa_titulo: e.target.value })} /></div>
                  <div><p className="text-xs text-muted-foreground mb-1">Pesquisador responsável</p>
                    <Input value={exp.tcle.pesquisador ?? ""} onChange={e => update("tcle", { ...exp.tcle, pesquisador: e.target.value })} /></div>
                  <div><p className="text-xs text-muted-foreground mb-1">Instituição</p>
                    <Input value={exp.tcle.instituicao ?? ""} onChange={e => update("tcle", { ...exp.tcle, instituicao: e.target.value })} /></div>
                  <div><p className="text-xs text-muted-foreground mb-1">Contato (e-mail / telefone)</p>
                    <Input value={exp.tcle.contato ?? ""} onChange={e => update("tcle", { ...exp.tcle, contato: e.target.value })} /></div>
                  <div><p className="text-xs text-muted-foreground mb-1">Local de realização</p>
                    <Input value={exp.tcle.local ?? ""} onChange={e => update("tcle", { ...exp.tcle, local: e.target.value })} /></div>
                  <div><p className="text-xs text-muted-foreground mb-1">Duração estimada da sessão</p>
                    <Input placeholder="Ex.: 45 minutos" value={exp.tcle.duracao_estimada ?? ""} onChange={e => update("tcle", { ...exp.tcle, duracao_estimada: e.target.value })} /></div>
                </div>
                <div><p className="text-xs text-muted-foreground mb-1">Objetivo (versão para o participante)</p>
                  <Textarea rows={2} value={exp.tcle.objetivo_breve ?? ""} onChange={e => update("tcle", { ...exp.tcle, objetivo_breve: e.target.value })} /></div>
                <div><p className="text-xs text-muted-foreground mb-1">Procedimentos a serem realizados</p>
                  <Textarea rows={2} value={exp.tcle.procedimentos ?? ""} onChange={e => update("tcle", { ...exp.tcle, procedimentos: e.target.value })} /></div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div><p className="text-xs text-muted-foreground mb-1">Riscos previstos</p>
                    <Textarea rows={2} value={exp.tcle.riscos ?? ""} onChange={e => update("tcle", { ...exp.tcle, riscos: e.target.value })} /></div>
                  <div><p className="text-xs text-muted-foreground mb-1">Benefícios esperados</p>
                    <Textarea rows={2} value={exp.tcle.beneficios ?? ""} onChange={e => update("tcle", { ...exp.tcle, beneficios: e.target.value })} /></div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <Checkbox checked={!!exp.tcle.gravacao} onCheckedChange={v => update("tcle", { ...exp.tcle, gravacao: !!v })} />
                    Haverá gravação de tela/áudio
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <Checkbox checked={!!exp.tcle.uso_imagem} onCheckedChange={v => update("tcle", { ...exp.tcle, uso_imagem: !!v })} />
                    Uso de imagem do participante
                  </label>
                </div>

                <Dialog open={tcleOpen} onOpenChange={setTcleOpen}>
                  <DialogTrigger asChild>
                    <Button className="mt-2"><FileText className="w-4 h-4 mr-2" />Gerar modelo de TCLE</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader><DialogTitle>Termo de Consentimento Livre e Esclarecido (TCLE)</DialogTitle></DialogHeader>
                    <div id="tcle-print" className="prose prose-sm dark:prose-invert max-w-none">
                      <TCLEPreview exp={exp} />
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => imprimirTCLE()}><Printer className="w-4 h-4 mr-2" />Imprimir / Salvar PDF</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* E — EVALUATE (Tarefas compartilhadas + Métricas por fator) */}
            <PhaseHeader letter="E" title="Evaluate, interprete e apresente os dados" icon={BarChart3} desc="Defina primeiro as tarefas (compartilhadas entre Eficácia e Eficiência) e, em seguida, as métricas específicas de cada fator." />

            {/* 1) Tarefas compartilhadas */}
            <Card className="border-l-4" style={{ borderLeftColor: "hsl(var(--primary))" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <ClipboardList className="w-5 h-5 text-primary" /> Tarefas do experimento
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  Uma única lista de tarefas será utilizada para medir Eficácia (sucesso) e Eficiência (tempo/esforço) sobre a mesma execução.
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {exp.tarefas.map((t) => {
                  const criterios = t.criterios_sucesso && t.criterios_sucesso.length
                    ? t.criterios_sucesso
                    : (t.criterio_sucesso ? [t.criterio_sucesso] : [""]);
                  const personasIdx = t.personas_idx ?? [];
                  const updateTarefa = (patch: Partial<Tarefa>) => {
                    const arr = exp.tarefas.map(x => x.id === t.id ? { ...x, ...patch } : x);
                    update("tarefas", arr);
                  };
                  return (
                  <div key={t.id} className="border border-border rounded-lg p-3 space-y-3 relative">
                    <p className="text-xs text-muted-foreground">Tarefa · id: <code>{t.id}</code></p>
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2"
                      onClick={() => update("tarefas", exp.tarefas.filter(x => x.id !== t.id))}>
                      <Trash2 className="w-4 h-4 text-destructive" /></Button>
                    <Textarea rows={2} placeholder="Descrição da tarefa" value={t.descricao}
                      onChange={e => updateTarefa({ descricao: e.target.value })} />

                    <div>
                      <p className="text-xs font-medium mb-2">Personas que realizarão esta tarefa</p>
                      {exp.personas.length === 0 ? (
                        <p className="text-xs text-muted-foreground">Cadastre personas na fase I para selecioná-las aqui.</p>
                      ) : (
                        <div className="grid md:grid-cols-2 gap-2">
                          {exp.personas.map((p, pi) => {
                            const checked = personasIdx.includes(pi);
                            return (
                              <label key={pi} className={`flex items-center gap-2 p-2 rounded-md border cursor-pointer text-sm ${checked ? "border-primary bg-primary/5" : "border-border"}`}>
                                <Checkbox checked={checked} onCheckedChange={(v) => {
                                  const next = v ? [...personasIdx, pi] : personasIdx.filter(x => x !== pi);
                                  updateTarefa({ personas_idx: next.sort((a, b) => a - b) });
                                }} />
                                <span className="truncate">{p.nome || `Persona ${pi + 1}`}</span>
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-xs font-medium mb-2">Critérios de sucesso</p>
                      <div className="space-y-2">
                        {criterios.map((c, ci) => (
                          <div key={ci} className="flex gap-2">
                            <Input placeholder={`Critério ${ci + 1}`} value={c}
                              onChange={e => {
                                const next = [...criterios];
                                next[ci] = e.target.value;
                                updateTarefa({ criterios_sucesso: next, criterio_sucesso: next[0] ?? "" });
                              }} />
                            <Button size="icon" variant="ghost" onClick={() => {
                              const next = criterios.filter((_, idx) => idx !== ci);
                              updateTarefa({ criterios_sucesso: next.length ? next : [], criterio_sucesso: next[0] ?? "" });
                            }}>
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm" onClick={() => {
                          const next = [...criterios, ""];
                          updateTarefa({ criterios_sucesso: next, criterio_sucesso: next[0] ?? "" });
                        }}>
                          <Plus className="w-4 h-4 mr-2" />Adicionar critério
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium mb-1">Tempo esperado (segundos)</p>
                      <Input type="number" placeholder="Tempo esperado (s)" value={t.tempo_esperado_seg || ""}
                        onChange={e => updateTarefa({ tempo_esperado_seg: Number(e.target.value) })} />
                    </div>
                  </div>
                  );
                })}
                <Button variant="outline" size="sm"
                  onClick={() => update("tarefas", [...exp.tarefas, { id: uid(), descricao: "", criterio_sucesso: "", criterios_sucesso: [], personas_idx: [], tempo_esperado_seg: 0, fator: "eficacia" }])}>
                  <Plus className="w-4 h-4 mr-2" />Adicionar tarefa
                </Button>

              </CardContent>
            </Card>

            {/* 2) Métricas por fator */}
            {exp.fatores.map(f => {
              const meta = FATOR_META[f];
              const Icon = meta.icon;
              const sugestoes: Record<FatorTipo, string> = {
                eficacia: "Ex.: Taxa de sucesso (%) = tarefas concluídas / tarefas totais",
                eficiencia: "Ex.: Tempo médio por tarefa (s); nº de erros por tarefa",
                satisfacao: "Ex.: Score SUS (0–100); NPS; escala Likert pós-teste",
              };
              return (
                <Card key={`em-${f}`} className="border-l-4" style={{ borderLeftColor: "hsl(var(--primary))" }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className={`w-5 h-5 ${meta.color}`} /> Métricas do fator: {meta.label}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{sugestoes[f]}</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {exp.metricas.map((m, i) => m.tipo === f && (
                      <div key={i} className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_auto] gap-2">
                        <Input placeholder="Nome" value={m.nome}
                          onChange={e => { const arr = [...exp.metricas]; arr[i] = { ...m, nome: e.target.value }; update("metricas", arr); }} />
                        <Input placeholder="Como medir" value={m.formula ?? ""}
                          onChange={e => { const arr = [...exp.metricas]; arr[i] = { ...m, formula: e.target.value }; update("metricas", arr); }} />
                        <Input placeholder="Pior" value={m.pior ?? ""}
                          onChange={e => { const arr = [...exp.metricas]; arr[i] = { ...m, pior: e.target.value }; update("metricas", arr); }} />
                        <Input placeholder="Almejado" value={m.almejado ?? ""}
                          onChange={e => { const arr = [...exp.metricas]; arr[i] = { ...m, almejado: e.target.value }; update("metricas", arr); }} />
                        <Input placeholder="Melhor" value={m.melhor ?? ""}
                          onChange={e => { const arr = [...exp.metricas]; arr[i] = { ...m, melhor: e.target.value }; update("metricas", arr); }} />
                        <Button size="icon" variant="ghost" onClick={() => update("metricas", exp.metricas.filter((_, idx) => idx !== i))}>
                          <Trash2 className="w-4 h-4 text-destructive" /></Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" onClick={() => update("metricas", [...exp.metricas, { nome: "", tipo: f, formula: "", pior: "", almejado: "", melhor: "" }])}>
                      <Plus className="w-4 h-4 mr-2" />Adicionar métrica
                    </Button>

                    {f === "satisfacao" && (() => {
                      const SUS_PADRAO = [
                        "Eu acho que gostaria de usar este sistema com frequência.",
                        "Eu achei o sistema desnecessariamente complexo.",
                        "Eu achei o sistema fácil de usar.",
                        "Eu acho que precisaria de ajuda de um técnico para conseguir usar este sistema.",
                        "Eu achei que as várias funções do sistema estavam bem integradas.",
                        "Eu achei que havia muita inconsistência neste sistema.",
                        "Eu imagino que a maioria das pessoas aprenderia a usar este sistema rapidamente.",
                        "Eu achei o sistema muito complicado de usar.",
                        "Eu me senti muito confiante ao usar o sistema.",
                        "Eu precisei aprender várias coisas novas antes de conseguir usar o sistema.",
                      ];
                      const satisfQ = exp.questoes.filter(q => q.fator === "satisfacao");
                      const setSatisfQ = (arr: string[]) => {
                        const outros = exp.questoes.filter(q => q.fator !== "satisfacao");
                        update("questoes", [...outros, ...arr.map(texto => ({ fator: "satisfacao" as FatorTipo, texto }))]);
                      };
                      return (
                        <div className="mt-6 pt-4 border-t border-border space-y-3">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div>
                              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                                <Smile className="w-4 h-4 text-emerald-500" /> Questões de Satisfação (Likert 1–5)
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Aplique após as tarefas. Escala: 1 (Discordo totalmente) → 5 (Concordo totalmente). Ímpares positivas · pares negativas (SUS).
                              </p>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => setSatisfQ(SUS_PADRAO)}>
                              <Plus className="w-4 h-4 mr-2" />Carregar SUS (10 itens)
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {satisfQ.map((q, qi) => (
                              <div key={qi} className="flex gap-2 items-start">
                                <span className="mt-2 text-xs font-mono text-muted-foreground w-6 text-right">{qi + 1}.</span>
                                <Textarea rows={2} value={q.texto}
                                  onChange={e => {
                                    const arr = satisfQ.map(x => x.texto);
                                    arr[qi] = e.target.value;
                                    setSatisfQ(arr);
                                  }}
                                  placeholder="Ex.: O sistema foi fácil de usar." />
                                <Button size="icon" variant="ghost" onClick={() => setSatisfQ(satisfQ.filter((_, i) => i !== qi).map(x => x.texto))}>
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              </div>
                            ))}
                            <Button variant="outline" size="sm" onClick={() => setSatisfQ([...satisfQ.map(x => x.texto), ""])}>
                              <Plus className="w-4 h-4 mr-2" />Adicionar questão
                            </Button>
                          </div>
                          {satisfQ.length > 0 && (
                            <div className="p-3 rounded-md bg-emerald-500/5 border border-emerald-500/20 text-xs text-muted-foreground">
                              <strong className="text-emerald-600">Aplicação:</strong> cada participante responde após a sessão. Consolidamos as respostas no campo <code>SUS (0–100)</code> da aba Coleta (SUS: some ímpares−5 + 25−pares × 2,5).
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>


          {/* COLETA */}
          <TabsContent value="coleta" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <CardTitle>Coleta de Resultados</CardTitle>
                    <p className="text-sm text-muted-foreground">Agrupado por participante — cada participante realiza todas as tarefas do teste.</p>
                  </div>
                  <Button size="sm" disabled={exp.tarefas.length === 0}
                    onClick={() => {
                      const existentes = Array.from(new Set(exp.resultados.map(r => r.participante).filter(Boolean)));
                      // Próximo código sequencial (001, 002, ...) evitando duplicados
                      let n = existentes.length + 1;
                      let code = String(n).padStart(3, "0");
                      while (existentes.includes(code)) { n++; code = String(n).padStart(3, "0"); }
                      const novos = exp.tarefas.map(t => ({
                        participante: code,
                        tarefa_id: t.id,
                        persona_idx: (t.personas_idx && t.personas_idx[0] != null) ? t.personas_idx[0] : null,
                        sucesso: false, tempo_seg: 0, erros: 0, sus_score: 0,
                      }));
                      update("resultados", [...exp.resultados, ...novos]);
                    }}>
                    <UserPlus className="w-4 h-4 mr-2" />Adicionar participante
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {exp.tarefas.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Cadastre tarefas no Protocolo antes de coletar resultados.</p>
                ) : (() => {
                  const secToMMSS = (s: number) => {
                    const n = Math.max(0, Math.floor(s || 0));
                    const m = Math.floor(n / 60), ss = n % 60;
                    return `${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
                  };
                  const mmssToSec = (v: string) => {
                    const clean = v.replace(/[^\d:]/g, "");
                    if (clean.includes(":")) { const [m, s] = clean.split(":"); return (Number(m) || 0) * 60 + (Number(s) || 0); }
                    return Number(clean) || 0;
                  };
                  const codigos = Array.from(new Set(exp.resultados.map(r => r.participante).filter(Boolean)));
                  if (codigos.length === 0) {
                    return <p className="text-muted-foreground text-sm">Nenhum participante ainda. Clique em <strong>Adicionar participante</strong> para começar.</p>;
                  }
                  // Upsert helper: garante linha para (participante, tarefa)
                  const upsert = (participante: string, tarefa_id: string, patch: Partial<Resultado>) => {
                    const arr = [...exp.resultados];
                    const idx = arr.findIndex(r => r.participante === participante && r.tarefa_id === tarefa_id);
                    if (idx >= 0) arr[idx] = { ...arr[idx], ...patch };
                    else arr.push({ participante, tarefa_id, sucesso: false, tempo_seg: 0, erros: 0, sus_score: 0, persona_idx: null, ...patch });
                    update("resultados", arr);
                  };
                  return (
                    <Accordion type="multiple" defaultValue={codigos.slice(0, 1)} className="space-y-2">
                      {codigos.map(code => {
                        const rows = exp.resultados.filter(r => r.participante === code);
                        const personaIdx = rows.find(r => r.persona_idx != null)?.persona_idx ?? null;
                        const persona = personaIdx != null ? exp.personas[personaIdx] : null;
                        const feitas = exp.tarefas.filter(t => rows.some(r => r.tarefa_id === t.id && (r.sucesso || r.tempo_seg > 0))).length;
                        const tempoTotal = rows.reduce((a, r) => a + (r.tempo_seg || 0), 0);
                        const sucessos = rows.filter(r => r.sucesso).length;
                        return (
                          <AccordionItem key={code} value={code} className="border rounded-lg px-3 bg-card">
                            <AccordionTrigger className="hover:no-underline py-3">
                              <div className="flex items-center gap-3 flex-wrap text-left w-full pr-3">
                                <Badge variant="outline" className="font-mono text-sm">P{code}</Badge>
                                {persona && <Badge variant="secondary" className="gap-1"><Users className="w-3 h-3" />{persona.nome || `Persona ${personaIdx! + 1}`}</Badge>}
                                <span className="text-xs text-muted-foreground flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />{sucessos}/{exp.tarefas.length} sucesso</span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{secToMMSS(tempoTotal)}</span>
                                <span className="text-xs text-muted-foreground ml-auto">{feitas}/{exp.tarefas.length} tarefas preenchidas</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                              <div className="flex items-end gap-3 flex-wrap mb-3 pt-1">
                                <div>
                                  <label className="text-xs text-muted-foreground block mb-1">Código do participante</label>
                                  <Input className="w-32 font-mono" value={code} onChange={e => {
                                    const novo = e.target.value.trim();
                                    if (!novo || novo === code) return;
                                    const arr = exp.resultados.map(r => r.participante === code ? { ...r, participante: novo } : r);
                                    update("resultados", arr);
                                  }} />
                                </div>
                                <div>
                                  <label className="text-xs text-muted-foreground block mb-1">Persona</label>
                                  <Select value={personaIdx == null ? "none" : String(personaIdx)} onValueChange={v => {
                                    const pi = v === "none" ? null : Number(v);
                                    const arr = exp.resultados.map(r => r.participante === code ? { ...r, persona_idx: pi } : r);
                                    update("resultados", arr);
                                  }}>
                                    <SelectTrigger className="w-56"><SelectValue placeholder="Persona" /></SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="none">— Não definida —</SelectItem>
                                      {exp.personas.map((p, pi) => (
                                        <SelectItem key={pi} value={String(pi)}>{p.nome || `Persona ${pi + 1}`}</SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="ml-auto">
                                  <Button size="sm" variant="ghost" className="text-destructive"
                                    onClick={() => update("resultados", exp.resultados.filter(r => r.participante !== code))}>
                                    <Trash2 className="w-4 h-4 mr-2" />Remover participante
                                  </Button>
                                </div>
                              </div>
                              <div className="overflow-x-auto rounded border">
                                <table className="w-full text-sm">
                                  <thead className="bg-muted/50">
                                    <tr className="text-left">
                                      <th className="p-2 w-10">#</th>
                                      <th className="p-2">Tarefa</th>
                                      <th className="p-2 w-28">Sucesso</th>
                                      <th className="p-2 w-28">Tempo (mm:ss)</th>
                                      <th className="p-2 w-20">Erros</th>
                                      <th className="p-2">Observações</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {exp.tarefas.map((t, ti) => {
                                      const r = rows.find(x => x.tarefa_id === t.id) ?? { participante: code, tarefa_id: t.id, sucesso: false, tempo_seg: 0, erros: 0, sus_score: 0, observacoes: "" } as Resultado;
                                      return (
                                        <tr key={t.id} className="border-t">
                                          <td className="p-2 text-center text-muted-foreground font-mono text-xs">T{ti + 1}</td>
                                          <td className="p-2">
                                            <div className="text-sm">{t.descricao || <span className="italic text-muted-foreground">(sem descrição)</span>}</div>
                                            {t.criterios_sucesso && t.criterios_sucesso.length > 0 && (
                                              <div className="text-[11px] text-muted-foreground mt-0.5">✔ {t.criterios_sucesso.join(" · ")}</div>
                                            )}
                                          </td>
                                          <td className="p-1">
                                            <button type="button" onClick={() => upsert(code, t.id, { sucesso: !r.sucesso })}
                                              className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border transition ${r.sucesso ? "bg-emerald-100 text-emerald-700 border-emerald-300" : "bg-muted text-muted-foreground border-transparent hover:border-border"}`}>
                                              {r.sucesso ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5" />}
                                              {r.sucesso ? "Sim" : "Não"}
                                            </button>
                                          </td>
                                          <td className="p-1">
                                            <Input className="w-24" placeholder="mm:ss"
                                              value={r.tempo_seg ? secToMMSS(r.tempo_seg) : ""}
                                              onChange={e => upsert(code, t.id, { tempo_seg: mmssToSec(e.target.value) })} />
                                          </td>
                                          <td className="p-1">
                                            <Input type="number" className="w-16" value={r.erros || ""}
                                              onChange={e => upsert(code, t.id, { erros: Number(e.target.value) })} />
                                          </td>
                                          <td className="p-1">
                                            <Input value={r.observacoes ?? ""} placeholder="Notas do avaliador"
                                              onChange={e => upsert(code, t.id, { observacoes: e.target.value })} />
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  );
                })()}
              </CardContent>
            </Card>


            {/* Coleta de Satisfação (Likert) */}
            {(() => {
              const satisfQ = exp.questoes.filter(q => q.fator === "satisfacao");
              if (satisfQ.length === 0) return null;
              const nQ = satisfQ.length;
              const isSUS = nQ === 10;
              const respostas = exp.satisfacao_respostas ?? [];
              const setRespostas = (arr: SatisfacaoResposta[]) => update("satisfacao_respostas", arr);
              const calcSUS = (r: number[]) => {
                if (!isSUS || r.some(v => !v)) return 0;
                let soma = 0;
                for (let i = 0; i < 10; i++) {
                  soma += (i % 2 === 0) ? (r[i] - 1) : (5 - r[i]);
                }
                return +(soma * 2.5).toFixed(1);
              };
              const calcLikertPct = (r: number[]) => {
                const valid = r.filter(v => v);
                if (!valid.length) return 0;
                return +((valid.reduce((s, v) => s + v, 0) / (valid.length * 5)) * 100).toFixed(1);
              };
              return (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Smile className="w-5 h-5 text-emerald-500" /> Coleta de Satisfação — Questionário Likert (1–5)</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Uma linha por participante. Escala: 1 (Discordo totalmente) → 5 (Concordo totalmente). {isSUS ? <span className="text-emerald-600 font-medium">Detectado SUS (10 itens): SUS 0–100 é calculado automaticamente.</span> : <>Índice normalizado (%) calculado a partir da média das respostas.</>}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {respostas.map((sr, ri) => {
                      const susCalc = calcSUS(sr.respostas);
                      const pct = calcLikertPct(sr.respostas);
                      return (
                        <div key={ri} className="border border-border rounded-lg p-3 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <Select
                              value={sr.participante || "__none"}
                              onValueChange={v => {
                                const arr = [...respostas];
                                arr[ri] = { ...sr, participante: v === "__none" ? "" : v };
                                setRespostas(arr);
                              }}
                            >
                              <SelectTrigger className="max-w-xs"><SelectValue placeholder="Selecione o código do participante" /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="__none">— Selecione —</SelectItem>
                                {Array.from(new Set(exp.resultados.map(r => r.participante).filter(Boolean))).map(p => (
                                  <SelectItem key={p} value={p}>{p}</SelectItem>
                                ))}
                                {sr.participante && !exp.resultados.some(r => r.participante === sr.participante) && (
                                  <SelectItem value={sr.participante}>{sr.participante}</SelectItem>
                                )}
                              </SelectContent>
                            </Select>

                            <div className="flex items-center gap-3 text-sm">
                              {isSUS && <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-700 font-medium">SUS: {susCalc || "—"}</span>}
                              <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground">Índice: {pct}%</span>
                              <Button size="icon" variant="ghost" onClick={() => setRespostas(respostas.filter((_, i) => i !== ri))}>
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {satisfQ.map((q, qi) => (
                              <div key={qi} className="grid grid-cols-[auto_1fr_auto] gap-3 items-center border-b border-border/40 pb-2">
                                <span className="text-xs font-mono text-muted-foreground w-6 text-right">{qi + 1}.</span>
                                <span className="text-sm">{q.texto}</span>
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map(v => {
                                    const active = sr.respostas[qi] === v;
                                    return (
                                      <button key={v} type="button"
                                        onClick={() => {
                                          const nova = [...sr.respostas];
                                          while (nova.length < nQ) nova.push(0);
                                          nova[qi] = v;
                                          const arr = [...respostas];
                                          arr[ri] = { ...sr, respostas: nova };
                                          setRespostas(arr);
                                        }}
                                        className={`w-8 h-8 rounded-md border text-sm font-medium transition ${active ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:bg-muted"}`}>
                                        {v}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                          <Textarea rows={2} placeholder="Comentário livre do participante (opcional)"
                            value={sr.comentario ?? ""}
                            onChange={e => {
                              const arr = [...respostas];
                              arr[ri] = { ...sr, comentario: e.target.value };
                              setRespostas(arr);
                            }} />
                          {isSUS && susCalc > 0 && (
                            <Button size="sm" variant="outline" onClick={() => {
                              const nome = (sr.participante || "").trim();
                              if (!nome) { toast({ title: "Informe o participante" }); return; }
                              const jaTem = exp.resultados.some(r => r.participante === nome && r.sus_score);
                              if (jaTem) {
                                const arr = exp.resultados.map(r => r.participante === nome ? { ...r, sus_score: susCalc } : r);
                                update("resultados", arr);
                              } else {
                                update("resultados", [...exp.resultados, { participante: nome, tarefa_id: exp.tarefas[0]?.id ?? "", sucesso: false, tempo_seg: 0, erros: 0, sus_score: susCalc, observacoes: "SUS (satisfação)" }]);
                              }
                              toast({ title: `SUS ${susCalc} aplicado ao participante ${nome}` });
                            }}>Aplicar SUS na Coleta</Button>
                          )}
                        </div>
                      );
                    })}
                    <Button variant="outline" size="sm"
                      onClick={() => setRespostas([...respostas, { participante: "", respostas: Array(nQ).fill(0), comentario: "" }])}>
                      <Plus className="w-4 h-4 mr-2" />Adicionar participante
                    </Button>
                  </CardContent>
                </Card>
              );
            })()}
          </TabsContent>

          {/* ANALISE */}
          <TabsContent value="analise" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <StatCard label="Participantes" value={participantes.length} />
              <StatCard label="Tarefas avaliadas" value={exp.tarefas.length} />
              <StatCard label="SUS médio" value={susMedio.toFixed(1)} hint="0–100, ≥68 = aceitável" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Análise Consolidada por Tarefa</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Cada linha reúne os fatores <strong>Eficácia</strong>, <strong>Eficiência</strong> e <strong>Satisfação</strong> para a mesma tarefa executada pelos participantes.
                </p>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-border text-left">
                      <th className="p-2" rowSpan={2}>Tarefa</th>
                      <th className="p-2 text-center" rowSpan={2}>N</th>
                      <th className="p-2 text-center bg-blue-500/10" colSpan={1}>Eficácia</th>
                      <th className="p-2 text-center bg-amber-500/10" colSpan={3}>Eficiência</th>
                      <th className="p-2 text-center bg-emerald-500/10" colSpan={1}>Satisfação</th>
                      <th className="p-2 text-center" rowSpan={2}>Status</th>
                    </tr>
                    <tr className="border-b border-border text-left text-xs text-muted-foreground">
                      <th className="p-2 bg-blue-500/5">Taxa Sucesso</th>
                      <th className="p-2 bg-amber-500/5">Tempo Médio (s)</th>
                      <th className="p-2 bg-amber-500/5">Desvio (s)</th>
                      <th className="p-2 bg-amber-500/5">Erros</th>
                      <th className="p-2 bg-emerald-500/5">SUS Médio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tarefaStats.map((s, i) => {
                      const okSucesso = s.taxaSucesso >= 80;
                      const okTempo = !s.tempoEsperado || s.tempoMedio <= s.tempoEsperado;
                      const okSus = s.susMedio === 0 || s.susMedio >= 68;
                      const passou = okSucesso && okTempo && okSus;
                      return (
                        <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                          <td className="p-2 font-medium">{s.tarefa}</td>
                          <td className="p-2 text-center">{s.n}</td>
                          <td className="p-2 bg-blue-500/5">
                            <span className={okSucesso ? "text-blue-600 font-semibold" : "text-destructive font-semibold"}>{s.taxaSucesso}%</span>
                          </td>
                          <td className="p-2 bg-amber-500/5">
                            {s.tempoMedio}s {s.tempoEsperado ? <span className="text-xs text-muted-foreground">/ meta {s.tempoEsperado}s</span> : null}
                          </td>
                          <td className="p-2 bg-amber-500/5">±{s.desvio}</td>
                          <td className="p-2 bg-amber-500/5">{s.errosMedio}</td>
                          <td className="p-2 bg-emerald-500/5">
                            {s.susMedio > 0 ? <span className={okSus ? "text-emerald-600 font-semibold" : "text-destructive font-semibold"}>{s.susMedio}</span> : <span className="text-muted-foreground">—</span>}
                          </td>
                          <td className="p-2 text-center">
                            {s.n === 0 ? <span className="text-xs text-muted-foreground">sem dados</span> :
                              passou ? <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 text-xs font-medium">✓ Atende</span>
                                     : <span className="inline-block px-2 py-0.5 rounded-full bg-destructive/15 text-destructive text-xs font-medium">⚠ Revisar</span>}
                          </td>
                        </tr>
                      );
                    })}
                    {tarefaStats.length === 0 && <tr><td colSpan={8} className="p-4 text-center text-muted-foreground">Sem dados coletados.</td></tr>}
                  </tbody>
                </table>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>Critérios: Sucesso ≥ 80% · Tempo ≤ meta · SUS ≥ 68</span>
                </div>
              </CardContent>
            </Card>

            {/* Análise por Persona */}
            <Card>
              <CardHeader>
                <CardTitle>Análise Consolidada por Persona</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Agrega os resultados das tarefas atribuídas a cada persona (definidas na fase <strong>Evaluate</strong>).
                </p>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                {exp.personas.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Cadastre personas na fase <strong>Identify</strong> e associe-as às tarefas em <strong>Evaluate</strong>.</p>
                ) : (
                  <>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-border text-left">
                          <th className="p-2" rowSpan={2}>Persona</th>
                          <th className="p-2 text-center" rowSpan={2}>Tarefas</th>
                          <th className="p-2 text-center" rowSpan={2}>Participantes</th>
                          <th className="p-2 text-center" rowSpan={2}>N (obs.)</th>
                          <th className="p-2 text-center bg-blue-500/10" colSpan={1}>Eficácia</th>
                          <th className="p-2 text-center bg-amber-500/10" colSpan={3}>Eficiência</th>
                          <th className="p-2 text-center bg-emerald-500/10" colSpan={1}>Satisfação</th>
                          <th className="p-2 text-center" rowSpan={2}>Status</th>
                        </tr>
                        <tr className="border-b border-border text-left text-xs text-muted-foreground">
                          <th className="p-2 bg-blue-500/5">Taxa Sucesso</th>
                          <th className="p-2 bg-amber-500/5">Tempo Médio (s)</th>
                          <th className="p-2 bg-amber-500/5">Meta Média (s)</th>
                          <th className="p-2 bg-amber-500/5">Erros</th>
                          <th className="p-2 bg-emerald-500/5">SUS Médio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {personaStats.map((s, i) => {
                          const okSucesso = s.taxaSucesso >= 80;
                          const okTempo = !s.metaMedia || s.tempoMedio <= s.metaMedia;
                          const okSus = s.susMedio === 0 || s.susMedio >= 68;
                          const passou = okSucesso && okTempo && okSus;
                          return (
                            <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                              <td className="p-2">
                                <div className="font-medium">{s.persona}</div>
                                {s.perfil && <div className="text-xs text-muted-foreground truncate max-w-[220px]">{s.perfil}</div>}
                              </td>
                              <td className="p-2 text-center">{s.qtdTarefas}</td>
                              <td className="p-2 text-center">{s.participantes}</td>
                              <td className="p-2 text-center">{s.n}</td>
                              <td className="p-2 bg-blue-500/5">
                                <span className={okSucesso ? "text-blue-600 font-semibold" : "text-destructive font-semibold"}>{s.taxaSucesso}%</span>
                              </td>
                              <td className="p-2 bg-amber-500/5">{s.tempoMedio}s</td>
                              <td className="p-2 bg-amber-500/5">{s.metaMedia ? `${s.metaMedia}s` : "—"}</td>
                              <td className="p-2 bg-amber-500/5">{s.errosMedio}</td>
                              <td className="p-2 bg-emerald-500/5">
                                {s.susMedio > 0 ? <span className={okSus ? "text-emerald-600 font-semibold" : "text-destructive font-semibold"}>{s.susMedio}</span> : <span className="text-muted-foreground">—</span>}
                              </td>
                              <td className="p-2 text-center">
                                {s.n === 0 ? <span className="text-xs text-muted-foreground">sem dados</span> :
                                  passou ? <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 text-xs font-medium">✓ Atende</span>
                                         : <span className="inline-block px-2 py-0.5 rounded-full bg-destructive/15 text-destructive text-xs font-medium">⚠ Revisar</span>}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {personaStats.some(p => p.n > 0) && (
                      <div style={{ height: 300 }} className="mt-6">
                        <ResponsiveContainer>
                          <BarChart data={personaStats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="persona" tick={{ fontSize: 11 }} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="taxaSucesso" name="Eficácia (%)" fill="hsl(217 91% 60%)" />
                            <Bar dataKey="susMedio" name="SUS Médio" fill="hsl(160 84% 39%)" />
                            <Bar dataKey="errosMedio" name="Erros (média)" fill="hsl(0 84% 60%)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>

            {tarefaStats.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Eficácia × Eficiência por Tarefa</CardTitle><p className="text-xs text-muted-foreground">Comparativo normalizado (%) — quanto maior, melhor</p></CardHeader>
                  <CardContent style={{ height: 300 }}>
                    <ResponsiveContainer><BarChart data={tarefaStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="tarefa" tick={{ fontSize: 11 }} /><YAxis unit="%" domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="taxaSucesso" name="Eficácia (%)" fill="hsl(217 91% 60%)" />
                      <Bar dataKey="eficiencia" name="Eficiência (%)" fill="hsl(38 92% 50%)" />
                    </BarChart></ResponsiveContainer>
                  </CardContent></Card>

                <Card><CardHeader><CardTitle>Tempo Médio vs. Meta por Tarefa</CardTitle><p className="text-xs text-muted-foreground">Em segundos</p></CardHeader>
                  <CardContent style={{ height: 300 }}>
                    <ResponsiveContainer><BarChart data={tarefaStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="tarefa" tick={{ fontSize: 11 }} /><YAxis unit="s" />
                      <Tooltip />
                      <Bar dataKey="tempoEsperado" name="Meta (s)" fill="hsl(var(--muted-foreground))" fillOpacity={0.4} />
                      <Bar dataKey="tempoMedio" name="Real (s)" fill="hsl(38 92% 50%)" />
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

function FatorListEditor({ label, items, onChange, placeholder }: { label: string; items: string[]; onChange: (v: string[]) => void; placeholder: string }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">{label}</p>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <Textarea rows={2} value={it} placeholder={placeholder}
              onChange={e => { const arr = [...items]; arr[i] = e.target.value; onChange(arr); }} />
            <Button size="icon" variant="ghost" onClick={() => onChange(items.filter((_, idx) => idx !== i))}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => onChange([...items, ""])}>
          <Plus className="w-4 h-4 mr-2" />Adicionar
        </Button>
      </div>
    </div>
  );
}

function PhaseHeader({ letter, title, icon: Icon, desc }: { letter: string; title: string; icon: any; desc: string }) {
  return (
    <div className="flex items-start gap-3 pt-4">
      <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold flex-shrink-0">
        {letter}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function TCLEPreview({ exp }: { exp: Experimento }) {
  const t = exp.tcle ?? {};
  const titulo = t.pesquisa_titulo || exp.titulo;
  return (
    <div className="text-sm leading-relaxed space-y-3 text-foreground">
      <h2 className="text-center font-bold">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE)</h2>
      <p className="text-center text-xs text-muted-foreground">Resolução CNS 510/2016 — Pesquisa com Seres Humanos</p>

      <p><strong>Título da pesquisa:</strong> {titulo}</p>
      <p><strong>Pesquisador(a) responsável:</strong> {t.pesquisador || "_________________________"}</p>
      <p><strong>Instituição:</strong> {t.instituicao || "_________________________"}</p>
      <p><strong>Contato:</strong> {t.contato || "_________________________"}</p>
      <p><strong>Local:</strong> {t.local || "_________________________"} · <strong>Duração estimada:</strong> {t.duracao_estimada || "____"}</p>

      <h3 className="font-semibold">1. Objetivo da pesquisa</h3>
      <p>{t.objetivo_breve || exp.objetivo || "—"}</p>

      <h3 className="font-semibold">2. Procedimentos</h3>
      <p>{t.procedimentos || `Você será convidado(a) a participar de uma sessão de avaliação de usabilidade utilizando a técnica de ${TECNICAS_LABELS[exp.tecnicas?.principal as TecnicaTipo] || "avaliação"}. Durante a sessão, serão solicitadas tarefas no sistema avaliado, com observação do facilitador.`}</p>
      {exp.tarefas.length > 0 && (
        <ul className="list-disc pl-6">
          {exp.tarefas.map(tk => <li key={tk.id}>{tk.descricao || "(tarefa sem descrição)"}</li>)}
        </ul>
      )}

      <h3 className="font-semibold">3. Riscos</h3>
      <p>{t.riscos || "Os riscos são mínimos, podendo haver eventual desconforto ou cansaço durante a execução das tarefas. Você poderá interromper a sessão a qualquer momento."}</p>

      <h3 className="font-semibold">4. Benefícios</h3>
      <p>{t.beneficios || "Sua participação contribuirá para a melhoria da usabilidade do sistema avaliado, beneficiando futuros usuários."}</p>

      <h3 className="font-semibold">5. Sigilo e privacidade</h3>
      <p>Os dados coletados serão tratados de forma confidencial, garantindo o anonimato. {t.gravacao ? "A sessão será gravada (tela e/ou áudio) exclusivamente para análise da equipe de pesquisa." : ""} {t.uso_imagem ? "Sua imagem poderá ser utilizada em relatórios acadêmicos, sempre preservando sua identidade." : ""} Em conformidade com a LGPD (Lei 13.709/2018), nenhum dado pessoal será divulgado.</p>

      <h3 className="font-semibold">6. Direito de desistência</h3>
      <p>Sua participação é voluntária. Você pode interromper ou encerrar sua participação a qualquer momento, sem necessidade de justificativa e sem qualquer prejuízo.</p>

      <h3 className="font-semibold">7. Condições adicionais do participante</h3>
      <p className="border-b border-foreground/30 min-h-[2.5rem]">&nbsp;</p>
      <p className="border-b border-foreground/30 min-h-[2.5rem]">&nbsp;</p>

      <h3 className="font-semibold">8. Declaração de consentimento</h3>
      <p>Declaro que li e compreendi as informações acima, que minhas dúvidas foram esclarecidas e que concordo livremente em participar desta pesquisa nas condições aqui descritas.</p>

      <div className="grid grid-cols-2 gap-6 mt-6 text-xs">
        <div>
          <p>Nome completo: ____________________________________</p>
          <p className="mt-3">Data: ____/____/______</p>
          <p className="mt-6">Assinatura do(a) participante:</p>
          <p className="border-b border-foreground/50 mt-6">&nbsp;</p>
        </div>
        <div>
          <p>Local: {t.local || "_________________________"}</p>
          <p className="mt-3">&nbsp;</p>
          <p className="mt-6">Assinatura do(a) responsável pela pesquisa:</p>
          <p className="border-b border-foreground/50 mt-6">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function imprimirTCLE() {
  const node = document.getElementById("tcle-print");
  if (!node) return;
  const win = window.open("", "_blank", "width=900,height=900");
  if (!win) return;
  win.document.write(`<html><head><title>TCLE</title><style>
    body{font-family: Arial, sans-serif; padding: 32px; color:#111; line-height:1.5;}
    h2{font-size:16px; text-align:center;} h3{font-size:13px; margin-top:14px;}
    p{font-size:12px;} ul{font-size:12px;}
    .grid{display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:24px;}
  </style></head><body>${node.innerHTML.replace(/class="grid[^"]*"/g, 'class="grid"')}</body></html>`);
  win.document.close();
  setTimeout(() => { win.print(); }, 300);
}

