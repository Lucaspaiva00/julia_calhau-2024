const produtosModel = require('../models/produtosModel.js');

const createProduto = (req, res) => {
    produtosModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Produto criado com sucesso', result });
    });
};

const readProdutos = (req, res) => {
    produtosModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const updateProduto = (req, res) => {
    produtosModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Produto atualizado com sucesso', result });
    });
};

const deleteProduto = (req, res) => {
    produtosModel.deleteProduto(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Produto removido com sucesso', result });
    });
};

module.exports = { createProduto, readProdutos, updateProduto, deleteProduto };
