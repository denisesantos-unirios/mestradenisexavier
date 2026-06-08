import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Trash2, KeyRound, Users, LogOut, ShieldCheck } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

interface ManagedUser {
  id: string;
  email: string;
  display_name: string;
  created_at: string;
  last_sign_in_at: string | null;
  is_admin: boolean;
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
  const [saving, setSaving] = useState(false);

  const [resetUser, setResetUser] = useState<ManagedUser | null>(null);
  const [newPassword, setNewPassword] = useState("");

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
    setSaving(true);
    const { data, error } = await supabase.functions.invoke("admin-users", {
      body: { action: "create", email: email.trim(), password, display_name: displayName.trim() || email.trim() },
    });
    setSaving(false);
    if (error || data?.error) {
      toast({ title: "Erro ao criar usuário", description: data?.error ?? error?.message, variant: "destructive" });
      return;
    }
    toast({ title: "Usuário criado", description: `${email} já pode acessar Protocolos.` });
    setCreateOpen(false);
    setEmail(""); setDisplayName(""); setPassword("");
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
            {users.length} usuário(s) com acesso
          </div>

          {loading ? (
            <p className="text-muted-foreground text-sm">Carregando...</p>
          ) : (
            <div className="divide-y divide-border">
              {users.map((u) => (
                <div key={u.id} className="py-4 flex items-center justify-between gap-4 flex-wrap">
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
              ))}
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
