const chalk = require('chalk');
const express = require('express');

const app = express();

app.get('/principal', (req, res) => {
    res.end('¡Estoy en la ruta principal!');
});

app.listen(3000, () => {
    console.log(chalk.bgGreen('Servidor escuchando en el puerto 3000'));
})