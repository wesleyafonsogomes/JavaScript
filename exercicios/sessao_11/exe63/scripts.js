// garagem de carros 

class Garagem {
    constructor(nome, capacidadeTotal) {
        this.nome = nome;
        this.capacidadeTotal = capacidadeTotal;
        this.carros = [];
        this.capacidadeAtual = 0;
    }
    adicionarCarro(id, modelo, marca, ano, disponivel) {
        let novoCarro = {
            id: id,
            modelo: modelo,
            marca: marca,
            ano: ano,
            disponivel: disponivel 
        };
        if(this.capacidadeAtual < this.capacidadeTotal) {
            this.carros.push(novoCarro);
            this.capacidadeAtual += 1;
        } else {
            console.log("Garagem cheia!");
        }
    }
    removerCarro(id) {
        let encontrou = false;
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id) {
                this.carros.splice(i,1);
                this.capacidadeAtual -= 1;
                console.log("Carro removido!");
                encontrou = true;
                break;
            }
        }
        if(!encontrou) {
            console.log("Carro não encontrado");
        }
    }
    buscarPorMarca(marca) {
        const carrosEncontrados = this.carros.filter(carro => carro.marca === marca);
        if(carrosEncontrados.length > 0) {
            console.log(`\n Carros da marca ${marca}`);
            carrosEncontrados.forEach(carro => {
                console.log(`ID: ${carro.id} | ${carro.modelo} - ${carro.marca} - ${carro.ano}`);
            });
        } else {
            console.log(`Nenhum carro da marca ${marca}`);
        }
    }
    alugarCarro(id) {
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id && this.carros[i].disponivel === true) {
                this.carros[i].disponivel = false;
                console.log(`Carro ID: ${id} alugado`);
                return;
            } else {
                console.log(`Carro ID: ${id} ja está alugado`);
                return;
            } 
        }
        console.log(`Carro ID: ${id} não encontrdo`);
    }
    devolverCarro(id) {
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id && this.carros[i].disponivel === false) {
                this.carros[i].disponivel = true;
                console.log(`Carro ID: ${id} devolvido!`);
                return;
                 
            } else {
                console.log(`Carro ID: ${id} não está alugado`);
            }
        }
        console.log(`❌ Carro ID ${id} não encontrado!`);
    }
    
    atualizarAno(id, novoAno) {
     
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id) {
                this.carros[i].ano = novoAno;

                
                console.log("Ano atualizado!");
                return;
            }
        }
        console.log("Carro não encontrado!");
    }
    mostrarCarros() {
        console.log(`Nome: ${this.nome} | Vagas: ${this.capacidadeAtual} / ${this.capacidadeTotal}`);
        this.carros.forEach(carros => {
            console.log(`ID: ${carros.id} | Modelo: ${carros.modelo} Marca: ${carros.marca} Ano: ${carros.ano} Disponível: ${carros.disponivel} `);
        })
    }
    carrosDisponiveis() {
        let carroDisponivel = [];
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].disponivel === true) {
                carroDisponivel.push(this.carros[i]);
            } 
        }
        if(carroDisponivel.length > 0 ) {
            console.log(`\n carros disponíveis: ${carroDisponivel.length}`);
            carro.devolverCarro.forEach(carro => {
                console.log(`ID: ${carro.id} | ${carro.modelo} - ${carro.marca}`)
            });
        } else {
            console.log("Não ha carros disponíveis")
        }
    }
    carrosAlugados() {
        let carroindisponivel = [];
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].disponivel === false) {
                carroindisponivel.push(this.carros[i]);
            }
        }
        if(carroindisponivel.length > 0) {
            console.log(`\n📕 Carros alugados: ${carrosAlugados.length}`);
            carroindisponivel.forEach(carro => {
            console.log(`ID: ${carro.id} | ${carro.modelo} - ${carro.marca}`);
            });
        } else {
            console.log("Não ha carros alugados");
        }
    }
    carroMaisAntigo() {
        let carroMenorAno = Math.min(...this.carros.ano);

        console.log(carroMenorAno);
    }
    verificarDisponibilidade(id) {
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id && this.carros[i].disponivel === true) {
                return true;
            } else if(this.carros[i].id === id && this.carros[i].disponivel === false) {
                return false;
            } else {
                return null;
            }
        }
    }    
}

let minhaGaragem = new Garagem("Garagem Premium", 5);

minhaGaragem.adicionarCarro(1, "Civic", "Honda", 2020, true);
minhaGaragem.adicionarCarro(2, "Corolla", "Toyota", 2019, true);
minhaGaragem.adicionarCarro(3, "Gol", "Volkswagen", 2015, true);
minhaGaragem.adicionarCarro(4, "Onix", "Chevrolet", 2021, true);
minhaGaragem.adicionarCarro(5, "HB20", "Hyundai", 2018, true);

// teste 1 a mais 

minhaGaragem.adicionarCarro(6, "Fusca", "Volkswagen", 1970, true);

minhaGaragem.mostrarCarros();
// ok

minhaGaragem.buscarPorMarca("Volkswagen");
minhaGaragem.buscarPorMarca("Ferrari");

// não deu certo o map 

minhaGaragem.alugarCarro(1);
minhaGaragem.alugarCarro(3);
minhaGaragem.alugarCarro(1);

minhaGaragem.mostrarCarros();

minhaGaragem.carrosDisponiveis();
minhaGaragem.carrosAlugados();

minhaGaragem.atualizarAno(2, 2022);

minhaGaragem.carroMaisAntigo();

minhaGaragem.removerCarro(4);
minhaGaragem.mostrarCarros();

console.log("Carro 2:", minhaGaragem.verificarDisponibilidade(2));
console.log("Carro 3:", minhaGaragem.verificarDisponibilidade(3));
console.log("Carro 99:", minhaGaragem.verificarDisponibilidade(99));
