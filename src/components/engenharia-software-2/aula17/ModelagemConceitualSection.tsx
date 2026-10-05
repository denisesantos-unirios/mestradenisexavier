type Node = { id: string; label: string; x: number; y: number };

const entities: Node[] = [
  { id: "universidade", label: "Universidade", x: 130, y: 110 },
  { id: "departamento", label: "Departamento", x: 550, y: 110 },
  { id: "disciplina", label: "Disciplina", x: 970, y: 110 },
  { id: "professor", label: "Professor", x: 550, y: 350 },
  { id: "turma", label: "Turma", x: 970, y: 350 },
  { id: "pessoa", label: "Pessoa", x: 130, y: 350 },
  { id: "endereco", label: "Endereço", x: 130, y: 620 },
  { id: "aluno", label: "Aluno", x: 550, y: 620 },
  { id: "historico", label: "Histórico Escolar", x: 970, y: 810 },
];

const relationships = [
  { label: "organiza", x: 340, y: 110, from: [215, 110], to: [465, 110], a: "1", b: "1..N" },
  { label: "contém", x: 760, y: 110, from: [635, 110], to: [885, 110], a: "1", b: "1..N" },
  { label: "possui", x: 550, y: 230, from: [550, 136], to: [550, 324], a: "1", b: "1..N" },
  { label: "oferta", x: 970, y: 230, from: [970, 136], to: [970, 324], a: "1", b: "0..N" },
  { label: "ministra", x: 760, y: 350, from: [635, 350], to: [885, 350], a: "1", b: "0..N" },
  { label: "reside", x: 130, y: 485, from: [130, 376], to: [130, 594], a: "1", b: "1" },
  { label: "Matrícula", x: 970, y: 620, from: [635, 620], to: [970, 376], a: "0..N", b: "0..N", associative: true },
  { label: "possui", x: 550, y: 810, from: [550, 646], to: [885, 810], a: "1", b: "1" },
];

const attributes = [
  { owner: "universidade", label: "cnpj", x: 65, y: 35, key: true },
  { owner: "universidade", label: "nome", x: 220, y: 35 },
  { owner: "departamento", label: "sigla", x: 470, y: 35, key: true },
  { owner: "departamento", label: "nome", x: 630, y: 35 },
  { owner: "disciplina", label: "código", x: 890, y: 35, key: true },
  { owner: "disciplina", label: "nome", x: 1060, y: 35 },
  { owner: "disciplina", label: "cargaHorária", x: 1090, y: 180 },
  { owner: "pessoa", label: "cpf", x: 60, y: 255, key: true },
  { owner: "pessoa", label: "nome", x: 210, y: 255 },
  { owner: "pessoa", label: "email", x: 50, y: 420 },
  { owner: "professor", label: "siape", x: 470, y: 435, key: true },
  { owner: "professor", label: "titulação", x: 635, y: 435 },
  { owner: "turma", label: "semestre", x: 1090, y: 430 },
  { owner: "turma", label: "vagas", x: 1090, y: 505 },
  { owner: "aluno", label: "matrícula", x: 465, y: 710, key: true },
  { owner: "aluno", label: "coeficiente", x: 645, y: 710 },
  { owner: "endereco", label: "rua", x: 55, y: 710 },
  { owner: "endereco", label: "número", x: 215, y: 710 },
  { owner: "endereco", label: "cidade", x: 130, y: 790 },
  { owner: "historico", label: "dataEmissão", x: 1060, y: 890 },
];

