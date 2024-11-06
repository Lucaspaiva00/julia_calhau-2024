const clienteModel = require('../models/clienteModel');

const createCliente = (req, res) => {
    clienteModel.createCliente(req.body, (err, result)=> {
        if(err) {
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message:'Cliente criado com sucesso', result});
        }
    });

};

const readClientes = (req, res) => {
    clienteModel.readClientes((err,result)=> {
        if(err) {
            res.status(500).json({error: err.message });
        } else {
            res.json(result);
        }

    });
};

const updateCliente = (req, res) => {
    clienteModel.updateCliente(req.body, (err, result) =>{
        if (err) {
            res.status(500).json({error:err.message});
        } else {
            res.json({message:'Cliente atualizado com sucesso', result});
        }
    });
};

const deleteCliente = (req, res) => {
    const {idCliente} = req.params;
    clienteModel.deleteCliente(idCliente, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
        } else {
            res.json ({ message: 'Cliente removido com sucesso', result});
        }
    });
};

module.exports = {createCliente, readClientes, updateCliente, deleteCliente};