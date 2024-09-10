// Dependências
const con = require('../connect/connect').con;

// ABAIXO SERA DESENVOLVIDO O CRUD

// CREATE - RESPONSÁVEL PELA CADASTRO DE INFORMAÇÃO
const create = (req, res) => {

    // Declarar os campos necessários
    let Nome = req.body.Nome;
    let Email = req.body.Email;
    let Telefone = req.body.Telefone;
    let Endereco = req.body.Endereco;

    // Conexão com o banco de dados
    let query = `INSERT INTO clientes (Nome, Email, Telefone, Endereco) VALUES`
    query += `('${Nome}', '${Email}', '${Telefone}', '${Endereco}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json(result);
        }
    })
}

// READ - RESPONSÁVEL PELA EXIBIÇÃO DOS DADOS
const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.st
            // res.json({message: 'Erro ao listar'});
            res.status(500).json(err);
        } else {
            res.json(result);
        }
    })
}

module.exports = {
    create,
    read
}