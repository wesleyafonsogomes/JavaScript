let btn = document.querySelector("button");

btn.addEventListener("click", msg);

function msg(event) {
    console.log("Uma mensagem!" + JSON.stringify(event));
}