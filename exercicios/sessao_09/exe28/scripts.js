// crie um objeto e imprima cada propriedade

let onibus = {
    "rodas": 8,
    "limiteDePassageiros": 40,
    "Portas": 2
};

console.log(onibus);

console.log(onibus.rodas);
console.log(onibus.limiteDePassageiros);
console.log(onibus.Portas);

let carro = {
    "rodas": 4,
    "portas": 2,
    "arCondicionado": "true",
    "vidroEletrico": "true",
    "tetoSolar": "true",
};

console.log(carro);

console.log(carro.rodas);
console.log(carro.portas);
console.log(carro.arCondicionado);
console.log(carro.vidroEletrico);
console.log(carro.tetoSolar);


// deletando propriedade

delete carro.arCondicionado;

console.log(carro);

// adicionando outra propriedade

carro.newArCondicionado = true;

console.log(carro);











