const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter

const pares = numeros.filter((numero) => numero % 2 === 0);

const maioresQue5 = numeros.filter((numero) => numero > 5);

// map 

const precos = [10, 20, 30, 40, 50];

const precoDobrado = precos.map((preco) => preco * 2);

const desconto10 = precos.map((preco) => preco * 0.9)

const precosFormatados = precos.map((preco) =>  `R$ ${preco}`);

// combo 

const alunos = [
    { nome: "Wesley", nota: 8 },
    { nome: "Tony", nota: 5 },
    { nome: "Nego", nota: 7 },
    { nome: "Stark", nota: 4 }
];

const aprovados = alunos
.filter((aluno) => aluno.nota >= 6)
.map((aluno) => `${aluno} APROVADO`);


// produtos 

const produtos = [
    { nome: "Smartphone", preco: 1500, emEstoque: true },
    { nome: "Tablet", preco: 900, emEstoque: false },
    { nome: "Notebook", preco: 3000, emEstoque: true },
    { nome: "Fone de Ouvido", preco: 250, emEstoque: true },
    { nome: "Câmera", preco: 1200, emEstoque: false }
];

const produtosEmEstoque = produtos
.filter((produto)=> produto.emEstoque === true)
.map((produto) => `Nome do produto: ${produto.nome} | preço + 5% de taxa de serviço: ${produto.preco*1.05}`);


// usuarios 

const usuarios = [
    { nome: "Alice", idade: 22 },
    { nome: "Bruno", idade: 15 },
    { nome: "Carlos", idade: 30 },
    { nome: "Diana", idade: 17 },
    { nome: "Eduardo", idade: 25 }
];

const adultos = usuarios
.filter((usuario)=> usuario.idade >= 18)
.map((usuario) => `Usuário: ${usuario.nome.charAt(0)} | Dobro da idade: ${usuario.idade*2}`);

// console.log(adultos);

// reduce 

const carrinho = [
    { nome: "Camiseta", preco: 50.00, quantidade: 2 },
    { nome: "Calça Jeans", preco: 120.00, quantidade: 1 },
    { nome: "Meia", preco: 10.00, quantidade: 5 }
];

const totalCarrinho = carrinho.reduce((acumulador , atual) => {
    const subTotal = atual.preco * atual.quantidade;
    return acumulador + subTotal 
}, 0)



// funcionarios 

const funcionarios = [
    { nome: "Julia", departamento: "Vendas", salario: 3000, ativo: true },
    { nome: "Pedro", departamento: "Marketing", salario: 3500, ativo: true },
    { nome: "Ana", departamento: "Vendas", salario: 4500, ativo: true },
    { nome: "Rui", departamento: "Vendas", salario: 2000, ativo: false }, 
    { nome: "Sofia", departamento: "TI", salario: 6000, ativo: true }
];

const folhaSalarial = funcionarios
.filter((funcionario) => funcionario.ativo === true)
.reduce((acumulador, salarioAtual) => {
    const salarioBonus = salarioAtual.salario*1.10;
    return acumulador + salarioBonus;
}, 0)

console.log(folhaSalarial);

