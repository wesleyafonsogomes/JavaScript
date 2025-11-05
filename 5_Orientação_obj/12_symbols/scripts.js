class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("Au Au");
    }
}

Cachorro.prototype.raca = "SRD";

// criando um symbol 
let patas = Symbol();
Cachorro.prototype[patas] = 4;
// acessando symbol 
console.log(Cachorro.prototype[patas]);

let labrador = new Cachorro("Labrador", "Amarelo");

console.log(labrador[patas]);

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
