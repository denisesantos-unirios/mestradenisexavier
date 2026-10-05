const entities = [
  { id: "cliente", label: "Cliente", x: 180, y: 240 },
  { id: "locacao", label: "Locação", x: 600, y: 240 },
  { id: "veiculo", label: "Veículo", x: 1020, y: 240 },
  { id: "funcionario", label: "Funcionário", x: 600, y: 610 },
  { id: "carro", label: "Carro", x: 880, y: 610 },
  { id: "moto", label: "Moto", x: 1120, y: 610 },
];

const attributes = [
  { owner: "cliente", label: "cpf", x: 85, y: 65, key: true },
  { owner: "cliente", label: "nome", x: 260, y: 65 },
  { owner: "cliente", label: "telefone", x: 85, y: 365 },
  { owner: "cliente", label: "cnh", x: 260, y: 365 },
  { owner: "locacao", label: "dataRetirada", x: 505, y: 65 },
  { owner: "locacao", label: "dataDevolucao", x: 700, y: 65 },
  { owner: "locacao", label: "kmRodados", x: 460, y: 340 },
  { owner: "veiculo", label: "placa", x: 925, y: 65, key: true },
  { owner: "veiculo", label: "marca", x: 1110, y: 65 },
  { owner: "veiculo", label: "modelo", x: 900, y: 145 },
  { owner: "veiculo", label: "valorKmRodado", x: 1110, y: 340 },
  { owner: "funcionario", label: "matrícula", x: 450, y: 735, key: true },
  { owner: "funcionario", label: "nome", x: 610, y: 780 },
  { owner: "funcionario", label: "cargo", x: 710, y: 715 },
  { owner: "carro", label: "numPortas", x: 880, y: 745 },
  { owner: "moto", label: "cilindradas", x: 1120, y: 745 },
];

const LocacaoConceitualDiagram = () => (
  <div className="space-y-5">
    <p className="text-sm text-muted-foreground leading-relaxed">
      O mesmo cenário da locadora em <strong className="text-foreground">notação de Peter Chen</strong>:
      retângulos representam entidades, losangos representam relacionamentos e elipses representam atributos.
      As chaves estão sublinhadas. A especialização do modelo estendido usa ISA para indicar que Carro e Moto são tipos de Veículo.
    </p>
    <figure className="overflow-x-auto border border-border rounded-lg bg-background p-3">
      <svg viewBox="0 0 1230 830" role="img" aria-labelledby="locadora-chen-title locadora-chen-desc" className="w-full min-w-[850px] h-auto text-foreground">
        <title id="locadora-chen-title">Modelagem conceitual de Peter Chen — Sistema de Locação de Veículos</title>
        <desc id="locadora-chen-desc">Cliente realiza locações; cada locação envolve um veículo e é registrada por um funcionário. Carro e Moto são especializações de Veículo. Um cliente, veículo ou funcionário pode estar associado a zero ou muitas locações.</desc>
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M 265 240 H 515 M 685 240 H 935 M 600 266 V 584" />
          <path d="M 1020 266 V 405 M 1020 465 V 520 H 880 V 584 M 1020 520 H 1120 V 584" />
          {attributes.map((attribute) => {
            const owner = entities.find((entity) => entity.id === attribute.owner);
            if (!owner) return null;
            return <line key={`${attribute.owner}-${attribute.label}`} x1={owner.x} y1={owner.y} x2={attribute.x} y2={attribute.y} />;
          })}
          {[{ x: 390, y: 240, label: "realiza" }, { x: 810, y: 240, label: "envolve" }, { x: 600, y: 435, label: "registra" }].map((relationship) => (
            <g key={relationship.label}>
              <polygon points={`${relationship.x - 62},${relationship.y} ${relationship.x},${relationship.y - 32} ${relationship.x + 62},${relationship.y} ${relationship.x},${relationship.y + 32}`} className="fill-background stroke-primary" />
              <text x={relationship.x} y={relationship.y + 5} textAnchor="middle" stroke="none" className="fill-foreground text-[14px]">{relationship.label}</text>
            </g>
          ))}
          <polygon points="990,465 1050,465 1020,405" className="fill-background stroke-primary" />
          <text x="1020" y="451" textAnchor="middle" stroke="none" className="fill-foreground text-[14px]">ISA</text>
          {entities.map((entity) => (
            <g key={entity.id}>
              <rect x={entity.x - 85} y={entity.y - 26} width="170" height="52" className="fill-background stroke-primary" />
              <text x={entity.x} y={entity.y + 5} textAnchor="middle" stroke="none" className="fill-foreground text-[15px] font-semibold">{entity.label}</text>
            </g>
          ))}
          {attributes.map((attribute) => (
            <g key={`${attribute.owner}-${attribute.label}`}>
              <ellipse cx={attribute.x} cy={attribute.y} rx="76" ry="24" className="fill-background stroke-muted-foreground" />
              <text x={attribute.x} y={attribute.y + 5} textAnchor="middle" stroke="none" textDecoration={attribute.key ? "underline" : undefined} className="fill-foreground text-[13px]">{attribute.label}</text>
            </g>
          ))}
        </g>
        <g className="fill-foreground text-[14px]">
          <text x="285" y="226">1</text><text x="460" y="226">0..N</text>
          <text x="710" y="226">0..N</text><text x="910" y="226">1</text>
          <text x="616" y="300">0..N</text><text x="616" y="565">1</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        Cliente–Locação, Veículo–Locação e Funcionário–Locação são vínculos 1:N: cada locação tem exatamente um cliente, um veículo e um funcionário; cada um deles pode ter zero ou muitas locações ao longo do tempo.
      </figcaption>
    </figure>
    <div className="space-y-2 text-sm text-muted-foreground">
      <h5 className="font-semibold text-foreground">Do conceitual para as classes</h5>
      <p>As seis entidades tornam-se classes. As elipses viram atributos com tipos e visibilidade; os losangos viram associações, mantendo 1 e convertendo 0..N em 0..*.</p>
      <p>ISA vira generalização: o triângulo vazio da UML aponta para Veículo. Carro e Moto herdam placa, marca, modelo e valorKmRodado.</p>
      <p>Operações como calcularValor(), calcularTotal(), finalizar() e registrarLocacao() entram no diagrama de classes, não no modelo conceitual de dados. Locação registra o evento de aluguel e seus dados; não há vínculo N:N direto neste recorte.</p>
      <p>As chaves exibidas são cpf, placa e matrícula do funcionário. A identificação própria de Locação poderá ser definida no detalhamento, sem acrescentar atributos ao enunciado desta comparação.</p>
    </div>
  </div>
);

export default LocacaoConceitualDiagram;