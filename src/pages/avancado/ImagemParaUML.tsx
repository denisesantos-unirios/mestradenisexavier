import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Upload, Wand2, Trash2, Download, Copy, Loader2, ExternalLink, AlertTriangle, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";
import MermaidDiagram from "@/components/MermaidDiagram";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FKEYS, uid, readLS, writeLS, baixarMd } from "@/lib/ferramentas-store";

type Diagrama = { id: string; titulo: string; tipo: string; codigo: string; criadoEm: string };

type Problema = {
  categoria: string;
  severidade: "erro" | "aviso" | "ok" | string;
  elemento?: string;
  descricao: string;
  correcao?: string;
};

type Resumo = { erros?: number; avisos?: number; veredito?: string };

const SEVERIDADE = {
  erro: { label: "Erro", Icon: AlertCircle, classe: "border-destructive/40 bg-destructive/5", cor: "text-destructive" },
  aviso: { label: "Atenção", Icon: AlertTriangle, classe: "border-accent/50 bg-accent/5", cor: "text-accent-foreground" },
  ok: { label: "OK", Icon: CheckCircle2, classe: "border-primary/30 bg-primary/5", cor: "text-primary" },
} as const;

const infoSeveridade = (s: string) => SEVERIDADE[(s as keyof typeof SEVERIDADE)] ?? SEVERIDADE.aviso;

const MAX_MB = 8;

