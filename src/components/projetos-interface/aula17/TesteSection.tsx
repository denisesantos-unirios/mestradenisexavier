import { motion } from "framer-motion";
import { Users, MessageSquare, Eye, PenTool, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TesteSection = () => {
  const roles = [
    {
      icon: Users,
      title: "Participante",
      description: "O usuário que interage com o protótipo",
      responsibilities: [
        "Executa tarefas específicas",
        "Verbaliza pensamentos (think-aloud)",
        "Finge que o papel é real",
        "Faz perguntas quando confuso"
      ]
    },
    {
      icon: PenTool,
      title: "Computador",
      description: "Pessoa que 'opera' o protótipo de papel",
      responsibilities: [
        "Troca telas conforme interação",
        "Simula feedback do sistema",
        "NÃO fala durante o teste",
        "Anota áreas tocadas pelo usuário"
      ]
    },
    {
      icon: MessageSquare,
      title: "Facilitador",
      description: "Pessoa que conduz a sessão de teste",
      responsibilities: [
        "Explica o cenário e tarefas",
        "Encoraja think-aloud",
        "Faz perguntas de esclarecimento",
        "Mantém o teste no trilho"
      ]
    },
    {
      icon: Eye,
      title: "Observador",
      description: "Pessoa que documenta a sessão",
      responsibilities: [
        "Anota comportamentos observados",
        "Registra citações importantes",
        "Cronometra tarefas",
        "Fotografa momentos-chave"
      ]
    }
  ];

  const testScript = [
    {
      phase: "Introdução",
      duration: "5 min",
      actions: [
        "Apresente-se e agradeça a participação",
        "Explique o propósito do teste",
        "Descreva o contexto do protótipo",
        "Peça permissão para gravar/fotografar"
      ]
    },
    {
      phase: "Demonstração",
      duration: "2 min",
      actions: [
        "Mostre como 'tocar' no papel",
        "Explique que você será o 'computador'",
        "Faça uma tarefa exemplo simples",
        "Pergunte se há dúvidas"
      ]
    },
    {
      phase: "Tarefas",
      duration: "15-20 min",
      actions: [
        "Apresente uma tarefa por vez",
        "Observe sem intervir",
        "Anote problemas e insights",
        "Pergunte após cada tarefa"
      ]
    },
    {
      phase: "Debriefing",
      duration: "5 min",
      actions: [
        "Pergunte impressões gerais",
        "O que foi fácil/difícil?",
        "O que mudaria?",
        "Agradeça novamente"
      ]
    }
  ];

  return (
    <section id="teste" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Teste com Usuários
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Como conduzir testes de usabilidade com protótipos de papel 
            de forma eficaz.
          </p>
        </motion.div>

        {/* Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center mx-auto mb-3">
                    <role.icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <CardTitle className="text-lg">{role.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{role.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {role.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                        {resp}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Test Script */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Roteiro de Teste
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {testScript.map((phase, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{phase.phase}</CardTitle>
                    <span className="text-xs px-2 py-1 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400">
                      {phase.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phase.actions.map((action, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-4 h-4 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px] text-rose-600 dark:text-rose-400 flex-shrink-0">
                          {idx + 1}
                        </div>
                        {action}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="bg-amber-500/10 border-amber-500/20">
            <CardContent className="p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Lembrete Importante</p>
                <p className="text-sm text-muted-foreground">
                  O objetivo do teste é avaliar o DESIGN, não o usuário. Nunca faça 
                  o participante se sentir burro ou errado. Problemas encontrados 
                  são oportunidades de melhoria do design.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TesteSection;
