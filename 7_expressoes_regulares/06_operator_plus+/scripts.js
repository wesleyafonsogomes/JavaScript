const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("adsada"));

// qualquer quantidade de numeros 

console.log(umOuMaisNumeros.test("1518123132134"));