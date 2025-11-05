// simulando conta de banco com saldo, saque
// depois testar os metodos 

class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }
    saque(valor) {
        if(valor > 0 && (this.saldo - valor) >= 0) {
            this.saldo -= valor;
            console.log(`Saque efetuado! Valor restante = ${this.saldo}`);
        } else {
            console.log("Valor insuficiente");
        }
    }
    deposito(valor) {
        if(valor > 0) {
        this.saldo += valor;
        console.log(`Deposito efetuado! Seu saldo é de ${this.saldo}`);
        } else {
            console.log("Não foi possivel efetuar o depósito");
        }
    }
}

let contaWesley = new Conta(1000);

console.log(contaWesley);

contaWesley.saque(500);
contaWesley.deposito(1500);