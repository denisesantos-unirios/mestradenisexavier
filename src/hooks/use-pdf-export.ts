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
      // Get the main content element (some pages may have multiple <main> tags)
      const mainCandidates = Array.from(document.querySelectorAll("main"));
      const mainElement =
        mainCandidates
          .filter((el) => el && el.scrollHeight > 0)
          .sort((a, b) => {
            const aScore = a.scrollHeight + (a.textContent?.length ?? 0);
            const bScore = b.scrollHeight + (b.textContent?.length ?? 0);
            return bScore - aScore;
          })[0] ?? null;

      if (!mainElement) throw new Error("No main element found");

      // Create a temporary container for PDF generation
      const container = document.createElement("div");
      container.id = "pdf-export-container";
      // NOTE: placing the container far off-screen (e.g., left:-9999px) can cause
      // html2canvas to compute extreme offsets and end up rendering a blank canvas.
      // Keeping it at (0,0) but fully transparent avoids impacting UI while remaining
      // renderable.
      container.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        width: 800px;
        background: #ffffff;
        color: #1f2937;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        padding: 30px;
        box-sizing: border-box;
        z-index: 2147483647;
      `;

      // Clone the main content
      const clone = mainElement.cloneNode(true) as HTMLElement;

      // Remove navigation elements, buttons, and interactive elements.
      // IMPORTANT: do NOT remove generic <header> tags because many lessons wrap content in <header>,
      // which can result in blank PDFs.
      const elementsToRemove = clone.querySelectorAll(
        "nav, button, .no-print, [data-no-print], input, video, iframe, .fixed, [class*=' fixed'], [class^='fixed']"
      );
      elementsToRemove.forEach((el) => el.remove());

      // Reveal all Radix Tabs panels (forceMount keeps them in DOM but hidden)
      clone.querySelectorAll('[role="tabpanel"]').forEach((el) => {
        const panel = el as HTMLElement;
        panel.removeAttribute("hidden");
        panel.removeAttribute("data-state");
        panel.style.setProperty("display", "block", "important");
        panel.style.setProperty("visibility", "visible", "important");
        panel.style.setProperty("opacity", "1", "important");
        panel.style.marginBottom = "24px";
      });
      // Also unhide anything with data-state=inactive (TabsContent uses utility class)
      clone.querySelectorAll('[data-state="inactive"]').forEach((el) => {
        (el as HTMLElement).style.setProperty("display", "block", "important");
      });
      // Hide tab triggers list (no need in PDF, all panels are visible)
      clone.querySelectorAll('[role="tablist"]').forEach((el) => {
        (el as HTMLElement).style.setProperty("display", "none", "important");
      });

      // Apply print-friendly styles
      const applyPrintStyles = (element: HTMLElement) => {
        // Reset all backgrounds to white
        element.style.setProperty("background", "#ffffff", "important");
        element.style.setProperty("background-color", "#ffffff", "important");
        element.style.setProperty("background-image", "none", "important");

        // Remove inline style attribute background (e.g., var(--gradient-hero))
        if (element.getAttribute("style")?.includes("background")) {
          element.style.background = "#ffffff";
        }

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

        // Handle glass-card and similar semi-transparent elements
        if (
          element.classList.contains("glass-card") ||
          element.classList.contains("backdrop-blur-xl") ||
          element.classList.contains("backdrop-blur-lg")
        ) {
          element.style.setProperty("backdrop-filter", "none", "important");
          element.style.setProperty("-webkit-backdrop-filter", "none", "important");
          element.style.setProperty("border", "1px solid #e5e7eb", "important");
        }

        // Fix blur elements that create visual effects
        if (element.classList.contains("blur-3xl") || element.classList.contains("blur-2xl")) {
          element.style.setProperty("display", "none", "important");
        }
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
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Large lessons can exceed canvas limits and generate blank PDFs.
      // Dynamically reduce scale to keep the rendered canvas within safe bounds.
      const estimatedHeightPx = clone.scrollHeight || 1;
      const maxCanvasPx = 24000;
      const preferredScale = 1.5;
      const dynamicScale = Math.max(
        0.85,
        Math.min(preferredScale, maxCanvasPx / estimatedHeightPx)
      );

      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number],
        filename: options?.filename ?? "aula.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: dynamicScale,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          windowWidth: 1200,
          scrollY: 0,
          scrollX: 0,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait" as const,
        },
        pagebreak: {
          mode: ["avoid-all", "css", "legacy"],
          avoid: ["h1", "h2", "h3", "h4", ".card", ".rounded-2xl", ".glass-card"],
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
