// Loja online(2 etapas);

function veficarEstoque(produto, quantidade) {
    return new Promise((resolve, reject) => {
        console.log(`Verificando estoque de ${produto}`);
        setTimeout(() => {
            if(quantidade <= 10) {
                resolve(`${produto} disponível!`)
            } else {
                reject(`Estoque insifuciende de ${produto}`);
            }
        }, 2000)
    })
}

function processaPagamento(produto, valor) {
    return new Promise((resolve, reject) => {
        console.log(`Processando pagamento de ${produto}`);
        setTimeout(() => {
            if(valor >= 10) {
                resolve(`Pagamento de R$${valor} aprovado!`);
            } else {
                reject("Valor mínumo não atingido!");
            }
        }, 3000);
    })
}

async function realizarCompra(produto, quantidade, valor) {
    try {
        const msg = await veficarEstoque(produto, quantidade);
    console.log(msg);
    const msg1 = await processaPagamento(produto, valor);
    console.log(msg1);
    } catch(erro) {
        console.log("Erro na compra:", erro);
    }
}

console.log("Compra 1: Tudo certo");
realizarCompra("Notebook", 5, 3000);


setTimeout(() => {
    console.log("Compra 2: Estoque insificiente");
    realizarCompra("Mouse", 20, 50);
}, 6000);

setTimeout(() => {
    console.log("Compra 3: Valor insificiente!");
    realizarCompra("Teclado", 2, 5);
}, 12000);
