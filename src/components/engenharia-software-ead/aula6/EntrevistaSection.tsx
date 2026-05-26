import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, ClipboardList, Calendar, Package, Play, AlertTriangle, Mic, Ear, HelpCircle } from "lucide-react";

const stakeholders = [
  "For o demandante do projeto",
  "Tiver informações relevantes sobre o processo de negócio",
  "For afetado diretamente pelos resultados do projeto",
  "For politicamente importante (apoiador ou detrator)",
];

const preparacao = [
  { icon: HelpCircle, title: "Compreender o contexto", desc: "Pesquise documentos, leis, blogs, artigos, livros, conversas com colegas e sistemas anteriores. Sem domínio mínimo do negócio você não extrai o máximo." },
  { icon: ClipboardList, title: "Roteiro semiestruturado", desc: "Lista de tópicos principais e dúvidas levantadas em pesquisas prévias. Não é interrogatório — é apoio à condução." },
  { icon: Package, title: "Material de apoio", desc: "Diagramas, esquemas, protótipos de interface. Visuais ajudam o entrevistado a organizar o pensamento." },
  { icon: Calendar, title: "Agendar (1–2h)", desc: "Curtas não aprofundam; longas cansam. Evite horários colados ao almoço/fim do expediente. Reserve folga adicional." },
  { icon: Users, title: "Reservar recursos", desc: "Geralmente é no ambiente do entrevistado: confirme projetor, internet, privacidade se o tema for confidencial." },
];

const dicasExecucao = [
  { titulo: "Gravação só com autorização", desc: "Jamais grave sem que o entrevistado saiba e tenha autorizado. Mesmo gravando, faça anotações — insights surgem na hora." },
  { titulo: "Escuta ativa", desc: "Tão importante quanto perguntar bem é escutar. Retome os pontos principais para confirmar entendimento. Não tenha vergonha de pedir esclarecimento." },
  { titulo: "Sem jargão técnico", desc: "Sentenças curtas e claras. Use figuras e diagramas como apoio." },
  { titulo: "Nunca pergunte 'O que você quer?'", desc: "Wiegers (2006): é a PIOR pergunta. A segunda pior: 'Quais são os seus requisitos?'. Comece pelos problemas de negócio que ele quer resolver." },
  { titulo: "Técnica do 'e se…'", desc: "Para cada parte do processo, explore alternativas: 'e se não houver cadastro?', 'e se cair a conexão no pagamento?'. Usuários só lembram do caminho principal." },
  { titulo: "Thinking on your feet", desc: "Pensar rápido diante do inesperado — vem com a experiência e o domínio do contexto." },
  { titulo: "Nível de abstração", desc: "Entrevistados oscilam entre alto nível e detalhe minúsculo. Cabe ao analista manter o nível adequado e navegar entre eles." },
];

const EntrevistaSection = () => (
  <section id="entrevista" className="py-20 px-6 bg-card/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
          <MessageSquare className="w-4 h-4" /> Técnica 2
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Entrevista</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A técnica mais usada no mundo. Permite interação direta, captura informações não verbais e exige o máximo de habilidade do analista.
        </p>
      </motion.div>

      {/* Identificar stakeholders */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">👥 1. Identificar Stakeholders</h3>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <p className="text-muted-foreground mb-4">
              Etapa crucial. É desastroso descobrir tarde que um stakeholder relevante foi esquecido.
              <br/><strong className="text-rose-400">Envolva o stakeholder quando ele:</strong>
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {stakeholders.map((s, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <Users className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Preparação */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">🛠️ 2. Preparar a Entrevista</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {preparacao.map((p, i) => (
            <Card key={i} className="bg-card/50 border-border hover:border-rose-500/30 transition-colors">
              <CardContent className="p-5">
                <p.icon className="w-6 h-6 text-rose-400 mb-3" />
                <h4 className="font-bold text-foreground mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Execução */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Play className="w-6 h-6 text-rose-400" /> 3. Realizar a Entrevista — Dicas
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {dicasExecucao.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full bg-card/50 border-border hover:border-rose-500/30 transition-colors">
                <CardContent className="p-5">
                  <Ear className="w-5 h-5 text-rose-400 mb-2" />
                  <h4 className="font-bold text-foreground mb-2">{d.titulo}</h4>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-amber-500/10 border-amber-500/30">
          <CardContent className="p-5 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <h4 className="font-bold text-foreground mb-1">⚠️ Fique atento</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Jamais</strong> faça uma gravação sem que o entrevistado saiba e tenha autorizado. Mesmo com gravação, anote insights na hora.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default EntrevistaSection;
