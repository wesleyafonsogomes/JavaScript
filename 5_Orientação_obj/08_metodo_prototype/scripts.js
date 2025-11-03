// criando um constructor usando New

function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    }

// atrelar uivar ao prototype 

Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuu");
}
Cachorro.prototype.latir = function() {
    console.log("Au Au");
}

let husky = new Cachorro("Husky", 4, "cinza");

console.log(husky.raca);
husky.uivar();


