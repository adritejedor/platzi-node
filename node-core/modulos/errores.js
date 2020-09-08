function serompe() {
    return 3 + z;
}

function serompeasync(callback){
    setTimeout(() => {
        try {
            return 3 + x;
        } catch (error) {
            callback(error)
        }
    }, 1000);
}

serompeasync((err) => console.log(err.message));

try {
    serompe();
} catch (error) {
    console.log('ha habido un error');
}