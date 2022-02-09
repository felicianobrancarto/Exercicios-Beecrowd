const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const produto1 = lines[0].split(" ");
const produto2 = lines[1].split(' ');

const [Produto1Codigo, produto1Quantidade, produto1preco] = produto1; 
// const Produto1Codigo = produto1[0];
// const produto1Quantidade = produto1[1];
// const produto1preco = produto1[2]; //caminho mais longo
const produto1valorTotal = produto1Quantidade * produto1preco;

const [Produto2Codigo, produto2Quantidade, produto2preco] = produto2; 
// const Produto2Codigo = produto2[0];
// const produto2Quantidade = produto2[1];
// const produto2preco = produto2[2];
const produto2valorTotal = produto2Quantidade * produto2preco;

const valorTotalDosProdutos = produto1valorTotal + produto2valorTotal

console.log(`VALOR A PAGAR: R$ ${valorTotalDosProdutos.toFixed(2)}`);   