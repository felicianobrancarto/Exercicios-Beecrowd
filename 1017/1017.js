const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const tempoEmHoras = lines[0];
const velocidadekmHora = lines[1];

const consumo = (tempoEmHoras * velocidadekmHora) / 12;

console.log(consumo.toFixed(3));

