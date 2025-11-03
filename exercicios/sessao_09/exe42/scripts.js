// functions para gerenciar garagem de carros

let garagem = ["fusca", "civic", "gol"];

function estacionarCarros(carro) {
    garagem.push(carro);
    console.log(`O carro "${carro}" foi adicionado a garagem`);
    return "uma string";
}

estacionarCarros("uno");
console.log("Imprimindo o valor ");

function retirarCarros(carro) {
    let index = garagem.indexOf(carro);
    if(index !== -1) {
        garagem.splice(index, 1);
        console.log(`O carro "${carro}" foi removido da garagem`);
    }
}

function listarCarros(lista) {
    for(let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

listarCarros(garagem);

function procurarCarro(carro) {
    console.log(garagem.includes(carro));
}

// quero mostrar se encontrou, olhe se está certo?

function procurarCarro1(carro) {
    if(garagem.includes(carro)) {
        console.log("O carro foi encontrado");
    } else {
        console.log("O carro não foi encontrado");
    }
}

function vagasOcupadas() {
    return garagem.length;
}

function primeiroCarroNaFila() {
    return garagem[0];
};

console.log(primeiroCarroNaFila());

// desafio 

function vagasDisponiveis(capacidadeTotal) {
    return capacidadeTotal - garagem.length;
}

console.log(vagasDisponiveis(10));
// retorna 6 por que tem 4 carros
