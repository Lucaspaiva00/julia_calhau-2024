const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rotas para Clientes
router.post('/', clientesController.createCliente);      // Criar um novo cliente
router.get('/', clientesController.readClientes);        // Listar todos os clientes
router.put('/:id', clientesController.updateCliente);    // Atualizar um cliente existente
router.delete('/:id', clientesController.deleteCliente); // Deletar um cliente

module.exports = router;
