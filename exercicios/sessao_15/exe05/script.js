// galeria de cards 

// div = pai
// h2 = filho 

let card = document.createElement("div");
let titulo = document.createElement("h2");
let preco = document.createElement("p");

titulo.textContent = "Produto 1";
preco.textContent = "R$ 100";

let galeria = document.querySelector("#galeria");

card.style.width = "200px";
card.style.padding = "20px";
card.style.backgroundColor = "lightblue";
card.style.border = "2px solid blue";

card.appendChild(titulo);
card.appendChild(preco);
galeria.appendChild(card);

// card 2

let card2 = document.createElement("div");
let titulo2 = document.createElement("h2");
let preco2 = document.createElement("p");

titulo2.textContent = "Produto 2";
preco2.textContent = "R$ 200";

card2.style.width = "200px";
card2.style.padding = "20px";
card2.style.backgroundColor = "lightgreen";
card2.style.border = "2px solid green";

card2.appendChild(titulo2);
card2.appendChild(preco2);
galeria.appendChild(card2);

// card 3

let card3 = document.createElement("div");
let titulo3 = document.createElement("h2");
let preco3 = document.createElement("p");

titulo3.textContent = "Produto 3";
preco3.textContent = "R$ 300";

card3.style.width = "200px";
card3.style.padding = "20px";
card3.style.backgroundColor = "lightcoral";
card3.style.border = "2px solid red";

card3.appendChild(titulo3);
card3.appendChild(preco3);
galeria.appendChild(card3);


