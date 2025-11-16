let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function(e) {
    console.log("Apertou o botão: " + JSON.stringify(e));
});


btn1.addEventListener("mouseup", function(e) {
    console.log("Soltou o botão" + JSON.stringify(e));
});

// dable click

btn2.addEventListener("dblclick", function() {
    console.log("Clicou duas vezes");
})

// botão direito 

btn2.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // para mudar o event
    console.log("Botão direito");
})