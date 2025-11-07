// conta bancaria 

class ContaBancaria {
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
            console.log("Depósito efetuado com sucesso!");
        } else {
            console.log("Não foi possível realizar o depósito");
        }
    }
    sacar(valor) {
        if(valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            console.log("Saque efetuado com sucesso!");
        } else {
            console.log("Não foi possível realizar o depósito");
        }
    }
    consultarSaldo() {
        console.log(`Saldo = ${this.saldo}`);
    }
}

let contaWesley = new ContaBancaria(1, 2500);
contaWesley.consultarSaldo();

contaWesley.depositar(1000);
contaWesley.consultarSaldo();

contaWesley.sacar(500);
contaWesley.consultarSaldo();