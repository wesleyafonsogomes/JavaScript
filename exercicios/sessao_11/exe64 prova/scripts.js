// garagem de carros importados 

class Concessionaria {
    constructor(nome, capacidadeTotal) {
        this.nome = nome;
        this.capacidadeAtual = 0;
        this.carros = [];
        this.capacidadeTotal = capacidadeTotal;
    }
    adicionarCarro(id, marca, modelo, paisOrigem, preco, vendido) {
        let novoCarro = {
            id: id,
            marca: marca,
            modelo: modelo,
            paisOrigem: paisOrigem,
            preco: preco,
            vendido: vendido
        };
        if(this.capacidadeAtual < this.capacidadeTotal) {
            this.carros.push(novoCarro);
            this.capacidadeAtual += 1;
            return;
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

                encontrou = true;
                break;
            }
        }
        if(!encontrou) {
            console.log("Carro não encontrado")
        }
    }
    buscarPorPais(pais) {
        let carrosPorPais = [];
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].paisOrigem === pais) {
                carrosPorPais.push(this.carros[i]);
            }
        }
        if(carrosPorPais.length > 0) {
            console.log(carrosPorPais);
            return carrosPorPais;
        } else {
            return null;
        }
    }
    venderCarro(id) {
        let encontrou = false;
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id && this.carros[i].vendido === false) {
                this.carros[i].vendido = true;

                encontrou = true;
                console.log(`Carro ID:(${id}) vendido`);
                
            } else if(this.carros[i].id === id && this.carros[i].vendido === true) {
                console.log(`Carro ID:(${id}) JÁ FOI vendido`);

                encontrou = true 
                break;
            }
        }
        if(!encontrou) {
            console.log(`Carro ID:(${id}) NÃO encontrado`);
        } 
    }
    cancelarVenda(id) {
        let encontrou = false;
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id && this.carros[i].vendido === true) {
                this.carros[i].vendido = false;

                console.log(`Carro ID:(${id}) CANCELADO a venda`);
                encontrou = true;
                break;
            }
        }
        if(!encontrou) {
            console.log(`Carro ID:(${id}) NÃO encontrado`);
        }
    }
    atualizarPreco(id, novoPreco) {
        let encontrou = false;
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id) {
                this.carros[i].preco = novoPreco;

                console.log(`Carro ID:(${id}) preço ATUALIZADO`);
                encontrou = true;
                break;
            }
        }
        if(!encontrou) {
            console.log(`Carro ID:(${id}) NÃO encontrado`);
        }
    }
    mostrarEstoque() {
        console.log(`Concessionária: ${this.nome} | Capacidade: ${this.capacidadeAtual}/${this.capacidadeTotal}`);

        for(let i = 0; i < this.carros.length; i++) {
            console.log(`Marca: ${this.carros[i].marca} | Modelo: ${this.carros[i].modelo} | Preço: ${this.carros[i].preco} | Status: ${this.carros[i].vendido}`);
        }
    }
    carrosDisponiveis() {
        let carrosDisponiveis = [];
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].vendido === false) {
                carrosDisponiveis.push(this.carros[i]);
            }
        }
        if(carrosDisponiveis.length > 0) {
            console.log(carrosDisponiveis);
            return carrosDisponiveis;
        } else {
            return null;
        }
    }
    carrosVendidos() {
        let carrosVendidos = [];
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].vendido === true) {
                carrosVendidos.push(this.carros[i]);
            }
        }
        if(carrosVendidos.length > 0) {
            console.log(carrosVendidos);
            return carrosVendidos;
        } else {
            console.log(null);
            return null;
        }
    }
    carroMaisCaro() {
        const precos = this.carros.map(carro => carro.preco);
        // extrai todos os preços com map 
        const maiorPreco = Math.max(...precos);
        // encontrei o maior 
        const carroMaisCaro = this.carros.find(carro => carro.preco === maiorPreco);

        console.log(carroMaisCaro);
        return carroMaisCaro;
    }
    valorTotalEstoque() {
        let valorTotal = 0;

        this.carros.map(carro => {
            valorTotal += carro.preco; // soma 
        });
        console.log("Valor total: " + valorTotal);
        return valorTotal;
    }
    verificarVendido(id) {
        let encontrou = false;
        for(let i = 0; i < this.carros.length; i++) {
            if(this.carros[i].id === id && this.carros[i].vendido === true) {

                encontrou = true;
                return true;
            }
            if(this.carros[i].id === id && this.carros[i].vendido === false) {

                encontrou = true;
                return false;
            }
        }
        if(!encontrou) {
            return null;
        }
    }
}

let minhaConcessionaria = new Concessionaria("Importados Premium", 5);

// adicionando carros

minhaConcessionaria.adicionarCarro(1, "911 Carrera", "Porsche", "Alemanha", 800000, false);
minhaConcessionaria.adicionarCarro(2, "Model S", "Tesla", "EUA", 600000, false);
minhaConcessionaria.adicionarCarro(3, "488 GTB", "Ferrari", "Itália", 2500000, false);
minhaConcessionaria.adicionarCarro(4, "Continental GT", "Bentley", "Inglaterra", 1500000, false);
minhaConcessionaria.adicionarCarro(5, "AMG GT", "Mercedes", "Alemanha", 900000, false);



minhaConcessionaria.adicionarCarro(6, "R8", "Audi", "Alemanha", 1200000, false);

// remover carro 

minhaConcessionaria.removerCarro(4);


// buscar por País

minhaConcessionaria.buscarPorPais("Alemanha");
minhaConcessionaria.buscarPorPais("França");

// vender carro 

minhaConcessionaria.venderCarro(1);
minhaConcessionaria.venderCarro(1);
minhaConcessionaria.venderCarro(4);


// cancelar venda

minhaConcessionaria.cancelarVenda(1);
minhaConcessionaria.cancelarVenda(99);

// atualizar preço 

minhaConcessionaria.atualizarPreco(2, 650000);

minhaConcessionaria.mostrarEstoque();

// carros disponveis e vendidos 

minhaConcessionaria.carrosDisponiveis();
minhaConcessionaria.carrosVendidos();

// carro mais caro (olhei no GPT);

minhaConcessionaria.carroMaisCaro();

// valor total do estoque (olhei no gpt)

minhaConcessionaria.valorTotalEstoque();

// verificar vendido 

console.log("\nVerificando status:");
console.log("Carro 2:", minhaConcessionaria.verificarVendido(2));
console.log("Carro 3:", minhaConcessionaria.verificarVendido(3));
console.log("Carro 99:", minhaConcessionaria.verificarVendido(99));