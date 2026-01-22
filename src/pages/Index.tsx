import HeroSection from "@/components/HeroSection";
import CrisisSection from "@/components/CrisisSection";
import MarshmallowSection from "@/components/MarshmallowSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="relative" style={{ background: "var(--gradient-hero)" }}>
      <Navigation />
      <HeroSection />
      <CrisisSection />
      <MarshmallowSection />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/30">
        <p className="text-muted-foreground">
          Engenharia de Software I • 2026
        </p>
      </footer>
    </main>
  );
};

export default Index;
