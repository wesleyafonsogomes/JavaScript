// var , let, const 
var antigo = 1;
let novo = 1;
const novo2 = 0;

// arrow function

const num = [1,2,3,4,5];

const maioNum = (num) => Math.max(...num);
// console.log(maioNum(num));

const menorNum = (num) => Math.min(...num);
// console.log(menorNum(num));

const soma = (a,b) => a + b;
// const saudacao = (nome) => "Olá, " + nome + "!";
// console.log(saudacao("Wesley")); 

// exercicios filter 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(numero => numero % 2 === 0);

const impares = numeros.filter((numero) => numero % 2 !== 0);

const maioresQue5 = numeros.filter((numero) => numero > 5);

const menorQue5 = numeros.filter((numero) => numero < 5);
console.log(menorQue5);

const numero5 = numeros.filter((numero) => numero === 5);
