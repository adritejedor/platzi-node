function hola(nombre, callback) {
    setTimeout(() => {
        console.log('hola ' + nombre);
        callback(nombre);
    }, 1000);
}

function adios(nombre, callback){
    setTimeout(() => {
        console.log('adios ', nombre);
        callback();
    }, 1000);
}

// console.log('iniciando proceso ...');
hola('pepe', (nombre) => {
    adios(nombre, () => {
        // console.log('terminando proceso ...');
    })
});