const comparisons = [
  ["Entidade → classe", "Aluno, Professor, Turma, Disciplina", "Os conceitos do domínio tornam-se classes com atributos e operações."],
  ["Atributo → atributo da classe", "nome, cpf, código, semestre", "O modelo conceitual não define tipos de programação; a UML acrescenta String, Integer, Date e visibilidade (+, −, #)."],
  ["Relacionamento → associação", "Disciplina oferta Turma; Professor ministra Turma", "O losango de Chen vira uma linha entre classes; as multiplicidades são mantidas."],
  ["N:N → associação ou classe associativa", "Aluno ↔ Matrícula ↔ Turma", "Um aluno pode cursar várias turmas e uma turma pode receber vários alunos. Na UML, usa-se 0..* nos dois extremos. Se a matrícula tiver data, situação ou nota, pode virar uma classe associativa Matrícula."],
  ["Especialização → generalização", "Pessoa → Aluno / Professor", "No modelo conceitual estendido, o triângulo ISA representa subtipos. Na UML, o triângulo vazio aponta para Pessoa, a superclasse."],
  ["Todo–parte → agregação / composição", "Universidade–Departamento; Departamento–Disciplina; Aluno–Histórico", "Chen registra os vínculos. A UML explicita as regras deste cenário: agregação para departamentos realocáveis; composição para disciplinas e histórico com ciclo de vida atrelado ao todo."],
  ["Comportamentos e serviços → elementos de software", "Autenticavel, SistemaPagamento, RelatorioFinanceiro", "Não são entidades persistentes deste recorte conceitual. Entram na UML como interface, serviço externo e classe de relatório, com operações e dependências."],
];

