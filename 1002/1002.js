//A fórmula para calcular a área de uma circunferência é definida como A = π . R2. Considerando-se a este problema que π = 3,14159:

const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const pi = 3.14159;
const raio = parseFloat(lines[0]);

const area = pi * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));