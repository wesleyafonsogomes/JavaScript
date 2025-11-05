// Sistema de Smarthphones = ES6 class

class Smarthphones {
    constructor(marca, modelo, bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = bateria;
    }
    carregar(porcentagem) {
        if(porcentagem > 0 && (this.bateria + porcentagem) <= 100) {
            this.bateria += porcentagem;
            console.log(`Bateria carregada, a bateria atual é ${this.bateria}`);
        } else {
            console.log("Não foi possivel carregar o Smarthphone");
        }
    }
    usar(porcentagem) {
        if(porcentagem > 0 && (this.bateria - porcentagem) >= 0) {
            this.bateria -= porcentagem;
            console.log(`Bateria retirada, a bateria atual é ${this.bateria}`);
        } else {
            console.log("Não é possivel usar a bateria do Smarthphone");
        }
    }
    compartilharBateria(porcentagem, smarthphoneAmigo) {
        if(porcentagem > 0 && (this.bateria - porcentagem) >= 0 && (smarthphoneAmigo.bateria + porcentagem) <= 100) {
            this.bateria -= porcentagem;
            smarthphoneAmigo.bateria += porcentagem;
            console.log(`${porcentagem} de bateria foi compartilhada`);
        } else {
            console.log("Não foi possivel copartilhar bateria");
        }
    }
    mostrarInfo() {
        console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Bateria: ${this.bateria}`);
    }
}

let iphone15 = new Smarthphones("Apple", "Iphone15", 50);
let smarthphoneAmigo = new Smarthphones("Sansung", "A22", 10);

console.log(iphone15);
console.log(smarthphoneAmigo);

iphone15.carregar(50);
iphone15.usar(10);

iphone15.compartilharBateria(40, smarthphoneAmigo);

console.log(iphone15);
console.log(smarthphoneAmigo);

// adicionando propriedades ao object 

Smarthphones.prototype.ships = 1;

// agora como adicionar para mostrar no objeto de origem?








