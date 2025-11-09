const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 2?"));

// regex para verificar se uma frase se tem numeros