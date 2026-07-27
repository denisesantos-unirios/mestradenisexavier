import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Trash2, KeyRound, Users, LogOut, ShieldCheck, Save } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

type PermissionKey =
  | "framework-decide"
  | "equipes"
  | "projetos"
  | "experimentos"
  | "ferramentas"
  | "avancado"
  | "interdisciplinar";

const PERMISSIONS: { key: PermissionKey; label: string; description: string }[] = [
  { key: "framework-decide", label: "Framework DECIDE", description: "Página teórica do protocolo" },
  { key: "equipes", label: "Gerenciar Equipes", description: "Cadastrar turmas e integrantes" },
  { key: "projetos", label: "Gerenciar Projetos", description: "Vincular projetos às equipes" },
  { key: "experimentos", label: "Gerenciar Experimentos", description: "Montar protocolo, TCLE e análise" },
  { key: "interdisciplinar", label: "Projeto Interdisciplinar", description: "Grupos, fases e avaliações" },
  { key: "ferramentas", label: "Ferramentas", description: "Histórias, backlog, kanban, personas, testes..." },
  { key: "avancado", label: "Recursos Avançados", description: "UML, Planning Poker, burndown, protótipos..." },
];

interface ManagedUser {
  id: string;
  email: string;
  display_name: string;
  created_at: string;
  last_sign_in_at: string | null;
  is_admin: boolean;
  permissions: PermissionKey[];
}

