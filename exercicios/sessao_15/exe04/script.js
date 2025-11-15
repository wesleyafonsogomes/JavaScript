// criar o elemento

const titulo = document.createElement("h1");

// adicionar texto (jeito simples)

titulo.textContent = "Título Criado por JS";

// estilizar

titulo.style.color = "Blue";
titulo.style.fontSize = "40px";
titulo.style.textAlign = "center";

// selecionar aonde vai adicionar

const container = document.querySelector("#container");

// adicionar DENTRO do container

container.appendChild(titulo);


// criando o p

const paragrafo = document.createElement("p");

paragrafo.textContent = "Este parágrafo foi criado dicanicamente"

paragrafo.style.backgroundColor = "lightgray";
paragrafo.style.padding = "20px";
paragrafo.style.border = "2px solid black";

container.appendChild(paragrafo);




