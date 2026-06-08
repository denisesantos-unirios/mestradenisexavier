// Edge function: admin-users
// Auth: caller must have role 'professor' OR be performing the initial bootstrap.
// Actions:
//   GET    -> list users with the 'professor' role
//   POST   -> { action: 'bootstrap' } | { action: 'create', email, password, display_name? }
//             | { action: 'delete', user_id } | { action: 'reset_password', user_id, password }

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const ADMIN_EMAIL = "denise.santos@unirioes.edu.br";
const ADMIN_DEFAULT_PASSWORD = "admin2026";

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

  // Ensure admin user exists (idempotent bootstrap). Runs on every invocation; cheap because list is filtered.
  async function ensureAdmin() {
    const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 });
    const existing = list?.users.find((u) => u.email === ADMIN_EMAIL);
    if (existing) return existing.id;
    const { data: created, error } = await admin.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_DEFAULT_PASSWORD,
      email_confirm: true,
      user_metadata: { full_name: "Profª Denise Santos" },
    });
    if (error) throw error;
    // The handle_new_user trigger grants 'professor' + 'gestor' for this email.
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
    if (!isProfessor) return json({ error: "Forbidden" }, 403);

    if (req.method === "GET") {
      const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 });
      const { data: roleRows } = await admin.from("user_roles").select("user_id, role").eq("role", "professor");
      const allowedIds = new Set((roleRows ?? []).map((r) => r.user_id));
      const users = (list?.users ?? [])
        .filter((u) => allowedIds.has(u.id))
        .map((u) => ({
          id: u.id,
          email: u.email,
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
          display_name: u.user_metadata?.full_name ?? u.email,
          is_admin: u.email === ADMIN_EMAIL,
        }));
      return json({ users });
    }

    if (body.action === "create") {
      const { email, password, display_name } = body;
      if (!email || !password) return json({ error: "email e senha são obrigatórios" }, 400);
      if (String(password).length < 6) return json({ error: "Senha deve ter no mínimo 6 caracteres" }, 400);
      const { data: created, error } = await admin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: display_name ?? email },
      });
      if (error) return json({ error: error.message }, 400);
      // Grant professor role (trigger already gives it to the seeded admin email)
      await admin.from("user_roles").insert({ user_id: created.user!.id, role: "professor" });
      return json({ ok: true, user_id: created.user!.id });
    }

    if (body.action === "delete") {
      const { user_id } = body;
      if (!user_id) return json({ error: "user_id obrigatório" }, 400);
      // Protect the seeded admin
      const { data: target } = await admin.auth.admin.getUserById(user_id);
      if (target?.user?.email === ADMIN_EMAIL) {
        return json({ error: "Não é possível excluir o administrador principal" }, 400);
      }
      const { error } = await admin.auth.admin.deleteUser(user_id);
      if (error) return json({ error: error.message }, 400);
      return json({ ok: true });
    }

    if (body.action === "reset_password") {
      const { user_id, password } = body;
      if (!user_id || !password) return json({ error: "Dados incompletos" }, 400);
      if (String(password).length < 6) return json({ error: "Senha deve ter no mínimo 6 caracteres" }, 400);
      const { error } = await admin.auth.admin.updateUserById(user_id, { password });
      if (error) return json({ error: error.message }, 400);
      return json({ ok: true });
    }

    return json({ error: "Ação inválida" }, 400);
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});
