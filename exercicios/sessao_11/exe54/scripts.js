// e-commerce

class Carrinho {
    constructor() {
        this.produtos = [];
        this.qTotal = 0;
        this.vTotal = 0;
    }
    addProduto(item, qUnidade, vUnidade) {
        let novoProduto = {
            item: item,
            qUnidade: qUnidade,
            vUnidade: vUnidade
        };
        this.produtos.push(novoProduto);
        this.qTotal += qUnidade;
        this.vTotal += qUnidade*vUnidade;
    }
    removerProduto(item) {
        let encontrado = false;
        for(let i = 0; i < this.produtos.length; i++) {
            if(this.produtos[i].item === item) {
                // att os totais antes
                this.qTotal -= this.produtos[i].qUnidade;
                this.vTotal -= (this.produtos[i].vUnidade*this.produtos[i].qUnidade);
                // remove o produto
                this.produtos.slice(i, 1);
                // confirme e imprima 
                console.log("Produto removido!");
                encontrado = true;
                break;
            }
        }
        if(!encontrado) {
            console.lop("Produto não encontrado!");
        }
    }
}

let meuCarrinho = new Carrinho();
meuCarrinho.addProduto("Óculos", 1, 100);
console.log(meuCarrinho);

meuCarrinho.removerProduto("Óculos");
