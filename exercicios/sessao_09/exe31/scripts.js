let nuns = [2,5,2,4,8,7,9];
let nuns2 = [5,6];

// function se tem mais de 5 elementos

function verificador(arr) {
    if(arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificador(nuns);
verificador(nuns2);

// function se tem o numero 2

function numeroDois(num) {
    if(num.includes(2)) {
        console.log("Número presente")
    } else {
        console.log("Não está presente");
    }
}

numeroDois(nuns);
numeroDois(nuns2);









