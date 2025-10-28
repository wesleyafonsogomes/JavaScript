function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,5,8));

const mult = multiplicarTresNumeros(3, 2, 2);
console.log(`O valor da mult é: ${mult}`);

// 2 variaveis no function

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log('Pode dirigir')
    } else {
        console.log('Não pode dirigir')
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25,true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17,false));