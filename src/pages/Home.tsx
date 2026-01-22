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
      {
        id: "aula-1",
        title: "Aula 1 - Apresentação da Disciplina",
        description: "Crise do Software e Marshmallow Challenge",
        path: "/engenharia-software-1/aula-1"
      }
    ]
  },
  {
    id: "engenharia-software-2",
    title: "Engenharia de Software II",
    description: "Tópicos avançados e práticas de desenvolvimento de software",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
    lessons: []
  },
  {
    id: "projetos-interface",
    title: "Projetos de Interface",
    description: "Design de interfaces, UX/UI e prototipação",
    icon: Monitor,
    color: "from-orange-500 to-amber-500",
    lessons: []
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
                      Aulas disponíveis
                    </p>
                    {course.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={lesson.path}
                        className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group/lesson"
                      >
                        <div>
                          <p className="text-sm font-medium text-foreground">{lesson.title}</p>
                          <p className="text-xs text-muted-foreground">{lesson.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/lesson:text-primary group-hover/lesson:translate-x-1 transition-all" />
                      </Link>
                    ))}
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
