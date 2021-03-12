const router = require('express').Router();
const Cliente = require('../models/Cliente');

// Inserción a través de instancia
router.get('/insert_v1', (req, res) => {
    const cliente = new Cliente();
    cliente.nombre = 'Araceli';
    cliente.apellidos = 'López';
    cliente.email = 'aralop@gmail.com';
    cliente.cuota = "29.99";
    cliente.activo = true;

    cliente.save()
        .then(nuevoCliente => {
            res.json(nuevoCliente);
        })
        .catch(error => console.log(error));
});

// Inserción con método create
router.get('/insert_v2', async (req, res) => {
    const nuevoCliente = await Cliente.create({
        nombre: 'Ramón',
        apellidos: 'Martín',
        email: 'ramon@gmail.com',
        cuota: 40,
        activo: true
    });
    res.json(nuevoCliente);
});

module.exports = router;