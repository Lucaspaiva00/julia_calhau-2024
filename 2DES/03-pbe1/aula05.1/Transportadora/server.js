const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Configuração da conexão com o banco de dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'transportadora'
});

con.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Função de teste
const teste = (req, res) => {
    res.send("Back-end respondendo");
};

// CRUD - Veiculo
const createVeiculo = (req, res) => {
    const { placa, modelo, capacidade } = req.body;

    const query = 'INSERT INTO Veiculo (placa, modelo, capacidade) VALUES(?, ?, ?)';
    con.query(query, [placa, modelo, capacidade], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Veículo criado com sucesso', result });
        }
    });
};

const readVeiculos = (req, res) => {
    con.query("SELECT * FROM Veiculo", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateVeiculo = (req, res) => {
    const { placa, modelo, capacidade } = req.body;

    const query = 'UPDATE Veiculo SET modelo = ?, capacidade = ? WHERE placa = ?';
    con.query(query, [modelo, capacidade, placa], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Veículo atualizado com sucesso', result });
        }
    });
};

const deleteVeiculo = (req, res) => {
    const { placa } = req.params;

    const query = 'DELETE FROM Veiculo WHERE placa = ?';
    con.query(query, [placa], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Veículo removido com sucesso', result });
        }
    });
};

// CRUD - Cliente
const createCliente = (req, res) => {
    const { nome, endereco, telefone, email } = req.body;

    const query = 'INSERT INTO Cliente (nome, endereco, telefone, email) VALUES(?, ?, ?, ?)';
    con.query(query, [nome, endereco, telefone, email], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Cliente criado com sucesso', result });
        }
    });
};

const readClientes = (req, res) => {
    con.query("SELECT * FROM Cliente", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateCliente = (req, res) => {
    const { idCliente, nome, endereco, telefone, email } = req.body;

    const query = 'UPDATE Cliente SET nome = ?, endereco = ?, telefone = ?, email = ? WHERE idCliente = ?';
    con.query(query, [nome, endereco, telefone, email, idCliente], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });
        }
    });
};

const deleteCliente = (req, res) => {
    const { idCliente } = req.params;

    const query = 'DELETE FROM Cliente WHERE idCliente = ?';
    con.query(query, [idCliente], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente removido com sucesso', result });
        }
    });
};

// CRUD - Funcionario
const createFuncionario = (req, res) => {
    const { nome, cargo, salario } = req.body;

    const query = 'INSERT INTO Funcionario (nome, cargo, salario) VALUES(?, ?, ?)';
    con.query(query, [nome, cargo, salario], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Funcionário criado com sucesso', result });
        }
    });
};

const readFuncionarios = (req, res) => {
    con.query("SELECT * FROM Funcionario", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateFuncionario = (req, res) => {
    const { idFuncionario, nome, cargo, salario } = req.body;

    const query = 'UPDATE Funcionario SET nome = ?, cargo = ?, salario = ? WHERE idFuncionario = ?';
    con.query(query, [nome, cargo, salario, idFuncionario], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Funcionário atualizado com sucesso', result });
        }
    });
};

const deleteFuncionario = (req, res) => {
    const { idFuncionario } = req.params;

    const query = 'DELETE FROM Funcionario WHERE idFuncionario = ?';
    con.query(query, [idFuncionario], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Funcionário removido com sucesso', result });
        }
    });
};

// CRUD - Rota
const createRota = (req, res) => {
    const { origem, destino, distancia } = req.body;

    const query = 'INSERT INTO Rota (origem, destino, distancia) VALUES(?, ?, ?)';
    con.query(query, [origem, destino, distancia], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Rota criada com sucesso', result });
        }
    });
};

const readRotas = (req, res) => {
    con.query("SELECT * FROM Rota", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateRota = (req, res) => {
    const { idRota, origem, destino, distancia } = req.body;

    const query = 'UPDATE Rota SET origem = ?, destino = ?, distancia = ? WHERE idRota = ?';
    con.query(query, [origem, destino, distancia, idRota], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Rota atualizada com sucesso', result });
        }
    });
};

