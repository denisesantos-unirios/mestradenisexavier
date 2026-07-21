import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Cloud, Plus, ExternalLink, Trash2, Power } from "lucide-react";
import { toast } from "sonner";

type Sessao = {
  id: string;
  titulo: string;
  pergunta: string | null;
  ativa: boolean;
  created_at: string;
};

const NuvemLista = () => {
  const navigate = useNavigate();
  const [sessoes, setSessoes] = useState<Sessao[]>([]);
  const [titulo, setTitulo] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [loading, setLoading] = useState(false);
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/provas/login");
        return;
      }
      setAuthed(true);
      carregar();
    });
  }, [navigate]);

  const carregar = async () => {
    const { data, error } = await supabase
      .from("nuvem_sessoes")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setSessoes((data as Sessao[]) || []);
  };

  const criar = async () => {
    if (!titulo.trim()) return toast.error("Informe o título");
    setLoading(true);
    const { data: userData } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("nuvem_sessoes")
      .insert({ titulo, pergunta: pergunta || null, criado_por: userData.user?.id })
      .select()
      .single();
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Nuvem criada!");
    setTitulo("");
    setPergunta("");
    navigate(`/nuvem/${data.id}`);
  };

  const alternar = async (s: Sessao) => {
    const { error } = await supabase
      .from("nuvem_sessoes")
      .update({ ativa: !s.ativa })
      .eq("id", s.id);
    if (error) toast.error(error.message);
    else carregar();
  };

  const excluir = async (id: string) => {
    if (!confirm("Excluir esta nuvem e todas as palavras?")) return;
    const { error } = await supabase.from("nuvem_sessoes").delete().eq("id", id);
    if (error) toast.error(error.message);
    else carregar();
  };

  if (!authed) return null;

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Cloud className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Nuvem de Palavras</h1>
            <p className="text-muted-foreground">Crie nuvens interativas e compartilhe via QR Code</p>
          </div>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nova Nuvem
          </h2>
          <div className="space-y-3">
            <Input
              placeholder="Título (ex: Sentimentos sobre a aula)"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <Textarea
              placeholder="Pergunta / instrução para os alunos (opcional)"
              value={pergunta}
              onChange={(e) => setPergunta(e.target.value)}
              rows={2}
            />
            <Button onClick={criar} disabled={loading}>
              {loading ? "Criando..." : "Criar Nuvem"}
            </Button>
          </div>
        </Card>

        <div className="space-y-3">
          {sessoes.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Nenhuma nuvem criada ainda.</p>
          )}
          {sessoes.map((s) => (
            <Card key={s.id} className="p-4 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold truncate">{s.titulo}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.ativa ? "bg-green-500/20 text-green-700" : "bg-muted text-muted-foreground"}`}>
                    {s.ativa ? "Ativa" : "Pausada"}
                  </span>
                </div>
                {s.pergunta && <p className="text-sm text-muted-foreground truncate">{s.pergunta}</p>}
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => alternar(s)} title={s.ativa ? "Pausar" : "Ativar"}>
                  <Power className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link to={`/nuvem/${s.id}`}>
                    <ExternalLink className="w-4 h-4 mr-1" /> Abrir
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" onClick={() => excluir(s.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NuvemLista;
