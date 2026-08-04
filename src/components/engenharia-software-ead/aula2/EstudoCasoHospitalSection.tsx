import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Hospital, Activity, ShieldCheck, GitBranch, Gauge, AlertTriangle, ListChecks, Target } from "lucide-react";

const contexto = [
  { label: "Domínio", valor: "Prontuário Eletrônico do Paciente (PEP), agendamento, prescrição e integração com o SUS (RNDS / CNS / SIGTAP)" },
  { label: "Volume", valor: "500 pacientes/dia • ~15.000 atendimentos/mês • picos de 3x na madrugada de plantões" },
  { label: "Disponibilidade", valor: "Operação 24×7 — janela de indisponibilidade planejada máxima de 30 min/mês" },
  { label: "Regulação", valor: "LGPD (dado sensível de saúde), CFM 1.821/2007, ANVISA, Portarias do Ministério da Saúde" },
  { label: "Stakeholders", valor: "Médicos, enfermagem, recepção, farmácia hospitalar, TI, auditoria, gestor público e paciente" },
  { label: "Contrato", valor: "Licitação pública com escopo formalizado em Termo de Referência e aditivos possíveis" },
];

const cicloVida = [
  {
    titulo: "Cascata (partes reguladas)",
    quando: "Módulo de integração com o SUS, trilha de auditoria e assinatura digital.",
    porque: "Requisitos vêm de norma externa e mudam pouco; exigem documentação formal e homologação prévia.",
    cor: "border-blue-500/30 bg-blue-500/5",
  },
  {
    titulo: "Incremental (núcleo clínico)",
    quando: "PEP, agendamento e prescrição entregues em incrementos por especialidade.",
    porque: "Permite colocar valor em produção cedo e absorver feedback de médicos e enfermagem.",
    cor: "border-indigo-500/30 bg-indigo-500/5",
  },
  {
    titulo: "Evolucionário/Prototipação (UX crítica)",
    quando: "Telas de triagem e prescrição, onde erro de interface vira risco clínico.",
    porque: "Protótipos validados à beira do leito reduzem retrabalho e erro de medicação.",
    cor: "border-orange-500/30 bg-orange-500/5",
  },
];

const cmmiHospital = [
  {
    nivel: 1,
    nome: "Inicial",
    situacao: "Hoje: planilhas soltas, chamados por WhatsApp, deploy manual na madrugada por um único técnico.",
    acao: "Mapear o processo real e parar de depender de heróis.",
    cor: "border-red-500/30 bg-red-500/5 text-red-600",
  },
  {
    nivel: 2,
    nome: "Gerenciado",
    situacao: "Área de processo aplicada: REQM, PP, PMC, CM, PPQA, MA, SAM.",
    acao: "Baseline de requisitos do PEP versionada; rastreabilidade requisito → caso de teste; controle de mudança do módulo SUS; cronograma e esforço monitorados por sprint/fase.",
    cor: "border-orange-500/30 bg-orange-500/5 text-orange-600",
  },
  {
    nivel: 3,
    nome: "Definido",
    situacao: "Processo padrão do hospital instanciado por projeto (RD, TS, PI, VER, VAL, RSKM, OPD, OPF, OT).",
    acao: "Checklist obrigatório de LGPD e segurança em todo release clínico; revisão por pares em código de prescrição; plano de riscos com o risco 'erro de dose' como item de topo; treinamento formal da equipe clínica.",
    cor: "border-amber-500/30 bg-amber-500/5 text-amber-600",
  },
  {
    nivel: 4,
    nome: "Quantitativamente gerenciado",
    situacao: "OPP e QPM: metas numéricas por processo.",
    acao: "Densidade de defeitos ≤ 0,4/KLOC no módulo de prescrição; tempo de resposta do PEP ≤ 2s em p95; disponibilidade ≥ 99,9%; controle estatístico do lead time de correção de bug crítico.",
    cor: "border-blue-500/30 bg-blue-500/5 text-blue-600",
  },
  {
    nivel: 5,
    nome: "Em otimização",
    situacao: "OPM e CAR: melhoria contínua guiada por dados.",
    acao: "Análise causal de cada near miss clínico registrado; piloto de alerta de interação medicamentosa; automação de deploy canário sem parar a operação 24h.",
    cor: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600",
  },
];

