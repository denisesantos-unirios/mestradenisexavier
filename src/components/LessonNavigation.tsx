import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, X, Home, ChevronRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface LessonNavigationProps {
  title: string;
  course: string;
  sections?: Section[];
}

const defaultSections: Section[] = [
  { id: "hero", title: "Início" },
  { id: "crise", title: "Crise do Software" },
  { id: "marshmallow", title: "Marshmallow Challenge" },
];

const LessonNavigation = ({ title, course, sections }: LessonNavigationProps) => {
  const activeSections = sections || defaultSections;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(activeSections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sectionElements = activeSections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSections]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Back Button & Breadcrumb */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <Home className="w-4 h-4" />
            </Link>
            
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">{course}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              <span className="text-foreground font-medium">{title}</span>
            </div>
          </div>

          {/* Desktop Section Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full p-1">
            {activeSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 space-y-2">
              <div className="text-xs text-muted-foreground mb-3 px-3">
                {course} • {title}
              </div>
              {activeSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default LessonNavigation;
