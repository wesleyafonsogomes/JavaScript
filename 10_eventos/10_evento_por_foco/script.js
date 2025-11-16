let input = document.querySelector("input");

input.addEventListener("focus", function() {
    console.log("Entrou no input");
});

input.addEventListener("blur", function() {
    console.log("Saiu do input");
});
