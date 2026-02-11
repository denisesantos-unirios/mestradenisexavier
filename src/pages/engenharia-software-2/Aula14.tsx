import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula14/HeroSection";
import WorkshopSection from "@/components/engenharia-software-2/aula14/WorkshopSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "workshop", title: "Workshop" }
];

const Aula14 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 14 - Workshop: Diagrama UC"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>
        
        <div id="workshop">
          <WorkshopSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-14_Workshop-Diagrama-UC.pdf" />
    </main>
  );
};

export default Aula14;
