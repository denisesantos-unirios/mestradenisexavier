import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  FolderKanban,
  FlaskConical,
  Shield,
  LogOut,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

/**
 * Hub do Sistema de Experimentos.
 *
 * Aplicação das 10 heurísticas de Nielsen + psicologia das cores:
 *  - H1 Visibilidade do estado: passos numerados mostram a ordem do fluxo.
 *  - H2 Correspondência com o mundo real: rótulos diretos ("Quem", "O quê", "Como medir").
 *  - H4 Consistência: mesma anatomia de card (número, ícone, cor, ação).
 *  - H6 Reconhecer em vez de lembrar: cada cor traz seu significado explícito,
 *    útil em sala de aula.
 *  - H10 Ajuda: bloco "Como usar" no topo, sempre visível.
 *
 * Psicologia das cores (compartilhar com alunos):
 *  - Azul  → confiança / organização  → Equipes
 *  - Laranja → energia / ação criativa → Projetos
 *  - Roxo → conhecimento / investigação → Experimentos
 *  - Verde → segurança / permissão → Acessos
 */
const steps = [
  {
    n: 1,
    title: "Equipes",
    role: "Quem participa",
    description: "Cadastre as equipes, semestre e integrantes da turma.",
    icon: Users,
    path: "/protocolos/equipes",
    accent: "blue",
    meaning: "Azul — confiança & organização",
  },
  {
    n: 2,
    title: "Projetos",
    role: "O que será avaliado",
    description: "Vincule cada projeto de software à sua equipe responsável.",
    icon: FolderKanban,
    path: "/protocolos/projetos",
    accent: "orange",
    meaning: "Laranja — energia & ação criativa",
  },
  {
    n: 3,
    title: "Experimentos",
    role: "Como medir a usabilidade",
    description: "Monte o protocolo DECIDE, gere o TCLE, colete dados e analise.",
    icon: FlaskConical,
    path: "/protocolos/experimentos",
    accent: "violet",
    meaning: "Roxo — conhecimento & investigação",
  },
  {
    n: 4,
    title: "Acessos",
    role: "Quem entra no sistema",
    description: "Gerencie usuários autorizados (uso exclusivo do(a) professor(a)).",
    icon: Shield,
    path: "/protocolos/gestao",
    accent: "emerald",
    meaning: "Verde — segurança & permissão",
    restricted: true,
  },
];

const accentMap: Record<string, { ring: string; bg: string; text: string; chip: string }> = {
  blue: {
    ring: "ring-blue-500/30 hover:ring-blue-500/60",
    bg: "bg-gradient-to-br from-blue-500/15 via-blue-500/5 to-transparent",
    text: "text-blue-600 dark:text-blue-400",
    chip: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  },
  orange: {
    ring: "ring-orange-500/30 hover:ring-orange-500/60",
    bg: "bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent",
    text: "text-orange-600 dark:text-orange-400",
    chip: "bg-orange-500/15 text-orange-700 dark:text-orange-300",
  },
  violet: {
    ring: "ring-violet-500/30 hover:ring-violet-500/60",
    bg: "bg-gradient-to-br from-violet-500/15 via-violet-500/5 to-transparent",
    text: "text-violet-600 dark:text-violet-400",
    chip: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
  },
  emerald: {
    ring: "ring-emerald-500/30 hover:ring-emerald-500/60",
    bg: "bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent",
    text: "text-emerald-600 dark:text-emerald-400",
    chip: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  },
};

const SistemaExperimentos = () => {
  const { user, signOut } = useAuth();

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-start justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">
              Protocolos · Projetos de Interface
            </p>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Sistema de Experimentos
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Ambiente didático para planejar, aplicar e analisar avaliações de
              usabilidade seguindo o protocolo <strong>DECIDE</strong>.
            </p>
            {user?.email && (
              <p className="text-xs text-muted-foreground mt-2">
                Sessão: <span className="text-foreground">{user.email}</span>
              </p>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </motion.div>

        {/* H10 — Ajuda sempre visível: explica o fluxo + a lógica de cores */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="glass-card p-5 mb-10 border-l-4 border-primary"
        >
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="text-sm text-foreground/90">
              <p className="font-semibold mb-1">Como usar (siga a ordem)</p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-blue-600 dark:text-blue-400">1. Equipes</strong> →{" "}
                <strong className="text-orange-600 dark:text-orange-400">2. Projetos</strong> →{" "}
                <strong className="text-violet-600 dark:text-violet-400">3. Experimentos</strong>.
                As cores não são decorativas: comunicam a função de cada etapa
                (azul = confiança/organização, laranja = ação, roxo = investigação,
                verde = segurança).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trilha de etapas */}
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, i) => {
            const c = accentMap[step.accent];
            return (
              <motion.div
                key={step.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <Link
                  to={step.path}
                  className="block group h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                  aria-label={`Etapa ${step.n}: ${step.title} — ${step.role}`}
                >
                  <article
                    className={`glass-card p-7 h-full ring-1 transition-all ${c.ring} ${c.bg} group-hover:-translate-y-1`}
                  >
                    {/* Topo: número + ícone + chip de função */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-9 h-9 rounded-full ${c.chip} font-bold flex items-center justify-center text-sm`}
                          aria-hidden="true"
                        >
                          {step.n}
                        </span>
                        <div
                          className={`w-12 h-12 rounded-xl ${c.chip} flex items-center justify-center`}
                        >
                          <step.icon className={`w-6 h-6 ${c.text}`} aria-hidden="true" />
                        </div>
                      </div>
                      {step.restricted && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold">
                          Restrito
                        </span>
                      )}
                    </div>

                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${c.text}`}>
                      {step.role}
                    </p>
                    <h2 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-[11px] text-muted-foreground italic">
                        {step.meaning}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-sm font-semibold ${c.text} group-hover:gap-2 transition-all`}
                      >
                        Abrir
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Rodapé pedagógico — heurísticas aplicadas (transparência didática) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-card p-5"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
            Heurísticas de Nielsen aplicadas nesta tela
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/80">
            {[
              "H1 — Estado do sistema visível (passos numerados)",
              "H2 — Linguagem do usuário (Quem · O quê · Como medir)",
              "H4 — Consistência (mesma anatomia em todos os cards)",
              "H6 — Reconhecer em vez de lembrar (cores com significado)",
              "H8 — Estética minimalista (uma ação primária por card)",
              "H10 — Ajuda visível (bloco de orientação fixo)",
            ].map((h) => (
              <li key={h} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default SistemaExperimentos;
