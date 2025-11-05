// crie uma lista de tarefas onde cada tarefa é um objeto 

class ListaTarefas {
    constructor() {
        this.tarefas = [];
        this.totalTarefas = 0;
    }
    addTarefa(id, descricao, prioridade) {
        let novaTarefa = {
            id: id,
            descricao: descricao,
            prioridade: prioridade
        };
        this.tarefas.push(novaTarefa);
        this.totalTarefas += 1;
        console.log("Tarefa adicionada!");
    }
    mostrarTarefa() {
        console.log(`O total de tarefas é ${this.totalTarefas}`);
        // usar o for para mostrar cada tarefa
        for(let i = 0; i < this.tarefas.length; i++) {
            console.log(`id = ${this.tarefas[i].id} | Descrição = ${this.tarefas[i].descricao} | Prioridade = ${this.tarefas[i].prioridade}`);
        }   
    }
    // posso usar o forEach em vez de for
    /*
    mostrarTarefa() {
        console.log(``O total de tarefas é ${this.totalTarefas});
        this.tarefas.forEach((tarefa) => {
            console.log(`id = ${tarefa.id} | Descrição = ${tarefa.descricao} | Prioridade = ${tarefa.prioridade}`)
            }
    }
    */
}

// adicionando 

let minhaLista = new ListaTarefas();
minhaLista.addTarefa(1,"Estudar JS", "Alta");
minhaLista.addTarefa(2, "Fazer Exercícios", "Média");
minhaLista.addTarefa(3, "Ler Documentação", "Baixa");

minhaLista.mostrarTarefa();