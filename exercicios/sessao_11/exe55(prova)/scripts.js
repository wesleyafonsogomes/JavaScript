// Sistema de Playlist de Músicas

class Playlist {
    constructor() {
        this.musicas = [];
        this.quantidadeTotal = 0;
        this.duracaoTotal = 0;
    }
    addMusica(id, titulo, artista, duracao) {
        let novaMusica = {
            id: id,
            titulo: titulo,
            artista: artista,
            duracao: duracao
        };
        this.musicas.push(novaMusica);
        this.quantidadeTotal += 1;
        this.duracaoTotal += duracao;

        console.log("Música adicionada!");
    }
    removerMusica(id) {
        let encontrou = false;
        for(let i = 0; i < this.musicas.length; i++) {
            if(this.musicas[i].id === id) {
                this.musicas.splice(i,1);
                this.duracaoTotal -= this.musicas[i].duracao;
                this.quantidadeTotal -= 1;

                encontrou = true;
                console.log("Música removida!");
                break;
            }
            
        }
        if(!encontrou) { 
            console.log("Música não encontrada!");
        }

    }
    buscarPorArtista(artista) {
        let encontrou = false;
        let musicasArtista = [];
        for(let i = 0; i < this.musicas.length; i++) {
            
            if(this.musicas[i].artista === artista) {
                musicasArtista.push(this.musicas[i]);
                
                encontrou = true;
                console.log(musicasArtista);   
            }
        }
                
        if(!encontrou) {
            console.log("Nenhuma música encontrada");
        }
    }
    mostrarPlaylist() {
        this.musicas.forEach(musicas => {
            console.log(`ID: ${musicas.id} | Título: ${musicas.titulo} | Artista: ${musicas.artista} | Duração: ${musicas.duracao}`);
        });
    }
    duracaoPlaylist() {
        console.log(`Duração total da Playlist: ${this.duracaoTotal} minútos`);
    }
    musicaMaisLonga() {
        const duracaoMaxima = Math.max(...this.musicas.map(musicas => musicas.duracao));
        const musicaLonga = this.musicas.find(musicas => musicas.duracao === duracaoMaxima);
        if(musicaLonga) {
            console.log(`A música mais longa é: ${musicaLonga.titulo} - ${musicaLonga.artista} (${musicaLonga.duracao} min)`);
        } else {
            console.log("Nenhuma música foi encontrada");
        }
    }
}


let minhaPlaylist = new Playlist();

minhaPlaylist.addMusica(1, "Bohemian Rhapsody", "Queen", 6);
minhaPlaylist.addMusica(2, "Stairway to Heaven", "Led Zeppelin", 8);
minhaPlaylist.addMusica(3, "Imagine", "John Lennon", 3);
minhaPlaylist.addMusica(4, "Hotel California", "Eagles", 7);
minhaPlaylist.addMusica(5, "Love of My Life", "Queen", 4);

// adicionando OK

minhaPlaylist.mostrarPlaylist();

// mostrar OK

minhaPlaylist.buscarPorArtista("Queen");
minhaPlaylist.buscarPorArtista("Beatles");

// busca por artista OK

minhaPlaylist.duracaoPlaylist();

// duração da playlist OK

minhaPlaylist.removerMusica(3);
minhaPlaylist.removerMusica();
minhaPlaylist.removerMusica(99);

// testar denovo, não esta retornando 

minhaPlaylist.musicaMaisLonga();