const mpsHospital = [
  { letra: "G", nome: "Parcialmente gerenciado", foco: "GPR + GRE", acao: "Escopo do PEP documentado, cronograma e custo estimados, requisitos do SUS registrados e aprovados pelo gestor." },
  { letra: "F", nome: "Gerenciado", foco: "GQA, GCO, AQU, MED, GPP", acao: "Repositório de configuração para laudos e prescrições, medição de defeitos por módulo, aquisição controlada do serviço de assinatura digital." },
  { letra: "E", nome: "Parcialmente definido", foco: "AMP, DFP, DRU, GRH", acao: "Processo padrão do hospital definido e reusável entre módulos; capacitação de enfermagem e recepção formalizada." },
  { letra: "D", nome: "Largamente definido", foco: "DRE, PCP, ITP, VER, VAL", acao: "Verificação (inspeção de código clínico) e validação (piloto real em uma ala) antes de liberar prescrição eletrônica." },
  { letra: "C", nome: "Definido", foco: "GRI, DEC, GCO-ampliada", acao: "Gestão de riscos formal: queda de energia, indisponibilidade da RNDS, vazamento de dado sensível — cada um com resposta documentada." },
  { letra: "B", nome: "Gerenciado quantitativamente", foco: "GPR-quantitativa", acao: "Metas quantitativas por processo: ≤ 1% de agendamentos com conflito, tempo médio de registro de evolução ≤ 90s." },
  { letra: "A", nome: "Em otimização", foco: "Inovação e análise causal", acao: "Ciclo permanente de melhoria com dados do próprio hospital; inovação avaliada antes de virar padrão." },
];

const dmaicHospital = [
  { letra: "D", titulo: "Definir", texto: "Problema: 12% das prescrições precisam de correção manual pela farmácia. Cliente: farmacêutico e médico prescritor." },
  { letra: "M", titulo: "Medir", texto: "Coletar 30 dias de prescrições, classificar tipo de erro (dose, via, duplicidade, alergia não checada)." },
  { letra: "A", titulo: "Analisar", texto: "Pareto mostra 68% dos erros em campo de dose livre e ausência de checagem de alergia." },
  { letra: "I", titulo: "Melhorar", texto: "Campo de dose com lista controlada por medicamento + alerta bloqueante de alergia registrada no PEP." },
  { letra: "C", titulo: "Controlar", texto: "Painel semanal de erro de prescrição; meta ≤ 3%; auditoria mensal e ação causal se sair do limite." },
];

const indicadores = [
  { kpi: "Disponibilidade do PEP", meta: "≥ 99,9% (24×7)" },
  { kpi: "Tempo p95 para abrir prontuário", meta: "≤ 2 s" },
  { kpi: "Erro de prescrição corrigido pela farmácia", meta: "≤ 3%" },
  { kpi: "Defeitos escapados para produção", meta: "≤ 0,4 / KLOC" },
  { kpi: "Falha de sincronização com o SUS", meta: "≤ 0,5% dos envios" },
  { kpi: "Incidentes de acesso indevido (LGPD)", meta: "0 tolerado" },
];

const riscos = [
  { risco: "Mudança de portaria do Ministério da Saúde no meio do projeto", resposta: "Módulo SUS isolado por camada de integração + controle de mudança formal (CM/GCO)." },
  { risco: "Requisito clínico mal entendido gera erro de medicação", resposta: "Validação (VAL) com piloto em uma ala e dupla checagem antes do rollout geral." },
  { risco: "Janela de parada inexistente (24h)", resposta: "Deploy azul-verde/canário; migração de dados em lote fora de pico com rollback testado." },
  { risco: "Vazamento de dado sensível de paciente", resposta: "Trilha de auditoria imutável, criptografia em repouso, revisão de acesso por perfil a cada release." },
  { risco: "Equipe de plantão sem treinamento no novo módulo", resposta: "OT/GRH: treinamento obrigatório e material de bolso antes da virada." },
];

