const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamentosController');

router.post('/',departamentosController.createDepartamento);
router.get('/',departamentosController.readDepartamentos);
router.put('/:id', departamentosController.updateDepartamento);
router.delete('/:id', departamentosController.deleteDepartamento);


module.exports = router;
