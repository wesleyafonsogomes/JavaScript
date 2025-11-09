const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

// . aceita tudo 

const dRegex = /\d/; // [0-9]

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

// \d aceita numeros 

const DRegex = /\D/; // [^0-9];

console.log(DRegex.test("asd"));
console.log(DRegex.test(" "));
console.log(DRegex.test("123"));
console.log(DRegex.test("123sad"));

// \D aceita tudo menos onde tem numeros

const sRegex = /\s/; 

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

// aceita espaços vazios, quebras de linha

const wRegex = /\w/; 

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));

// numeros e letras 