// criando o problema

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector("a");

function mensagem(e) {
    console.log("Clicou no button");
    e.stopPropagation();
}

btn1.addEventListener("click", mensagem);

btn2.addEventListener("click", function(event) {
    btn1.removeEventListener("click", event);
});

p.addEventListener("click", function() {
    console.log("Clicou no parágrafo");
})

// bloquear o click do "a" e criar outro event

a.addEventListener("click", function(e) {
    e.preventDefault();

    console.log("Não vai mudar de link!");
})