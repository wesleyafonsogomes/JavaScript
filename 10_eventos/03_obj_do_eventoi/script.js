let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function mensagem(e) {
    console.log(e);
}

btn1.addEventListener("click", mensagem);

btn2.addEventListener("click", function(event) {
    btn1.removeEventListener("click", event);
});