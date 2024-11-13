# Aula 11
- Link para a sala do meet (Lucas Paiva): https://meet.google.com/owq-otpx-rvz
- Link para a sala do meet (Robson Souza): https://meet.google.com/uxu-yknx-kpw

## Banco de Dados RH de uma empresa

```sql
-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS rh_empresa;
USE rh_empresa;

-- Criação da Tabela de Departamentos
CREATE TABLE IF NOT EXISTS departamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
);

-- Inserção de Departamentos
INSERT INTO departamentos (nome) VALUES 
    ('TI'),
    ('Recursos Humanos'),
    ('Financeiro'),
    ('Marketing'),
    ('Vendas');

-- Criação da Tabela de Cargos
CREATE TABLE IF NOT EXISTS cargos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_cargo VARCHAR(255) NOT NULL
);

-- Inserção de Cargos
INSERT INTO cargos (nome_cargo) VALUES 
    ('Analista de Sistemas'),
    ('Gerente de TI'),
    ('Assistente Administrativo'),
    ('Coordenador de Marketing'),
    ('Vendedor');

-- Criação da Tabela de Funcionários
CREATE TABLE IF NOT EXISTS funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telefone VARCHAR(15),
    data_admissao DATE,
    departamento_id INT,
    cargo_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id),
    FOREIGN KEY (cargo_id) REFERENCES cargos(id)
);

-- Inserção de Funcionários
INSERT INTO funcionarios (nome, email, telefone, data_admissao, departamento_id, cargo_id) VALUES
    ('João Silva', 'joao.silva@email.com', '1234567890', '2022-03-15', 1, 1), -- TI, Analista de Sistemas
    ('Maria Oliveira', 'maria.oliveira@email.com', '2345678901', '2020-06-01', 2, 3), -- RH, Assistente Administrativo
    ('Carlos Pereira', 'carlos.pereira@email.com', '3456789012', '2021-09-23', 3, 4), -- Financeiro, Coordenador de Marketing
    ('Fernanda Souza', 'fernanda.souza@email.com', '4567890123', '2023-01-10', 4, 2), -- Marketing, Gerente de TI
    ('Roberto Lima', 'roberto.lima@email.com', '5678901234', '2022-11-25', 5, 5); -- Vendas, Vendedor


```
Vamos fazer um CRUD para o banco a seguir 


