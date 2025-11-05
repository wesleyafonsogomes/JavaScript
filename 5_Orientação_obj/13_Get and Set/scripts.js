class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("Au Au");
    }
    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor
    }
}

let pastor = new Cachorro("Pastor Alemão", "Sem cor");

console.log(pastor);

// chamando parametros get and set 

pastor.setCor = "Marrom";

// ou seja, por natureza (defalt) é sem cor 

console.log(pastor.cor);

let pug = new Cachorro("Pug", "Sem Cor1");

console.log(pug);

pug.setCor = ("Azul");
console.log(pug.cor);

