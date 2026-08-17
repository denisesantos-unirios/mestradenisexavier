import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    primaryColor: "#eff6ff",
    primaryTextColor: "#0f172a",
    primaryBorderColor: "#2563eb",
    lineColor: "#f97316",
    secondaryColor: "#fff7ed",
    tertiaryColor: "#f8fafc",
    background: "transparent",
    mainBkg: "#eff6ff",
    nodeBorder: "#2563eb",
    classText: "#0f172a",
    textColor: "#0f172a",
    fontSize: "14px",
  },
  securityLevel: "loose",
  fontFamily: "ui-sans-serif, system-ui, sans-serif",
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
