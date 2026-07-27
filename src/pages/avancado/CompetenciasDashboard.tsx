import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Lock } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import MainNavigation from "@/components/MainNavigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { calcularProgresso, type ProgressoCompetencia } from "@/lib/ferramentas-store";

const nivelCor: Record<string, string> = {
  "Explorador": "bg-muted text-muted-foreground",
  "Iniciante": "bg-blue-500/15 text-blue-600",
  "Intermediário": "bg-amber-500/15 text-amber-600",
  "Avançado": "bg-emerald-500/15 text-emerald-600",
};

const CompetenciasDashboard = () => {
  const [progresso, setProgresso] = useState<ProgressoCompetencia[]>([]);
  useEffect(() => setProgresso(calcularProgresso()), []);

  const radar = progresso.map((c) => ({ competencia: c.nome.split(" ")[0], valor: c.percentual }));
  const geral = progresso.length ? Math.round(progresso.reduce((a, c) => a + c.percentual, 0) / progresso.length) : 0;
  const badges = progresso.filter((c) => c.percentual >= 60);

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Award className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Badges e Trilhas de Competências</h1>
            <p className="text-sm text-muted-foreground">Indicadores de evolução por habilidade, calculados a partir dos artefatos criados nas ferramentas.</p>
          </div>
        </motion.header>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <Card className="p-5"><p className="text-xs text-muted-foreground">Progresso geral</p><p className="text-3xl font-bold text-primary">{geral}%</p></Card>
          <Card className="p-5"><p className="text-xs text-muted-foreground">Badges conquistadas</p><p className="text-3xl font-bold">{badges.length}/{progresso.length}</p></Card>
          <Card className="p-5"><p className="text-xs text-muted-foreground">Artefatos produzidos</p><p className="text-3xl font-bold">{progresso.reduce((a, c) => a + c.total, 0)}</p></Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Radar de competências</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radar}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="competencia" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar dataKey="valor" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Evolução por habilidade</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={radar} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" domain={[0, 100]} fontSize={11} stroke="hsl(var(--muted-foreground))" />
                  <YAxis type="category" dataKey="competencia" width={90} fontSize={11} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip />
                  <Bar dataKey="valor" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {progresso.map((c) => {
            const conquistada = c.percentual >= 60;
            return (
              <Card key={c.id} className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center ${conquistada ? "bg-primary/20" : "bg-muted"}`}>
                    {conquistada ? <Award className="w-5 h-5 text-primary" /> : <Lock className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <Badge className={nivelCor[c.nivel] ?? ""}>{c.nivel}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{c.nome}</h3>
                  <p className="text-xs text-muted-foreground">Trilha: {c.trilha}</p>
                </div>
                <Progress value={c.percentual} />
                <p className="text-xs text-muted-foreground">{c.total}/{c.meta} artefatos ({c.percentual}%)</p>
                <div className="flex flex-wrap gap-1">
                  {c.conteudos.slice(0, 2).map((ct) => (
                    <Button key={ct.path} size="sm" variant="outline" asChild><Link to={ct.path}>{ct.titulo.length > 24 ? ct.titulo.slice(0, 24) + "…" : ct.titulo}</Link></Button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CompetenciasDashboard;
