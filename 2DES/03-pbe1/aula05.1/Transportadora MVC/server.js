const express = require("express");
const cors = require("cors");
const clienteRoutes = require('./routes/clienteRoutes');


const app = express();
app.use(express.json);
app.use(cors());

app.get("/",(req,res)=> res.send("Back-end respondendo"));

app.use("/clientes",clienteRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});