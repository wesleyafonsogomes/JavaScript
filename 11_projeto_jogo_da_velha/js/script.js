// definir variáveis 

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas 

let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes 
for(let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa 
    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);


        // verifica se ja tem X ou O
        if(this.childNodes.length == 0) {
            // add elemento dentro da caixa
        let cloneEl = el.cloneNode(true);
        this.appendChild(cloneEl);

            // computar a jogada 
            if(player1 == player2) {
            player1++;

                if(secondPlayer == "ai-player") {
                    // function p executar a jogada 
                    computerPlay();
                    player2++;


                }

            } else {
            player2++;
            }

            // checa quem venceu 
            checkWinCondition();
        }

    });
}

// evento para saber se é 2p ou IA
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 500);

    });
}

// ver quem vai jogar
function checkEl(player1, player2,) {
    if(player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}

// ve quem ganhou 

function checkWinCondition() {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        //pegar as classes x ou o
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b1Child == "o" && b2Child == "o" && b3Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }

        if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        //pegar as classes x ou o
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b4Child == "o" && b5Child == "o" && b6Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }
        if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        //pegar as classes x ou o
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b7Child == "o" && b8Child == "o" && b9Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }
    // vertical 
        if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        //pegar as classes x ou o
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "x" && b4Child == "x" && b7Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b1Child == "o" && b4Child == "o" && b7Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }
        if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        //pegar as classes x ou o
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == "x" && b5Child == "x" && b8Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b2Child == "o" && b5Child == "o" && b8Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }
        if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        //pegar as classes x ou o
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "x" && b6Child == "x" && b9Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b3Child == "o" && b6Child == "o" && b9Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }
    // diagonal 
        if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        //pegar as classes x ou o
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "x" && b5Child == "x" && b9Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b1Child == "o" && b5Child == "o" && b9Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }
        if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        //pegar as classes x ou o
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == "x" && b5Child == "x" && b7Child == "x") {
            // x venceu 
            declareWinner("x");
        } else if(b3Child == "o" && b5Child == "o" && b7Child == "o") {
            // o venceu
            declareWinner("o");
        }

    }

    // deu velha 
    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    if(counter == 9) {
        declareWinner("deu velha");
    }
}

// limpa o jogo, declara o vencedor e att o placar

function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = "";

    if(winner == "x") {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if(winner == "o"){
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha";
    }

    //exibe a msg na tela
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // esconde msg 
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000);

    // zerar as jogadas
    player1 = 0;
    player2 = 0;

    // remove x e o
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// executar a logica da jkogada ca CPU

function computerPlay() {

    
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

        // so preenche se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                let cloneO = o.cloneNode(true);
                boxes[i].appendChild(cloneO);
                counter++;
                break;

                // checagem de quantas estão preenchidas

            } else {
                filled++;
        }
    }
        // se não jogou e ainda tem espaçp, tenta de novo
        
    }
    if(counter == 0 && filled < 9) {
            computerPlay();

    }

}