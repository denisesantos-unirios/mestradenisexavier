import LessonNavigation from "@/components/LessonNavigation";
import PdfExportButton from "@/components/PdfExportButton";
import LessonQRCode from "@/components/LessonQRCode";
import HeroSection from "@/components/engenharia-software-2/aula4/HeroSection";
import RoteiroSection from "@/components/engenharia-software-2/aula4/RoteiroSection";
import IntroducaoSection from "@/components/engenharia-software-2/aula4/IntroducaoSection";
import OrigemNiveisSection from "@/components/engenharia-software-2/aula4/OrigemNiveisSection";
import TiposRequisitosSection from "@/components/engenharia-software-2/aula4/TiposRequisitosSection";
import ProcessoERSection from "@/components/engenharia-software-2/aula4/ProcessoERSection";
import EtapasMoscowSection from "@/components/engenharia-software-2/aula4/EtapasMoscowSection";
import TecnicasLevantamentoSection from "@/components/engenharia-software-2/aula4/TecnicasLevantamentoSection";
import BomRequisitoSection from "@/components/engenharia-software-2/aula4/BomRequisitoSection";
import UserStoriesSection from "@/components/engenharia-software-2/aula4/UserStoriesSection";
import EstudoCasoSection from "@/components/engenharia-software-2/aula4/EstudoCasoSection";
import EnviarFerramentasSection from "@/components/engenharia-software-2/aula4/EnviarFerramentasSection";
import AtividadeEstudoCasoSection from "@/components/engenharia-software-2/aula4/AtividadeEstudoCasoSection";

const sections = [
  { id: "hero", title: "Início" },
  { id: "roteiro", title: "Roteiro da Aula" },
  { id: "introducao", title: "1. Contexto" },
  { id: "origem", title: "2. Origem e Níveis" },
  { id: "tipos", title: "3. Tipos de Requisitos" },
  { id: "processo", title: "4. Processo ER" },
  { id: "etapas", title: "5. Etapas e MoSCoW" },
  { id: "tecnicas", title: "6. Técnicas" },
  { id: "bom-requisito", title: "7. Bom Requisito" },
  { id: "user-stories", title: "8. User Stories e Personas" },
  { id: "estudo", title: "9. Estudo de Caso" },
  { id: "atividade", title: "10. Atividade" }
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

        <div id="roteiro">
          <RoteiroSection />
        </div>

        <div id="introducao">
          <IntroducaoSection />
        </div>

        <div id="origem">
          <OrigemNiveisSection />
        </div>

        <div id="tipos">
          <TiposRequisitosSection />
        </div>

        <div id="processo">
          <ProcessoERSection />
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

        <div id="ferramentas">
          <EnviarFerramentasSection />
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
