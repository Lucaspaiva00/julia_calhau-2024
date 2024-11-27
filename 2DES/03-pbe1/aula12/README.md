# Aula 12
- Revisão para a Avaliação Prática Somativa (04/12/2024)
- Link para o meet (Lucas): <a href="https://meet.google.com/ujx-kdwy-zce">Clique aqui!</a>

## Projeto - Cantina

- SCRIPT MYSQL
```
CREATE DATABASE projetocantina;
USE projetocantina;

CREATE TABLE clientes(
    idcliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(252) NOT NULL,
    pagamento VARCHAR(100) NOT NULL
);

CREATE TABLE fornecedores (
    idforn INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(252) NOT NULL,
    cnpj INT(14) NOT NULL UNIQUE,
    email VARCHAR(252) NOT NULL UNIQUE
);

CREATE TABLE telefone(
    idtelefone INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    numero INT(11) NOT NULL UNIQUE,
    idcliente INT(11) NOT NULL,
    idforn INT(11) NOT NULL,
    FOREIGN KEY (idcliente) REFERENCES clientes(idcliente),
    FOREIGN KEY (idforn) REFERENCES fornecedores(idforn)
);

CREATE TABLE produtos(
    idprod INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(252),
    preco FLOAT(10,5) NOT NULL,
    nome VARCHAR(252) NOT NULL,
    validade date NOT NULL,
    idforn INT NOT NULL,
    FOREIGN KEY (idforn) REFERENCES fornecedores(idforn)
);

CREATE TABLE pedidos(
    idpedido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idcliente INT(11) NOT NULL,
    idprod INT(11) NOT NULL,
    idtelefone INT(11) NOT NULL,
    datalancamento date NOT NULL,
    total FLOAT(10,5) NOT NULL,
    FOREIGN KEY (idcliente) REFERENCES clientes(idcliente),
    FOREIGN KEY (idprod) REFERENCES produtos(idprod),
    FOREIGN KEY (idtelefone) REFERENCES telefone(idtelefone)
);
```