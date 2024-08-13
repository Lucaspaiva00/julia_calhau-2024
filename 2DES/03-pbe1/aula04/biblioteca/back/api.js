const express = require("express");
// A biblioteca mysql é utilizada para se comunicar com o Banco de dados MariaDB.
const mysql = require("mysql");
const cors = require("cors");
const porta = 3000;
const bodyParser = require("body-parser");

// Responsável por conectar com o Banco
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'biblioteca'
})

const create = (req, res) => {
    let autorLivro = req.body.autorLivro;
    let descricaoLivro = req.body.descricaoLivro;

    let query = `INSERT INTO Livros(autorLivro, descricaoLivro) VALUE`;
    query += `('${autorLivro}','${descricaoLivro}');`;
    con.query(query, (err, result) => {  
        if (err) {  
            res.redirect("http://127.0.0.1:5500/aula04/biblioteca/front/index.html");
        } else {
            res.redirect("http://127.0.0.1:5500/aula04/biblioteca/front/index.html");
        }
    });
    
    console.log("Novo livro inserido: ",autorLivro);
    
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

// Resposável por aparecer na WEB
const teste = (req, res) => {
    res.send("Back respondendo");
}

// Configuração de saída para o front
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas de saída (routes)
app.get("/", teste)
app.post("/livros", create);
app.get("/livros", read);

// Teste no console
app.listen(3000, () => {
    console.log("Servidor respondendo na porta: ", porta);

})