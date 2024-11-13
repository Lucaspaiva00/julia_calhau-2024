const con = require('../connect/banco');

const create = (req, res) => {
    let nome_cargo = req.body.nome_cargo;
    let query = `INSERT INTO cargos (nome_cargo) VALUES`
    query += `('${nome_cargo}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM cargos', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let nome_cargo = req.body.nome_cargo;
    let query = `UPDATE cargos SET nome_cargo = '${nome_cargo}'`
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
    const query = 'DELETE FROM cargos WHERE id=?'
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