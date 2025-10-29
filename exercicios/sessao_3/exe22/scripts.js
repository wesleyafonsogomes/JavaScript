

function numeroPositivo(num) {
    if(num >= 0) {
        console.log(num);
    } else if(num < 0) {
        console.log(Math.abs(num));
    }
}

numeroPositivo(10);
numeroPositivo(-5);


function positiveNumber(num1) {
    if(num1 >= 0) {
        return num1
    } else if(num1 < 0) {
        return Math.abs(num1);
    } 
}

console.log(positiveNumber(10));
console.log(positiveNumber(-5));

// resolução 

function numeroPos(numNeg) {
    return Math.abs(numNeg);
}

console.log(numeroPos(10));
console.log(numeroPos(-5));


