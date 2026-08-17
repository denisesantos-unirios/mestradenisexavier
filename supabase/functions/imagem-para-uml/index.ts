// Edge function: converte a imagem de uma modelagem conceitual em diagrama de classes UML (Mermaid)
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `Você é especialista em Engenharia de Software, modelagem de dados e UML.
Receberá a imagem de uma modelagem conceitual (diagrama Entidade-Relacionamento, esboço em papel, quadro branco ou modelo de domínio).

TAREFA 1 — CONVERSÃO: converter fielmente essa modelagem em um DIAGRAMA DE CLASSES UML na sintaxe Mermaid (classDiagram).
- Cada entidade vira uma classe; atributos viram atributos tipados (+nome: String).
- Identificadores (PK) viram atributos com tipo adequado (ex.: +id: UUID) e comentário «PK»; chaves estrangeiras com «FK».
- Relacionamentos viram associações com multiplicidade Mermaid: "1" --> "*", "1" *-- "*" (composição), "<|--" (herança).
- Rotule as associações com o nome do relacionamento quando existir na imagem.
- Não invente entidades que não estejam na imagem.
- Use nomes em português, sem acentos nos identificadores de classe.

TAREFA 2 — AUDITORIA DO MODELO: analise criticamente a modelagem da imagem e identifique ERROS e RISCOS, especialmente:
- CARDINALIDADE: multiplicidades ausentes, ambíguas, incoerentes (ex.: 1:1 onde deveria ser 1:N), relacionamentos N:N sem entidade associativa, opcionalidade (0..1 vs 1) mal definida.
- CHAVE PRIMÁRIA: entidade sem PK, PK com atributo mutável/sensível (CPF, e-mail, nome), PK composta desnecessária ou faltando em entidade associativa.
- CHAVE ESTRANGEIRA: FK ausente no lado correto, FK do lado errado (ex.: FK no lado "1" de um 1:N), FK duplicada/redundante, FK apontando para atributo que não é PK, ciclos de dependência, ausência de regra de exclusão (cascade/restrict).
- OUTROS: atributos multivalorados, redundância/normalização (2FN/3FN), entidades sem relacionamento, nomes inconsistentes.
Se algo não for legível na imagem, registre como severidade "aviso" dizendo o que precisa ser confirmado. Se não houver erro em uma categoria, não invente.

TAREFA 3 — CORREÇÃO: gere também "mermaidCorrigido": versão do diagrama já com as correções aplicadas (cardinalidades corretas, PKs, FKs e entidades associativas necessárias). Se nada mudar, repita o mermaid original.

Responda SOMENTE em JSON válido, sem markdown, no formato:
{"titulo":"...","mermaid":"classDiagram\\n  class X {...}","mermaidCorrigido":"classDiagram\\n ...","entidades":["..."],"observacoes":["..."],
 "problemas":[{"categoria":"cardinalidade|chave primaria|chave estrangeira|normalizacao|outros","severidade":"erro|aviso|ok","elemento":"Entidade ou relacionamento afetado","descricao":"o que está errado","correcao":"como corrigir"}],
 "resumo":{"erros":0,"avisos":0,"veredito":"frase curta sobre a qualidade do modelo"}}`;

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
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Converta esta modelagem conceitual em diagrama de classes UML (Mermaid) e faça a auditoria de cardinalidades, chaves primárias e chaves estrangeiras.${observacao ? ` Contexto adicional do professor: ${observacao}` : ""}`,
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
      parsed = { titulo: "Diagrama de Classes", mermaid: (m?.[1] ?? limpo).trim(), entidades: [], observacoes: [], problemas: [] };
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
