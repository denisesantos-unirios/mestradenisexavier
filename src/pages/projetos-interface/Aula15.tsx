import MainNavigation from "@/components/MainNavigation";
import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import HeroSection from "@/components/projetos-interface/aula15/HeroSection";
import TecnicasSection from "@/components/projetos-interface/aula15/TecnicasSection";
import PrincipiosSection from "@/components/projetos-interface/aula15/PrincipiosSection";
import WorkshopSection from "@/components/projetos-interface/aula15/WorkshopSection";

const Aula15 = () => {
  const sections = [
    { id: "hero", title: "Início" },
    { id: "tecnicas", title: "Técnicas" },
    { id: "principios", title: "Princípios" },
    { id: "workshop", title: "Workshop" },
  ];

  const lessonNavigation = {
    title: "Ideação e Brainstorming",
    course: "Projetos de Interface",
    currentLesson: 15,
    totalLessons: 19,
    previousLesson: {
      path: "/projetos-interface/aula-14",
      title: "Design Centrado no Usuário"
    },
    nextLesson: {
      path: "/projetos-interface/aula-16",
      title: "Fundamentos de Prototipação"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <LessonNavigation sections={sections} {...lessonNavigation} />
      
      <main className="pt-16">
        <HeroSection />
        <TecnicasSection />
        <PrincipiosSection />
        <WorkshopSection />
      </main>
      <PdfExportButton filename="Projetos-Interface_Aula-15_Ideacao.pdf" />
    </div>
  );
};

export default Aula15;
