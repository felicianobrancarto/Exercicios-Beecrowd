const submit = false;
const file = submit ? '/dev/stdin' : 'in';
const input = require('fs').readFileSync(file, 'utf8');
const lines = input.split('\n');

const valores = lines.map(item => parseInt(item));
const contador = valores.filter(n => n%2 === 0).length;

console.log(`${contador} valores pares`)

// => significa recebe. (arrow function).
// lembrando que >= maior igual é diferente de => recebe.

// length serve como um contador. 
//length é uma propriedade de um objeto função ,
// e indica quantos argumentos a função espera





        // essa opçao aqui consegue buscar as duas opçoes no mesmo código, impar e par.

        // let contadorpar = 0
        // let contadorimpar = 0

        // lines.map((linhas) => {

        //     if (linhas % 2 === 0) {

        //         contadorpar++

        //     }else {
        //         contadorimpar++

        //     }

        // })

        // console.log(`${contadorpar} números são pares`)
        // console.log(`${contadorimpar} números são impar`)


        //contador++  = contador = contador + 1

        // lines.map tem a funçao buscar todos os elementos do in.

        // = atribuiçao
        // == comparação igual
        // === comparaçao valor e tipo igual 
        // => é receber