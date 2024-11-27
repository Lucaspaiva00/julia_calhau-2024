const clientesModel = require('../models/clientesModel.js');

const createCliente = (req, res) => {
    clientesModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Cliente criado com sucesso', result });
    });
};

const readClientes = (req, res) => {
    clientesModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateCliente = (req, res) => {
    clientesModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente atualizado com sucesso', result });
    });
};

const deleteCliente = (req, res) => {
    clientesModel.deleteCliente(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Cliente removido com sucesso', result });
    });
};

module.exports = { createCliente, readClientes, updateCliente, deleteCliente };
