const fs = require('fs');

const crearArchivo = async (base = 5) => {

    try {
        let salida = '';

    for (let i =1; i < 10; i++){
        salida += 'el numero ' + base + ' por ' + i + ' es: ' + base * i + '\n';
        
    }


    fs.writeFile('tabla.txt', salida, (err) => {
        if (err) throw err;

        console.log(salida);
    });
    } catch (errr) {
        throw err;
    }
    
};

module.exports = {
    crearArchivo
};