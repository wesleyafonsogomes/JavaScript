let novoElemento = document.createElement("p");
let text = document.createTextNode("Algum Texto");

novoElemento.appendChild(text);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendChild(novoElemento);





