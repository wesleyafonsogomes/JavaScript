// livro em um sistema de biblioteca

class Livro {
    constructor() {
        this.livros = [];
    }
    addLivro(titulo, autor, disponivel) {
        let novoLivro = {
            titulo: titulo,
            autor: autor,
            disponivel: disponivel
        };
        this.livros.push(novoLivro);
    }
    emprestar(titulo) {
        for(let i = 0; i < this.livros.length; i++) {
            if(this.livros[i].titulo === titulo && this.livros[i].disponivel === true) {
                this.livros[i].disponivel = false;
                console.log(`Livro ${titulo} emprestado`);
                return; 
            }
        }
        console.log(`Livro ${titulo}, não está disponivel`);
    }
    devolver(titulo) {
        for(let i = 0; i < this.livros.length; i++) {
            if(this.livros[i].titulo === titulo && this.livros[i].disponivel === false) {
                this.livros[i].disponivel = true;
                console.log(`Livro ${titulo} devolvido`);
                return;
            }
        }
        console.log(`Livro ${titulo} não está disponivel!`);
    }
    disponibilidade(titulo) {
        for(let i = 0; i < this.livros.length; i++) {
            if(this.livros[i].titulo === titulo) {
            return this.livros[i].disponivel;
            }
        }
        return null;
    }
}

let meusLivros = new Livro();
meusLivros.addLivro("Origem", "Leonardo Di", true);

console.log(meusLivros);

meusLivros.emprestar("Origem");

console.log(meusLivros);

meusLivros.devolver("Origem");

console.log(meusLivros);

console.log(meusLivros.disponibilidade("Origem"));

