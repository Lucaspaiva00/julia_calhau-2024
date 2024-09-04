<div align = "center">
<img src = "https://github.com/user-attachments/assets/3e5bd2be-7e97-4287-9975-7975eaed8fb0">

</div>

# Aula 05 - Realizando Testes No Insomnia

Vamos realizar testes fazendo testes no Insomnia

Primeiro vamos criar um banco de dados para uma loja TI, colocando apenas a tabela cliente e fazendo inserção de documentos

```sql
CREATE DATABASE LojaTI;
USE LojaTI;

-- Criação da tabela de Clientes
CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Telefone VARCHAR(15),
    Endereco VARCHAR(100)
);
INSERT INTO Clientes (Nome, Email, Telefone, Endereco) VALUES
('João da Silva', 'joao.silva@example.com', '1234-5678', 'Rua A, 123'),
('Maria Oliveira', 'maria.oliveira@example.com', '8765-4321', 'Avenida B, 456'),
('Carlos Souza', 'carlos.souza@example.com', '2345-6789', 'Rua C, 789'),
('Ana Lima', 'ana.lima@example.com', '3456-7890', 'Avenida D, 101'),
('Felipe Costa', 'felipe.costa@example.com', '4567-8901', 'Rua E, 202');

```
## Iniciando um novo projeto
- 1 Crie uma pasta chamada LojaTI
- 2 Abra com VsCode
- 3 Abra um terminal CMD e digite os comando a seguir
```bash
    npm init
```
Pressione enter várias vezes para deixar com configurações padrão
- 4 Instale as dependências iniciais
```bash
    npm i express cors mysql
```
Agora vamos criar o arquivo server.js

```javascript
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root', 
    host: 'localhost',
    database: 'LojaTI'
});

// Conectar ao banco de dados
con.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo");
}

// CRUD - Create
const create = (req, res) => {
    const { nome, email, telefone, endereco } = req.body; 
    
    const query = 'INSERT INTO Clientes (Nome, Email, Telefone, Endereco) VALUES (?, ?, ?, ?)';
    con.query(query, [nome, email, telefone, endereco], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Cliente criado com sucesso', result });
        }
    });
}

// CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Clientes", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
}

// CRUD - Update
const update = (req, res) => {
    const { id, nome, email, telefone, endereco } = req.body;

    const query = 'UPDATE Clientes SET Nome = ?, Email = ?, Telefone = ?, Endereco = ? WHERE ClienteID = ?';
    con.query(query, [nome, email, telefone, endereco, id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
}

// CRUD - Delete
const deleteClient = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM Clientes WHERE ClienteID = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente removido com sucesso', result });
        }
    });
}

// Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());

// Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/clientes", create); 
app.get("/clientes", read);


// Teste e porta no console
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
```
Após criar o server.js, iniciar o mesmo através do código

```bash
node server.js
```


## Realizando testes no Insomnia

![alt text](Capturar.JPG)

Após criar um novo basta colocar o link

![alt text](teste.JPG)



# Atividade
Criar uma pasta nomeada **autoescola**
Faça um banco de dados para uma Auto Escola utilizando o seguinte Script

```sql
CREATE DATABASE autoescola;
USE autoescola;
-- Criação das tabelas

-- Tabela: Alunos
CREATE TABLE Alunos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    data_nascimento DATE NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: Instrutores
CREATE TABLE Instrutores (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    categoria_cnh VARCHAR(50) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: Aulas
CREATE TABLE Aulas (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    data_aula DATETIME NOT NULL,
    aluno_id INTEGER NOT NULL,
    instrutor_id INTEGER NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    observacoes TEXT,
    FOREIGN KEY (aluno_id) REFERENCES Alunos(id),
    FOREIGN KEY (instrutor_id) REFERENCES Instrutores(id)
);

-- Inserts para a tabela Alunos
INSERT INTO Alunos (nome, email, telefone, data_nascimento) VALUES
('Maria Oliveira', 'maria.oliveira@example.com', '11987654321', '2000-05-15'),
('João Silva', 'joao.silva@example.com', '11923456789', '1995-08-25'),
('Ana Costa', 'ana.costa@example.com', '11934567890', '1990-12-10');

-- Inserts para a tabela Instrutores
INSERT INTO Instrutores (nome, email, telefone, categoria_cnh) VALUES
('Carlos Santos', 'carlos.santos@example.com', '11912345678', 'Categoria B'),
('Fernanda Lima', 'fernanda.lima@example.com', '11987654321', 'Categoria A'),
('Roberto Almeida', 'roberto.almeida@example.com', '11911223344', 'Categoria C');

-- Inserts para a tabela Aulas
INSERT INTO Aulas (data_aula, aluno_id, instrutor_id, tipo, observacoes) VALUES
('2024-09-05 10:00:00', 1, 1, 'prática', 'Iniciar com manobras básicas.'),
('2024-09-06 14:00:00', 2, 2, 'teórica', 'Revisão das regras de trânsito.'),
('2024-09-07 09:00:00', 3, 3, 'prática', 'Aula de estacionamento e baliza.');
```
### Criar Server

Na pasta do proneto crie o server.js para fazer a comunicação com o banco de dados e o mesmo fazer o **C**reate e o **R**ead

Teste no Insomnia e mostre os resultados ao professor, faremos a correção em conjunto
