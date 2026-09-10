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
  /** Quando informado, exibe botão para baixar o diagrama em PNG com esse nome */
  downloadName?: string;
}

const MermaidDiagram = ({ chart, id, className = "", downloadName }: MermaidDiagramProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [baixando, setBaixando] = useState(false);
  const diagramId = useRef(id || `mermaid-${Math.random().toString(36).slice(2, 9)}`);

  const baixarPng = async () => {
    const svgEl = ref.current?.querySelector("svg");
    if (!svgEl) return;
    setBaixando(true);
    try {
      const clone = svgEl.cloneNode(true) as SVGSVGElement;
      const rect = svgEl.getBoundingClientRect();
      const largura = Math.max(rect.width || 0, svgEl.viewBox?.baseVal?.width || 0) || 1200;
      const altura = Math.max(rect.height || 0, svgEl.viewBox?.baseVal?.height || 0) || 800;
      clone.setAttribute("width", String(largura));
      clone.setAttribute("height", String(altura));
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");

      const fonte = new XMLSerializer().serializeToString(clone);
      const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(fonte)}`;

      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Falha ao carregar SVG"));
        img.src = url;
      });

      const escala = 2;
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(largura * escala);
      canvas.height = Math.ceil(altura * escala);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.scale(escala, escala);
      ctx.drawImage(img, 0, 0, largura, altura);

      const link = document.createElement("a");
      link.download = `${downloadName || "diagrama"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Erro ao gerar imagem do diagrama:", err);
    } finally {
      setBaixando(false);
    }
  };

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
