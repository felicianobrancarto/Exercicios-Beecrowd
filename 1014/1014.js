const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const distanciaTotal = lines[0];
const combustivoConsumido = lines[1];

const consumoMedio = distanciaTotal / combustivoConsumido;

console.log(`${consumoMedio.toFixed(3)} km/l`);