const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta , (err, data) => {
        console.log(data.toString());
    })
}

function escribir(ruta, content, callback) {
    fs.writeFile(ruta, content, (err) => {
        if (err) {
            console.error('no he podido escribir');
        } else {
            console.log('escrito correctamente');
        }
    })
}

function borrar(ruta, callback) {
    fs.unlink(ruta, callback)
}

// leer(__dirname + '/archivo.txt');
// escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log)
borrar(__dirname + '/archivo1.txt', console.log);