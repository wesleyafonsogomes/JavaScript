const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));

console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// verificando se tem uma propriedade

console.log(pessoa.hasOwnProperty("maos"));

// pessoa é um obj do object 



