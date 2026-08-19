import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import {
  UserPlus,
  Trash2,
  KeyRound,
  Users,
  LogOut,
  ShieldCheck,
  Save,
  ChevronDown,
  ChevronRight,
  Search,
  Upload,
  Download,
  FileSpreadsheet,
} from "lucide-react";

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
import { MENU_PERMISSIONS, ALL_MENU_KEYS, DISCIPLINAS } from "@/lib/menu-permissions";

interface ManagedUser {
  id: string;
  email: string;
  display_name: string;
  matricula?: string | null;
  disciplina?: string | null;
  semestre?: string | null;
  created_at: string;
  last_sign_in_at: string | null;
  is_admin: boolean;
  permissions: string[];
}

const SEMESTRE_PADRAO = "2026.2";

const emptyForm = {
  display_name: "",
  matricula: "",
  disciplina: DISCIPLINAS[0],
  semestre: SEMESTRE_PADRAO,
  email: "",
  password: "",
};

/** Painel de checkboxes por menu e submenu */
const PermissionTree = ({
  value,
  onChange,
}: {
  value: string[];
  onChange: (next: string[]) => void;
}) => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) =>
    onChange(value.includes(key) ? value.filter((k) => k !== key) : [...value, key]);

  const toggleGroup = (groupKey: string, itemKeys: string[]) => {
    const all = [groupKey, ...itemKeys];
    const isFull = all.every((k) => value.includes(k));
    onChange(isFull ? value.filter((k) => !all.includes(k)) : Array.from(new Set([...value, ...all])));
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 mb-2">
        <Button type="button" variant="outline" size="sm" onClick={() => onChange([...ALL_MENU_KEYS])}>
          Marcar tudo
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => onChange([])}>
          Desmarcar tudo
        </Button>
      </div>

      {MENU_PERMISSIONS.map((group) => {
        const itemKeys = group.items.map((i) => i.key);
        const selected = itemKeys.filter((k) => value.includes(k)).length;
        const groupOn = value.includes(group.key);
        const expanded = open === group.id;
        return (
          <div key={group.id} className="border border-border rounded-lg">
            <div className="flex items-center gap-3 p-3">
              <Checkbox
                checked={groupOn}
                onCheckedChange={() => toggleGroup(group.key, itemKeys)}
                id={`g-${group.id}`}
              />
              <label htmlFor={`g-${group.id}`} className="font-medium text-sm text-foreground cursor-pointer flex-1">
                {group.label}
                {itemKeys.length > 0 && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    {selected}/{itemKeys.length} submenus
                  </span>
                )}
              </label>
              {itemKeys.length > 0 && (
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : group.id)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              )}
            </div>
            {expanded && itemKeys.length > 0 && (
              <div className="border-t border-border p-3 grid sm:grid-cols-2 gap-2">
                {group.items.map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer"
                  >
                    <Checkbox checked={value.includes(item.key)} onCheckedChange={() => toggle(item.key)} />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Gestao = () => {
  const { toast } = useToast();
  const { signOut, user } = useAuth();
  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  const [createOpen, setCreateOpen] = useState(false);
  const [form, setForm] = useState({ ...emptyForm });
  const [newPerms, setNewPerms] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  const [resetUser, setResetUser] = useState<ManagedUser | null>(null);
  const [newPassword, setNewPassword] = useState("");

  const [permUser, setPermUser] = useState<ManagedUser | null>(null);
  const [draftPerms, setDraftPerms] = useState<string[]>([]);
  const [savingPerms, setSavingPerms] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);
  const [importOpen, setImportOpen] = useState(false);
  const [importRows, setImportRows] = useState<ImportRow[]>([]);
  const [importPerms, setImportPerms] = useState<string[]>([]);
  const [importing, setImporting] = useState(false);
  const [importLog, setImportLog] = useState<{ email: string; ok: boolean; msg?: string }[]>([]);



  async function loadUsers() {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("admin-users", { method: "GET" });
    setLoading(false);
    if (error) {
      toast({ title: "Erro ao carregar usuários", description: error.message, variant: "destructive" });
      return;
    }
    setUsers(data?.users ?? []);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.display_name.trim() || !form.matricula.trim() || !form.email.trim()) {
      toast({ title: "Preencha nome, matrícula e e-mail", variant: "destructive" });
      return;
    }
    if (form.password.length < 6) {
      toast({ title: "A senha deve ter no mínimo 6 caracteres", variant: "destructive" });
      return;
    }
    setSaving(true);
    const { data, error } = await supabase.functions.invoke("admin-users", {
      body: {
        action: "create",
        email: form.email.trim().toLowerCase(),
        password: form.password,
        display_name: form.display_name.trim(),
        matricula: form.matricula.trim(),
        disciplina: form.disciplina,
        semestre: form.semestre.trim(),
        permissions: newPerms,
      },
    });
    setSaving(false);
    if (error || data?.error) {
      toast({ title: "Erro ao cadastrar", description: data?.error ?? error?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Usuário cadastrado", description: `${form.email} já pode acessar os menus liberados.` });
    setCreateOpen(false);
    setForm({ ...emptyForm });
    setNewPerms([]);
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

  async function savePermissions() {
    if (!permUser) return;
    setSavingPerms(true);
    const { data, error } = await supabase.functions.invoke("admin-users", {
      body: { action: "set_permissions", user_id: permUser.id, permissions: draftPerms },
    });
    setSavingPerms(false);
    if (error || data?.error) {
      toast({ title: "Erro ao salvar acessos", description: data?.error ?? error?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Acessos atualizados", description: permUser.email });
    setPermUser(null);
    loadUsers();
  }

  const filtrados = users.filter((u) => {
    const t = busca.trim().toLowerCase();
    if (!t) return true;
    return [u.display_name, u.email, u.matricula, u.disciplina, u.semestre]
      .filter(Boolean)
      .some((v) => String(v).toLowerCase().includes(t));
  });

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="max-w-6xl mx-auto pt-28 px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-start justify-between flex-wrap gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Área exclusiva da administradora
            </div>
            <h1 className="text-3xl font-bold text-foreground">Gestão de Usuários</h1>
            <p className="text-muted-foreground mt-1">
              Cadastre alunos e libere o acesso por menu e submenu. Logado como{" "}
              <span className="font-medium">{user?.email}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setCreateOpen(true)}>
              <UserPlus className="w-4 h-4 mr-2" /> Cadastrar usuário
            </Button>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" /> Sair
            </Button>
          </div>
        </motion.div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Users className="w-4 h-4" />
              {filtrados.length} usuário(s) cadastrado(s)
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-9"
                placeholder="Buscar por nome, matrícula, disciplina..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <p className="text-muted-foreground text-sm">Carregando...</p>
          ) : filtrados.length === 0 ? (
            <p className="text-muted-foreground text-sm">Nenhum usuário encontrado.</p>
          ) : (
            <div className="space-y-3">
              {filtrados.map((u) => (
                <div key={u.id} className="border border-border rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="min-w-[240px]">
                      <div className="font-medium text-foreground flex items-center gap-2">
                        {u.display_name}
                        {u.is_admin && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary font-semibold">
                            Administradora
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{u.email}</div>
                      <div className="text-xs text-muted-foreground mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <span>Matrícula: {u.matricula || "—"}</span>
                        <span>Disciplina: {u.disciplina || "—"}</span>
                        <span>Semestre: {u.semestre || "—"}</span>
                      </div>
                      <div className="text-xs text-muted-foreground/70 mt-1">
                        Último acesso:{" "}
                        {u.last_sign_in_at ? new Date(u.last_sign_in_at).toLocaleString("pt-BR") : "nunca"}
                        {!u.is_admin && ` • ${(u.permissions ?? []).length} acesso(s) liberado(s)`}
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={u.is_admin}
                        onClick={() => {
                          setPermUser(u);
                          setDraftPerms(u.permissions ?? []);
                        }}
                      >
                        <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Acessos
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setResetUser(u)}>
                        <KeyRound className="w-3.5 h-3.5 mr-1" /> Senha
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(u)}
                        disabled={u.is_admin}
                        title={u.is_admin ? "Não é possível excluir a administradora" : undefined}
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1" /> Excluir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cadastro */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Cadastrar usuário</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Nome completo *</Label>
                <Input
                  value={form.display_name}
                  onChange={(e) => setForm({ ...form, display_name: e.target.value })}
                  maxLength={120}
                  required
                />
              </div>
              <div>
                <Label>Matrícula *</Label>
                <Input
                  value={form.matricula}
                  onChange={(e) => setForm({ ...form, matricula: e.target.value })}
                  maxLength={30}
                  required
                />
              </div>
              <div>
                <Label>Disciplina *</Label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={form.disciplina}
                  onChange={(e) => setForm({ ...form, disciplina: e.target.value })}
                >
                  {DISCIPLINAS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Semestre letivo *</Label>
                <Input
                  value={form.semestre}
                  onChange={(e) => setForm({ ...form, semestre: e.target.value })}
                  placeholder="2026.2"
                  maxLength={10}
                  required
                />
              </div>
              <div>
                <Label>E-mail de acesso *</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  required
                />
              </div>
              <div>
                <Label>Senha inicial *</Label>
                <Input
                  type="text"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="mínimo 6 caracteres"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Menus e submenus liberados</Label>
              <div className="max-h-[40vh] overflow-y-auto pr-1">
                <PermissionTree value={newPerms} onChange={setNewPerms} />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setCreateOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" disabled={saving}>
                <Save className="w-4 h-4 mr-2" /> {saving ? "Salvando..." : "Cadastrar e liberar"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Permissões */}
      <Dialog open={!!permUser} onOpenChange={(o) => !o && setPermUser(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Acessos de {permUser?.display_name}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground -mt-2">
            Marque os menus e submenus que este usuário poderá acessar.
          </p>
          <PermissionTree value={draftPerms} onChange={setDraftPerms} />
          <DialogFooter>
            <Button variant="outline" onClick={() => setPermUser(null)}>
              Cancelar
            </Button>
            <Button onClick={savePermissions} disabled={savingPerms}>
              <Save className="w-4 h-4 mr-2" /> {savingPerms ? "Salvando..." : "Salvar acessos"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Senha */}
      <Dialog open={!!resetUser} onOpenChange={(o) => !o && setResetUser(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Redefinir senha de {resetUser?.email}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <Label>Nova senha</Label>
              <Input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="mínimo 6 caracteres"
                required
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setResetUser(null)}>
                Cancelar
              </Button>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Gestao;
