import { motion } from "framer-motion";
import { GraduationCap, Code2, Layers, Monitor, ChevronRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import MainNavigation from "@/components/MainNavigation";

const courses = [
  {
    id: "engenharia-software-1",
    title: "Engenharia de Software I",
    description: "Fundamentos, metodologias e práticas essenciais da engenharia de software",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    lessons: [
      { id: "aula-1", title: "Aula 1", description: "Apresentação da Disciplina", path: "/engenharia-software-1/aula-1" },
      { id: "aula-2", title: "Aula 2", description: "Ciclo de Vida e Processos", path: "/engenharia-software-1/aula-2" },
      { id: "aula-3", title: "Aula 3", description: "Metodologias Ágeis", path: "/engenharia-software-1/aula-3" },
      { id: "aula-4", title: "Aula 4", description: "Engenharia de Requisitos", path: "/engenharia-software-1/aula-4" },
      { id: "aula-5", title: "Aula 5", description: "IA e Histórias de Usuário", path: "/engenharia-software-1/aula-5" }
    ]
  },
  {
    id: "engenharia-software-2",
    title: "Engenharia de Software II",
    description: "Tópicos avançados e práticas de desenvolvimento de software",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    lessons: [
      { id: "aula-1", title: "Aula 1", description: "Apresentação da Disciplina", path: "/engenharia-software-2/aula-1" },
      { id: "aula-2", title: "Aula 2", description: "Ciclo de Vida e Processos", path: "/engenharia-software-2/aula-2" },
      { id: "aula-3", title: "Aula 3", description: "Importância dos Requisitos", path: "/engenharia-software-2/aula-3" },
      { id: "aula-4", title: "Aula 4", description: "Tipos de Requisitos", path: "/engenharia-software-2/aula-4" },
      { id: "aula-5", title: "Aula 5", description: "Mini-Mundo e Entrega", path: "/engenharia-software-2/aula-5" },
      { id: "aula-6", title: "Aula 6", description: "Técnicas de Elicitação", path: "/engenharia-software-2/aula-6" },
      { id: "aula-7", title: "Aula 7", description: "Ferramentas e Dinâmica", path: "/engenharia-software-2/aula-7" },
      { id: "aula-8", title: "Aula 8", description: "Documento de Requisitos", path: "/engenharia-software-2/aula-8" },
      { id: "aula-9", title: "Aula 9", description: "Técnicas de Validação", path: "/engenharia-software-2/aula-9" },
      { id: "aula-10", title: "Aula 10", description: "Entrega Fase 2", path: "/engenharia-software-2/aula-10" },
      { id: "aula-11", title: "Aula 11", description: "UML e Diagramas", path: "/engenharia-software-2/aula-11" },
      { id: "aula-12", title: "Aula 12", description: "Diagrama de Casos de Uso", path: "/engenharia-software-2/aula-12" },
      { id: "aula-13", title: "Aula 13", description: "Especificação de Casos de Uso", path: "/engenharia-software-2/aula-13" },
      { id: "aula-14", title: "Aula 14", description: "Workshop Prático", path: "/engenharia-software-2/aula-14" },
      { id: "aula-15", title: "Aula 15", description: "Entrega Fase 3", path: "/engenharia-software-2/aula-15" }
    ]
  },
  {
    id: "projetos-interface",
    title: "Projetos de Interface",
    description: "Design de interfaces, UX/UI e prototipação",
    icon: Monitor,
    color: "from-orange-500 to-amber-500",
    lessons: [
      { id: "aula-1", title: "Aula 1", description: "Apresentação da Disciplina", path: "/projetos-interface/aula-1" },
      { id: "aula-2", title: "Aula 2", description: "Conceitos de Interação", path: "/projetos-interface/aula-2" },
      { id: "aula-3", title: "Aula 3", description: "Modelos Mentais e Usuários", path: "/projetos-interface/aula-3" },
      { id: "aula-4", title: "Aula 4", description: "Heurísticas de Usabilidade", path: "/projetos-interface/aula-4" },
      { id: "aula-5", title: "Aula 5", description: "Personas e Tarefas", path: "/projetos-interface/aula-5" },
      { id: "aula-6", title: "Aula 6", description: "Cognição e Percepção", path: "/projetos-interface/aula-6" },
      { id: "aula-7", title: "Aula 7", description: "Análise de Tarefas (HTA)", path: "/projetos-interface/aula-7" },
      { id: "aula-8", title: "Aula 8", description: "UX vs UI", path: "/projetos-interface/aula-8" },
      { id: "aula-9", title: "Aula 9", description: "Leis Psicológicas de UX", path: "/projetos-interface/aula-9" },
      { id: "aula-10", title: "Aula 10", description: "Acessibilidade e WCAG", path: "/projetos-interface/aula-10" },
      { id: "aula-11", title: "Aula 11", description: "Ferramentas de Acessibilidade", path: "/projetos-interface/aula-11" },
      { id: "aula-12", title: "Aula 12", description: "Revisão Geral", path: "/projetos-interface/aula-12" },
      { id: "aula-13", title: "Aula 13", description: "Entrega Fase 1", path: "/projetos-interface/aula-13" },
      { id: "aula-14", title: "Aula 14", description: "Design Centrado no Usuário", path: "/projetos-interface/aula-14" },
      { id: "aula-15", title: "Aula 15", description: "Arquitetura da Informação", path: "/projetos-interface/aula-15" },
      { id: "aula-16", title: "Aula 16", description: "Prototipação", path: "/projetos-interface/aula-16" },
      { id: "aula-17", title: "Aula 17", description: "Testes de Usabilidade", path: "/projetos-interface/aula-17" },
      { id: "aula-18", title: "Aula 18", description: "Interface no Figma", path: "/projetos-interface/aula-18" },
      { id: "aula-19", title: "Aula 19", description: "Componentes e Protótipo", path: "/projetos-interface/aula-19" }
    ]
  }
];

const Home = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <MainNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/80 backdrop-blur-sm mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground font-medium">Portal de Aulas</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-foreground">Professora Mestra</span>
            <br />
            <span className="accent-text">Denise Xavier dos Santos</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore as disciplinas e acesse os materiais de aula de forma interativa e dinâmica
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-foreground mb-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Disciplinas
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                <p className="text-muted-foreground mb-6">{course.description}</p>

                {course.lessons.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-primary flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {course.lessons.length} aulas disponíveis
                    </p>
                    <div className="max-h-48 overflow-y-auto space-y-2 pr-2 scrollbar-thin">
                      {course.lessons.map((lesson) => (
                        <Link
                          key={lesson.id}
                          to={lesson.path}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group/lesson"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-foreground truncate">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground truncate">{lesson.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/lesson:text-primary group-hover/lesson:translate-x-1 transition-all shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                    Em breve
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          Prof.ª Mestra Denise Xavier dos Santos • 2026
        </p>
      </footer>
    </main>
  );
};

export default Home;
