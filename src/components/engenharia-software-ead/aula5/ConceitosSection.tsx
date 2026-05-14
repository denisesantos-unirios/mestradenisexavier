import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, FileText, AlertCircle } from "lucide-react";

const fontes = [
  { icon: Users, titulo: "Stakeholders", desc: "Clientes, usuários, patrocinadores, equipe técnica" },
  { icon: FileText, titulo: "Documentos existentes", desc: "Manuais, planilhas, regulamentos, contratos" },
  { icon: Target, titulo: "Sistemas legados", desc: "Software atual em uso, processos manuais" },
  { icon: BookOpen, titulo: "Normas e leis", desc: "LGPD, ISO, regulações do setor" },
];

const importancia = [
  { num: "60%", txt: "dos defeitos em projetos têm origem em requisitos mal definidos" },
  { num: "10x", txt: "mais caro corrigir um requisito na produção do que na fase inicial" },
  { num: "70%", txt: "dos projetos que falham têm requisitos como causa principal" },
];

const ConceitosSection = () => (
  <section id="conceitos" className="py-20 px-6 bg-card/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" /> Fundamentos
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Conceitos <span className="text-cyan-400">Fundamentais</span>
        </h2>
      </motion.div>

      {/* Definição */}
      <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20 mb-10">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">📖 Definição</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Requisito</strong> é uma descrição de um serviço, função ou restrição
            que o sistema deve oferecer. Representa o que os <strong>stakeholders</strong> (clientes, usuários, equipe)
            esperam do produto de software.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Engenharia de Requisitos</strong> é o processo sistemático de
            descobrir, analisar, documentar, validar e gerenciar os requisitos de um sistema ao longo do seu ciclo de vida.
          </p>
          <div className="p-4 rounded-lg bg-background/50 border border-cyan-500/20">
            <p className="text-sm text-muted-foreground italic">
              <strong className="text-cyan-400">Sommerville:</strong> "Requisitos são as descrições do que o sistema
              deve fazer, dos serviços que oferece e das restrições para sua operação. Refletem as necessidades dos
              clientes."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Por que importa */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {importancia.map((i, idx) => (
          <Card key={idx} className="bg-amber-500/5 border-amber-500/20">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-amber-400 mb-2">{i.num}</div>
              <p className="text-sm text-muted-foreground">{i.txt}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fontes */}
      <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
        🔍 De onde vêm os requisitos?
      </h3>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {fontes.map((f, i) => (
          <Card key={i} className="bg-card/50 border-border hover:border-cyan-500/40 transition-colors">
            <CardContent className="p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{f.titulo}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Níveis */}
      <Card className="bg-teal-500/5 border-teal-500/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" /> Níveis de Detalhamento
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-background/50 border-l-4 border-teal-400">
              <p className="font-semibold text-foreground">1. Requisitos de Usuário</p>
              <p className="text-sm text-muted-foreground">Linguagem natural, alto nível. Para clientes e gestores.</p>
              <p className="text-xs text-cyan-400 mt-1">Ex: "O sistema deve permitir que o cliente acompanhe o status do pedido."</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50 border-l-4 border-cyan-400">
              <p className="font-semibold text-foreground">2. Requisitos de Sistema</p>
              <p className="text-sm text-muted-foreground">Detalhados, técnicos. Para desenvolvedores e arquitetos.</p>
              <p className="text-xs text-cyan-400 mt-1">Ex: "O sistema deve exibir status (Pendente, Pago, Enviado, Entregue) atualizado a cada 30s via API REST."</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50 border-l-4 border-emerald-400">
              <p className="font-semibold text-foreground">3. Especificação de Software</p>
              <p className="text-sm text-muted-foreground">Documento formal, base de contrato entre cliente e fornecedor.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ConceitosSection;
