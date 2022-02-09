const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const notaA = parseFloat(lines[0]);
const notaB = parseFloat(lines[1]);
const notaC = parseFloat(lines[2]);

const media = ((notaA * 2) + (notaB) * 3 + (notaC * 5)) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);