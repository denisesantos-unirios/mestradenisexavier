import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookUser, Workflow, Boxes, GitBranch } from "lucide-react";

const tecnicas = [
  {
    icon: BookUser,
    t: "User Story (história de usuário)",
    d: "Descreve a necessidade sob o ponto de vista de quem usa, capturando o detalhe suficiente para desenvolver a funcionalidade.",
    ex: "Eu, enquanto Comprador de Livros, quero encontrar um livro cujo título eu já sei, para poder comprá-lo.",
  },
  {
    icon: Workflow,
    t: "Diagrama de Casos de Uso",
    d: "Mostra como cada ator interage com o sistema. Dele extraímos tarefas, objetos e o fluxo geral de interação.",
    ex: "Proprietário: arma/desarma o sistema, acessa via internet, responde a alarme. Administrador: reconfigura sensores.",
  },
  {
    icon: Boxes,
    t: "Elaboração de Tarefas e de Objetos",
    d: "Mapeia o que o usuário faz hoje para o conjunto de tarefas da nova interface; em seguida classifica os objetos citados nos casos de uso em classes, atributos e ações.",
    ex: "Objeto Sensor — atributos: nome, tipo, localização, área, características | ações: identificar(), habilitar(), desabilitar(), reconfigurar().",
  },
  {
    icon: GitBranch,
    t: "Análise de Fluxo de Trabalho (diagrama de raias)",
    d: "Usada quando vários papéis participam da mesma tarefa. Cada raia mostra as tarefas e decisões de um ator.",
    ex: "Revalidação de receita: Paciente solicita → Farmacêutico verifica situação e estoque → Médico avalia registros e aprova ou indica alternativa.",
  },
];

const raias = [
  { ator: "Paciente", passos: ["Solicita revalidação da receita", "Recebe notificação de estoque esgotado", "Recebe data/hora para retirada", "Retira a receita"] },
  { ator: "Farmacêutico", passos: ["Determina a situação da receita", "Verifica estoque ou alternativa", "Valida a receita"] },
  { ator: "Médico", passos: ["Verifica registros do paciente", "Aprova (ou não) a revalidação", "Avalia medicação alternativa"] },
];

const TecnicasTarefasSection = () => (
  <section id="tecnicas-tarefas" className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Técnicas para <span className="text-purple-500">Identificar e Representar Tarefas</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Quatro técnicas complementares recomendadas por Pressman e Maxim (2016) para transformar
          observação em especificação.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {tecnicas.map((t, i) => (
          <motion.div key={t.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <Card className="h-full bg-card/50 border-border/50 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10"><t.icon className="w-5 h-5 text-purple-500" /></div>
                  <CardTitle className="text-lg">{t.t}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{t.d}</p>
                <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10 text-sm italic">{t.ex}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-card/50 border-border/50">
          <CardHeader><CardTitle>Exemplo de Raias — Revalidação de Receita Médica</CardTitle></CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {raias.map((r) => (
                <div key={r.ator} className="rounded-xl border border-border/50 overflow-hidden">
                  <div className="px-4 py-2 bg-purple-500/10 font-semibold text-purple-500">{r.ator}</div>
                  <ul className="p-4 space-y-2 text-sm text-muted-foreground">
                    {r.passos.map((p) => <li key={p}>• {p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <strong className="text-foreground">Conclusão pedagógica:</strong> cada ator executa tarefas
              distintas, logo a interface de cada um deve ser diferente. O médico precisa ver alternativas
              de medicação; o farmacêutico, o estoque; o paciente, apenas data e hora da retirada.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default TecnicasTarefasSection;
