let pessoa = {
    "nome": "Wesley",
    "idade": 29,
    "profissao": "Programador",
    "hobbies": ["Video Games", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

// agora voltando para JSON

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(pessoa.hobbies[0]);
// olhar separadamente no JSON