# Aula 12 - Subconsultas

## Meet: https://meet.google.com/zix-civr-qpg

# Subconsultas

Subconsultas (ou **subqueries**) são consultas SQL aninhadas dentro de outra consulta maior. Elas são usadas para calcular ou filtrar resultados intermediários que a consulta principal utiliza. Basicamente, uma subconsulta retorna dados que servem como entrada para outra consulta.

## Características das Subconsultas:

### Localização:
- Podem ser usadas na cláusula `SELECT`, `FROM`, `WHERE`, ou outras partes da consulta SQL.
- Geralmente estão entre parênteses `( )`.

### Tipos de Subconsultas:
1. **Subconsulta Escalar**:  
   Retorna um único valor (exemplo: uma coluna ou um cálculo).

2. **Subconsulta Multivalor**:  
   Retorna uma lista de valores (exemplo: um conjunto de resultados para comparação com `IN` ou `ANY`).

3. **Subconsulta Correlacionada**:  
   Depende de valores da consulta principal.

### Uso Típico:
- Filtrar registros com base em valores retornados.
- Comparar resultados intermediários.
- Ajudar em cálculos mais complexos.


# Banco de Dados para Teste

```sql
-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS SubconsultasBD;
USE SubconsultasBD;

-- Tabela de Cursos
CREATE TABLE cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    area VARCHAR(50) NOT NULL
);

-- Tabela de Alunos
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- Tabela de Produtos
CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

-- Tabela de Matrículas (Relaciona alunos e cursos)
CREATE TABLE matriculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    curso_id INT,
    data_matricula DATE NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- Inserir dados na tabela de Cursos
INSERT INTO cursos (nome, area) VALUES 
('Engenharia de Software', 'Tecnologia'),
('Medicina', 'Saúde'),
('Administração', 'Negócios'),
('Design Gráfico', 'Artes'),
('Redes de Computadores', 'Tecnologia');

-- Inserir dados na tabela de Alunos
INSERT INTO alunos (nome, curso_id) VALUES 
('Alice', 1),
('Bruno', 2),
('Carla', 3),
('Daniel', 5),
('Eduarda', 1),
('Fabiana', NULL); -- Aluno sem curso

-- Inserir dados na tabela de Produtos
INSERT INTO produtos (nome, preco, categoria) VALUES 
('Notebook', 3000.00, 'Eletrônicos'),
('Cadeira de Escritório', 450.00, 'Móveis'),
('Mesa de Escritório', 700.00, 'Móveis'),
('Smartphone', 2500.00, 'Eletrônicos'),
('Luminária', 150.00, 'Móveis');

-- Inserir dados na tabela de Matrículas
INSERT INTO matriculas (aluno_id, curso_id, data_matricula) VALUES 
(1, 1, '2024-01-10'),
(4, 5, '2024-02-15'),
(5, 1, '2024-03-20');
```


#Banco de dados Atividade

```sql
-- Criar o banco de dados
CREATE DATABASE Empresa;

-- Usar o banco de dados
USE Empresa;

-- Tabela: Departamentos
CREATE TABLE departamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL
);

-- Tabela: Funcionários
CREATE TABLE funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);

-- Tabela: Produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

-- Tabela: Clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela: Pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    valor_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Inserir dados na tabela de departamentos
INSERT INTO departamentos (nome, cidade) VALUES
('Recursos Humanos', 'São Paulo'),
('Tecnologia', 'São Paulo'),
('Vendas', 'Rio de Janeiro');

-- Inserir dados na tabela de funcionários
INSERT INTO funcionarios (nome, departamento_id) VALUES
('Alice', 1),
('Bruno', 2),
('Carla', 3),
('Daniel', 1);

-- Inserir dados na tabela de produtos
INSERT INTO produtos (nome, preco, categoria) VALUES
('Notebook', 3000.00, 'Eletrônicos'),
('Cadeira', 500.00, 'Móveis'),
('Mesa', 700.00, 'Móveis'),
('Smartphone', 2000.00, 'Eletrônicos');

-- Inserir dados na tabela de clientes
INSERT INTO clientes (nome) VALUES
('João'),
('Maria'),
('Pedro'),
('Ana');

-- Inserir dados na tabela de pedidos
INSERT INTO pedidos (cliente_id, valor_total) VALUES
(1, 1200.00),
(2, 900.00),
(3, 1500.00),
(4, 800.00);
```

