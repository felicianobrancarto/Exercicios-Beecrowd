const lista =[2,3,5,7,11, 10]

const soma = lista.reduce(function(soma, i) {
    return soma + i;
});
console.log(soma);

//faz a soma dos valroes do array. o Reduce transforma o array em número.