const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

let qtdSegundos = parseInt(input);
const valores = [3600, 60, 1];

const resultado = [];

for (let valor of valores) {
    resultado.push(parseInt(qtdSegundos / valor) );
    qtdSegundos  = qtdSegundos % valor;
}

console.log(resultado.join(":"));

//.join transforma de arrey para o que voce deseja separar os elementos,
//nesse caso, foi separar por dois pontos.

//FORMA MAIS LONGA DE RESOLVER

// let qtdSegundos = parseInt(input);

// const qtdhoras = parseInt(qtdSegundos / 3600);
// qtdSegundos = qtdSegundos % 3600;

// //em 1h tem 3600 segundos

// const qtdMinutos = parseInt(qtdSegundos / 60);
// qtdSegundos = qtdSegundos % 60;

// console.log(`${qtdhoras}:${qtdMinutos}:${qtdSegundos}`)

