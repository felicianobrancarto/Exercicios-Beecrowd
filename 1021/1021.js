const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

let valor = parseFloat(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log("NOTAS:")


for (let nota of notas) {

    let qtdNota = parseInt(valor / nota);
    console.log(`${qtdNota} nota(s) de R$ ${nota}.00`);
    valor = (valor % nota).toFixed(2);
};

console.log("MOEDAS:");

let valorMoeda

for (let moeda of moedas) {

    let qtdMoeda =parseInt(valor / moeda);
    console.log(`${qtdMoeda} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = (valor % moeda).toFixed(2);

};


