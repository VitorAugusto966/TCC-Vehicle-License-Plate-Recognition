const express = require('express');
const database = require('./database'); 
const databaseMerco = require('./database-merco'); 

const app = express();
const PORT = 3000;


app.get('/veiculo/:placa', (req, res) => {
    const placa = req.params.placa.toUpperCase(); 

    const buscarVeiculo = (placa) => {
        let veiculo = database.find(v => v.placa === placa);
        if (!veiculo) {
            veiculo = databaseMerco.find(v => v.placa === placa);
        }

        return veiculo;
    };

    const veiculo = buscarVeiculo(placa);

    if (veiculo) {
        res.status(200).json(veiculo); 
    } else {
        res.status(404).json({ error: 'Veículo não encontrado' }); 
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
