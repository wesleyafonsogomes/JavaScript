// verificar se o número é primo;

let num = 41;
let divisoes = 0;
const maxNumber = 1000

if(num <= maxNumber) {
    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
        divisoes++;
        }
    }

        if(divisoes == 2) {
            console.log(`O número ${num} é primo`);
        } else {
            console.log(`O número ${num} não é primo`)
        }
    } else {
        console.log(`O valor de ${num} está acima de ${maxNumber}`);
    }
