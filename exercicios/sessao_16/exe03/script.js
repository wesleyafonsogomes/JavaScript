// selecione o elemento 

let lampada = document.querySelector("#lampada");
let botao = document.querySelector("#botao");

// variavel de controle 

let ligada = false;
// function alternar lampada
function alternarLampada() {
    if(ligada === false) {
        lampada.style.backgroundColor = "yellow";
        botao.textContent = "Desligar"
        paragrafo.textContent = `Status: Ligada`;
        ligada = true;
    } else {
        lampada.style.backgroundColor = "gray";
        botao.textContent = "Ligar";
        paragrafo.textContent = `Status: Desligada`;
        ligada = false;
    }
}

// adicionar evento 

botao.addEventListener("click", alternarLampada);

// extra add paragrafo 

let paragrafo = document.createElement("p");
paragrafo.textContent = "Status:";
let body = document.querySelector("body");

body.appendChild(paragrafo);






