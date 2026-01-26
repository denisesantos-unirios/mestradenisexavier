import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { 
  FileText, Users, Target, ClipboardList, 
  CheckCircle, AlertCircle, Lightbulb, BookOpen
} from "lucide-react";

const requisitos = [
  {
    numero: "01",
    titulo: "Introdução e Contexto",
    icon: BookOpen,
    descricao: "Apresentação do sistema escolhido e justificativa",
    itens: [
      "Nome e descrição do sistema/aplicativo analisado",
      "Justificativa da escolha (por que esse sistema?)",
      "Objetivo geral da análise de usabilidade",
      "Público-alvo pretendido do sistema"
    ],
    dica: "Escolha um sistema que você usa frequentemente e que tenha pontos de melhoria visíveis."
  },
  {
    numero: "02",
    titulo: "Análise de Usuários",
    icon: Users,
    descricao: "Perfis de usuários e personas desenvolvidas",
    itens: [
      "Mínimo de 2 perfis de usuários distintos",
      "1 persona primária detalhada (nome, foto, bio, goals, frustrations)",
      "1 persona secundária com características complementares",
      "Cenário de uso para cada persona"
    ],
    dica: "Use dados reais de pesquisa ou observação para criar personas realistas."
  },
  {
    numero: "03",
    titulo: "Análise de Tarefas",
    icon: ClipboardList,
    descricao: "Decomposição hierárquica das tarefas principais",
    itens: [
      "Identificação de 3 tarefas principais do sistema",
      "Diagrama HTA para pelo menos 1 tarefa",
      "Fluxograma de interação para 1 tarefa",
      "Identificação de pontos críticos e gargalos"
    ],
    dica: "Foque nas tarefas mais frequentes ou mais problemáticas do sistema."
  },
  {
    numero: "04",
    titulo: "Avaliação Heurística",
    icon: Target,
    descricao: "Análise baseada nas heurísticas de Nielsen",
    itens: [
      "Aplicação das 10 heurísticas de Nielsen",
      "Identificação de no mínimo 5 problemas de usabilidade",
      "Classificação de severidade (1-4) para cada problema",
      "Sugestões de melhoria para cada problema identificado"
    ],
    dica: "Documente com screenshots cada problema encontrado."
  },
  {
    numero: "05",
    titulo: "Análise de Acessibilidade",
    icon: CheckCircle,
    descricao: "Verificação de conformidade com WCAG",
    itens: [
      "Teste com ferramenta de auditoria (Lighthouse, WAVE, etc.)",
      "Análise de pelo menos 5 critérios WCAG",
      "Identificação de barreiras de acessibilidade",
      "Propostas de correção para cada barreira"
    ],
    dica: "Teste a navegação apenas com teclado e verifique contraste de cores."
  }
];

const RequisitosFase1Section = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Requisitos da Entrega
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A Fase 1 do projeto deve conter os seguintes elementos obrigatórios
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-6">
          {requisitos.map((req, index) => (
            <StaggerItem key={req.numero}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-background rounded-2xl border border-border/50 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Número e ícone */}
                    <div className="flex items-start gap-4">
                      <span className="text-5xl font-bold text-emerald-500/20">
                        {req.numero}
                      </span>
                      <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                        <req.icon className="w-7 h-7 text-emerald-400" />
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{req.titulo}</h3>
                      <p className="text-muted-foreground mb-4">{req.descricao}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        {req.itens.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Dica */}
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-amber-200/80">{req.dica}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default RequisitosFase1Section;
