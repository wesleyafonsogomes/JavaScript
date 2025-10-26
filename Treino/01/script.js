let nome = 'Wesley';
let idade = 29;
let senha = 2196;

// prompt('Qual seu nome?');
// prompt('Qual a sua idade?');

// alert('Isso é um alert!')

let maiorNumero = Math.max(12,55,87,3);
console.log(maiorNumero);

let menorNumero = Math.min(13,25,65,59);
console.log(menorNumero);

let arredondar = Math.round(54.4);
console.log(arredondar);

let arredondarCima = Math.ceil(54.4);
console.log(arredondarCima);

idade = 19;

if(idade > 18) {
    console.log('Pode entrar');
} else {
    console.log('Não pode entrar');
}

if(idade > 18 && nome == 'Wesley') {
    console.log("Pode entrar");
} else {
    console.log('Não pode entrar');
}

if(idade > 18 && nome != 'Wesley' || senha == 2196) {
    console.log('Entrada autorizada');
} else {
    console.log('Entrada não autorizada');
}

for(let n = 0; n <= 50; n = n + 2) {
    console.log(`O número é ${n}`);
}

for(let x = 50; x >= 0; x = x - 5) {
    console.log(x);
}

for(let y = 1000; y > 499; y = y / 2) {
    console.log(`Essa divisão é ${y}`);
}

for(let w = 1; w <= 128; w = w * 2) {
    console.log(`Essa multiplicação será = ${w}`);
}


