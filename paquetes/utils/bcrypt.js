const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 10, (err, hash) => {
    console.log('hash: ', hash);

    bcrypt.compare('password', hash, (err, same) => {
        console.log('es igual??: ', same);
    })
});