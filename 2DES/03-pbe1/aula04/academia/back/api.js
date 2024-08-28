// Chamando bibliotecas/Frameworks
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

// Configuro a conexão com o banco de dados.
const banco = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
})

// Validação se conectou ou não com o banco.
banco.connect((err) => {
    if (err) {
        console.log("Erro ao conectar com o Banco");
    } else {
        console.log("Banco conectado com sucesso");
    }
})

// Rota para aparecer mensagem na pagina de teste!
const teste = (req, res) => {
    res.send("API respondendo com sucesso!!!!");
}

const read = (req, res) => {
    banco.query('SELECT * FROM alunos', (err, result) => {
        if (err) {
            res.json({ message: 'Erro ao listar' })
        } else {
            res.json(result);
        }
    })
}

const create = (req, res) => {
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let telefone = req.body.telefone;
    let endereco = req.body.endereco;
    let cidade = req.body.cidade;
    let formadepagamento = req.body.formadepagamento;

    // Função para fazer o insert do banco
    let query = `INSERT INTO alunos (nome, cpf, rg, telefone, endereco, cidade, formadepagamento) values`
    query += `('${nome}', '${cpf}', '${rg}', '${telefone}', '${endereco}', '${cidade}', '${formadepagamento}');`;

    banco.query(query, (err, result) => {
        if (err) {
            res.send("Aluno não cadastrado");
            console.log("Aluno não cadastrado!");
        } else {
            res.send("Aluno cadastrado com sucesso");
            console.log("Aluno cadastrado com sucesso!");
        }
    })
}

// Configurar a sáida para a Página
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

// Configurar as rotas de saída para a página
app.get("/", teste);
app.get("/academia", read);
app.post("/academia", create);

// Rota de teste no console
app.listen(3000, () => {
    console.log("API rodando com sucesso!");
})

