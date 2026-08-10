import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wrench, Send, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FKEYS, uid, readLS, writeLS } from "@/lib/ferramentas-store";
import {
  TAG, REQUISITOS_FUNCIONAIS, REQUISITOS_NAO_FUNCIONAIS, PERSONAS, HISTORIAS, CASOS_DE_USO, STAKEHOLDERS,
} from "@/data/locadora/artefatos";

type Tool = "casos" | "backlog" | "personas" | "historias" | "stakeholders";

/** Remove itens já enviados anteriormente (mesma tag) para evitar duplicidade. */
const semDuplicados = <T extends Record<string, unknown>>(atuais: T[], campo: keyof T) =>
  atuais.filter((i) => !String(i[campo] ?? "").includes(TAG));

const EnviarFerramentasSection = () => {
  const { toast } = useToast();
  const [ok, setOk] = useState<Record<Tool, boolean>>({ casos: false, backlog: false, personas: false, historias: false, stakeholders: false });

  const marcar = (t: Tool) => {
    setOk((p) => ({ ...p, [t]: true }));
    setTimeout(() => setOk((p) => ({ ...p, [t]: false })), 2500);
  };

  const enviarCasos = () => {
    const atuais = semDuplicados(readLS<Record<string, unknown>[]>(FKEYS.casosUso, []), "nome");
    const novos = CASOS_DE_USO.map((c) => ({
      id: uid(),
      codigo: c.codigo,
      nome: `${TAG} ${c.nome}`,
      ator: c.ator,
      atoresSecundarios: c.atoresSecundarios,
      objetivo: c.objetivo,
      prioridade: c.prioridade,
      preCondicoes: c.pre,
      posCondicoes: c.pos,
      fluxoPrincipal: c.fluxo.map((t) => ({ id: uid(), texto: t })),
      fluxosAlternativos: c.alternativos.map((f) => ({ id: uid(), nome: f.nome, passos: f.passos.map((p) => ({ id: uid(), texto: p })) })),
      regras: c.regras,
      criadoEm: new Date().toISOString(),
    }));
    writeLS(FKEYS.casosUso, [...novos, ...atuais]);
    toast({ title: `${novos.length} casos de uso enviados para Ferramentas → Casos de Uso.` });
    marcar("casos");
  };

  const enviarBacklog = () => {
    const atuais = semDuplicados(readLS<Record<string, unknown>[]>(FKEYS.backlog, []), "titulo");
    const rf = REQUISITOS_FUNCIONAIS.map((r) => ({
      id: uid(),
      titulo: `${TAG} ${r.codigo} — ${r.titulo}`,
      descricao: r.descricao,
      epico: r.epico,
      prioridade: r.prioridade,
      estimativa: r.estimativa,
      status: "Novo",
      valor: r.prioridade === "Must" ? 5 : r.prioridade === "Should" ? 4 : 3,
      criadoEm: new Date().toISOString(),
    }));
    const rnf = REQUISITOS_NAO_FUNCIONAIS.map((r) => ({
      id: uid(),
      titulo: `${TAG} ${r.codigo} — ${r.categoria}`,
      descricao: `${r.texto} | Métrica: ${r.metrica}`,
      epico: "Requisitos Não-Funcionais",
      prioridade: "Should",
      estimativa: 3,
      status: "Novo",
      valor: 4,
      criadoEm: new Date().toISOString(),
    }));
    writeLS(FKEYS.backlog, [...rf, ...rnf, ...atuais]);
    toast({ title: `${rf.length} RF e ${rnf.length} RNF enviados para Ferramentas → Backlog.` });
    marcar("backlog");
  };

  const enviarPersonas = () => {
    const atuais = semDuplicados(readLS<Record<string, unknown>[]>(FKEYS.personas, []), "origem");
    const novas = PERSONAS.map((p) => ({
      id: uid(),
      nome: p.nome,
      idade: p.idade,
      cargo: p.cargo,
      contexto: p.contexto,
      bio: p.bio,
      nivelTecnologia: p.nivelTecnologia,
      objetivos: p.objetivos.map((t) => ({ id: uid(), texto: t })),
      frustracoes: p.frustracoes.map((t) => ({ id: uid(), texto: t })),
      citacao: p.citacao,
      origem: TAG,
      criadoEm: new Date().toISOString(),
    }));
    writeLS(FKEYS.personas, [...novas, ...atuais]);
    toast({ title: `${novas.length} personas enviadas para Ferramentas → Personas.` });
    marcar("personas");
  };

  const enviarHistorias = () => {
    const atuais = semDuplicados(readLS<Record<string, unknown>[]>(FKEYS.historias, []), "origemModelagem");
    const novas = HISTORIAS.map((h) => ({
      id: uid(),
      persona: h.persona,
      acao: h.acao,
      beneficio: h.beneficio,
      prioridade: h.prioridade,
      estimativa: h.estimativa,
      criterios: h.criterios.map((c) => ({ id: uid(), texto: c })),
      invest: { I: true, N: true, V: true, E: true, S: h.estimativa <= 8, T: true },
      criadoEm: new Date().toISOString(),
      origemModelagem: TAG,
    }));
    writeLS(FKEYS.historias, [...novas, ...atuais]);
    toast({ title: `${novas.length} histórias enviadas para Ferramentas → Histórias de Usuário.` });
    marcar("historias");
  };

  const enviarStakeholders = () => {
    const atuais = semDuplicados(readLS<Record<string, unknown>[]>(FKEYS.stakeholders, []), "organizacao");
    const novos = STAKEHOLDERS.map((s) => ({
      id: uid(),
      nome: s.nome,
      papel: s.papel,
      organizacao: TAG,
      poder: s.poder,
      interesse: s.interesse,
      atitude: s.atitude,
      necessidades: s.necessidades,
      estrategia: s.estrategia,
      criadoEm: new Date().toISOString(),
    }));
    writeLS(FKEYS.stakeholders, [...novos, ...atuais]);
    toast({ title: `${novos.length} stakeholders enviados para Ferramentas → Mapa de Stakeholders.` });
    marcar("stakeholders");
  };

  const enviarTudo = () => {
    enviarCasos(); enviarBacklog(); enviarPersonas(); enviarHistorias(); enviarStakeholders();
  };

  const linhas: { tool: Tool; label: string; path: string; onClick: () => void }[] = [
    { tool: "casos", label: `Casos de Uso (${CASOS_DE_USO.length})`, path: "/ferramentas/casos-de-uso", onClick: enviarCasos },
    { tool: "backlog", label: `Requisitos RF + RNF (${REQUISITOS_FUNCIONAIS.length + REQUISITOS_NAO_FUNCIONAIS.length})`, path: "/ferramentas/backlog", onClick: enviarBacklog },
    { tool: "personas", label: `Personas (${PERSONAS.length})`, path: "/ferramentas/personas", onClick: enviarPersonas },
    { tool: "historias", label: `Histórias de Usuário (${HISTORIAS.length})`, path: "/ferramentas/historias-usuario", onClick: enviarHistorias },
    { tool: "stakeholders", label: `Stakeholders (${STAKEHOLDERS.length})`, path: "/ferramentas/stakeholders", onClick: enviarStakeholders },
  ];

  return (
    <section className="py-16 px-6" data-pdf-ignore>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <Card className="p-6 sm:p-8 border-primary/20 bg-primary/5">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Artefatos da Locadora nas Ferramentas</h2>
              <p className="text-sm text-muted-foreground">
                Envie os casos de uso, requisitos funcionais e não-funcionais, personas, histórias de usuário e
                stakeholders do estudo de caso para as ferramentas do portal e continue o trabalho por lá.
              </p>
            </div>
            <Button onClick={enviarTudo}>
              <Send className="w-4 h-4 mr-2" /> Enviar tudo
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {linhas.map((l) => (
              <div key={l.tool} className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="flex-1 justify-start" onClick={l.onClick}>
                  {ok[l.tool] ? <Check className="w-4 h-4 mr-2 text-emerald-600" /> : <Send className="w-4 h-4 mr-2" />}
                  {l.label}
                </Button>
                <Button size="icon" variant="ghost" asChild title="Abrir ferramenta">
                  <Link to={l.path}><ExternalLink className="w-4 h-4" /></Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Estudo de caso: Locadora de Veículos</Badge>
            <span className="text-xs text-muted-foreground">
              Reenviar substitui os itens marcados com {TAG} — os seus registros próprios são preservados.
            </span>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default EnviarFerramentasSection;
