const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.writeHead(201, { 'Content-type': 'text plain' })
            res.write('hola ya se usar http de node.js')
            break;

        default:
            res.writeHead(404, { 'Content-type': 'text plain' })
            res.write('no encontrado')
            break;
    }
    res.end();
}

console.log('escuchando http en el puerto 3000');