const EstudoCasoHospitalSection = () => (
  <section id="estudo-caso" className="py-20 px-6 bg-muted/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-4">
          <Hospital className="w-4 h-4" /> Estudo de caso aplicado
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Hospital Público: <span className="text-blue-500">CMMI e MPS.BR na prática</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Sistema para gestão de prontuários em um hospital público — prontuário eletrônico, agendamento médico,
          prescrição e integração com o SUS. <strong>500 pacientes/dia</strong>, operação <strong>24 horas</strong>.
        </p>
      </motion.div>

      {/* Contexto */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><ListChecks className="w-5 h-5 text-blue-500" /> 1. Caracterização do contexto</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {contexto.map((c) => (
            <div key={c.label} className="p-4 rounded-xl bg-background/60 border border-border">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-500 mb-1">{c.label}</p>
              <p className="text-sm text-muted-foreground">{c.valor}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Ciclo de vida */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><GitBranch className="w-5 h-5 text-blue-500" /> 2. Que ciclo de vida usar?</h3>
        <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
          A resposta madura não é "cascata" nem "ágil": é um <strong>modelo híbrido por módulo</strong>. O que é regulado e estável vai em cascata;
          o que depende de feedback clínico vai incremental/evolucionário.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {cicloVida.map((c) => (
            <Card key={c.titulo} className={`border ${c.cor}`}>
              <CardContent className="p-5">
                <h4 className="font-bold text-foreground mb-2">{c.titulo}</h4>
                <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">Onde:</strong> {c.quando}</p>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Por quê:</strong> {c.porque}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* CMMI aplicado */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><Activity className="w-5 h-5 text-blue-500" /> 3. Modelo CMMI aplicado ao hospital</h3>
        <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
          Representação por estágios (níveis 1 a 5). Cada nível descreve o que a fábrica de software do hospital precisa ter <em>de fato</em> implantado.
        </p>
        <div className="space-y-3">
          {cmmiHospital.map((n, i) => (
            <motion.div key={n.nivel} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className={`flex gap-4 p-4 rounded-xl border ${n.cor}`}>
                <div className="w-12 h-12 shrink-0 rounded-xl bg-background/70 border-2 border-current flex items-center justify-center font-black text-xl">
                  {n.nivel}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base">Nível {n.nivel} — {n.nome}</p>
                  <p className="text-sm text-foreground/80 mb-1">{n.situacao}</p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Aplicação no caso:</strong> {n.acao}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MPS.BR aplicado */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-600" /> 4. Modelo MPS.BR aplicado ao hospital</h3>
        <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
          Como a empresa contratada pela licitação costuma ser uma PME brasileira, o MPS.BR encaixa melhor: a escada G → A é mais gradual e
          o custo de avaliação é menor. Leitura de baixo (G) para cima (A).
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-emerald-500/10">
              <tr className="text-left">
                <th className="p-3 font-bold text-foreground">Nível</th>
                <th className="p-3 font-bold text-foreground">Nome</th>
                <th className="p-3 font-bold text-foreground">Processos-chave</th>
                <th className="p-3 font-bold text-foreground">O que o hospital passa a ter</th>
              </tr>
            </thead>
            <tbody>
              {mpsHospital.map((m, i) => (
                <tr key={m.letra} className={i % 2 ? "bg-background/40" : "bg-background/70"}>
                  <td className="p-3 font-black text-emerald-600 text-lg align-top">{m.letra}</td>
                  <td className="p-3 font-semibold text-foreground align-top">{m.nome}</td>
                  <td className="p-3 text-muted-foreground align-top whitespace-nowrap">{m.foco}</td>
                  <td className="p-3 text-muted-foreground align-top">{m.acao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
          <p className="text-sm text-muted-foreground">
            🔁 <strong className="text-foreground">Equivalência aproximada:</strong> MPS.BR <strong>G/F</strong> ≈ CMMI <strong>nível 2</strong> •
            MPS.BR <strong>E/D/C</strong> ≈ CMMI <strong>nível 3</strong> • MPS.BR <strong>B</strong> ≈ CMMI <strong>4</strong> • MPS.BR <strong>A</strong> ≈ CMMI <strong>5</strong>.
          </p>
        </div>
      </motion.div>

      {/* DMAIC */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2"><Target className="w-5 h-5 text-purple-500" /> 5. Seis Sigma (DMAIC) em um problema real do hospital</h3>
        <p className="text-sm text-muted-foreground mb-5 max-w-3xl">Problema escolhido: <strong>erro de prescrição eletrônica</strong>.</p>
        <div className="grid md:grid-cols-5 gap-3">
          {dmaicHospital.map((d) => (
            <div key={d.letra} className="h-full p-4 rounded-xl bg-gradient-to-b from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <p className="text-2xl font-black text-purple-500">{d.letra}</p>
              <p className="font-bold text-foreground text-sm mb-1">{d.titulo}</p>
              <p className="text-xs text-muted-foreground">{d.texto}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Indicadores */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><Gauge className="w-5 h-5 text-blue-500" /> 6. Indicadores de qualidade (nível 4 CMMI / nível B MPS.BR)</h3>
        <div className="grid md:grid-cols-3 gap-3">
          {indicadores.map((k) => (
            <div key={k.kpi} className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <p className="text-sm font-semibold text-foreground">{k.kpi}</p>
              <p className="text-lg font-black text-blue-500">{k.meta}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Riscos */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-orange-500" /> 7. Riscos críticos e resposta de processo</h3>
        <div className="space-y-3">
          {riscos.map((r) => (
            <div key={r.risco} className="grid md:grid-cols-2 gap-3 p-4 rounded-xl bg-background/60 border border-border">
              <p className="text-sm text-foreground font-semibold">⚠️ {r.risco}</p>
              <p className="text-sm text-muted-foreground">✅ {r.resposta}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EstudoCasoHospitalSection;
