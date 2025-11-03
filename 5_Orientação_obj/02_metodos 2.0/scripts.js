// mudando nome de propriedades do objeto

const pessoa = {
    nome: "Wesley",
    idade: 29,
    prof: "Estudante",

    newProf: function(prof) {
        return this.prof = prof
    }
};

console.log(pessoa);
pessoa.newProf("Programador");
console.log(pessoa);

const cachorro = {
    raca: 'SRD',
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function(raca) {
        return "A raça é " + this.raca;
    }
}

cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);

console.log(cachorro.getRaca());

// Agora mudando a cor do cachorro 

let dog = {
    nome: "Hulk",
    cor: "Branco",
    mudarCor: function(cor) {
        this.cor = cor;
    }
}

console.log(dog.cor);

dog.mudarCor("Preto");

console.log(dog.cor);






