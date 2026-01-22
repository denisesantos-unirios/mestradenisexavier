import { AlertTriangle, Calendar, TrendingDown, Target, CheckCircle2 } from "lucide-react";

const timelineEvents = [
  {
    year: "1960s",
    title: "O Início da Crise",
    description: "Projetos cada vez maiores e mais complexos começam a falhar sistematicamente.",
    type: "crisis"
  },
  {
    year: "1968",
    title: "Conferência da NATO",
    description: "O termo 'Engenharia de Software' é cunhado oficialmente pela primeira vez.",
    type: "milestone"
  },
  {
    year: "1970s",
    title: "Modelo Cascata",
    description: "Winston Royce propõe o modelo sequencial de desenvolvimento.",
    type: "solution"
  },
  {
    year: "1990s",
    title: "Métodos Ágeis",
    description: "Surgem metodologias iterativas e incrementais.",
    type: "solution"
  },
  {
    year: "2001",
    title: "Manifesto Ágil",
    description: "17 desenvolvedores publicam os princípios do desenvolvimento ágil.",
    type: "milestone"
  }
];

const problems = [
  { icon: TrendingDown, title: "Atrasos", description: "Projetos entregues muito além do prazo" },
  { icon: AlertTriangle, title: "Custos", description: "Orçamentos extrapolados em 200-300%" },
  { icon: Target, title: "Qualidade", description: "Software com bugs e falhas críticas" },
];

const solutions = [
  "Metodologias estruturadas de desenvolvimento",
  "Gestão de requisitos e documentação",
  "Testes sistemáticos e garantia de qualidade",
  "Desenvolvimento iterativo e incremental",
  "Comunicação efetiva entre equipes"
];

const CrisisSection = () => {
  return (
    <section id="crise" className="section-container relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="crisis-badge mb-6 inline-block">Contexto Histórico</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            A <span className="accent-text">Crise</span> do Software
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre 1960 e 1980, a indústria de software enfrentou uma crise sem precedentes
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
            <div className="w-16 h-16 rounded-2xl bg-destructive/20 flex items-center justify-center mx-auto mb-6">
              <problem.icon className="w-8 h-8 text-destructive" />
            </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Linha do Tempo</h3>
          <div className="relative">
            <div className="hidden md:block timeline-line" />
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`glass-card p-6 inline-block ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      <span className={`text-sm font-medium ${
                        event.type === 'crisis' ? 'text-destructive' : 
                        event.type === 'solution' ? 'text-primary' : 'text-accent'
                      }`}>
                        {event.year}
                      </span>
                      <h4 className="text-xl font-bold text-foreground mt-1">{event.title}</h4>
                      <p className="text-muted-foreground mt-2">{event.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary z-10 flex-shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="glass-card p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Soluções Propostas</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {index + 1}
                </span>
                <p className="text-foreground">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisSection;
