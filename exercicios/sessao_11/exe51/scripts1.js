// crie uma lista de tarefas onde cada tarefa é um objeto 

class ListaTarefas {
    constructor() {
        this.tarefas = []; // vazio no inicio
        this.totalTarefas = 0;
    }
    addTarefas(id, descricao, prioridade) {
        // cria um objeto com 3 propriedades
        let novatarefa = {
            id: id,
            descricao: descricao,
            prioridade: prioridade
        };
        // adiciona o objeto no array 
        this.tarefas.push(novatarefa);

        this.totalTarefas += 1;
        console.log("Tarefa adicionada!");
    }
    mostrarTarefa() {
        console.log(`O total de tarefas = ${this.totalTarefas}`);
        // for para mostrar cada tarefa 
        for(let i = 0; i < this.tarefas.length; i++) {
            console.log(`ID = ${this.tarefas[i].id} | Descrição = ${this.tarefas[i].descricao} | Prioridade = ${this.tarefas[i].prioridade}`);
        }
    }
}
// criar lista normal 
let minhaLista = new ListaTarefas();
minhaLista.addTarefas(1, "Estudar JS", "alta");
minhaLista.addTarefas(2, "Fazer Exercícios", "média");
minhaLista.addTarefas(3, "Ler Documentação", "baixa");


console.log(minhaLista);