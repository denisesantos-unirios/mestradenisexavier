import { motion } from "framer-motion";
import { Users, Eye, FileCheck, MessageSquare, Layers, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const tecnicas = [
  {
    nome: "Revisão por Pares",
    icone: Users,
    descricao: "Membros da equipe revisam requisitos uns dos outros buscando inconsistências e ambiguidades.",
    quando: "Durante a documentação",
    beneficio: "Detecta erros cedo no processo"
  },
  {
    nome: "Inspeção Formal",
    icone: Eye,
    descricao: "Revisão sistemática e estruturada usando checklists e critérios predefinidos.",
    quando: "Após documentação inicial",
    beneficio: "Alta taxa de detecção de defeitos"
  },
  {
    nome: "Prototipação",
    icone: Layers,
    descricao: "Criar protótipos de baixa/alta fidelidade para validar requisitos de interface.",
    quando: "Requisitos de UI/UX",
    beneficio: "Feedback visual dos stakeholders"
  },
  {
    nome: "Walkthrough",
    icone: FileCheck,
    descricao: "Apresentação dos requisitos para stakeholders simulando o uso do sistema.",
    quando: "Validação com cliente",
    beneficio: "Alinhamento de expectativas"
  }
];

const checklistValidacao = [
  { item: "Todos os requisitos são verificáveis?", categoria: "Completude" },
  { item: "Existem requisitos conflitantes?", categoria: "Consistência" },
  { item: "Os requisitos são implementáveis?", categoria: "Viabilidade" },
  { item: "As prioridades estão definidas?", categoria: "Priorização" },
  { item: "Os requisitos são rastreáveis?", categoria: "Rastreabilidade" },
  { item: "Os critérios de aceitação são claros?", categoria: "Clareza" }
];

const TecnicasValidacaoSection = () => {
  return (
    <section id="tecnicas" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              V&V
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Técnicas de Validação
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Métodos para garantir que os requisitos documentados estejam corretos e completos
            </p>
          </div>
        </ScrollReveal>

        {/* Diferença V&V */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Verificação</h3>
              <p className="text-muted-foreground text-sm mb-4">
                "Estamos construindo o produto CERTO?"
              </p>
              <p className="text-foreground">
                Garante que os requisitos foram documentados corretamente, 
                sem ambiguidades, contradições ou erros técnicos.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
              <h3 className="text-lg font-bold text-green-400 mb-2">Validação</h3>
              <p className="text-muted-foreground text-sm mb-4">
                "Estamos construindo o produto certo CORRETAMENTE?"
              </p>
              <p className="text-foreground">
                Confirma que os requisitos refletem as reais necessidades 
                dos stakeholders e usuários finais.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Técnicas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tecnicas.map((tecnica, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="p-6 rounded-2xl bg-card border border-border hover:border-green-500/50 transition-all h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                    <tecnica.icone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {tecnica.nome}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tecnica.descricao}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 rounded-full bg-secondary text-xs text-muted-foreground">
                        {tecnica.quando}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-green-500/20 text-xs text-green-400">
                        {tecnica.beneficio}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Checklist */}
        <ScrollReveal delay={0.4}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/20 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-green-500" />
              Checklist de Validação
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {checklistValidacao.map((check, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{check.item}</p>
                    <p className="text-xs text-muted-foreground">{check.categoria}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TecnicasValidacaoSection;
