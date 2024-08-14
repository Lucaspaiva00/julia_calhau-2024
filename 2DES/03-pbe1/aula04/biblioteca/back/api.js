// Dependencias a serem instaladas:
// npm init
// npm i express cors mysql
// npm install body-parser - Faz a analise dos dados de entrada contidos no corpo da requisição,
//disponibilizando as propriedades em req.body
// Comando para rodar o servidor é o node api.js

// Declarando as bibliotecas!!
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const porta = 3000;
const bodyParser = require("body-parser");

// Conectar com o Banco de dadosnode api.js
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'biblioteca'
})

const create = (req, res) => {
    // Declarar os campos necessários
    let autorLivro = req.body.autorLivro;
    let descricaoLivro = req.body.descricaoLivro;

    // Conexão com o banco de dados
    let query = `INSERT INTO Livros (autorLivro, descricaoLivro) VALUE`
    query += `('${autorLivro}','${descricaoLivro}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.redirect("http://127.0.0.1:5500/2DES/03-pbe1/aula04/biblioteca/front/erro.html")
        } else {
            res.redirect("http://127.0.0.1:5500/2DES/03-pbe1/aula04/biblioteca/front/index.html")
        }
    })

}

const read = (req, res) => {
    con.query("SELECT * FROM Livros", (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}

// Esse teste, ira aparecer na pagina web
const teste = (req, res) => {
    res.send("Api respondendo com sucesso!!");
}

// Configuração de saída para o front-end
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

// Rotas de saída
app.get("/", teste);
app.post("/livros", create);
app.get("/livros", read);

// Teste no console
app.listen(3000, () => {
    console.log("Servidor respondendo na porta: ", porta);

})