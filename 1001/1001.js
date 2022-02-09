const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const n1 = parseInt(lines[0]);
const n2 = parseInt(lines[1]);

console.log("X =", n1+n2);




