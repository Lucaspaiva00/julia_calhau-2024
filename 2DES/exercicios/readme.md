# Resposta aula 05 BD
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