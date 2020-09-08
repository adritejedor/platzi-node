function asincrona(callback) {
    let z = 0;
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error, null);
        }
    }, 1000);
}

asincrona((err, data) => {
    if (err) {
        console.error('tenemos un error: ', err);
        return;
    }
    console.log(data);

})