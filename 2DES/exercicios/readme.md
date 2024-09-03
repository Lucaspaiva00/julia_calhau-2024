# Resposta aula 05 BD

### Criar BD Script

```sql
-- Criação das tabelas

-- Tabela de Clientes
CREATE TABLE Clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT
);

-- Tabela de Treinos
CREATE TABLE Treinos (
    id_treino INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    tipo VARCHAR(50),
    duracao INT,  -- Duração em minutos
    data_adicionado DATE
);

-- Tabela de Inscricoes
CREATE TABLE Inscricoes (
    id_cliente INT,
    id_treino INT,
    PRIMARY KEY (id_cliente, id_treino),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_treino) REFERENCES Treinos(id_treino)
);

-- Inserção de dados

-- Dados para Clientes
INSERT INTO Clientes (nome, idade) VALUES
('Ana Silva', 28),
('Pedro Oliveira', 35),
('Mariana Souza', 42),
('Lucas Lima', 23),
('Carla Santos', 31);

-- Dados para Treinos
INSERT INTO Treinos (nome, tipo, duracao, data_adicionado) VALUES
('Treino Cardio 1', 'Cardio', 45, '2024-01-15'),
('Treino Cardio 2', 'Cardio', 60, '2024-02-20'),
('Treino Força 1', 'Força', 50, '2024-03-10'),
('Treino Força 2', 'Força', 70, '2024-04-05'),
('Treino Yoga', 'Flexibilidade', 40, '2024-05-01');

-- Dados para Inscricoes
INSERT INTO Inscricoes (id_cliente, id_treino) VALUES
(1, 1),
(1, 3),
(2, 2),
(2, 4),
(3, 5),
(4, 1),
(4, 2),
(4, 3),
(5, 4);
```

## Resposta das perguntas


```sql
-- 1. Listar todos os clientes da academia
SELECT * FROM Clientes;

-- 2. Encontrar todos os clientes com mais de 30 anos
SELECT nome, idade FROM Clientes WHERE idade > 30;

-- 3. Listar todos os treinos disponíveis
SELECT nome, tipo FROM Treinos;

-- 4. Encontrar todos os clientes que estão inscritos em qualquer treino com ID 5
SELECT nome
FROM Clientes
WHERE id_cliente IN (
    SELECT id_cliente
    FROM Inscricoes
    WHERE id_treino = 5
);

-- 5. Listar todos os treinos aos quais um cliente específico (ID 2) está inscrito
SELECT nome, tipo
FROM Treinos
WHERE id_treino IN (
    SELECT id_treino
    FROM Inscricoes
    WHERE id_cliente = 2
);

-- 6. Encontrar o número total de treinos em que um cliente específico (ID 3) está inscrito
SELECT COUNT(*) AS total_treinos
FROM Inscricoes
WHERE id_cliente = 3;

-- 7. Listar todos os clientes que não estão inscritos em nenhum treino
SELECT nome
FROM Clientes
WHERE id_cliente NOT IN (
    SELECT DISTINCT id_cliente
    FROM Inscricoes
);

-- 8. Encontrar os treinos que têm duração superior a 60 minutos
SELECT nome, duracao
FROM Treinos
WHERE duracao > 60;

-- 9. Listar os clientes que frequentam treinos do tipo "Cardio"
SELECT nome
FROM Clientes
WHERE id_cliente IN (
    SELECT id_cliente
    FROM Inscricoes
    WHERE id_treino IN (
        SELECT id_treino
        FROM Treinos
        WHERE tipo = 'Cardio'
    )
);

-- 10. Encontrar o cliente com o maior número de inscrições
SELECT nome
FROM Clientes
WHERE id_cliente = (
    SELECT id_cliente
    FROM Inscricoes
    GROUP BY id_cliente
    ORDER BY COUNT(*) DESC
    LIMIT 1
);
```