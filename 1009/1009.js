// Não esqueça de trocar para true na hora de submeter
const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

 const vendedor = (lines[0]);
 const salarioFixo = parseFloat(lines[1]);
 const vendas = parseFloat(lines[2]);
 const comissao = vendas * 0.15;

 const salarioTotal = salarioFixo + comissao;
 console.log("TOTAL = R$", salarioTotal.toFixed(2));

