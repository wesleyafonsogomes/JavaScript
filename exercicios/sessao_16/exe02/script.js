let btn = document.querySelector("button");
// criei a variavel para o btn

let p = document.querySelector("p");

let contador = 0;

// criei a variavel para contar 

function msg1() {
    contador++;
    p.textContent = `Você clicou ${contador} vezes`;
}

// criei a function para contar os cliques no button e att a msg no p

btn.addEventListener("click", msg1);

// exercicio 2

let paragrafo = document.createElement("p");
let divV = document.querySelector("div");

paragrafo.textContent = "Clique para mudar de cor";

divV.appendChild(paragrafo);

// gera cor aleatoria RGB

function corAleatoria() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function mudarCor() {
    divV.style.backgroundColor = corAleatoria();
}

// add evento 

divV.addEventListener("click", mudarCor);










