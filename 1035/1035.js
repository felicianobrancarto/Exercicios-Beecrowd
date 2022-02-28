const submit = false;
const file = submit ? "/dev/stdin" : "in";
const input = require("fs").readFileSync(file, "utf8");
const lines = input.split("\n");

const [A,B,C,D] = lines[0].split(" ");

if ((B > C) && (D > A) && (C + D > A + B) && (C,D > 0) && (A % 2== 0)) {
 return console.log("Valores aceitos");
} else {
  return console.log("Valores nao aceitos");
}

// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A,
// e a soma de C com D for maior que a soma de A e B e se C e D, ambos,
//forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever
//"Valores nao aceitos".

// Entrada
// Quatro números inteiros A, B, C e D.

// Saída
// Mostre a respectiva mensagem após a validação dos valores.
