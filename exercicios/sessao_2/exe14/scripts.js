// loop com for 0 a 50 marcando os pares

for(let i = 1; i <= 50; i = i + 1) {
    if(i % 2 == 0) {
        console.log(`${i} = par`);
        continue;
    } else {
        console.log(`${i} = impar`);
        continue;
    }
    console.log(i);
}