# Exercicios

# Exercícios de Subconsultas

## **1. Listar os funcionários que trabalham em departamentos localizados na cidade "São Paulo".**  
Identifique os nomes dos funcionários cujos departamentos estão localizados na cidade de "São Paulo".

---
<!-- ```sql
SELECT nome 
FROM funcionarios 
WHERE departamento_id IN (
    SELECT id 
    FROM departamentos 
    WHERE cidade = 'São Paulo'
);
``` -->

## **2. Obter o nome do departamento com o maior número de funcionários.**  
Encontre o nome do departamento que possui o maior número de funcionários alocados.

---
<!-- ```sql
SELECT nome 
FROM departamentos 
WHERE id = (
    SELECT departamento_id 
    FROM funcionarios 
    GROUP BY departamento_id 
    ORDER BY COUNT(*) DESC 
    LIMIT 1
);

``` -->

## **3. Listar os produtos com preço maior do que o preço médio dos produtos.**  
Selecione os produtos cujo preço está acima da média de todos os produtos cadastrados.
<!-- ```sql
SELECT nome 
FROM produtos 
WHERE preco > (
    SELECT AVG(preco) 
    FROM produtos
);
``` -->



## **4. Encontrar os clientes que fizeram pedidos com valor total superior ao pedido médio.**  
Liste os clientes que realizaram pedidos cujo valor total é maior que a média de todos os pedidos.
<!-- ```sql
SELECT nome 
FROM clientes 
WHERE id IN (
    SELECT cliente_id 
    FROM pedidos 
    WHERE valor_total > (
        SELECT AVG(valor_total) 
        FROM pedidos
    )
);
``` -->

## **5. Identificar os funcionários que não estão associados a nenhum departamento.**  
Encontre os funcionários que não possuem um departamento atribuído.
<!-- 
```sql
SELECT nome 
FROM funcionarios 
WHERE departamento_id NOT IN (
    SELECT id 
    FROM departamentos
);
``` -->

## **6. Listar os nomes dos departamentos que possuem produtos na categoria "Eletrônicos".**  
Identifique os nomes dos departamentos que estão relacionados a produtos da categoria "Eletrônicos".

<!-- ```sql
SELECT DISTINCT d.nome 
FROM departamentos d 
WHERE d.id IN (
    SELECT f.departamento_id 
    FROM funcionarios f 
    JOIN produtos p ON f.id = p.id 
    WHERE p.categoria = 'Eletrônicos'
);
``` -->

## **7. Listar os clientes que fizeram pelo menos um pedido superior a R$ 1.000,00.**  
Selecione os clientes que possuem pelo menos um pedido com valor total maior que R$ 1.000,00.

<!-- ```sql
SELECT nome 
FROM clientes 
WHERE id IN (
    SELECT cliente_id 
    FROM pedidos 
    WHERE valor_total > 1000.00
);
``` -->

## **8. Encontrar o produto mais caro.**  
Descubra qual é o produto mais caro na tabela de produtos.

<!-- ```sql
SELECT nome 
FROM produtos 
WHERE preco = (
    SELECT MAX(preco) 
    FROM produtos
);
``` -->

## **9. Listar os departamentos que possuem mais de um funcionário.**  
Identifique os departamentos que têm mais de um funcionário associado.
<!-- 
```sql
SELECT nome 
FROM departamentos 
WHERE id IN (
    SELECT departamento_id 
    FROM funcionarios 
    GROUP BY departamento_id 
    HAVING COUNT(*) > 1
);
``` -->

## **10. Encontrar os clientes que nunca fizeram pedidos.**  
Liste os nomes dos clientes que ainda não realizaram nenhum pedido.
<!-- ```sql
SELECT nome 
FROM clientes 
WHERE id NOT IN (
    SELECT cliente_id 
    FROM pedidos
);
``` -->



# Link Form:
https://forms.gle/pAcV1iob5bAj8gkv5
