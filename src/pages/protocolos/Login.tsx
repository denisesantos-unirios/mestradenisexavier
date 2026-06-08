import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, FlaskConical } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const ProtocolosLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, isProfessor, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const from = (location.state as { from?: string } | null)?.from ?? "/protocolos/experimentos";

  // Bootstrap the seeded admin so it always exists.
  useEffect(() => {
    supabase.functions.invoke("admin-users", { body: { action: "bootstrap" } });
  }, []);

  useEffect(() => {
    if (!loading && user && isProfessor) navigate(from, { replace: true });
  }, [user, isProfessor, loading, from, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setSubmitting(false);
    if (error) {
      toast({
        title: "Falha no login",
        description: "Verifique suas credenciais ou contate o gestor.",
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Bem-vindo(a)!" });
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-32 flex items-center justify-center px-6 pb-20">
        <motion.div
          className="glass-card p-10 max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <FlaskConical className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground text-center mb-2">Protocolos — Área Restrita</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Acesso somente para usuários autorizados pelo gestor.
          </p>

          {user && !isProfessor && (
            <div className="mb-6 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
              Sua conta está autenticada mas não possui permissão de acesso aos Protocolos.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              <Lock className="w-4 h-4 mr-2" />
              {submitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Esqueceu a senha? Entre em contato com o gestor.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default ProtocolosLogin;
