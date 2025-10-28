let idade = 20;
let cnh = true;
 
if(idade > 18 && cnh) {
    console.log('Pode dirigir!');
} else if(idade > 18 && !cnh) {
    console.log('Não pode dirigir, mas pode tirar a CNH');
} else {
    console.log('Não pode dirigir');
}




/*
if(!cnh) {
    console.error('Não possui CNH');
}
if(idade < 18) {
    console.error('É menor de idade')
}
    console.log('Está autorizado!');
*/