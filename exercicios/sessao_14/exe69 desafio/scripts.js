

// DESAFIO BONUS SISTEMA DE DELIVERY

// prepara comida 2s - entregar depois 3s

function prepararComida(prato) {
    return new Promise((resolve, reject) => {
        console.log(`Preparando ${prato}`);
        setTimeout(() => {
            resolve(`${prato} pronta!`)
        }, 2000);
    })
}

function entregarComida(prato) {
    return new Promise((resolve, reject) => {
        console.log(`Saindo para entrega de ${prato}`);
        setTimeout(() => {
            resolve(`${prato} entregue!`)
        }, 3000);
    })
}

async function fazerPedido(prato) {
    try {
        const msg1 = await prepararComida(prato);
        console.log(msg1);
        const msg2 = await entregarComida(prato);
        console.log(msg2);
    } catch(erro) {
        console.log("Erro:", erro);
    }
}


// testes 

fazerPedido("Pizza");
