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

      // Clone the main content
      const clone = mainElement.cloneNode(true) as HTMLElement;
      
      // Remove navigation elements, buttons, and interactive elements
      clone.querySelectorAll("nav, button, .no-print, [data-no-print], input, video, iframe, .fixed, header").forEach((el) => el.remove());
      
      // Create wrapper for PDF - append to body for proper rendering
      const wrapper = document.createElement("div");
      wrapper.id = "pdf-print-wrapper";
      wrapper.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 794px;
        padding: 40px;
        background: #ffffff !important;
        color: #1f2937 !important;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        box-sizing: border-box;
        z-index: 99999;
      `;

      // Style the clone with inline styles that override everything
      clone.style.cssText = `
        background: #ffffff !important;
        color: #1f2937 !important;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin: 0;
      `;

      // Apply print-friendly styles to all elements with inline styles
      const processElements = (element: HTMLElement) => {
        element.style.setProperty("background-color", "#ffffff", "important");
        element.style.setProperty("background-image", "none", "important");
        element.style.setProperty("color", "#1f2937", "important");
        element.style.setProperty("background-clip", "unset", "important");
        element.style.setProperty("-webkit-background-clip", "unset", "important");
        element.style.setProperty("-webkit-text-fill-color", "#1f2937", "important");
        element.style.setProperty("animation", "none", "important");
        element.style.setProperty("transition", "none", "important");
        element.style.setProperty("transform", "none", "important");
        element.style.setProperty("opacity", "1", "important");
        
        // Handle SVG elements
        if (element.tagName === 'svg' || element.closest('svg')) {
          element.style.setProperty("color", "#6366f1", "important");
        }
      };

      // Process all elements
      processElements(clone);
      clone.querySelectorAll("*").forEach((el) => {
        processElements(el as HTMLElement);
      });

      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Force layout reflow
      wrapper.getBoundingClientRect();
      
      // Wait for rendering
      await new Promise(resolve => setTimeout(resolve, 300));

      const opt = {
        margin: [15, 15, 15, 15],
        filename: options?.filename ?? "aula.pdf",
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          width: wrapper.scrollWidth,
          height: wrapper.scrollHeight,
          x: 0,
          y: 0,
          scrollX: 0,
          scrollY: 0,
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

      await html2pdf().set(opt).from(wrapper).save();
      
      // Clean up
      document.body.removeChild(wrapper);
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Clean up on error
      const wrapper = document.getElementById("pdf-print-wrapper");
      if (wrapper) wrapper.remove();
    } finally {
      setIsGenerating(false);
    }
  }, [options?.filename]);

  return { exportToPdf, isGenerating };
};
