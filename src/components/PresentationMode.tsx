import { Presentation, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const isLessonRoute = (path: string) => /\/aula-\d+/.test(path);

// Step ~85% of viewport height per arrow so long sections are not skipped.
const STEP_RATIO = 0.85;

const getStep = () => Math.max(200, Math.floor(window.innerHeight * STEP_RATIO));

const getMaxScroll = () =>
  Math.max(
    0,
    (document.scrollingElement?.scrollHeight ?? document.body.scrollHeight) -
      window.innerHeight
  );

const computeTotal = () => Math.max(1, Math.ceil(getMaxScroll() / getStep()) + 1);

const PresentationMode = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(1);

  const enter = useCallback(async () => {
    setTotal(computeTotal());
    setIndex(0);
    setActive(true);
    document.body.classList.add("presentation-active");
    window.scrollTo({ top: 0, behavior: "auto" });
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

  const go = useCallback((delta: number) => {
    const step = getStep();
    const max = getMaxScroll();
    const current = window.scrollY;
    const target = Math.min(Math.max(current + delta * step, 0), max);
    window.scrollTo({ top: target, behavior: "smooth" });
    const newTotal = computeTotal();
    setTotal(newTotal);
    setIndex(Math.min(newTotal - 1, Math.round(target / step)));
  }, []);

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
