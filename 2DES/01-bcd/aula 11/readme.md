# Aula Banco de dados - JOINs

## Criando o banco para os exercicios:


```sql

CREATE DATABASE LojaOS;
USE LojaOS;


CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20),
    data_cadastro DATE
);

INSERT INTO clientes (nome, email, telefone, data_cadastro) VALUES
('Carlos Silva', 'carlos@email.com', '999999999', '2023-01-10'),
('Ana Souza', 'ana@email.com', '988888888', '2023-02-12'),
('João Oliveira', 'joao@email.com', '977777777', '2023-03-15'),
('Maria Pereira', 'maria@email.com', '966666666', '2023-04-20'),
('Pedro Santos', 'pedro@email.com', '955555555', '2023-05-25'),
('Luana Costa', 'luana@email.com', '944444444', '2023-06-05'),
('Rafael Lima', 'rafael@email.com', '933333333', '2023-07-18'),
('Juliana Almeida', 'juliana@email.com', '922222222', '2023-08-22'),
('Ricardo Gomes', 'ricardo@email.com', '911111111', '2023-09-10'),
('Fernanda Rocha', 'fernanda@email.com', '900000000', '2023-10-01');


CREATE TABLE produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    preco DECIMAL(10, 2),
    categoria VARCHAR(50)
);

INSERT INTO produtos (nome, preco, categoria) VALUES
('Smartphone A1', 1500.00, 'Eletrônicos'),
('Smartphone B2', 2000.00, 'Eletrônicos'),
('Fone de ouvido X', 300.00, 'Acessórios'),
('Smartwatch Z', 700.00, 'Acessórios'),
('Notebook Dell', 3000.00, 'Eletrônicos'),
('Cadeira Gamer', 800.00, 'Móveis'),
('Mouse Óptico', 100.00, 'Acessórios'),
('Teclado Mecânico', 250.00, 'Acessórios'),
('Impressora Laser', 1200.00, 'Eletrônicos'),
('Cadeira de Escritório', 500.00, 'Móveis');


CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    data_pedido DATE,
    status VARCHAR(20),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO pedidos (id_cliente, data_pedido, status) VALUES
(1, '2023-11-01', 'Entregue'),
(2, '2023-11-05', 'Pendente'),
(3, '2023-11-07', 'Cancelado'),
(4, '2023-11-10', 'Entregue'),
(5, '2023-11-12', 'Pendente'),
(6, '2023-11-13', 'Entregue'),
(7, '2023-11-14', 'Pendente'),
(8, '2023-11-15', 'Entregue'),
(9, '2023-11-16', 'Cancelado'),
(10, '2023-11-17', 'Entregue');


CREATE TABLE itens_pedido (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco DECIMAL(10, 2),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco) VALUES
(1, 1, 1, 1500.00),
(1, 3, 2, 300.00),
(2, 2, 1, 2000.00),
(2, 4, 1, 700.00),
(3, 5, 1, 3000.00),
(4, 6, 1, 800.00),
(4, 8, 2, 250.00),
(5, 7, 1, 100.00),
(6, 9, 1, 1200.00),
(7, 10, 1, 500.00);

CREATE TABLE pagamentos (
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    data_pagamento DATE,
    valor_pago DECIMAL(10, 2),
    metodo_pagamento VARCHAR(50),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

INSERT INTO pagamentos (id_pedido, data_pagamento, valor_pago, metodo_pagamento) VALUES
(1, '2023-11-01', 1800.00, 'Cartão de Crédito'),
(2, '2023-11-06', 2700.00, 'Boleto'),
(4, '2023-11-10', 1050.00, 'Pix'),
(6, '2023-11-13', 1700.00, 'Cartão de Crédito'),
(8, '2023-11-15', 1750.00, 'Pix'),
(10, '2023-11-17', 500.00, 'Cartão de Crédito');

```


# Exercicios:

1. Listar todos os clientes e os pedidos que eles fizeram.
<!-- ```sql
SELECT c.id_cliente, c.nome, p.id_pedido, p.data_pedido, p.status
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente;

   ``` -->