const ModelagemConceitualSection = () => (
  <div className="mb-12 space-y-6">
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-3">Modelagem Conceitual — Sistema Acadêmico</h3>
      <p className="text-muted-foreground leading-relaxed">
        Antes das classes, identificamos os conceitos, seus atributos e os vínculos do mesmo enunciado.
        O modelo abaixo usa <strong className="text-foreground">Peter Chen</strong>, com especialização do modelo entidade–relacionamento estendido:
        retângulo = entidade; losango = relacionamento; elipse = atributo; atributo sublinhado = chave;
        losango dentro de retângulo = entidade associativa para N:N. O triângulo ISA indica “é um”.
      </p>
    </div>
    <figure className="border border-border rounded-lg bg-background p-3 overflow-x-auto">
      <svg viewBox="0 0 1200 940" role="img" aria-labelledby="academico-chen-title academico-chen-desc" className="w-full min-w-[850px] h-auto text-foreground">
        <title id="academico-chen-title">Modelo conceitual de Peter Chen do Sistema Acadêmico</title>
        <desc id="academico-chen-desc">Universidade organiza departamentos; departamento contém disciplinas e possui professores; disciplina oferta turmas; professor ministra turmas; aluno participa de turmas pela entidade associativa Matrícula; Pessoa especializa-se em Aluno e Professor, reside em Endereço, e Aluno possui Histórico Escolar.</desc>
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          {relationships.map((r) => {
            const vertical = r.from[0] === r.x && r.to[0] === r.x;
            const first = vertical ? [r.x, r.y - 32] : [r.x - 62, r.y];
            const second = vertical || r.associative ? [r.x, r.y + (r.associative ? -38 : 32)] : [r.x + 62, r.y];
            // The historical record's relationship has an elbow from Aluno.
            return <g key={`${r.label}-${r.x}-${r.y}`}>
              <path d={`M ${r.from.join(" ")} ${r.y === 810 ? `V ${r.y}` : ""} L ${first.join(" ")}`} />
              <path d={`M ${second.join(" ")} L ${r.to.join(" ")}`} />
            </g>;
          })}
          <path d="M 215 350 H 325 M 395 350 H 465 M 360 380 V 620 H 465" />
          {attributes.map((a) => {
            const owner = entities.find((e) => e.id === a.owner);
            if (!owner) return null;
            return <line key={`${a.owner}-${a.label}`} x1={owner.x} y1={owner.y} x2={a.x} y2={a.y} />;
          })}
        </g>
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          {relationships.map((r) => {
            const vertical = r.from[0] === r.x && r.to[0] === r.x;
            return <g key={`${r.label}-${r.x}-${r.y}`}>
              {r.associative && <rect x={r.x - 70} y={r.y - 38} width="140" height="76" className="fill-background stroke-primary" />}
              <polygon points={`${r.x - 62},${r.y} ${r.x},${r.y - 32} ${r.x + 62},${r.y} ${r.x},${r.y + 32}`} className="fill-background stroke-primary" />
              <text x={r.x} y={r.y + 5} textAnchor="middle" stroke="none" className="fill-foreground text-[14px]">{r.label}</text>
              <text x={vertical ? r.x + 15 : r.from[0] + 24} y={vertical ? r.from[1] + 24 : r.from[1] - 12} stroke="none" className="fill-foreground text-[13px]">{r.a}</text>
              <text x={vertical || r.associative ? r.to[0] + 15 : r.to[0] - 45} y={vertical || r.associative ? r.to[1] - 18 : r.to[1] - 12} stroke="none" className="fill-foreground text-[13px]">{r.b}</text>
            </g>;
          })}
          <polygon points="325,320 325,380 395,350" className="fill-background stroke-primary" />
          <text x="344" y="355" stroke="none" className="fill-foreground text-[14px]">ISA</text>
          {entities.map((e) => <g key={e.id}>
            <rect x={e.x - 85} y={e.y - 26} width="170" height="52" className="fill-background stroke-primary" />
            <text x={e.x} y={e.y + 5} textAnchor="middle" stroke="none" className="fill-foreground text-[15px] font-semibold">{e.label}</text>
          </g>)}
          {attributes.map((a) => <g key={`${a.owner}-${a.label}`}>
            <ellipse cx={a.x} cy={a.y} rx="60" ry="23" className="fill-background stroke-muted-foreground" />
            <text x={a.x} y={a.y + 5} textAnchor="middle" stroke="none" textDecoration={a.key ? "underline" : undefined} className="fill-foreground text-[13px]">{a.label}</text>
          </g>)}
        </g>
      </svg>
      <figcaption className="text-sm text-muted-foreground mt-3">
        1:1 — Pessoa–Endereço e Aluno–Histórico; 1:N — Universidade–Departamento, Departamento–Disciplina,
        Departamento–Professor, Disciplina–Turma e Professor–Turma; N:N — Aluno–Turma, representado por Matrícula.
        “0..N” admite nenhuma ocorrência; “1..N” exige pelo menos uma.
      </figcaption>
    </figure>
    <div className="border-l-4 border-primary pl-5 space-y-2 text-sm text-muted-foreground">
      <h4 className="font-bold text-foreground">Hipóteses didáticas do mesmo cenário</h4>
      <p>Os identificadores naturais sugeridos são CNPJ, sigla do departamento, código da disciplina, CPF, matrícula do aluno e SIAPE. A sigla é considerada única nesta universidade. Aluno e Professor herdam CPF, nome e email de Pessoa.</p>
      <p>Turma é identificada no domínio pela disciplina, semestre e um número de turma; semestre sozinho não é uma chave. Endereço é tratado como um valor da pessoa e o Histórico é identificado pelo aluno. Esses detalhes podem ser refinados no projeto lógico, sem criar chaves artificiais nesta etapa.</p>
      <p>“Matrícula” (entidade associativa) registra o vínculo Aluno–Turma; não é o mesmo conceito que o atributo matrícula, que identifica o aluno. As regras de exclusão de disciplinas e histórico são hipóteses deste exercício, não recomendações para um sistema acadêmico real.</p>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-foreground mb-4">Do conceitual ao diagrama de classes</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border text-left">
            <th className="p-3 text-foreground">Transformação</th>
            <th className="p-3 text-foreground">No Sistema Acadêmico</th>
            <th className="p-3 text-foreground">Comparação com UML</th>
          </tr></thead>
          <tbody>{comparisons.map(([rule, example, explanation]) => <tr key={rule} className="border-b border-border">
            <td className="p-3 font-semibold text-foreground align-top">{rule}</td>
            <td className="p-3 text-muted-foreground align-top">{example}</td>
            <td className="p-3 text-muted-foreground align-top">{explanation}</td>
          </tr>)}</tbody>
        </table>
      </div>
      <p className="mt-4 text-muted-foreground"><strong className="text-foreground">Exemplo:</strong> Aluno tem matrícula e coeficiente no conceitual. Na UML, esses atributos recebem tipos e visibilidade, e a classe ganha a operação matricularDisciplina(). O vínculo com Turma permanece N:N, mas passa a usar a notação de associação da UML.</p>
    </div>
  </div>
);

export default ModelagemConceitualSection;