const express = require('express');
const porta = 3000;
const url = 'http://localhost:3000/';
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const bd = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
})

// Realiza um teste na comunicação entre o servidor e o banco de dados para ver se conectou perfeitamente.
bd.connect((err) => {
    if (err) throw err;
    console.log('Conexão com o MySQL realizada com sucesso!');
});

const create = (req, res) => {
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let telefone = req.body.telefone;
    let endereco = req.body.endereco;
    let cidade = req.body.cidade;
    let formadepagamento = req.body.formadepagamento;

    // Conexão com o banco Maria DB
    let query = `INSERT INTO alunos (nome, cpf, rg, telefone, endereco, cidade, formadepagamento) VALUE`
    query += `('${nome}', '${cpf}', '${rg}', '${telefone}', '${endereco}', '${cidade}', '${formadepagamento}');`;

    bd.query(query, (err, result) => {
        if (err) {
            res.json({ message: 'Error ao cadastrar um aluno!' });
        } else {
            res.json({ message: 'Aluno cadastrado com sucesso!' });
        }
    })
}

const read = (req, res) => {
    bd.query('SELECT * FROM alunos', (err, result) => {
        if (err) {
            res.json({ message: 'Error ao listar alunos!' });
        } else {
            res.json(result);
        }
    });
}

const update = (req, res) => {
    // Campos do formulario
    let id = req.params.id;
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let telefone = req.body.telefone;
    let endereco = req.body.endereco;
    let cidade = req.body.cidade;
    let formadepagamento = req.body.formadepagamento;

    // Conexão com o banco MariaDB
    let query = `UPDATE alunos SET nome = '${nome}', cpf = '${cpf}', rg = '${rg}', telefone = '${telefone}', endereco = '${endereco}', cidade = '${cidade}', formadepagamento = '${formadepagamento}' WHERE id = ${id}`;
    // Operação para o formulário
    bd.query(query, (err, result) => {
        if (err) {
            res.json({ message: 'Error ao atualizar um aluno!' });
        } else {
            res.json({ message: 'Aluno atualizado com sucesso!' });
        }
    });
}

const DELETE = (req, res) => {
    let id = req.params.id;
    bd.query('DELETE FROM alunos WHERE id =?', [id], (err, result) => {
        if (err) {
            res.json({ message: 'Error ao deletar um aluno!' });
        } else {
            res.json({ message: 'Aluno deletado com sucesso!' });
        }
    });
}

//Configuração de saída para o front 
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas de saída
app.get('/');
app.post('/alunos', create); // Endpoint para cadastrar alunos
app.get('/alunos', read); // Endpoint para listar alunos
app.delete('/alunos/:id', DELETE); // Endpoint para deletar alunos por ID
app.put('/alunos/:id', update); // Endpoint para atualizar alunos por ID

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta: ', porta, url);
})