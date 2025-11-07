// conta no banco 

class Conta {
    constructor(saldoPoupanca, saldoCorrente, jurosPoupanca) {
        this.saldoPoupanca = saldoPoupanca;
        this.saldoCorrente = saldoCorrente;
        this.jurosPoupanca = jurosPoupanca;
    }
    depositoPoupanca(valor) {
        if(valor > 0) {
            this.saldoPoupanca += valor;
            console.log("O valor foi depositado a conta poupança");
        } else {
            console.log("Não foi possivel realizar o depósito");
        }
    }
    depositoCorrente(valor) {
        if(valor > 0) {
            this.saldoCorrente += valor;
            console.log("O valor foi depositado a conta corrente");
        } else {
            console.log("Não foi possivel realizar o depósito");
        }
    }
    saquePoupanca(valor) {
        if(this.saldoPoupanca >= 0 && valor > 0) {
            this.saldoPoupanca -= valor;
            console.log(`O valor de ${valor} foi sacado da sua conta poupança. Valor atual = ${this.saldoPoupanca}`);
        } else {
            console.log("Não foi possivel realizar o saque");
        }
    }
    saqueCorrente(valor) {
        if(this.saldoCorrente >= 0 && valor > 0) {
            this.saqueCorrente -= valor;
            console.log(`O valor de ${valor} foi sacado da sua conta corrente. Valor atual = ${this.saldoCorrente}`);
        } else {
            console.log("Não foi possivel realizar o saque");
        }
    }
    transferencia(valor) {
        this.saldoCorrente -= valor; 
        this.saldoPoupanca += valor;
    }
    jurosAniversario() {
        let juros = this.saldoPoupanca * this.jurosPoupanca / 100 // valor em porcent
        this.saldoPoupanca += juros;
    }
    
}

let contaWesley = new Conta(2000, 1000, 5);
console.log(contaWesley);

contaWesley.depositoPoupanca(500);
contaWesley.depositoCorrente(500);
console.log(contaWesley);

contaWesley.saquePoupanca(1000);
contaWesley.saqueCorrente(1000);
console.log(contaWesley);

class ContaEspecial extends Conta {
    constructor(saldoPoupanca, saldoCorrente, jurosPoupanca) {
        super(saldoPoupanca, saldoCorrente);
        this.jurosPoupanca = 2*jurosPoupanca;
    }
}

let contaWesleyEspecial = new ContaEspecial(5000, 4000, 5);
console.log(contaWesleyEspecial);

contaWesley.jurosAniversario();
console.log(contaWesley);