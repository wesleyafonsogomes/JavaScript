let arr = [1,2,3,4,5];
let arr2 = [];

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter pelo menos um elemento");
    } else {
        for(let i = 0; i < arr.length; i++) {
             console.log(i);
        }
       
    }
}

iterarArray(arr);
iterarArray(arr2);

// function para avisar que o array 2 não serve pq não tem nada