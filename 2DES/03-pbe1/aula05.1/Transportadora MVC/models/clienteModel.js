const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database:'transportadora'
});

const createCliente = (data, callback) => {
    const query = 'INSERT INTO Cliente (nome, endereco, telefone, email) VALUES(?, ?, ?, ?)';
    con.query(query,[data.nome, data.endereco, data.telefone, data.email], callback)
};

const readClientes = (callback) => {
    const query = "SELECT * FROM Cliente";
    con.query(query,callback);
};

const updateCliente = (data, callback) => {
    const query = 'UPDATE Cliente SET nome = ?, endereco = ?, telefone = ?, email = ? WHERE idCliente = ?'
    con.query(query,[data.nome, data.endereco, data.telefone, data.email, data.idCliente], callback);
};

const deleteCliente = (idCliente, callback) => {
    const query = 'DELETE FROM Cliente WHERE idCliente = ?';
    con.query(query,[idCliente], callback);

};

module.exports = {createCliente, readClientes, updateCliente, deleteCliente};

