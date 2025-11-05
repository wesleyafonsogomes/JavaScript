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
    attRua() {
        
    }
}

let meusEnderecos = new Enderecos();

meusEnderecos.addEndereco("Quintino Bocaiúva", "Cruzeiro", "Bambuí", "MG");

console.log(meusEnderecos);

meusEnderecos.attRua("Jovelindo João", "Quintino Bocaiúva");

console.log(meusEnderecos);