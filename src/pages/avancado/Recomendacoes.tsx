import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Target } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { calcularProgresso, type ProgressoCompetencia } from "@/lib/ferramentas-store";

const Recomendacoes = () => {
  const [progresso, setProgresso] = useState<ProgressoCompetencia[]>([]);
  useEffect(() => setProgresso(calcularProgresso()), []);

  const ordenado = [...progresso].sort((a, b) => a.percentual - b.percentual);
  const prioritarias = ordenado.slice(0, 3);

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center"><Sparkles className="w-6 h-6 text-primary" /></div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Recomendações Personalizadas</h1>
            <p className="text-sm text-muted-foreground">Conteúdos sugeridos a partir das competências com menor evidência de prática.</p>
          </div>
        </motion.header>

        <Card className="p-6 mb-6">
          <div className="flex items-center gap-2 mb-3"><Target className="w-4 h-4 text-primary" /><h2 className="font-semibold">Foco recomendado agora</h2></div>
          <div className="grid sm:grid-cols-3 gap-3">
            {prioritarias.map((c) => (
              <div key={c.id} className="rounded-lg border border-border p-3">
                <p className="font-medium text-sm">{c.nome}</p>
                <Progress value={c.percentual} className="my-2" />
                <p className="text-xs text-muted-foreground">{c.total}/{c.meta} artefatos • {c.nivel}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          {ordenado.map((c) => (
            <Card key={c.id} className="p-6">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-semibold">{c.nome}</h3>
                  <p className="text-sm text-muted-foreground">{c.descricao}</p>
                </div>
                <Badge className={c.percentual >= 60 ? "bg-emerald-500/15 text-emerald-600" : "bg-amber-500/15 text-amber-600"}>{c.percentual}%</Badge>
              </div>
              <div className="grid sm:grid-cols-2 gap-2 mt-3">
                {c.conteudos.map((ct) => (
                  <Button key={ct.path} variant="outline" className="justify-between" asChild>
                    <Link to={ct.path}><span className="truncate">{ct.titulo}</span><ArrowRight className="w-4 h-4 ml-2 shrink-0" /></Link>
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Recomendacoes;
