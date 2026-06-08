import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

/**
 * Guards all Protocolos routes: requires user to be authenticated and to
 * have the `professor` role (granted by the gestor on the management page).
 */
const ProtocolosGuard = ({ children }: { children: ReactNode }) => {
  const { user, isProfessor, loading } = useAuth();
  const location = useLocation();
  const [bootstrapping, setBootstrapping] = useState(true);

  useEffect(() => {
    // Idempotent: ensures the seeded admin user exists at least once.
    supabase.functions
      .invoke("admin-users", { body: { action: "bootstrap" } })
      .finally(() => setBootstrapping(false));
  }, []);

  if (loading || bootstrapping) {
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
