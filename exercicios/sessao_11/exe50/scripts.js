// carrinho de compras de um e-commerce
// metodos de adicionar e remover itens 

class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
    addItem(item) {
        let contador = 0;

        // verifica se o item ja existe no carrinho, percorre todo o carrinho verificando
        for(let i = 0; i < this.itens.lenght; i++) {
            // se existe (if)
            if(this.itens[i].id === item.id) {
                // aumenta a quantidade (+=)
                this.itens[i].qtd += item.qtd;
                // se existir o loop para
                contador = 1;
            }
            // se não existe adicionar no array (no item normal)
            if(contador == 0) {
                this.itens.push(item);
            }
            // atualiza totais 
            this.qtd += item.qtd
            this.valorTotal += item.preco * item.qtd;
        }  
    }
    mostrarCarrinho() {
        console.log(`Total de itens: ${this.qtd}`);
        console.log(`Valor Total: ${this.valorTotal}`);
        console.log(`Itens: ${this.itens}`);
    }
}

// criando carrinho 

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id:2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

// carrinho inicial 
carrinho.mostrarCarrinho();

// adicionando existentes 

carrinho.addItem({
    id: 1,
    nome: "Camisa",
    qtd: 1, 
    preco: 20
});

carrinho.mostrarCarrinho();




