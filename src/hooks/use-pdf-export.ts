import { useCallback, useState } from "react";
import html2pdf from "html2pdf.js";

interface UsePdfExportOptions {
  filename?: string;
  margin?: number;
}

export const usePdfExport = (options?: UsePdfExportOptions) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const exportToPdf = useCallback(async () => {
    setIsGenerating(true);
    
    try {
      // Add print styles temporarily
      const styleSheet = document.createElement("style");
      styleSheet.id = "pdf-print-styles";
      styleSheet.textContent = `
        .pdf-export-container * {
          color: #1a1a2e !important;
          background: white !important;
        }
        .pdf-export-container {
          background: white !important;
          padding: 20px !important;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }
        .pdf-export-container h1,
        .pdf-export-container h2,
        .pdf-export-container h3,
        .pdf-export-container h4 {
          color: #1a1a2e !important;
          margin-bottom: 16px !important;
          page-break-after: avoid !important;
        }
        .pdf-export-container h1 { font-size: 28px !important; }
        .pdf-export-container h2 { font-size: 22px !important; }
        .pdf-export-container h3 { font-size: 18px !important; }
        .pdf-export-container p,
        .pdf-export-container li,
        .pdf-export-container span {
          color: #374151 !important;
          font-size: 14px !important;
          line-height: 1.6 !important;
        }
        .pdf-export-container section {
          page-break-inside: avoid !important;
          margin-bottom: 24px !important;
          padding: 16px !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 8px !important;
        }
        .pdf-export-container img {
          max-width: 100% !important;
          height: auto !important;
        }
        .pdf-export-container .gradient-text,
        .pdf-export-container [class*="bg-gradient"] {
          background: none !important;
          -webkit-background-clip: unset !important;
          -webkit-text-fill-color: #1a1a2e !important;
        }
        .pdf-export-container [class*="text-primary"] {
          color: #6366f1 !important;
        }
        .pdf-export-container [class*="text-muted"] {
          color: #6b7280 !important;
        }
        .pdf-export-container svg {
          color: #6366f1 !important;
        }
      `;
      document.head.appendChild(styleSheet);

      // Get the main content element
      const element = document.querySelector("main");
      if (!element) {
        throw new Error("No main element found");
      }
      
      // Clone the element
      const clone = element.cloneNode(true) as HTMLElement;
      
      // Remove navigation elements, buttons, and interactive elements from clone
      clone.querySelectorAll("nav, button, .no-print, [data-no-print], input, video, iframe").forEach((el) => el.remove());
      
      // Create a wrapper with print-optimized styles
      const wrapper = document.createElement("div");
      wrapper.className = "pdf-export-container";
      wrapper.style.cssText = `
        width: 210mm;
        min-height: 297mm;
        padding: 15mm;
        background: white;
        color: #1a1a2e;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-sizing: border-box;
      `;
      
      // Process the clone to make it print-friendly
      clone.style.cssText = `
        background: white !important;
        color: #1a1a2e !important;
        padding: 0 !important;
        margin: 0 !important;
      `;
      
      // Fix all elements with dark backgrounds
      clone.querySelectorAll("*").forEach((el) => {
        const element = el as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        
        // Reset backgrounds that are too dark
        if (computedStyle.backgroundColor && computedStyle.backgroundColor !== "rgba(0, 0, 0, 0)") {
          const rgb = computedStyle.backgroundColor.match(/\d+/g);
          if (rgb) {
            const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
            if (brightness < 128) {
              element.style.backgroundColor = "#f8fafc";
              element.style.color = "#1a1a2e";
            }
          }
        }
        
        // Fix text colors
        if (computedStyle.color) {
          const rgb = computedStyle.color.match(/\d+/g);
          if (rgb) {
            const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
            if (brightness > 200) {
              element.style.color = "#1a1a2e";
            }
          }
        }
        
        // Remove animations and transitions
        element.style.animation = "none";
        element.style.transition = "none";
        element.style.transform = "none";
      });
      
      wrapper.appendChild(clone);
      
      // Create container off-screen
      const container = document.createElement("div");
      container.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: 210mm;
        background: white;
        z-index: -1;
      `;
      container.appendChild(wrapper);
      document.body.appendChild(container);

      // Wait for styles to apply
      await new Promise(resolve => setTimeout(resolve, 500));

      const opt = {
        margin: [10, 10, 10, 10],
        filename: options?.filename ?? "aula.pdf",
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          windowWidth: 794, // A4 width in pixels at 96 DPI
          windowHeight: 1123, // A4 height in pixels at 96 DPI
        },
        jsPDF: { 
          unit: "mm", 
          format: "a4", 
          orientation: "portrait" as const
        },
        pagebreak: { 
          mode: ["avoid-all", "css", "legacy"],
          before: ".page-break-before",
          after: ".page-break-after",
          avoid: ["section", "h1", "h2", "h3", "h4", ".card", ".rounded-2xl"]
        },
      };

      await html2pdf().set(opt).from(wrapper).save();
      
      // Clean up
      document.body.removeChild(container);
      document.head.removeChild(styleSheet);
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Clean up on error
      const style = document.getElementById("pdf-print-styles");
      if (style) style.remove();
    } finally {
      setIsGenerating(false);
    }
  }, [options]);

  return { exportToPdf, isGenerating };
};
