// criar funções para gerenciar uma lista de tarefas 

let tarefas = ["estudar JavaScript", "fazer exercícios", "ler documentação"];

// criar function para acrescentar uma tarefa ao final da lista

function adicionarTarefa(item) {
    tarefas.push(item);
    console.log(`A tafera "${item}" foi adicionada!`);
}

adicionarTarefa("Leitura de livros");

// remover tarefa 

function removerTarefas(lista) {
    let index = tarefas.indexOf(lista);
    if(index !== -1) {
        tarefas.splice(index, 1);
        console.log(`A tarefa "${lista}" foi removida`);
    }
}

removerTarefas("ler documentação");

// mostrar tarefas da lista 

function mostrarTarefas(lista) {
    for(let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

mostrarTarefas(tarefas);

// verificar tarefas 

function verificarTarefas(tarefa) {
    return tarefas.includes(tarefa);
}

verificarTarefas("Leitura de livros");

// total tarefas 

function totalTarefas() {
    return tarefas.length;
}

totalTarefas(tarefas);

// extra remover todas as tarefas da lista

function limparTarefas() {
    return tarefas.splice(0, tarefas.length);
}






