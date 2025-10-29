// imprimir apenas os numeros pares no loop

let pares = function numerosPares() {
    for(let x = 50; x >= 0; x--) {
        if(x % 2 == 0) {
            console.log(x);
        } 
    }
}

pares();


// resolução

function imprimirPar(num) {
    for(let i = num; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

imprimirPar(10);