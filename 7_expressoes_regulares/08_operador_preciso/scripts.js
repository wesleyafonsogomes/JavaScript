const cep = /\d{5}-\d{3}/;

console.log(cep.test("88100-500"));

console.log(cep.test("asdasd"));
console.log(cep.test("3890-00"));

// ddd + telefone 

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(48)9999-9999"));