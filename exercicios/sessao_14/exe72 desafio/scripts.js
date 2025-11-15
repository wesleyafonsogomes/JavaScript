// Sistema de academias 

function fazerCheckIn(nome) {
    return new Promise((resolve, reject) => {
        console.log(`Fazendo Check IN de ${nome}`)
        setTimeout(() => {
            if(nome) {
                resolve(`Check In de ${nome} aprovado!`)
            } else {
                reject("Nome não informado");
            }
        }, 2000);
    })
}

function liberandoAcesso(nome) {
    return new Promise((resolve, reject) => {
        console.log(`Liberando acesso para ${nome}`);
        setTimeout(() => {
            resolve(`Acesso liberado! Bom treino ${nome}`);
        }, 3000);
    })
}

async function entrarNaAcademia(nome) {
    try {
        const msg = await fazerCheckIn(nome);
        console.log(msg);
        const msg2 = await liberandoAcesso(nome);
        console.log(msg2);
    } catch(erro) {
        console.log("Erro:", erro);
    }   
}

console.log("Texte 1: com nome");
entrarNaAcademia("Wesley");

setTimeout(() => {
    console.log("Teste 2: Sem nome");
    entrarNaAcademia("");
}, 6000)