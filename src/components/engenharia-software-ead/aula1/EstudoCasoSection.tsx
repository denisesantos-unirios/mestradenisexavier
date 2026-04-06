import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Users, DollarSign, Clock, Lightbulb } from "lucide-react";

const EstudoCasoSection = () => {
  return (
    <section id="estudo-caso" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            📚 Estudo de Caso: <span className="text-emerald-400">Healthcare.gov</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O maior desastre de software do governo americano — e como a Engenharia de Software poderia ter evitado
          </p>
        </motion.div>

        {/* Contexto */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">🏥 O Contexto</h3>
              <p className="text-muted-foreground mb-4">
                Em 2013, o governo dos EUA lançou o <strong>Healthcare.gov</strong>, um portal para que 300 milhões de americanos pudessem 
                contratar planos de saúde online, como parte do "Obamacare". Era o maior projeto de software do governo americano.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-secondary/30 border border-border text-center">
                  <DollarSign className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-2xl font-black text-foreground">US$ 1,7 bi</p>
                  <p className="text-xs text-muted-foreground">Custo total do projeto</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30 border border-border text-center">
                  <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-black text-foreground">55+</p>
                  <p className="text-xs text-muted-foreground">Empresas contratadas</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30 border border-border text-center">
                  <Clock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-black text-foreground">3 anos</p>
                  <p className="text-xs text-muted-foreground">Tempo de desenvolvimento</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* O que deu errado */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-destructive mb-4">💥 O que deu errado no lançamento?</h3>
              <div className="space-y-4">
                {[
                  { title: "Colapso no dia 1", desc: "O sistema esperava 50-60 mil usuários simultâneos. Recebeu 250 mil nos primeiros minutos. Caiu completamente." },
                  { title: "Apenas 6 pessoas conseguiram se cadastrar", desc: "No primeiro dia, de milhões que tentaram, apenas 6 completaram o cadastro. Taxa de sucesso: 0,000002%." },
                  { title: "Nenhum teste de carga real", desc: "O sistema nunca foi testado com volume real de usuários antes do lançamento. Os testes foram feitos com poucos acessos." },
                  { title: "55 fornecedores sem coordenação", desc: "Mais de 55 empresas trabalharam no projeto sem um integrador claro. Cada uma fez sua parte sem saber o que as outras faziam." },
                  { title: "Requisitos mudavam constantemente", desc: "Regras de negócio mudaram várias vezes durante o desenvolvimento por causa de decisões políticas de última hora." },
                  { title: "Sem gerente de projeto real", desc: "Nenhuma pessoa ou equipe tinha visão completa do sistema. Não havia um 'dono' técnico do projeto." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border">
                    <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mapeamento para ES */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <Card className="bg-emerald-500/5 border-emerald-500/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">🔍 Mapeando para a Engenharia de Software</h3>
              <p className="text-sm text-muted-foreground mb-6">Cada falha do Healthcare.gov corresponde a uma prática de ES que não foi seguida:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { falha: "Sem teste de carga", solucao: "Teste de Performance / QA", desc: "Testes de estresse e carga são obrigatórios antes de qualquer lançamento de grande escala." },
                  { falha: "55 fornecedores descoordenados", solucao: "Gestão de Projeto / Integração", desc: "Um arquiteto de software ou integrador deveria coordenar todas as equipes." },
                  { falha: "Requisitos instáveis", solucao: "Engenharia de Requisitos", desc: "Técnicas de elicitação e validação de requisitos teriam reduzido mudanças tardias." },
                  { falha: "Sem dono técnico", solucao: "Papéis definidos (PO, SM, Arquiteto)", desc: "Times ágeis com papéis claros garantem que alguém tem a visão do todo." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-background/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-destructive/10 text-destructive">❌ {item.falha}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm font-bold text-emerald-400">{item.solucao}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Como foi resolvido */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">✅ Como foi resolvido?</h3>
              <p className="text-muted-foreground mb-4">
                O governo trouxe uma "equipe de resgate" (tech surge) liderada por engenheiros do Google, do setor privado e da U.S. Digital Service:
              </p>
              <div className="space-y-3">
                {[
                  "Criaram um 'war room' com todos os times na mesma sala — comunicação direta.",
                  "Implementaram monitoramento em tempo real — antes ninguém sabia o que estava falhando.",
                  "Adotaram deploys incrementais (CI/CD) — em vez de big bang, melhorias contínuas diárias.",
                  "Reduziram de 55 para 6 equipes-chave com responsabilidades claras.",
                  "Em 2 meses, o sistema estava funcional. Em 6 meses, atendia milhões de usuários.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Lição */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">💡 A Grande Lição</h3>
                <p className="text-muted-foreground mb-3">
                  O Healthcare.gov não falhou por falta de dinheiro (US$ 1,7 bi), nem por falta de gente (55+ empresas), 
                  nem por falta de tempo (3 anos). Falhou por <strong>falta de Engenharia de Software</strong>: 
                  sem processo, sem coordenação, sem testes, sem papéis claros.
                </p>
                <p className="text-sm text-emerald-400 font-semibold">
                  "Software bom não é sobre código. É sobre processo, pessoas e comunicação." — a lição mais importante da Aula 1.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EstudoCasoSection;
