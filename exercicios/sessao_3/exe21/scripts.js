

function detectarDado(dado) {
    if(typeof dado === 'number') {
        console.log('Esse dado é um number');
    } else if(typeof dado === 'string') {
        console.log('Esse dado é uma string');
    } else if(typeof dado === 'boolean') {
        console.log('Esse dado é um boolean');
    } else {
        console.log('Outro tipo');
    }
}

detectarDado(10);
detectarDado('Wesley');
detectarDado(true);


