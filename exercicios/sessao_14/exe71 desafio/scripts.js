// sistema de streaming desafio 

function carregarFilme(titulo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(titulo) {
                resolve(`Filme ${titulo} carregando!`);
            } else {
                reject("Selecione um filme");
            }
        }, 2000);
    })
}

async function reproduzirFilme(titulo) {
    try {
        const msg = await carregarFilme(titulo);
        console.log(msg);
        console.log(`O filme ${titulo} está pronto para exibição!`);
    } catch(erro) {
        console.log("Erro:", erro);
    }
}

console.log("Filme válido");
reproduzirFilme("Vingadores");

setTimeout(() => {
    console.log("Teste 2: Sem filme");
    reproduzirFilme("");
}, 3000)