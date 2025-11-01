let produtos = ["Copos", "Pratos", "Mesa", "Cadeiras", "Talheres"];

let novosProdutos = ["Jeladeira", "Fogão"];

let velhosProdutos = ["Arroz"];

// numero de elementos: .lenght

function verificarElementos(ele) {
    if(ele.length < 5) {
        console.log('Poucos elementos');
    } else {
        console.log('Muitos elementos');
    }
}

verificarElementos(produtos);
verificarElementos(novosProdutos);
verificarElementos(velhosProdutos);
