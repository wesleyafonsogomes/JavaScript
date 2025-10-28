// function sem parâmetro;

function imprimirNoConsole() {
    console.log("Olá, mundo!");
}

imprimirNoConsole();

// function com parâmetro;

function imprimirUmNumero(num) {
    console.log('O número é:' + num);
}

imprimirUmNumero(2);
imprimirUmNumero(3);

// function sem parâmetro, anônima;

function numeroAleatorio() {
    console.log(Math.random());
}

numeroAleatorio();