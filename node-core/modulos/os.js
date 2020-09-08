const os = require('os');

console.log('a<rquitectura: ', os.arch());
console.log('plataforma: ', os.platform());
console.log(os.cpus().length, 'nucleos');
console.log(os.freemem(), 'memoria');
console.log(os.freemem() / 1024, 'memoria libre en kb');
console.log((os.freemem() / 1024) / 1024, 'memoria libre en mb');
console.log(((os.freemem() / 1024) / 1024) / 1024, 'memoria libre en gb');
console.log(((os.totalmem() / 1024) / 1024) / 1024, 'memoria total en gb');
console.log(os.homedir() ,'directorio raiz');
console.log(os.tmpdir() ,'directorio temporal');
console.log(os.hostname() ,'hostname');
console.log(os.networkInterfaces() ,'network interfaces');