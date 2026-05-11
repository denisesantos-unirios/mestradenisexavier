import { FileText, Loader2 } from "lucide-react";
import { usePdfExport } from "@/hooks/use-pdf-export";

interface PdfExportButtonProps {
  filename: string;
  className?: string;
}

const PdfExportButton = ({ filename, className = "" }: PdfExportButtonProps) => {
  const { exportToPdf, isGenerating } = usePdfExport({ filename });

  return (
    <button
      onClick={exportToPdf}
      disabled={isGenerating}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50 ${className}`}
      title="Gerar PDF da aula"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="hidden sm:inline">Gerando...</span>
        </>
      ) : (
        <>
          <FileText className="w-5 h-5" />
          <span className="hidden sm:inline">Gerar PDF</span>
        </>
      )}
    </button>
  );
};

export default PdfExportButton;
