import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

type AuthState = {
  user: User | null;
  isProfessor: boolean;
  loading: boolean;
};

let state: AuthState = { user: null, isProfessor: false, loading: true };
const listeners = new Set<(s: AuthState) => void>();
let initialized = false;
let roleCache: { userId: string; isProfessor: boolean } | null = null;
let rolePromise: Promise<boolean> | null = null;

const setState = (next: Partial<AuthState>) => {
  state = { ...state, ...next };
  listeners.forEach((l) => l(state));
};

const fetchRole = (userId: string): Promise<boolean> => {
  if (roleCache && roleCache.userId === userId) {
    return Promise.resolve(roleCache.isProfessor);
  }
  if (rolePromise) return rolePromise;
  rolePromise = (async () => {
    try {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "professor")
        .maybeSingle();
      const isProf = !!data;
      roleCache = { userId, isProfessor: isProf };
      return isProf;
    } catch {
      return false;
    } finally {
      rolePromise = null;
    }
  })();
  return rolePromise;
};

const init = () => {
  if (initialized) return;
  initialized = true;

  supabase.auth.onAuthStateChange((event, session) => {
    const currentUser = session?.user ?? null;

    // Token refresh doesn't change the user — skip role refetch.
    if (event === "TOKEN_REFRESHED" && state.user?.id === currentUser?.id) {
      setState({ user: currentUser, loading: false });
      return;
    }

    if (!currentUser) {
      roleCache = null;
      setState({ user: null, isProfessor: false, loading: false });
      return;
    }

    setState({ user: currentUser });
    fetchRole(currentUser.id).then((isProf) =>
      setState({ isProfessor: isProf, loading: false })
    );
  });

  supabase.auth.getSession().then(({ data: { session } }) => {
    const currentUser = session?.user ?? null;
    if (!currentUser) {
      setState({ user: null, isProfessor: false, loading: false });
      return;
    }
    setState({ user: currentUser });
    fetchRole(currentUser.id).then((isProf) =>
      setState({ isProfessor: isProf, loading: false })
    );
  });
};

export const useAuth = () => {
  const [s, setS] = useState<AuthState>(state);

  useEffect(() => {
    init();
    listeners.add(setS);
    setS(state);
    return () => {
      listeners.delete(setS);
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    roleCache = null;
    setState({ user: null, isProfessor: false, loading: false });
  };

  return { ...s, signOut };
};
