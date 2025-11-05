// class em ES6 para sistema de alunos 

class Aluno {
    constructor(nome, matricula, nota) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota = nota;
    }
    adicionarPontos(pontos) {
        if(pontos > 0 && this.nota + pontos <= 10) {
            this.nota += pontos;
            console.log(`Pontos adicionados, a nota atual é ${this.nota}`);
        } else {
            console.log("Não é possivel adicionar essa nota");
        }
    }
    removerPontos(pontos) {
        if(pontos > 0 && (this.nota - pontos) >= 0) {
            this.nota -= pontos;
            console.log(`Pontos removidos, a nota atual é ${this.nota}`);
        } else {
            console.log("Não é possivel remover essa nota");
        }
    }
    transferirPontos(pontos, alunoDestino) {
        if(this.nota - pontos >= 0 && (alunoDestino.nota + pontos) <= 10) {
            this.nota -= pontos;
            alunoDestino.nota += pontos;
            console.log(`O valor de ${pontos} foi transferido`)
        } else {
            console.log("O valor não pode ser transferido");
        }
    }
    mostrarInfo() {
        console.log(`Nome: ${this.nome} | Matrícula: ${this.matricula} | Nota: ${this.nota}`);
    }
}

// teste para adicionar pontos

let alunoWesley = new Aluno("Wesley", 10300, 5);

console.log(alunoWesley);

alunoWesley.adicionarPontos(3);

console.log(alunoWesley);

// removendo nota

alunoWesley.removerPontos(6); 

console.log(alunoWesley); // ficará com 2

// transferindo nota

let alunoDestino = new Aluno("Aline", 9030, 7);

console.log(alunoDestino);

alunoWesley.transferirPontos(1, alunoDestino);

console.log(alunoDestino);
console.log(alunoWesley);

alunoWesley.mostrarInfo();
alunoDestino.mostrarInfo();







