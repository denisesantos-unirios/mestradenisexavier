import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Database, Network, Workflow, ListChecks, Code, Users, FileText, Loader2, UserCheck } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import MainNavigation from "@/components/MainNavigation";
import LessonQRCode from "@/components/LessonQRCode";
import PdfExportButton from "@/components/PdfExportButton";
import MermaidDiagram from "@/components/MermaidDiagram";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { getCaseBySlug } from "@/data/modelagem/cases";
import { buildCasosUso } from "@/data/modelagem/casosUso";
import IntegracaoFerramentas from "@/components/modelagem/IntegracaoFerramentas";

const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) => (
  <div className="flex items-start gap-3 mb-6">
    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 border border-blue-400/30">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  </div>
);

const CaseStudyPage = () => {
  const { isProfessor, loading } = useAuth();
  const { slug } = useParams();
  const cs = getCaseBySlug(slug || "");
  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  if (!isProfessor) return <Navigate to="/provas/login" replace />;
  if (!cs) return <Navigate to="/modelagem" replace />;
  const casosUso = buildCasosUso(cs);

  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/modelagem"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para Modelagem
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge variant="outline" className="mb-3 border-orange-400/40 text-orange-400">
              Estudo de Caso #{cs.numero}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{cs.titulo}</h1>
            <p className="text-lg text-muted-foreground">{cs.subtitulo}</p>
          </motion.div>

          <LessonQRCode />

          {/* Mini-mundo */}
          <ScrollReveal animation="fadeUp">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-8">
              <CardContent className="p-6">
                <SectionTitle icon={BookOpen} title="Mini-Mundo" subtitle="Descrição do problema" />
                <p className="text-foreground/90 leading-relaxed">{cs.miniMundo}</p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp">
            <IntegracaoFerramentas cs={cs} />
          </ScrollReveal>

          {/* Tabs com artefatos */}
          <Tabs defaultValue="der" className="space-y-6">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-card/60 p-1.5 border border-border/50">
              <TabsTrigger value="der" className="text-xs md:text-sm gap-1.5"><Database className="w-3.5 h-3.5" />DER</TabsTrigger>
              <TabsTrigger value="conceitual" className="text-xs md:text-sm gap-1.5"><Network className="w-3.5 h-3.5" />Conceitual</TabsTrigger>
              <TabsTrigger value="classes" className="text-xs md:text-sm gap-1.5"><Code className="w-3.5 h-3.5" />Classes</TabsTrigger>
              <TabsTrigger value="atividades" className="text-xs md:text-sm gap-1.5"><Workflow className="w-3.5 h-3.5" />Atividades</TabsTrigger>
              <TabsTrigger value="rfs" className="text-xs md:text-sm gap-1.5"><ListChecks className="w-3.5 h-3.5" />Requisitos</TabsTrigger>
              <TabsTrigger value="casos" className="text-xs md:text-sm gap-1.5"><UserCheck className="w-3.5 h-3.5" />Casos de Uso</TabsTrigger>
              <TabsTrigger value="sql" className="text-xs md:text-sm gap-1.5"><FileText className="w-3.5 h-3.5" />SQL</TabsTrigger>
              <TabsTrigger value="hus" className="text-xs md:text-sm gap-1.5"><Users className="w-3.5 h-3.5" />Histórias</TabsTrigger>
            </TabsList>

            <TabsContent value="der" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={Database} title="DER" subtitle="Diagrama Entidade-Relacionamento (notação crow's foot)" />
                  <div className="bg-background/40 rounded-lg p-4 border border-border/30">
                    <MermaidDiagram chart={cs.der} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conceitual" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={Network} title="Modelagem Conceitual" subtitle="Visão de entidades, atributos e cardinalidades" />
                  <div className="bg-background/40 rounded-lg p-4 border border-border/30">
                    <MermaidDiagram chart={cs.conceitual} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="classes" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={Code} title="Diagrama de Classes" subtitle="Visão UML orientada a objetos" />
                  <div className="bg-background/40 rounded-lg p-4 border border-border/30">
                    <MermaidDiagram chart={cs.classes} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="atividades" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={Workflow} title="Diagrama de Atividades" subtitle={`Fluxo principal: ${cs.atividadesTitulo}`} />
                  <div className="bg-background/40 rounded-lg p-4 border border-border/30">
                    <MermaidDiagram chart={cs.atividades} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rfs" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={ListChecks} title="Requisitos Funcionais" />
                  <div className="space-y-3">
                    {cs.requisitosFuncionais.map((rf) => (
                      <div key={rf.id} className="p-4 rounded-lg bg-background/40 border border-border/30 flex gap-3">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/40 shrink-0 h-fit">{rf.id}</Badge>
                        <div>
                          <h4 className="font-semibold text-foreground">{rf.titulo}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{rf.descricao}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="casos" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={UserCheck} title="Casos de Uso" subtitle="Especificações UML derivadas dos requisitos funcionais" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {casosUso.map((uc) => (
                      <div key={uc.id} className="p-4 rounded-lg bg-background/40 border border-border/30">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <p className="text-xs font-mono text-blue-400">{uc.codigo}</p>
                            <h4 className="font-semibold text-foreground">{uc.nome}</h4>
                          </div>
                          <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/40 shrink-0">{uc.prioridade}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2"><b>Ator:</b> {uc.ator}{uc.atoresSecundarios && ` • ${uc.atoresSecundarios}`}</p>
                        <p className="text-xs text-foreground/80 mb-2"><b>Objetivo:</b> {uc.objetivo}</p>
                        <p className="text-xs text-muted-foreground mb-1"><b>Pré:</b> {uc.preCondicoes}</p>
                        <p className="text-xs font-semibold text-muted-foreground mt-2 mb-1">Fluxo Principal:</p>
                        <ol className="text-xs text-foreground/80 list-decimal ml-4 space-y-0.5">
                          {uc.fluxoPrincipal.map((p) => <li key={p.id}>{p.texto}</li>)}
                        </ol>
                        {uc.fluxosAlternativos.length > 0 && (
                          <>
                            <p className="text-xs font-semibold text-muted-foreground mt-2 mb-1">Alternativos:</p>
                            {uc.fluxosAlternativos.map((f) => (
                              <div key={f.id} className="mb-1">
                                <p className="text-xs text-orange-400">{f.nome}</p>
                                <ol className="text-xs text-foreground/70 list-decimal ml-4">
                                  {f.passos.map((p) => <li key={p.id}>{p.texto}</li>)}
                                </ol>
                              </div>
                            ))}
                          </>
                        )}
                        <p className="text-xs text-muted-foreground mt-2"><b>Pós:</b> {uc.posCondicoes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sql" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={FileText} title="Script de Banco de Dados" subtitle="DDL PostgreSQL" />
                  <pre className="bg-background/80 rounded-lg p-4 border border-border/30 overflow-x-auto text-xs md:text-sm text-foreground/90 font-mono whitespace-pre">
                    <code>{cs.sql}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hus" forceMount className="data-[state=inactive]:hidden print-show">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <SectionTitle icon={Users} title="Histórias de Usuário" />
                  <div className="grid md:grid-cols-2 gap-4">
                    {cs.historiasUsuario.map((hu) => (
                      <div key={hu.id} className="p-4 rounded-lg bg-background/40 border border-border/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/40">{hu.id}</Badge>
                        </div>
                        <p className="text-sm text-foreground/90 leading-relaxed">
                          <span className="text-blue-400 font-semibold">Como</span> {hu.comoQuem},{" "}
                          <span className="text-orange-400 font-semibold">quero</span> {hu.quero},{" "}
                          <span className="text-blue-400 font-semibold">para</span> {hu.paraQue}.
                        </p>
                        <div className="mt-3">
                          <p className="text-xs font-semibold text-muted-foreground mb-1">Critérios de Aceitação:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                            {hu.criterios.map((c, i) => <li key={i}>{c}</li>)}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <PdfExportButton filename={`Modelagem_${cs.slug}.pdf`} />
    </main>
  );
};

export default CaseStudyPage;
