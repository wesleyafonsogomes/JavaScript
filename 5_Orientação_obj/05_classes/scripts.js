let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log("Au Au");
    }
}

// cachorro é o molde para os proximos objetos 

let labrador = Object.create(cachorro);

labrador.latir();// pode usar o molde do seu prototype

labrador.raca = "Labrador";

console.log(labrador.raca); // raça do novo objeto criado
console.log(cachorro.raca); // raça do objeto original (prototype)

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.raca);

pastorAlemao.latir();


