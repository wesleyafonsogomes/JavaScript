let botao = document.querySelector("#botao");
let barra = document.querySelector("#barra");
let mensagem = document.querySelector("#mensagem");

let progresso = 0;

function iniciarCarregamento() {
    progresso = 0;
    barra.style.width = "0%";
    mensagem.textContent = " ";

    intervalo = setInterval(function() {
        progresso += 2;
        barra.style.width = progresso + "%";

        if(progresso >= 100) {
            clearInterval(intervalo);
            mensagem.textContent = "Carregamento completo!"
        }
    }, 50);
}

function pararCarregamento() {
    clearInterval(intervalo);
        progresso = 0;
        barra.style.width = "0";
    }

botao.addEventListener("mousedown", iniciarCarregamento);
botao.addEventListener("mouseup", pararCarregamento);




