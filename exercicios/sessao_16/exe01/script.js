// contador 

let btn = document.querySelector("button");
let p = document.querySelector("p");

let contador = 0;

// criei as variaveis do botao e do p e do contador para usar na function e no evento

function msg1() {
    contador++;
    p.textContent = `Você clicou ${contador} vezes!`;
}


// criei a function que vai agir no evento

btn.addEventListener("click", msg1);

// coloquei o evento para click no botão 


