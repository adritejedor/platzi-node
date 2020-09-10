const util = require('util');

const helloPluto = util.deprecate(()=> {
    console.log('hello pluto');
}, 'pluto is deprecated. Its not a planet enymore.');

helloPluto();