const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// Rotas para Pedidos
router.post('/', pedidosController.createPedido);      // Criar um novo pedido
router.get('/', pedidosController.readPedidos);        // Listar todos os pedidos
router.put('/:id', pedidosController.updatePedido);    // Atualizar um pedido existente
router.delete('/:id', pedidosController.deletePedido); // Deletar um pedido

module.exports = router;
