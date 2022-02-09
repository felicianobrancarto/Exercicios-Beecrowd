const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
// lê o conteudo do arquivo stdin e armazena no input.
const lines = input.split('\n');

//const valores = input.split(" ");

const [x1, y1] = lines[0].split(" ");
const [x2, y2] = lines[1].split(" ");

const distancia = Math.sqrt(((x2 - x1) ** 2 + (y2 -y1) ** 2));

console.log(distancia.toFixed(4));

//formas de elevar um numero ao quadrado:
// A *A ou A**A ou Math.pow(A,2).

//Math.sqrt para calcular a raiz quadrada.

