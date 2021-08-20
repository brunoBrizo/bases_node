const { type } = require('os');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
            .option(
                'b',
                {
                    alias: 'ss',
                    type: 'number'
                }
            )
            .argv;


const base = 5;
crearArchivo(base)
    .then( result => console.log(result))
    .catch(err => console.log(err));