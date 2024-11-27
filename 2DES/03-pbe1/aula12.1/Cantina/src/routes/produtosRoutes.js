const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Rotas para Produtos
router.post('/', produtosController.createProduto);      // Criar um novo produto
router.get('/', produtosController.readProdutos);        // Listar todos os produtos
router.put('/:id', produtosController.updateProduto);    // Atualizar um produto existente
router.delete('/:id', produtosController.deleteProduto); // Deletar um produto

module.exports = router;
