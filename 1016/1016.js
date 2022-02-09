const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
// lê o conteudo do arquivo stdin e armazena no input.
const lines = input.split('\n');

const carrox = 1
const carroy = 1.5
const distanciaPercorridax = carrox * 60
const distanciaPercorriday = carroy * 60
const distanciaYparaX = lines[0];

const diferenca = distanciaYparaX * 2 

console.log(`${diferenca} minutos`)


