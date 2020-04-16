//require region starts
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
//require region ends


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => {
                console.log('=============================\n'.green)
                console.log(`Table base: ${argv.base}, limite: ${argv.limite}\n`.green)
                console.log('=============================\n'.green)
                console.log(`${tabla}`)
                console.log('=============================\n'.green)
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                var outputFormat = colors.blue;
                console.log(outputFormat(`Archivo creado: ${archivo}`))
            })
            .catch(err => console.log(err));
        break;
    default:
        console.log(`Comando: '${comando}' desconocido`);
        return;
}