import { motion } from "framer-motion";
import { Clock, Users, CheckSquare, AlertTriangle, Laptop } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ferramentas = [
  {
    nome: "Draw.io (Diagrams.net)",
    tipo: "Gratuita",
    link: "https://app.diagrams.net/",
    vantagem: "Sem cadastro, salva no Google Drive"
  },
  {
    nome: "Lucidchart",
    tipo: "Freemium",
    link: "https://lucid.app/",
    vantagem: "Templates prontos de UML"
  },
  {
    nome: "StarUML",
    tipo: "Trial",
    link: "https://staruml.io/",
    vantagem: "Software desktop profissional"
  },
  {
    nome: "PlantUML",
    tipo: "Gratuita",
    link: "https://plantuml.com/",
    vantagem: "Diagramas como código"
  }
];

const WorkshopSection = () => {
  return (
    <section id="workshop" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              50 minutos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Roteiro do Workshop
            </h2>
          </div>
        </ScrollReveal>

        {/* Etapas */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-foreground mb-2">Revisão (5min)</h3>
              <p className="text-sm text-muted-foreground">
                Revisar lista de atores e casos de uso preparada na aula virtual
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-foreground mb-2">Modelagem (25min)</h3>
              <p className="text-sm text-muted-foreground">
                Criar o diagrama na ferramenta escolhida com todos os elementos
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-foreground mb-2">Relacionamentos (10min)</h3>
              <p className="text-sm text-muted-foreground">
                Adicionar include, extend e generalizações onde aplicável
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-bold text-foreground mb-2">Apresentação (10min)</h3>
              <p className="text-sm text-muted-foreground">
                2 equipes apresentam seu diagrama para feedback rápido
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Ferramentas */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Laptop className="w-5 h-5 text-emerald-400" />
              Ferramentas Recomendadas
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ferramentas.map((ferramenta, index) => (
                <a
                  key={index}
                  href={ferramenta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-card/50 hover:bg-card transition-colors"
                >
                  <p className="font-bold text-foreground mb-1">{ferramenta.nome}</p>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs">
                    {ferramenta.tipo}
                  </span>
                  <p className="text-sm text-muted-foreground mt-2">{ferramenta.vantagem}</p>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Checklist */}
        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-emerald-400" />
              Checklist do Diagrama
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Limite do sistema definido (retângulo)</span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Todos os atores posicionados fora</span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Casos de uso com verbos no infinitivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Associações ator-caso de uso corretas</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Include/Extend usados corretamente</span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Generalização de atores (se houver)</span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Nome do sistema no topo</span>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 rounded border-border" />
                  <span className="text-foreground">Mínimo 8 casos de uso</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkshopSection;
