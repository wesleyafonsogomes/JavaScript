function saudacao(nome) {
    if(typeof nome != "string") {
        throw new Error("O parámetro nome precisa ser uma string!");
    } else {
        console.log(`Olá ${nome}.`)
    }
}

saudacao("Matheus");
saudacao(5);

console.log("teste");