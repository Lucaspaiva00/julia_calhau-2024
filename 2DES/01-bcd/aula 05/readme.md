
<div align = "center">
<img src ="bd.gif" width="500"/>
</div>

# Aula 05 - Criando Banco através do MER

## Criar Script

Vamos criar um banco de dados sobre uma academia, neste caso vamos usar o Diagrama a seguir para que possamos realizar o script do banco de dados

(imagem da lousa)

### Agora vamos popular o banco de dados com as informações

```sql
INSERT INTO Clientes (nome, idade) VALUES
('Ana Silva', 28),
('Pedro Oliveira', 35),
('Mariana Souza', 42),
('Lucas Lima', 23),
('Carla Santos', 31);

-- Dados para Treinos
INSERT INTO Treinos (nome, tipo, duracao, data_adicionado ) VALUES
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

## Perguntas utilizando select

- 1. Listar todos os clientes da academia

- 2. Encontrar todos os clientes com mais de 30 anos

- 3. Listar todos os treinos disponíveis

- 4. Encontrar todos os clientes que estão inscritos em qualquer treino com ID 5

- 5. Listar todos os treinos aos quais um cliente específico (ID 2) está inscrito

- 6. Encontrar o número total de treinos em que um cliente específico (ID 3) está inscrito

- 7. Listar todos os clientes que não estão inscritos em nenhum treino

- 8. Encontrar os treinos que têm duração superior a 60 minutos

- 9. Listar os clientes que frequentam treinos do tipo "Cardio"

- 10. Encontrar o cliente com o maior número de inscrições
