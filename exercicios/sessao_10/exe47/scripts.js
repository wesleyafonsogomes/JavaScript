// sistema de personagens de jogo (class es6)

class Personagem {
    constructor(nome, level, vida) {
        this.nome = nome;
        this.level = level;
        this.vida = vida;
    }
    ganharVida(quantidade) {
        if(quantidade > 0 && (this.vida - quantidade) <= 100) {
            this.vida += quantidade;
            console.log(`Vida adicionada, a vida atual é ${this.vida}`);
        } else {
            console.log("Não foi possivel adicionar vida, maximo atingido");
        }
    }
    perderVida(quantidade) {
        if(quantidade > 0 && (this.vida + quantidade) >= 0) {
            this.vida -= quantidade;
            console.log(`Vida retirada, a vida atual é ${this.vida}`);
        } else {
            console.log("Não foi possivel remover vida, mínimo atingido");
        }
    }
    curarAliado(quantidade, personagemAliado) {
        if(quantidade > 0 && (this.vida - quantidade) >= 0 && (personagemAliado.vida + quantidade) <= 100) {
            this.vida -= quantidade;
            personagemAliado.vida += quantidade;
            console.log(`${quantidade} de vida foi transferido`);
        } else {
            console.log("Não foi possivel transferir vida");
        }
    }
    mostrarStatus() {
        console.log(`Nome: ${this.nome} | Level: ${this.level} | Vida: ${this.vida}`);
    }
}

// criando personagem 

let megaMan = new Personagem("Mega Man", 5, 40);
let personagemAliado = new Personagem("Max Steel", 8, 40);

// verificando personagens 

console.log(megaMan);
console.log(personagemAliado);

// adicionando vida

megaMan.ganharVida(40);

// removendo vida 

megaMan.perderVida(20);

// curando aliado 

megaMan.curarAliado(10, personagemAliado);

// vendo personagens após mudanças 

console.log(megaMan);
console.log(personagemAliado);

// status 

megaMan.mostrarStatus();
personagemAliado.mostrarStatus();








