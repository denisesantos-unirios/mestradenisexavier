import { motion } from "framer-motion";
import { 
  History, AlertTriangle, Rocket, Code2, 
  Users, Server, Cpu, Globe 
} from "lucide-react";

const eras = [
  {
    periodo: "1950-1960",
    titulo: "Era Pioneira",
    descricao: "Software era visto como uma arte. Programadores individuais, sem metodologias definidas.",
    icon: Code2,
    problemas: ["Código espaguete", "Sem documentação", "Dependência do programador"]
  },
  {
    periodo: "1968",
    titulo: "Crise do Software",
    descricao: "Conferência da NATO cunha o termo 'Engenharia de Software'. Reconhecimento dos problemas.",
    icon: AlertTriangle,
    problemas: ["Projetos atrasados", "Custos elevados", "Software com defeitos"]
  },
  {
    periodo: "1970-1980",
    titulo: "Metodologias Estruturadas",
    descricao: "Surgem processos formais, análise estruturada, diagramas de fluxo de dados (DFD).",
    icon: Server,
    problemas: ["Processos rígidos", "Muita documentação", "Pouca flexibilidade"]
  },
  {
    periodo: "1990-2000",
    titulo: "Era Orientada a Objetos",
    descricao: "UML, RUP, padrões de projeto. Foco em reutilização e modelagem.",
    icon: Cpu,
    problemas: ["Curva de aprendizado", "Overhead de modelagem"]
  },
  {
    periodo: "2001+",
    titulo: "Era Ágil",
    descricao: "Manifesto Ágil, Scrum, XP, Kanban. Foco em entregas incrementais e colaboração.",
    icon: Rocket,
    problemas: ["Escalabilidade", "Documentação mínima"]
  },
  {
    periodo: "Hoje",
    titulo: "Era DevOps & Cloud",
    descricao: "CI/CD, microsserviços, cloud native, IA assistindo desenvolvimento.",
    icon: Globe,
    problemas: ["Complexidade distribuída", "Segurança"]
  }
];

const HistoriaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 mb-4">
            <History className="w-4 h-4" />
            <span className="text-sm font-medium">Evolução Histórica</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A História da Engenharia de Software
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Do código artesanal às metodologias modernas: uma jornada de aprendizado com erros e acertos
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-500 hidden lg:block" />

          <div className="space-y-8">
            {eras.map((era, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Conteúdo */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="glass-card p-6">
                    <span className="text-sm font-bold text-blue-400">{era.periodo}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{era.titulo}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{era.descricao}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {era.problemas.map((prob, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                        >
                          {prob}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Ícone central */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <era.icon className="w-8 h-8 text-white" />
                </div>

                {/* Espaço do outro lado */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
