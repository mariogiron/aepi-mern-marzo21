const fs = require('fs');
const fsPromises = require('fs/promises');

// Síncrona
// const files = fs.readdirSync('..');

// Callback
// fs.readdir('.', (err, files) => {
//     console.log(files);
// });

// Promise
// fsPromises.readdir('.')
//     .then((files) => console.log(files))
//     .catch((error) => console.log(error));

fs.readFile('./ficheros/primero.md', 'utf-8', (err, data) => {
    console.log(data);
});

fsPromises.readFile('./ficheros/primero.md', 'utf-8')
    .then(data => console.log(data))
    .catch(error => console.log(error));

fsPromises.appendFile('./ficheros/segundo.md', 'Contenido del fichero')
    .then(() => console.log('Se ha escrito el fichero'))
    .catch(error => console.log(error));


if (fs.existsSync('./bin')) {
    console.log('Ya existe la carpeta');
} else {
    fs.mkdir('./bin', (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Se ha creado el directorio');
        }
    });
}