const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const notaz = /[^a-z]/;

console.log(notaz.test("123 as"));
console.log(notaz.test("asdasfsadsafqasd"));

// o not retorna um true se verificar que não ha os valores indicados