2. Mostrar todos os produtos que foram comprados em pedidos.
<!-- ```sql
SELECT DISTINCT pr.nome
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto;

   ``` -->
3. Listar os pedidos com os itens e os preços dos produtos comprados.
<!-- ```sql
SELECT p.id_pedido, ip.id_produto, pr.nome, ip.quantidade, ip.preco
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto;

   ``` -->
4. Mostrar o total de vendas (valor pago) por pedido.
<!-- ```sql
SELECT p.id_pedido, SUM(pg.valor_pago) AS total_pago
FROM pedidos p
JOIN pagamentos pg ON p.id_pedido = pg.id_pedido
GROUP BY p.id_pedido;

   ``` -->
5. Exibir os clientes que fizeram pedidos, incluindo o status do pedido e o método de pagamento.
<!-- ```sql
SELECT c.id_cliente, c.nome, p.status, pg.metodo_pagamento
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pg ON p.id_pedido = pg.id_pedido;

   ``` -->
6. Mostrar os produtos e suas categorias, ordenados pelo preço.
<!-- ```sql
SELECT nome, categoria, preco
FROM produtos
ORDER BY preco;

   ``` -->
7. Listar os clientes que fizeram pedidos de produtos do tipo "Eletrônicos".
<!-- ```sql
SELECT DISTINCT c.id_cliente, c.nome
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE pr.categoria = 'Eletrônicos';

   ``` -->
8. Exibir o total pago por cada cliente, considerando todos os seus pedidos.
<!-- ```sql
SELECT c.id_cliente, c.nome, SUM(pg.valor_pago) AS total_pago
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pg ON p.id_pedido = pg.id_pedido
GROUP BY c.id_cliente;

   ``` -->
9. Listar os clientes que não fizeram nenhum pedido.
<!-- ```sql
SELECT c.id_cliente, c.nome
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.id_pedido IS NULL;

   ``` -->
10. Mostrar os pedidos que foram cancelados e os produtos relacionados.
<!-- ```sql
SELECT p.id_pedido, pr.nome, ip.quantidade, ip.preco
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE p.status = 'Cancelado';

   ``` -->
11. Listar os produtos mais caros vendidos.
<!-- ```sql
SELECT pr.nome, pr.preco
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
WHERE pr.preco = (SELECT MAX(preco) FROM produtos);

   ``` -->
12. Mostrar todos os pedidos realizados por clientes que têm o nome "Carlos".
<!-- ```sql
SELECT p.id_pedido, p.data_pedido, p.status
FROM pedidos p
JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE c.nome LIKE '%Carlos%';

   ``` -->
13. Listar os clientes que fizeram um pagamento via "Pix".
<!-- ```sql
SELECT DISTINCT c.id_cliente, c.nome
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pg ON p.id_pedido = pg.id_pedido
WHERE pg.metodo_pagamento = 'Pix';

   ``` -->
14. Exibir a quantidade de itens vendidos por produto.
<!-- ```sql
SELECT pr.nome, SUM(ip.quantidade) AS total_vendido
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
GROUP BY pr.id_produto;

   ``` -->
15. Mostrar todos os pedidos com mais de 1 item comprado.
<!-- ```sql
SELECT p.id_pedido, COUNT(ip.id_item) AS itens_no_pedido
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
GROUP BY p.id_pedido
HAVING COUNT(ip.id_item) > 1;


   ``` -->
16. Listar os pedidos que possuem produtos da categoria "Acessórios".
<!-- ```sql
SELECT DISTINCT p.id_pedido
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE pr.categoria = 'Acessórios';

   ``` -->
17. Mostrar todos os produtos e o total pago por cada produto em todos os pedidos.
<!-- ```sql
SELECT pr.nome, SUM(ip.quantidade * ip.preco) AS total_pago
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
JOIN pagamentos pg ON ip.id_pedido = pg.id_pedido
GROUP BY pr.id_produto;

   ``` -->
