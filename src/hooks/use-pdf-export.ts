import { useCallback, useState } from "react";
import html2pdf from "html2pdf.js";

interface UsePdfExportOptions {
  filename?: string;
  margin?: number;
  pagebreak?: { mode: string[] };
}

export const usePdfExport = (options?: UsePdfExportOptions) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const exportToPdf = useCallback(async () => {
    setIsGenerating(true);
    
    try {
      // Get the main content element
      const element = document.querySelector("main") || document.body;
      
      // Clone the element to avoid modifying the original
      const clone = element.cloneNode(true) as HTMLElement;
      
      // Remove navigation elements from clone
      clone.querySelectorAll("nav, button, .no-print").forEach((el) => el.remove());
      
      // Create a temporary container
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.left = "-9999px";
      container.style.top = "0";
      container.style.width = "210mm"; // A4 width
      container.appendChild(clone);
      document.body.appendChild(container);

      const opt = {
        margin: options?.margin ?? 10,
        filename: options?.filename ?? "aula.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
        },
        jsPDF: { 
          unit: "mm", 
          format: "a4", 
          orientation: "portrait" 
        },
        pagebreak: options?.pagebreak ?? { mode: ["avoid-all", "css", "legacy"] },
      };

      await html2pdf().set(opt).from(clone).save();
      
      // Clean up
      document.body.removeChild(container);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  }, [options]);

  return { exportToPdf, isGenerating };
};
