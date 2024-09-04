// Dependências para rodar o servidor
const express = require ('express')
const cors = require('cors')
const routes = require("./src/routes")

//Configurações de saída - App -> Front ou Mobile
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


// Rota para testar a API no console
app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})