const PUBLISHED_BASE_URL = "https://mestradenisexavier.lovable.app";

/**
 * Monta uma URL pública absoluta para compartilhamento (QR Codes, links).
 * - Em localhost/preview: aponta para o domínio publicado (sem prefixo de base).
 * - No GitHub Pages: mantém o prefixo /mestradenisexavier/.
 */
export const buildPublicUrl = (path: string) => {
  const clean = path.startsWith("/") ? path : `/${path}`;

  if (typeof window === "undefined") return `${PUBLISHED_BASE_URL}${clean}`;

  const { origin, hostname } = window.location;

  if (hostname.endsWith("github.io")) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    return `${origin}${base}${clean}`;
  }

  if (hostname === "localhost" || hostname.includes("-preview--") || hostname.includes("lovableproject.com")) {
    return `${PUBLISHED_BASE_URL}${clean}`;
  }

  return `${origin}${clean}`;
};
