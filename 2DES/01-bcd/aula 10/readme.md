# Aula Banco de dados - JOINs

## Criando o banco em sala de aula
```sql
CREATE DATABASE Loja;
USE Loja;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nome VARCHAR(50),
    cidade VARCHAR(50)
);

CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY,
    id_cliente INT,
    produto VARCHAR(50),
    valor DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);


INSERT INTO clientes (id_cliente, nome, cidade) VALUES
(1, 'Maria', 'São Paulo'),
(2, 'Carlos', 'Rio de Janeiro'),
(3, 'Ana', 'Curitiba');

INSERT INTO pedidos (id_pedido, id_cliente, produto, valor) VALUES
(101, 1, 'Notebook', 3000.00),
(102, 1, 'Mouse', 50.00),
(103, 2, 'Teclado', 100.00),
(104, 4, 'Monitor', 700.00); -- Note que não existe cliente com id 4
```


# Exercicios:

## Crie o banco e faça os Insert:
```sql
CREATE DATABASE Livraria;
USE Livraria;

CREATE TABLE autores (
    id_autor INT PRIMARY KEY,
    nome VARCHAR(50)
);

CREATE TABLE livros (
    id_livro INT PRIMARY KEY,
    titulo VARCHAR(100),
    id_autor INT,
    preco DECIMAL(8, 2),
    FOREIGN KEY (id_autor) REFERENCES autores(id_autor)
);


INSERT INTO autores (id_autor, nome) VALUES
(1, 'J.K. Rowling'),
(2, 'George R.R. Martin'),
(3, 'J.R.R. Tolkien');

INSERT INTO livros (id_livro, titulo, id_autor, preco) VALUES
(101, 'Harry Potter', 1, 39.90),
(102, 'A Game of Thrones', 2, 49.90),
(103, 'The Hobbit', 3, 29.90),
(104, 'Fantastic Beasts', 1, 25.90);

```
 - 1. Exibir todos os livros com seus respectivos autores.
 - 2. Exibir todos os autores, com ou sem livros.
 - 3. Listar todos os livros e seus preços.
 - 4. Listar os livros mais caros que R$30,00.
 - 5. Exibir os autores que têm livros cadastrados na tabela.
 - 6. Exibir todos os autores e o total de livros que possuem.
 - 7. Exibir todos os livros cujo título contém a palavra "The".
 - 8. Calcular a média dos preços dos livros.


