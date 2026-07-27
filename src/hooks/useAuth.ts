import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export type PermissionKey =
  | "framework-decide"
  | "equipes"
  | "projetos"
  | "experimentos"
  | "ferramentas"
  | "avancado"
  | "interdisciplinar";
const ALL_PERMISSIONS: PermissionKey[] = [
  "framework-decide",
  "equipes",
  "projetos",
  "experimentos",
  "ferramentas",
  "avancado",
  "interdisciplinar",
];

type AuthState = {
  user: User | null;
  isProfessor: boolean;
  isGestor: boolean;
  permissions: PermissionKey[];
  loading: boolean;
};

let state: AuthState = { user: null, isProfessor: false, isGestor: false, permissions: [], loading: true };
const listeners = new Set<(s: AuthState) => void>();
let initialized = false;
let accessCache: { userId: string; isProfessor: boolean; isGestor: boolean; permissions: PermissionKey[] } | null = null;
let accessPromise: Promise<{ isProfessor: boolean; isGestor: boolean; permissions: PermissionKey[] }> | null = null;

const setState = (next: Partial<AuthState>) => {
  state = { ...state, ...next };
  listeners.forEach((l) => l(state));
};

const fetchAccess = (userId: string) => {
  if (accessCache && accessCache.userId === userId) {
    return Promise.resolve({
      isProfessor: accessCache.isProfessor,
      isGestor: accessCache.isGestor,
      permissions: accessCache.permissions,
    });
  }
  if (accessPromise) return accessPromise;
  accessPromise = (async () => {
    try {
      const [{ data: roles }, { data: profile }] = await Promise.all([
        supabase.from("user_roles").select("role").eq("user_id", userId),
        supabase.from("profiles").select("permissions").eq("user_id", userId).maybeSingle(),
      ]);
      const isProfessor = !!roles?.some((r: any) => r.role === "professor");
      const isGestor = !!roles?.some((r: any) => r.role === "gestor");
      const raw = (profile as any)?.permissions as string[] | null | undefined;
      const permissions = isGestor
        ? ALL_PERMISSIONS
        : ((raw ?? ALL_PERMISSIONS) as string[]).filter((p): p is PermissionKey =>
            ALL_PERMISSIONS.includes(p as PermissionKey)
          );
      accessCache = { userId, isProfessor, isGestor, permissions };
      return { isProfessor, isGestor, permissions };
    } catch {
      return { isProfessor: false, isGestor: false, permissions: [] as PermissionKey[] };
    } finally {
      accessPromise = null;
    }
  })();
  return accessPromise;
};

const init = () => {
  if (initialized) return;
  initialized = true;

  supabase.auth.onAuthStateChange((event, session) => {
    const currentUser = session?.user ?? null;
    if (event === "TOKEN_REFRESHED" && state.user?.id === currentUser?.id) {
      setState({ user: currentUser, loading: false });
      return;
    }
    if (!currentUser) {
      accessCache = null;
      setState({ user: null, isProfessor: false, isGestor: false, permissions: [], loading: false });
      return;
    }
    setState({ user: currentUser });
    fetchAccess(currentUser.id).then((a) =>
      setState({ ...a, loading: false })
    );
  });

  supabase.auth.getSession().then(({ data: { session } }) => {
    const currentUser = session?.user ?? null;
    if (!currentUser) {
      setState({ user: null, isProfessor: false, isGestor: false, permissions: [], loading: false });
      return;
    }
    setState({ user: currentUser });
    fetchAccess(currentUser.id).then((a) =>
      setState({ ...a, loading: false })
    );
  });
};

export const invalidateAuthCache = () => {
  accessCache = null;
  if (state.user) {
    fetchAccess(state.user.id).then((a) => setState({ ...a }));
  }
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
    accessCache = null;
    setState({ user: null, isProfessor: false, isGestor: false, permissions: [], loading: false });
  };

  const hasPermission = (key: PermissionKey) => s.isGestor || s.permissions.includes(key);

  return { ...s, signOut, hasPermission };
};
