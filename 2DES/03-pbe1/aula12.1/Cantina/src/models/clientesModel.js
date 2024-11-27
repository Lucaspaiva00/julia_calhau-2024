const db = require('../database/database.js');

const create = (data, callback) => {
    const { Nome, Telefone, Email, DataCadastro } = data;
    const query = 'INSERT INTO Clientes (Nome, Telefone, Email, DataCadastro) VALUES (?, ?, ?, ?)';
    db.query(query, [Nome, Telefone, Email, DataCadastro], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM Clientes';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const { Nome, Telefone, Email, DataCadastro } = data;
    const query = 'UPDATE Clientes SET Nome = ?, Telefone = ?, Email = ?, DataCadastro = ? WHERE ClienteID = ?';
    db.query(query, [Nome, Telefone, Email, DataCadastro, id], callback);
};

const deleteCliente = (id, callback) => {
    const query = 'DELETE FROM Clientes WHERE ClienteID = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deleteCliente };
