export interface CaseStudy {
  slug: string;
  numero: string;
  titulo: string;
  subtitulo: string;
  miniMundo: string;
  der: string;
  conceitual: string;
  classes: string;
  atividades: string;
  atividadesTitulo: string;
  casosUsoDiagrama?: string;
  requisitosFuncionais: { id: string; titulo: string; descricao: string }[];
  sql: string;
  historiasUsuario: { id: string; comoQuem: string; quero: string; paraQue: string; criterios: string[] }[];
}

export const cases: CaseStudy[] = [
  // ============ 1. PATRIMÔNIO ============
  {
    slug: "patrimonio-mobiliario",
    numero: "01",
    titulo: "Patrimônio Mobiliário",
    subtitulo: "Controle de bens, departamentos, setores e ocorrências",
    miniMundo:
      "Empresa precisa controlar bens móveis (mesas, cadeiras, computadores) distribuídos por setores e departamentos. Cada bem tem número (6 dígitos), descrição, data e valor de compra. Bens podem ser transferidos entre setores (com histórico) e sofrem ocorrências (avarias) classificadas por tipo de dano. Departamentos possuem sigla de 3 letras única e agregam vários setores.",
    der: `erDiagram
  DEPARTAMENTO ||--o{ SETOR : "possui"
  SETOR ||--o{ BEM_MOVEL : "responsavel"
  BEM_MOVEL ||--o{ OCORRENCIA : "sofre"
  TIPO_DANO ||--o{ OCORRENCIA : "classifica"
  SETOR ||--o{ TRANSFERENCIA : "origem_destino"
  BEM_MOVEL ||--o{ TRANSFERENCIA : "movimentado"
  DEPARTAMENTO {
    string sigla PK
    string nome
  }
  SETOR {
    string sigla PK
    string nome
    string depto_sigla FK
  }
  BEM_MOVEL {
    string numero PK
    string descricao
    date data_compra
    decimal valor
    string setor_sigla FK
  }
  TIPO_DANO {
    int codigo PK
    string descricao
  }
  OCORRENCIA {
    int nro_registro PK
    date data
    string descricao
    string bem_numero FK
    int tipo_codigo FK
  }
  TRANSFERENCIA {
    int id PK
    date data
    string bem_numero FK
    string setor_origem FK
    string setor_destino FK
  }`,
    conceitual: `flowchart LR
  D[DEPARTAMENTO] -- "1" --- R1{possui}
  R1 -- "N" --- S[SETOR]
  S -- "1" --- R2{responsavel}
  R2 -- "N" --- B[BEM_MOVEL]
  B -- "1" --- R3{sofre}
  R3 -- "N" --- O[OCORRENCIA]
  T[TIPO_DANO] -- "1" --- R4{classifica}
  R4 -- "N" --- O
  B -- "1" --- R5{historico}
  R5 -- "N" --- TR[TRANSFERENCIA]
  S -- "1" --- R6{origem}
  R6 -- "N" --- TR
  S -- "1" --- R7{destino}
  R7 -- "N" --- TR
  D --- A1(("<u>sigla</u>"))
  D --- A2((nome))
  S --- A3(("<u>sigla</u>"))
  S --- A4((nome))
  B --- A5(("<u>numero</u>"))
  B --- A6((descricao))
  B --- A7((data_compra))
  B --- A8((valor))
  O --- A9(("<u>nro_registro</u>"))
  O --- A10((data))
  O --- A11((descricao))
  T --- A12(("<u>codigo</u>"))
  T --- A13((descricao))
  TR --- A14((data))`,
    classes: `classDiagram
  class Departamento { +string sigla; +string nome; +addSetor() }
  class Setor { +string sigla; +string nome; +listarBens() }
  class BemMovel { +string numero; +string descricao; +Date dataCompra; +Decimal valor; +transferir(Setor) }
  class TipoDano { +int codigo; +string descricao }
  class Ocorrencia { +int nroRegistro; +Date data; +string descricao; +registrar() }
  class Transferencia { +Date data; +efetivar() }
  Departamento "1" o-- "*" Setor
  Setor "1" --> "*" BemMovel : responsavel
  BemMovel "1" --> "*" Ocorrencia
  TipoDano "1" --> "*" Ocorrencia
  BemMovel "1" --> "*" Transferencia
  Setor "1" --> "*" Transferencia : origem
  Setor "1" --> "*" Transferencia : destino`,
    atividadesTitulo: "Registrar Ocorrência em Bem Móvel",
    atividades: `flowchart TD
  S((●)) --> A[Selecionar Registrar Ocorrencia]
  A --> B[Informar numero do bem 6 digitos]
  B --> V{Bem existe?}
  V -->|Nao| E[Exibir erro] --> Fim(((⊗)))
  V -->|Sim| C[Preencher data e descricao]
  C --> D[Selecionar tipo de dano]
  D --> G[Gerar nro_registro automatico]
  G --> H[Salvar no banco]
  H --> I[Exibir confirmacao]
  I --> Fim`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Departamento", descricao: "Sistema deve permitir CRUD de departamentos com sigla única de 3 letras." },
      { id: "RF02", titulo: "Cadastrar Setor", descricao: "Sistema deve permitir CRUD de setores vinculados a um departamento." },
      { id: "RF03", titulo: "Cadastrar Bem Móvel", descricao: "Sistema deve registrar bens com número de 6 dígitos, descrição, data e valor." },
      { id: "RF04", titulo: "Registrar Ocorrência", descricao: "Sistema deve registrar avarias por tipo de dano com data e descrição." },
      { id: "RF05", titulo: "Transferir Bem", descricao: "Sistema deve mover bem entre setores mantendo histórico." },
      { id: "RF06", titulo: "Relatório de Bens por Setor", descricao: "Sistema deve listar bens, valor total e ocorrências por setor/depto." },
    ],
    sql: `CREATE TABLE departamento (
  sigla CHAR(3) PRIMARY KEY,
  nome VARCHAR(120) NOT NULL
);
CREATE TABLE setor (
  sigla VARCHAR(10) PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  depto_sigla CHAR(3) NOT NULL REFERENCES departamento(sigla)
);
CREATE TABLE tipo_dano (
  codigo SERIAL PRIMARY KEY,
  descricao VARCHAR(200) NOT NULL
);
CREATE TABLE bem_movel (
  numero CHAR(6) PRIMARY KEY,
  descricao VARCHAR(200) NOT NULL,
  data_compra DATE NOT NULL,
  valor NUMERIC(12,2) NOT NULL CHECK (valor >= 0),
  setor_sigla VARCHAR(10) NOT NULL REFERENCES setor(sigla)
);
CREATE TABLE ocorrencia (
  nro_registro SERIAL PRIMARY KEY,
  data DATE NOT NULL DEFAULT CURRENT_DATE,
  descricao TEXT,
  bem_numero CHAR(6) NOT NULL REFERENCES bem_movel(numero),
  tipo_codigo INT NOT NULL REFERENCES tipo_dano(codigo)
);
CREATE TABLE transferencia (
  id SERIAL PRIMARY KEY,
  data DATE NOT NULL DEFAULT CURRENT_DATE,
  bem_numero CHAR(6) NOT NULL REFERENCES bem_movel(numero),
  setor_origem VARCHAR(10) NOT NULL REFERENCES setor(sigla),
  setor_destino VARCHAR(10) NOT NULL REFERENCES setor(sigla)
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Administrador", quero: "cadastrar departamentos e setores", paraQue: "organizar a estrutura organizacional", criterios: ["Sigla única", "Validar 3 letras no depto"] },
      { id: "HU02", comoQuem: "Usuário do Patrimônio", quero: "registrar bens móveis", paraQue: "manter inventário atualizado", criterios: ["Número de 6 dígitos", "Vincular ao setor"] },
      { id: "HU03", comoQuem: "Usuário do Patrimônio", quero: "registrar ocorrências", paraQue: "controlar avarias", criterios: ["Selecionar tipo de dano", "Gerar nº automático"] },
      { id: "HU04", comoQuem: "Gestor", quero: "consultar histórico de transferências", paraQue: "rastrear movimentação dos bens", criterios: ["Filtro por bem ou setor"] },
      { id: "HU05", comoQuem: "Gestor", quero: "gerar relatório de bens por departamento", paraQue: "subsidiar decisões patrimoniais", criterios: ["Exportar e imprimir"] },
    ],
  },
  // ============ 2. CEMITÉRIO ============
  {
    slug: "cemiterio-jardim-saudade",
    numero: "02",
    titulo: "Cemitério Jardim da Saudade",
    subtitulo: "Gestão de quadras, lotes, jazigos e enterros",
    miniMundo:
      "Cemitério é dividido em quadras (com nome e metragem). Cada quadra é composta por vários lotes numerados sequencialmente. Cada lote contém jazigos identificados por letra. Lotes têm proprietário (PF ou PJ), data de compra, situação de pagamento e situação do lote. Cada jazigo pode estar vazio ou ocupado por uma pessoa enterrada (com dados de nascimento, óbito e enterro).",
    der: `erDiagram
  QUADRA ||--o{ LOTE : "compoe"
  LOTE ||--o{ JAZIGO : "contem"
  PROPRIETARIO ||--o{ LOTE : "possui"
  JAZIGO ||--o| PESSOA_ENTERRADA : "ocupa"
  QUADRA {
    int numero PK
    string nome
    decimal metragem
  }
  LOTE {
    int quadra_num PK
    int seq PK
    date data_compra
    string sit_pgto
    string sit_lote
    int prop_id FK
  }
  JAZIGO {
    int quadra_num PK
    int lote_seq PK
    char letra PK
    string situacao
  }
  PROPRIETARIO {
    int id PK
    string nome
    string tipo
    string documento
  }
  PESSOA_ENTERRADA {
    int id PK
    string nome
    date dt_nasc
    date dt_obito
    date dt_enterro
  }`,
    conceitual: `flowchart LR
  Q[QUADRA] -- "1" --- R1{compoe}
  R1 -- "N" --- L[["LOTE (fraca)"]]
  L -- "1" --- R2{contem}
  R2 -- "N" --- J[["JAZIGO (fraca)"]]
  P[PROPRIETARIO] -- "1" --- R3{possui}
  R3 -- "N" --- L
  J -- "1" --- R4{ocupa}
  R4 -- "0..1" --- PE[PESSOA_ENTERRADA]
  Q --- A1(("<u>numero</u>"))
  Q --- A2((nome))
  Q --- A3((metragem))
  L --- A4(("<u>seq</u>"))
  L --- A5((dt_compra))
  L --- A6((situacao))
  J --- A7(("<u>letra</u>"))
  J --- A8((situacao))
  P --- A9(("<u>id</u>"))
  P --- A10((nome))
  P --- A11(("tipo PF/PJ"))
  PE --- A12((nome))
  PE --- A13((dt_nasc))
  PE --- A14((dt_obito))`,
    classes: `classDiagram
  class Quadra { +int numero; +string nome; +decimal metragem }
  class Lote { +int seq; +Date dataCompra; +string sitPgto; +string sitLote }
  class Jazigo { +char letra; +string situacao; +ocupar(PessoaEnterrada) }
  class Proprietario { <<abstract>> +int id; +string nome }
  class PessoaFisica { +string cpf }
  class PessoaJuridica { +string cnpj }
  class PessoaEnterrada { +string nome; +Date dtNasc; +Date dtObito; +Date dtEnterro }
  Quadra "1" *-- "*" Lote
  Lote "1" *-- "*" Jazigo
  Proprietario "1" --> "*" Lote
  Proprietario <|-- PessoaFisica
  Proprietario <|-- PessoaJuridica
  Jazigo "1" --> "0..1" PessoaEnterrada`,
    atividadesTitulo: "Registrar Enterro em Jazigo",
    atividades: `flowchart TD
  S((●)) --> A[Selecionar Registrar Enterro]
  A --> B[Buscar quadra/lote/jazigo]
  B --> V{Jazigo livre?}
  V -->|Nao| E[Exibir ocupado] --> Fim(((⊗)))
  V -->|Sim| C[Preencher dados do falecido]
  C --> D[Informar dt_obito e dt_enterro]
  D --> G[Atualizar situacao do jazigo]
  G --> H[Salvar registro]
  H --> I[Emitir comprovante]
  I --> Fim`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Quadra", descricao: "CRUD de quadras com número, nome e metragem." },
      { id: "RF02", titulo: "Cadastrar Lote", descricao: "Lotes vinculados à quadra com situação de pagamento." },
      { id: "RF03", titulo: "Cadastrar Jazigo", descricao: "Jazigos identificados por letra dentro do lote." },
      { id: "RF04", titulo: "Registrar Proprietário", descricao: "Proprietários PF ou PJ vinculados a lotes." },
      { id: "RF05", titulo: "Registrar Enterro", descricao: "Associar pessoa enterrada a jazigo livre." },
      { id: "RF06", titulo: "Consultar Disponibilidade", descricao: "Listar jazigos livres por quadra/lote." },
    ],
    sql: `CREATE TABLE quadra (
  numero INT PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  metragem NUMERIC(8,2)
);
CREATE TABLE proprietario (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  tipo CHAR(2) NOT NULL CHECK (tipo IN ('PF','PJ')),
  documento VARCHAR(20) UNIQUE NOT NULL
);
CREATE TABLE lote (
  quadra_num INT REFERENCES quadra(numero),
  seq INT,
  data_compra DATE,
  sit_pgto VARCHAR(20) DEFAULT 'PENDENTE',
  sit_lote VARCHAR(20) DEFAULT 'LIVRE',
  prop_id INT REFERENCES proprietario(id),
  PRIMARY KEY (quadra_num, seq)
);
CREATE TABLE pessoa_enterrada (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  dt_nasc DATE,
  dt_obito DATE NOT NULL,
  dt_enterro DATE NOT NULL
);
CREATE TABLE jazigo (
  quadra_num INT,
  lote_seq INT,
  letra CHAR(1),
  situacao VARCHAR(20) DEFAULT 'LIVRE',
  pessoa_id INT REFERENCES pessoa_enterrada(id),
  PRIMARY KEY (quadra_num, lote_seq, letra),
  FOREIGN KEY (quadra_num, lote_seq) REFERENCES lote(quadra_num, seq)
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Administrador", quero: "cadastrar quadras, lotes e jazigos", paraQue: "estruturar o cemitério", criterios: ["Identificadores parciais (fracas)"] },
      { id: "HU02", comoQuem: "Atendente", quero: "vender lote a proprietário", paraQue: "registrar comercialização", criterios: ["Aceitar PF e PJ"] },
      { id: "HU03", comoQuem: "Atendente", quero: "registrar enterro", paraQue: "atualizar ocupação do jazigo", criterios: ["Bloquear jazigo ocupado"] },
      { id: "HU04", comoQuem: "Gestor", quero: "consultar jazigos disponíveis", paraQue: "agilizar atendimento", criterios: ["Filtro por quadra"] },
    ],
  },
  // ============ 3. CASA DE DETENÇÃO ============
  {
    slug: "casa-detencao",
    numero: "03",
    titulo: "Sistema Penitenciário Estadual",
    subtitulo: "Casas, pavilhões, celas, detentos, visitas e delitos",
    miniMundo:
      "Estado controla várias casas de detenção, cada uma com pavilhões (especializados por sexo) e celas (entidades fracas dos pavilhões). Detentos ficam alocados em celas e podem ser remanejados entre casas (com histórico). Cada detento responde por vários delitos (N:N) e recebe visitas (N:N), registradas com nº, data, nome, sexo e RG do visitante.",
    der: `erDiagram
  CASA_DETENCAO ||--o{ PAVILHAO : "possui"
  PAVILHAO ||--o{ CELA : "contem"
  CELA ||--o{ DETENTO : "aloja"
  DETENTO ||--o{ REMANEJAMENTO : "historico"
  CASA_DETENCAO ||--o{ REMANEJAMENTO : "envolve"
  DETENTO }o--o{ DELITO : "responde"
  DETENTO ||--o{ REGISTRO_VISITA : "recebe"
  CASA_DETENCAO {
    int cod PK
    string nome
    string endereco
    int capacidade
    string diretor
  }
  PAVILHAO {
    int casa_cod PK
    int id PK
    string sexo
  }
  CELA {
    int casa_cod PK
    int pav_id PK
    int num PK
    int capacidade
  }
  DETENTO {
    int numero PK
    string nome
    date dt_entrada
  }
  DELITO {
    int numero PK
    string descricao
  }
  REGISTRO_VISITA {
    int nro PK
    date data
    string nome_visitante
    char sexo
    string rg
    int detento_num FK
  }
  REMANEJAMENTO {
    int id PK
    date data
    int detento_num FK
    int casa_origem FK
    int casa_destino FK
  }`,
    conceitual: `flowchart LR
  CD[CASA_DETENCAO] -- "1" --- R1{compoe}
  R1 -- "N" --- PV[["PAVILHAO (fraca)"]]
  PV -- "1" --- R2{contem}
  R2 -- "N" --- CE[["CELA (fraca)"]]
  CE -- "1" --- R3{aloja}
  R3 -- "N" --- DT[DETENTO]
  DT -- "N" --- R4{reclusao}
  R4 -- "N" --- DL[DELITO]
  DT -- "1" --- R5{recebe}
  R5 -- "N" --- RV[REGISTRO_VISITA]
  DT -- "1" --- R6{sofre}
  R6 -- "N" --- RM[REMANEJAMENTO]
  PV --- B1((sexo))
  CE --- B2(("<u>num</u>"))
  CE --- B3((capacidade))
  DT --- B4(("<u>numero</u>"))
  DT --- B5((nome))
  DL --- B6(("<u>numero</u>"))
  DL --- B7((descricao))
  RM --- B8((data))`,
    classes: `classDiagram
  class CasaDetencao { +int cod; +string nome; +int capacidade }
  class Pavilhao { +int id; +string sexo }
  class Cela { +int num; +int capacidade }
  class Detento { +int numero; +string nome; +Date dtEntrada; +remanejar(CasaDetencao) }
  class Delito { +int numero; +string descricao }
  class RegistroVisita { +int nro; +Date data; +string nome; +char sexo }
  class Remanejamento { +Date data }
  CasaDetencao "1" *-- "*" Pavilhao
  Pavilhao "1" *-- "*" Cela
  Cela "1" --> "*" Detento
  Detento "*" -- "*" Delito
  Detento "1" --> "*" RegistroVisita
  Detento "1" --> "*" Remanejamento`,
    atividadesTitulo: "Registrar Visita a Detento",
    atividades: `flowchart TD
  S((●)) --> A[Identificar visitante RG/nome]
  A --> B[Localizar detento]
  B --> V{Detento autorizado?}
  V -->|Nao| E[Negar visita] --> Fim(((⊗)))
  V -->|Sim| C[Verificar dia/horario permitido]
  C --> D[Gerar nro de visita]
  D --> H[Registrar data e dados]
  H --> I[Liberar entrada]
  I --> Fim`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Casa", descricao: "CRUD de casas com diretor e capacidade." },
      { id: "RF02", titulo: "Cadastrar Pavilhão/Cela", descricao: "Pavilhões por sexo e celas com capacidade." },
      { id: "RF03", titulo: "Cadastrar Detento", descricao: "Registro com dados pessoais e cela." },
      { id: "RF04", titulo: "Vincular Delitos", descricao: "Associar N delitos a cada detento." },
      { id: "RF05", titulo: "Registrar Visita", descricao: "Visita com nº, data, dados do visitante." },
      { id: "RF06", titulo: "Remanejar Detento", descricao: "Mover entre casas mantendo histórico." },
    ],
    sql: `CREATE TABLE casa_detencao (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  endereco VARCHAR(200),
  capacidade INT NOT NULL,
  diretor VARCHAR(120)
);
CREATE TABLE pavilhao (
  casa_cod INT REFERENCES casa_detencao(cod),
  id INT,
  sexo CHAR(1) NOT NULL CHECK (sexo IN ('M','F')),
  PRIMARY KEY (casa_cod, id)
);
CREATE TABLE cela (
  casa_cod INT, pav_id INT, num INT,
  capacidade INT NOT NULL,
  PRIMARY KEY (casa_cod, pav_id, num),
  FOREIGN KEY (casa_cod, pav_id) REFERENCES pavilhao(casa_cod, id)
);
CREATE TABLE detento (
  numero SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  dt_entrada DATE NOT NULL,
  casa_cod INT, pav_id INT, cela_num INT,
  FOREIGN KEY (casa_cod, pav_id, cela_num) REFERENCES cela(casa_cod, pav_id, num)
);
CREATE TABLE delito (
  numero SERIAL PRIMARY KEY,
  descricao VARCHAR(200) NOT NULL
);
CREATE TABLE detento_delito (
  detento_num INT REFERENCES detento(numero),
  delito_num INT REFERENCES delito(numero),
  PRIMARY KEY (detento_num, delito_num)
);
CREATE TABLE registro_visita (
  nro SERIAL PRIMARY KEY,
  data DATE NOT NULL,
  nome_visitante VARCHAR(150) NOT NULL,
  sexo CHAR(1),
  rg VARCHAR(20),
  detento_num INT REFERENCES detento(numero)
);
CREATE TABLE remanejamento (
  id SERIAL PRIMARY KEY,
  data DATE NOT NULL,
  detento_num INT REFERENCES detento(numero),
  casa_origem INT REFERENCES casa_detencao(cod),
  casa_destino INT REFERENCES casa_detencao(cod)
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Administrador", quero: "cadastrar casas, pavilhões e celas", paraQue: "estruturar a unidade", criterios: ["Pavilhão por sexo"] },
      { id: "HU02", comoQuem: "Agente", quero: "registrar detento e delitos", paraQue: "manter ficha completa", criterios: ["N delitos por detento"] },
      { id: "HU03", comoQuem: "Agente", quero: "registrar visita", paraQue: "controlar entrada de visitantes", criterios: ["Validar autorização"] },
      { id: "HU04", comoQuem: "Diretor", quero: "remanejar detento", paraQue: "rebalancear população", criterios: ["Manter histórico"] },
    ],
  },
  // ============ 4. ÔNIBUS ============
  {
    slug: "lotacao-buscape",
    numero: "04",
    titulo: "Empresa de Ônibus 'Lotação Buscapé'",
    subtitulo: "Frota, linhas, motoristas, paradas e manutenção",
    miniMundo:
      "Empresa opera linhas urbanas. Cada ônibus (placa, marca, ano, km) é alocado periodicamente a uma linha (com histórico) e existe frota reserva. Motoristas (CNH, RG, CPF) também são alocados a linhas com histórico. Cada linha percorre ruas com pontos de parada (entidade fraca de rua). Manutenções são registradas por ônibus com data e tipo.",
    der: `erDiagram
  ONIBUS ||--o{ ALOCACAO_ONIBUS : "alocado"
  LINHA ||--o{ ALOCACAO_ONIBUS : "recebe"
  MOTORISTA ||--o{ ALOCACAO_MOTORISTA : "dirige"
  LINHA ||--o{ ALOCACAO_MOTORISTA : "tem"
  RUA ||--o{ PONTO_PARADA : "contem"
  LINHA }o--o{ PONTO_PARADA : "passa"
  ONIBUS ||--o{ MANUTENCAO : "sofre"
  RUA }o--|| BAIRRO : "pertence"
  ONIBUS {
    string placa PK
    string marca
    int ano
    int km
    string tipo
  }
  LINHA {
    int numero PK
    string nome
  }
  MOTORISTA {
    string cpf PK
    string nome
    string cnh
  }
  RUA {
    int cod PK
    string nome
    int bairro_cod FK
  }
  PONTO_PARADA {
    int rua_cod PK
    int seq PK
  }
  BAIRRO { int cod PK; string nome }
  ALOCACAO_ONIBUS { date dt_inicio; date dt_fim }
  ALOCACAO_MOTORISTA { date dt_inicio; date dt_fim }
  MANUTENCAO { int id PK; date data; string tipo }`,
    conceitual: `flowchart LR
  O[ONIBUS] -- "N" --- R1{historico}
  R1 -- "N" --- L[LINHA]
  M[MOTORISTA] -- "N" --- R2{historico}
  R2 -- "N" --- L
  L -- "N" --- R3{passa}
  R3 -- "N" --- PP[["PONTO_PARADA (fraca)"]]
  R[RUA] -- "1" --- R4{localiza}
  R4 -- "N" --- PP
  B[BAIRRO] -- "1" --- R5{agrega}
  R5 -- "N" --- R
  O -- "1" --- R6{sofre}
  R6 -- "N" --- MT[MANUTENCAO]
  O --- C1(("<u>placa</u>"))
  O --- C2((km))
  O --- C3((tipo))
  L --- C4(("<u>numero</u>"))
  L --- C5((nome))
  M --- C6(("<u>cpf</u>"))
  M --- C7((cnh))
  MT --- C8((data))
  MT --- C9((tipo))`,
    classes: `classDiagram
  class Onibus { +string placa; +string marca; +int km; +string tipo }
  class Linha { +int numero; +string nome }
  class Motorista { +string cpf; +string nome; +string cnh }
  class Rua { +int cod; +string nome }
  class Bairro { +int cod; +string nome }
  class PontoParada { +int seq }
  class AlocacaoOnibus { +Date dtInicio; +Date dtFim }
  class AlocacaoMotorista { +Date dtInicio; +Date dtFim }
  class Manutencao { +Date data; +string tipo }
  Onibus "1" --> "*" AlocacaoOnibus
  Linha "1" --> "*" AlocacaoOnibus
  Motorista "1" --> "*" AlocacaoMotorista
  Linha "1" --> "*" AlocacaoMotorista
  Bairro "1" --> "*" Rua
  Rua "1" *-- "*" PontoParada
  Linha "*" -- "*" PontoParada
  Onibus "1" --> "*" Manutencao`,
    atividadesTitulo: "Alocar Ônibus a Linha",
    atividades: `flowchart TD
  S((●)) --> A[Selecionar onibus livre/reserva]
  A --> B[Selecionar linha]
  B --> C[Informar dt_inicio]
  C --> V{Onibus disponivel?}
  V -->|Nao| E[Exibir conflito] --> Fim(((⊗)))
  V -->|Sim| D[Encerrar alocacao anterior]
  D --> H[Criar nova alocacao]
  H --> I[Notificar garagem]
  I --> Fim`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Ônibus", descricao: "Frota com placa, marca, ano, km e tipo (normal/reserva)." },
      { id: "RF02", titulo: "Cadastrar Linha", descricao: "Linhas com número e nome." },
      { id: "RF03", titulo: "Alocar Ônibus", descricao: "Manter histórico de alocações por período." },
      { id: "RF04", titulo: "Alocar Motorista", descricao: "Histórico de motoristas por linha." },
      { id: "RF05", titulo: "Cadastrar Paradas", descricao: "Pontos de parada como entidade fraca de rua." },
      { id: "RF06", titulo: "Registrar Manutenção", descricao: "Manutenções com data e tipo." },
    ],
    sql: `CREATE TABLE bairro (cod SERIAL PRIMARY KEY, nome VARCHAR(80));
CREATE TABLE rua (cod SERIAL PRIMARY KEY, nome VARCHAR(120), bairro_cod INT REFERENCES bairro(cod));
CREATE TABLE ponto_parada (
  rua_cod INT REFERENCES rua(cod),
  seq INT,
  PRIMARY KEY (rua_cod, seq)
);
CREATE TABLE onibus (
  placa CHAR(7) PRIMARY KEY,
  marca VARCHAR(60), ano INT, km INT DEFAULT 0,
  tipo VARCHAR(10) CHECK (tipo IN ('NORMAL','RESERVA'))
);
CREATE TABLE linha (numero INT PRIMARY KEY, nome VARCHAR(80));
CREATE TABLE motorista (cpf CHAR(11) PRIMARY KEY, nome VARCHAR(150), cnh VARCHAR(20));
CREATE TABLE alocacao_onibus (
  id SERIAL PRIMARY KEY,
  placa CHAR(7) REFERENCES onibus(placa),
  linha_num INT REFERENCES linha(numero),
  dt_inicio DATE NOT NULL, dt_fim DATE
);
CREATE TABLE alocacao_motorista (
  id SERIAL PRIMARY KEY,
  cpf CHAR(11) REFERENCES motorista(cpf),
  linha_num INT REFERENCES linha(numero),
  dt_inicio DATE NOT NULL, dt_fim DATE
);
CREATE TABLE linha_ponto (
  linha_num INT REFERENCES linha(numero),
  rua_cod INT, seq INT,
  PRIMARY KEY (linha_num, rua_cod, seq),
  FOREIGN KEY (rua_cod, seq) REFERENCES ponto_parada(rua_cod, seq)
);
CREATE TABLE manutencao (
  id SERIAL PRIMARY KEY,
  placa CHAR(7) REFERENCES onibus(placa),
  data DATE NOT NULL, tipo VARCHAR(40)
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Operador", quero: "cadastrar ônibus e motoristas", paraQue: "compor a frota", criterios: ["Diferenciar reserva"] },
      { id: "HU02", comoQuem: "Operador", quero: "alocar ônibus à linha", paraQue: "operar o transporte", criterios: ["Histórico mantido"] },
      { id: "HU03", comoQuem: "Operador", quero: "alocar motorista à linha", paraQue: "garantir condução", criterios: ["Sem conflito de horário"] },
      { id: "HU04", comoQuem: "Manutenção", quero: "registrar serviços executados", paraQue: "controlar km e revisões", criterios: ["Atualizar km do ônibus"] },
    ],
  },
  // ============ 5. EXTINTORES ============
  {
    slug: "extintores-incendio",
    numero: "05",
    titulo: "Sistema de Gerenciamento de Extintores",
    subtitulo: "Fabricantes, andares, pontos, recargas e causas",
    miniMundo:
      "Empresa controla extintores instalados em pontos de colocação numerados (1 a 10) por andar. Cada extintor é fabricado por um fabricante e comprado de um revendedor. Combatem N causas de incêndio (cada causa tem período de recarga). Recargas são feitas por empresas terceirizadas e geram histórico (extintor x empresa x data).",
    der: `erDiagram
  EXTINTOR ||--o{ ALOCACAO_PONTO : "alocado"
  PONTO_COLOCACAO ||--o{ ALOCACAO_PONTO : "recebe"
  ANDAR ||--o{ PONTO_COLOCACAO : "contem"
  EXTINTOR }o--|| FABRICANTE : "fabricado"
  EXTINTOR }o--|| REVENDEDOR : "comprado"
  EXTINTOR }o--o{ CAUSA_INCENDIO : "combate"
  EXTINTOR ||--o{ RECARGA : "sofre"
  EMPRESA_RECARGA ||--o{ RECARGA : "executa"
  EXTINTOR { int cod PK; date dt_fab; string situacao }
  FABRICANTE { int cod PK; string nome; string uf }
  REVENDEDOR { int cod PK; string nome }
  CAUSA_INCENDIO { int cod PK; string descricao; int periodo_meses }
  EMPRESA_RECARGA { string cnpj PK; string nome }
  ANDAR { int numero PK }
  PONTO_COLOCACAO { int andar_num PK; int seq PK }
  ALOCACAO_PONTO { date dt_inicio; date dt_fim }
  RECARGA { date data }`,
    conceitual: `flowchart LR
  F[FABRICANTE] -- "1" --- R1{fabrica}
  R1 -- "N" --- EX[EXTINTOR]
  RV[REVENDEDOR] -- "1" --- R2{vende}
  R2 -- "N" --- EX
  EX -- "N" --- R3{indicado}
  R3 -- "N" --- CI[CAUSA_INCENDIO]
  EX -- "1" --- R4{sofre}
  R4 -- "N" --- RC[RECARGA]
  ER[EMPRESA_RECARGA] -- "1" --- R5{executa}
  R5 -- "N" --- RC
  AN[ANDAR] -- "1" --- R6{contem}
  R6 -- "N" --- PC[["PONTO_COLOCACAO (fraca)"]]
  EX -- "N" --- R7{historico}
  R7 -- "N" --- PC
  EX --- D1(("<u>cod</u>"))
  EX --- D2((dt_fab))
  CI --- D3((periodo_meses))
  RC --- D4((data))
  ER --- D5(("<u>cnpj</u>"))
  ER --- D6((nome))`,
    classes: `classDiagram
  class Extintor { +int cod; +Date dtFab; +string situacao; +recarregar() }
  class Fabricante { +int cod; +string nome; +string uf }
  class Revendedor { +int cod; +string nome }
  class CausaIncendio { +int cod; +string descricao; +int periodoMeses }
  class EmpresaRecarga { +string cnpj; +string nome }
  class Andar { +int numero }
  class PontoColocacao { +int seq }
  class Recarga { +Date data }
  class AlocacaoPonto { +Date dtInicio; +Date dtFim }
  Fabricante "1" --> "*" Extintor
  Revendedor "1" --> "*" Extintor
  Extintor "*" -- "*" CausaIncendio
  Extintor "1" --> "*" Recarga
  EmpresaRecarga "1" --> "*" Recarga
  Andar "1" *-- "*" PontoColocacao
  Extintor "1" --> "*" AlocacaoPonto
  PontoColocacao "1" --> "*" AlocacaoPonto`,
    atividadesTitulo: "Realizar Recarga de Extintor",
    atividades: `flowchart TD
  S((●)) --> A[Identificar extintor]
  A --> V{Vencido?}
  V -->|Nao| OK[Manter no ponto] --> Fim(((⊗)))
  V -->|Sim| B[Retirar extintor do ponto]
  B --> C[Selecionar empresa de recarga]
  C --> D[Registrar data da recarga]
  D --> E[Calcular nova validade]
  E --> F[Realocar ao ponto]
  F --> Fim`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Extintor", descricao: "CRUD com fabricante, revendedor e causas combatidas." },
      { id: "RF02", titulo: "Cadastrar Pontos", descricao: "Pontos sequenciais (1-10) por andar." },
      { id: "RF03", titulo: "Alocar Extintor", descricao: "Manter histórico de localização." },
      { id: "RF04", titulo: "Registrar Recarga", descricao: "Histórico com empresa e data." },
      { id: "RF05", titulo: "Alertar Vencimento", descricao: "Avisar extintores próximos do vencimento." },
    ],
    sql: `CREATE TABLE fabricante (cod SERIAL PRIMARY KEY, nome VARCHAR(120), uf CHAR(2));
CREATE TABLE revendedor (cod SERIAL PRIMARY KEY, nome VARCHAR(120));
CREATE TABLE causa_incendio (cod SERIAL PRIMARY KEY, descricao VARCHAR(120), periodo_meses INT NOT NULL);
CREATE TABLE empresa_recarga (cnpj CHAR(14) PRIMARY KEY, nome VARCHAR(150));
CREATE TABLE andar (numero INT PRIMARY KEY);
CREATE TABLE ponto_colocacao (
  andar_num INT REFERENCES andar(numero),
  seq INT CHECK (seq BETWEEN 1 AND 10),
  PRIMARY KEY (andar_num, seq)
);
CREATE TABLE extintor (
  cod SERIAL PRIMARY KEY,
  dt_fab DATE NOT NULL,
  situacao VARCHAR(20) DEFAULT 'ATIVO',
  fabricante_cod INT REFERENCES fabricante(cod),
  revendedor_cod INT REFERENCES revendedor(cod)
);
CREATE TABLE extintor_causa (
  extintor_cod INT REFERENCES extintor(cod),
  causa_cod INT REFERENCES causa_incendio(cod),
  PRIMARY KEY (extintor_cod, causa_cod)
);
CREATE TABLE alocacao_ponto (
  id SERIAL PRIMARY KEY,
  extintor_cod INT REFERENCES extintor(cod),
  andar_num INT, seq INT,
  dt_inicio DATE NOT NULL, dt_fim DATE,
  FOREIGN KEY (andar_num, seq) REFERENCES ponto_colocacao(andar_num, seq)
);
CREATE TABLE recarga (
  id SERIAL PRIMARY KEY,
  extintor_cod INT REFERENCES extintor(cod),
  empresa_cnpj CHAR(14) REFERENCES empresa_recarga(cnpj),
  data DATE NOT NULL
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Brigadista", quero: "cadastrar extintores", paraQue: "manter inventário", criterios: ["Vincular a fabricante e revendedor"] },
      { id: "HU02", comoQuem: "Brigadista", quero: "alocar extintor a ponto", paraQue: "garantir cobertura por andar", criterios: ["Histórico mantido"] },
      { id: "HU03", comoQuem: "Brigadista", quero: "registrar recarga", paraQue: "atualizar validade", criterios: ["Recarga por empresa"] },
      { id: "HU04", comoQuem: "Gestor", quero: "consultar vencimentos", paraQue: "evitar não conformidade", criterios: ["Filtro por andar"] },
    ],
  },
  // ============ 6. AGROBOM ============
  {
    slug: "agrobom-revendedora",
    numero: "06",
    titulo: "Revendedora AGROBOM",
    subtitulo: "Pedidos parcialmente atendidos, fornecedores e compras",
    miniMundo:
      "Revendedora vende produtos a clientes via pedidos. Cada item de pedido pode ser parcialmente atendido (qtd_pedida, qtd_atendida, qtd_pendente). Para repor estoque, gera solicitações de compra a fornecedores (N:N produtos via FORNECIMENTO). Há controle de movimentação financeira por pedido (com desconto e valor total).",
    der: `erDiagram
  CLIENTE ||--o{ PEDIDO : "faz"
  PEDIDO ||--o{ ITEM_PEDIDO : "contem"
  PRODUTO ||--o{ ITEM_PEDIDO : "vendido"
  FORNECEDOR ||--o{ SOLICITACAO_COMPRA : "atende"
  SOLICITACAO_COMPRA ||--o{ ITEM_SOLICITACAO : "contem"
  PRODUTO ||--o{ ITEM_SOLICITACAO : "comprado"
  FORNECEDOR }o--o{ PRODUTO : "fornece"
  CLIENTE { int id PK; string nome }
  PEDIDO { int num PK; date data; decimal desconto }
  PRODUTO { int cod PK; string nome; int estoque; decimal preco }
  ITEM_PEDIDO { int qtd_ped; int qtd_atend; int qtd_pend }
  FORNECEDOR { int id PK; string razao; string cnpj }
  SOLICITACAO_COMPRA { int num PK; date data; string status }
  ITEM_SOLICITACAO { int qtd }`,
    conceitual: `flowchart LR
  CL[CLIENTE] -- "1" --- R1{realiza}
  R1 -- "N" --- PD[PEDIDO]
  PD -- "1" --- R2{contem}
  R2 -- "N" --- IP[ITEM_PEDIDO]
  PR[PRODUTO] -- "1" --- R3{compoe}
  R3 -- "N" --- IP
  PR -- "N" --- R4{fornece}
  R4 -- "N" --- FN[FORNECEDOR]
  FN -- "1" --- R5{origina}
  R5 -- "N" --- SC[SOLICITACAO_COMPRA]
  SC -- "1" --- R6{contem}
  R6 -- "N" --- IS[ITEM_SOLICITACAO]
  PR -- "1" --- R7{solicitado}
  R7 -- "N" --- IS
  PD --- E1(("<u>num</u>"))
  PD --- E2((data))
  PD --- E3((desconto))
  IP --- E4((qtd_ped))
  IP --- E5((qtd_atend))
  IP --- E6((qtd_pend))
  PR --- E7(("<u>cod</u>"))
  PR --- E8((estoque))
  PR --- E9((preco))
  FN --- E10(("<u>id</u>"))
  FN --- E11((razao))
  FN --- E12((cnpj))
  SC --- E13(("<u>num</u>"))
  SC --- E14((data))
  SC --- E15((status))`,
    classes: `classDiagram
  class Cliente { +int id; +string nome }
  class Pedido { +int num; +Date data; +decimal desconto; +calcularTotal() }
  class ItemPedido { +int qtdPed; +int qtdAtend; +int qtdPend; +baixarEstoque() }
  class Produto { +int cod; +string nome; +int estoque; +decimal preco }
  class Fornecedor { +int id; +string razao; +string cnpj }
  class SolicitacaoCompra { +int num; +Date data; +string status }
  class ItemSolicitacao { +int qtd }
  Cliente "1" --> "*" Pedido
  Pedido "1" *-- "*" ItemPedido
  Produto "1" --> "*" ItemPedido
  Produto "*" -- "*" Fornecedor
  Fornecedor "1" --> "*" SolicitacaoCompra
  SolicitacaoCompra "1" *-- "*" ItemSolicitacao
  Produto "1" --> "*" ItemSolicitacao`,
    atividadesTitulo: "Processar Pedido com Estoque Parcial",
    atividades: `flowchart TD
  S((●)) --> A[Receber pedido do cliente]
  A --> B[Para cada item: ler estoque]
  B --> V{Estoque suficiente?}
  V -->|Sim| C[Atender total]
  V -->|Nao| D[Atender parcial]
  D --> E[Marcar qtd_pend]
  C --> F[Baixar estoque]
  E --> F
  F --> G{Item pendente?}
  G -->|Sim| H[Gerar solicitacao compra]
  G -->|Nao| I[Calcular total do pedido]
  H --> I
  I --> Fim(((⊗)))`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Cliente/Produto/Fornecedor", descricao: "CRUD completo das entidades." },
      { id: "RF02", titulo: "Registrar Pedido", descricao: "Pedido com vários itens e desconto." },
      { id: "RF03", titulo: "Atender Parcial", descricao: "Permitir atender qtd menor que pedida." },
      { id: "RF04", titulo: "Gerar Solicitação", descricao: "Criar solicitação de compra para itens pendentes." },
      { id: "RF05", titulo: "Relatório Financeiro", descricao: "Vendas e compras por período." },
    ],
    sql: `CREATE TABLE cliente (id SERIAL PRIMARY KEY, nome VARCHAR(150));
CREATE TABLE produto (cod SERIAL PRIMARY KEY, nome VARCHAR(120), estoque INT DEFAULT 0, preco NUMERIC(10,2));
CREATE TABLE fornecedor (id SERIAL PRIMARY KEY, razao VARCHAR(150), cnpj CHAR(14) UNIQUE);
CREATE TABLE fornecimento (
  fornecedor_id INT REFERENCES fornecedor(id),
  produto_cod INT REFERENCES produto(cod),
  PRIMARY KEY (fornecedor_id, produto_cod)
);
CREATE TABLE pedido (
  num SERIAL PRIMARY KEY,
  data DATE NOT NULL DEFAULT CURRENT_DATE,
  desconto NUMERIC(8,2) DEFAULT 0,
  cliente_id INT REFERENCES cliente(id)
);
CREATE TABLE item_pedido (
  pedido_num INT REFERENCES pedido(num),
  produto_cod INT REFERENCES produto(cod),
  qtd_ped INT NOT NULL,
  qtd_atend INT DEFAULT 0,
  qtd_pend INT GENERATED ALWAYS AS (qtd_ped - qtd_atend) STORED,
  PRIMARY KEY (pedido_num, produto_cod)
);
CREATE TABLE solicitacao_compra (
  num SERIAL PRIMARY KEY,
  data DATE NOT NULL DEFAULT CURRENT_DATE,
  status VARCHAR(20) DEFAULT 'ABERTA',
  fornecedor_id INT REFERENCES fornecedor(id)
);
CREATE TABLE item_solicitacao (
  sol_num INT REFERENCES solicitacao_compra(num),
  produto_cod INT REFERENCES produto(cod),
  qtd INT NOT NULL,
  PRIMARY KEY (sol_num, produto_cod)
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Vendedor", quero: "registrar pedido com vários itens", paraQue: "atender o cliente", criterios: ["Calcular total com desconto"] },
      { id: "HU02", comoQuem: "Estoquista", quero: "atender parcialmente itens", paraQue: "não bloquear o pedido", criterios: ["Marcar pendência"] },
      { id: "HU03", comoQuem: "Comprador", quero: "gerar solicitação de compra", paraQue: "repor estoque", criterios: ["Listar fornecedores do produto"] },
      { id: "HU04", comoQuem: "Gestor", quero: "relatório de vendas/compras", paraQue: "controlar financeiro", criterios: ["Filtro por período"] },
    ],
  },
  // ============ 7. PAPGP ============
  {
    slug: "papgp-projetos-pesquisa",
    numero: "07",
    titulo: "PAPGP - Projetos de Pesquisa",
    subtitulo: "Auto-relacionamento, status, fomentadoras e colaboradores",
    miniMundo:
      "Pró-Reitoria gerencia projetos de pesquisa vinculados a centros de estudos. Projetos podem ter subprojetos (auto-relacionamento). Cada projeto tem histórico de status, professores e alunos participantes (N:N), instituições fomentadoras (N:N com valor investido), organismos adjuntos (N:N) e colaboradores externos.",
    der: `erDiagram
  PROJETO ||--o{ PROJETO : "subprojeto"
  CENTRO_ESTUDOS ||--o{ PROJETO : "abriga"
  PROJETO ||--o{ STATUS_PROJETO : "historico"
  PROJETO }o--o{ PROFESSOR : "envolve"
  PROJETO }o--o{ ALUNO : "envolve"
  PROJETO }o--o{ INSTITUICAO_FOMENTADORA : "financia"
  PROJETO }o--o{ COLABORADOR : "colabora"
  PROJETO }o--o{ ORGANISMO_ADJUNTO : "apoio"
  ALUNO }o--|| CURSO : "matriculado"
  PROFESSOR }o--|| CENTRO_ESTUDOS : "lotado"
  PROJETO { int cod PK; string nome; date dt_inicio; date dt_prev_termino; decimal total_gastos }
  CENTRO_ESTUDOS { int cod PK; string nome }
  PROFESSOR { string mat PK; string nome }
  ALUNO { string mat PK; string nome }
  CURSO { int cod PK; string nome }
  INSTITUICAO_FOMENTADORA { int cod PK; string nome }
  ORGANISMO_ADJUNTO { int cod PK; string nome }
  COLABORADOR { string cpf PK; string nome; string titulacao }
  STATUS_PROJETO { string situacao; date dt_inicio }`,
    conceitual: `flowchart LR
  PJ[PROJETO] -- "1" --- R1{subprojeto}
  R1 -- "N" --- PJ
  CE[CENTRO_ESTUDOS] -- "1" --- R2{desenvolve}
  R2 -- "N" --- PJ
  PJ -- "1" --- R3{possui}
  R3 -- "N" --- ST[STATUS_PROJETO]
  PR[PROFESSOR] -- "N" --- R4{coordena}
  R4 -- "N" --- PJ
  AL[ALUNO] -- "N" --- R5{participa}
  R5 -- "N" --- PJ
  IF[INSTITUICAO_FOMENTADORA] -- "N" --- R6{"financia (valor)"}
  R6 -- "N" --- PJ
  CO[COLABORADOR] -- "N" --- R7{colabora}
  R7 -- "N" --- PJ
  OA[ORGANISMO_ADJUNTO] -- "N" --- R8{vincula}
  R8 -- "N" --- PJ
  CU[CURSO] -- "1" --- R9{inscreve}
  R9 -- "N" --- AL
  PR --- F1(("<u>mat</u>"))
  PR --- F2((nome))
  AL --- F3(("<u>mat</u>"))
  AL --- F4((nome))
  CU --- F5(("<u>cod</u>"))
  CU --- F6((nome))
  CO --- F7(("<u>cpf</u>"))
  CO --- F8((titulacao))`,
    classes: `classDiagram
  class Projeto { +int cod; +string nome; +Date dtInicio; +decimal totalGastos; +addSubprojeto() }
  class CentroEstudos { +int cod; +string nome }
  class Professor { +string mat; +string nome }
  class Aluno { +string mat; +string nome }
  class Curso { +int cod; +string nome }
  class InstituicaoFomentadora { +int cod; +string nome }
  class OrganismoAdjunto { +int cod; +string nome }
  class Colaborador { +string cpf; +string nome; +string titulacao }
  class StatusProjeto { +string situacao; +Date dtInicio }
  Projeto "1" --> "*" Projeto : subprojeto
  CentroEstudos "1" --> "*" Projeto
  Projeto "1" --> "*" StatusProjeto
  Projeto "*" -- "*" Professor
  Projeto "*" -- "*" Aluno
  Projeto "*" -- "*" InstituicaoFomentadora
  Projeto "*" -- "*" Colaborador
  Projeto "*" -- "*" OrganismoAdjunto
  Curso "1" --> "*" Aluno`,
    atividadesTitulo: "Submeter Projeto de Pesquisa",
    atividades: `flowchart TD
  S((●)) --> A[Coordenador inicia projeto]
  A --> B[Vincular centro de estudos]
  B --> C[Adicionar professores e alunos]
  C --> D{Tem subprojetos?}
  D -->|Sim| E[Criar subprojetos]
  D -->|Nao| F[Vincular fomentadoras]
  E --> F
  F --> G[Definir status inicial]
  G --> H[Salvar projeto]
  H --> Fim(((⊗)))`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Projeto", descricao: "Projeto com centro, datas e gastos." },
      { id: "RF02", titulo: "Vincular Subprojetos", descricao: "Permitir hierarquia de projetos." },
      { id: "RF03", titulo: "Vincular Pessoas", descricao: "Professores, alunos e colaboradores N:N." },
      { id: "RF04", titulo: "Registrar Status", descricao: "Manter histórico de mudança de status." },
      { id: "RF05", titulo: "Vincular Fomentadora", descricao: "N:N com valor investido por fomentadora." },
    ],
    sql: `CREATE TABLE centro_estudos (cod SERIAL PRIMARY KEY, nome VARCHAR(120));
CREATE TABLE curso (cod SERIAL PRIMARY KEY, nome VARCHAR(120));
CREATE TABLE professor (mat VARCHAR(20) PRIMARY KEY, nome VARCHAR(150), centro_cod INT REFERENCES centro_estudos(cod));
CREATE TABLE aluno (mat VARCHAR(20) PRIMARY KEY, nome VARCHAR(150), curso_cod INT REFERENCES curso(cod));
CREATE TABLE instituicao_fomentadora (cod SERIAL PRIMARY KEY, nome VARCHAR(150));
CREATE TABLE organismo_adjunto (cod SERIAL PRIMARY KEY, nome VARCHAR(150));
CREATE TABLE colaborador (cpf CHAR(11) PRIMARY KEY, nome VARCHAR(150), titulacao VARCHAR(60));
CREATE TABLE projeto (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  dt_inicio DATE NOT NULL,
  dt_prev_termino DATE,
  total_gastos NUMERIC(12,2) DEFAULT 0,
  centro_cod INT REFERENCES centro_estudos(cod),
  projeto_pai INT REFERENCES projeto(cod)
);
CREATE TABLE status_projeto (
  id SERIAL PRIMARY KEY,
  projeto_cod INT REFERENCES projeto(cod),
  situacao VARCHAR(40), dt_inicio DATE
);
CREATE TABLE projeto_professor (projeto_cod INT, prof_mat VARCHAR(20), PRIMARY KEY(projeto_cod, prof_mat));
CREATE TABLE projeto_aluno (projeto_cod INT, aluno_mat VARCHAR(20), PRIMARY KEY(projeto_cod, aluno_mat));
CREATE TABLE projeto_fomentadora (
  projeto_cod INT, fom_cod INT,
  valor_investido NUMERIC(12,2),
  PRIMARY KEY(projeto_cod, fom_cod)
);
CREATE TABLE projeto_colaborador (projeto_cod INT, cpf CHAR(11), PRIMARY KEY(projeto_cod, cpf));
CREATE TABLE projeto_organismo (projeto_cod INT, org_cod INT, PRIMARY KEY(projeto_cod, org_cod));`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Coordenador", quero: "submeter novo projeto", paraQue: "iniciar pesquisa", criterios: ["Vincular centro de estudos"] },
      { id: "HU02", comoQuem: "Coordenador", quero: "criar subprojetos", paraQue: "modular grandes pesquisas", criterios: ["Auto-relacionamento"] },
      { id: "HU03", comoQuem: "Pró-Reitor", quero: "acompanhar status", paraQue: "monitorar evolução", criterios: ["Histórico mantido"] },
      { id: "HU04", comoQuem: "Financeiro", quero: "registrar fomento", paraQue: "controlar verba", criterios: ["Valor por fomentadora"] },
    ],
  },
  // ============ 8. PLANTIO ============
  {
    slug: "fazenda-feliz-grao",
    numero: "08",
    titulo: "Fazenda Feliz Grão - Áreas de Plantio",
    subtitulo: "Culturas, pragas, agrotóxicos e aplicações preventivas/corretivas",
    miniMundo:
      "Fazenda divide-se em áreas de plantio sob responsabilidade de funcionários. Cada área pode estar com uma cultura ativa. Culturas têm pragas suscetíveis (N:N) e cada praga é combatida por agrotóxicos (N:N). Aplicações são especializadas em preventivas (sem praga) e corretivas (com praga específica) com data e quantidade.",
    der: `erDiagram
  FUNCIONARIO ||--o{ AREA_PLANTIO : "responsavel"
  TIPO_CULTURA ||--o{ AREA_PLANTIO : "utilizada"
  TIPO_CULTURA }o--o{ PRAGA : "suscetivel"
  PRAGA }o--o{ AGROTOXICO : "combate"
  AREA_PLANTIO ||--o{ APLICACAO : "recebe"
  AGROTOXICO ||--o{ APLICACAO : "usado"
  PRAGA ||--o{ APLICACAO : "combate"
  FUNCIONARIO { int mat PK; string nome }
  AREA_PLANTIO { int cod PK; decimal hectares; date dt_inicio_cultura }
  TIPO_CULTURA { int cod PK; string nome }
  PRAGA { int cod PK; string nome }
  AGROTOXICO { int cod PK; string nome }
  APLICACAO { int id PK; date data; decimal qtd; string tipo }`,
    conceitual: `flowchart LR
  FN[FUNCIONARIO] -- "1" --- R1{responsavel}
  R1 -- "N" --- AR[AREA_PLANTIO]
  TC[TIPO_CULTURA] -- "1" --- R2{cultivada}
  R2 -- "N" --- AR
  TC -- "N" --- R3{suscetibilidade}
  R3 -- "N" --- PR[PRAGA]
  PR -- "N" --- R4{combate}
  R4 -- "N" --- AG[AGROTOXICO]
  AR -- "1" --- R5{recebe}
  R5 -- "N" --- AP[APLICACAO]
  AG -- "1" --- R6{utilizada}
  R6 -- "N" --- AP
  PR -- "0..N" --- R7{corretiva}
  R7 -- "N" --- AP
  FN --- G1(("<u>mat</u>"))
  FN --- G2((nome))
  AR --- G3(("<u>cod</u>"))
  AR --- G4((hectares))
  TC --- G5(("<u>cod</u>"))
  TC --- G6((nome))
  PR --- G7(("<u>cod</u>"))
  PR --- G8((nome))
  AG --- G9(("<u>cod</u>"))
  AG --- G10((nome))
  AP --- G11(("<u>id</u>"))
  AP --- G12((data))
  AP --- G13((qtd))`,
    classes: `classDiagram
  class Funcionario { +int mat; +string nome }
  class AreaPlantio { +int cod; +decimal hectares }
  class TipoCultura { +int cod; +string nome }
  class Praga { +int cod; +string nome }
  class Agrotoxico { +int cod; +string nome }
  class Aplicacao { <<abstract>> +int id; +Date data; +decimal qtd }
  class AplicacaoPreventiva
  class AplicacaoCorretiva { +Praga praga }
  Funcionario "1" --> "*" AreaPlantio
  TipoCultura "1" --> "*" AreaPlantio
  TipoCultura "*" -- "*" Praga
  Praga "*" -- "*" Agrotoxico
  AreaPlantio "1" --> "*" Aplicacao
  Aplicacao <|-- AplicacaoPreventiva
  Aplicacao <|-- AplicacaoCorretiva`,
    atividadesTitulo: "Realizar Aplicação Corretiva",
    atividades: `flowchart TD
  S((●)) --> A[Funcionario detecta praga]
  A --> B[Identificar tipo de praga]
  B --> C[Consultar agrotoxicos compatíveis]
  C --> V{Existe agrotoxico?}
  V -->|Nao| E[Solicitar compra] --> Fim(((⊗)))
  V -->|Sim| D[Selecionar agrotoxico]
  D --> F[Aplicar na area]
  F --> G[Registrar data, qtd, praga]
  G --> H[Atualizar historico]
  H --> Fim`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Áreas", descricao: "Áreas com hectares e responsável." },
      { id: "RF02", titulo: "Cadastrar Cultura/Praga/Agrotóxico", descricao: "CRUD com relações N:N." },
      { id: "RF03", titulo: "Iniciar Cultura na Área", descricao: "Vincular tipo de cultura à área." },
      { id: "RF04", titulo: "Registrar Aplicação Preventiva", descricao: "Sem necessidade de praga." },
      { id: "RF05", titulo: "Registrar Aplicação Corretiva", descricao: "Com praga e agrotóxico compatível." },
    ],
    sql: `CREATE TABLE funcionario (mat SERIAL PRIMARY KEY, nome VARCHAR(150));
CREATE TABLE tipo_cultura (cod SERIAL PRIMARY KEY, nome VARCHAR(120));
CREATE TABLE praga (cod SERIAL PRIMARY KEY, nome VARCHAR(120));
CREATE TABLE agrotoxico (cod SERIAL PRIMARY KEY, nome VARCHAR(120));
CREATE TABLE area_plantio (
  cod SERIAL PRIMARY KEY,
  hectares NUMERIC(10,2),
  funcionario_mat INT REFERENCES funcionario(mat),
  cultura_cod INT REFERENCES tipo_cultura(cod),
  dt_inicio_cultura DATE
);
CREATE TABLE cultura_praga (
  cultura_cod INT REFERENCES tipo_cultura(cod),
  praga_cod INT REFERENCES praga(cod),
  PRIMARY KEY (cultura_cod, praga_cod)
);
CREATE TABLE praga_agrotoxico (
  praga_cod INT REFERENCES praga(cod),
  agrotoxico_cod INT REFERENCES agrotoxico(cod),
  PRIMARY KEY (praga_cod, agrotoxico_cod)
);
CREATE TABLE aplicacao (
  id SERIAL PRIMARY KEY,
  area_cod INT REFERENCES area_plantio(cod),
  agrotoxico_cod INT REFERENCES agrotoxico(cod),
  data DATE NOT NULL,
  qtd NUMERIC(10,2) NOT NULL,
  tipo VARCHAR(15) CHECK (tipo IN ('PREVENTIVA','CORRETIVA')),
  praga_cod INT REFERENCES praga(cod)
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Gerente", quero: "cadastrar áreas", paraQue: "organizar produção", criterios: ["Vincular funcionário responsável"] },
      { id: "HU02", comoQuem: "Funcionário", quero: "iniciar cultura na área", paraQue: "começar plantio", criterios: ["Registrar dt_inicio"] },
      { id: "HU03", comoQuem: "Funcionário", quero: "aplicar agrotóxico preventivo", paraQue: "evitar pragas", criterios: ["Sem informar praga"] },
      { id: "HU04", comoQuem: "Funcionário", quero: "aplicar corretivo", paraQue: "combater praga detectada", criterios: ["Praga e agrotóxico compatível"] },
    ],
  },
  // ============ 9. CARROBOM ============
  {
    slug: "locadora-carrobom",
    numero: "09",
    titulo: "Locadora CARROBOM",
    subtitulo: "Especialização de clientes, frota, acessórios e locação",
    miniMundo:
      "Locadora opera várias filiais (cada uma em uma cidade única). Frota composta por veículos com placa, modelo (com diária base) e marca. Acessórios podem ser opcionais (N:N com veículo). Clientes especializam-se em Eventual, Habitual e Empresa. Cada locação registra cliente, veículo, filial origem e filial destino (devolução), data e valor.",
    der: `erDiagram
  CIDADE ||--|| FILIAL : "sediada"
  FILIAL ||--o{ VEICULO : "responsavel"
  MARCA ||--o{ MODELO : "tem"
  MODELO ||--o{ VEICULO : "tipo"
  VEICULO }o--o{ ACESSORIO : "possui"
  CLIENTE ||--o{ LOCACAO : "realiza"
  VEICULO ||--o{ LOCACAO : "alugado"
  FILIAL ||--o{ LOCACAO : "origem"
  FILIAL ||--o{ LOCACAO : "destino"
  CIDADE { int cod PK; string nome }
  FILIAL { int cod PK; string endereco; int cidade_cod FK }
  MARCA { int cod PK; string nome }
  MODELO { int cod PK; string nome; decimal preco_diaria }
  VEICULO { string placa PK; string cor; int ano }
  ACESSORIO { int cod PK; string nome; decimal custo }
  CLIENTE { string cpf_cnpj PK; string nome; string tipo }
  LOCACAO { int num PK; date dt_inicio; date dt_fim; decimal valor }`,
    conceitual: `flowchart LR
  CD[CIDADE] -- "1" --- R1{situa}
  R1 -- "1" --- FL[FILIAL]
  FL -- "1" --- R2{possui}
  R2 -- "N" --- VC[VEICULO]
  MC[MARCA] -- "1" --- R3{define}
  R3 -- "N" --- MO[MODELO]
  MO -- "1" --- R4{classifica}
  R4 -- "N" --- VC
  VC -- "N" --- R5{equipado}
  R5 -- "N" --- AC[ACESSORIO]
  CL[CLIENTE] --- ISA{{ISA}}
  ISA --- CE[EVENTUAL]
  ISA --- CH[HABITUAL]
  ISA --- CP[EMPRESA]
  CL -- "1" --- R6{realiza}
  R6 -- "N" --- LC[LOCACAO]
  VC -- "1" --- R7{locado}
  R7 -- "N" --- LC
  FL -- "1" --- R8{origem}
  R8 -- "N" --- LC
  FL -- "1" --- R9{destino}
  R9 -- "N" --- LC
  VC --- H1(("<u>placa</u>"))
  VC --- H2((ano))
  MO --- H3((preco_diaria))
  CL --- H4(("<u>cpf_cnpj</u>"))
  CL --- H5((nome))
  LC --- H6(("<u>num</u>"))
  LC --- H7((dt_inicio))
  LC --- H8((dt_fim))
  LC --- H9((valor))`,
    classes: `classDiagram
  class Cidade { +int cod; +string nome }
  class Filial { +int cod; +string endereco }
  class Marca { +int cod; +string nome }
  class Modelo { +int cod; +string nome; +decimal precoDiaria }
  class Veiculo { +string placa; +string cor; +int ano }
  class Acessorio { +int cod; +string nome; +decimal custo }
  class Cliente { <<abstract>> +string id; +string nome }
  class ClienteEventual
  class ClienteHabitual { +decimal desconto }
  class ClienteEmpresa { +string razao }
  class Locacao { +int num; +Date dtInicio; +Date dtFim; +decimal valor; +calcular() }
  Cidade "1" --> "1" Filial
  Filial "1" --> "*" Veiculo
  Marca "1" --> "*" Modelo
  Modelo "1" --> "*" Veiculo
  Veiculo "*" -- "*" Acessorio
  Cliente <|-- ClienteEventual
  Cliente <|-- ClienteHabitual
  Cliente <|-- ClienteEmpresa
  Cliente "1" --> "*" Locacao
  Veiculo "1" --> "*" Locacao
  Filial "1" --> "*" Locacao : origem
  Filial "1" --> "*" Locacao : destino`,
    atividadesTitulo: "Realizar Locação de Veículo",
    atividades: `flowchart TD
  S((●)) --> A[Cliente solicita veiculo]
  A --> B[Buscar veiculo disponivel na filial]
  B --> V{Disponivel?}
  V -->|Nao| E[Sugerir alternativo] --> Fim(((⊗)))
  V -->|Sim| C[Selecionar acessorios]
  C --> D[Definir filial destino]
  D --> G[Calcular valor diaria + acessorios]
  G --> H[Aplicar desconto se Habitual/Empresa]
  H --> I[Registrar locacao e bloquear veiculo]
  I --> Fim`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Filial", descricao: "Cada filial em cidade única." },
      { id: "RF02", titulo: "Cadastrar Frota", descricao: "Veículos com modelo, marca e acessórios." },
      { id: "RF03", titulo: "Cadastrar Cliente", descricao: "Especialização Eventual/Habitual/Empresa." },
      { id: "RF04", titulo: "Realizar Locação", descricao: "Locação com origem e destino, cálculo de valor." },
      { id: "RF05", titulo: "Devolução em Outra Filial", descricao: "Permitir devolução em filial distinta." },
      { id: "RF06", titulo: "Aplicar Descontos", descricao: "Descontos para Habitual e Empresa." },
    ],
    sql: `CREATE TABLE cidade (cod SERIAL PRIMARY KEY, nome VARCHAR(80) UNIQUE);
CREATE TABLE filial (
  cod SERIAL PRIMARY KEY,
  endereco VARCHAR(200),
  cidade_cod INT UNIQUE REFERENCES cidade(cod)
);
CREATE TABLE marca (cod SERIAL PRIMARY KEY, nome VARCHAR(80));
CREATE TABLE modelo (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  preco_diaria NUMERIC(10,2) NOT NULL,
  marca_cod INT REFERENCES marca(cod)
);
CREATE TABLE veiculo (
  placa CHAR(7) PRIMARY KEY,
  cor VARCHAR(30),
  ano INT,
  modelo_cod INT REFERENCES modelo(cod),
  filial_cod INT REFERENCES filial(cod)
);
CREATE TABLE acessorio (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(80),
  custo NUMERIC(10,2)
);
CREATE TABLE veiculo_acessorio (
  placa CHAR(7) REFERENCES veiculo(placa),
  acess_cod INT REFERENCES acessorio(cod),
  PRIMARY KEY (placa, acess_cod)
);
CREATE TABLE cliente (
  id VARCHAR(20) PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  tipo VARCHAR(10) CHECK (tipo IN ('EVENTUAL','HABITUAL','EMPRESA')),
  desconto NUMERIC(5,2) DEFAULT 0
);
CREATE TABLE locacao (
  num SERIAL PRIMARY KEY,
  cliente_id VARCHAR(20) REFERENCES cliente(id),
  placa CHAR(7) REFERENCES veiculo(placa),
  filial_origem INT REFERENCES filial(cod),
  filial_destino INT REFERENCES filial(cod),
  dt_inicio DATE NOT NULL, dt_fim DATE,
  valor NUMERIC(10,2)
);`,
    historiasUsuario: [
      { id: "HU01", comoQuem: "Atendente", quero: "cadastrar clientes", paraQue: "diferenciar tipos", criterios: ["Eventual/Habitual/Empresa"] },
      { id: "HU02", comoQuem: "Atendente", quero: "consultar disponibilidade", paraQue: "agilizar locação", criterios: ["Por filial"] },
      { id: "HU03", comoQuem: "Atendente", quero: "registrar locação", paraQue: "alugar o veículo", criterios: ["Com acessórios e desconto"] },
      { id: "HU04", comoQuem: "Cliente", quero: "devolver em outra filial", paraQue: "ter flexibilidade", criterios: ["Filial destino registrada"] },
    ],
  },
  // ============ 10. CLÍNICA VETERINÁRIA ============
  {
    slug: "clinica-veterinaria-patas-cuidados",
    numero: "10",
    titulo: "Clínica Veterinária Patas & Cuidados",
    subtitulo: "Agendamento, atendimento e histórico médico de animais",
    miniMundo:
      "A clínica veterinária Patas & Cuidados deseja implantar um sistema para organizar o agendamento e o acompanhamento das consultas. O sistema cadastra tutores (nome, CPF, telefone e endereço) e animais (nome, espécie, raça, sexo, data de nascimento, peso e tutor responsável). Cada veterinário informa suas especialidades e os dias/horários disponíveis para atendimento. Tutores solicitam agendamento conforme especialidade, veterinário e horários livres, podendo cancelar ou reagendar respeitando o prazo definido pela clínica. Após o atendimento, o veterinário registra diagnóstico, procedimentos realizados, medicamentos prescritos e orientações ao tutor. A recepção consulta a agenda diária, confirma a chegada do animal e altera o status da consulta (agendada, confirmada, em atendimento, concluída, cancelada, não compareceu). O sistema permite consultar o histórico médico de cada animal e emitir relatórios de consultas realizadas, cancelamentos, faltas e atendimentos por veterinário ou período.",
    der: `erDiagram
  TUTOR ||--o{ ANIMAL : "responsavel"
  ESPECIE ||--o{ ANIMAL : "classifica"
  VETERINARIO }o--o{ ESPECIALIDADE : "possui"
  VETERINARIO ||--o{ DISPONIBILIDADE : "define"
  ANIMAL ||--o{ CONSULTA : "atendido"
  VETERINARIO ||--o{ CONSULTA : "realiza"
  ESPECIALIDADE ||--o{ CONSULTA : "referente"
  CONSULTA ||--o| ATENDIMENTO : "gera"
  ATENDIMENTO ||--o{ PRESCRICAO : "contem"
  MEDICAMENTO ||--o{ PRESCRICAO : "prescrito"
  ATENDIMENTO }o--o{ PROCEDIMENTO : "executa"
  CONSULTA ||--o{ HISTORICO_STATUS : "registra"
  TUTOR {
    string cpf PK
    string nome
    string telefone
    string endereco
  }
  ESPECIE {
    int cod PK
    string nome
  }
  ANIMAL {
    int id PK
    string nome
    string raca
    char sexo
    date dt_nascimento
    decimal peso
    string tutor_cpf FK
    int especie_cod FK
  }
  VETERINARIO {
    int crmv PK
    string nome
    string telefone
  }
  ESPECIALIDADE {
    int cod PK
    string nome
  }
  DISPONIBILIDADE {
    int id PK
    int crmv FK
    string dia_semana
    time hora_inicio
    time hora_fim
  }
  CONSULTA {
    int num PK
    date data
    time hora
    string status
    string origem_agendamento
    int animal_id FK
    int crmv FK
    int especialidade_cod FK
  }
  HISTORICO_STATUS {
    int id PK
    int consulta_num FK
    string status
    timestamp momento
  }
  ATENDIMENTO {
    int id PK
    int consulta_num FK
    string diagnostico
    string orientacoes
    decimal peso_aferido
  }
  PROCEDIMENTO {
    int cod PK
    string nome
    decimal valor
  }
  MEDICAMENTO {
    int cod PK
    string nome
    string apresentacao
  }
  PRESCRICAO {
    int id PK
    int atendimento_id FK
    int medicamento_cod FK
    string posologia
    int duracao_dias
  }`,
    conceitual: `flowchart LR
  TU[TUTOR] -- "1" --- R1{responsavel}
  R1 -- "N" --- AN[ANIMAL]
  ES[ESPECIE] -- "1" --- R2{classifica}
  R2 -- "N" --- AN
  VE[VETERINARIO] -- "N" --- R3{possui}
  R3 -- "N" --- EP[ESPECIALIDADE]
  VE -- "1" --- R4{define}
  R4 -- "N" --- DP[["DISPONIBILIDADE (fraca)"]]
  AN -- "1" --- R5{atendido}
  R5 -- "N" --- CO[CONSULTA]
  VE -- "1" --- R6{realiza}
  R6 -- "N" --- CO
  EP -- "1" --- R7{referente}
  R7 -- "N" --- CO
  CO -- "1" --- R8{gera}
  R8 -- "0..1" --- AT[ATENDIMENTO]
  CO -- "1" --- R9{registra}
  R9 -- "N" --- HS[["HISTORICO_STATUS (fraca)"]]
  AT -- "N" --- R10{executa}
  R10 -- "N" --- PC[PROCEDIMENTO]
  AT -- "1" --- R11{contem}
  R11 -- "N" --- PS[PRESCRICAO]
  ME[MEDICAMENTO] -- "1" --- R12{prescrito}
  R12 -- "N" --- PS
  TU --- A1(("<u>cpf</u>"))
  TU --- A2((nome))
  TU --- A3((telefone))
  TU --- A4((endereco))
  AN --- A5(("<u>id</u>"))
  AN --- A6((nome))
  AN --- A7((raca))
  AN --- A8((sexo))
  AN --- A9((dt_nascimento))
  AN --- A10((peso))
  ES --- A11(("<u>cod</u>"))
  ES --- A12((nome))
  VE --- A13(("<u>crmv</u>"))
  VE --- A14((nome))
  EP --- A15(("<u>cod</u>"))
  EP --- A16((nome))
  DP --- A17((dia_semana))
  DP --- A18((hora_inicio))
  DP --- A19((hora_fim))
  CO --- A20(("<u>num</u>"))
  CO --- A21((data))
  CO --- A22((hora))
  CO --- A23((status))
  AT --- A24(("<u>id</u>"))
  AT --- A25((diagnostico))
  AT --- A26((orientacoes))
  PC --- A27(("<u>cod</u>"))
  PC --- A28((valor))
  ME --- A29(("<u>cod</u>"))
  ME --- A30((apresentacao))
  PS --- A31((posologia))
  PS --- A32((duracao_dias))`,
    classes: `classDiagram
  class Tutor { +string cpf; +string nome; +string telefone; +string endereco; +solicitarConsulta() }
  class Animal { +int id; +string nome; +string raca; +char sexo; +Date dtNascimento; +decimal peso; +historicoMedico() }
  class Especie { +int cod; +string nome }
  class Veterinario { +int crmv; +string nome; +consultarAgenda(); +registrarAtendimento() }
  class Especialidade { +int cod; +string nome }
  class Disponibilidade { +string diaSemana; +Time horaInicio; +Time horaFim; +gerarSlots() }
  class Consulta { +int num; +Date data; +Time hora; +string status; +confirmar(); +cancelar(); +reagendar(Date) }
  class HistoricoStatus { +string status; +DateTime momento }
  class Atendimento { +int id; +string diagnostico; +string orientacoes; +decimal pesoAferido }
  class Procedimento { +int cod; +string nome; +decimal valor }
  class Medicamento { +int cod; +string nome; +string apresentacao }
  class Prescricao { +string posologia; +int duracaoDias }
  Tutor "1" --> "*" Animal
  Especie "1" --> "*" Animal
  Veterinario "*" -- "*" Especialidade
  Veterinario "1" *-- "*" Disponibilidade
  Animal "1" --> "*" Consulta
  Veterinario "1" --> "*" Consulta
  Especialidade "1" --> "*" Consulta
  Consulta "1" *-- "*" HistoricoStatus
  Consulta "1" --> "0..1" Atendimento
  Atendimento "*" -- "*" Procedimento
  Atendimento "1" *-- "*" Prescricao
  Medicamento "1" --> "*" Prescricao`,
    casosUsoDiagrama: `flowchart LR
  TUT([Tutor]) --- UC1(Cadastrar Animal)
  TUT --- UC2(Consultar Horarios Disponiveis)
  TUT --- UC3(Solicitar Agendamento de Consulta)
  TUT --- UC4(Cancelar / Reagendar Consulta)
  TUT --- UC5(Consultar Historico Medico do Animal)
  REC([Recepcionista]) --- UC6(Cadastrar Tutor)
  REC --- UC1
  REC --- UC7(Consultar Agenda Diaria)
  REC --- UC8(Confirmar Chegada do Animal)
  REC --- UC9(Alterar Status da Consulta)
  REC --- UC3
  VET([Veterinario]) --- UC10(Consultar Minha Agenda)
  VET --- UC11(Registrar Atendimento Clinico)
  VET --- UC5
  ADM([Administrador]) --- UC12(Cadastrar Veterinario e Especialidades)
  ADM --- UC13(Definir Horarios de Atendimento)
  ADM --- UC14(Emitir Relatorios Gerenciais)
  UC3 -. include .-> UC2
  UC4 -. include .-> UC15(Validar Prazo de Cancelamento)
  UC11 -. include .-> UC16(Prescrever Medicamentos)
  UC9 -. extend .-> UC17(Registrar Nao Comparecimento)
  UC8 -. include .-> UC9`,
    atividadesTitulo: "Agendar Consulta Veterinária",
    atividades: `flowchart TD
  S((●)) --> A[Tutor seleciona o animal]
  A --> B[Escolher especialidade desejada]
  B --> C[Sistema lista veterinarios da especialidade]
  C --> D[Tutor escolhe veterinario]
  D --> E[Sistema calcula horarios livres da disponibilidade]
  E --> V{Existe horario livre?}
  V -->|Nao| F[Sugerir outra data ou veterinario] --> C
  V -->|Sim| G[Tutor seleciona data e hora]
  G --> H{Animal ja tem consulta no mesmo horario?}
  H -->|Sim| I[Exibir conflito de agenda] --> G
  H -->|Nao| J[Gravar consulta com status Agendada]
  J --> K[Registrar historico de status]
  K --> L[Enviar confirmacao ao tutor]
  L --> Fim(((⊗)))`,
    requisitosFuncionais: [
      { id: "RF01", titulo: "Cadastrar Tutor", descricao: "O sistema deve permitir CRUD de tutores com nome, CPF (único), telefone e endereço, validando o formato do CPF." },
      { id: "RF02", titulo: "Cadastrar Animal", descricao: "O sistema deve permitir CRUD de animais com nome, espécie, raça, sexo, data de nascimento, peso e vínculo obrigatório a um tutor responsável." },
      { id: "RF03", titulo: "Cadastrar Veterinário", descricao: "O sistema deve permitir ao administrador cadastrar veterinários com CRMV único, nome e contato." },
      { id: "RF04", titulo: "Manter Especialidades do Veterinário", descricao: "O sistema deve permitir associar uma ou mais especialidades a cada veterinário (relação N:N)." },
      { id: "RF05", titulo: "Definir Disponibilidade de Atendimento", descricao: "O sistema deve permitir registrar os dias da semana e faixas de horário em que cada veterinário atende, gerando os horários passíveis de agendamento." },
      { id: "RF06", titulo: "Consultar Horários Disponíveis", descricao: "O sistema deve exibir os horários livres filtrando por especialidade, veterinário e data, excluindo horários já ocupados." },
      { id: "RF07", titulo: "Agendar Consulta", descricao: "O sistema deve permitir ao tutor ou à recepção agendar consulta para um animal em horário livre, criando a consulta com status 'agendada'." },
      { id: "RF08", titulo: "Cancelar Consulta", descricao: "O sistema deve permitir cancelar uma consulta desde que respeitado o prazo mínimo definido pela clínica (ex.: 24 horas de antecedência)." },
      { id: "RF09", titulo: "Reagendar Consulta", descricao: "O sistema deve permitir alterar data/hora de uma consulta dentro do prazo, liberando o horário anterior e validando o novo horário." },
      { id: "RF10", titulo: "Consultar Agenda Diária", descricao: "A recepção deve visualizar todas as consultas do dia com animal, tutor, veterinário, horário e status." },
      { id: "RF11", titulo: "Confirmar Chegada do Animal", descricao: "O sistema deve permitir à recepção confirmar a chegada, alterando o status da consulta para 'confirmada' e depois 'em atendimento'." },
      { id: "RF12", titulo: "Alterar Status da Consulta", descricao: "O sistema deve controlar os status agendada, confirmada, em atendimento, concluída, cancelada e não compareceu, mantendo histórico de cada mudança." },
      { id: "RF13", titulo: "Registrar Atendimento Clínico", descricao: "O veterinário deve registrar diagnóstico, peso aferido, procedimentos realizados e orientações ao tutor, concluindo a consulta." },
      { id: "RF14", titulo: "Prescrever Medicamentos", descricao: "O sistema deve permitir prescrever medicamentos com posologia e duração, vinculados ao atendimento." },
      { id: "RF15", titulo: "Consultar Histórico Médico do Animal", descricao: "O sistema deve exibir todas as consultas, diagnósticos, procedimentos e prescrições anteriores de um animal em ordem cronológica." },
      { id: "RF16", titulo: "Emitir Relatórios Gerenciais", descricao: "O sistema deve gerar relatórios de consultas realizadas, cancelamentos, faltas e atendimentos por veterinário ou por período." },
    ],
    sql: `CREATE TABLE tutor (
  cpf CHAR(11) PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  endereco VARCHAR(200)
);
CREATE TABLE especie (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(60) NOT NULL UNIQUE
);
CREATE TABLE animal (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  raca VARCHAR(80),
  sexo CHAR(1) CHECK (sexo IN ('M','F')),
  dt_nascimento DATE,
  peso NUMERIC(6,2) CHECK (peso > 0),
  tutor_cpf CHAR(11) NOT NULL REFERENCES tutor(cpf),
  especie_cod INT NOT NULL REFERENCES especie(cod)
);
CREATE TABLE veterinario (
  crmv INT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  telefone VARCHAR(20)
);
CREATE TABLE especialidade (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(80) NOT NULL UNIQUE
);
CREATE TABLE vet_especialidade (
  crmv INT REFERENCES veterinario(crmv),
  especialidade_cod INT REFERENCES especialidade(cod),
  PRIMARY KEY (crmv, especialidade_cod)
);
CREATE TABLE disponibilidade (
  id SERIAL PRIMARY KEY,
  crmv INT NOT NULL REFERENCES veterinario(crmv),
  dia_semana VARCHAR(10) NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fim TIME NOT NULL,
  CHECK (hora_fim > hora_inicio)
);
CREATE TABLE consulta (
  num SERIAL PRIMARY KEY,
  data DATE NOT NULL,
  hora TIME NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'agendada'
    CHECK (status IN ('agendada','confirmada','em_atendimento','concluida','cancelada','nao_compareceu')),
  origem_agendamento VARCHAR(20) DEFAULT 'tutor',
  animal_id INT NOT NULL REFERENCES animal(id),
  crmv INT NOT NULL REFERENCES veterinario(crmv),
  especialidade_cod INT NOT NULL REFERENCES especialidade(cod),
  UNIQUE (crmv, data, hora)
);
CREATE TABLE historico_status (
  id SERIAL PRIMARY KEY,
  consulta_num INT NOT NULL REFERENCES consulta(num) ON DELETE CASCADE,
  status VARCHAR(20) NOT NULL,
  momento TIMESTAMP NOT NULL DEFAULT now()
);
CREATE TABLE atendimento (
  id SERIAL PRIMARY KEY,
  consulta_num INT NOT NULL UNIQUE REFERENCES consulta(num),
  diagnostico TEXT NOT NULL,
  orientacoes TEXT,
  peso_aferido NUMERIC(6,2)
);
CREATE TABLE procedimento (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  valor NUMERIC(10,2) NOT NULL DEFAULT 0
);
CREATE TABLE atendimento_procedimento (
  atendimento_id INT REFERENCES atendimento(id) ON DELETE CASCADE,
  procedimento_cod INT REFERENCES procedimento(cod),
  PRIMARY KEY (atendimento_id, procedimento_cod)
);
CREATE TABLE medicamento (
  cod SERIAL PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  apresentacao VARCHAR(80)
);
CREATE TABLE prescricao (
  id SERIAL PRIMARY KEY,
  atendimento_id INT NOT NULL REFERENCES atendimento(id) ON DELETE CASCADE,
  medicamento_cod INT NOT NULL REFERENCES medicamento(cod),
  posologia VARCHAR(200) NOT NULL,
  duracao_dias INT CHECK (duracao_dias > 0)
);`,
    historiasUsuario: [
      {
        id: "HU01",
        comoQuem: "Tutor",
        quero: "cadastrar meu animal com espécie, raça, sexo, data de nascimento e peso",
        paraQue: "que a clínica tenha os dados corretos antes do atendimento",
        criterios: [
          "Dado que informo todos os campos obrigatórios, quando salvo, então o animal fica vinculado ao meu CPF",
          "Não é possível salvar animal sem tutor responsável",
          "Peso deve ser maior que zero e data de nascimento não pode ser futura",
        ],
      },
      {
        id: "HU02",
        comoQuem: "Tutor",
        quero: "consultar os horários disponíveis por especialidade e veterinário e solicitar o agendamento",
        paraQue: "marcar a consulta no melhor horário para mim",
        criterios: [
          "A lista mostra apenas horários dentro da disponibilidade do veterinário e ainda não ocupados",
          "Ao confirmar, a consulta é criada com status 'agendada' e recebo a confirmação",
          "O sistema bloqueia dois agendamentos do mesmo animal no mesmo horário",
        ],
      },
      {
        id: "HU03",
        comoQuem: "Tutor",
        quero: "cancelar ou reagendar minha consulta dentro do prazo da clínica",
        paraQue: "liberar o horário para outro tutor sem penalidade",
        criterios: [
          "Cancelamento só é permitido com no mínimo 24h de antecedência",
          "Fora do prazo, o sistema exibe mensagem e orienta contato com a recepção",
          "No reagendamento, o horário anterior volta a ficar disponível",
        ],
      },
      {
        id: "HU04",
        comoQuem: "Recepcionista",
        quero: "visualizar a agenda diária e confirmar a chegada do animal",
        paraQue: "organizar a ordem dos atendimentos do dia",
        criterios: [
          "A agenda lista animal, tutor, veterinário, horário e status",
          "Ao confirmar chegada, o status muda para 'confirmada' e depois 'em atendimento'",
          "Toda mudança de status fica registrada no histórico com data e hora",
        ],
      },
      {
        id: "HU05",
        comoQuem: "Veterinário",
        quero: "registrar diagnóstico, procedimentos, medicamentos e orientações após o atendimento",
        paraQue: "manter o prontuário do animal completo",
        criterios: [
          "Só é possível registrar atendimento em consulta com status 'em atendimento'",
          "Ao salvar, a consulta passa automaticamente para 'concluída'",
          "Cada medicamento prescrito exige posologia e duração em dias",
        ],
      },
      {
        id: "HU06",
        comoQuem: "Administrador",
        quero: "emitir relatórios de consultas realizadas, cancelamentos, faltas e atendimentos por veterinário ou período",
        paraQue: "acompanhar a produtividade e reduzir faltas na clínica",
        criterios: [
          "Filtros por período, veterinário e especialidade",
          "Relatório mostra totais e percentual de faltas e cancelamentos",
          "Permite exportar o resultado",
        ],
      },
    ],
  },
];

export const getCaseBySlug = (slug: string) => cases.find((c) => c.slug === slug);
