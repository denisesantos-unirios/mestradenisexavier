import { useCallback, useState } from "react";
import html2pdf from "html2pdf.js";

interface UsePdfExportOptions {
  filename?: string;
}

export const usePdfExport = (options?: UsePdfExportOptions) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const exportToPdf = useCallback(async () => {
    setIsGenerating(true);
    
    try {
      // Get the main content element
      const mainElement = document.querySelector("main");
      if (!mainElement) {
        throw new Error("No main element found");
      }

      // Create a temporary container for PDF generation
      const container = document.createElement("div");
      container.id = "pdf-export-container";
      container.style.cssText = `
        position: absolute;
        left: -9999px;
        top: 0;
        width: 800px;
        background: #ffffff;
        color: #1f2937;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        padding: 30px;
        box-sizing: border-box;
      `;

      // Clone the main content
      const clone = mainElement.cloneNode(true) as HTMLElement;
      
      // Remove navigation elements, buttons, and interactive elements
      const elementsToRemove = clone.querySelectorAll(
        "nav, button, .no-print, [data-no-print], input, video, iframe, .fixed, header, [class*='fixed']"
      );
      elementsToRemove.forEach((el) => el.remove());
      
      // Apply print-friendly styles
      const applyPrintStyles = (element: HTMLElement) => {
        // Reset all backgrounds to white
        element.style.setProperty("background", "#ffffff", "important");
        element.style.setProperty("background-color", "#ffffff", "important");
        element.style.setProperty("background-image", "none", "important");
        
        // Set text to dark color
        element.style.setProperty("color", "#1f2937", "important");
        element.style.setProperty("-webkit-text-fill-color", "#1f2937", "important");
        element.style.setProperty("background-clip", "unset", "important");
        element.style.setProperty("-webkit-background-clip", "unset", "important");
        
        // Remove animations
        element.style.setProperty("animation", "none", "important");
        element.style.setProperty("transition", "none", "important");
        element.style.setProperty("transform", "none", "important");
        element.style.setProperty("opacity", "1", "important");
      };

      // Apply to clone and all children
      applyPrintStyles(clone);
      clone.querySelectorAll("*").forEach((el) => {
        applyPrintStyles(el as HTMLElement);
      });

      // Set clone styles
      clone.style.cssText = `
        background: #ffffff !important;
        color: #1f2937 !important;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin: 0;
      `;

      container.appendChild(clone);
      document.body.appendChild(container);

      // Wait for images and fonts to load
      await new Promise(resolve => setTimeout(resolve, 500));

      const opt = {
        margin: [10, 10, 10, 10],
        filename: options?.filename ?? "aula.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 1.5,
          useCORS: true,
          logging: true,
          backgroundColor: "#ffffff",
          windowWidth: 1200,
          scrollY: 0,
          scrollX: 0,
        },
        jsPDF: { 
          unit: "mm", 
          format: "a4", 
          orientation: "portrait" as const
        },
        pagebreak: { 
          mode: ["avoid-all", "css", "legacy"],
          avoid: ["h1", "h2", "h3", "h4", ".card", ".rounded-2xl", ".glass-card"]
        },
      };

      await html2pdf().set(opt).from(container).save();
      
      // Clean up
      document.body.removeChild(container);
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Clean up on error
      const container = document.getElementById("pdf-export-container");
      if (container) container.remove();
    } finally {
      setIsGenerating(false);
    }
  }, [options?.filename]);

  return { exportToPdf, isGenerating };
};
