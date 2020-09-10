const os = require('os');

console.log('CPUs: ', os.cpus());
console.log('IP: ', os.networkInterfaces().en0.map(i => i.address));
console.log('memorya libre: ', os.freemem());
console.log('os: ', os.type());
console.log('os version: ', os.release());
console.log('user info: ', os.userInfo());