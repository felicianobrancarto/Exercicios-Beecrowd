const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const numerosFuncionario = parseFloat(lines[0]);
const horasTrabalhadas = parseFloat(lines[1]);
const valorHora = parseFloat(lines[2]);
const salario = horasTrabalhadas * valorHora;

console.log(`NUMBER = ${numerosFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);