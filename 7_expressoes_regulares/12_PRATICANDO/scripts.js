// validando URL

const validarDominio = /[?www.]\w+\.com.br|.com/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.google.com.br"));
console.log(validarDominio.test("google.com.br"));

// validando Email 

const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("wesleyafonso@gmail.com"));

// validando Data de nascimento

const validarDataNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataNascimento.test("05/02/1996"));

// intervalos mais corretor = /[0-31]{2}[/][0-12]{2}[/][1960-2025]{4}/;