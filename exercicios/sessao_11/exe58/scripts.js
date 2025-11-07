// criar uma classe qque simule um carro 

class Carro {
    constructor(marca, cor, gasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }
    consumoDeGasolina() {
            if(this.gasolina >= 0) {
            let timer = setInterval(() => {
                this.gasolina -= 1;
                if(this.gasolina <= 0) {
                clearInterval(timer);
                }
            console.log(this.gasolina);
            }, 1000);
        }
    } 
    abastecerCarro() {
        if(this.gasolina <= 100) {
            let timer1 = setInterval(() => {
                this.gasolina += 5;
                if(this.gasolina >= 100) {
                    clearInterval(timer1);
                }
                console.log(this.gasolina);
            },1000);
        }
    }
    dirigir(km) {
        let litrosConsumidos = km / this.consumo;

        this.gasolina -= litrosConsumidos;
    }
    abastecer(litros) {
        this.gasolina += litros;
    };
}      
        

    


meuCarro = new Carro("Fiar UNO", "Preto", 80, 15);

meuCarro.consumoDeGasolina();
meuCarro.abastecerCarro();

// metodo do exercicio 
/*
console.log(meuCarro);

meuCarro.abastecer(20);
console.log(meuCarro.gasolina);

meuCarro.dirigir(1000);

console.log(meuCarro.gasolina);
*/



