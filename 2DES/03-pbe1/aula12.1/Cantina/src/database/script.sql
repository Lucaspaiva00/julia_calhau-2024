CREATE DATABASE Cantina;
USE Cantina;

-- Tabela de Produtos
CREATE TABLE Produtos (
    ProdutoID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Preco DECIMAL(10, 2) NOT NULL,
    Categoria VARCHAR(50) NOT NULL,
    Estoque INT NOT NULL
);

-- Inserindo registros na tabela Produtos
INSERT INTO Produtos (Nome, Preco, Categoria, Estoque) VALUES 
('Coxinha', 5.00, 'Salgado', 50),
('Pão de Queijo', 4.00, 'Salgado', 30),
('Refrigerante', 6.50, 'Bebida', 100),
('Suco Natural', 7.00, 'Bebida', 20),
('Brigadeiro', 2.50, 'Doce', 40);

-- Tabela de Clientes
CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Telefone VARCHAR(15),
    Email VARCHAR(100),
    DataCadastro DATE NOT NULL
);

-- Inserindo registros na tabela Clientes
INSERT INTO Clientes (Nome, Telefone, Email, DataCadastro) VALUES 
('João Silva', '11999999999', 'joao@gmail.com', '2023-11-25'),
('Maria Oliveira', '11888888888', 'maria@gmail.com', '2023-11-26'),
('Carlos Santos', '11777777777', 'carlos@gmail.com', '2023-11-27'),
('Ana Souza', '11666666666', 'ana@gmail.com', '2023-11-24'),
('Fernanda Lima', '11555555555', 'fernanda@gmail.com', '2023-11-23');

-- Tabela de Pedidos
CREATE TABLE Pedidos (
    PedidoID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    ProdutoID INT NOT NULL,
    Quantidade INT NOT NULL,
    DataPedido DATE NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (ProdutoID) REFERENCES Produtos(ProdutoID)
);

-- Inserindo registros na tabela Pedidos
INSERT INTO Pedidos (ClienteID, ProdutoID, Quantidade, DataPedido) VALUES 
(1, 1, 2, '2023-11-25'), -- João comprou 2 coxinhas
(2, 3, 1, '2023-11-26'), -- Maria comprou 1 refrigerante
(3, 5, 3, '2023-11-27'), -- Carlos comprou 3 brigadeiros
(4, 2, 5, '2023-11-24'), -- Ana comprou 5 pães de queijo
(5, 4, 2, '2023-11-23'); -- Fernanda comprou 2 sucos naturais