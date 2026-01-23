import { motion } from "framer-motion";
import { Target, ListTree, Users, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const beneficios = [
  {
    icon: Target,
    titulo: "Foco no Usuário",
    descricao: "Entender o que o usuário realmente precisa fazer, não o que achamos que ele precisa"
  },
  {
    icon: ListTree,
    titulo: "Identificar Passos",
    descricao: "Decompor tarefas complexas em passos menores e gerenciáveis"
  },
  {
    icon: Users,
    titulo: "Validar Requisitos",
    descricao: "Confirmar se a interface suporta todas as tarefas necessárias"
  }
];

const tiposTarefas = [
  {
    tipo: "Tarefa Principal",
    descricao: "O objetivo central que o usuário quer alcançar",
    exemplo: "Comprar um produto online",
    cor: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30"
  },
  {
    tipo: "Subtarefas",
    descricao: "Passos intermediários necessários para completar a tarefa principal",
    exemplo: "Buscar produto, adicionar ao carrinho, finalizar pagamento",
    cor: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30"
  },
  {
    tipo: "Tarefas de Suporte",
    descricao: "Ações que ajudam mas não são o objetivo principal",
    exemplo: "Criar conta, salvar favoritos, consultar histórico",
    cor: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30"
  }
];

const AnaliseSection = () => {
  return (
    <section id="analise" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Fundamentos</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              O que é Análise de Tarefas?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Análise de tarefas é o estudo sistemático de como os usuários realizam atividades 
              para atingir seus objetivos. É fundamental para criar interfaces que realmente funcionam.
            </p>
          </div>
        </ScrollReveal>

        {/* Por que fazer análise de tarefas */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Por que fazer Análise de Tarefas?</h3>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
              {beneficios.map((beneficio, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="p-5 rounded-xl bg-muted/30 h-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <beneficio.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-bold">{beneficio.titulo}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{beneficio.descricao}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Tipos de Tarefas */}
        <ScrollReveal animation="fadeUp">
          <h3 className="text-2xl font-bold text-center mb-8">Tipos de Tarefas</h3>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
          {tiposTarefas.map((tarefa, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={`h-full p-6 rounded-2xl bg-gradient-to-br ${tarefa.cor} border ${tarefa.borderColor}`}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold mb-3">{tarefa.tipo}</h4>
                <p className="text-muted-foreground mb-4">{tarefa.descricao}</p>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Exemplo: </span>
                    {tarefa.exemplo}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Dica */}
        <ScrollReveal animation="scale">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/30">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Dica Importante</h3>
                <p className="text-muted-foreground">
                  Sempre observe usuários reais realizando tarefas. O que você imagina que eles fazem 
                  pode ser muito diferente do comportamento real. A observação direta é insubstituível.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnaliseSection;
