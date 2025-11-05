// function new construtora para Sistema de Conta bancaria 

function ContaBancaria(titular, numeroConta, saldo) {
    this.titular = titular;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
}

 ContaBancaria.prototype.depositar = function(valor) {
    if(valor > 0) {
        this.saldo += valor;
        console.log(`Valor adicionado, o saldo atual é ${this.saldo}`);
    } else {
        console.log("Esse valor não pode ser adicionado");
    }
 }

 ContaBancaria.prototype.sacar = function(valor) {
    if(valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Valor retirado, o saldo atual é ${this.saldo}`);
    } else {
        console.log("Esse valor não pode ser retirado");
    }
 }

 ContaBancaria.prototype.transferir = function(valor, contaDestino) {
    if(valor > 0 && valor <= this.saldo) {
    this.saldo -= valor;
    contaDestino.saldo += valor;
    console.log(`O valor transferido foi de ${valor} reais`);
    } else {
        console.log("Saldo insuficiente");
    }
 }

 ContaBancaria.prototype.consultarSaldo = function() {
    console.log(`Nome da conta: ${this.titular} | Número da conta: ${this.numeroConta} | Saldo: ${this.saldo}`);
 }

 // criando conta 
let contaWesley = new ContaBancaria("Wesley", 1040, 1000);

console.log(contaWesley);

// adicionando 500 reais nela 

contaWesley.depositar(500);

// reritando 300 reais nela

contaWesley.sacar(300);

// criando conta destino e transferindo 100

let contaDestino = new ContaBancaria("José", 2030, 500);

contaWesley.transferir(100, contaDestino);

// teste
console.log(contaWesley);
console.log(contaDestino);

// teste function para ver saldo

contaWesley.consultarSaldo();
contaDestino.consultarSaldo();













