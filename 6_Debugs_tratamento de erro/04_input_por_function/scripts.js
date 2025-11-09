// tratamento do input por entrada de dados
// olha se é numero ou não 

function checarNumero(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        alert("Por favor, apenas números");
    } else {
        return number;
    }
}


let number = prompt("Digite um número");

checarNumero(number);