const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    cuota: Number,
    activo: Boolean
});

module.exports = mongoose.model('cliente', clienteSchema);