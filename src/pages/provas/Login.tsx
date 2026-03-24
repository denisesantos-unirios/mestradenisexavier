import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Lock, ShieldCheck } from "lucide-react";
import { lovable } from "@/integrations/lovable";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { user, isProfessor, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && user && isProfessor) {
      navigate("/provas/banco-questoes");
    }
  }, [user, isProfessor, loading, navigate]);

  const handleGoogleLogin = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + "/provas/login",
      extraParams: {
        login_hint: "denise.santos@uniriosead.com",
        hd: "uniriosead.com",
      },
    });
    if (result.error) {
      toast({
        title: "Erro ao fazer login",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  if (user && !isProfessor) {
    return (
      <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
        <MainNavigation />
        <div className="pt-32 flex items-center justify-center px-6">
          <motion.div
            className="glass-card p-12 max-w-md w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShieldCheck className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Acesso Restrito</h2>
            <p className="text-muted-foreground mb-6">
              Sua conta não possui permissão de professor. Este módulo é exclusivo para a coordenação da disciplina.
            </p>
            <Button variant="outline" onClick={() => navigate("/")}>
              Voltar ao Portal
            </Button>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-32 flex items-center justify-center px-6">
        <motion.div
          className="glass-card p-12 max-w-md w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Área do Professor</h1>
          <p className="text-muted-foreground mb-8">
            Acesse o banco de questões e gerador de provas com sua conta Google autorizada.
          </p>
          <Button
            onClick={handleGoogleLogin}
            className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-6 text-lg"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Entrar com Google
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            Apenas contas autorizadas pela professora terão acesso.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Login;
