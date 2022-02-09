const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const raio = (lines[0]);
const pi = 3.14159;
const formula = (4/3) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${formula.toFixed(3)}`);