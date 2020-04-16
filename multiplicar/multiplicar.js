//require region starts
const fs = require('fs');
//require region ends


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: ${base} no es un número válido`);
        }

        if (!Number(limite)) {
            reject(`El limite: ${limite} no es un número válido`);
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`;
        }

        resolve(data);
    });
};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: ${base} no es un número válido`);
        }

        if (!Number(limite)) {
            reject(`El limite: ${limite} no es un número válido`);
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-limite-${limite}.txt`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};