let onibus = {
    "rodas": 4,
    "limitePessoas": 40,
    "portas": 2
};

console.log(onibus);

// adicionei janelas
onibus.janelas = 20;

console.log(onibus);
console.log(onibus.janelas);

// deletei rodas
delete onibus.rodas;

console.log(onibus);
console.log(onibus.rodas);








