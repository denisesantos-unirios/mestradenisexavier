import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

/**
 * Guards all Protocolos routes: requires user to be authenticated and to
 * have the `professor` role (granted by the gestor on the management page).
 *
 * The admin "bootstrap" call is fire-and-forget and only runs once per
 * browser session, so navigating between protocolos pages is instant.
 */
const ProtocolosGuard = ({ children }: { children: ReactNode }) => {
  const { user, isProfessor, loading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("protocolos_bootstrap_done")) return;
    sessionStorage.setItem("protocolos_bootstrap_done", "1");
    // Fire-and-forget: never block UI on this idempotent seed call.
    supabase.functions
      .invoke("admin-users", { body: { action: "bootstrap" } })
      .catch(() => sessionStorage.removeItem("protocolos_bootstrap_done"));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  if (!user || !isProfessor) {
    return <Navigate to="/protocolos/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default ProtocolosGuard;
