import { ReactNode, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import { useAuth, type PermissionKey } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { hydrateFromCloud } from "@/lib/ferramentas-store";

interface Props {
  children: ReactNode;
  permission?: PermissionKey;
  requireGestor?: boolean;
}

const ProtocolosGuard = ({ children, permission, requireGestor }: Props) => {
  const { user, isProfessor, isAdmin, hasPermission, canAccessPath, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("protocolos_bootstrap_done")) return;
    sessionStorage.setItem("protocolos_bootstrap_done", "1");
    supabase.functions
      .invoke("admin-users", { body: { action: "bootstrap" } })
      .catch(() => sessionStorage.removeItem("protocolos_bootstrap_done"));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !user) return;
    if (sessionStorage.getItem("ferramentas_hydrated")) return;
    sessionStorage.setItem("ferramentas_hydrated", "1");
    hydrateFromCloud().catch(() => sessionStorage.removeItem("ferramentas_hydrated"));
  }, [user]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/protocolos/login" state={{ from: location.pathname }} replace />;
  }

  const denied =
    (requireGestor && !isAdmin) ||
    (permission ? !hasPermission(permission) : !isAdmin && !isProfessor && !canAccessPath(location.pathname));

  if (denied) {
    return (
      <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
        <MainNavigation />
        <div className="max-w-xl mx-auto pt-32 px-6 text-center">
          <div className="glass-card p-10">
            <ShieldAlert className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Acesso restrito</h1>
            <p className="text-muted-foreground mb-6">
              Você ainda não tem permissão para acessar esta área dos Protocolos.
              Solicite a liberação ao(à) gestor(a) do sistema.
            </p>
            <Button asChild>
              <Link to="/protocolos/sistema">Voltar ao Sistema de Experimentos</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
};

export default ProtocolosGuard;
