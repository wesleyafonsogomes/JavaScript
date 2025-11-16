let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function cephoenix(e) {
    console.log("Essa poha é um clique: " + JSON.stringify(e));
}

function cepMouseOver(evento) {
    console.log("Essa poha é um evento de Mouse Over: " + JSON.stringify(evento));
}

btn1.addEventListener("click", cephoenix);
btn1.addEventListener("mouseover", cepMouseOver);

btn2.addEventListener("click", function(event) {
    btn1.removeEventListener("click", event);
});

