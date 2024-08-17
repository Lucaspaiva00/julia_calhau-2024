# Trabalhando com Node.JS

- Desafio
  - Desenvolva um projeto no segmento de academias, onde podemos cadastrar alunos.

## SQL - Copie e cole o código abaixo no XAMPP
```C
create database academia;

use academia;

create table alunos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(20) NOT NULL,
    rg VARCHAR(20) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    formadepagamento VARCHAR(100) NOT NULL
);
```