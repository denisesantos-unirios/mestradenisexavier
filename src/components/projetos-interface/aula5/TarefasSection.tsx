import { motion } from "framer-motion";
import { ListChecks, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tarefas = [
  {
    id: 1,
    nome: "Tarefa Principal",
    descricao: "A ação mais importante que o usuário precisa realizar",
    exemplo: "Fazer uma compra no e-commerce",
    subtarefas: ["Buscar produto", "Adicionar ao carrinho", "Finalizar pagamento"]
  },
  {
    id: 2,
    nome: "Tarefas Secundárias",
    descricao: "Ações de suporte que complementam a tarefa principal",
    exemplo: "Comparar produtos, ler avaliações",
    subtarefas: ["Ver detalhes", "Salvar favoritos", "Compartilhar"]
  },
  {
    id: 3,
    nome: "Tarefas de Configuração",
    descricao: "Ações que o usuário faz ocasionalmente",
    exemplo: "Alterar dados de perfil, mudar senha",
    subtarefas: ["Editar perfil", "Configurar notificações", "Gerenciar endereços"]
  }
];

const TarefasSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Análise de <span className="text-purple-400">Tarefas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Identifique o que os usuários precisam fazer no sistema para alcançar seus objetivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tarefas.map((tarefa, index) => (
            <motion.div
              key={tarefa.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-purple-500/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <span className="text-purple-400 font-bold">{tarefa.id}</span>
                  </div>
                  <CardTitle>{tarefa.nome}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{tarefa.descricao}</p>
                  
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <p className="text-sm">
                      <span className="text-purple-400 font-medium">Ex: </span>
                      {tarefa.exemplo}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {tarefa.subtarefas.map((sub, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-purple-400" />
                Fluxo de Tarefa: Comprar Produto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {["Acessar app", "Buscar produto", "Ver detalhes", "Adicionar ao carrinho", "Checkout", "Pagamento", "Confirmação"].map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TarefasSection;
