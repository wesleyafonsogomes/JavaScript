const a = 1;
const b = -5;
const c = 6;
function calcularDelta(a,b,c) {
    return b**2 - 4 * a * c;
}

let delta = calcularDelta(a,b,c);

function mostraRaizes(delta) {
    if(Math.sqrt(delta) < 0) {
        console.log('Não há raízes reais');
    } else if(Math.sqrt(delta) == 0) {
        console.log('Há apenas uma raiz');
    } else {
        console.log('Há duas raízes diferentes');
    }
}


calcularX(delta);

function valorX1(delta,a,b) {
    return -b + Math.sqrt(delta) / 2*a;
}
function valorX2(delta,a,b) {
    return -b - Math.sqrt(delta) / 2*a;
}

