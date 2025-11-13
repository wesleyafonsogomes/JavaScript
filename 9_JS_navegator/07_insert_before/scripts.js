// inserir elemento antes do H1

let novoElemento = document.createElement("p");

let elementoAlvo = document.querySelector("#titulo-principal");

let elementoPai = document.querySelector("#container-principal");


elementoPai.insertBefore(novoElemento, elementoAlvo);



