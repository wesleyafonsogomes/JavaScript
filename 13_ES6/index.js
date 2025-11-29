// var , let, const 
var antigo = 1;
let novo = 1;
const novo2 = 0;

// arrow function

const soma = (a,b) => a + b;

const divisao = (a,b) => a / b;

const saudacao = (nome) => {
    console.log("Olá, " + nome);
}

const dobrar = (a,b) => (a + b)*2;

const falar = () => {
    return "Oi, eu sou uma arrow function"
}

// retornar array de objetos

const carros = () => [{id: 1, marca: "Ferrari"}, {id:2, marca: "Jeep"}, {id:3, marca: "Maveric"}];

// Treino 

const arrow1 = () => console.log("teste arrow");

const arrow2 = () => {return "teste arrow2"}

const arrow3 = (a,b) => (a + b) / 3

// Filter 

const arr = [1,2,3,4,5,6,7,8,9];

const hightNumbers = arr.filter((num) => {
    if(num >= 5) {
        return num;
    }
});


const lowNumbers = arr.filter((num) => {
    if(num < 5) {
        return num;
    }
});

const pares = arr.filter((num) => {
    if(num % 2 == 0) {
        return num;
    }
});


const impares = arr.filter((num) => {
    if(num % 2 !== 0) {
        return num;
    }
});

// array de obj

const alunos = [
    {nome: "Wesley", disponivel: true},
    {nome: "Maria", disponivel: false},
    {nome: "João", disponivel: false},
    {nome: "Nayara", disponivel: true},
    {nome: "Nathalia", disponivel: false}
];

const alunosDisponiveis = alunos.filter((aluno) => aluno.disponivel);

// console.log(alunosDisponiveis);

const alunosIndisponiveis = alunos.filter((aluno) => !aluno.disponivel);

// console.log(alunosIndisponiveis);

const alunoWesley = alunos.filter((aluno) => aluno.nome === "Wesley");

console.log(alunoWesley);




