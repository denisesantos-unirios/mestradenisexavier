import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const HTASection = () => {
  return (
    <section id="hta" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Técnica</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Análise Hierárquica de Tarefas (HTA)
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A HTA decompõe uma tarefa principal em subtarefas, criando uma árvore hierárquica
              que mostra a estrutura completa das atividades do usuário.
            </p>
          </div>
        </ScrollReveal>

        {/* Exemplo visual de HTA */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-8 mb-12">
            <h3 className="text-xl font-bold mb-6 text-center">
              Exemplo: Comprar um Produto Online
            </h3>

            {/* Árvore HTA */}
            <div className="overflow-x-auto">
              <div className="min-w-[600px] py-4">
                {/* Nível 0 - Tarefa Principal */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    0. Comprar Produto Online
                  </motion.div>
                </div>

                {/* Linhas de conexão */}
                <div className="flex justify-center mb-4">
                  <div className="w-px h-8 bg-border" />
                </div>

                {/* Nível 1 - Subtarefas principais */}
                <div className="flex justify-center gap-4 mb-8">
                  {["1. Buscar Produto", "2. Selecionar", "3. Comprar", "4. Confirmar"].map((tarefa, index) => (
                    <motion.div
                      key={index}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-center"
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                    >
                      {tarefa}
                    </motion.div>
                  ))}
                </div>

                {/* Linhas de conexão */}
                <div className="flex justify-center gap-32 mb-4">
                  <div className="w-px h-8 bg-border" />
                  <div className="w-px h-8 bg-border" />
                </div>

                {/* Nível 2 - Detalhamento */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      1.1 Digitar termo
                    </div>
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      1.2 Aplicar filtros
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      2.1 Ver detalhes
                    </div>
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      2.2 Escolher opções
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      3.1 Adicionar ao carrinho
                    </div>
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      3.2 Inserir pagamento
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      4.1 Revisar pedido
                    </div>
                    <div className="px-3 py-1.5 bg-muted/50 rounded text-xs text-center">
                      4.2 Confirmar compra
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Passos para criar HTA */}
        <ScrollReveal animation="fadeUp">
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold mb-6">Como Criar uma HTA</h3>

            <div className="space-y-4">
              {[
                { passo: 1, titulo: "Identifique o objetivo principal", descricao: "Qual é a tarefa que o usuário quer completar?" },
                { passo: 2, titulo: "Liste as subtarefas", descricao: "Quais passos são necessários para atingir o objetivo?" },
                { passo: 3, titulo: "Decomponha cada subtarefa", descricao: "Continue dividindo até chegar em ações atômicas" },
                { passo: 4, titulo: "Defina a ordem e condições", descricao: "As tarefas são sequenciais? Paralelas? Condicionais?" },
                { passo: 5, titulo: "Valide com usuários", descricao: "Confirme se a estrutura reflete o comportamento real" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">{item.passo}</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{item.descricao}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HTASection;
