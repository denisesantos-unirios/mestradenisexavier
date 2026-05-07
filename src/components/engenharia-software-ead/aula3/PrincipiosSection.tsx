import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const principios = [
  { num: 1, titulo: "Satisfazer o cliente com entregas contínuas e adiantadas", desc: "Nossa maior prioridade é a entrega frequente de software com valor agregado, em períodos curtos. O cliente colhe benefícios imediatos e evolui o entendimento do produto.", valor: "Software funcionando" },
  { num: 2, titulo: "Mudanças nos requisitos são bem-vindas, mesmo tardiamente", desc: "Requisitos são vivos. Concorrência, legislação e tecnologia mudam o tempo todo. Processos ágeis tiram vantagem das mudanças para vantagem competitiva do cliente.", valor: "Responder a mudanças" },
  { num: 3, titulo: "Entregar software funcionando frequentemente", desc: "De poucas semanas a poucos meses, com preferência à menor escala de tempo. Define-se um time-box de entrega contínuo durante todo o projeto.", valor: "Software funcionando" },
  { num: 4, titulo: "Pessoas de negócio e devs trabalham juntos diariamente", desc: "Aproximar quem entende a necessidade de quem constrói. Ambos passam a 'falar a mesma língua', minimizando falhas de comunicação.", valor: "Indivíduos e interações" },
  { num: 5, titulo: "Construa projetos em torno de indivíduos motivados", desc: "Dê o ambiente físico, ferramentas e autonomia. Confie neles para fazer o trabalho. Times ágeis são autogerenciáveis quando a organização permite.", valor: "Indivíduos e interações" },
  { num: 6, titulo: "Conversa face a face é o método mais eficiente", desc: "Priorize comunicação pessoal. Em equipes remotas, use videochamadas para diminuir a impessoalidade do distanciamento físico.", valor: "Indivíduos e interações" },
  { num: 7, titulo: "Software funcionando é a medida primária de progresso", desc: "Documentação robusta sem software entregue não tem valor. Valor para o cliente é software funcionando, não documentação acumulada na mesa.", valor: "Software funcionando" },
  { num: 8, titulo: "Processos ágeis promovem desenvolvimento sustentável", desc: "Patrocinadores, devs e usuários devem manter um ritmo constante indefinidamente. Produtividade não é número de horas, mas continuidade do processo.", valor: "Indivíduos e interações" },
  { num: 9, titulo: "Atenção contínua à excelência técnica e bom design", desc: "Software bem construído é fácil de manter e evoluir. Pequenas entregas constantes precisam ter alta confiabilidade. Ágil não é liberação de regras.", valor: "Software funcionando" },
  { num: 10, titulo: "Simplicidade é essencial", desc: "A arte de maximizar a quantidade de trabalho NÃO realizado. Pergunte-se: o usuário precisa de tudo isso? Está construindo um canhão para matar mosquito?", valor: "Software funcionando" },
  { num: 11, titulo: "Equipes auto-organizáveis geram melhores arquiteturas", desc: "Quando a equipe define algo (arquitetura, padrão, meta), sente-se responsável e dedica-se de forma integral. Quando recebe uma imposição, o resultado nunca é o mesmo.", valor: "Indivíduos e interações" },
  { num: 12, titulo: "Em intervalos regulares, a equipe reflete e se ajusta", desc: "Pontos de checagem para identificar o que está funcionando, o que precisa parar e ações para melhorar. Melhoria contínua é a chave para o sucesso.", valor: "Responder a mudanças" },
];

const PrincipiosSection = () => (
  <section id="principios" className="py-20 px-6 bg-card/20">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          🎯 Os <span className="text-violet-400">12 Princípios</span> do Manifesto Ágil
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Os 4 valores são complementados por 12 princípios — declarações simples, mas com significado abrangente no dia a dia das equipes (BECK et al., 2001).
        </p>
      </motion.div>

      <Card className="bg-violet-500/5 border-violet-500/20 mb-10 max-w-4xl mx-auto">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-3">📌 Estudo de Caso: Princípio 11 na Prática</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-sm font-semibold text-destructive mb-1">❌ Situação A</p>
              <p className="text-xs text-muted-foreground">Gerente <strong>determina</strong>: "Faça em 2 dias". Se atrasar, você culpa o gerente.</p>
            </div>
            <div className="p-4 rounded-lg bg-violet-500/5 border border-violet-500/20">
              <p className="text-sm font-semibold text-violet-400 mb-1">✅ Situação B</p>
              <p className="text-xs text-muted-foreground">Gerente <strong>pergunta</strong>: "Quanto precisa?". Você responde "2 dias". Compromisso é seu.</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">O prazo é o mesmo, mas o nível de comprometimento é totalmente diferente.</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {principios.map((p, i) => (
          <motion.div key={p.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Card className="bg-card/50 border-border h-full hover:border-violet-500/30 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center font-bold text-violet-400 text-sm shrink-0">
                    {p.num}
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-violet-500/10 text-violet-400">{p.valor}</span>
                </div>
                <h4 className="font-bold text-foreground text-sm mb-2 leading-snug">{p.titulo}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PrincipiosSection;
