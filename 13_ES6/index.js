// var , let, const 
var antigo = 1;
let novo = 1;
const novo2 = 0;

// arrow function

const num = [1,2,3,4,5];

const maioNum = (num) => Math.max(...num);
// console.log(maioNum(num));

const menorNum = (num) => Math.min(...num);
// console.log(menorNum(num));

const soma = (a,b) => a + b;
// const saudacao = (nome) => "Olá, " + nome + "!";
// console.log(saudacao("Wesley")); 

// exercicios filter 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(numero => numero % 2 === 0);

const impares = numeros.filter((numero) => numero % 2 !== 0);

const maioresQue5 = numeros.filter((numero) => numero > 5);

const menorQue5 = numeros.filter((numero) => numero < 5);

const numero5 = numeros.filter((numero) => numero === 5);

// filter REAL

const garagem = [
    {
        id: 1,
        marca: "Volkswagen",
        modelo: "Golf GTI",
        ano: 2020
    },
    {
        id: 2,
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2023
    },
    {
        id: 3,
        marca: "Fiat",
        modelo: "Palio",
        ano: 2005
    },
    {
        id: 4,
        marca: "Ford",
        modelo: "Mustang",
        ano: 1969
    },
    {
        id: 5,
        marca: "Honda",
        modelo: "Civic",
        ano: 2024
    }
];

const carrosAntigos = garagem.filter((carro) => carro.ano <= 2000);
// console.log(carrosAntigos);

const carrosNovos = garagem.filter((carro) => carro.ano > 2000);
// console.log(carrosNovos);

const carrosHonda = garagem.filter((carro) => carro.marca === "Honda");
// console.log(carrosHonda);

// MAP 

const produtos = [
    {
        nome: "Notebook Gamer",
        preco: 5800.00,
        categoria: "Eletrônicos"
    },
    {
        nome: "Camiseta Algodão",
        preco: 85.50,
        categoria: "Vestuário"
    },
    {
        nome: "Mouse Sem Fio",
        preco: 120.00,
        categoria: "Eletrônicos"
    },
    {
        nome: "Calça Jeans",
        preco: 199.90,
        categoria: "Vestuário"
    },
    {
        nome: "Livro de JS",
        preco: 75.00,
        categoria: "Livros"
    }
];

// colocando na promoção 

produtos.map((produto) => {
    if(produto.categoria === "Eletrônicos") {
        produto.promocao = true;
    }
});

// console.log(produtos);

// destructuring 

const frutas = ["Frutas", "Laranja", "Mamão"];

const [f1,f2,f3] = frutas;

// console.log(f1);

// objeto

const products = {
    name: "Headset",
    price: 49.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name, price, category, color} = products

// console.log(`O nome do produto é ${name}, custa R$${price}, pertence a categoria ${category} e é da cor ${color}`);


// spred operator 

const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = [...a1,...a2]

// console.log(a3);

const a4 = [0,...a1, 4]; // colocou o a1 no a4


// Classes

class Products {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    productDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const camisaV = new Products("Camisa gola V", 20);

// console.log(camisaV.productDiscount(10));

// treinar FILTER / MAP 

