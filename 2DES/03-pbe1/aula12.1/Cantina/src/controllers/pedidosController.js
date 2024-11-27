const pedidosModel = require('../models/pedidosModel.js');

const createPedido = (req, res) => {
    pedidosModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Pedido criado com sucesso', result });
    });
};

const readPedidos = (req, res) => {
    pedidosModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updatePedido = (req, res) => {
    pedidosModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Pedido atualizado com sucesso', result });
    });
};

const deletePedido = (req, res) => {
    pedidosModel.deletePedido(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Pedido removido com sucesso', result });
    });
};

module.exports = { createPedido, readPedidos, updatePedido, deletePedido };
