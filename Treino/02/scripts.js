let idade = 18;
let nome = 'Wesley';
let cnh = true;

if(idade >= 18 && cnh) {
    console.log('Possui CNH');
} else if(idade >= 18 && (!cnh)) {
    console.log('Não possui CNH, mas está apto para tirar');
} else {
    console.log('Não está apto a tirar CNH');
}
