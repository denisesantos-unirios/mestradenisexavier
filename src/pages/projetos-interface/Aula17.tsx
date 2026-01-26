import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/projetos-interface/aula17/HeroSection";
import TecnicasSection from "@/components/projetos-interface/aula17/TecnicasSection";
import TesteSection from "@/components/projetos-interface/aula17/TesteSection";
import WorkshopSection from "@/components/projetos-interface/aula17/WorkshopSection";

const Aula17 = () => {
  const sections = [
    { id: "hero", title: "Início" },
    { id: "tecnicas", title: "Técnicas" },
    { id: "teste", title: "Teste" },
    { id: "workshop", title: "Workshop" },
  ];

  const lessonNavigation = {
    title: "Prototipação de Papel",
    course: "Projetos de Interface",
    currentLesson: 17,
    totalLessons: 19,
    previousLesson: {
      path: "/projetos-interface/aula-16",
      title: "Fundamentos de Prototipação"
    },
    nextLesson: {
      path: "/projetos-interface/aula-18",
      title: "Introdução ao Figma"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation sections={sections} {...lessonNavigation} />
      
      <main className="pt-16">
        <HeroSection />
        <TecnicasSection />
        <TesteSection />
        <WorkshopSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-17_Papel.pdf" />
    </div>
  );
};

export default Aula17;
