import { motion } from "framer-motion";
import { 
  Calendar, 
  BookOpen, 
  Sparkles, 
  Layers, 
  ClipboardCheck,
  Presentation,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const semanas = [
  {
    periodo: "Semana 1-4",
    titulo: "Fundamentos",
    descricao: "IHC, interação, usabilidade, usuários",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    periodo: "Semana 5-7",
    titulo: "Experiência do Usuário",
    descricao: "UX e Acessibilidade",
    icon: Sparkles,
    color: "bg-purple-500"
  },
  {
    periodo: "Semana 8-10",
    titulo: "Prototipação",
    descricao: "Design e construção de protótipos",
    icon: Layers,
    color: "bg-pink-500"
  },
  {
    periodo: "Semana 11-13",
    titulo: "Avaliação",
    descricao: "Métodos empíricos de teste",
    icon: ClipboardCheck,
    color: "bg-orange-500"
  },
  {
    periodo: "Semana 14-15",
    titulo: "Entrega Final",
    descricao: "Testes, análise e apresentação",
    icon: Presentation,
    color: "bg-emerald-500"
  }
];

const CronogramaSection = () => {
  return (
    <section id="cronograma" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm mb-4">
              <Calendar className="w-4 h-4" />
              <span>UX: A Jornada do Usuário</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Linha do Tempo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sua jornada de aprendizado ao longo do semestre
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Desktop */}
        <div className="hidden lg:block relative">
          {/* Linha conectora */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-orange-500 to-emerald-500 -translate-y-1/2 rounded-full" />
          
          <div className="flex justify-between relative">
            {semanas.map((semana, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Ícone */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${semana.color} flex items-center justify-center shadow-lg mb-4 relative z-10`}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <semana.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Conteúdo */}
                <motion.div
                  className="glass-card p-4 text-center max-w-[180px]"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-xs font-bold text-primary mb-1">{semana.periodo}</p>
                  <h4 className="font-bold text-sm mb-1">{semana.titulo}</h4>
                  <p className="text-xs text-muted-foreground">{semana.descricao}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden space-y-4">
          {semanas.map((semana, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="glass-card p-4 flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className={`w-14 h-14 rounded-xl ${semana.color} flex items-center justify-center shrink-0`}>
                  <semana.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">{semana.periodo}</p>
                  <h4 className="font-bold">{semana.titulo}</h4>
                  <p className="text-sm text-muted-foreground">{semana.descricao}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <motion.a
              href="#dinamica"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="font-medium">Dinâmica da Aula</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CronogramaSection;
