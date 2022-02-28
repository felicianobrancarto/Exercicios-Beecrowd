const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');



const [a, b, c, d] = lines.map(item => parseInt(item));
const diferenca = (a*b - c*d);
console.log(`DIFERENCA = ${diferenca}`);

// forma mais demorada

// const A = parseFloat(lines[0]);
// const B = parseFloat(lines[1]);
// const C = parseFloat(lines[2]);
// const D = parseFloat(lines[3]);

// const diferenca = (A*B - C*D);

// console.log(`DIFERENCA = ${diferenca}`);
