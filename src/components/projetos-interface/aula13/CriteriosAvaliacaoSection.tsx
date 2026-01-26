import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { 
  Star, FileText, Users, Target, Accessibility, 
  Presentation, CheckCircle, AlertTriangle
} from "lucide-react";

const criterios = [
  {
    categoria: "Documentação",
    icon: FileText,
    peso: "20%",
    cor: "from-blue-500 to-cyan-500",
    itens: [
      { item: "Organização e clareza do documento", pontos: 5 },
      { item: "Formatação correta (ABNT)", pontos: 5 },
      { item: "Referências bibliográficas", pontos: 5 },
      { item: "Uso adequado de imagens/screenshots", pontos: 5 }
    ]
  },
  {
    categoria: "Análise de Usuários",
    icon: Users,
    peso: "25%",
    cor: "from-purple-500 to-pink-500",
    itens: [
      { item: "Qualidade dos perfis de usuários", pontos: 8 },
      { item: "Detalhamento das personas", pontos: 9 },
      { item: "Cenários realistas", pontos: 8 }
    ]
  },
  {
    categoria: "Análise de Tarefas",
    icon: Target,
    peso: "20%",
    cor: "from-orange-500 to-red-500",
    itens: [
      { item: "Identificação correta das tarefas", pontos: 7 },
      { item: "Diagrama HTA bem estruturado", pontos: 7 },
      { item: "Fluxograma claro e correto", pontos: 6 }
    ]
  },
  {
    categoria: "Avaliação Heurística",
    icon: Star,
    peso: "20%",
    cor: "from-emerald-500 to-teal-500",
    itens: [
      { item: "Aplicação correta das heurísticas", pontos: 7 },
      { item: "Problemas bem documentados", pontos: 7 },
      { item: "Sugestões de melhoria relevantes", pontos: 6 }
    ]
  },
  {
    categoria: "Acessibilidade",
    icon: Accessibility,
    peso: "15%",
    cor: "from-indigo-500 to-violet-500",
    itens: [
      { item: "Uso de ferramentas de auditoria", pontos: 5 },
      { item: "Identificação de barreiras", pontos: 5 },
      { item: "Propostas de correção", pontos: 5 }
    ]
  }
];

const CriteriosAvaliacaoSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Rubrica de Avaliação
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Critérios de Avaliação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A Fase 1 será avaliada com base nos seguintes critérios (Total: 100 pontos)
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criterios.map((criterio, index) => (
            <ScrollReveal key={criterio.categoria} animation="fadeUp" delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-background rounded-2xl border border-border/50 overflow-hidden h-full"
              >
                <div className={`h-1.5 bg-gradient-to-r ${criterio.cor}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${criterio.cor} flex items-center justify-center`}>
                        <criterio.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold">{criterio.categoria}</h3>
                    </div>
                    <span className="text-lg font-bold text-emerald-400">{criterio.peso}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {criterio.itens.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{item.item}</span>
                        <span className="text-sm font-medium text-foreground">{item.pontos}pts</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Notas importantes */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-400 mb-2">Pontos Extras (+10)</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Proposta de redesign visual (+5)</li>
                    <li>• Comparação com concorrentes (+3)</li>
                    <li>• Pesquisa com usuários reais (+2)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-400 mb-2">Penalizações</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Atraso na entrega: -10% por dia</li>
                    <li>• Plágio: nota zero</li>
                    <li>• Formato incorreto: -5 pontos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CriteriosAvaliacaoSection;
