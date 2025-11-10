// deixa um digito padrao 

const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

const padrao2 = /\d+\w?/
// é um digito e pode onter um alfanumerico

console.log(padrao2.test("123"));
console.log(padrao2.test("123asd"));

