// Criar um sistema de Hotel - Orientação a objetos 

class Hotel {
    constructor(nome, capacidadeTotal) {
        this.nome = nome;
        this.capacidadeTotal = capacidadeTotal;
        this.capacidadeAtual = 0;
        this.quartos = [];
    }
    adicionarQuarto(numero, tipo, preco, ocupado) {
        let novoQuarto = {
            numero: numero,
            tipo: tipo,
            preco: preco,
            ocupado: ocupado
        }
        if(this.capacidadeAtual < this.capacidadeTotal) {
            this.quartos.push(novoQuarto);
            this.capacidadeAtual += 1;
        } else {
            console.log("Não tem quartos disponíveis!");
        }       
    }
    removerQuarto(numero) {
        let encontrou = false;

        for(let i = 0; i < this.quartos.length; i++) {
            if(this.quartos[i].numero === numero) {
                this.quartos.splice(i, 1);
                this.capacidadeAtual -= 1;

                encontrou = true;
            }
        }
        if(!encontrou) {
            console.log(`Quarto número: ${numero} não encontrado!`);
        }
    }
    buscarPorTipo(tipo) {
        let encontrou = false;
        let quartosPorTipo = [];
        for(let i = 0; i < this.quartos.length; i++) {
            if(this.quartos[i].tipo === tipo) {
                quartosPorTipo.push(this.quartos[i]);

                console.log(quartosPorTipo);
                encontrou = true;
            }
        }
        if(!encontrou) {
            console.log("Quarto não encontrado!");
        }
    }
    fazerCheckIn(numero) {
        let encontrou = false;
        
        for(let i = 0; i < this.quartos.length; i++) {
            if(this.quartos[i].numero === numero && this.quartos[i].ocupado === false) {
                this.quartos[i].ocupado = true;

                encontrou = true;
            }
        }
        if(!encontrou) {
            console.log("Quarto ocupado/não encontrado!");
        }
    }
    fazerCheckOut(numero) {
        let encontrou = false;
        
        for(let i = 0; i < this.quartos.length; i++) {
            if(this.quartos[i].numero === numero && this.quartos[i].ocupado === true) {
                this.quartos[i].ocupado = false;

                encontrou = true;
            }
        }
        if(!encontrou) {
            console.log("Quarto ocupado/não encontrado!");
        }
    }
    atualizarPreco(numero, novoPreco) {
        let encontrou = false;
        for(let i = 0; i < this.quartos.length; i++) {
            if(this.quartos[i].numero === numero) {
                this.quartos[i].preco = novoPreco;
                console.log("Preço atualizado!");

                encontrou = true 
            }
        }
        if(!encontrou) {
            console.log("Quarto não encontrado!");
        }
    }
    mostrarQuartos() {
        console.log(`Nome do Hotel: ${this.nome} | Capacidade: ${this.capacidadeAtual}/${this.capacidadeTotal}`);
        for(let i = 0; i < this.quartos.length; i++) {
            console.log(`Número: ${this.quartos[i].numero} | Tipo: ${this.quartos[i].tipo} | Preço: ${this.quartos[i].preco} | Ocupado: ${this.quartos[i].ocupado}`);
        }
    }
    quartosDisponiveis() {
        let quartosDisponiveis = [];
        for(let i = 0; i < this.quartos.length; i++) {
            if(this.quartos[i].ocupado === false) {
                quartosDisponiveis.push(this.quartos[i]);
            }
        }
        if(quartosDisponiveis.length > 0) {
            console.log(quartosDisponiveis);
        } else {
            console.log("Nenhum quarto disponível");
        }
    }
    quartosOcupados() {
        let quartosOcupados = [];
        for(let i = 0; i < this.quartos.length; i++) {
            if(this.quartos[i].ocupado === true) {
                quartosOcupados.push(this.quartos[i]);
            }
        }
        if(quartosOcupados) {
            console.log(quartosOcupados);
        } else {
            return null
        }
    }
    receitaTotal() {
        let precos = [];
        let precoTotal = 0;
         for(let i = 0; i < this.quartos.length; i++) {
            precos.push(this.quartos[i].preco);

            precoTotal += this.quartos[i].preco
        }
        console.log("Preço total: " + precoTotal);
    }
}

let meuHotel = new Hotel("Hotel Paradise", 5);

meuHotel.adicionarQuarto(101, "Standard", 150, false);
meuHotel.adicionarQuarto(102, "Luxo", 300, false);
meuHotel.adicionarQuarto(103, "Standard", 150, false);
meuHotel.adicionarQuarto(104, "Suíte", 500, false);
meuHotel.adicionarQuarto(105, "Luxo", 300, false);
meuHotel.adicionarQuarto(106, "Standard", 150, false);

// remover 

meuHotel.removerQuarto(103);

// buscar por tipo

meuHotel.buscarPorTipo("Standard");
meuHotel.buscarPorTipo("Penthouse");

// fazer check in (numero)

meuHotel.fazerCheckIn(101);
meuHotel.fazerCheckIn(104);
meuHotel.fazerCheckIn(101);

// fazer check out

meuHotel.fazerCheckOut(101);
meuHotel.fazerCheckOut(999);

// att preço

meuHotel.atualizarPreco(102, 350);

// mostrar

meuHotel.mostrarQuartos();

// quartos disponiveis/ocupados

meuHotel.quartosDisponiveis();
meuHotel.quartosOcupados();

// preço total

meuHotel.receitaTotal();
