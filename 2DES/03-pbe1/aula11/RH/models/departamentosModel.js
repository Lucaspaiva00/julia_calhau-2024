const db = require ('../database/database');

const Departamentos ={
    //Read
    getAll: (callback) => {
        db.query('SELECT * FROM departamentos', callback);
    },
    getbyId: (id, callback) => {
        db.query('SELECT * FROM departamentos WHERE id = ?',[id], callback);
    },
    // Create
    create: (nome,callback) => {
        db.query('INSERT INTO departamentos (nome) VALUES (?)',[nome], callback);
    },
    //Update
    update: (id, nome, callback) => {
        db.query('UPDATE departamentos SET nome = ? WHERE id = ?', [nome, id], callback);
    },
    //Delete
    delete: (id, callback) => {
        db.query('DELETE FROM departamentos WHERE id = ?',[id], callback);
    }
    
};

module.exports = Departamentos;