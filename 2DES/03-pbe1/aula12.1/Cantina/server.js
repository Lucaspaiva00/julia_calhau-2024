const express = require('express');
const cors = require('cors');

// Importando rotas
const produtosRoutes = require('./src/routes/produtosRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
const pedidosRoutes = require('./src/routes/pedidosRoutes');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para JSON

// Registrando rotas
app.use('/produtos', produtosRoutes);  // Rotas para Produtos
app.use('/clientes', clientesRoutes);  // Rotas para Clientes
app.use('/pedidos', pedidosRoutes);    // Rotas para Pedidos

// Configuração do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
