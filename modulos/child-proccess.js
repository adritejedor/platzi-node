const { exec, spawn } = require('child_process');

// exec('ls -l', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

let process = spawn('ls', ['-l']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (dato) => {
    console.log(process.killed);
    console.log(dato.toString())
});

process.on('exit', () => console.log('el proceso termino'));