const deleteRota = (req, res) => {
    const { idRota } = req.params;

    const query = 'DELETE FROM Rota WHERE idRota = ?';
    con.query(query, [idRota], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Rota removida com sucesso', result });
        }
    });
};

// CRUD - Entrega
const createEntrega = (req, res) => {
    const { placa, motorista, idRota, inicio, fim, status } = req.body;

    const query = 'INSERT INTO Entrega (placa, motorista, idRota, inicio, fim, status) VALUES(?, ?, ?, ?, ?, ?)';
    con.query(query, [placa, motorista, idRota, inicio, fim, status], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Entrega criada com sucesso', result });
        }
    });
};

const readEntregas = (req, res) => {
    con.query("SELECT * FROM Entrega", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updateEntrega = (req, res) => {
    const { idEntrega, placa, motorista, idRota, inicio, fim, status } = req.body;

    const query = 'UPDATE Entrega SET placa = ?, motorista = ?, idRota = ?, inicio = ?, fim = ?, status = ? WHERE idEntrega = ?';
    con.query(query, [placa, motorista, idRota, inicio, fim, status, idEntrega], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Entrega atualizada com sucesso', result });
        }
    });
};

const deleteEntrega = (req, res) => {
    const { idEntrega } = req.params;

    const query = 'DELETE FROM Entrega WHERE idEntrega = ?';
    con.query(query, [idEntrega], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Entrega removida com sucesso', result });
        }
    });
};

// CRUD - Pedido
const createPedido = (req, res) => {
    const { idCliente, idEntrega, dataPedido, valor } = req.body;

    const query = 'INSERT INTO pedido (idCliente, idEntrega, dataPedido, valor) VALUES(?, ?, ?, ?)';
    con.query(query, [idCliente, idEntrega, dataPedido, valor], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Pedido criado com sucesso', result });
        }
    });
};

const readPedidos = (req, res) => {
    con.query("SELECT * FROM pedido", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
};

const updatePedido = (req, res) => {
    const { idPedido, idCliente, idEntrega, dataPedido, valor } = req.body;

    const query = 'UPDATE pedido SET idCliente = ?, idEntrega = ?, dataPedido = ?, valor = ? WHERE idPedido = ?';
    con.query(query, [idCliente, idEntrega, dataPedido, valor, idPedido], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Pedido atualizado com sucesso', result });
        }
    });
};

const deletePedido = (req, res) => {
    const { idPedido } = req.params;

    const query = 'DELETE FROM pedido WHERE idPedido = ?';
    con.query(query, [idPedido], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Pedido removido com sucesso', result });
        }
    });
};

// Inicialização do Express
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", teste);

// Rotas para Veiculo
app.post("/veiculos", createVeiculo);
app.get("/veiculos", readVeiculos);
app.put("/veiculos", updateVeiculo);
app.delete("/veiculos/:placa", deleteVeiculo);

// Rotas para Cliente
app.post("/clientes", createCliente);
app.get("/clientes", readClientes);
app.put("/clientes", updateCliente);
app.delete("/clientes/:idCliente", deleteCliente);

// Rotas para Funcionario
app.post("/funcionarios", createFuncionario);
app.get("/funcionarios", readFuncionarios);
app.put("/funcionarios", updateFuncionario);
app.delete("/funcionarios/:idFuncionario", deleteFuncionario);

// Rotas para Rota
app.post("/rotas", createRota);
app.get("/rotas", readRotas);
app.put("/rotas", updateRota);
app.delete("/rotas/:idRota", deleteRota);

// Rotas para Entrega
app.post("/entregas", createEntrega);
app.get("/entregas", readEntregas);
app.put("/entregas", updateEntrega);
app.delete("/entregas/:idEntrega", deleteEntrega);

// Rotas para Pedido
app.post("/pedidos", createPedido);
app.get("/pedidos", readPedidos);
app.put("/pedidos", updatePedido);
app.delete("/pedidos/:idPedido", deletePedido);

// Inicialização do servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
