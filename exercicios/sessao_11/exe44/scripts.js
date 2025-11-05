// constructor (funtion e new)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
}

// adicionar metodos no prototype 

Produto.prototype.vender = function(quantidade) {
    if(quantidade > 0 && quantidade <= this.estoque) {
        this.estoque -= quantidade;
        console.log(`Produtos restantes =  ${this.estoque}`);
    } else {
        console.log('Quantidade invalida');
    }
}

Produto.prototype.repor = function(quantidade) {
    if(quantidade > 0) {
        this.estoque += quantidade;
        console.log(`Reposto, estoque atual = ${this.estoque}`);
    }
}

Produto.prototype.mostrarInfo = function() {
    console.log(`Produto: ${this.nome} | ${this.preco} | Estoque = ${this.estoque}`);
}

let bananas = new Produto("Banana", 4.99, 10);

console.log(bananas);


// tem que colocar o objetito antes da function
bananas.vender(5);

console.log(bananas);

bananas.repor(3);

console.log(bananas);

bananas.mostrarInfo(bananas);






