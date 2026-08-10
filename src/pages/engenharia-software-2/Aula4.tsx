import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula4/HeroSection";
import IntroducaoSection from "@/components/engenharia-software-2/aula4/IntroducaoSection";
import ProcessoERSection from "@/components/engenharia-software-2/aula4/ProcessoERSection";
import OrigemNiveisSection from "@/components/engenharia-software-2/aula4/OrigemNiveisSection";
import TiposRequisitosSection from "@/components/engenharia-software-2/aula4/TiposRequisitosSection";
import EtapasMoscowSection from "@/components/engenharia-software-2/aula4/EtapasMoscowSection";
import TecnicasLevantamentoSection from "@/components/engenharia-software-2/aula4/TecnicasLevantamentoSection";
import BomRequisitoSection from "@/components/engenharia-software-2/aula4/BomRequisitoSection";
import UserStoriesSection from "@/components/engenharia-software-2/aula4/UserStoriesSection";
import EstudoCasoSection from "@/components/engenharia-software-2/aula4/EstudoCasoSection";
import AtividadeEstudoCasoSection from "@/components/engenharia-software-2/aula4/AtividadeEstudoCasoSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "introducao", title: "Contexto" },
  { id: "processo", title: "Processo ER" },
  { id: "origem", title: "Origem e Níveis" },
  { id: "tipos", title: "Tipos de Requisitos" },
  { id: "etapas", title: "5 Etapas e MoSCoW" },
  { id: "tecnicas", title: "Técnicas" },
  { id: "bom-requisito", title: "Bom Requisito" },
  { id: "user-stories", title: "User Stories e Personas" },
  { id: "estudo", title: "Estudo de Caso" },
  { id: "atividade", title: "Atividade" }
];

const Aula4 = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "var(--gradient-hero)" }}>
      <LessonNavigation 
        sections={sections} 
        title="Aula 4 - Engenharia de Requisitos"
        course="Engenharia de Software II"
      />
      
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
          <LessonQRCode />
        </div>

        <div id="introducao">
          <IntroducaoSection />
        </div>

        <div id="processo">
          <ProcessoERSection />
        </div>

        <div id="origem">
          <OrigemNiveisSection />
        </div>
        
        <div id="tipos">
          <TiposRequisitosSection />
        </div>

        <div id="etapas">
          <EtapasMoscowSection />
        </div>

        <div id="tecnicas">
          <TecnicasLevantamentoSection />
        </div>

        <div id="bom-requisito">
          <BomRequisitoSection />
        </div>

        <div id="user-stories">
          <UserStoriesSection />
        </div>
        
        <div id="estudo">
          <EstudoCasoSection />
        </div>

        <div id="atividade">
          <AtividadeEstudoCasoSection />
        </div>
      </div>
      <PdfExportButton filename="ES2_Aula-4_Engenharia-Requisitos.pdf" />
    </main>
  );
};

export default Aula4;
