const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

let valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota of notas) {

    let qtdNota = parseInt(valor / nota);
    console.log(`${qtdNota} nota(s) de R$ ${nota},00`);
    valor = valor % nota;

};



// ESSE É O CAMINHO MAIS LONGO.

// qtdNota = parseInt(valor / 100);
// console.log(`${qtdNota} nota(s) de R$ ${100},00`);
// valor = valor % 100;

// qtdNota = parseInt(valor / 50);
// console.log(`${qtdNota} nota(s) de R$ ${50},00`);
// valor = valor % 50;

// qtdNota = parseInt(valor / 20);
// console.log(`${qtdNota} nota(s) de R$ ${20},00`);
// valor = valor % 20;

// qtdNota = parseInt(valor / 10);
// console.log(`${qtdNota} nota(s) de R$ ${10},00`);
// valor = valor % 10;

// qtdNota = parseInt(valor / 5);
// console.log(`${qtdNota} nota(s) de R$ ${5},00`);
// valor = valor % 5;

// qtdNota = parseInt(valor / 2);
// console.log(`${qtdNota} nota(s) de R$ ${2},00`);
// valor = valor % 2;

// qtdNota = parseInt(valor / 1);
// console.log(`${qtdNota} nota(s) de R$ ${1},00`);
// valor = valor % 1;