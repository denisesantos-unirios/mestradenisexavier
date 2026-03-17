import { motion } from "framer-motion";
import { ClipboardList, CheckCircle, StickyNote, Columns3, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/animations/ScrollReveal";

const AtividadeSection = () => {
  const steps = [
    {
      icon: StickyNote,
      title: "Etapa 1: Transformar Requisitos em User Stories",
      time: "20 min",
      tasks: [
        "Selecione 5 requisitos funcionais do seu documento IEEE 830",
        "Identifique o ator correspondente no diagrama de casos de uso",
        "Escreva cada requisito no formato: Como [ator], eu quero [ação], para que [valor]",
        "Adicione 2-3 critérios de aceite (Dado/Quando/Então) para cada história",
        "Valide cada história usando os critérios INVEST"
      ]
    },
    {
      icon: Target,
      title: "Etapa 2: Priorizar o Product Backlog",
      time: "10 min",
      tasks: [
        "Organize as HUs por prioridade usando MoSCoW (Must/Should/Could/Won't)",
        "Atribua pontos de esforço (1, 2, 3, 5, 8 — Fibonacci)",
        "Identifique dependências entre as histórias",
        "Defina quais entram na Sprint 1"
      ]
    },
    {
      icon: Columns3,
      title: "Etapa 3: Montar o Quadro Kanban",
      time: "15 min",
      tasks: [
        "Crie um board no Trello ou GitHub Projects com 5 colunas",
        "Adicione as User Stories como cards no Backlog",
        "Mova as HUs da Sprint 1 para 'To Do'",
        "Defina WIP Limits para as colunas 'Doing' e 'Review'",
        "Adicione labels de prioridade e estimativa em cada card"
      ]
    }
  ];

  return (
    <section id="atividade" className="py-24 px-6 relative" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fadeDown">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <ClipboardList className="w-4 h-4" />
              Atividade Prática
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Do Requisito à User Story no Kanban
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Usando o projeto integrador, transforme seus requisitos e casos de uso 
              em histórias de usuário organizadas em um quadro Kanban.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
              <Card className="h-full bg-card/50 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      ⏱ {step.time}
                    </span>
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2.5">
                    {step.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Deliverable */}
        <ScrollReveal animation="scale" delay={0.3}>
          <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Entregável: Backlog do Projeto Integrador
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Envie no AVA o link do board (Trello/GitHub Projects) contendo:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Mínimo de 10 User Stories no formato correto",
                      "Critérios de aceite para cada história (formato BDD)",
                      "Rastreabilidade: de qual requisito/caso de uso cada HU se origina",
                      "Priorização MoSCoW e estimativa de esforço (Fibonacci)",
                      "Quadro Kanban configurado com WIP Limits definidos"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AtividadeSection;
