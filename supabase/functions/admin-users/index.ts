// Edge function: admin-users
// Auth: caller must have role 'professor' OR be performing the initial bootstrap.
// Actions:
//   GET    -> list users with the 'professor' role
//   POST   -> { action: 'bootstrap' } | { action: 'create', email, password, display_name? }
//             | { action: 'delete', user_id } | { action: 'reset_password', user_id, password }

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const ADMIN_EMAIL = "denise.santos@uniriosead.com";
const ADMIN_DEFAULT_PASSWORD = "admin2026";
const ADMIN_EMAILS = [ADMIN_EMAIL];
const ALL_PERMISSIONS = [
  "framework-decide",
  "equipes",
  "projetos",
  "experimentos",
  "ferramentas",
  "avancado",
  "interdisciplinar",
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const ANON = Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY")!;

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE);

  // Ensure admin users have the required roles and current permissions (idempotent).
  async function ensureAdmin() {
    const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 });
    const existing = list?.users.find((u) => u.email === ADMIN_EMAIL);
    if (existing) {
      await Promise.all([
        admin.from("user_roles").upsert({ user_id: existing.id, role: "professor" }, { onConflict: "user_id,role" }),
        admin.from("user_roles").upsert({ user_id: existing.id, role: "gestor" }, { onConflict: "user_id,role" }),
        admin.from("profiles").update({ permissions: ALL_PERMISSIONS }).eq("user_id", existing.id),
      ]);
      return existing.id;
    }
    const { data: created, error } = await admin.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_DEFAULT_PASSWORD,
      email_confirm: true,
      user_metadata: { full_name: "Profª Denise Santos" },
    });
    if (error) throw error;
    await Promise.all([
      admin.from("user_roles").upsert({ user_id: created.user!.id, role: "professor" }, { onConflict: "user_id,role" }),
      admin.from("user_roles").upsert({ user_id: created.user!.id, role: "gestor" }, { onConflict: "user_id,role" }),
      admin.from("profiles").upsert({ user_id: created.user!.id, email: ADMIN_EMAIL, display_name: "Profª Denise Santos", permissions: ALL_PERMISSIONS }, { onConflict: "user_id" }),
    ]);
    return created.user!.id;
  }

  try {
    const body = req.method === "POST" ? await req.json().catch(() => ({})) : {};

    // Public bootstrap action (no auth required) — only creates the seeded admin.
    if (req.method === "POST" && body.action === "bootstrap") {
      const id = await ensureAdmin();
      return json({ ok: true, admin_id: id });
    }

    // Auto-bootstrap on first GET as well so the admin can sign in immediately.
    await ensureAdmin().catch(() => {});

    // All other actions require authenticated professor.
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace("Bearer ", "");
    if (!token) return json({ error: "Missing auth" }, 401);

    const userClient = createClient(SUPABASE_URL, ANON, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: { user }, error: userErr } = await userClient.auth.getUser();
    if (userErr || !user) return json({ error: "Invalid auth" }, 401);

    const { data: roles } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id);
    const isProfessor = roles?.some((r) => r.role === "professor");
    const isAdmin = (user.email ?? "").toLowerCase() === ADMIN_EMAIL;
    if (!isProfessor && !isAdmin) return json({ error: "Forbidden" }, 403);

    // Only the admin account can mutate users / permissions
    const requireGestor = () => {
      if (!isAdmin) return json({ error: "Apenas a administradora pode executar esta ação" }, 403);
      return null;
    };

    if (req.method === "GET") {
      const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 500 });
      const { data: profiles } = await admin
        .from("profiles")
        .select("user_id, permissions, matricula, disciplina, semestre, display_name");
      const profMap = new Map((profiles ?? []).map((p: any) => [p.user_id, p]));
      const users = (list?.users ?? []).map((u) => {
        const p: any = profMap.get(u.id) ?? {};
        const isAdmin = ADMIN_EMAILS.includes(u.email ?? "");
        return {
          id: u.id,
          email: u.email,
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
          display_name: p.display_name ?? u.user_metadata?.full_name ?? u.email,
          matricula: p.matricula ?? null,
          disciplina: p.disciplina ?? null,
          semestre: p.semestre ?? null,
          is_admin: isAdmin,
          permissions: isAdmin ? ALL_PERMISSIONS : (p.permissions ?? []),
        };
      });
      return json({ users });
    }

    if (body.action === "create") {
      const blocked = requireGestor(); if (blocked) return blocked;
      const { email, password, display_name, permissions, matricula, disciplina, semestre } = body;
      if (!email || !password) return json({ error: "email e senha são obrigatórios" }, 400);
      if (String(password).length < 6) return json({ error: "Senha deve ter no mínimo 6 caracteres" }, 400);
      if (!display_name || !matricula) return json({ error: "nome e matrícula são obrigatórios" }, 400);
      const { data: created, error } = await admin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: display_name },
      });
      if (error) return json({ error: error.message }, 400);
      const perms = Array.isArray(permissions) ? permissions.map(String).slice(0, 500) : [];
      await admin.from("profiles").update({
        permissions: perms,
        display_name: String(display_name).slice(0, 120),
        matricula: String(matricula).slice(0, 30),
        disciplina: disciplina ? String(disciplina).slice(0, 80) : null,
        semestre: semestre ? String(semestre).slice(0, 10) : null,
      }).eq("user_id", created.user!.id);
      return json({ ok: true, user_id: created.user!.id });
    }

    if (body.action === "delete") {
      const blocked = requireGestor(); if (blocked) return blocked;
      const { user_id } = body;
      if (!user_id) return json({ error: "user_id obrigatório" }, 400);
      const { data: target } = await admin.auth.admin.getUserById(user_id);
      if (target?.user?.email === ADMIN_EMAIL) {
        return json({ error: "Não é possível excluir o administrador principal" }, 400);
      }
      const { error } = await admin.auth.admin.deleteUser(user_id);
      if (error) return json({ error: error.message }, 400);
      return json({ ok: true });
    }

    if (body.action === "reset_password") {
      const blocked = requireGestor(); if (blocked) return blocked;
      const { user_id, password } = body;
      if (!user_id || !password) return json({ error: "Dados incompletos" }, 400);
      if (String(password).length < 6) return json({ error: "Senha deve ter no mínimo 6 caracteres" }, 400);
      const { error } = await admin.auth.admin.updateUserById(user_id, { password });
      if (error) return json({ error: error.message }, 400);
      return json({ ok: true });
    }

    if (body.action === "set_permissions") {
      const blocked = requireGestor(); if (blocked) return blocked;
      const { user_id, permissions } = body;
      if (!user_id || !Array.isArray(permissions)) return json({ error: "Dados incompletos" }, 400);
      const clean = permissions.map(String).slice(0, 500);
      const { error } = await admin.from("profiles").update({ permissions: clean }).eq("user_id", user_id);
      if (error) return json({ error: error.message }, 400);
      return json({ ok: true });
    }

    return json({ error: "Ação inválida" }, 400);
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});
