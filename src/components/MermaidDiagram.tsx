import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    primaryColor: "#a855f7",
    primaryTextColor: "#f5f3ff",
    primaryBorderColor: "#a855f7",
    lineColor: "#ec4899",
    secondaryColor: "#1e1b4b",
    tertiaryColor: "#0f172a",
    background: "transparent",
    mainBkg: "#1e1b4b",
    nodeBorder: "#a855f7",
    classText: "#f5f3ff",
  },
  securityLevel: "loose",
  fontFamily: "ui-monospace, monospace",
});

interface MermaidDiagramProps {
  chart: string;
  id?: string;
  className?: string;
}

const MermaidDiagram = ({ chart, id, className = "" }: MermaidDiagramProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const diagramId = useRef(id || `mermaid-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    let cancelled = false;
    mermaid
      .render(diagramId.current, chart)
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((err) => {
        console.error("Mermaid render error:", err);
        if (!cancelled) setSvg(`<pre class="text-red-400 text-xs">${String(err)}</pre>`);
      });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <div
      ref={ref}
      className={`mermaid-container w-full overflow-x-auto flex justify-center [&_svg]:max-w-full [&_svg]:h-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
