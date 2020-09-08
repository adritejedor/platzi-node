let sum = 0;
console.time('bucle')
for (let i = 0; i < 100000000; i++) {
    sum += 1
}
console.timeEnd('bucle')


let sum2 = 0;
console.time('bucle2')
for (let j = 0; j < 100000000; j++) {
    sum += 1
}
console.timeEnd('bucle2')

function asincrona() {
    return new Promise((resolve, rej) => {
        setTimeout(() => {
            console.log('termina el proceso asincrono');
            resolve();
        }, 100);
    })
}

console.time('async')
asincrona()
.then(() => {
    console.timeEnd('async')
})
