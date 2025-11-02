// function que recebe como parametro um array de numeros 

// a function deve retornar o maior numero presente no array

function findMaxNumber(arr) {
    return Math.max(...arr);
}

let numeros = [54,12,53,100];

console.log(findMaxNumber(numeros));

// os ... espalha os valores no array, fazendo a function ver todos os valores 




