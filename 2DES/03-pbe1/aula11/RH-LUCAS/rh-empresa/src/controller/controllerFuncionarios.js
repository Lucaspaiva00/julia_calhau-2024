const con = require('../connect/banco');

const create = (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let data_admissao = req.body.data_admissao;
    let departamento_id = req.body.departamento_id;
    let cargo_id = req.body.cargo_id;

    let query = 'INSERT INTO funcionarios (nome, email, telefone, data_admissao, departamento_id, cargo_id) VALUES'
    query += `('${nome}', '${email}', '${telefone}', '${data_admissao}', '${departamento_id}', '${cargo_id}')`;

    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM funcionarios', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let id = Number(req.params.id)
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let data_admissao = req.body.data_admissao;
    let departamento_id = req.body.departamento_id;
    let cargo_id = req.body.cargo_id;

    let query = `UPDATE funcionarios SET nome = '${nome}', email= '${email}', telefone= '${telefone}', data_admissao= '${data_admissao}', departamento_id= ${departamento_id}, cargo_id= ${cargo_id} WHERE id=${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id)
    const query = 'DELETE FROM funcionarios WHERE id = ?'
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}