const pessoa = {
    maos: 2,
}

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty("maos"));

// não tem, mais consegue verificar no seu prototype que é o pessoa

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);

// ferifiquei se o pessoa é prototype od pessoa nova



