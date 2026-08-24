import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCog, Brain, Code2, PencilRuler, RefreshCw } from "lucide-react";

const modelos = [
  {
    icon: UserCog,
    titulo: "Modelo de Usuário",
    autor: "Criado pelo engenheiro de software",
    desc: "Estabelece o perfil dos usuários finais: idade, gênero, escolaridade, tempo de casa, nível de habilidade e receptividade ao novo sistema.",
    exemplo: "Categorizar usuários em novatos, intermitentes e frequentes.",
  },
  {
    icon: Brain,
    titulo: "Modelo Mental",
    autor: "Criado pelo usuário final",
    desc: "Imagem do sistema desenhada na mente do usuário. Quanto maior a experiência dele, mais completo é esse modelo.",
    exemplo: "Ao falar em 'venda', o usuário já pensa em nota fiscal, estoque e crédito do cliente.",
  },
  {
    icon: Code2,
    titulo: "Modelo de Implementação",
    autor: "Criado pelo desenvolvedor",
    desc: "Combina a aparência e a percepção (look and feel) da interface com as informações de apoio que a descrevem.",
    exemplo: "Telas de venda, consulta de estoque e emissão de nota fiscal.",
  },
  {
    icon: PencilRuler,
    titulo: "Modelo de Projeto",
    autor: "Criado pelo engenheiro de software",
    desc: "Realização do modelo de usuário: descreve dados, arquitetura, interfaces e componentes do software.",
    exemplo: "Wireframes e especificação de objetos e ações da interface.",
  },
];

const etapas = [
  { n: "1", t: "Análise e modelagem da interface", d: "Análise de interfaces (perfil), análise de tarefas e análise do ambiente." },
  { n: "2", t: "Projeto da interface", d: "Definição de objetos, ações, leiaute de telas, ícones, menus e textos." },
  { n: "3", t: "Construção da interface", d: "Prototipagem que permite avaliar os cenários de uso." },
  { n: "4", t: "Validação da interface", d: "Verificação junto aos usuários — pode gerar novos requisitos e reiniciar o ciclo." },
];

const ModelosUsuarioSection = () => (
  <section id="modelos-usuario" className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Os 4 <span className="text-indigo-500">Modelos</span> da Análise de Interface
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Segundo Pressman e Maxim (2016), a análise e o projeto de interface partem de quatro modelos.
          Eles frequentemente divergem entre si — o papel do projetista é conciliá-los em uma
          representação consistente.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {modelos.map((m, i) => (
          <motion.div key={m.titulo} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <Card className="h-full bg-card/50 border-border/50 hover:border-indigo-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10"><m.icon className="w-5 h-5 text-indigo-500" /></div>
                  <div>
                    <CardTitle className="text-lg">{m.titulo}</CardTitle>
                    <p className="text-xs text-muted-foreground">{m.autor}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{m.desc}</p>
                <div className="p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-sm">
                  <span className="font-medium text-indigo-500">Exemplo: </span>{m.exemplo}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quadro modelo de usuário */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <Card className="bg-card/50 border-border/50">
          <CardHeader><CardTitle>Quadro 1 — Exemplo de Modelo de Usuário</CardTitle></CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-2 pr-4">Setor</th>
                  <th className="py-2 pr-4">Nº de funcionários</th>
                  <th className="py-2 pr-4">Faixa de idade</th>
                  <th className="py-2 pr-4">Escolaridade predominante</th>
                  <th className="py-2">Tempo médio na empresa</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Vendas", "22", "24–31 anos", "Técnico", "2,5 anos"],
                  ["Compras", "2", "29–38 anos", "Superior", "8 anos"],
                  ["Direção", "1", "48 anos", "Superior", "18 anos"],
                ].map((linha) => (
                  <tr key={linha[0]} className="border-b border-border/50">
                    {linha.map((c, i) => <td key={i} className="py-2 pr-4">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-4">
              Leitura do quadro: o setor de Compras tem grande tempo de casa — provavelmente domina as
              regras do negócio e tolera interfaces mais densas; Vendas é jovem e rotativo, exigindo
              interface autoexplicativa e de rápido aprendizado.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Processo espiral */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-indigo-500" />
              O Processo em Espiral do Projeto de Interface
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {etapas.map((e) => (
                <div key={e.n} className="p-4 rounded-xl bg-muted/40 border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-500 font-bold flex items-center justify-center mb-3">{e.n}</div>
                  <p className="font-semibold mb-1">{e.t}</p>
                  <p className="text-sm text-muted-foreground">{e.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-sm text-muted-foreground">
              <strong className="text-foreground">Por que espiral?</strong> Cada validação com o usuário
              pode gerar requisitos adicionais. O ciclo se repete até que a interface seja satisfatória
              (Schach, 2011).
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {[
                "A interface contempla todas as tarefas e requisitos do usuário?",
                "Há facilidade de uso e de aprendizado satisfatórias?",
                "Os usuários concordam que a interface facilita a execução das tarefas?",
              ].map((q) => (
                <div key={q} className="p-3 rounded-lg bg-background/60 border border-border/50 text-sm">✅ {q}</div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default ModelosUsuarioSection;
