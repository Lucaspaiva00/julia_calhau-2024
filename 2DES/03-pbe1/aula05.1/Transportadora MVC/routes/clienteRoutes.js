const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post("/",clienteController.createCliente);
router.get("/",clienteController.readClientes);
router.put("/",clienteController.updateCliente);
router.delete("/:idCliente",clienteController.deleteCliente);

module.exports = router;