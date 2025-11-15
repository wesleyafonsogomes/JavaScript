let lista = document.createElement('ul');



for(i = 0; i < 5;i++) {

    let item = document.createElement('li');

    let texto = document.createTextNode("Texto lista" +i);

    item.appendChild(texto);

    lista.appendChild(item);
}

// lista de 5 itens

let container = document.getElementById("container-principal");

container.appendChild(lista);





