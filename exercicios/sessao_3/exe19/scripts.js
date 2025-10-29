

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(aleatorio(0,50));


// só o maximo agora

function numeroAleatorio(num) {
    return Math.floor(Math.random() * num) +1;
}

console.log(numeroAleatorio(10));

/*
Math.floor para arredondar para valores inteiros
*/