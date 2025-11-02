// lista de compras 

let listaDeCompras = ["arroz", "feijão", "macarrão"];

// 1 - função para adicionar 
function adicionarItem(item) {
    listaDeCompras.push(item);
}

// 2 - função para remover
function removerItem(item) {
    let index = listaDeCompras.indexOf(item);
    if(index !== -1) {
        listaDeCompras.splice(index, 1);
    }
}

// 3 - função que exibe todos os itens da lista no console 
function mostrarLista(lista) {
    for(let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
mostrarLista(listaDeCompras);

// 4 - função que verifica se um item existe
function verificarItem(item) {
    return listaDeCompras.includes(item);
}

console.log(verificarItem("arroz"));

// 5 - função para retornar quantos itens tem na lista 
function contarItens() {
    return listaDeCompras.length;
}





