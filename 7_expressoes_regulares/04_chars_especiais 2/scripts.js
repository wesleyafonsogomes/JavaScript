// verificando se é um ANO;

const ano = /\d\d\d\d/;

console.log(ano.test("2019"));
console.log(ano.test("asd"));
console.log(ano.test("05"));
console.log(ano.test("asd1"));

// delimitando so 2 numeros 

const dia = /\d\d/;

console.log(ano.test("2019") && "2019".length == 2);
console.log(ano.test("asd"));
console.log(ano.test("05") && "05".length == 2);
console.log(ano.test("asd1"));

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("asdd"));
console.log(palavraTresLetras.test("as"));

// palavras que tem pelo menos 3 letras
