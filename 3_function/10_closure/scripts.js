function lembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));

// da para mudar e virar casos independentes

let soma2 = lembrarSoma(5);

console.log(soma2(5));

// exemplo de um contador 

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}
let meuContador = contador(1);

meuContador();
meuContador();
meuContador();
meuContador();
meuContador();
