const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const [a, b, c] = lines[0].split(" ");

const maior = Math.max(a,b,c);

console.log(`${maior} eh o maior`);


// lembrar que sem a função Math vai comecar com maiuscula,
// e quando um nome ficar em branco, é porque tem agum erro.

//Math.max() retorna o maior número do array.
//Math.min() retorna o menor número do array.