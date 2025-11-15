let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function mensagem() {
    console.log("Clicou em mim!")
}

btn1.addEventListener("click", mensagem);

btn2.addEventListener("click", function() {
    btn1.removeEventListener("click", mensagem);
});