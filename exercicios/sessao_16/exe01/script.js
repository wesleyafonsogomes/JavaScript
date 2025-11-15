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


