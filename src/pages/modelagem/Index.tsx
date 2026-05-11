import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import { Database, ChevronRight, Layers, Loader2 } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { cases } from "@/data/modelagem/cases";
import { useAuth } from "@/hooks/useAuth";

const ModelagemIndex = () => {
  const { isProfessor, loading } = useAuth();
  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  if (!isProfessor) return <Navigate to="/provas/login" replace />;
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Database className="w-5 h-5 text-blue-400" />
              <span className="text-muted-foreground font-medium text-sm">Modelagem de Dados • Engenharia de Software I</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Estudos de </span>
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Modelagem</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              9 mini-mundos completos com DER, modelagem conceitual, diagrama de classes,
              diagrama de atividades, requisitos funcionais, script SQL e histórias de usuário.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/modelagem/${cs.slug}`}
                  className="block h-full glass-card p-6 hover:border-blue-400/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {cs.numero}
                    </div>
                    <Layers className="w-5 h-5 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">{cs.titulo}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cs.subtitulo}</p>
                  <div className="flex items-center text-sm text-blue-400 font-medium">
                    Abrir estudo <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ModelagemIndex;
