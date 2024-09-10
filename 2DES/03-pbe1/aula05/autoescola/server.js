const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root', 
    host: 'localhost',
    database: 'autoescola'
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
    const { nome, email, telefone, data_nascimento } = req.body; 
    
    const query = 'INSERT INTO Alunos (Nome, Email, Telefone, data_nascimento) VALUES (?, ?, ?, ?)';
    con.query(query, [nome, email, telefone, data_nascimento], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Aluno criado com sucesso', result });
        }
    });
}
// CRUD - Create Instrutores
const createInst = (req, res) => {
    const { nome, email, telefone, categoria_cnh } = req.body; 
    
    const query = 'INSERT INTO Instrutores (Nome, Email, Telefone, categoria_cnh) VALUES (?, ?, ?, ?)';
    con.query(query, [nome, email, telefone, categoria_cnh], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Instrutor criado com sucesso', result });
        }
    });
}

// CRUD - Read Aluno
const read = (req, res) => {
    con.query("SELECT * FROM Alunos", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
}
// CRUD - Read Instutores
const readInst = (req, res) => {
    con.query("SELECT * FROM Instrutores", (err, result) => {
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
app.post("/Alunos", create); 
app.get("/Alunos", read);
app.get("/Instrutores",readInst);
app.post("/Instrutores",createInst);


// Teste e porta no console
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});