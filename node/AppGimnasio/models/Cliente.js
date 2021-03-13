const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    cuota: Number,
    activo: Boolean
});

clienteSchema.virtual('nombreCompleto').get(function () {
    return this.nombre + ' ' + this.apellidos;
});

clienteSchema.virtual('nombreCompleto').set(function (newValue) {
    const arr = newValue.split(' ');
    this.nombre = arr[0];
    this.apellidos = arr[1];
});

clienteSchema.virtual('cuotaIva').get(function () {
    return this.cuota + (0.15 * this.cuota);
});

clienteSchema.statics.activos = function () {
    return this.model('cliente').find({ activo: true });
}

module.exports = mongoose.model('cliente', clienteSchema);

// Fat Model Skinny Controller
// Dont Repeat Yourself