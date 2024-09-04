
Link Meet: https://meet.google.com/avs-madw-mps

# Aula 06 
### Conhecendo o Insomnia.
- O que é o Insomnia?
    -  O insomnia é uma ferramenta de teste de API que permite aos desenvolvedores enviar requisições HTTP e gerenciar respostas.
  
- Essas requisições são, (GET, POST, PUT, DELETE) que ja viemos utilizando ao longo dessas 6 aulas.

### Passo a passo para instalar o Software:
- Acesso o link <a href="https://insomnia.rest/download"><b>INSOMNIA</b></a> para realizar o download da ferramenta clicando em "DONWLOAD INSOMNIA FOR WINDOWS".
  
  ![alt text](image.png)
- Com o download concluído realize a instalação do software.


## Exercute o passo a passo abaixo:

### Projeto - Loja de TI

- Para darmos início iremos criar uma banco de dados para a loja de TI, colocando apenas a tabela **CLIENTE** e fazendo a inserção de informação.

#### SQL:
```C
CREATE DATABASE LojaTI;
USE LojaTI;

// -- Criação da tabela de Clientes
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

## Inciando um novo projeto
- Crie uma pasta em **documentos** chamada **Loja TI**.
- Abra essa pasta no VS Code.
- Dentro do VS Code, crie mais 3 pastas: 
  - BACK
  - FRONT
  - DOCS
  
    ![alt text](image-2.png)
- Abra o terminal e digite os seguintes comandos na pasta :
```
    cd back
    npm init
```
- Pressione ENTER até o final.
- Instale as dependências iniciais:
```
    npm i express
    npm i cors
    npm i mysql
```
## Agora criaremos juntos o arquivo server.js
```
// Dependências para rodar o servidor
const express = require ('express')
const cors = require('cors')
const routes = require("./src/routes")

//Configurações de saída - App -> Front ou Mobile
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


// Rota para testar a API no console
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})
```

## Atividade
- Criar uma pasta dentro de **Documentos** chamada de **autoescola**.
- Utilizar o código SQL abaixo para o banco de dados:
```
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

## Dentro da pasta **autoescola** crie as seguintes pastas:
    - Back
        - SRC
            - Pasta - Controllers
            - Pasta - Connect
            - Arquivo - Routes.js
    - Banco
        - banco.sql
            - Digitar o sql aqui dentro

    - Front
        - Páginas HTML, CSS 


### Código para rodar o servidor
```
// Dependências para rodar o servidor
const express = require ('express')
const cors = require('cors')
const routes = require("./src/routes")

//Configurações de saída - App -> Front ou Mobile
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


// Rota para testar a API no console
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})
```
