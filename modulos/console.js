console.log('ver algo');
console.error('ver un error');
console.warn('ver un warning');
console.info('mostrar info');

// console table

var table = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'y'
    }

];
console.table(table);

// console group

console.group('conver')

console.log('hola')
console.log('blablabla')
console.log('adios')

console.groupEnd('conver')

// contador

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')