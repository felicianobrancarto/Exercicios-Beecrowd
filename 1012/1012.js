const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const [a, b, c] = input.split(' ').map(item => parseFloat(item));
// o comando .map(item => parseFloat(item)) transforma uma string em number.
// que pode ser inteiro ou Float decimal.
//console.log (pyteof var) informa o  tipo da variavel se string ou number ...
const areaTriangulo = (a * c) / 2;
console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);

const pi = 3.14159
const areaCirculo = pi * Math.pow(c, 2);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);

const areaTrapezio = ((a + b) * c) / 2;
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);

const areaQuadrado = (b * b);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);

const arearetangulo = (a * b);
console.log(`RETANGULO: ${arearetangulo.toFixed(3)}`);



