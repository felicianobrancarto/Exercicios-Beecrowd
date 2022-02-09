const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const notaA = parseFloat(lines[0]);
const notaB = parseFloat(lines[1]);

const media = ((notaA * 3.5) + (notaB * 7.5)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);

