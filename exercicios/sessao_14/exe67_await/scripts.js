// exercício do café 

async function fazerCafe() {
    try {
        const mensagem = await prepararCafe();
        console.log(mensagem + "Bom apetite!");
    } catch(erro) {
        console.log("Erro:", erro);
    }
}

fazerCafe();

function prepararCafe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("☕ Café pronto!");
        }, 2000);
    });
}
