import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, FolderKanban, FlaskConical, Shield, LogOut } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const cards = [
  {
    title: "Gerenciar Equipes",
    description: "Cadastre equipes, período, semestre e integrantes.",
    icon: Users,
    path: "/protocolos/equipes",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    title: "Gerenciar Projetos",
    description: "Vincule projetos de software às equipes.",
    icon: FolderKanban,
    path: "/protocolos/projetos",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    title: "Gerenciar Experimentos",
    description: "Monte o protocolo DECIDE, colete dados e analise resultados.",
    icon: FlaskConical,
    path: "/protocolos/experimentos",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    title: "Gestão de Acessos",
    description: "Crie e gerencie usuários autorizados (somente gestor).",
    icon: Shield,
    path: "/protocolos/gestao",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
];

const SistemaExperimentos = () => {
  const { user, signOut } = useAuth();

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-start justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">
              Protocolos
            </p>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Sistema de Experimentos
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Plataforma integrada para gestão de equipes, projetos e experimentos de
              usabilidade da disciplina de Projetos de Interface.
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

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={card.path} className="block group h-full">
                <div
                  className={`glass-card p-8 h-full bg-gradient-to-br ${card.color} hover:scale-[1.02] transition-transform`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SistemaExperimentos;
