import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cloud, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Sessao = { id: string; titulo: string; pergunta: string | null; ativa: boolean };

const NuvemParticipar = () => {
  const { id } = useParams();
  const [sessao, setSessao] = useState<Sessao | null>(null);
  const [palavra, setPalavra] = useState("");
  const [nome, setNome] = useState("");
  const [enviadas, setEnviadas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    supabase.from("nuvem_sessoes").select("*").eq("id", id).single().then(({ data, error }) => {
      if (error || !data) setErro("Nuvem não encontrada.");
      else setSessao(data as Sessao);
    });
  }, [id]);

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!palavra.trim() || !id) return;
    setLoading(true);
    const items = palavra.split(/[,\n]+/).map((s) => s.trim()).filter(Boolean);
    const rows = items.map((p) => ({ sessao_id: id, palavra: p, participante: nome || null }));
    const { error } = await supabase.from("nuvem_palavras").insert(rows);
    setLoading(false);
    if (error) return setErro(error.message);
    setEnviadas((prev) => [...items, ...prev].slice(0, 20));
    setPalavra("");
  };

  if (erro) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-background">
        <Card className="p-8 text-center max-w-md"><p className="text-destructive">{erro}</p></Card>
      </div>
    );
  }
  if (!sessao) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Cloud className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold">{sessao.titulo}</h1>
        </div>
        {sessao.pergunta && <p className="text-muted-foreground mb-4 text-sm">{sessao.pergunta}</p>}

        {!sessao.ativa ? (
          <p className="text-center py-6 text-muted-foreground">Esta nuvem está pausada.</p>
        ) : (
          <>
            <form onSubmit={enviar} className="space-y-3">
              <Input placeholder="Seu nome (opcional)" value={nome} onChange={(e) => setNome(e.target.value)} className="text-sm" />
              <Input placeholder="Digite sua palavra..." value={palavra} onChange={(e) => setPalavra(e.target.value)} autoFocus className="text-lg" />
              <p className="text-[11px] text-muted-foreground">Dica: envie várias palavras separadas por vírgula.</p>
              <Button type="submit" disabled={loading || !palavra.trim()} className="w-full">
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </form>

            {enviadas.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Suas contribuições:</p>
                <div className="flex flex-wrap gap-2">
                  <AnimatePresence>
                    {enviadas.map((w, i) => (
                      <motion.span key={`${w}-${i}`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1">
                        <Check className="w-3 h-3" /> {w}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </>
        )}

        <div className="mt-6 text-center">
          <Link to={`/nuvem/${id}`} className="text-xs text-muted-foreground hover:text-primary underline">
            Ver a nuvem em tempo real
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NuvemParticipar;
