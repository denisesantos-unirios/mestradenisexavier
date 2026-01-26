import { motion } from "framer-motion";
import { History, Users, BookOpen, Target } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const marcos = [
  { ano: "1994", evento: "Grady Booch e Jim Rumbaugh iniciam unificação de métodos", cor: "bg-blue-500" },
  { ano: "1995", evento: "Ivar Jacobson se junta ao grupo (Os Três Amigos)", cor: "bg-violet-500" },
  { ano: "1996", evento: "Primeira versão pública da UML (0.9)", cor: "bg-purple-500" },
  { ano: "1997", evento: "UML 1.0 adotada pela OMG como padrão", cor: "bg-pink-500" },
  { ano: "2005", evento: "UML 2.0 lançada com melhorias significativas", cor: "bg-red-500" },
  { ano: "2017", evento: "UML 2.5.1 - versão atual mais utilizada", cor: "bg-primary" }
];

const beneficios = [
  {
    titulo: "Padronização",
    descricao: "Linguagem comum entre desenvolvedores, analistas e stakeholders",
    icone: BookOpen
  },
  {
    titulo: "Visualização",
    descricao: "Representa visualmente a estrutura e comportamento do sistema",
    icone: Target
  },
  {
    titulo: "Documentação",
    descricao: "Serve como documentação técnica do projeto",
    icone: History
  },
  {
    titulo: "Comunicação",
    descricao: "Facilita a comunicação entre membros da equipe",
    icone: Users
  }
];

const HistoriaUMLSection = () => {
  return (
    <section id="historia" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-4">
              <History className="w-4 h-4" />
              Contexto Histórico
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Origem e Evolução da UML
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A UML surgiu da necessidade de unificar diferentes notações de modelagem
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {marcos.map((marco, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <p className="text-2xl font-bold text-violet-400">{marco.ano}</p>
                    </div>
                    
                    <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${marco.cor} -translate-x-1/2 z-10`} />
                    
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                      <div className="p-4 rounded-xl bg-card border border-border">
                        <p className="md:hidden text-sm font-bold text-violet-400 mb-1">{marco.ano}</p>
                        <p className="text-foreground">{marco.evento}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Os Três Amigos */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/5 to-violet-500/10 border border-violet-500/20 mb-12">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-400" />
              Os Três Amigos (The Three Amigos)
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-card/50 text-center">
                <div className="text-4xl mb-3">👨‍💻</div>
                <p className="font-bold text-foreground">Grady Booch</p>
                <p className="text-sm text-muted-foreground">Método Booch</p>
              </div>
              <div className="p-4 rounded-xl bg-card/50 text-center">
                <div className="text-4xl mb-3">👨‍🔬</div>
                <p className="font-bold text-foreground">Jim Rumbaugh</p>
                <p className="text-sm text-muted-foreground">OMT (Object Modeling Technique)</p>
              </div>
              <div className="p-4 rounded-xl bg-card/50 text-center">
                <div className="text-4xl mb-3">👨‍🏫</div>
                <p className="font-bold text-foreground">Ivar Jacobson</p>
                <p className="text-sm text-muted-foreground">OOSE (Use Cases)</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Benefícios */}
        <ScrollReveal delay={0.3}>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Por que usar UML?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-card border border-border text-center"
                whileHover={{ y: -5 }}
              >
                <beneficio.icone className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                <p className="font-bold text-foreground mb-1">{beneficio.titulo}</p>
                <p className="text-sm text-muted-foreground">{beneficio.descricao}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HistoriaUMLSection;