18. Exibir os produtos que foram comprados por clientes do tipo "Eletrônicos".
<!-- ```sql
SELECT DISTINCT pr.nome
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
JOIN pedidos p ON ip.id_pedido = p.id_pedido
WHERE pr.categoria = 'Eletrônicos';

   ``` -->
19. Listar os clientes e o total de itens comprados (em quantidade) por cada um.
<!-- ```sql
SELECT c.id_cliente, c.nome, SUM(ip.quantidade) AS total_itens
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
GROUP BY c.id_cliente;

   ``` -->
20. Exibir todos os clientes que não têm pedidos pagos.
<!-- ```sql
SELECT c.id_cliente, c.nome
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
LEFT JOIN pagamentos pg ON p.id_pedido = pg.id_pedido
WHERE pg.id_pagamento IS NULL;

   ``` -->
21. Mostrar o cliente e o status dos pedidos que ele fez, ordenados pela data do pedido.
<!-- ```sql
SELECT c.id_cliente, c.nome, p.id_pedido, p.status, p.data_pedido
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
ORDER BY p.data_pedido;

   ``` -->
22. Listar os produtos vendidos em cada pedido e seu preço total (quantidade * preço).
<!-- ```sql
SELECT p.id_pedido, pr.nome, ip.quantidade, ip.preco, (ip.quantidade * ip.preco) AS total_produto
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto;

   ``` -->
23. Exibir a data e o valor total pago de todos os pedidos que estão "Pendente".
<!-- ```sql
SELECT p.data_pedido, SUM(pg.valor_pago) AS total_pago
FROM pedidos p
JOIN pagamentos pg ON p.id_pedido = pg.id_pedido
WHERE p.status = 'Pendente'
GROUP BY p.id_pedido;

   ``` -->
24. Listar todos os produtos e os clientes que compraram esses produtos.
<!-- ```sql
SELECT pr.nome AS produto, c.nome AS cliente
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
JOIN pedidos p ON ip.id_pedido = p.id_pedido
JOIN clientes c ON p.id_cliente = c.id_cliente;

   ``` -->
25. Mostrar todos os pagamentos realizados, incluindo o valor pago, o método e o pedido associado.
<!-- ```sql
SELECT pg.valor_pago, pg.metodo_pagamento, p.id_pedido
FROM pagamentos pg
JOIN pedidos p ON pg.id_pedido = p.id_pedido;

   ``` -->
26. Listar todos os clientes e o valor total gasto por cada um em todos os pedidos.
<!-- ```sql
SELECT c.id_cliente, c.nome, SUM(pg.valor_pago) AS total_gasto
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pg ON p.id_pedido = pg.id_pedido
GROUP BY c.id_cliente;

   ``` -->
27. Exibir todos os clientes que fizeram um pedido de um produto específico (exemplo: 'Smartphone A1').
<!-- ```sql
SELECT DISTINCT c.id_cliente, c.nome
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE pr.nome = 'Smartphone A1';

   ``` -->
28. Mostrar os produtos que foram comprados por clientes após a data '2023-06-01'.
<!-- ```sql
SELECT DISTINCT pr.nome
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto

   ``` -->
29. Exibir os pedidos que contêm mais de um produto e o valor total de cada um.
<!-- ```sql
SELECT p.id_pedido, SUM(ip.quantidade * ip.preco) AS total_pedido
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
GROUP BY p.id_pedido
HAVING COUNT(ip.id_item) > 1;

   ``` -->
30. Listar os produtos e os pagamentos realizados para os pedidos em que os clientes pagaram com "Cartão de Crédito".
<!-- ```sql
SELECT pr.nome AS produto, pg.valor_pago, pg.metodo_pagamento, p.id_pedido
FROM pagamentos pg
JOIN pedidos p ON pg.id_pedido = p.id_pedido
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE pg.metodo_pagamento = 'Cartão de Crédito';

   ``` -->
# Formulário

https://forms.gle/dLJ1FS8YDE7Ro2nw7
