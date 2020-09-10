// %s string
// %d number
// %j json

// console.log('Un %s y un %s', 'perrito', 'gatito');
// console.log('Un %j', {
//     "hola": "hola",
//     "adios": "adios"
// });

// console.info('hello world');
// console.warn('warning');

// console.assert(42 == "42");
// console.assert(42 === "42");

// console.trace('hello');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hello from debuglog')
