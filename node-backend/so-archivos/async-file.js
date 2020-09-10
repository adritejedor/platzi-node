const fs = require('fs');

const file = process.argv[2];

if (!file) {
    throw new Error('debes indicar el archivo que quieres leer')
}

const content = fs.readFile(file, (err, content) => { 
    if (err) {
        console.log(err);
    }
    const lines = content.toString().split('\n').length;
    console.log(lines);
});

