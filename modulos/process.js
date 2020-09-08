process.on('exit', () => {
    console.log('el proceso acabó');
});

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('uncaughtException', (err, origin) => {
    console.error('vaya se ha roto', err);
})

// process.on('uncaughtRejection')


hoal();

console.log('esto sigue funcionando');