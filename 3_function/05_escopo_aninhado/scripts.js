let a = 10;

function multiplicar(x,y) {
    let a = x * y;

    if(a > 10) {
        let a = 0;

        console.log(a); // escopo do if
    }
    console.log(a); // escopo da function
}
console.log(a); // escopo global

multiplicar(3,7); // invocando a function

// treino escopo 

let i = 10;

const mult = function(num1,num2) {
    let i = num1 * num2;

    if(i > 50) {
        let i = 0;
        console.log(`Escopo do if = ${i}`);
    }
    console.log(`Escopo da function = ${i}`);
}
console.log(`Escopo global = ${i}`);

mult(3,25);