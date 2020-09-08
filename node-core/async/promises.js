function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}
function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla ...');
            resolve(nombre);
        }, 1000);
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('adios ', nombre);
            resolve();
        }, 1000);
    })
}

console.log('Iniciando proceso');
hola('pepe')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminando proceso');
    })
    .catch(error => {
        console.log('ha habido un error');
        console.log(error);
    })