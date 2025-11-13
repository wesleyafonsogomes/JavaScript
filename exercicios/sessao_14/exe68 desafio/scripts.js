// sistema de login DESAFIO

function verificarUsuario(nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nome === "admin") {
                resolve("Usuário Válido!")
            } else {
                reject("Usuário não encontrado!");
            }
        }, 2000);
    })
}



async function fazerLogin(nome) {
    try {
        const msg = await verificarUsuario(nome);
        console.log(msg + " Login realizado com sucesso");
    } catch(erro) {
        console.log("Erro:", erro);
    }
}

fazerLogin("admin");
fazerLogin("hacker");



// sistemaa de pagamento desafio

function processarPagamento(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(valor >= 10) {
                resolve("Pagamento aprovado!");
            } else {
                reject("Valor mínimo é R$10");
            }
        }, 3000);
    })
}



async function realizarCompra(valor) {
    try {
        const msg = await processarPagamento(valor);
    console.log(msg + "Compra realizada com sucesso!");
    } catch(erro) {
        console.log("Erro:", erro);
    }
}

console.log("Compra de R$50")
realizarCompra(50);

setTimeout(() => {
    console.log("Compra de R$5");
    realizarCompra(5);
}, 4000);
