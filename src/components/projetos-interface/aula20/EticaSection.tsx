import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, UserX, Heart, Users } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const consideracoes = [
  { icon: FileCheck, titulo: "Consentimento Informado", desc: "Documento assinado pelo participante e pelo avaliador, especificando condições do teste. O formulário deve permitir ao usuário acrescentar novas condições.", cor: "text-emerald-400", bgCor: "bg-emerald-500/10" },
  { icon: UserX, titulo: "Preservação do Anonimato", desc: "Os dados pessoais dos participantes devem ser protegidos. Resultados são apresentados de forma agregada.", cor: "text-blue-400", bgCor: "bg-blue-500/10" },
  { icon: Heart, titulo: "Bem-estar dos Participantes", desc: "Garantir que nenhum dano físico, psíquico, moral, intelectual, social ou cultural seja causado aos participantes.", cor: "text-pink-400", bgCor: "bg-pink-500/10" },
  { icon: Users, titulo: "Proteção de Grupos Vulneráveis", desc: "Atenção especial a crianças, idosos e pessoas em situação de vulnerabilidade durante a pesquisa.", cor: "text-amber-400", bgCor: "bg-amber-500/10" },
];

const EticaSection = () => (
  <section id="etica" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="fadeDown">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ⚖️ Questões <span className="text-emerald-400">Éticas</span> na Avaliação
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No Brasil, a <strong className="text-emerald-400">Resolução 196/96</strong> define como pesquisa com seres humanos
            toda investigação que envolva direta ou indiretamente seres humanos — incluindo avaliação de software.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {consideracoes.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="h-full bg-card/50 border-border hover:border-emerald-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${item.bgCor}`}>
                    <item.icon className={`w-5 h-5 ${item.cor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ScrollReveal animation="fadeUp">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-foreground mb-2">TCLE — Termo de Consentimento Livre e Esclarecido</h4>
              <p className="text-sm text-muted-foreground">
                Todo teste com usuários requer a assinatura do TCLE antes do início. O documento deve explicar claramente:
                o objetivo da pesquisa, os procedimentos, riscos e benefícios, garantia de anonimato e o direito de desistir a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default EticaSection;
