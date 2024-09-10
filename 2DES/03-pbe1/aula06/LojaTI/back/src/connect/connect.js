// Dependências e Frameworks
const mysql = require('mysql');

// Configuração da conexão com o MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'LojaTi'
});

module.exports = {con};