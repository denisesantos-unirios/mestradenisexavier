import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  value: string | null | undefined;
  alt?: string;
  className?: string;
}

// Accepts either a bare storage path (new format) or a legacy full public URL
// pointing at question-images. Returns a short-lived signed URL for private access.
const QuestionImage = ({ value, alt = "Imagem da questão", className }: Props) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!value) {
      setSrc(null);
      return;
    }
    const path = value.includes("/question-images/")
      ? value.split("/question-images/")[1]
      : value;
    supabase.storage
      .from("question-images")
      .createSignedUrl(path, 3600)
      .then(({ data }) => {
        if (!cancelled) setSrc(data?.signedUrl ?? null);
      });
    return () => {
      cancelled = true;
    };
  }, [value]);

  if (!src) return null;
  return <img src={src} alt={alt} className={className} />;
};

export default QuestionImage;
