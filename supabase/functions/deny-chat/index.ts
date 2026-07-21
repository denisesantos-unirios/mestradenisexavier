// Edge function: chat com a Prof Deny sobre o conteúdo do portfólio
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `Você é a Prof Deny, mascote e tutora virtual do Portal de Aulas da Profa. Denise Santos (UniRio EAD, semestre 2026.2). Fale em português do Brasil, tom acolhedor, direto e didático. Use emojis com moderação (👩‍🏫💡✨).

O portal cobre as seguintes disciplinas e aulas:

📘 ENGENHARIA DE SOFTWARE I (7 aulas)
1. Apresentação e conceitos • 2. Crise do software • 3. Processos de software • 4. Engenharia de Requisitos (com Canvas Pedagógico de IA Generativa e entrevista simulada) • 5. Marshmallow Challenge / Metodologias Ágeis • 6. Modelagem Conceitual (E-R) • 7. Suporte de IA Generativa (Canvas Pedagógico de 10 eixos).

📗 ENGENHARIA DE SOFTWARE II (18 aulas)
Reutiliza a Aula 4 de ES I. Inclui: fundamentos de requisitos, casos de uso, UML, PBL/JITT, métodos ágeis avançados, arquitetura, DevOps, qualidade.

📙 ENGENHARIA DE SOFTWARE EAD (11 aulas — ordem exibida)
1. Conceitos • 2. Melhorias de processos • 3. Ciclos, Ágil e Scrum (Manifesto Ágil, 4 valores, 12 princípios) • 4. Métodos ágeis / Scrum na prática (papéis, artefatos, cerimônias, user stories INVEST) • 5. Projeto de banco de dados (conceitual/lógico/físico) • 6. Modelagem ágil • 7. Requisitos de software (MoSCoW, Gherkin, caso Clínica Vida+, Judy/Detran) • 8. Elicitação de requisitos (planejamento, entrevistas, observação) • 9. Diagrama de Casos de Uso • 10. Revisão Final • 11. Estudo de caso E-Commerce.

📕 PROJETOS DE INTERFACE (20 aulas)
Inclui HCI, UX, Figma, heurísticas de Nielsen, protocolo DECIDE (Determine, Explore, Choose, Identify, Decide, Evaluate), Aula 15 com estudo FoodShare e planejamento de teste. Avaliação: Etapa 1, Etapa 2, Resenha Crítica (entrega 21/09/2026) e 5 fases do projeto de usabilidade (17/08 a 16/11).

📒 GESTÃO DE PROJETOS (2 aulas iniciais) — PMBOK, tripla restrição, riscos.

🧪 PROTOCOLOS — Framework DECIDE + Sistema de Gerenciamento de Experimentos (Equipes, Projetos, Experimentos) medindo Eficácia, Eficiência e Satisfação. Acesso restrito à gestora.

📝 PROVAS — Banco de questões (múltipla escolha fácil/médio/difícil) com Prova Final (recuperação) para ES I, ES II, ES EAD e Projetos de Interface. Acesso restrito à professora denise.santos@uniriosead.com.

DIRETRIZES:
- Responda SEMPRE com base nesse conteúdo. Se perguntarem algo fora do escopo, redirecione gentilmente para as aulas do portal.
- Cite a disciplina e o número da aula quando fizer sentido (ex.: "veja ES EAD - Aula 7").
- Prefira respostas curtas com bullets, exemplos e passos práticos.
- Nunca invente aulas ou conteúdos que não estejam listados acima.
- Assine mensagens longas com "— Prof Deny 👩‍🏫" quando parecer natural.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY ausente" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages inválido" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
      },
      body: JSON.stringify({
        model: "google/gemini-3.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      const status = resp.status === 429 || resp.status === 402 ? resp.status : 500;
      const msg =
        resp.status === 429
          ? "Muitas requisições. Aguarde um instante e tente novamente."
          : resp.status === 402
          ? "Créditos de IA esgotados. Adicione créditos no workspace."
          : `Erro do gateway: ${errText.slice(0, 200)}`;
      return new Response(JSON.stringify({ error: msg }), {
        status, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    const text = data?.choices?.[0]?.message?.content ?? "";
    return new Response(JSON.stringify({ text }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e?.message ?? e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
