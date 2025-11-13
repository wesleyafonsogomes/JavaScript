// preparar café 

function prepararCafe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Café Pronto")
        },2000 );
    })
}

prepararCafe()
.then(mensagem => {
    console.log(mensagem);
})
.catch(erro => {
    console.log(erro);
})

console.log("Fazendo outras coisas enquantro espera")