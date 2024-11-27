const db = require('../database/database.js');

const create = (data, callback) => {
    const { ClienteID, ProdutoID, Quantidade, DataPedido } = data;
    const query = 'INSERT INTO Pedidos (ClienteID, ProdutoID, Quantidade, DataPedido) VALUES (?, ?, ?, ?)';
    db.query(query, [ClienteID, ProdutoID, Quantidade, DataPedido], callback);
};

const getAll = (callback) => {
    const query = 'SELECT * FROM Pedidos';
    db.query(query, callback);
};

const update = (id, data, callback) => {
    const { ClienteID, ProdutoID, Quantidade, DataPedido } = data;
    const query = 'UPDATE Pedidos SET ClienteID = ?, ProdutoID = ?, Quantidade = ?, DataPedido = ? WHERE PedidoID = ?';
    db.query(query, [ClienteID, ProdutoID, Quantidade, DataPedido, id], callback);
};

const deletePedido = (id, callback) => {
    const query = 'DELETE FROM Pedidos WHERE PedidoID = ?';
    db.query(query, [id], callback);
};

module.exports = { create, getAll, update, deletePedido };
