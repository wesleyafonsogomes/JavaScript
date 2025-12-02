const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maioresQue5 = numeros.filter(numero => numero >= 5);

const multPor3 = numeros.map(numero => numero*3);

const filtroPar = numeros
.filter(numero => numero % 2 === 0)
.map(numero => numero*2);

// 

const produtos = [
    { nome: "Mouse", preco: 50, categoria: "Informática", estoque: 10 },
    { nome: "Teclado", preco: 120, categoria: "Informática", estoque: 5 },
    { nome: "Monitor", preco: 800, categoria: "Informática", estoque: 0 },
    { nome: "Cadeira Gamer", preco: 1200, categoria: "Móveis", estoque: 3 },
    { nome: "Mousepad", preco: 30, categoria: "Informática", estoque: 15 }
];

const produtosInfo = produtos.filter(produto => produto.categoria === "Informática");

const bonus = produtos.map(produto => produto.preco*0.90)

const produtosEmEstoque = produtos
.filter( produto => produto.estoque > 0)
.map((produto) => ({nome: produto.nome, preco: produto.preco}));

const totalEstoque = produtos.reduce((acumulador, value) => {
    const subTotal = value.preco*value.estoque;
    
    return acumulador + subTotal
}, 0)

// avançado 

const vendas = [
    { id: 1, produto: "Notebook", valor: 3000, vendedor: "Ana", mes: "Janeiro" },
    { id: 2, produto: "Mouse", valor: 50, vendedor: "Bruno", mes: "Janeiro" },
    { id: 3, produto: "Teclado", valor: 120, vendedor: "Ana", mes: "Janeiro" },
    { id: 4, produto: "Monitor", valor: 800, vendedor: "Carlos", mes: "Fevereiro" },
    { id: 5, produto: "Cadeira", valor: 1200, vendedor: "Ana", mes: "Fevereiro" },
    { id: 6, produto: "Webcam", valor: 250, vendedor: "Bruno", mes: "Fevereiro" }
];


// soma de vendas da ana 

const vendasAna = vendas
.filter( venda => venda.vendedor === "Ana")
.reduce((acumulador, venda) => {
    const subTotal = venda.valor

    return acumulador + subTotal;
}, 0)

const vendasJaneiro = vendas
.filter(venda => venda.mes === "Janeiro")
.map(venda => venda.valor*0.05)
.reduce((acumulador, comissao) => acumulador + comissao, 0);

// desafio 

const vendasPorVendedor = vendas.reduce((acumulador, venda) => {

    const vendedor = venda.vendedor;

    // se vendedor não existe no acumulador, cria com 0
    if(!acumulador[vendedor]) {
        acumulador[vendedor] = 0;
    }

    // soma o valor da venda 
    acumulador[vendedor] += venda.valor

    return acumulador;

}, {});

