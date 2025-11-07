// sistema de reservas de voo

class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }
    reservarAssento() {
        if(this.assentosDisponiveis > 0) {
            this.assentosDisponiveis -= 1;
            return this.assentosDisponiveis;
        } else {
            return "Não há assentos"
        }
    }
    consultarAssentosDisponiveis() {
        return "Assentos disponíveis: " + this.assentosDisponiveis;
    }
}

let vooParana = new Voo(1, "Belo Horizonte", "Paraná", 80);

vooParana.consultarAssentosDisponiveis();

console.log(vooParana.reservarAssento());
console.log(vooParana.consultarAssentosDisponiveis());