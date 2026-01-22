import { Timer, Users, Trophy, Zap, Target, RefreshCw, MessageSquare, Lightbulb } from "lucide-react";

const materials = [
  { name: "20 espaguetes", quantity: "crus" },
  { name: "1 metro de fita adesiva", quantity: "" },
  { name: "1 metro de barbante", quantity: "" },
  { name: "1 marshmallow", quantity: "no topo!" },
];

const rules = [
  "18 minutos para construir a torre mais alta",
  "O marshmallow deve estar no topo intacto",
  "A torre deve se sustentar sozinha",
  "Toda a equipe deve participar",
];

const lessons = [
  {
    icon: RefreshCw,
    title: "Prototipação Rápida",
    description: "Equipes que testam cedo e frequentemente têm mais sucesso"
  },
  {
    icon: MessageSquare,
    title: "Comunicação",
    description: "A colaboração efetiva é mais importante que habilidades individuais"
  },
  {
    icon: Target,
    title: "Foco no Objetivo",
    description: "Manter o objetivo final em mente desde o início"
  },
  {
    icon: Lightbulb,
    title: "Aprender com Falhas",
    description: "Falhas rápidas levam a soluções melhores"
  },
];

const MarshmallowSection = () => {
  return (
    <section id="marshmallow" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="solution-badge mb-6 inline-block">Dinâmica em Grupo</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="accent-text">Marshmallow</span> Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma experiência prática que revela insights poderosos sobre trabalho em equipe e inovação
          </p>
        </div>

        {/* Challenge Overview */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Left: Materials & Rules */}
          <div className="space-y-8">
            {/* Materials */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Materiais</h3>
              </div>
              <div className="space-y-4">
                {materials.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground font-medium">{item.name}</span>
                    {item.quantity && (
                      <span className="text-primary text-sm ml-auto">{item.quantity}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Regras</h3>
              </div>
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Stats & Timer */}
          <div className="space-y-8">
            {/* Timer Card */}
            <div className="glass-card p-8 text-center animate-pulse-glow">
              <Timer className="w-16 h-16 text-primary mx-auto mb-4" />
              <div className="text-6xl md:text-8xl font-bold accent-text mb-2">18</div>
              <p className="text-2xl text-muted-foreground">minutos</p>
            </div>

            {/* Team Size */}
            <div className="glass-card p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground mb-1">Tamanho do Grupo</p>
                  <p className="text-4xl font-bold text-foreground">4-6</p>
                  <p className="text-muted-foreground">pessoas por equipe</p>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
              </div>
            </div>

            {/* Objective */}
            <div className="glass-card p-8 border-primary/30">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="w-8 h-8 text-primary" />
                <h4 className="text-xl font-bold text-foreground">Objetivo</h4>
              </div>
              <p className="text-muted-foreground text-lg">
                Construir a <span className="text-primary font-semibold">torre mais alta</span> que 
                consiga sustentar o marshmallow no topo!
              </p>
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-center mb-12">
            Lições para <span className="accent-text">Engenharia de Software</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessons.map((lesson, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover:scale-105 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <lesson.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{lesson.title}</h4>
                <p className="text-sm text-muted-foreground">{lesson.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="glass-card p-10 text-center border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              "Crianças do jardim de infância superam 
              <span className="accent-text"> MBAs</span> neste desafio!"
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Por quê? Elas prototipam desde o início, enquanto adultos passam tempo planejando 
              e só testam no final — quando já é tarde demais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarshmallowSection;
