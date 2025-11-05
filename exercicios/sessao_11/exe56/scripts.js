// e-commerce;

class Carrinho {
    constructor() {
        this.itens = [];
        this.quantidadeTotal = 0;
        this.valorTotal = 0;
    }
    addProduto(id, nome, valorUnico, quantidadeUnica) {
        let novoProduto = {
            id: id,
            nome: nome,
            valorUnico: valorUnico,
            quantidadeUnica: quantidadeUnica
        };
        this.itens.push(novoProduto);
        this.quantidadeTotal += quantidadeUnica;
        this.valorTotal += (valorUnico*quantidadeUnica);
        console.log("Produto adicionado!");
    }
    removerProduto(nome) {
        let encontrou = false;
        for(let i = 0; i < this.itens.length; i++) {
            if(this.itens[i].nome === nome) {
                // guarda o item antes 
                const itemPararemover = this.itens[i];
                // att os totais
                this.valorTotal -= (itemPararemover.valorUnico*itemPararemover.quantidadeUnica)
                // remove com splice
                this.itens.splice(i,1);
                this.quantidadeTotal -= itemPararemover.quantidadeUnica;

                encontrou = true;
                console.log(`O item ${itemPararemover.nome} foi removido!`);
                break;
            }
        }
        if(!encontrou) {
            console.log("Produto não encontrado!");
        }
    }
}

// teste 

let meuCarrinho = new Carrinho();
meuCarrinho.addProduto(1, "Camisa", 80, 1);
meuCarrinho.addProduto(2, "Perfume", 120, 2);

console.log(meuCarrinho);

meuCarrinho.removerProduto("Perfume");