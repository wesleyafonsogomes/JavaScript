let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2, num3);
imprimirNumeros('1,0,5,8,3,8,97,28,372');
imprimirNumeros('Teste');