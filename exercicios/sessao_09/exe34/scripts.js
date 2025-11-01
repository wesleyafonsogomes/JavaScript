// criar array a partir de uma frase
// imprimir cada palavra do array por um for

let produtos = "Banana,Amora,Abacaxi,Maça,Limão";

let arrProdutos = produtos.split(',');

// fazendo com o for

for(i = 0; i < arrProdutos.length; i++) {
    console.log(arrProdutos[i]);
}

// fazendo com o forEach

arrProdutos.forEach(arrProduto => {
    console.log('Produto = ' + arrProduto);
});




