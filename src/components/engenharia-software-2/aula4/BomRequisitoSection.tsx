import { motion } from "framer-motion";
import { PenTool, CheckCircle2, XCircle, FileCode2 } from "lucide-react";

const caracteristicas = [
  { t: "Completo", d: "Descreve totalmente a funcionalidade, sem 'etc.' ou lacunas." },
  { t: "Correto", d: "Reflete uma necessidade real e validada pelo stakeholder." },
  { t: "Não ambíguo", d: "Admite apenas uma interpretação. Evite 'rápido', 'amigável', 'adequado'." },
  { t: "Verificável / Testável", d: "É possível escrever um teste que prove que foi atendido." },
  { t: "Consistente", d: "Não conflita com outros requisitos do documento." },
  { t: "Rastreável", d: "Possui identificador único (RF01) ligado à origem e ao teste." },
  { t: "Viável", d: "Implementável dentro das restrições de prazo, custo e tecnologia." },
  { t: "Necessário", d: "Se removido, alguém sente falta. Caso contrário, é escopo inflado." },
];

const exemplos = [
  {
    ruim: "O sistema deve ser rápido.",
    bom: "RNF01: O sistema deve retornar o resultado da consulta de veículos em até 3 segundos para até 100 usuários simultâneos.",
  },
  {
    ruim: "O sistema deve ter uma tela de cadastro amigável.",
    bom: "RF01: O sistema deve permitir cadastrar cliente informando nome, CPF, CNH e validade da CNH, bloqueando o cadastro quando a CNH estiver vencida.",
  },
  {
    ruim: "O sistema deve ser seguro.",
    bom: "RNF03: O sistema deve armazenar senhas com hash bcrypt (custo ≥ 12) e encerrar a sessão após 15 minutos de inatividade.",
  },
];

const BomRequisitoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-600 mb-4">
            <PenTool className="w-4 h-4" />
            <span className="text-sm font-medium">Escrita</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Construir um Bom Requisito
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um requisito mal escrito custa até 100× mais caro para corrigir em produção do que na
            fase de análise.
          </p>
        </motion.div>

        {/* Template */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <FileCode2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">🧩 Template de Requisito Funcional</h3>
          </div>

          <div className="p-5 rounded-xl bg-background/60 border border-border font-mono text-sm text-foreground mb-6 overflow-x-auto">
            <p>[ID] O sistema DEVE &lt;ação&gt; &lt;objeto&gt;</p>
            <p className="text-muted-foreground">      [QUANDO &lt;condição/gatilho&gt;]</p>
            <p className="text-muted-foreground">      [PARA QUE &lt;objetivo de negócio&gt;]</p>
            <p className="text-muted-foreground">      [RESTRIÇÃO: &lt;regra ou limite&gt;]</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-background/60 border-l-4 border-orange-500">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Aplicado</p>
              <p className="text-sm text-foreground">
                <strong>RF10:</strong> O sistema DEVE calcular multa por atraso na devolução
                QUANDO a data de devolução for posterior à data prevista, PARA QUE a locadora
                recupere a receita de diárias extras. RESTRIÇÃO: multa = 20% do valor da diária por
                hora de atraso, limitada a 2 diárias.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-background/60 border-l-4 border-blue-500">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Campos de documentação
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong className="text-foreground">ID</strong> — RF/RNF + número sequencial</li>
                <li>• <strong className="text-foreground">Origem</strong> — quem solicitou</li>
                <li>• <strong className="text-foreground">Prioridade</strong> — MoSCoW</li>
                <li>• <strong className="text-foreground">Dependências</strong> — outros requisitos</li>
                <li>• <strong className="text-foreground">Critérios de aceite</strong> — como testar</li>
                <li>• <strong className="text-foreground">Versão / status</strong> — rastreabilidade</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Características */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground text-center mb-8"
        >
          ✅ Características de um Bom Requisito
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {caracteristicas.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-foreground text-sm">{c.t}</span>
              </div>
              <p className="text-xs text-muted-foreground">{c.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Ruim x Bom */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground text-center mb-8"
        >
          💡 Exemplos Completos — antes e depois
        </motion.h3>

        <div className="space-y-4">
          {exemplos.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="glass-card p-5 border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-2 text-red-500">
                  <XCircle className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">Ambíguo</span>
                </div>
                <p className="text-sm text-muted-foreground">{e.ruim}</p>
              </div>
              <div className="glass-card p-5 border-l-4 border-emerald-500">
                <div className="flex items-center gap-2 mb-2 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">Testável</span>
                </div>
                <p className="text-sm text-foreground">{e.bom}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BomRequisitoSection;
