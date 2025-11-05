// biblioteca de livros 

class Biblioteca {
    constructor() {
        this.livros = [];
        this.totalLivros = 0;
    }
    adicionarLivros(id, titulo, autor, ano) {
        let novoLivro = {
            id: id,
            titulo: titulo,
            autor: autor,
            ano: ano
        };
        this.livros.push(novoLivro);
        this.totalLivros += 1;
        console.log("Livro adicionado");
    }
    mostrarLivros() {
        console.log(`Total de livros: ${this.totalLivros}`);
        for(let i = 0; i < this.livros.length; i++) {
            console.log(`ID: ${this.livros[i].id} | Título: ${this.livros[i].titulo} | Autor: ${this.livros[i].autor} | Ano: ${this.livros[i].ano}`);
        }
        
    }
    buscarLivrosPorAutor(autor) {
        let livrosEncontrados = [];
        this.livros.forEach(livro => {
            if(livro.autor == autor) {
                livrosEncontrados.push(livro);
            }
            
        });
        if(livrosEncontrados.length > 0) {
            console.log(livrosEncontrados);
        } else {
            console.log("Nenhum livro foi encontrado");
        }
        return livrosEncontrados;
    }
}

// texte 

let meusLivros = new Biblioteca();
meusLivros.adicionarLivros(1, "João e Maria", "M.J", 1990);
meusLivros.adicionarLivros(2, "Parcy Jackson", "Raios", 1979);

meusLivros.mostrarLivros();
meusLivros.buscarLivrosPorAutor("Raios");


