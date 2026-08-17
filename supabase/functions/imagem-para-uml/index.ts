// Edge function: converte a imagem de uma modelagem conceitual em diagrama de classes UML (Mermaid)
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `Você é especialista em Engenharia de Software e UML.
Receberá a imagem de uma modelagem conceitual (diagrama Entidade-Relacionamento, esboço em papel, quadro branco ou modelo de domínio).
Sua tarefa: converter fielmente essa modelagem em um DIAGRAMA DE CLASSES UML na sintaxe Mermaid (classDiagram).

REGRAS:
- Cada entidade vira uma classe; atributos viram atributos tipados (+nome: String).
- Identificadores (PK) viram atributos com tipo adequado (ex.: +id: UUID).
- Relacionamentos viram associações com multiplicidade Mermaid: "1" --> "*", "1" *-- "*" (composição), "<|--" (herança).
- Rotule as associações com o nome do relacionamento quando existir na imagem.
- Adicione métodos plausíveis apenas quando forem evidentes no modelo.
- Não invente entidades que não estejam na imagem.
- Use nomes em português, sem acentos nos identificadores de classe.

Responda SOMENTE em JSON válido, sem markdown, no formato:
{"titulo":"...","mermaid":"classDiagram\\n  class X {...}","entidades":["..."],"observacoes":["..."]}`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY ausente" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { imageDataUrl, observacao } = await req.json();
    if (typeof imageDataUrl !== "string" || !imageDataUrl.startsWith("data:image/")) {
      return new Response(JSON.stringify({ error: "imageDataUrl inválido" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey },
      body: JSON.stringify({
        model: "google/gemini-3-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Converta esta modelagem conceitual em diagrama de classes UML (Mermaid).${observacao ? ` Contexto adicional do professor: ${observacao}` : ""}`,
              },
              { type: "image_url", image_url: { url: imageDataUrl } },
            ],
          },
        ],
      }),
    });

    if (!resp.ok) {
      const detalhe = await resp.text();
      const msg = resp.status === 429
        ? "Muitas solicitações. Aguarde alguns segundos e tente novamente."
        : resp.status === 402
        ? "Créditos de IA esgotados no workspace."
        : `Falha na IA (${resp.status}): ${detalhe.slice(0, 300)}`;
      return new Response(JSON.stringify({ error: msg }), {
        status: resp.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    const raw: string = data?.choices?.[0]?.message?.content ?? "";
    const limpo = raw.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();

    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(limpo);
    } catch {
      const m = limpo.match(/```mermaid([\s\S]*?)```/) || limpo.match(/(classDiagram[\s\S]*)/);
      parsed = { titulo: "Diagrama de Classes", mermaid: (m?.[1] ?? limpo).trim(), entidades: [], observacoes: [] };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