const ImagemParaUML = () => {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [imagem, setImagem] = useState<string | null>(null);
  const [nomeArquivo, setNomeArquivo] = useState("");
  const [observacao, setObservacao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [entidades, setEntidades] = useState<string[]>([]);
  const [observacoes, setObservacoes] = useState<string[]>([]);
  const [problemas, setProblemas] = useState<Problema[]>([]);
  const [resumo, setResumo] = useState<Resumo | null>(null);
  const [codigoCorrigido, setCodigoCorrigido] = useState("");
  const [lista, setLista] = useState<Diagrama[]>([]);

  useEffect(() => setLista(readLS<Diagrama[]>(FKEYS.uml, [])), []);

  const carregarArquivo = (file?: File | null) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast({ title: "Envie um arquivo de imagem (PNG, JPG, WEBP).", variant: "destructive" });
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      toast({ title: `Imagem muito grande (máx. ${MAX_MB} MB).`, variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImagem(String(reader.result));
      setNomeArquivo(file.name);
      if (!titulo) setTitulo(file.name.replace(/\.[^.]+$/, ""));
    };
    reader.readAsDataURL(file);
  };

  const gerar = async () => {
    if (!imagem) {
      toast({ title: "Envie primeiro a imagem da modelagem conceitual.", variant: "destructive" });
      return;
    }
    setCarregando(true);
    setCodigo("");
    setProblemas([]);
    setResumo(null);
    setCodigoCorrigido("");
    try {
      const { data, error } = await supabase.functions.invoke("imagem-para-uml", {
        body: { imageDataUrl: imagem, observacao },
      });
      if (error) throw new Error(error.message);
      if ((data as any)?.error) throw new Error((data as any).error);
      const mermaid = String((data as any)?.mermaid || "").trim();
      if (!mermaid) throw new Error("A IA não retornou um diagrama válido. Tente uma imagem mais nítida.");
      setCodigo(mermaid);
      setEntidades(((data as any)?.entidades ?? []) as string[]);
      setObservacoes(((data as any)?.observacoes ?? []) as string[]);
      setProblemas(((data as any)?.problemas ?? []) as Problema[]);
      setResumo(((data as any)?.resumo ?? null) as Resumo | null);
      setCodigoCorrigido(String((data as any)?.mermaidCorrigido || "").trim());
      if (!titulo) setTitulo(String((data as any)?.titulo || "Diagrama de Classes"));
      toast({ title: "Diagrama de classes gerado!" });
    } catch (e) {
      toast({ title: "Não foi possível gerar o diagrama", description: String((e as Error).message), variant: "destructive" });
    } finally {
      setCarregando(false);
    }
  };

  const salvar = () => {
    if (!codigo.trim()) return;
    const novo: Diagrama = {
      id: uid(),
      titulo: titulo.trim() || "Diagrama de Classes",
      tipo: "Classes",
      codigo,
      criadoEm: new Date().toISOString(),
    };
    const nova = [novo, ...lista];
    setLista(nova);
    writeLS(FKEYS.uml, nova);
    toast({ title: "Salvo no Editor UML (Recursos Avançados → Editor UML)." });
  };

  const remover = (id: string) => {
    const nova = lista.filter((d) => d.id !== id);
    setLista(nova);
    writeLS(FKEYS.uml, nova);
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Imagem → Diagrama de Classes</h1>
            <p className="text-sm text-muted-foreground">
              Envie a foto ou print de uma modelagem conceitual (E-R, esboço, quadro branco) e a IA gera o diagrama de classes UML.
            </p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div>
              <Label>Imagem da modelagem conceitual</Label>
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => { e.preventDefault(); carregarArquivo(e.dataTransfer.files?.[0]); }}
                onClick={() => inputRef.current?.click()}
                className="mt-2 cursor-pointer rounded-xl border-2 border-dashed border-border hover:border-primary/60 transition-colors p-6 text-center"
              >
                {imagem ? (
                  <img src={imagem} alt="Pré-visualização da modelagem conceitual enviada" className="max-h-72 mx-auto rounded-lg object-contain" />
                ) : (
                  <div className="space-y-2 text-muted-foreground">
                    <Upload className="w-8 h-8 mx-auto" />
                    <p className="text-sm">Clique ou arraste a imagem aqui (PNG, JPG, WEBP — máx. {MAX_MB} MB)</p>
                  </div>
                )}
              </div>
              <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => carregarArquivo(e.target.files?.[0])} />
              {nomeArquivo && <p className="text-xs text-muted-foreground mt-2">{nomeArquivo}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label>Título do diagrama</Label>
                <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="ex.: Modelo de domínio — Locadora" />
              </div>
              <div>
                <Label>Contexto (opcional)</Label>
                <Input value={observacao} onChange={(e) => setObservacao(e.target.value)} placeholder="ex.: sistema hospitalar, usar herança" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button onClick={gerar} disabled={carregando || !imagem}>
                {carregando ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Wand2 className="w-4 h-4 mr-1" />}
                {carregando ? "Analisando imagem..." : "Gerar diagrama + analisar erros"}
              </Button>
              {imagem && (
                <Button variant="outline" onClick={() => { setImagem(null); setNomeArquivo(""); }}>
                  <Trash2 className="w-4 h-4 mr-1" /> Remover imagem
                </Button>
              )}
            </div>

            {codigo && (
              <div>
                <Label>Código Mermaid (editável)</Label>
                <Textarea rows={12} className="font-mono text-xs" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button size="sm" onClick={salvar}>Salvar no Editor UML</Button>
                  <Button size="sm" variant="outline" onClick={() => { navigator.clipboard.writeText(codigo); toast({ title: "Código copiado." }); }}>
                    <Copy className="w-4 h-4 mr-1" /> Copiar
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => baixarMd(`${(titulo || "diagrama").replace(/\s+/g, "-").toLowerCase()}.md`, `## ${titulo}\n\n\`\`\`mermaid\n${codigo}\n\`\`\``)}>
                    <Download className="w-4 h-4 mr-1" /> Exportar .md
                  </Button>
                  <Link to="/avancado/editor-uml">
                    <Button size="sm" variant="ghost"><ExternalLink className="w-4 h-4 mr-1" /> Editor UML</Button>
                  </Link>
                </div>
              </div>
            )}
          </Card>

          <Card className="p-6 space-y-4">
            <Label className="block">Diagrama de classes UML</Label>
            {codigo ? (
              <MermaidDiagram chart={codigo} />
            ) : (
              <p className="text-sm text-muted-foreground">
                O diagrama aparecerá aqui após a análise da imagem. Dica: fotos nítidas, com nomes de entidades, atributos e cardinalidades legíveis, geram resultados melhores.
              </p>
            )}
            {entidades.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">Entidades identificadas</p>
                <div className="flex flex-wrap gap-2">
                  {entidades.map((e) => <Badge key={e} variant="secondary">{e}</Badge>)}
                </div>
              </div>
            )}
            {observacoes.length > 0 && (
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {observacoes.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            )}
          </Card>
        </div>

        {(problemas.length > 0 || resumo) && (
          <Card className="p-6 mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Análise de consistência do modelo</h2>
                <p className="text-sm text-muted-foreground">
                  Verificação de cardinalidades, chaves primárias e chaves estrangeiras identificadas na imagem.
                </p>
              </div>
              <div className="flex gap-2 ml-auto">
                <Badge variant="destructive">{resumo?.erros ?? problemas.filter((p) => p.severidade === "erro").length} erro(s)</Badge>
                <Badge variant="secondary">{resumo?.avisos ?? problemas.filter((p) => p.severidade === "aviso").length} aviso(s)</Badge>
              </div>
            </div>

            {resumo?.veredito && <p className="text-sm text-foreground font-medium">{resumo.veredito}</p>}

            {problemas.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nenhum problema de cardinalidade, PK ou FK foi apontado pela análise.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-3">
                {problemas.map((p, i) => {
                  const info = infoSeveridade(p.severidade);
                  const Icon = info.Icon;
                  return (
                    <div key={i} className={`rounded-xl border p-4 space-y-2 ${info.classe}`}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Icon className={`w-4 h-4 ${info.cor}`} />
                        <span className="text-xs font-semibold uppercase tracking-wide">{info.label}</span>
                        <Badge variant="outline" className="capitalize">{p.categoria}</Badge>
                        {p.elemento && <span className="text-xs text-muted-foreground">{p.elemento}</span>}
                      </div>
                      <p className="text-sm text-foreground">{p.descricao}</p>
                      {p.correcao && (
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Correção: </strong>{p.correcao}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {codigoCorrigido && codigoCorrigido !== codigo && (
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-foreground">Versão corrigida sugerida</h3>
                  <Button size="sm" variant="outline" onClick={() => { setCodigo(codigoCorrigido); toast({ title: "Diagrama corrigido aplicado." }); }}>
                    Aplicar correções
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => { navigator.clipboard.writeText(codigoCorrigido); toast({ title: "Código copiado." }); }}>
                    <Copy className="w-4 h-4 mr-1" /> Copiar
                  </Button>
                </div>
                <MermaidDiagram chart={codigoCorrigido} />
              </div>
            )}
          </Card>
        )}

        <div className="hidden">
        </div>

        {lista.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-foreground mb-3">Diagramas salvos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {lista.map((d) => (
                <Card key={d.id} className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{d.titulo}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{d.tipo}</Badge>
                      <Button size="icon" variant="ghost" onClick={() => remover(d.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                    </div>
                  </div>
                  <MermaidDiagram chart={d.codigo} />
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ImagemParaUML;
