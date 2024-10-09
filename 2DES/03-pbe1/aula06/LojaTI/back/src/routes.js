// Dependências 
const express = require('express');
const router = express.Router();

const clientes = require('./controllers/clientes');

// Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Loja TI respondendo!");
}

// Rotas de teste para o insomnia
router.get('/', teste)
router.get('/clientes', clientes.read)
router.post('/clientes', clientes.create)



module.exports = router;