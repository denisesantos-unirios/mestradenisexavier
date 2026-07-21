import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { supabase } from "@/integrations/supabase/client";
import MainNavigation from "@/components/MainNavigation";
import { Card } from "@/components/ui/card";
import { Cloud, Users, QrCode, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

type Sessao = { id: string; titulo: string; pergunta: string | null; ativa: boolean };
type Palavra = { id: string; palavra: string; created_at: string };

const STOPWORDS = new Set(["a","o","e","de","da","do","que","é","em","um","uma","para","com","no","na"]);

const normalize = (w: string) => w.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "");

const NuvemView = () => {
  const { id } = useParams();
  const [sessao, setSessao] = useState<Sessao | null>(null);
  const [palavras, setPalavras] = useState<Palavra[]>([]);
  const [ultima, setUltima] = useState<string | null>(null);

  const shareUrl = `${window.location.origin}/nuvem/${id}/participar`;

  useEffect(() => {
    if (!id) return;
    supabase.from("nuvem_sessoes").select("*").eq("id", id).single().then(({ data }) => {
      setSessao(data as Sessao);
    });
    supabase.from("nuvem_palavras").select("*").eq("sessao_id", id).order("created_at").then(({ data }) => {
      setPalavras((data as Palavra[]) || []);
    });

    const channel = supabase
      .channel(`nuvem-${id}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "nuvem_palavras", filter: `sessao_id=eq.${id}` },
        (payload) => {
          const nova = payload.new as Palavra;
          setPalavras((prev) => [...prev, nova]);
          setUltima(nova.palavra);
          setTimeout(() => setUltima(null), 2500);
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [id]);

  const cloud = useMemo(() => {
    const counts = new Map<string, number>();
    palavras.forEach((p) => {
      const w = normalize(p.palavra);
      if (!w || STOPWORDS.has(w)) return;
      counts.set(w, (counts.get(w) || 0) + 1);
    });
    const arr = Array.from(counts.entries()).map(([text, value]) => ({ text, value }));
    arr.sort((a, b) => b.value - a.value);
    const max = arr[0]?.value || 1;
    const palette = ["hsl(210 90% 45%)", "hsl(25 95% 55%)", "hsl(160 70% 40%)", "hsl(280 65% 55%)", "hsl(340 80% 55%)", "hsl(200 80% 50%)"];
    return arr.slice(0, 80).map((w, i) => ({
      ...w,
      size: 16 + Math.round((w.value / max) * 72),
      color: palette[i % palette.length],
      rotate: (i % 5 === 0) ? -6 : 0,
    }));
  }, [palavras]);

  const copiarLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copiado!");
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <Cloud className="w-6 h-6 text-primary" />
          <h1 className="text-3xl font-bold">{sessao?.titulo || "Carregando..."}</h1>
          {sessao && !sessao.ativa && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Pausada</span>
          )}
        </div>
        {sessao?.pergunta && <p className="text-muted-foreground mb-6">{sessao.pergunta}</p>}

        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <Card className="p-6 min-h-[500px] relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{palavras.length} contribuições · {cloud.length} palavras únicas</span>
              </div>
              <span className="text-xs text-primary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Ao vivo
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 min-h-[400px] py-8">
              <AnimatePresence>
                {cloud.length === 0 ? (
                  <p className="text-muted-foreground">Aguardando as primeiras palavras...</p>
                ) : (
                  cloud.map((w) => (
                    <motion.span
                      key={w.text}
                      layout
                      initial={{ opacity: 0, scale: 0.3 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      style={{
                        fontSize: `${w.size}px`,
                        color: w.color,
                        transform: `rotate(${w.rotate}deg)`,
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                      className="inline-block cursor-default hover:scale-110 transition-transform"
                      title={`${w.value} ocorrência${w.value > 1 ? "s" : ""}`}
                    >
                      {w.text}
                    </motion.span>
                  ))
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {ultima && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm shadow-lg"
                >
                  + {ultima}
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-sm font-medium mb-3">
                <QrCode className="w-4 h-4 text-primary" />
                Escaneie para participar
              </div>
              <div className="bg-white p-3 rounded-lg inline-block border">
                <QRCodeSVG value={shareUrl} size={200} level="M" />
              </div>
              <button
                onClick={copiarLink}
                className="mt-3 text-xs text-muted-foreground hover:text-primary flex items-center gap-1 mx-auto"
              >
                <Copy className="w-3 h-3" /> {shareUrl}
              </button>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm font-semibold mb-2">Top palavras</h3>
              <ol className="space-y-1 text-sm">
                {cloud.slice(0, 10).map((w, i) => (
                  <li key={w.text} className="flex justify-between">
                    <span className="text-muted-foreground">{i + 1}. {w.text}</span>
                    <span className="font-mono text-primary">{w.value}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NuvemView;
