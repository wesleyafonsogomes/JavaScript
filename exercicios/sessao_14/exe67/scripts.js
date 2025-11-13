// listar erros usando object 

function baixarArquivo(tamanho) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(tamanho <= 100) {
               resolve("Dowload completo"); 
            } else {
                reject("Arquivo muito grande");
            }
        }, 3000);
    })
}

console.log("Baixando arquivo de 50mb");

baixarArquivo(50)
.then(mensagem => {
    console.log(mensagem);
})
.catch(erro => {
    console.log(erro);
})

console.log("Baixando arquivo de 200mb");

baixarArquivo(200)
.then(mensagem => {
    console.log(mensagem);
})
.catch(erro => {
    console.log(erro);
})