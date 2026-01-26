import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import HeroSection from "@/components/projetos-interface/aula16/HeroSection";
import FidelidadeSection from "@/components/projetos-interface/aula16/FidelidadeSection";
import TiposSection from "@/components/projetos-interface/aula16/TiposSection";
import AtividadeSection from "@/components/projetos-interface/aula16/AtividadeSection";

const Aula16 = () => {
  const sections = [
    { id: "hero", title: "Início" },
    { id: "fidelidade", title: "Fidelidade" },
    { id: "tipos", title: "Tipos" },
    { id: "atividade", title: "Atividade" },
  ];

  const lessonNavigation = {
    title: "Fundamentos de Prototipação",
    course: "Projetos de Interface",
    currentLesson: 16,
    totalLessons: 19,
    previousLesson: {
      path: "/projetos-interface/aula-15",
      title: "Ideação e Brainstorming"
    },
    nextLesson: {
      path: "/projetos-interface/aula-17",
      title: "Prototipação de Papel"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation sections={sections} {...lessonNavigation} />
      
      <main className="pt-16">
        <HeroSection />
        <FidelidadeSection />
        <TiposSection />
        <AtividadeSection />
      </main>
    </div>
  );
};

export default Aula16;
