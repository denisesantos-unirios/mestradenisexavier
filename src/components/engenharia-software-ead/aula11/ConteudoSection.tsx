import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Database, ChevronDown, CheckCircle, BookOpen, Users, Search, Layers, ArrowRight, AlertTriangle, Lightbulb, FileText } from "lucide-react";

export const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-background to-blue-950/30" />
    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8">
          <Database className="w-4 h-4" /> Aula 7 • Modelagem Conceitual de Dados
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Modelagem Conceitual</span>
          <br /><span className="text-foreground text-3xl md:text-4xl">Do problema narrativo ao DER</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Aprenda a transformar descrições de negócio em <strong>Diagramas Entidade-Relacionamento</strong> consistentes,
          aplicando as diretrizes de Mannino (2008) e a notação Pé-de-Galinha.
        </p>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#objetivos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-indigo-400 transition-colors">
          <span className="text-sm">Começar</span><ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  </section>
);

const ObjetivosSection = () => (
  <section id="objetivos" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        🎯 Objetivos de Aprendizagem
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Ao final desta aula, você será capaz de analisar requisitos de negócio e construir um modelo conceitual de dados.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: Search, title: "Analisar", desc: "Interpretar descrições narrativas de negócio para identificar entidades, atributos e relacionamentos." },
          { icon: Layers, title: "Modelar", desc: "Construir DERs consistentes utilizando a notação Pé-de-Galinha (cardinalidades min/max)." },
          { icon: CheckCircle, title: "Validar", desc: "Aplicar princípios de simplicidade e consistência, identificando partes ambíguas dos requisitos." },
        ].map((o, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="bg-indigo-500/5 border-indigo-500/20 h-full">
              <CardContent className="p-6">
                <o.icon className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="font-bold text-foreground mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground">{o.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ConceitosSection = () => (
  <section id="conceitos" className="py-20 px-6 bg-card/30">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">📘 Conceitos Fundamentais</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A modelagem conceitual é a etapa em que traduzimos a realidade do negócio em um <strong>modelo abstrato</strong>,
          independente de tecnologia de banco de dados, capaz de representar entidades, seus atributos e suas relações.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {[
          { icon: "🏛️", title: "Conceitual", desc: "Visão de alto nível, próxima do negócio. Ferramenta: DER." },
          { icon: "🗂️", title: "Lógico", desc: "Modelo relacional (tabelas, chaves), ainda independente do SGBD." },
          { icon: "💾", title: "Físico", desc: "Implementação real no SGBD (índices, tipos de dados, armazenamento)." },
          { icon: "🔁", title: "Iterativo", desc: "Refinamento contínuo com stakeholders até estabilizar requisitos." },
        ].map((n, i) => (
          <Card key={i} className="bg-card/50 border-border">
            <CardContent className="p-5 flex gap-4 items-start">
              <span className="text-3xl">{n.icon}</span>
              <div>
                <h4 className="font-bold text-foreground">{n.title}</h4>
                <p className="text-sm text-muted-foreground">{n.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground mb-2">Por que um modelo conceitual importa?</h4>
              <p className="text-sm text-muted-foreground">
                Segundo Mannino (2008), <em>"um modelo de dados fornece um elemento essencial para padronizar o vocabulário
                de uma organização, reforçar regras de negócios e assegurar a qualidade de dados adequada"</em>.
                Erros nesta etapa propagam-se por todo o ciclo de vida do software e custam caro para corrigir depois.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const DiretrizesSection = () => {
  const diretrizes = [
    { col: "Identificar tipos de entidade", como: "Procure substantivos genéricos que se repetem na narrativa (não instâncias específicas).", resultado: "Crie um tipo de entidade para cada substantivo significativo (ex.: Cliente, Pedido, Produto)." },
    { col: "Identificar chaves primárias", como: "Procure atributos que sejam estáveis, únicos e com finalidade única (números, códigos).", resultado: "Marque o atributo como PK; se não houver, considere uma chave artificial." },
    { col: "Adicionar atributos", como: "Procure substantivos que descrevem características de uma entidade (singular, valor único).", resultado: "Liste o atributo no tipo de entidade correspondente." },
    { col: "Acrescentar relacionamentos", como: "Verbos ligando substantivos já classificados como entidades.", resultado: "Crie um relacionamento entre as entidades envolvidas." },
    { col: "Cardinalidade máxima", como: "Observe número singular/plural e palavras como 'coleção', 'conjunto'.", resultado: "Use 1 ou M (muitos)." },
    { col: "Cardinalidade mínima", como: "Procure 'opcional' ou 'obrigatório'. Default: obrigatório.", resultado: "Use 0 (opcional) ou 1 (obrigatório)." },
    { col: "Simplificar o modelo", como: "Identifique entidades centrais ligadas a várias outras.", resultado: "Elimine relacionamentos redundantes via entidade central." },
  ];

  return (
    <section id="diretrizes" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🧭 Diretrizes para Análise de Problemas Narrativos
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Mannino (2008) propõe um conjunto de diretrizes para guiar o analista na construção de um DER a partir de
            descrições textuais de negócio. <strong>Princípio mestre:</strong> consistência com a descrição + simplicidade.
          </p>
        </motion.div>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-indigo-500/10">
              <tr>
                <th className="text-left p-4 font-bold text-indigo-400">Diretriz</th>
                <th className="text-left p-4 font-bold text-indigo-400">Como fazer</th>
                <th className="text-left p-4 font-bold text-indigo-400">Resultado no DER</th>
              </tr>
            </thead>
            <tbody>
              {diretrizes.map((d, i) => (
                <tr key={i} className="border-t border-border hover:bg-card/50">
                  <td className="p-4 font-semibold text-foreground">{d.col}</td>
                  <td className="p-4 text-muted-foreground">{d.como}</td>
                  <td className="p-4 text-muted-foreground">{d.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Card className="mt-8 bg-yellow-500/5 border-yellow-500/20">
          <CardContent className="p-6 flex gap-3 items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-foreground mb-1">Cuidado com armadilhas comuns</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li><strong>Coleções como atributo:</strong> "um cliente tem vários medidores" → é relacionamento, não atributo.</li>
                <li><strong>Referências entre entidades:</strong> "leitura contém número do medidor" → é relacionamento.</li>
                <li><strong>Excesso de detalhe inicial:</strong> comece simples; refine em iterações.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const NotacaoSection = () => (
  <section id="notacao" className="py-20 px-6 bg-card/30">
    <div className="max-w-6xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        🐦 Notação Pé-de-Galinha (Crow's Foot)
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Forma visual mais usada no mercado para representar cardinalidades. Cada extremidade da linha indica
        <strong> mínimo</strong> e <strong>máximo</strong> de participação.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h4 className="font-bold text-foreground mb-4">Símbolos básicos</h4>
            <div className="space-y-3">
              {[
                { sym: "│", nome: "Um (obrigatório)", desc: "Mínimo 1, máximo 1" },
                { sym: "○", nome: "Zero (opcional)", desc: "Mínimo 0" },
                { sym: "<", nome: "Muitos (pé-de-galinha)", desc: "Máximo N" },
                { sym: "│<", nome: "Um para muitos obrigatório", desc: "1..N" },
                { sym: "○<", nome: "Zero para muitos opcional", desc: "0..N" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded bg-background/50">
                  <span className="text-2xl font-mono text-indigo-400 w-12 text-center">{s.sym}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{s.nome}</p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <h4 className="font-bold text-foreground mb-4">Exemplo lido em voz alta</h4>
            <pre className="bg-background/70 rounded p-4 text-xs text-foreground overflow-x-auto mb-3">
{`CLIENTE ──│<───── PEDIDO
   1            N

"Um CLIENTE faz zero ou muitos PEDIDOS"
"Um PEDIDO pertence a exatamente um CLIENTE"`}
            </pre>
            <p className="text-sm text-muted-foreground">
              Para ler um relacionamento na notação Pé-de-Galinha: comece em uma entidade, atravesse a linha e
              traduza os símbolos do <strong>lado oposto</strong> em "zero/um/muitos".
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const EstudoCasoSection = () => (
  <section id="estudo-caso" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        💧 Estudo de Caso: Serviço de Abastecimento de Água
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Caso clássico de Mannino (2008). Aplicamos as diretrizes passo a passo para chegar a um DER consistente.
      </p>

      {/* Requisitos */}
      <Card className="mb-8 bg-card/50 border-border">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" /> Requisitos de Informação
          </h3>
          <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>
              A empresa precisa registrar <strong>consumidores</strong> (número único, nome, endereço, tipo — residencial,
              comercial, industrial). Cada consumidor pode ter um ou mais <strong>medidores</strong> instalados em seus
              imóveis.
            </p>
            <p>
              Cada <strong>medidor</strong> possui número único, endereço de instalação, tamanho e modelo. Periodicamente,
              um funcionário realiza uma <strong>leitura</strong> do medidor, registrando data, nível medido e identificação
              do funcionário responsável.
            </p>
            <p>
              A partir das leituras, são geradas <strong>contas</strong> (número único, data de envio, destinatário,
              valor) baseadas em uma <strong>taxa</strong> vigente (número, valor por m³, data de vigência).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Passo 1 - Entidades */}
      <Card className="mb-6 bg-indigo-500/5 border-indigo-500/20">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-3">Passo 1 — Identificar entidades e chaves</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Substantivos principais que se repetem: <strong>Consumidor, Medidor, Leitura, Conta, Taxa</strong>.
            Todos têm "número" único mencionado na narrativa → bons candidatos a chave primária.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { e: "Consumidor", pk: "NumCons", at: ["NomeCons", "EndCons", "TipoCons"] },
              { e: "Medidor", pk: "NumMed", at: ["EndMed", "TamanhoMed", "ModeloMed"] },
              { e: "Leitura", pk: "NumLeitura", at: ["DataLeitura", "NívelLeitura", "NumFunc"] },
              { e: "Conta", pk: "NumConta", at: ["DataEnvio", "EnviadoPara", "Valor"] },
              { e: "Taxa", pk: "NumTaxa", at: ["Valor_m3", "DataVigencia"] },
            ].map((ent, i) => (
              <div key={i} className="bg-background/60 rounded-lg border border-border overflow-hidden">
                <div className="bg-indigo-500/20 px-3 py-2 font-bold text-foreground text-sm text-center">{ent.e}</div>
                <div className="p-3 text-xs">
                  <p className="underline text-indigo-400 mb-1">{ent.pk}</p>
                  {ent.at.map((a, j) => <p key={j} className="text-muted-foreground">{a}</p>)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Passo 2 - Relacionamentos */}
      <Card className="mb-6 bg-indigo-500/5 border-indigo-500/20">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-3">Passo 2 — Identificar relacionamentos e cardinalidades</h3>
          <div className="space-y-3">
            {[
              { rel: "Consumidor — Utiliza — Medidor", card: "1:N obrigatório", just: "'um consumidor pode ter um ou mais medidores'" },
              { rel: "Medidor — LidoPor — Leitura", card: "1:N obrigatório", just: "cada leitura é de um medidor; um medidor tem várias leituras" },
              { rel: "Leitura — GeraInclusa em — Conta", card: "N:1", just: "uma conta inclui uma ou várias leituras do período" },
              { rel: "Conta — Calculada por — Taxa", card: "N:1 obrigatório", just: "cada conta usa uma taxa vigente; uma taxa vale para várias contas" },
              { rel: "Conta — EnviadaPara — Consumidor", card: "N:1 obrigatório", just: "toda conta é endereçada a um único consumidor" },
            ].map((r, i) => (
              <div key={i} className="p-3 rounded bg-background/60 border border-border">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="font-semibold text-foreground text-sm">{r.rel}</p>
                  <span className="text-xs px-2 py-1 rounded bg-indigo-500/20 text-indigo-400 font-mono">{r.card}</span>
                </div>
                <p className="text-xs text-muted-foreground italic mt-1">Justificativa: {r.just}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Passo 3 - DER textual */}
      <Card className="mb-6 bg-card/50 border-border">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-3">Passo 3 — DER resultante (visão textual)</h3>
          <pre className="bg-background/70 rounded p-4 text-xs text-foreground overflow-x-auto">
{`  CONSUMIDOR ──│<──── MEDIDOR ──│<──── LEITURA
       │                              │
       │                              │
       └──────│<────── CONTA ────>│───┘
                       │
                       │>────│  TAXA`}
          </pre>
          <p className="text-sm text-muted-foreground mt-3">
            Diagrama lido como: "um Consumidor utiliza 1..N Medidores; cada Medidor possui 1..N Leituras;
            Leituras são agrupadas em Contas; cada Conta usa exatamente uma Taxa e é enviada a um Consumidor."
          </p>
        </CardContent>
      </Card>

      {/* Passo 4 - Validação */}
      <Card className="bg-green-500/5 border-green-500/20">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" /> Passo 4 — Validar com o cliente
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Um consumidor sem medidor instalado faz sentido? (revisar cardinalidade mínima)</li>
            <li>Pode haver leitura sem conta gerada? (sim, dentro do mesmo período)</li>
            <li>Mudança de taxa: histórico de taxas anteriores deve ser preservado?</li>
            <li>Funcionário leitor deveria virar uma entidade própria?</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

const AtividadeSection = () => (
  <section id="atividade" className="py-20 px-6 bg-card/30">
    <div className="max-w-5xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
        ✍️ Atividade: Seu Próprio DER
      </motion.h2>
      <Card className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/20">
        <CardContent className="p-8">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-400" /> Cenário: Biblioteca Universitária
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            A biblioteca empresta <strong>livros</strong> (ISBN, título, ano, editora) para <strong>alunos</strong>
            (matrícula, nome, curso). Cada empréstimo registra a data de saída e a data prevista de devolução.
            Um livro pode ter vários <strong>exemplares físicos</strong> (tombamento único). Multas são geradas
            automaticamente para devoluções atrasadas.
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Liste todos os substantivos relevantes e classifique como entidade, atributo ou relacionamento.",
              "Defina as chaves primárias justificando estabilidade e unicidade.",
              "Determine cardinalidades min/max de cada relacionamento, citando palavras da narrativa.",
              "Desenhe o DER em notação Pé-de-Galinha (use draw.io, Lucidchart ou papel).",
              "Aponte 2 ambiguidades da narrativa que você levaria para uma reunião de validação.",
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded bg-background/60 border border-border">
                <span className="text-indigo-400 font-bold">{i + 1}.</span>
                <span className="text-sm text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-indigo-400 border-t border-border pt-4">
            <ArrowRight className="w-4 h-4" />
            <span>Entrega: PDF + imagem do diagrama no AVA, prazo de 7 dias.</span>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const ReferenciasSection = () => (
  <section id="referencias" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
        <BookOpen className="w-8 h-8 text-indigo-400" /> Referências
      </motion.h2>
      <Card className="bg-card/50 border-border">
        <CardContent className="p-6 space-y-3 text-sm text-muted-foreground">
          <p>MANNINO, M. V. <strong>Projeto, Desenvolvimento de Aplicações e Administração de Banco de Dados</strong>. 3. ed. Porto Alegre: AMGH/McGraw-Hill, 2014. Capítulo 6.</p>
          <p>HEUSER, C. A. <strong>Projeto de Banco de Dados</strong>. 6. ed. Porto Alegre: Bookman, 2009.</p>
          <p>ELMASRI, R.; NAVATHE, S. B. <strong>Sistemas de Banco de Dados</strong>. 7. ed. São Paulo: Pearson, 2018.</p>
          <p>CHEN, P. P. The Entity-Relationship Model: Toward a Unified View of Data. <em>ACM Transactions on Database Systems</em>, v. 1, n. 1, p. 9-36, 1976.</p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const ConteudoSection = () => (
  <>
    <ObjetivosSection />
    <ConceitosSection />
    <DiretrizesSection />
    <NotacaoSection />
    <EstudoCasoSection />
    <AtividadeSection />
    <ReferenciasSection />
  </>
);

export default ConteudoSection;
