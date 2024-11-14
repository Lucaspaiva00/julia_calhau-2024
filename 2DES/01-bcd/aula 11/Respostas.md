### **1. Listar todos os clientes e os pedidos que eles fizeram.**

```sql
SELECT c.nome, p.id_pedido, p.data_pedido, p.status
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente;


### **2. Mostrar todos os produtos que foram comprados em pedidos.**

```sql
SELECT DISTINCT pr.nome
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto;

### **3. Listar os pedidos com os itens e os preços dos produtos comprados.**

```sql
SELECT p.id_pedido, ip.quantidade, pr.nome AS produto, ip.preco
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto;

### **4. Mostrar o total de vendas (valor pago) por pedido.**

```sql
SELECT p.id_pedido, SUM(ip.preco * ip.quantidade) AS total_venda
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
GROUP BY p.id_pedido;

### **5. Exibir os clientes que fizeram pedidos, incluindo o status do pedido e o método de pagamento.**

```sql
SELECT c.nome, p.id_pedido, p.status, pa.metodo_pagamento
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pa ON p.id_pedido = pa.id_pedido;

### **6. Mostrar os produtos e suas categorias, ordenados pelo preço.**

```sql
SELECT nome, categoria, preco
FROM produtos
ORDER BY preco DESC;

### **7. Listar os clientes que fizeram pedidos de produtos do tipo "Eletrônicos".**

```sql
SELECT DISTINCT c.nome
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE pr.categoria = 'Eletrônicos';

### **8. Exibir o total pago por cada cliente, considerando todos os seus pedidos.**

```sql
SELECT c.nome, SUM(pa.valor_pago) AS total_pago
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pa ON p.id_pedido = pa.id_pedido
GROUP BY c.id_cliente;

### **9. Listar os clientes que não fizeram nenhum pedido.**

```sql
SELECT c.nome
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.id_pedido IS NULL;

### **10. Mostrar os pedidos que foram cancelados e os produtos relacionados.**

```sql
SELECT p.id_pedido, pr.nome
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE p.status = 'Cancelado';

### **11. Listar os produtos mais caros vendidos.**

```sql
SELECT pr.nome, pr.preco
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
ORDER BY pr.preco DESC
LIMIT 1;

### **12. Mostrar todos os pedidos realizados por clientes que têm o nome "Carlos".**

```sql
SELECT p.id_pedido, p.data_pedido, p.status
FROM pedidos p
JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE c.nome = 'Carlos Silva';

### **13. Listar os clientes que fizeram um pagamento via "Pix".**

```sql
SELECT DISTINCT c.nome
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pa ON p.id_pedido = pa.id_pedido
WHERE pa.metodo_pagamento = 'Pix';

### **14. Exibir a quantidade de itens vendidos por produto.**

```sql
SELECT pr.nome, SUM(ip.quantidade) AS quantidade_vendida
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
GROUP BY pr.id_produto;

### **15. Mostrar todos os pedidos com mais de 1 item comprado.**

```sql
SELECT p.id_pedido, COUNT(ip.id_item) AS num_itens
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
GROUP BY p.id_pedido
HAVING COUNT(ip.id_item) > 1;

### **16. Listar os pedidos que possuem produtos da categoria "Acessórios".**

```sql
SELECT DISTINCT p.id_pedido, p.data_pedido
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE pr.categoria = 'Acessórios';

### **17. Mostrar todos os produtos e o total pago por cada produto em todos os pedidos.**

```sql
SELECT pr.nome, SUM(ip.preco * ip.quantidade) AS total_pago
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
GROUP BY pr.id_produto;

### **18. Exibir os produtos que foram comprados por clientes do tipo "Eletrônicos".**

```sql
SELECT DISTINCT pr.nome
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
JOIN pedidos p ON ip.id_pedido = p.id_pedido
JOIN clientes c ON p.id_cliente = c.id_cliente
WHERE pr.categoria = 'Eletrônicos';

### **19. Listar os clientes e o total de itens comprados (em quantidade) por cada um.**

```sql
SELECT c.nome, SUM(ip.quantidade) AS total_itens
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
GROUP BY c.id_cliente;

### **20. Exibir todos os clientes que não têm pedidos pagos.**

```sql
SELECT c.nome
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
LEFT JOIN pagamentos pa ON p.id_pedido = pa.id_pedido
WHERE pa.id_pagamento IS NULL;

### **21. Mostrar o cliente e o status dos pedidos que ele fez, ordenados pela data do pedido.**

```sql
SELECT c.nome, p.id_pedido, p.status, p.data_pedido
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
ORDER BY p.data_pedido DESC;

### **22. Listar todos os produtos vendidos em cada pedido e seu preço total (quantidade * preço).**

```sql
SELECT p.id_pedido, pr.nome, ip.quantidade, ip.preco, (ip.quantidade * ip.preco) AS total_produto
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto;

### **23. Exibir a data e o valor total pago de todos os pedidos que estão "Pendente".**

```sql
SELECT p.data_pedido, SUM(pa.valor_pago) AS total_pago
FROM pedidos p
JOIN pagamentos pa ON p.id_pedido = pa.id_pedido
WHERE p.status = 'Pendente'
GROUP BY p.id_pedido;

### **24. Listar todos os produtos e os clientes que compraram esses produtos.**

```sql
SELECT pr.nome AS produto, c.nome AS cliente
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
JOIN pedidos p ON ip.id_pedido = p.id_pedido
JOIN clientes c ON p.id_cliente = c.id_cliente;

### **25. Mostrar todos os pagamentos realizados, incluindo o valor pago, o método e o pedido associado.**

```sql
SELECT pa.id_pagamento, pa.valor_pago, pa.metodo_pagamento, p.id_pedido
FROM pagamentos pa
JOIN pedidos p ON pa.id_pedido = p.id_pedido;

### **26. Listar todos os clientes e o valor total gasto por cada um em todos os pedidos.**

```sql
SELECT c.nome, SUM(pa.valor_pago) AS total_gasto
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN pagamentos pa ON p.id_pedido = pa.id_pedido
GROUP BY c.id_cliente;

### **27. Exibir todos os clientes que fizeram um pedido de um produto específico (exemplo: 'Smartphone A1').**

```sql
SELECT DISTINCT c.nome
FROM clientes c
JOIN pedidos p ON c.id_cliente = p.id_cliente
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
JOIN produtos pr ON ip.id_produto = pr.id_produto
WHERE pr.nome = 'Smartphone A1';

### **28. Mostrar os produtos que foram comprados por clientes após a data '2023-06-01'.**

```sql
SELECT DISTINCT pr.nome
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
JOIN pedidos p ON ip.id_pedido = p.id_pedido
WHERE p.data_pedido > '2023-06-01';

### **29. Exibir os pedidos que contêm mais de um produto e o valor total de cada um.**

```sql
SELECT p.id_pedido, SUM(ip.preco * ip.quantidade) AS total_pedido
FROM pedidos p
JOIN itens_pedido ip ON p.id_pedido = ip.id_pedido
GROUP BY p.id_pedido
HAVING COUNT(ip.id_item) > 1;

### **30. Listar os produtos e os pagamentos realizados para os pedidos em que os clientes pagaram com "Cartão de Crédito".**

```sql
SELECT pr.nome AS produto, pa.valor_pago, pa.metodo_pagamento
FROM produtos pr
JOIN itens_pedido ip ON pr.id_produto = ip.id_produto
JOIN pedidos p ON ip.id_pedido = p.id_pedido
JOIN pagamentos pa ON p.id_pedido = pa.id_pedido
WHERE pa.metodo_pagamento = 'Cartão de Crédito';
