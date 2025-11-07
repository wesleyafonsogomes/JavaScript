// classe de endereços

class Enderecos {
    constructor() {
        this.clientes = [];
    }
    addEndereco(rua, bairro, cidade, estado) {
        let novoCliente = {
            rua: rua,
            bairro: bairro,
            cidade: cidade,
            estado: estado
        };
        this.clientes.push(novoCliente);
        console.log("Cliente adicionado!");
    }
    attRua(ruaAntiga, ruaNova) {
        let encontrou = false;

        for(let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].rua === ruaAntiga) {
                this.clientes[i].rua = ruaNova;
                console.log("Rua atualizada!");
                
                encontrou = true;
                break;
            } 
        }
        if(!encontrou) {
            console.log("Rua não encontrada");
        }
    }
    attBairro(bairroAntigo, bairroNovo) {
        let encontrou = false;

        for(let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].bairro === bairroAntigo) {
                this.clientes[i].bairro = bairroNovo;
                console.log("Bairro atualizado!");

                encontrou = true;
                break;
            }
        }
        if(!encontrou) {
            console.log("Bairro não encontrado!");
        }
    }
    attCidade(cidadeAntiga, cidadeNova) {
        let encontrou = false;

        for(let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].cidade === cidadeAntiga) {
                this.clientes[i].cidade = cidadeNova;
                console.log("Cidade Atualizada!");

                encontrou = true;
                break;
            }
        }
        if(!encontrou) {
            console.log("Cidade não encontrada!");
        }
    }
    attEstado(estadoAntigo, EstadoNovo) {
        let encontrou = 0;

        for(let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].estado === estadoAntigo) {
                this.clientes[i].estado = EstadoNovo;
                console.log("Estado atualizado!");

                encontrou = 1;
                break;
            }
        }
        if(encontrou == 0) {
            console.log("Estado não encontrado!");
        }
    }
}

let meusEnderecos = new Enderecos();

meusEnderecos.addEndereco("Quintino Bocaiúva", "Cruzeiro", "Bambuí", "MG");

console.log(meusEnderecos);

meusEnderecos.attRua("Quintino Bocaiúva", "Juvenildo João");

console.log(meusEnderecos);

meusEnderecos.attBairro("Cruzeiro", "Cerrado");

meusEnderecos.attCidade("Bambuí", "Londrina");

meusEnderecos.attEstado("MG", "PR");

console.log(meusEnderecos);

// poderia utilizar Set e Get 

class Casas {
    constructor(comodos, quartos, banheiros) {
        this.comodos = comodos;
        this.quartos = quartos;
        this.banheiros = banheiros;
    }
    set newComodo(newComodo) {
        this.comodos = newComodo;
}
    
}


let casaWesley = new Casas(6, 2, 1);
let CasaMarluce = new Casas(10, 4, 2);

console.log(casaWesley);
console.log(CasaMarluce);

casaWesley.newComodo = 30;
CasaMarluce.newComodo = 50;

console.log(casaWesley);
console.log(CasaMarluce);

