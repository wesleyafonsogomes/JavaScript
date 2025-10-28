function soma(a,b) {
    if(a === undefined || b === undefined) {
        console.log('Essa função precisa ter os dois valores');
    } else {
        return a + b;
    }
}

console.log(soma(5));
console.log(soma(5,10));

function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log('Olá ' + nome);
    } else {
        console.log(`Olá ${nome} você tem ${idade} anos`);
    }
}

saudacao('Matheus');
saudacao('Wesley', 29);