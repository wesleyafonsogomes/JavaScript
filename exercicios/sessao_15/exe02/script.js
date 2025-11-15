let titulos = document.querySelectorAll(".titulo");
let textos = document.querySelectorAll(".texto");

console.log(titulos);

// mudar para todos precisa de loot for

for(let i = 0; i < titulos.length; i++) {
    titulos[i].style.color = "red";
    titulos[i].style.fontSize = "30px";
}
for(let i = 0; i < textos.length; i++) {
    textos[i].style.backgroundColor = "yellow";
    textos[i].style.padding = "10px";
}