const Gestao = () => {
  const { toast } = useToast();
  const { signOut, user } = useAuth();
  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [loading, setLoading] = useState(true);

  const [createOpen, setCreateOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [newPerms, setNewPerms] = useState<PermissionKey[]>(PERMISSIONS.map((p) => p.key));
  const [saving, setSaving] = useState(false);

  const [resetUser, setResetUser] = useState<ManagedUser | null>(null);
  const [newPassword, setNewPassword] = useState("");

  // Local edits for permission checkboxes per user
  const [draftPerms, setDraftPerms] = useState<Record<string, PermissionKey[]>>({});
  const [savingPerms, setSavingPerms] = useState<string | null>(null);

  async function loadUsers() {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("admin-users", { method: "GET" });
    setLoading(false);
    if (error) {
      toast({ title: "Erro ao carregar usuários", description: error.message, variant: "destructive" });
      return;
    }
    const list: ManagedUser[] = data?.users ?? [];
    setUsers(list);
    setDraftPerms(Object.fromEntries(list.map((u) => [u.id, u.permissions ?? []])));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { data, error } = await supabase.functions.invoke("admin-users", {
      body: {
        action: "create",
        email: email.trim(),
        password,
        display_name: displayName.trim() || email.trim(),
        permissions: newPerms,
      },
    });
    setSaving(false);
    if (error || data?.error) {
      toast({ title: "Erro ao criar usuário", description: data?.error ?? error?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Usuário criado", description: `${email} já pode acessar Protocolos.` });
    setCreateOpen(false);
    setEmail(""); setDisplayName(""); setPassword("");
    setNewPerms(PERMISSIONS.map((p) => p.key));
    loadUsers();
  }

  async function handleDelete(u: ManagedUser) {
    if (!confirm(`Excluir ${u.email}? Esta ação não pode ser desfeita.`)) return;
    const { data, error } = await supabase.functions.invoke("admin-users", {
      body: { action: "delete", user_id: u.id },
    });
    if (error || data?.error) {
      toast({ title: "Erro ao excluir", description: data?.error ?? error?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Usuário excluído" });
    loadUsers();
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    if (!resetUser) return;
    const { data, error } = await supabase.functions.invoke("admin-users", {
      body: { action: "reset_password", user_id: resetUser.id, password: newPassword },
    });
    if (error || data?.error) {
      toast({ title: "Erro ao redefinir senha", description: data?.error ?? error?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Senha redefinida", description: `Nova senha definida para ${resetUser.email}.` });
    setResetUser(null);
    setNewPassword("");
  }

  function togglePerm(userId: string, key: PermissionKey) {
    setDraftPerms((prev) => {
      const cur = prev[userId] ?? [];
      const next = cur.includes(key) ? cur.filter((k) => k !== key) : [...cur, key];
      return { ...prev, [userId]: next };
    });
  }

  async function savePermissions(u: ManagedUser) {
    setSavingPerms(u.id);
    const perms = draftPerms[u.id] ?? [];
    const { data, error } = await supabase.functions.invoke("admin-users", {
      body: { action: "set_permissions", user_id: u.id, permissions: perms },
    });
    setSavingPerms(null);
    if (error || data?.error) {
      toast({ title: "Erro ao salvar permissões", description: data?.error ?? error?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Permissões atualizadas", description: u.email });
    loadUsers();
  }

  function isDirty(u: ManagedUser) {
    const a = [...(u.permissions ?? [])].sort().join("|");
    const b = [...(draftPerms[u.id] ?? [])].sort().join("|");
    return a !== b;
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="max-w-6xl mx-auto pt-28 px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Gestão de Acessos
            </div>
            <h1 className="text-3xl font-bold text-foreground">Usuários dos Protocolos</h1>
            <p className="text-muted-foreground mt-1">
              Logado como <span className="font-medium">{user?.email}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setCreateOpen(true)}>
              <UserPlus className="w-4 h-4 mr-2" /> Novo usuário
            </Button>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" /> Sair
            </Button>
          </div>
        </motion.div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
            <Users className="w-4 h-4" />
            {users.length} usuário(s) com acesso — marque os menus liberados para cada um.
          </div>

          {loading ? (
            <p className="text-muted-foreground text-sm">Carregando...</p>
          ) : (
            <div className="space-y-4">
              {users.map((u) => {
                const perms = draftPerms[u.id] ?? [];
                const dirty = isDirty(u);
                return (
                  <div key={u.id} className="border border-border rounded-xl p-4">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                      <div>
                        <div className="font-medium text-foreground flex items-center gap-2">
                          {u.display_name}
                          {u.is_admin && (
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary font-semibold">
                              Gestor
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{u.email}</div>
                        <div className="text-xs text-muted-foreground/70">
                          Último acesso: {u.last_sign_in_at ? new Date(u.last_sign_in_at).toLocaleString("pt-BR") : "nunca"}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setResetUser(u)}>
                          <KeyRound className="w-3.5 h-3.5 mr-1" /> Senha
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(u)}
                          disabled={u.is_admin}
                          title={u.is_admin ? "Não é possível excluir o gestor principal" : undefined}
                        >
                          <Trash2 className="w-3.5 h-3.5 mr-1" /> Excluir
                        </Button>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                        Menus liberados
                      </p>
                      {u.is_admin ? (
                        <p className="text-sm text-muted-foreground italic">
                          O gestor tem acesso a todos os menus por padrão.
                        </p>
                      ) : (
                        <>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {PERMISSIONS.map((p) => {
                              const checked = perms.includes(p.key);
                              return (
                                <label
                                  key={p.key}
                                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                    checked ? "border-primary/60 bg-primary/5" : "border-border hover:bg-muted/40"
                                  }`}
                                >
                                  <Checkbox
                                    checked={checked}
                                    onCheckedChange={() => togglePerm(u.id, p.key)}
                                    className="mt-0.5"
                                  />
                                  <div>
                                    <div className="text-sm font-medium text-foreground">{p.label}</div>
                                    <div className="text-xs text-muted-foreground">{p.description}</div>
                                  </div>
                                </label>
                              );
                            })}
                          </div>
                          <div className="flex justify-end mt-3">
                            <Button
                              size="sm"
                              disabled={!dirty || savingPerms === u.id}
                              onClick={() => savePermissions(u)}
                            >
                              <Save className="w-3.5 h-3.5 mr-1" />
                              {savingPerms === u.id ? "Salvando..." : dirty ? "Salvar permissões" : "Sem alterações"}
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Create user */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo usuário</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <Label>Nome</Label>
              <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Nome de exibição" />
            </div>
            <div>
              <Label>E-mail</Label>
              <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>Senha inicial</Label>
              <Input type="text" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className="text-xs text-muted-foreground mt-1">Mínimo 6 caracteres. Compartilhe com o usuário.</p>
            </div>
            <div>
              <Label>Menus liberados</Label>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {PERMISSIONS.map((p) => {
                  const checked = newPerms.includes(p.key);
                  return (
                    <label key={p.key} className="flex items-center gap-2 text-sm">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(v) =>
                          setNewPerms((prev) =>
                            v ? Array.from(new Set([...prev, p.key])) : prev.filter((k) => k !== p.key)
                          )
                        }
                      />
                      <span className="text-foreground">{p.label}</span>
                      <span className="text-muted-foreground text-xs">— {p.description}</span>
                    </label>
                  );
                })}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setCreateOpen(false)}>Cancelar</Button>
              <Button type="submit" disabled={saving}>{saving ? "Criando..." : "Criar"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Reset password */}
      <Dialog open={!!resetUser} onOpenChange={(o) => !o && setResetUser(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Redefinir senha — {resetUser?.email}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <Label>Nova senha</Label>
              <Input type="text" required minLength={6} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setResetUser(null)}>Cancelar</Button>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Gestao;
