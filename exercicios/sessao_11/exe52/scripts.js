// criar uma blibioteca para gerenciar livros

class Biblioteca {
    constructor() {
        this.listaDeLivros = [];
    }
    adicionarLivros(titulo, autor, ano) {
        let novoLivro = {
            titulo: titulo,
            autor: autor,
            ano: ano
        };
        this.listaDeLivros.push(novoLivro);
        console.log("Livro adicionado!");
    }
    buscarLivrosPorAutor(autor) {
        
        return this.listaDeLivros.filter(livro => livro.autor == autor);

        /*
        let livrosEncontrados = [];
          this.listaDeLivros.forEach(livro => {
            if(livro.autor == autor) {
                livrosEncontrados.push(livro); 
            }
            
         });
         return livrosEncontrados;
     
    


        // verificador 
        */
        /*
        let encontrou = false;
        for(let i = 0; i < this.listaDeLivros.length; i++) {
            if(this.listaDeLivros[i].autor == autor) {
                console.log(`Título: ${this.listaDeLivros[i].titulo} | Autor: ${this.listaDeLivros[i].autor} | Ano: ${this.listaDeLivros[i].ano}`);
                encontrou = true;
            } 


        }
        if(!encontrou) {
            console.log("Livro não encontrado");
        }
            */
           
    }
    totalLivros() {
        console.log(this.listaDeLivros.length);
    }
}

// adicionando livro 

let minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivros("O Senhor dos Aneis", "J.R.R Tolkien", 1954);
minhaBiblioteca.adicionarLivros("Fundação", "Isaac Asimov", 1951);
minhaBiblioteca.adicionarLivros("1984", "George Orwell", 1949);
minhaBiblioteca.adicionarLivros("Eu, robo", "Isaac Asimov", 1948);

// buscar livro por autor 

const livroDoIsaac = minhaBiblioteca.buscarLivrosPorAutor("Isaac Asimov");

console.log(livroDoIsaac);
