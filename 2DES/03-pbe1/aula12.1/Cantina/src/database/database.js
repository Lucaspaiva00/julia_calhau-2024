const mysql = require('mysql');

// Criando a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Cantina'
});

// Conectando ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso');
});

module.exports = connection;
