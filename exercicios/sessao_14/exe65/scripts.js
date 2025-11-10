// regex para validar apenas letras maiúsculas 

let apenasMaiusculas = /^[A-Z]+$/;

// console.log(apenasMaiusculas.test("Wesley"));
// console.log(apenasMaiusculas.test("WESLEY"));


// strings terminadas com ID

let validarStringID = /^\d{3}ID$/;
let validarStringID2 = /\d+ID\b/;

// console.log(validarStringID.test("555ID"));
// console.log(validarStringID2.test("555555ID"));

let validarMarcas = /\w+: (Nike|Adidas|Puma|Asics)/;

// console.log(validarMarcas.test("Nome: Nike"));
// console.log(validarMarcas.test("Nome: Football"));

let validarEnderecosIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

// console.log(validarEnderecosIP.test("127.0.0.1"));

let validarNomeUsuario = /^[\w\-]{3,16}$/

console.log(validarNomeUsuario.test("Wesley_123"));
console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("11111111111111111111111"));
