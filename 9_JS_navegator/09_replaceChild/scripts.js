let novoElemento = document.createElement("p");
let text = document.createTextNode("Algum Texto");

novoElemento.appendChild(text);

let heading = document.querySelector("titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);





