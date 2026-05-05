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
  D[(DEPARTAMENTO<br/>sigla, nome)] -->|1:N possui| S[(SETOR<br/>sigla, nome)]
  S -->|1:N responsavel| B[(BEM_MOVEL<br/>numero, descricao,<br/>data, valor)]
  B -->|1:N sofre| O[(OCORRENCIA<br/>nro, data, descricao)]
  T[(TIPO_DANO<br/>codigo, descricao)] -->|1:N classifica| O
  B -->|1:N historico| TR[(TRANSFERENCIA<br/>data, origem, destino)]
  S -->|origem| TR
  S -->|destino| TR`,
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
  Q[(QUADRA<br/>numero, nome, metragem)] -->|1:N| L[(LOTE *fraca*<br/>seq, dt_compra, situacao)]
  L -->|1:N| J[(JAZIGO *fraca*<br/>letra, situacao)]
  P[(PROPRIETARIO<br/>id, nome, tipo PF/PJ)] -->|1:N possui| L
  J -.->|0:1 ocupa| PE[(PESSOA_ENTERRADA<br/>nome, dt_nasc, dt_obito)]`,
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
  CD[(CASA_DETENCAO)] -->|1:N| PV[(PAVILHAO *fraca*<br/>sexo)]
  PV -->|1:N| CE[(CELA *fraca*<br/>num, capacidade)]
  CE -->|1:N| DT[(DETENTO<br/>numero, nome)]
  DT <-->|N:N reclusao| DL[(DELITO)]
  DT -->|1:N| RV[(REGISTRO_VISITA)]
  DT -->|1:N| RM[(REMANEJAMENTO<br/>data, origem, destino)]`,
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
  O[(ONIBUS<br/>placa, km, tipo)] -->|N:N historico| L[(LINHA<br/>numero, nome)]
  M[(MOTORISTA<br/>cpf, cnh)] -->|N:N historico| L
  L -->|N:N| PP[(PONTO_PARADA *fraca*)]
  R[(RUA)] -->|1:N| PP
  B[(BAIRRO)] -->|1:N| R
  O -->|1:N| MT[(MANUTENCAO<br/>data, tipo)]`,
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
  F[(FABRICANTE)] -->|1:N| EX[(EXTINTOR<br/>cod, dt_fab)]
  RV[(REVENDEDOR)] -->|1:N| EX
  EX <-->|N:N| CI[(CAUSA_INCENDIO<br/>periodo_meses)]
  EX -->|N:N data| RC[(RECARGA)]
  ER[(EMPRESA_RECARGA)] -->|1:N| RC
  AN[(ANDAR)] -->|1:N| PC[(PONTO_COLOCACAO *fraca*)]
  EX -->|N:N historico| PC`,
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
  CL[(CLIENTE)] -->|1:N| PD[(PEDIDO<br/>num, data, desconto)]
  PD -->|1:N| IP[(ITEM_PEDIDO<br/>qtd_ped, qtd_atend, qtd_pend)]
  PR[(PRODUTO<br/>estoque, preco)] -->|1:N| IP
  PR <-->|N:N| FN[(FORNECEDOR)]
  FN -->|1:N| SC[(SOLICITACAO_COMPRA)]
  SC -->|1:N| IS[(ITEM_SOLICITACAO)]
  PR -->|1:N| IS`,
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
  PJ[(PROJETO)] -.->|1:N subprojeto| PJ
  CE[(CENTRO_ESTUDOS)] -->|1:N| PJ
  PJ -->|1:N| ST[(STATUS_PROJETO)]
  PR[(PROFESSOR)] <-->|N:N| PJ
  AL[(ALUNO)] <-->|N:N| PJ
  IF[(INSTITUICAO<br/>FOMENTADORA)] <-->|N:N valor| PJ
  CO[(COLABORADOR)] <-->|N:N| PJ
  OA[(ORGANISMO<br/>ADJUNTO)] <-->|N:N| PJ
  CU[(CURSO)] -->|1:N| AL`,
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
  FN[(FUNCIONARIO)] -->|1:N| AR[(AREA_PLANTIO)]
  TC[(TIPO_CULTURA)] -->|1:N| AR
  TC <-->|N:N suscetibilidade| PR[(PRAGA)]
  PR <-->|N:N combate| AG[(AGROTOXICO)]
  AR -->|1:N| AP[(APLICACAO<br/>preventiva/corretiva)]
  AG -->|1:N| AP
  PR -.->|0:N corretiva| AP`,
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
  CD[(CIDADE)] -->|1:1| FL[(FILIAL)]
  FL -->|1:N| VC[(VEICULO<br/>placa, ano)]
  MC[(MARCA)] -->|1:N| MO[(MODELO<br/>preco_diaria)]
  MO -->|1:N| VC
  VC <-->|N:N| AC[(ACESSORIO)]
  CL[(CLIENTE)] -.->|generalizacao| CE[(EVENTUAL)] & CH[(HABITUAL)] & CP[(EMPRESA)]
  CL -->|1:N| LC[(LOCACAO<br/>dt_inicio, dt_fim, valor)]
  VC -->|1:N| LC
  FL -->|origem| LC
  FL -->|destino| LC`,
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
];

export const getCaseBySlug = (slug: string) => cases.find((c) => c.slug === slug);
