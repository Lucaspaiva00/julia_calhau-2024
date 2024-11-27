const db = require('../database/database.js');

const create = (data, callback) => {
    const { Nome, Preco, Categoria, Estoque } = data;
    const query = 'INSERT INTO Produtos (Nome, Preco, Categoria, Estoque) VALUES (?, ?, ?, ?)';
    db.query(query, [Nome, Preco, Categoria, Estoque], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM Produtos';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const { Nome, Preco, Categoria, Estoque } = data;
    const query = 'UPDATE Produtos SET Nome = ?, Preco = ?, Categoria = ?, Estoque = ? WHERE ProdutoID = ?';
    db.query(query, [Nome, Preco, Categoria, Estoque, id], callback);
};

const deleteProduto = (id, callback) => {
    const query = 'DELETE FROM Produtos WHERE ProdutoID = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deleteProduto };
