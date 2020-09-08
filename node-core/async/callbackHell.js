function hola(nombre, callback) {
    setTimeout(() => {
        console.log('hola ' + nombre);
        callback(nombre);
    }, 1000);
}
function hablar(callback) {
    setTimeout(() => {
        console.log('bla bla bla');
        callback();
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(() => {
        console.log('adios ', nombre);
        callback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, () => { 
            callback();
        })
    }

}

console.log('iniciando proceso ...');
hola('pepe', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('terminando proceso ...');
    })
})