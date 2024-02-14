USE [DB_teste]
GO

/****** Object:  Schema [APC]    Script Date: 10/02/2024 18:33:31 ******/
IF NOT EXISTS (SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'APC')
BEGIN
    EXEC('CREATE SCHEMA APC')
END
GO

CREATE TABLE APC.Segmentos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
	status BIT NOT NULL,
	createdAt DATETIMEOFFSET NOT NULL,
	updatedAt DATETIMEOFFSET NOT NULL
);

-- Tabela Produto
CREATE TABLE APC.Produtos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
	status BIT NOT NULL,
	createdAt DATETIMEOFFSET NOT NULL,
	updatedAt DATETIMEOFFSET NOT NULL,
    idSegmento INT NOT NULL,
    FOREIGN KEY (idSegmento) REFERENCES APC.Segmentos(id)
);

-- Tabela Arquivo
CREATE TABLE APC.Arquivos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valor VARCHAR(255) NOT NULL,
	url BIT NOT NULL,
	usuario VARCHAR(255) NOT NULL,
	createdAt DATETIMEOFFSET NOT NULL,
	updatedAt DATETIMEOFFSET NOT NULL,
    idProduto INT NOT NULL,
    FOREIGN KEY (idProduto) REFERENCES APC.Produtos(id)
);

CREATE TABLE APC.Autorizacoes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL,
	admin BIT NOT NULL,
	createdAt DATETIMEOFFSET NOT NULL,
	updatedAt DATETIMEOFFSET NOT NULL,
    idSegmento INT NOT NULL,
    FOREIGN KEY (idSegmento) REFERENCES APC.Segmentos(id)
);