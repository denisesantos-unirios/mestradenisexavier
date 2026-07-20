import { Presentation, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const isLessonRoute = (path: string) => /\/aula-\d+/.test(path);

const collectSlides = (): HTMLElement[] => {
  const main = document.querySelector("main") || document.body;
  // Prefer explicit <section> elements
  let nodes = Array.from(main.querySelectorAll<HTMLElement>("section"));
  if (nodes.length < 2) {
    // Fallback: top-level children of the content wrapper
    const wrapper = main.querySelector(".pt-16") || main;
    nodes = Array.from(wrapper.children).filter(
      (el) => el instanceof HTMLElement && el.offsetHeight > 40
    ) as HTMLElement[];
  }
  return nodes;
};

const PresentationMode = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);

  const enter = useCallback(async () => {
    const slides = collectSlides();
    if (slides.length === 0) return;
    setTotal(slides.length);
    setIndex(0);
    setActive(true);
    document.body.classList.add("presentation-active");
    slides[0].scrollIntoView({ behavior: "auto", block: "start" });
    try {
      await document.documentElement.requestFullscreen?.();
    } catch {
      /* ignore */
    }
  }, []);

  const exit = useCallback(() => {
    setActive(false);
    document.body.classList.remove("presentation-active");
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  const go = useCallback(
    (delta: number) => {
      const slides = collectSlides();
      if (!slides.length) return;
      setIndex((prev) => {
        const next = Math.min(Math.max(prev + delta, 0), slides.length - 1);
        slides[next]?.scrollIntoView({ behavior: "smooth", block: "start" });
        return next;
      });
    },
    []
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Escape") {
        exit();
      }
    };
    const onFs = () => {
      if (!document.fullscreenElement) exit();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFs);
    };
  }, [active, go, exit]);

  // Exit on route change
  useEffect(() => {
    if (active) exit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!isLessonRoute(location.pathname)) return null;

  return (
    <>
      {!active && (
        <button
          onClick={enter}
          className="fixed bottom-6 right-40 z-50 flex items-center gap-2 px-4 py-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:opacity-90 transition-all"
          title="Modo de Apresentação (F5)"
        >
          <Presentation className="w-5 h-5" />
          <span className="hidden sm:inline">Apresentar</span>
        </button>
      )}

      {active && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 bg-background/95 backdrop-blur border border-border rounded-full shadow-2xl px-3 py-2">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className="p-2 rounded-full hover:bg-muted disabled:opacity-40"
            title="Anterior (←)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium min-w-[54px] text-center tabular-nums">
            {index + 1} / {total}
          </span>
          <button
            onClick={() => go(1)}
            disabled={index >= total - 1}
            className="p-2 rounded-full hover:bg-muted disabled:opacity-40"
            title="Próximo (→)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={exit}
            className="p-2 rounded-full hover:bg-destructive hover:text-destructive-foreground ml-1"
            title="Sair (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
};

export default PresentationMode;
