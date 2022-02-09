const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const valores = lines[0].split(' '); 
/* o split é usado para transformar uma string em vetor, e o espaço entre aspas dividir os elementos
desse vetor, no caso será um vetor de 3 elementos.
*/

valores.sort((a,b)=> a-b); 
// essa linha nada mais é do que usar a funçao sort para ordenar de forma crescente,
// se for de forma decrescente, só trocar a posiçao b -a.

const numbers = lines[0].split(' '); 
// o comando ordena para puxar a informaçao original sendo que em array. apenas.

console.log(valores[0]); // será feito a leitura 0.1.2 de forma crescente como se pedido e colocado no comando sort.
console.log(valores[1]);
console.log(valores[2]);
console.log( ); //serve apenas para dar espaço entre as informaçôes.
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);





