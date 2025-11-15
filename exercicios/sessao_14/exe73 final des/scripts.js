// pizzaria completa;

function verificarIngredientes(sabor) {
    return new Promise((resolve, reject) => {
        console.log(`Verificando ingredientes para Pizza de ${sabor}`);
        setTimeout(() => {
            const disponiveis = ["calabresa", "mussarela", "portuguesa"];
            if(disponiveis.includes(sabor.toLowerCase())) {
                resolve(`Ingredientes de ${sabor} disponíveis`)
            } else {
                reject("Não temos ingredientes para essa Pizza");
            }
        }, 2000);
    })
}

function prepararPizza(sabor) {
    return new Promise((resolve, reject) => {
        console.log(`Preparando pizza de ${sabor}`);
        setTimeout(() => {
            resolve(`Pizza de ${sabor} preparada!`);
        }, 3000)
    })
}

function assarPizza(sabor) {
    return new Promise((resolve, reject) => {
        console.log(`Assando pizza de ${sabor}`);
        setTimeout(() => {
            resolve(`Pizza de ${sabor} está pronta!`);
        }, 4000)
    })
}

async function fazerPedido(sabor) {
    try {
    const verifica = await verificarIngredientes(sabor);
    console.log(verifica);
    const prepara = await prepararPizza(sabor);
    console.log(prepara); 
    const assa = await assarPizza(sabor);
    console.log(assa);
    } catch(erro) {
        console.log("Erro:", erro);
    }
}

console.log(`Pedido 1: Calabresa`);
fazerPedido("Calabresa");

setTimeout(() => {
    console.log(`Pedido 2: Bacon (não disponível)`);
    fazerPedido("Bacon");
}, 10000);
